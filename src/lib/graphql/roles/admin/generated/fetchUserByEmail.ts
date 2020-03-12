/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchUserByEmail
// ====================================================

export interface fetchUserByEmail_user_emails_user_agency_user {
  __typename: 'agency_users';
  id: string;
  agencyId: string;
}

export interface fetchUserByEmail_user_emails_user_client_user {
  __typename: 'client_users';
  id: hasura_uuid;
  clientId: string;
}

export interface fetchUserByEmail_user_emails_user_admin {
  __typename: 'admin';
  id: string;
}

export interface fetchUserByEmail_user_emails_user_developer {
  __typename: 'developers';
  id: string;
  githubId: string | null;
}

export interface fetchUserByEmail_user_emails_user_candidate {
  __typename: 'candidates';
  id: hasura_uuid;
  githubId: string;
  agencyId: string;
}

export interface fetchUserByEmail_user_emails_user {
  __typename: 'users';
  id: number;
  firstName: string | null;
  lastName: string | null;
  passwordHash: string | null;
  /**
   * An object relationship
   */
  agency_user: fetchUserByEmail_user_emails_user_agency_user | null;
  /**
   * An object relationship
   */
  client_user: fetchUserByEmail_user_emails_user_client_user | null;
  /**
   * An object relationship
   */
  admin: fetchUserByEmail_user_emails_user_admin | null;
  /**
   * An object relationship
   */
  developer: fetchUserByEmail_user_emails_user_developer | null;
  /**
   * An object relationship
   */
  candidate: fetchUserByEmail_user_emails_user_candidate | null;
}

export interface fetchUserByEmail_user_emails {
  __typename: 'user_emails';
  email: string;
  /**
   * An object relationship
   */
  user: fetchUserByEmail_user_emails_user | null;
}

export interface fetchUserByEmail {
  /**
   * fetch data from the table: "user_emails"
   */
  user_emails: fetchUserByEmail_user_emails[];
}

export interface fetchUserByEmailVariables {
  email: string;
}
