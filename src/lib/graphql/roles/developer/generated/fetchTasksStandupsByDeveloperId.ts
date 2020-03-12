/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { tasks_status_enum } from './globalTypes';

// ====================================================
// GraphQL query operation: fetchTasksStandupsByDeveloperId
// ====================================================

export interface fetchTasksStandupsByDeveloperId_tasks_task_daily_standups_user {
  __typename: 'users';
  avatarUrl: string | null;
}

export interface fetchTasksStandupsByDeveloperId_tasks_task_daily_standups_task {
  __typename: 'tasks';
  id: number;
  ticketCode: string;
}

export interface fetchTasksStandupsByDeveloperId_tasks_task_daily_standups {
  __typename: 'task_daily_standups';
  id: number;
  submittedAt: string;
  createdAt: hasura_timestamptz;
  summary: string;
  updatedETA: hasura_timestamptz;
  taskId: number;
  /**
   * An object relationship
   */
  user: fetchTasksStandupsByDeveloperId_tasks_task_daily_standups_user;
  /**
   * An object relationship
   */
  task: fetchTasksStandupsByDeveloperId_tasks_task_daily_standups_task;
}

export interface fetchTasksStandupsByDeveloperId_tasks {
  __typename: 'tasks';
  developerId: string | null;
  description: string;
  startedAt: hasura_timestamptz | null;
  status: tasks_status_enum;
  createdAt: hasura_timestamptz;
  title: string;
  id: number;
  /**
   * An array relationship
   */
  task_daily_standups: fetchTasksStandupsByDeveloperId_tasks_task_daily_standups[];
}

export interface fetchTasksStandupsByDeveloperId {
  /**
   * fetch data from the table: "tasks"
   */
  tasks: fetchTasksStandupsByDeveloperId_tasks[];
}

export interface fetchTasksStandupsByDeveloperIdVariables {
  developerId: string;
}
