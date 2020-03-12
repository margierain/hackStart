/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchUserProfile
// ====================================================

export interface fetchUserProfile_users_user_emails {
  __typename: 'user_emails';
  email: string;
}

export interface fetchUserProfile_users_client_users_client_meetings {
  __typename: 'meetings';
  scheduledAt: hasura_timestamptz | null;
}

export interface fetchUserProfile_users_client_users_client {
  __typename: 'clients';
  id: string;
  name: string;
  onBoardedAt: hasura_timestamptz | null;
  /**
   * An array relationship
   */
  meetings: fetchUserProfile_users_client_users_client_meetings[];
}

export interface fetchUserProfile_users_client_users {
  __typename: 'client_users';
  id: hasura_uuid;
  /**
   * An object relationship
   */
  client: fetchUserProfile_users_client_users_client;
}

export interface fetchUserProfile_users_admin {
  __typename: 'admin';
  id: string;
}

export interface fetchUserProfile_users_candidate {
  __typename: 'candidates';
  id: hasura_uuid;
}

export interface fetchUserProfile_users_agency_user_agency {
  __typename: 'agencies';
  id: string;
  name: string;
}

export interface fetchUserProfile_users_agency_user {
  __typename: 'agency_users';
  id: string;
  /**
   * An object relationship
   */
  agency: fetchUserProfile_users_agency_user_agency;
}

export interface fetchUserProfile_users_developer_developer_contracts_user {
  __typename: 'users';
  id: number;
}

export interface fetchUserProfile_users_developer_developer_contracts {
  __typename: 'user_contracts';
  /**
   * An object relationship
   */
  user: fetchUserProfile_users_developer_developer_contracts_user;
}

export interface fetchUserProfile_users_developer {
  __typename: 'developers';
  id: string;
  /**
   * An array relationship
   */
  developer_contracts: fetchUserProfile_users_developer_developer_contracts[];
}

export interface fetchUserProfile_users {
  __typename: 'users';
  id: number;
  firstName: string | null;
  avatarUrl: string | null;
  lastName: string | null;
  defaultEmail: string | null;
  nickname: string | null;
  /**
   * An array relationship
   */
  user_emails: fetchUserProfile_users_user_emails[];
  /**
   * An array relationship
   */
  client_users: fetchUserProfile_users_client_users[];
  /**
   * An object relationship
   */
  admin: fetchUserProfile_users_admin | null;
  /**
   * An object relationship
   */
  candidate: fetchUserProfile_users_candidate | null;
  /**
   * An object relationship
   */
  agency_user: fetchUserProfile_users_agency_user | null;
  /**
   * An object relationship
   */
  developer: fetchUserProfile_users_developer | null;
}

export interface fetchUserProfile {
  /**
   * fetch data from the table: "users"
   */
  users: fetchUserProfile_users[];
}

export interface fetchUserProfileVariables {
  userId: number;
}
