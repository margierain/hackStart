/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { tasks_status_enum } from './globalTypes';

// ====================================================
// GraphQL query operation: fetchAllCompletedTasks
// ====================================================

export interface fetchAllCompletedTasks_tasks_developerByDeveloperid {
  __typename: 'developers';
  login: string;
}

export interface fetchAllCompletedTasks_tasks_developerByManagerid {
  __typename: 'developers';
  login: string;
}

export interface fetchAllCompletedTasks_tasks_developerByReviewerid {
  __typename: 'developers';
  login: string;
}

export interface fetchAllCompletedTasks_tasks {
  __typename: 'tasks';
  id: number;
  /**
   * An object relationship
   */
  developerByDeveloperid: fetchAllCompletedTasks_tasks_developerByDeveloperid | null;
  /**
   * An object relationship
   */
  developerByManagerid: fetchAllCompletedTasks_tasks_developerByManagerid | null;
  /**
   * An object relationship
   */
  developerByReviewerid: fetchAllCompletedTasks_tasks_developerByReviewerid | null;
  managerId: string | null;
  reviewerId: string | null;
  completedAt: hasura_timestamptz | null;
  costInUSD: number;
  status: tasks_status_enum;
}

export interface fetchAllCompletedTasks {
  /**
   * fetch data from the table: "tasks"
   */
  tasks: fetchAllCompletedTasks_tasks[];
}

export interface fetchAllCompletedTasksVariables {
  completedAt: hasura_timestamptz;
}
