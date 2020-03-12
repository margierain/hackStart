/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { tasks_status_enum, task_reviews_status_enum } from './globalTypes';

// ====================================================
// GraphQL query operation: fetchTaskAndReviews
// ====================================================

export interface fetchTaskAndReviews_tasks_developerByDeveloperid_user_user_emails {
  __typename: 'user_emails';
  email: string;
}

export interface fetchTaskAndReviews_tasks_developerByDeveloperid_user_timedoctor_user {
  __typename: 'timedoctor_users';
  sid: string | null;
}

export interface fetchTaskAndReviews_tasks_developerByDeveloperid_user {
  __typename: 'users';
  id: number;
  /**
   * An array relationship
   */
  user_emails: fetchTaskAndReviews_tasks_developerByDeveloperid_user_user_emails[];
  /**
   * An object relationship
   */
  timedoctor_user: fetchTaskAndReviews_tasks_developerByDeveloperid_user_timedoctor_user | null;
}

export interface fetchTaskAndReviews_tasks_developerByDeveloperid {
  __typename: 'developers';
  /**
   * An object relationship
   */
  user: fetchTaskAndReviews_tasks_developerByDeveloperid_user;
  id: string;
}

export interface fetchTaskAndReviews_tasks_task_reviews {
  __typename: 'task_reviews';
  id: number;
  costInUSD: number;
  status: task_reviews_status_enum;
  developerId: string | null;
  managerId: string | null;
}

export interface fetchTaskAndReviews_tasks_task_time_logs_developer_user_user_emails {
  __typename: 'user_emails';
  email: string;
}

export interface fetchTaskAndReviews_tasks_task_time_logs_developer_user_timedoctor_user {
  __typename: 'timedoctor_users';
  sid: string | null;
}

export interface fetchTaskAndReviews_tasks_task_time_logs_developer_user {
  __typename: 'users';
  id: number;
  /**
   * An array relationship
   */
  user_emails: fetchTaskAndReviews_tasks_task_time_logs_developer_user_user_emails[];
  /**
   * An object relationship
   */
  timedoctor_user: fetchTaskAndReviews_tasks_task_time_logs_developer_user_timedoctor_user | null;
}

export interface fetchTaskAndReviews_tasks_task_time_logs_developer {
  __typename: 'developers';
  id: string;
  /**
   * An object relationship
   */
  user: fetchTaskAndReviews_tasks_task_time_logs_developer_user;
}

export interface fetchTaskAndReviews_tasks_task_time_logs {
  __typename: 'task_time_logs';
  id: number;
  timeSpent: number;
  timedoctorTaskId: string;
  startedAt: hasura_timestamptz;
  finishedAt: hasura_timestamptz | null;
  /**
   * An object relationship
   */
  developer: fetchTaskAndReviews_tasks_task_time_logs_developer;
}

export interface fetchTaskAndReviews_tasks {
  __typename: 'tasks';
  id: number;
  status: tasks_status_enum;
  title: string;
  prLink: string | null;
  description: string;
  costInUSD: number;
  clientId: string;
  reviewerId: string | null;
  /**
   * An object relationship
   */
  developerByDeveloperid: fetchTaskAndReviews_tasks_developerByDeveloperid | null;
  managerId: string | null;
  ticketCode: string;
  /**
   * An array relationship
   */
  task_reviews: fetchTaskAndReviews_tasks_task_reviews[];
  /**
   * An array relationship
   */
  task_time_logs: fetchTaskAndReviews_tasks_task_time_logs[];
}

export interface fetchTaskAndReviews {
  /**
   * fetch data from the table: "tasks"
   */
  tasks: fetchTaskAndReviews_tasks[];
}

export interface fetchTaskAndReviewsVariables {
  id: number;
}
