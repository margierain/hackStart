/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { tasks_status_enum } from './globalTypes';

// ====================================================
// GraphQL mutation operation: updateTaskDeveloperId
// ====================================================

export interface updateTaskDeveloperId_update_tasks_returning {
  __typename: 'tasks';
  id: number;
}

export interface updateTaskDeveloperId_update_tasks {
  __typename: 'tasks_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: updateTaskDeveloperId_update_tasks_returning[];
}

export interface updateTaskDeveloperId {
  /**
   * update data of the table: "tasks"
   */
  update_tasks: updateTaskDeveloperId_update_tasks | null;
}

export interface updateTaskDeveloperIdVariables {
  taskId: number;
  developerId?: string | null;
  updatedTaskState: tasks_status_enum;
}
