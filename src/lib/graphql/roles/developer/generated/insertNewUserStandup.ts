/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: insertNewUserStandup
// ====================================================

export interface insertNewUserStandup_insert_user_daily_standups_returning {
  __typename: 'user_daily_standups';
  id: number;
}

export interface insertNewUserStandup_insert_user_daily_standups {
  __typename: 'user_daily_standups_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: insertNewUserStandup_insert_user_daily_standups_returning[];
}

export interface insertNewUserStandup {
  /**
   * insert data into the table: "user_daily_standups"
   */
  insert_user_daily_standups: insertNewUserStandup_insert_user_daily_standups | null;
}

export interface insertNewUserStandupVariables {
  summary: string;
  userId: number;
}
