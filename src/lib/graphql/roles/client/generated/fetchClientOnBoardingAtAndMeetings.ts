/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchClientOnBoardingAtAndMeetings
// ====================================================

export interface fetchClientOnBoardingAtAndMeetings_users_client_users_client_meetings {
  __typename: 'meetings';
  scheduledAt: hasura_timestamptz | null;
}

export interface fetchClientOnBoardingAtAndMeetings_users_client_users_client {
  __typename: 'clients';
  id: string;
  name: string;
  onBoardedAt: hasura_timestamptz | null;
  /**
   * An array relationship
   */
  meetings: fetchClientOnBoardingAtAndMeetings_users_client_users_client_meetings[];
}

export interface fetchClientOnBoardingAtAndMeetings_users_client_users {
  __typename: 'client_users';
  /**
   * An object relationship
   */
  client: fetchClientOnBoardingAtAndMeetings_users_client_users_client;
}

export interface fetchClientOnBoardingAtAndMeetings_users {
  __typename: 'users';
  firstName: string | null;
  lastName: string | null;
  defaultEmail: string | null;
  /**
   * An array relationship
   */
  client_users: fetchClientOnBoardingAtAndMeetings_users_client_users[];
}

export interface fetchClientOnBoardingAtAndMeetings {
  /**
   * fetch data from the table: "users"
   */
  users: fetchClientOnBoardingAtAndMeetings_users[];
}

export interface fetchClientOnBoardingAtAndMeetingsVariables {
  userId: number;
}
