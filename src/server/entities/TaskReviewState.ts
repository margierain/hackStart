import 'reflect-metadata';
import {
  ObjectType,
  Field,
  ID,
  Resolver,
  Query,
  Arg,
  Ctx,
  registerEnumType,
  Mutation,
} from 'type-graphql';
import { Context, HasuraClient } from 'server/entities/types';
import { NonFunctionProperties } from 'server/utils';

import {
  task_reviews_status_enum as TRS,
  tasks_status_enum as TR,
} from 'lib/graphql/roles/admin/generated/globalTypes';
import {
  fetchTaskReviews,
  fetchTaskReviews_task_reviews,
  fetchTaskReviewsVariables,
} from 'lib/graphql/roles/admin/generated/fetchTaskReviews';
import {
  updateTaskReviewStateToFinished,
  updateTaskReviewStateToFinishedVariables,
} from 'lib/graphql/roles/admin/generated/updateTaskReviewStateToFinished';
import {
  updateTaskReviewState,
  updateTaskReviewStateVariables,
} from 'lib/graphql/roles/admin/generated/updateTaskReviewState';
import { taskReviewStateChanges } from 'lib/states';
import { FETCH_TASK_REVIEWS } from 'lib/graphql/roles/admin/queries';
import {
  UPDATE_TASK_REVIEW_STATE_FINISHED,
  UPDATE_TASK_REVIEW_STATE,
} from 'lib/graphql/roles/admin/mutations';
// need to omit 'task' as different query fetch the underlying task differently
type TaskReview = Omit<fetchTaskReviews_task_reviews, 'task'>;

const stateErrors: {
  name: string;
  condition: (t: TaskReview) => boolean;
  appliesTo?: TRS[];
  appliesToNot?: TRS[];
}[] = [
  {
    name: 'Task Review needs to be assigned to a developer',
    condition: t => !!t.developerId,
    appliesToNot: [TRS.available, TRS.cancelled],
  },
  {
    name: 'Task Review already has a developer to be made available',
    condition: t => !t.developerId,
    appliesTo: [TRS.available],
  },
  {
    name: 'Task Review needs to be assigned a cost',
    condition: t => !!t.costInUSD,
    appliesToNot: [TRS.cancelled],
  },
];

const getPossibleStates = (taskReview: TaskReview) =>
  taskReviewStateChanges[taskReview.status || TRS.available].map(st => ({
    state: st,
    error: stateErrors
      .filter(({ condition, appliesTo, appliesToNot }) => {
        if (appliesTo && appliesTo.indexOf(st) === -1) {
          return false;
        }

        if (appliesToNot && appliesToNot.indexOf(st) !== -1) {
          return false;
        }

        if (condition(taskReview)) {
          return false;
        }

        return true;
      })
      .map(se => se.name)[0],
  }));

registerEnumType(TRS, {
  name: 'TaskReviewStateType',
});

@ObjectType()
class PossibleReviewState {
  constructor({ state, error }: NonFunctionProperties<PossibleReviewState>) {
    this.state = state;
    this.error = error;
  }
  @Field(() => TRS)
  state: TRS;

  @Field({ nullable: true })
  error?: string;
}

@ObjectType()
export class TaskReviewState {
  constructor({
    state,
    taskReviewId,
    possibleStates,
  }: NonFunctionProperties<TaskReviewState>) {
    this.state = state;
    this.taskReviewId = taskReviewId;
    this.possibleStates = possibleStates;
  }

  @Field(() => ID)
  taskReviewId: number;

  @Field(() => TRS)
  state: TRS;

  @Field(() => [PossibleReviewState])
  possibleStates: PossibleReviewState[] = [];

  static async fetchTaskReview(client: HasuraClient, reviewTaskId: number) {
    const result = await client.query<
      fetchTaskReviews,
      fetchTaskReviewsVariables
    >({
      query: FETCH_TASK_REVIEWS,
      variables: { id: reviewTaskId },
    });

    const { task_reviews } = result.data;

    if (!task_reviews.length) {
      throw new Error('task review not found');
    }

    const { task, ...taskReview } = task_reviews[0];
    return { task, taskReview };
  }

  static async getTaskReviewState(
    client: HasuraClient,
    taskReviewId: number
  ): Promise<TaskReviewState> {
    const { taskReview } = await TaskReviewState.fetchTaskReview(
      client,
      taskReviewId
    );

    const possibleStates = getPossibleStates(taskReview);

    return new TaskReviewState({
      taskReviewId,
      possibleStates,
      state: taskReview.status || TRS.available,
    });
  }

  static async updateTaskReviewState(
    client: HasuraClient,
    taskReviewId: number,
    updatedTaskReviewState: TRS
  ) {
    const { task, taskReview } = await TaskReviewState.fetchTaskReview(
      client,
      taskReviewId
    );

    const possibleStates = getPossibleStates(taskReview);
    const st = updatedTaskReviewState;
    if (!st) {
      throw new Error(`Invalid State: ${updatedTaskReviewState}`);
    }

    const stateChange = possibleStates.find(
      st => st.state === updatedTaskReviewState
    );
    if (!stateChange) {
      throw new Error(`State change not allowed: ${updatedTaskReviewState}`);
    }

    if (stateChange.error) {
      throw new Error(`State change failed: ${stateChange.error}`);
    }

    // When review fails or passes then transition the original task properly
    if (
      [TRS.failed, TRS.passed].indexOf(stateChange.state) !== -1 &&
      [TR.cancelled, TR.finished, TR.available].indexOf(
        task!.status || TR.internal_review
      ) === -1
    ) {
      const result = await client.mutate<
        updateTaskReviewStateToFinished,
        updateTaskReviewStateToFinishedVariables
      >({
        mutation: UPDATE_TASK_REVIEW_STATE_FINISHED,
        variables: {
          taskReviewId: taskReview.id,
          taskReviewStatus: stateChange.state,
          taskId: task!.id,
          updatedAt: new Date().toJSON(),
          taskStatus:
            stateChange.state === TRS.passed
              ? TR.passed_internal_review
              : TR.needs_changes,
        },
      });
      const updatedTaskReview = result.data!.update_task_reviews!.returning[0];

      return new TaskReviewState({
        taskReviewId,
        state: updatedTaskReview.status || TRS.available,
        possibleStates: getPossibleStates(updatedTaskReview),
      });
    }

    const result = await client.mutate<
      updateTaskReviewState,
      updateTaskReviewStateVariables
    >({
      mutation: UPDATE_TASK_REVIEW_STATE,
      variables: {
        taskReviewId: taskReview.id,
        status: stateChange.state,
        updatedAt: new Date().toJSON(),
      },
    });

    const {
      task: updatedTask,
      ...updatedTaskReview
    } = result.data!.update_task_reviews!.returning[0];

    return new TaskReviewState({
      taskReviewId,
      state: updatedTaskReview.status || TRS.available,
      possibleStates: getPossibleStates(updatedTaskReview),
    });
  }
}

@Resolver(() => TaskReviewState)
export class TaskReviewStateResolver {
  @Query(() => TaskReviewState)
  async taskReviewState(
    @Arg('taskReviewId') taskReviewId: number,
    @Ctx() ctx: Context
  ): Promise<TaskReviewState> {
    return TaskReviewState.getTaskReviewState(ctx.hasuraClient, taskReviewId);
  }
  @Mutation(() => TaskReviewState)
  async updateTaskReviewState(
    @Arg('taskReviewId') taskReviewId: number,
    @Arg('updatedTaskReviewState', () => TRS) updatedTaskReviewState: TRS,
    @Ctx() ctx: Context
  ): Promise<TaskReviewState> {
    return TaskReviewState.updateTaskReviewState(
      ctx.hasuraClient,
      taskReviewId,
      updatedTaskReviewState
    );
  }
}
