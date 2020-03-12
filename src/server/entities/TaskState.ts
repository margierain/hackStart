import 'reflect-metadata';
import {
  ObjectType,
  Field,
  ID,
  Mutation,
  Resolver,
  Query,
  Arg,
  Ctx,
  registerEnumType,
} from 'type-graphql';
import { Context, HasuraClient } from 'server/entities/types';
import { NonFunctionProperties } from 'server/utils';

import {
  tasks_status_enum as TS,
  task_reviews_status_enum as TRS,
} from 'lib/graphql/roles/admin/generated/globalTypes';
import {
  fetchTask,
  fetchTask_tasks as Task,
  fetchTaskVariables,
} from 'lib/graphql/roles/admin/generated/fetchTask';
import {
  fetchTaskAndReviewsVariables,
  fetchTaskAndReviews,
} from 'lib/graphql/roles/admin/generated/fetchTaskAndReviews';
import {
  updateTaskStateForReview,
  updateTaskStateForReviewVariables,
} from 'lib/graphql/roles/admin/generated/updateTaskStateForReview';
import {
  updateTaskState,
  updateTaskStateVariables,
} from 'lib/graphql/roles/admin/generated/updateTaskState';
import {
  updateTaskStateToComplete,
  updateTaskStateToCompleteVariables,
} from 'lib/graphql/roles/admin/generated/updateTaskStateToComplete';
import { timeDoctorApiRequest, GraphqlClient } from 'server/utils';
import moment from 'moment';
import {
  updateTaskTimeLogs,
  updateTaskTimeLogsVariables,
} from 'lib/graphql/roles/admin/generated/updateTaskTimeLogs';
import {
  insertTaskTimeLogs,
  insertTaskTimeLogsVariables,
} from 'lib/graphql/roles/admin/generated/insertTaskTimeLogs';
import { captureException } from 'lib/sentry';
import { taskStateChanges } from 'lib/states';
import {
  UPDATE_TASK_TIME_LOGS,
  INSERT_TIME_LOGS,
  UPDATE_TASK_STATE_FOR_REVIEW,
  UPDATE_TASK_STATE_TO_COMPLETE,
  UPDATE_TASK_STATE,
} from 'lib/graphql/roles/admin/mutations';
import {
  FETCH_TASK,
  FETCH_TASK_AND_REVIEWS,
} from 'lib/graphql/roles/admin/queries';

const stateErrors: {
  name: string;
  condition: (t: Task) => boolean;
  appliesTo?: TS[];
  appliesToNot?: TS[];
}[] = [
  {
    name: 'Task needs to be assigned a developer',
    condition: t => !!t.developerByDeveloperid,
    appliesToNot: [TS.available, TS.cancelled],
  },
  {
    name: 'Task can not be made available while developer is still linked',
    condition: t => !t.developerByDeveloperid,
    appliesTo: [TS.available],
  },
  {
    name: 'Task needs to be assigned a cost',
    condition: t => !!t.costInUSD,
    appliesToNot: [TS.backlog, TS.cancelled],
  },
  {
    name: 'Task needs to have PR link set first',
    condition: t => !!t.prLink,
    appliesTo: [
      TS.internal_review,
      TS.passed_internal_review,
      TS.client_review,
      TS.needs_changes,
      TS.finished,
    ],
  },
];

registerEnumType(TS, {
  name: 'TaskStateType',
});

@ObjectType('PossibleTaskState')
class PossibleTaskState {
  constructor({ state, error }: NonFunctionProperties<PossibleTaskState>) {
    this.state = state;
    this.error = error;
  }

  @Field(() => TS)
  state: TS;

  @Field(() => String, { nullable: true })
  error?: string;
}

const getPossibleStates = (task: Task): PossibleTaskState[] =>
  taskStateChanges[task.status || TS.backlog].map(
    st =>
      new PossibleTaskState({
        state: st,
        error: stateErrors
          .filter(({ condition, appliesTo, appliesToNot }) => {
            if (appliesTo && appliesTo.indexOf(st) === -1) {
              return false;
            }

            if (appliesToNot && appliesToNot.indexOf(st) !== -1) {
              return false;
            }

            if (condition(task)) {
              return false;
            }

            return true;
          })
          .map(se => se.name)[0],
      })
  );

const fetchTimeDoctorUsersUrl = async (
  client: GraphqlClient,
  joinedEmails?: string
) => {
  return await (
    await timeDoctorApiRequest(
      client,
      '/users',
      'GET',
      {},
      {
        emails: joinedEmails,
      }
    )
  ).json();
};

const createTimeDoctorTask = async (
  client: GraphqlClient,
  userId: number,
  taskName: string
) => {
  const { id } = await (
    await timeDoctorApiRequest(client, `/users/${userId}/tasks`, 'POST', {
      task: {
        task_name: taskName,
      },
    })
  ).json();

  return id;
};

const getTimeDoctorWorkLogs = async (
  client: GraphqlClient,
  taskIds: string,
  start_date: string
): Promise<{ length: number; work_mode: number; task_id: string }[]> => {
  const {
    worklogs: { items },
  } = await (
    await timeDoctorApiRequest(
      client,
      `/worklogs`,
      'GET',
      {},
      {
        task_ids: taskIds,
        start_date: start_date,
        end_date: moment(new Date(), 'YYYY-MM-DD').format('YYYY-MM-DD'),
      }
    )
  ).json();

  return items;
};

const finishTaskTimeLogs = async (
  client: HasuraClient,
  taskId: number,
  timeDocterTaskId: string,
  timeSpent: number
) => {
  await client.mutate<updateTaskTimeLogs, updateTaskTimeLogsVariables>({
    mutation: UPDATE_TASK_TIME_LOGS,
    variables: {
      id: taskId,
      timeDocterTaskId: timeDocterTaskId,
      timeSpent: timeSpent,
      finishedAt: new Date().toISOString(),
    },
  });
};

const updateTimeDocterTaskStatus = async (
  client: GraphqlClient,
  user_id: number,
  timedocter_task_id: string,
  task_status: 0 | 1 | 2
) => {
  const worklogs = await timeDoctorApiRequest(
    client,
    `/users/${user_id}/task/${timedocter_task_id}`,
    'PUT',
    {
      task: {
        status: task_status,
      },
    }
  );

  return worklogs;
};

@ObjectType('TaskState')
export class TaskState {
  constructor({
    taskId,
    possibleStates,
    state,
  }: NonFunctionProperties<TaskState>) {
    this.taskId = taskId;
    this.possibleStates = possibleStates;
    this.state = state;
  }

  @Field(() => ID)
  taskId: number;

  @Field(() => TS)
  state: TS;

  @Field(() => [PossibleTaskState])
  possibleStates: PossibleTaskState[] = [];

  static async getTaskState(
    { hasuraClient: client }: Context,
    taskId: number
  ): Promise<TaskState> {
    const result = await client.query<fetchTask, fetchTaskVariables>({
      query: FETCH_TASK,
      variables: { id: taskId },
    });

    const { tasks } = result.data;

    if (!tasks.length) {
      throw new Error('task not found');
    }

    const task = tasks[0];

    const possibleStates = getPossibleStates(task);

    return new TaskState({
      taskId: taskId,
      possibleStates,
      state: task.status || TS.backlog,
    });
  }

  static async updateTaskState(
    { hasuraClient: client, req, res }: Context,
    taskId: number,
    updatedState: TS
  ): Promise<TaskState> {
    let timeDoctorUsers: {
      users?: {
        id: number;
        length: number;
        email: string;
      }[];
    } = { users: [] };
    try {
      timeDoctorUsers = await fetchTimeDoctorUsersUrl(client);
    } catch (ex) {
      captureException(ex, { req, res });
    }

    const tasksAndReviews = await client.query<
      fetchTaskAndReviews,
      fetchTaskAndReviewsVariables
    >({
      query: FETCH_TASK_AND_REVIEWS,
      variables: { id: taskId },
    });

    const timeDoctorUsersById: {
      [key: string]: {
        id: number;
        length: number;
        email: string;
      };
    } = (timeDoctorUsers.users || []).reduce(
      (
        map: typeof timeDoctorUsersById,
        user: typeof timeDoctorUsersById['']
      ) => {
        return { ...map, [user.id]: user };
      },
      {}
    );

    const { tasks } = tasksAndReviews.data;

    if (!tasks.length) {
      throw new Error('task not found');
    }

    const {
      task_reviews: taskReviews,
      task_time_logs: taskTimeLogs,
      ...task
    } = tasks[0];

    const possibleStates = getPossibleStates(task);
    const st = updatedState;
    if (!st) {
      throw new Error(`Invalid State: ${st}`);
    }

    const stateChange = possibleStates.find(st => st.state === updatedState);
    if (!stateChange) {
      throw new Error(`State change not allowed: ${updatedState}`);
    }

    if (stateChange.error) {
      throw new Error(`State change failed: ${stateChange.error}`);
    }

    // generate a new task time log
    if (
      ['finished', 'cancelled', 'available', 'backlog'].indexOf(
        updatedState
      ) === -1 &&
      task.developerByDeveloperid &&
      !taskTimeLogs.some(
        tasktimelog =>
          tasktimelog.developer.id ===
          (task.developerByDeveloperid && task.developerByDeveloperid.id)
      )
    ) {
      const tdUserId = task.developerByDeveloperid.user.timedoctor_user?.sid;

      if (!tdUserId || !timeDoctorUsersById[tdUserId]) {
        captureException(
          Error(
            'Can not find timedoctor user url for: ' +
              task.developerByDeveloperid.user.user_emails[0].email
          ),
          { req, res }
        );
      } else {
        const user = timeDoctorUsersById[tdUserId];

        const timeDocterTaskId = await createTimeDoctorTask(
          client,
          user.id,
          `${task.ticketCode}-${task.id}`
        );
        await client.mutate<insertTaskTimeLogs, insertTaskTimeLogsVariables>({
          mutation: INSERT_TIME_LOGS,
          variables: {
            id: taskId,
            timeDocterTaskId: `${timeDocterTaskId}`,
            developerId: task.developerByDeveloperid.id,
            startedAt: new Date().toISOString(),
            createdDateColumn: new Date().toISOString(),
            updatedDateColumn: new Date().toISOString(),
          },
        });
      }
    }

    // generate a new review task, if its put up for review (and there is no existing review task ready to start)
    if (
      stateChange.state === TS.internal_review &&
      !taskReviews.find(
        r => r.status && [TRS.assigned, TRS.available].indexOf(r.status) !== -1
      )
    ) {
      const result = await client.mutate<
        updateTaskStateForReview,
        updateTaskStateForReviewVariables
      >({
        mutation: UPDATE_TASK_STATE_FOR_REVIEW,
        variables: {
          taskId: task.id,
          reviewCost: task.costInUSD * 0.2,
          managerId: task.managerId,
          reviewerId: task.reviewerId,
          reviewStatus: task.reviewerId ? TRS.assigned : TRS.available,
          updatedAt: new Date().toJSON(),
        },
      });

      const updatedTask = result.data!.update_tasks!.returning[0];

      return new TaskState({
        possibleStates: getPossibleStates(updatedTask),
        state: updatedTask.status || TS.backlog,
        taskId,
      });
    }

    if ([TS.cancelled, TS.finished].indexOf(stateChange.state) !== -1) {
      if (
        taskTimeLogs &&
        taskTimeLogs.length &&
        !!task.developerByDeveloperid
      ) {
        const timeDoctorTaskIds = taskTimeLogs
          .map(log => log.timedoctorTaskId)
          .join(',');
        const { startedAt } = taskTimeLogs.reduce(
          (o, r) =>
            moment(o.startedAt).format('YYYY-MM-DD') <
            moment(r.startedAt).format('YYYY-MM-DD')
              ? o
              : r,
          taskTimeLogs[0]
        );
        const timeLogTaskDetails = await getTimeDoctorWorkLogs(
          client,
          timeDoctorTaskIds,
          moment(startedAt).format('YYYY-MM-DD')
        );

        taskTimeLogs.forEach(tk => (tk.timeSpent = 0));
        timeLogTaskDetails
          .filter(td => td.work_mode !== 4 && td.work_mode !== 5)
          .forEach(td => {
            const timeTaskLog = taskTimeLogs.find(
              tl => tl.timedoctorTaskId === td.task_id
            );
            if (timeTaskLog) {
              timeTaskLog.timeSpent = (timeTaskLog.timeSpent || 0) + td.length;
            }
          });

        await Promise.all([
          taskTimeLogs.map(async tk => {
            const tdUserId = tk.developer.user.timedoctor_user?.sid;
            const user = !tdUserId ? null : timeDoctorUsersById[tdUserId];
            if (!user) {
              captureException(
                new Error(
                  'Can not find timedoctor user url for: ' +
                    tk.developer.user.user_emails[0].email
                ),
                { req, res }
              );
              return Promise.resolve();
            } else {
              return Promise.all([
                updateTimeDocterTaskStatus(
                  client,
                  user.id,
                  tk.timedoctorTaskId,
                  // 0: in-active, 1: active, 2: completed
                  2
                ),
                finishTaskTimeLogs(
                  client,
                  task.id,
                  tk.timedoctorTaskId,
                  tk.timeSpent
                ),
              ]);
            }
          }),
        ]);
      }

      const result = await client.mutate<
        updateTaskStateToComplete,
        updateTaskStateToCompleteVariables
      >({
        mutation: UPDATE_TASK_STATE_TO_COMPLETE,
        variables: {
          taskId: task.id,
          taskStatus: stateChange.state,
          completedAt: new Date().toJSON(),
        },
      });

      const updatedTask = result.data!.update_tasks!.returning[0];
      return new TaskState({
        possibleStates: getPossibleStates(updatedTask),
        state: updatedTask.status || TS.backlog,
        taskId,
      });
    }
    const result = await client.mutate<
      updateTaskState,
      updateTaskStateVariables
    >({
      mutation: UPDATE_TASK_STATE,
      variables: {
        taskId: task.id,
        status: stateChange.state,
        updatedAt: new Date().toJSON(),
      },
    });
    const updatedTask = result.data!.update_tasks!.returning[0];
    return new TaskState({
      possibleStates: getPossibleStates(updatedTask),
      state: updatedTask.status || TS.backlog,
      taskId,
    });
  }
}

@Resolver(() => TaskState)
export class TaskStateResolver {
  @Query(() => TaskState)
  async taskState(
    @Arg('taskId') taskId: number,
    @Ctx() ctx: Context
  ): Promise<TaskState | undefined> {
    return TaskState.getTaskState(ctx, taskId);
  }

  @Mutation(() => TaskState)
  async updateTaskState(
    @Arg('taskId') taskId: number,
    @Arg('updatedTaskState', () => TS) updatedTaskState: TS,
    @Ctx() ctx: Context
  ) {
    return await TaskState.updateTaskState(ctx, taskId, updatedTaskState);
  }
}
