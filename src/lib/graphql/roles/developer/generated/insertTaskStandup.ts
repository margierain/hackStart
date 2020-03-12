/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: insertTaskStandup
// ====================================================

export interface insertTaskStandup_insert_task_daily_standups_returning {
  __typename: 'task_daily_standups';
  summary: string;
  id: number;
}

export interface insertTaskStandup_insert_task_daily_standups {
  __typename: 'task_daily_standups_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: insertTaskStandup_insert_task_daily_standups_returning[];
}

export interface insertTaskStandup {
  /**
   * insert data into the table: "task_daily_standups"
   */
  insert_task_daily_standups: insertTaskStandup_insert_task_daily_standups | null;
}

export interface insertTaskStandupVariables {
  taskId: number;
  updatedETA: hasura_timestamptz;
  summary: string;
  userId: number;
}
