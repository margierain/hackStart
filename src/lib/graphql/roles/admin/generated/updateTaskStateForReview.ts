/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { task_reviews_status_enum, tasks_status_enum } from './globalTypes';

// ====================================================
// GraphQL mutation operation: updateTaskStateForReview
// ====================================================

export interface updateTaskStateForReview_update_tasks_returning_developerByDeveloperid_user_user_emails {
  __typename: 'user_emails';
  email: string;
}

export interface updateTaskStateForReview_update_tasks_returning_developerByDeveloperid_user {
  __typename: 'users';
  id: number;
  /**
   * An array relationship
   */
  user_emails: updateTaskStateForReview_update_tasks_returning_developerByDeveloperid_user_user_emails[];
}

export interface updateTaskStateForReview_update_tasks_returning_developerByDeveloperid {
  __typename: 'developers';
  id: string;
  /**
   * An object relationship
   */
  user: updateTaskStateForReview_update_tasks_returning_developerByDeveloperid_user;
}

export interface updateTaskStateForReview_update_tasks_returning {
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
  developerByDeveloperid: updateTaskStateForReview_update_tasks_returning_developerByDeveloperid | null;
  reviewerId: string | null;
  managerId: string | null;
}

export interface updateTaskStateForReview_update_tasks {
  __typename: 'tasks_mutation_response';
  /**
   * data of the affected rows by the mutation
   */
  returning: updateTaskStateForReview_update_tasks_returning[];
}

export interface updateTaskStateForReview_insert_task_reviews_returning {
  __typename: 'task_reviews';
  id: number;
}

export interface updateTaskStateForReview_insert_task_reviews {
  __typename: 'task_reviews_mutation_response';
  /**
   * data of the affected rows by the mutation
   */
  returning: updateTaskStateForReview_insert_task_reviews_returning[];
}

export interface updateTaskStateForReview {
  /**
   * update data of the table: "tasks"
   */
  update_tasks: updateTaskStateForReview_update_tasks | null;
  /**
   * insert data into the table: "task_reviews"
   */
  insert_task_reviews: updateTaskStateForReview_insert_task_reviews | null;
}

export interface updateTaskStateForReviewVariables {
  taskId: number;
  reviewCost: number;
  managerId?: string | null;
  reviewStatus: task_reviews_status_enum;
  reviewerId?: string | null;
  updatedAt: hasura_timestamptz;
}
