/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  candidates_insert_input,
  developers_insert_input,
} from './globalTypes';

// ====================================================
// GraphQL mutation operation: updateUser
// ====================================================

export interface updateUser_update_users_returning {
  __typename: 'users';
  id: number;
}

export interface updateUser_update_users {
  __typename: 'users_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: updateUser_update_users_returning[];
}

export interface updateUser_insert_candidates_returning {
  __typename: 'candidates';
  id: hasura_uuid;
  userId: number;
}

export interface updateUser_insert_candidates {
  __typename: 'candidates_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: updateUser_insert_candidates_returning[];
}

export interface updateUser_insert_developers_returning {
  __typename: 'developers';
  id: string;
  login: string;
}

export interface updateUser_insert_developers {
  __typename: 'developers_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: updateUser_insert_developers_returning[];
}

export interface updateUser {
  /**
   * update data of the table: "users"
   */
  update_users: updateUser_update_users | null;
  /**
   * insert data into the table: "candidates"
   */
  insert_candidates: updateUser_insert_candidates | null;
  /**
   * insert data into the table: "developers"
   */
  insert_developers: updateUser_insert_developers | null;
}

export interface updateUserVariables {
  login: string;
  id: number;
  candidate: candidates_insert_input;
  developer: developers_insert_input;
}
