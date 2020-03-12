import React, { useState, useContext, useEffect } from 'react';
import { useAuthContext } from 'components/auth';
import { FETCH_CLIENTS_STANDUPS_BY_DEVELOPER_ID } from 'lib/graphql/roles/developer/queries';
import { useQuery, useMutation } from 'lib/client/utils';
import {
  INSERT_NEW_CLIENT_STANDUP,
  LINK_TICKET_STANDUP_TO_CLIENT,
} from 'lib/graphql/roles/developer/mutations';

import StandUpCard from './StandupCard';

import {
  insertClientStandup,
  insertClientStandupVariables,
} from 'lib/graphql/roles/developer/generated/insertClientStandup';
import StandupContainer, {
  getETAMessage,
  StandupSectionContainer,
  StandupContext,
} from './StandupContainer';
import {
  fetchClientsStandupByDeveloperId,
  fetchClientsStandupByDeveloperIdVariables,
  fetchClientsStandupByDeveloperId_clients_client_daily_standups_ticket_daily_standups as TicektStandups,
} from 'lib/graphql/roles/developer/generated/fetchClientsStandupByDeveloperId';
import {
  linkTicketStandupToClient,
  linkTicketStandupToClientVariables,
} from 'lib/graphql/roles/developer/generated/linkTicketStandupToClient';

type TicketStandupProps = {
  ticketStandups: TicektStandups[];
};

type Props = {
  userId: number;
  developerId: string;
  active: boolean;
};

const TicketStandUp = (props: TicketStandupProps) => {
  const { ticketStandups } = props;

  return (
    <>
      {ticketStandups &&
        ticketStandups.map(ticket => {
          return (
            <StandUpCard
              key={ticket.id}
              standup={ticket}
              eta={!!ticket && getETAMessage(ticket.updatedETA)}
              identifier={ticket.id}
            />
          );
        })}
    </>
  );
};

const ClientsCard: React.FC<Props> = (props: Props) => {
  const ctx = useAuthContext();
  const { refresh, setRefresh, setLoading, userAvatar } = useContext(
    StandupContext
  );
  const [error, setError] = useState<Error | null>(null);
  const [
    standups,
    setStandups,
  ] = useState<fetchClientsStandupByDeveloperId | null>(null);

  const { userId, active, developerId } = props;

  const { fetchQuery } = useQuery<
    fetchClientsStandupByDeveloperId,
    fetchClientsStandupByDeveloperIdVariables
  >(
    {
      ctx,
      query: FETCH_CLIENTS_STANDUPS_BY_DEVELOPER_ID,
      role: 'developer',
      variables: { developerId },
      setData: setStandups,
      setLoading,
      setError,
    },
    [!!ctx.user]
  );

  useEffect(() => {
    if (refresh) fetchQuery({ developerId }, 'no-cache');
  }, [refresh]);

  const { issueMutation } = useMutation<
    insertClientStandup,
    insertClientStandupVariables
  >({
    ctx,
    role: 'developer',
    mutation: INSERT_NEW_CLIENT_STANDUP,
    setLoading,
    setError,
  });

  const { issueMutation: linkTicketToClient } = useMutation<
    linkTicketStandupToClient,
    linkTicketStandupToClientVariables
  >({
    ctx,
    role: 'developer',
    mutation: LINK_TICKET_STANDUP_TO_CLIENT,
    setData: () => setRefresh(),
    setLoading,
    setError,
  });

  const addStandUp = () => {
    return async (
      standupText: string,
      _updatedEta: string,
      identifier: string | number
    ) => {
      if (typeof identifier === 'number') return;

      const data = await issueMutation({
        clientId: identifier,
        summary: standupText,
        userId: userId,
      });

      const returning = data?.insert_client_daily_standups?.returning;

      if (!returning || !returning.length) return;

      const [insertedStandup] = returning;

      await linkTicketToClient({
        standupId: insertedStandup.id,
        clientId: identifier,
      });
    };
  };

  if (!standups || (!standups && error))
    return (
      <StandupContainer error={error} setError={setError} display={active} />
    );

  const { clients } = standups;

  return (
    <StandupContainer error={error} setError={setError} display={active}>
      {clients.map(client => {
        const {
          client_daily_standups: [client_daily_standup],
        } = client;
        const { ticket_daily_standups } = client_daily_standup;
        return (
          <StandupSectionContainer
            key={client.id}
            title={client.name}
            subtitle={''}
          >
            <StandUpCard
              isNew
              avatarSrc={userAvatar}
              addStandUp={addStandUp()}
              identifier={client.id}
              hideDate
            />

            {!!client_daily_standup && (
              <StandUpCard
                isNew={false}
                standup={client_daily_standup}
                identifier={client.id}
              />
            )}
            <TicketStandUp ticketStandups={ticket_daily_standups} />
          </StandupSectionContainer>
        );
      })}
    </StandupContainer>
  );
};

export default ClientsCard;
