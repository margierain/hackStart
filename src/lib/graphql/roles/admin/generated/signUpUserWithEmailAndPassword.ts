/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signUpUserWithEmailAndPassword
// ====================================================

export interface signUpUserWithEmailAndPassword_insert_user_emails_returning_user_agency_user {
  __typename: 'agency_users';
  id: string;
  agencyId: string;
}

export interface signUpUserWithEmailAndPassword_insert_user_emails_returning_user_client_user {
  __typename: 'client_users';
  id: hasura_uuid;
  clientId: string;
}

export interface signUpUserWithEmailAndPassword_insert_user_emails_returning_user_admin {
  __typename: 'admin';
  id: string;
}

export interface signUpUserWithEmailAndPassword_insert_user_emails_returning_user_developer {
  __typename: 'developers';
  id: string;
  githubId: string | null;
}

export interface signUpUserWithEmailAndPassword_insert_user_emails_returning_user_candidate {
  __typename: 'candidates';
  id: hasura_uuid;
  githubId: string;
  agencyId: string;
}

export interface signUpUserWithEmailAndPassword_insert_user_emails_returning_user {
  __typename: 'users';
  defaultEmail: string | null;
  passwordHash: string | null;
  id: number;
  firstName: string | null;
  lastName: string | null;
  /**
   * An object relationship
   */
  agency_user: signUpUserWithEmailAndPassword_insert_user_emails_returning_user_agency_user | null;
  /**
   * An object relationship
   */
  client_user: signUpUserWithEmailAndPassword_insert_user_emails_returning_user_client_user | null;
  /**
   * An object relationship
   */
  admin: signUpUserWithEmailAndPassword_insert_user_emails_returning_user_admin | null;
  /**
   * An object relationship
   */
  developer: signUpUserWithEmailAndPassword_insert_user_emails_returning_user_developer | null;
  /**
   * An object relationship
   */
  candidate: signUpUserWithEmailAndPassword_insert_user_emails_returning_user_candidate | null;
}

export interface signUpUserWithEmailAndPassword_insert_user_emails_returning {
  __typename: 'user_emails';
  /**
   * An object relationship
   */
  user: signUpUserWithEmailAndPassword_insert_user_emails_returning_user | null;
}

export interface signUpUserWithEmailAndPassword_insert_user_emails {
  __typename: 'user_emails_mutation_response';
  /**
   * data of the affected rows by the mutation
   */
  returning: signUpUserWithEmailAndPassword_insert_user_emails_returning[];
}

export interface signUpUserWithEmailAndPassword {
  /**
   * insert data into the table: "user_emails"
   */
  insert_user_emails: signUpUserWithEmailAndPassword_insert_user_emails | null;
}

export interface signUpUserWithEmailAndPasswordVariables {
  defaultEmail: string;
  passwordHash: string;
  firstName?: string | null;
  lastName?: string | null;
}
