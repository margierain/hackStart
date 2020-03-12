/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { task_reviews_status_enum, tasks_status_enum } from './globalTypes';

// ====================================================
// GraphQL mutation operation: updateTaskReviewState
// ====================================================

export interface updateTaskReviewState_update_task_reviews_returning_task {
  __typename: 'tasks';
  id: number;
  status: tasks_status_enum;
  title: string;
  prLink: string | null;
  description: string;
  costInUSD: number;
  clientId: string;
  reviewerId: string | null;
  developerId: string | null;
  managerId: string | null;
}

export interface updateTaskReviewState_update_task_reviews_returning {
  __typename: 'task_reviews';
  id: number;
  status: task_reviews_status_enum;
  costInUSD: number;
  developerId: string | null;
  managerId: string | null;
  approvesTaskId: number;
  /**
   * An object relationship
   */
  task: updateTaskReviewState_update_task_reviews_returning_task;
}

export interface updateTaskReviewState_update_task_reviews {
  __typename: 'task_reviews_mutation_response';
  /**
   * data of the affected rows by the mutation
   */
  returning: updateTaskReviewState_update_task_reviews_returning[];
}

export interface updateTaskReviewState {
  /**
   * update data of the table: "task_reviews"
   */
  update_task_reviews: updateTaskReviewState_update_task_reviews | null;
}

export interface updateTaskReviewStateVariables {
  taskReviewId: number;
  status: task_reviews_status_enum;
  updatedAt: hasura_timestamptz;
}
