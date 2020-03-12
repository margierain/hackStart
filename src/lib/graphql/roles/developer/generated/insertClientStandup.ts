/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: insertClientStandup
// ====================================================

export interface insertClientStandup_insert_client_daily_standups_returning {
  __typename: 'client_daily_standups';
  id: number;
  clientId: string;
}

export interface insertClientStandup_insert_client_daily_standups {
  __typename: 'client_daily_standups_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: insertClientStandup_insert_client_daily_standups_returning[];
}

export interface insertClientStandup {
  /**
   * insert data into the table: "client_daily_standups"
   */
  insert_client_daily_standups: insertClientStandup_insert_client_daily_standups | null;
}

export interface insertClientStandupVariables {
  clientId: string;
  summary: string;
  userId: number;
}
