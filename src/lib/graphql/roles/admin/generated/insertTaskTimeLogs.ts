/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: insertTaskTimeLogs
// ====================================================

export interface insertTaskTimeLogs_insert_task_time_logs_returning {
  __typename: 'task_time_logs';
  id: number;
  taskId: number;
}

export interface insertTaskTimeLogs_insert_task_time_logs {
  __typename: 'task_time_logs_mutation_response';
  /**
   * data of the affected rows by the mutation
   */
  returning: insertTaskTimeLogs_insert_task_time_logs_returning[];
}

export interface insertTaskTimeLogs {
  /**
   * insert data into the table: "task_time_logs"
   */
  insert_task_time_logs: insertTaskTimeLogs_insert_task_time_logs | null;
}

export interface insertTaskTimeLogsVariables {
  id?: number | null;
  timeDocterTaskId?: string | null;
  developerId?: string | null;
  startedAt?: hasura_timestamptz | null;
  createdDateColumn?: hasura_timestamptz | null;
  updatedDateColumn?: hasura_timestamptz | null;
}
