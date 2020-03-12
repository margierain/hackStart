/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateTaskTimeLogs
// ====================================================

export interface updateTaskTimeLogs_update_task_time_logs_returning {
  __typename: 'task_time_logs';
  id: number;
}

export interface updateTaskTimeLogs_update_task_time_logs {
  __typename: 'task_time_logs_mutation_response';
  /**
   * data of the affected rows by the mutation
   */
  returning: updateTaskTimeLogs_update_task_time_logs_returning[];
}

export interface updateTaskTimeLogs {
  /**
   * update data of the table: "task_time_logs"
   */
  update_task_time_logs: updateTaskTimeLogs_update_task_time_logs | null;
}

export interface updateTaskTimeLogsVariables {
  id?: number | null;
  timeDocterTaskId?: string | null;
  timeSpent?: number | null;
  finishedAt?: hasura_timestamptz | null;
}
