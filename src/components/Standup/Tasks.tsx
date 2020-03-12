import React, { useState, useContext, useEffect } from 'react';
import StandupCard from './StandupCard';
import { useAuthContext } from 'components/auth';
import { useQuery, useMutation } from 'lib/client/utils';
import {
  fetchTasksStandupsByDeveloperId,
  fetchTasksStandupsByDeveloperIdVariables,
  fetchTasksStandupsByDeveloperId_tasks_task_daily_standups,
} from 'lib/graphql/roles/developer/generated/fetchTasksStandupsByDeveloperId';
import { FETCH_TASKS_STANDUPS_BY_DEVELOPER_ID } from 'lib/graphql/roles/developer/queries';
import { INSERT_NEW_TASK_STANDUP } from 'lib/graphql/roles/developer/mutations';
import {
  insertTaskStandup,
  insertTaskStandupVariables,
} from 'lib/graphql/roles/developer/generated/insertTaskStandup';
import StandupContainer, {
  StandupSectionContainer,
  getETAMessage,
  StandupContext,
} from './StandupContainer';

type Props = {
  developerId: string;
  userId: number;
  active: boolean;
};

const TasksStandup: React.FC<Props> = (props: Props) => {
  const ctx = useAuthContext();
  const { refresh, setRefresh, setLoading, userAvatar } = useContext(
    StandupContext
  );
  const [
    standups,
    setStandups,
  ] = useState<fetchTasksStandupsByDeveloperId | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const { developerId, userId, active } = props;

  const { fetchQuery } = useQuery<
    fetchTasksStandupsByDeveloperId,
    fetchTasksStandupsByDeveloperIdVariables
  >({
    ctx,
    query: FETCH_TASKS_STANDUPS_BY_DEVELOPER_ID,
    role: 'developer',
    variables: { developerId },
    setData: setStandups,
    setLoading,
    setError,
  });

  useEffect(() => {
    if (refresh) fetchQuery({ developerId }, 'no-cache');
  }, [refresh]);

  const { issueMutation } = useMutation<
    insertTaskStandup,
    insertTaskStandupVariables
  >({
    ctx,
    role: 'developer',
    mutation: INSERT_NEW_TASK_STANDUP,
    awaitRefetchQueries: true,
    setData: () => setRefresh(),
    setLoading,
    setError,
  });

  const addStandUp = async (
    standupText: string,
    updatedEta: string,
    identifier: number | string
  ) => {
    if (typeof identifier === 'string') return;

    await issueMutation({
      taskId: identifier,
      updatedETA: updatedEta,
      summary: standupText,
      userId: userId,
    });
  };

  if (!standups || (!standups && error))
    return (
      <StandupContainer error={error} setError={setError} display={active} />
    );

  const { tasks } = standups;

  return (
    <StandupContainer error={error} setError={setError} display={active}>
      {tasks.map((task: any) => {
        const { task_daily_standups } = task;
        const [recentStandup] = task_daily_standups;
        return (
          <StandupSectionContainer
            key={task.id}
            title={task.title}
            subtitle={
              recentStandup ? getETAMessage(recentStandup.updatedETA) : ''
            }
          >
            <StandupCard
              isNew
              avatarSrc={userAvatar}
              addStandUp={addStandUp}
              identifier={task.id}
              previousStandupText={
                task_daily_standups[0] && task_daily_standups[0].summary
              }
              previousEta={
                task_daily_standups[0] && task_daily_standups[0].updatedETA
              }
            />
            {task_daily_standups.map(
              (
                task_daily_standup: fetchTasksStandupsByDeveloperId_tasks_task_daily_standups
              ) => (
                <StandupCard
                  key={task_daily_standup.id}
                  isNew={false}
                  addStandUp={addStandUp}
                  standup={task_daily_standup}
                  identifier={task.id}
                  prefix
                />
              )
            )}
          </StandupSectionContainer>
        );
      })}
    </StandupContainer>
  );
};

export default TasksStandup;
