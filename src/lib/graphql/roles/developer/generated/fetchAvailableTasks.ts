/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { tasks_type_enum, tasks_status_enum } from './globalTypes';

// ====================================================
// GraphQL query operation: fetchAvailableTasks
// ====================================================

export interface fetchAvailableTasks_tasks_ticket {
  __typename: 'tickets';
  ticketLink: string | null;
  code: string;
}

export interface fetchAvailableTasks_tasks_developerByManagerid {
  __typename: 'developers';
  id: string;
  firstName: string | null;
}

export interface fetchAvailableTasks_tasks_task_technologies_technology {
  __typename: 'technologies';
  id: number;
  name: string;
}

export interface fetchAvailableTasks_tasks_task_technologies {
  __typename: 'task_technologies';
  /**
   * An object relationship
   */
  technology: fetchAvailableTasks_tasks_task_technologies_technology;
}

export interface fetchAvailableTasks_tasks_client {
  __typename: 'clients';
  id: string;
  name: string;
}

export interface fetchAvailableTasks_tasks_task_attributes {
  __typename: 'task_attributes';
  id: number | null;
  remainingduplicatelimit: hasura_bigint | null;
}

export interface fetchAvailableTasks_tasks {
  __typename: 'tasks';
  id: number;
  title: string;
  description: string;
  updatedAt: hasura_timestamptz;
  costInUSD: number;
  type: tasks_type_enum;
  status: tasks_status_enum;
  ticketCode: string;
  /**
   * An object relationship
   */
  ticket: fetchAvailableTasks_tasks_ticket;
  /**
   * An object relationship
   */
  developerByManagerid: fetchAvailableTasks_tasks_developerByManagerid | null;
  /**
   * An array relationship
   */
  task_technologies: fetchAvailableTasks_tasks_task_technologies[];
  /**
   * An object relationship
   */
  client: fetchAvailableTasks_tasks_client;
  /**
   * An object relationship
   */
  task_attributes: fetchAvailableTasks_tasks_task_attributes | null;
}

export interface fetchAvailableTasks {
  /**
   * fetch data from the table: "tasks"
   */
  tasks: fetchAvailableTasks_tasks[];
}
