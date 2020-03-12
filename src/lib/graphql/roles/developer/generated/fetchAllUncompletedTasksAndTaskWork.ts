/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { tasks_status_enum } from './globalTypes';

// ====================================================
// GraphQL query operation: fetchAllUncompletedTasksAndTaskWork
// ====================================================

export interface fetchAllUncompletedTasksAndTaskWork_developers_user {
  __typename: 'users';
  id: number;
}

export interface fetchAllUncompletedTasksAndTaskWork_developers {
  __typename: 'developers';
  login: string;
  /**
   * An object relationship
   */
  user: fetchAllUncompletedTasksAndTaskWork_developers_user;
}

export interface fetchAllUncompletedTasksAndTaskWork_tasks_task_daily_standups {
  __typename: 'task_daily_standups';
  id: number;
  userId: number;
  summary: string;
  updatedETA: hasura_timestamptz;
}

export interface fetchAllUncompletedTasksAndTaskWork_tasks {
  __typename: 'tasks';
  id: number;
  ticketCode: string;
  title: string;
  developerId: string | null;
  costInUSD: number;
  managerId: string | null;
  status: tasks_status_enum;
  /**
   * An array relationship
   */
  task_daily_standups: fetchAllUncompletedTasksAndTaskWork_tasks_task_daily_standups[];
}

export interface fetchAllUncompletedTasksAndTaskWork_task_reviews_task_task_daily_standups {
  __typename: 'task_daily_standups';
  id: number;
  userId: number;
  summary: string;
  updatedETA: hasura_timestamptz;
}

export interface fetchAllUncompletedTasksAndTaskWork_task_reviews_task {
  __typename: 'tasks';
  id: number;
  title: string;
  ticketCode: string;
  status: tasks_status_enum;
  /**
   * An array relationship
   */
  task_daily_standups: fetchAllUncompletedTasksAndTaskWork_task_reviews_task_task_daily_standups[];
}

export interface fetchAllUncompletedTasksAndTaskWork_task_reviews {
  __typename: 'task_reviews';
  id: number;
  managerId: string | null;
  developerId: string | null;
  costInUSD: number;
  /**
   * An object relationship
   */
  task: fetchAllUncompletedTasksAndTaskWork_task_reviews_task;
}

export interface fetchAllUncompletedTasksAndTaskWork_user_daily_standups_user_developer {
  __typename: 'developers';
  id: string;
}

export interface fetchAllUncompletedTasksAndTaskWork_user_daily_standups_user {
  __typename: 'users';
  /**
   * An object relationship
   */
  developer: fetchAllUncompletedTasksAndTaskWork_user_daily_standups_user_developer | null;
}

export interface fetchAllUncompletedTasksAndTaskWork_user_daily_standups {
  __typename: 'user_daily_standups';
  id: number;
  summary: string;
  userId: number;
  /**
   * An object relationship
   */
  user: fetchAllUncompletedTasksAndTaskWork_user_daily_standups_user;
}

export interface fetchAllUncompletedTasksAndTaskWork {
  /**
   * fetch data from the table: "developers"
   */
  developers: fetchAllUncompletedTasksAndTaskWork_developers[];
  /**
   * fetch data from the table: "tasks"
   */
  tasks: fetchAllUncompletedTasksAndTaskWork_tasks[];
  /**
   * fetch data from the table: "task_reviews"
   */
  task_reviews: fetchAllUncompletedTasksAndTaskWork_task_reviews[];
  /**
   * fetch data from the table: "user_daily_standups"
   */
  user_daily_standups: fetchAllUncompletedTasksAndTaskWork_user_daily_standups[];
}

export interface fetchAllUncompletedTasksAndTaskWorkVariables {
  createdAt?: hasura_timestamptz | null;
  developerId: string;
  nextDay?: hasura_timestamptz | null;
}
