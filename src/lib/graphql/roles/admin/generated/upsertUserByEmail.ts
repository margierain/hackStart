/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  user_emails_insert_input,
  user_emails_on_conflict,
} from './globalTypes';

// ====================================================
// GraphQL mutation operation: upsertUserByEmail
// ====================================================

export interface upsertUserByEmail_insert_user_emails_returning_user_agency_user {
  __typename: 'agency_users';
  id: string;
  agencyId: string;
}

export interface upsertUserByEmail_insert_user_emails_returning_user_client_user {
  __typename: 'client_users';
  id: hasura_uuid;
  clientId: string;
}

export interface upsertUserByEmail_insert_user_emails_returning_user_admin {
  __typename: 'admin';
  id: string;
}

export interface upsertUserByEmail_insert_user_emails_returning_user_developer {
  __typename: 'developers';
  id: string;
  githubId: string | null;
}

export interface upsertUserByEmail_insert_user_emails_returning_user_candidate {
  __typename: 'candidates';
  id: hasura_uuid;
  githubId: string;
  agencyId: string;
}

export interface upsertUserByEmail_insert_user_emails_returning_user {
  __typename: 'users';
  id: number;
  firstName: string | null;
  lastName: string | null;
  passwordHash: string | null;
  /**
   * An object relationship
   */
  agency_user: upsertUserByEmail_insert_user_emails_returning_user_agency_user | null;
  /**
   * An object relationship
   */
  client_user: upsertUserByEmail_insert_user_emails_returning_user_client_user | null;
  /**
   * An object relationship
   */
  admin: upsertUserByEmail_insert_user_emails_returning_user_admin | null;
  /**
   * An object relationship
   */
  developer: upsertUserByEmail_insert_user_emails_returning_user_developer | null;
  /**
   * An object relationship
   */
  candidate: upsertUserByEmail_insert_user_emails_returning_user_candidate | null;
}

export interface upsertUserByEmail_insert_user_emails_returning {
  __typename: 'user_emails';
  email: string;
  /**
   * An object relationship
   */
  user: upsertUserByEmail_insert_user_emails_returning_user | null;
}

export interface upsertUserByEmail_insert_user_emails {
  __typename: 'user_emails_mutation_response';
  /**
   * data of the affected rows by the mutation
   */
  returning: upsertUserByEmail_insert_user_emails_returning[];
}

export interface upsertUserByEmail {
  /**
   * insert data into the table: "user_emails"
   */
  insert_user_emails: upsertUserByEmail_insert_user_emails | null;
}

export interface upsertUserByEmailVariables {
  userEmail: user_emails_insert_input;
  onConflict: user_emails_on_conflict;
}
