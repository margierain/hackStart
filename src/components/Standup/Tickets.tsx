import React, { useState, useContext, useEffect } from 'react';
import StandUpCard from './StandupCard';
import { useAuthContext } from 'components/auth';
import { FETCH_TICKETS_DAILY_STANDUPS_BY_DEVELOPER_ID } from 'lib/graphql/roles/developer/queries';
import { useQuery, useMutation } from 'lib/client/utils';
import {
  fetchTicketsDailyStandupsByDeveloperId,
  fetchTicketsDailyStandupsByDeveloperIdVariables,
  fetchTicketsDailyStandupsByDeveloperId_tickets_tasks,
} from 'lib/graphql/roles/developer/generated/fetchTicketsDailyStandupsByDeveloperId';

import {
  insertTicketStandup,
  insertTicketStandupVariables,
} from 'lib/graphql/roles/developer/generated/insertTicketStandup';
import {
  INSERT_NEW_TICKET_STANDUP,
  LINK_TASK_STANDUP_TO_TICKET,
} from 'lib/graphql/roles/developer/mutations';
import StandupContainer, {
  getETAMessage,
  StandupSectionContainer,
} from './StandupContainer';
import { StandupContext } from './StandupContainer';
import {
  linkTaskStandupToTicket,
  linkTaskStandupToTicketVariables,
} from 'lib/graphql/roles/developer/generated/linkTaskStandupToTicket';

type TicketTasksProps = {
  tasks: fetchTicketsDailyStandupsByDeveloperId_tickets_tasks[];
};

type Props = {
  developerId: string;
  userId: number;
  active: boolean;
};

const TicketTasks = (props: TicketTasksProps) => {
  const { tasks } = props;

  return (
    <>
      {tasks.map(task => {
        const {
          task_daily_standups: [task_daily_standup],
        } = task;

        return (
          <StandUpCard
            key={task.id}
            standup={task_daily_standup}
            eta={getETAMessage(task_daily_standup.updatedETA)}
            identifier={task.id}
          />
        );
      })}
    </>
  );
};

const TicketsCard: React.FC<Props> = (props: Props) => {
  const ctx = useAuthContext();

  const { refresh, setRefresh, setLoading, userAvatar } = useContext(
    StandupContext
  );
  const [error, setError] = useState<Error | null>(null);
  const [
    standups,
    setStandups,
  ] = useState<fetchTicketsDailyStandupsByDeveloperId | null>(null);

  const { developerId, userId, active } = props;

  const { fetchQuery } = useQuery<
    fetchTicketsDailyStandupsByDeveloperId,
    fetchTicketsDailyStandupsByDeveloperIdVariables
  >({
    ctx,
    query: FETCH_TICKETS_DAILY_STANDUPS_BY_DEVELOPER_ID,
    role: 'developer',
    variables: { developerId },
    setData: setStandups,
    setLoading,
    setError,
  });

  useEffect(() => {
    if (refresh) fetchQuery({ developerId }, 'no-cache');
  }, [refresh]);

  const { issueMutation: linkTaskStandup } = useMutation<
    linkTaskStandupToTicket,
    linkTaskStandupToTicketVariables
  >({
    ctx,
    role: 'developer',
    mutation: LINK_TASK_STANDUP_TO_TICKET,
    setData: () => setRefresh(),
    setLoading,
    setError,
  });

  const { issueMutation } = useMutation<
    insertTicketStandup,
    insertTicketStandupVariables
  >({
    ctx,
    role: 'developer',
    mutation: INSERT_NEW_TICKET_STANDUP,
    setLoading,
    setError,
  });

  const addStandUp = async (
    standupText: string,
    updatedEta: string,
    identifier: number | string
  ) => {
    if (typeof identifier === 'string') return;

    const standup = await issueMutation({
      ticketId: identifier,
      updatedETA: updatedEta,
      message: standupText,
      userId: userId,
    });

    const returning = standup?.insert_ticket_daily_standups?.returning;
    if (!returning || !returning.length) return;

    const [insertedStandup] = returning;

    await linkTaskStandup({
      ticketId: insertedStandup.ticketId,
      standupId: insertedStandup.id,
    });
  };

  if (!standups || (!standups && error))
    return (
      <StandupContainer error={error} setError={setError} display={active} />
    );

  const { tickets } = standups;

  return (
    <StandupContainer error={error} setError={setError} display={active}>
      {tickets.map(ticket => {
        const {
          ticket_daily_standups: [ticket_daily_standup],
          tasks,
        } = ticket;

        return (
          <StandupSectionContainer
            hide={
              ticket.managerId !== developerId &&
              !ticket_daily_standup &&
              !tasks.length
            }
            key={ticket.id}
            title={`[${ticket.code}] - ${ticket.title}`}
            subtitle={
              ticket_daily_standup
                ? getETAMessage(ticket_daily_standup.updatedETA)
                : ''
            }
          >
            {ticket.managerId === developerId && (
              <StandUpCard
                isNew
                avatarSrc={userAvatar}
                addStandUp={addStandUp}
                identifier={ticket.id}
                previousEta={ticket_daily_standup?.updatedETA}
                previousStandupText={ticket_daily_standup?.message}
              />
            )}
            <TicketTasks tasks={tasks} />
            {!!ticket_daily_standup && (
              <StandUpCard
                isNew={false}
                addStandUp={addStandUp}
                standup={ticket_daily_standup}
                identifier={ticket.id}
                prefix
              />
            )}
          </StandupSectionContainer>
        );
      })}
    </StandupContainer>
  );
};

export default TicketsCard;
