/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { task_reviews_status_enum, tasks_status_enum } from './globalTypes';

// ====================================================
// GraphQL query operation: fetchTaskReviews
// ====================================================

export interface fetchTaskReviews_task_reviews_task_task_reviews {
  __typename: 'task_reviews';
  id: number;
  status: task_reviews_status_enum;
  costInUSD: number;
  developerId: string | null;
  managerId: string | null;
  approvesTaskId: number;
}

export interface fetchTaskReviews_task_reviews_task {
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
  /**
   * An array relationship
   */
  task_reviews: fetchTaskReviews_task_reviews_task_task_reviews[];
}

export interface fetchTaskReviews_task_reviews {
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
  task: fetchTaskReviews_task_reviews_task;
}

export interface fetchTaskReviews {
  /**
   * fetch data from the table: "task_reviews"
   */
  task_reviews: fetchTaskReviews_task_reviews[];
}

export interface fetchTaskReviewsVariables {
  id: number;
}
