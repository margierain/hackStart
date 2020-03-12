import React from 'react';
import { NextPageContext } from 'next';
import { useMutation, useQuery } from 'lib/client/utils';
import { useAuth } from 'components/auth';
import { INSERT_MEETING_AND_UPDATE_CLIENT_ON_BOARDED_AT as Mutation } from 'lib/graphql/roles/client/mutations';
import { Dashboard } from 'components/layouts/Dashboard';
import {
  insertClientMeeting as MutationType,
  insertClientMeetingVariables as MutationVariables,
} from 'lib/graphql/roles/client/generated/insertClientMeeting';
import Error500 from 'template/views/Error500';
import { FETCH_CLIENT_ON_BOARDING_AT_AND_MEETINGS as Query } from 'lib/graphql/roles/client/queries';
import {
  fetchClientOnBoardingAtAndMeetings as QueryType,
  fetchClientOnBoardingAtAndMeetingsVariables as QueryVariables,
} from 'lib/graphql/roles/client/generated/fetchClientOnBoardingAtAndMeetings';
import moment from 'moment';
import Router from 'next/router';

type Props = {
  answer_1: string;
  assigned_to: string;
  event_end_time: string;
  event_start_time: string;
  event_type_name: string;
  event_type_uuid: string;
  invitee_email: string;
  invitee_full_name: string;
  invitee_uuid: string;
  utm_source: string;
};

const Schedule = (props: Props) => {
  const { utm_source, event_start_time } = props;
  const formattedEventDate = moment(event_start_time);
  const payload = {
    meeting: {
      associatedClientId: utm_source,
      scheduledAt: event_start_time,
    },
    clientId: utm_source,
    onBoardedAt: event_start_time,
  };

  const redirectHome = () => {
    Router.push(`/clients/${utm_source}/home`);
  };

  const handleQueryResponse = (data: QueryType | null) => {
    if (
      data &&
      data.users[0] &&
      data.users[0].client_users[0] &&
      data.users[0].client_users[0].client &&
      (!data.users[0].client_users[0].client.meetings ||
        data.users[0].client_users[0].client.meetings.length === 0)
    ) {
      executeMutation();
    } else {
      const meetings = data?.users[0].client_users[0].client.meetings;
      const hasPendingMeeting = meetings?.find(meeting => {
        const date = moment(meeting.scheduledAt || undefined);
        return date.isSameOrBefore(formattedEventDate);
      });

      hasPendingMeeting ? executeMutation() : redirectHome();
    }
  };

  const ctx = useAuth('client', true);

  const queryResponse = useQuery<QueryType, QueryVariables>({
    ctx,
    role: 'client',
    query: Query,
    variables: {
      userId: ctx.user?.id || 0,
    },
    setData: handleQueryResponse,
  });

  const { issueMutation, error } = useMutation<MutationType, MutationVariables>(
    {
      ctx,
      role: 'client',
      mutation: Mutation,
      setData: () => redirectHome(),
    }
  );

  const executeMutation = () => {
    issueMutation(payload);
  };

  if (queryResponse.error) {
    return <Error500 error={queryResponse.error} />;
  }

  if (error) {
    return <Error500 error={error} />;
  }

  return (
    <Dashboard
      selected={{
        type: 'client',
        clientId: utm_source,
      }}
      loading
    >
      <div></div>
    </Dashboard>
  );
};

Schedule.getInitialProps = async (ctx: NextPageContext) => {
  const { query } = ctx;
  return query;
};

export default Schedule;
