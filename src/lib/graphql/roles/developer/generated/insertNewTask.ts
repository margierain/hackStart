/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { tasks_insert_input } from './globalTypes';

// ====================================================
// GraphQL mutation operation: insertNewTask
// ====================================================

export interface insertNewTask_insert_tasks_returning {
  __typename: 'tasks';
  id: number;
}

export interface insertNewTask_insert_tasks {
  __typename: 'tasks_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: insertNewTask_insert_tasks_returning[];
}

export interface insertNewTask {
  /**
   * insert data into the table: "tasks"
   */
  insert_tasks: insertNewTask_insert_tasks | null;
}

export interface insertNewTaskVariables {
  task: tasks_insert_input[];
}
