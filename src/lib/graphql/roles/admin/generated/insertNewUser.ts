/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { users_insert_input } from './globalTypes';

// ====================================================
// GraphQL mutation operation: insertNewUser
// ====================================================

export interface insertNewUser_insert_users_returning {
  __typename: 'users';
  id: number;
}

export interface insertNewUser_insert_users {
  __typename: 'users_mutation_response';
  /**
   * data of the affected rows by the mutation
   */
  returning: insertNewUser_insert_users_returning[];
}

export interface insertNewUser {
  /**
   * insert data into the table: "users"
   */
  insert_users: insertNewUser_insert_users | null;
}

export interface insertNewUserVariables {
  objects: users_insert_input[];
}
