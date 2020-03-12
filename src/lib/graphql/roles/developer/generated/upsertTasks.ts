/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { tasks_insert_input, tasks_on_conflict } from './globalTypes';

// ====================================================
// GraphQL mutation operation: upsertTasks
// ====================================================

export interface upsertTasks_insert_tasks_returning {
  __typename: 'tasks';
  id: number;
}

export interface upsertTasks_insert_tasks {
  __typename: 'tasks_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: upsertTasks_insert_tasks_returning[];
}

export interface upsertTasks {
  /**
   * insert data into the table: "tasks"
   */
  insert_tasks: upsertTasks_insert_tasks | null;
}

export interface upsertTasksVariables {
  tasks: tasks_insert_input[];
  onTaskConflict: tasks_on_conflict;
}
