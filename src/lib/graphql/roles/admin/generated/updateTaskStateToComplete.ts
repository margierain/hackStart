/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { tasks_status_enum, task_reviews_status_enum } from './globalTypes';

// ====================================================
// GraphQL mutation operation: updateTaskStateToComplete
// ====================================================

export interface updateTaskStateToComplete_update_tasks_returning_developerByDeveloperid_user_user_emails {
  __typename: 'user_emails';
  email: string;
}

export interface updateTaskStateToComplete_update_tasks_returning_developerByDeveloperid_user {
  __typename: 'users';
  id: number;
  /**
   * An array relationship
   */
  user_emails: updateTaskStateToComplete_update_tasks_returning_developerByDeveloperid_user_user_emails[];
}

export interface updateTaskStateToComplete_update_tasks_returning_developerByDeveloperid {
  __typename: 'developers';
  id: string;
  /**
   * An object relationship
   */
  user: updateTaskStateToComplete_update_tasks_returning_developerByDeveloperid_user;
}

export interface updateTaskStateToComplete_update_tasks_returning {
  __typename: 'tasks';
  id: number;
  status: tasks_status_enum;
  title: string;
  prLink: string | null;
  description: string;
  costInUSD: number;
  clientId: string;
  /**
   * An object relationship
   */
  developerByDeveloperid: updateTaskStateToComplete_update_tasks_returning_developerByDeveloperid | null;
  reviewerId: string | null;
  managerId: string | null;
}

export interface updateTaskStateToComplete_update_tasks {
  __typename: 'tasks_mutation_response';
  /**
   * data of the affected rows by the mutation
   */
  returning: updateTaskStateToComplete_update_tasks_returning[];
}

export interface updateTaskStateToComplete_update_task_reviews_returning {
  __typename: 'task_reviews';
  id: number;
  costInUSD: number;
  status: task_reviews_status_enum;
  developerId: string | null;
  managerId: string | null;
}

export interface updateTaskStateToComplete_update_task_reviews {
  __typename: 'task_reviews_mutation_response';
  /**
   * data of the affected rows by the mutation
   */
  returning: updateTaskStateToComplete_update_task_reviews_returning[];
}

export interface updateTaskStateToComplete {
  /**
   * update data of the table: "tasks"
   */
  update_tasks: updateTaskStateToComplete_update_tasks | null;
  /**
   * update data of the table: "task_reviews"
   */
  update_task_reviews: updateTaskStateToComplete_update_task_reviews | null;
}

export interface updateTaskStateToCompleteVariables {
  taskId: number;
  taskStatus: tasks_status_enum;
  completedAt: hasura_timestamptz;
}
