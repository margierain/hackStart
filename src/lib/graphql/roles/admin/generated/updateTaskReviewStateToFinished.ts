/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { task_reviews_status_enum, tasks_status_enum } from './globalTypes';

// ====================================================
// GraphQL mutation operation: updateTaskReviewStateToFinished
// ====================================================

export interface updateTaskReviewStateToFinished_update_task_reviews_returning {
  __typename: 'task_reviews';
  id: number;
  status: task_reviews_status_enum;
  costInUSD: number;
  developerId: string | null;
  managerId: string | null;
  approvesTaskId: number;
}

export interface updateTaskReviewStateToFinished_update_task_reviews {
  __typename: 'task_reviews_mutation_response';
  /**
   * data of the affected rows by the mutation
   */
  returning: updateTaskReviewStateToFinished_update_task_reviews_returning[];
}

export interface updateTaskReviewStateToFinished_update_tasks_returning {
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

export interface updateTaskReviewStateToFinished_update_tasks {
  __typename: 'tasks_mutation_response';
  /**
   * data of the affected rows by the mutation
   */
  returning: updateTaskReviewStateToFinished_update_tasks_returning[];
}

export interface updateTaskReviewStateToFinished {
  /**
   * update data of the table: "task_reviews"
   */
  update_task_reviews: updateTaskReviewStateToFinished_update_task_reviews | null;
  /**
   * update data of the table: "tasks"
   */
  update_tasks: updateTaskReviewStateToFinished_update_tasks | null;
}

export interface updateTaskReviewStateToFinishedVariables {
  taskId: number;
  taskReviewId: number;
  taskReviewStatus: task_reviews_status_enum;
  taskStatus: tasks_status_enum;
  updatedAt: hasura_timestamptz;
}
