import React, { useState, useContext, useEffect } from 'react';
import { useAuthContext } from 'components/auth';
import { FETCH_USER_STANDUPS_OVERVIEW } from 'lib/graphql/roles/developer/queries';
import { useQuery, useMutation } from 'lib/client/utils';
import StandupContainer, {
  StandupSectionContainer,
  getETAMessage,
  StandupContext,
} from './StandupContainer';
import moment from 'moment';
import StandUpCard from './StandupCard';
import {
  INSERT_NEW_USER_STANDUP,
  LINK_STANDUPS_TO_USER,
} from 'lib/graphql/roles/developer/mutations';
import {
  insertNewUserStandup,
  insertNewUserStandupVariables,
} from 'lib/graphql/roles/developer/generated/insertNewUserStandup';
import {
  fetchUserStandupOverview_users,
  fetchUserStandupOverview,
  fetchUserStandupOverviewVariables,
  fetchUserStandupOverview_users_user_daily_standups,
  fetchUserStandupOverview_users_unlinked_ticket_daily_standups,
  fetchUserStandupOverview_users_unlinked_task_daily_standups,
  fetchUserStandupOverview_users_unlinked_client_daily_standups,
  fetchUserStandupOverview_users_user_daily_standups_ticket_daily_standups,
  fetchUserStandupOverview_users_user_daily_standups_task_daily_standups,
  fetchUserStandupOverview_users_user_daily_standups_client_daily_standups,
} from 'lib/graphql/roles/developer/generated/fetchUserStandupOverview';
import {
  linkStandupsToUser,
  linkStandupsToUserVariables,
} from 'lib/graphql/roles/developer/generated/linkStandupsToUser';

type Standups =
  | fetchUserStandupOverview_users_user_daily_standups
  | fetchUserStandupOverview_users_unlinked_ticket_daily_standups
  | fetchUserStandupOverview_users_unlinked_task_daily_standups
  | fetchUserStandupOverview_users_unlinked_client_daily_standups
  | fetchUserStandupOverview_users_user_daily_standups_ticket_daily_standups
  | fetchUserStandupOverview_users_user_daily_standups_task_daily_standups
  | fetchUserStandupOverview_users_user_daily_standups_client_daily_standups;

type AccumulatedStandups = {
  [key: string]: fetchUserStandupOverview_users_user_daily_standups[];
};

type Props = {
  userId: number;
  developerId: string;
  active: boolean;
};

const getDateCategory = (date: string) => {
  const current = moment(date);
  return current.format('DD/MM/YYYY').toString();
};

const accumulateSingleStandup = (
  standup: fetchUserStandupOverview_users_user_daily_standups[]
) => {
  return standup.reduce<AccumulatedStandups>((acc, task: any) => {
    const dateCategory = getDateCategory(task.submittedAt);
    if (!(dateCategory in acc)) return { ...acc, [dateCategory]: [task] };

    return { ...acc, [dateCategory]: [...acc[dateCategory], task] };
  }, {});
};

const accumulateLinkedStandups = ({
  user_daily_standups,
}: fetchUserStandupOverview_users) => {
  return accumulateSingleStandup(user_daily_standups);
};

type UserStandupStackProps = {
  standup: fetchUserStandupOverview_users_user_daily_standups;
  user: any;
};
const UserStandupStack = (props: UserStandupStackProps) => {
  const { standup, user } = props;

  const {
    ticket_daily_standups,
    task_daily_standups,
    client_daily_standups,
  } = standup;
  const standups = [
    ...ticket_daily_standups,
    ...task_daily_standups,
    ...client_daily_standups,
  ];
  return (
    <>
      <StandUpCard
        key={standup.id}
        isNew={false}
        standup={standup}
        identifier={user.id}
        eta=""
      />
      {standups.map(subStandup => (
        <StandUpCard
          key={subStandup.id}
          isNew={false}
          standup={subStandup}
          identifier={user.id}
          eta={
            'updatedETA' in subStandup
              ? getETAMessage(subStandup.updatedETA)
              : ''
          }
        />
      ))}
    </>
  );
};

const UsersCard: React.FC<Props> = (props: Props) => {
  const ctx = useAuthContext();
  const { refresh, setRefresh, setLoading, userAvatar } = useContext(
    StandupContext
  );
  const [error, setError] = useState<Error | null>(null);
  const [standups, setStandups] = useState<fetchUserStandupOverview | null>(
    null
  );

  const { userId, active } = props;

  const today = moment().format('DD/MM/YYYY');
  const getDateStr = (date: string) => {
    return date === today ? 'today' : date;
  };

  const { fetchQuery } = useQuery<
    fetchUserStandupOverview,
    fetchUserStandupOverviewVariables
  >({
    ctx,
    query: FETCH_USER_STANDUPS_OVERVIEW,
    role: 'developer',
    variables: { userId },
    setData: setStandups,
    setLoading,
    setError,
  });

  useEffect(() => {
    if (refresh) fetchQuery({ userId }, 'no-cache');
  }, [refresh]);

  const { issueMutation } = useMutation<
    insertNewUserStandup,
    insertNewUserStandupVariables
  >({
    ctx,
    role: 'developer',
    mutation: INSERT_NEW_USER_STANDUP,
    setLoading,
    setError,
  });

  const { issueMutation: linkStandupToUser } = useMutation<
    linkStandupsToUser,
    linkStandupsToUserVariables
  >({
    ctx,
    role: 'developer',
    mutation: LINK_STANDUPS_TO_USER,
    setData: () => setRefresh(),
    setLoading,
    setError,
  });

  const addStandUp = (standups: Standups[]) => {
    const standupIds = standups.reduce(
      (acc, standup) => {
        const typeName =
          standup.__typename == 'ticket_daily_standups'
            ? 'tickets'
            : standup.__typename == 'task_daily_standups'
            ? 'tasks'
            : standup.__typename == 'client_daily_standups'
            ? 'clients'
            : 'users';

        const prevIds = acc[typeName];

        return { ...acc, [typeName]: [...prevIds, standup.id] };
      },
      { tasks: [], tickets: [], users: [], clients: [] }
    );

    return async (
      standupText: string,
      _updatedEta: string,
      _identifier: string | number
    ) => {
      const data = await issueMutation({
        summary: standupText,
        userId: userId,
      });

      const returning = data?.insert_user_daily_standups?.returning;
      if (!returning || !returning.length) return;

      const [insertedStandup] = returning;

      await linkStandupToUser({
        standupId: insertedStandup.id,
        taskIds: standupIds.tasks,
        ticketIds: standupIds.tickets,
        clientIds: standupIds.clients,
      });
    };
  };

  if (!standups || (!standups && error))
    return (
      <StandupContainer error={error} setError={setError} display={active} />
    );

  const {
    users: [user],
  } = standups;

  const {
    unlinked_task_daily_standups,
    unlinked_ticket_daily_standups,
    unlinked_client_daily_standups,
  } = user;

  const accumulatedLinkedStandups = accumulateLinkedStandups(user);

  if (!(today in accumulatedLinkedStandups))
    accumulatedLinkedStandups[today] = [];
  const accumulatedunlinkedStandups = [
    ...unlinked_task_daily_standups,
    ...unlinked_ticket_daily_standups,
    ...unlinked_client_daily_standups,
  ];
  const standupEntries = Object.keys(
    accumulatedLinkedStandups
  ).sort((dateA: string, dateB: string) =>
    moment(dateB, 'DD/MM/YYYY').diff(moment(dateA, 'DD/MM/YYYY'), 'days')
  );

  return (
    <StandupContainer error={error} setError={setError} display={active}>
      {standupEntries.map(date => {
        debugger;
        const standups = accumulatedLinkedStandups[date];
        date = getDateStr(date);

        return (
          <StandupSectionContainer
            title={
              date === 'today' ? date : moment(date, 'DD/MM/YYYY').fromNow()
            }
            subtitle={''}
            key={date}
          >
            {date === 'today' && (
              <>
                <StandUpCard
                  isNew
                  hideDate
                  avatarSrc={userAvatar}
                  addStandUp={addStandUp(accumulatedunlinkedStandups)}
                  identifier={user.id}
                />
                {accumulatedunlinkedStandups.map(standup => (
                  <StandUpCard
                    key={standup.id}
                    isNew={false}
                    standup={standup}
                    identifier={user.id}
                    eta={
                      'updatedETA' in standup
                        ? getETAMessage(standup.updatedETA)
                        : ''
                    }
                  />
                ))}
              </>
            )}

            {standups.map(standup => (
              <UserStandupStack
                key={standup.id}
                standup={standup}
                user={user}
              />
            ))}
          </StandupSectionContainer>
        );
      })}
    </StandupContainer>
  );
};

export default UsersCard;
