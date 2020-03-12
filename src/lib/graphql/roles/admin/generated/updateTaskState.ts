/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { tasks_status_enum } from './globalTypes';

// ====================================================
// GraphQL mutation operation: updateTaskState
// ====================================================

export interface updateTaskState_update_tasks_returning_developerByDeveloperid_user_user_emails {
  __typename: 'user_emails';
  email: string;
}

export interface updateTaskState_update_tasks_returning_developerByDeveloperid_user {
  __typename: 'users';
  id: number;
  /**
   * An array relationship
   */
  user_emails: updateTaskState_update_tasks_returning_developerByDeveloperid_user_user_emails[];
}

export interface updateTaskState_update_tasks_returning_developerByDeveloperid {
  __typename: 'developers';
  id: string;
  /**
   * An object relationship
   */
  user: updateTaskState_update_tasks_returning_developerByDeveloperid_user;
}

export interface updateTaskState_update_tasks_returning {
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
  developerByDeveloperid: updateTaskState_update_tasks_returning_developerByDeveloperid | null;
  reviewerId: string | null;
  managerId: string | null;
}

export interface updateTaskState_update_tasks {
  __typename: 'tasks_mutation_response';
  /**
   * data of the affected rows by the mutation
   */
  returning: updateTaskState_update_tasks_returning[];
}

export interface updateTaskState {
  /**
   * update data of the table: "tasks"
   */
  update_tasks: updateTaskState_update_tasks | null;
}

export interface updateTaskStateVariables {
  taskId: number;
  status: tasks_status_enum;
  updatedAt: hasura_timestamptz;
}
