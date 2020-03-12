/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { tasks_status_enum } from './globalTypes';

// ====================================================
// GraphQL query operation: fetchTask
// ====================================================

export interface fetchTask_tasks_developerByDeveloperid_user_user_emails {
  __typename: 'user_emails';
  email: string;
}

export interface fetchTask_tasks_developerByDeveloperid_user {
  __typename: 'users';
  id: number;
  /**
   * An array relationship
   */
  user_emails: fetchTask_tasks_developerByDeveloperid_user_user_emails[];
}

export interface fetchTask_tasks_developerByDeveloperid {
  __typename: 'developers';
  id: string;
  /**
   * An object relationship
   */
  user: fetchTask_tasks_developerByDeveloperid_user;
}

export interface fetchTask_tasks {
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
  developerByDeveloperid: fetchTask_tasks_developerByDeveloperid | null;
  managerId: string | null;
}

export interface fetchTask {
  /**
   * fetch data from the table: "tasks"
   */
  tasks: fetchTask_tasks[];
}

export interface fetchTaskVariables {
  id: number;
}
