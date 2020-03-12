/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { tasks_status_enum } from './globalTypes';

// ====================================================
// GraphQL query operation: fetchTicketsByTicketCode
// ====================================================

export interface fetchTicketsByTicketCode_tickets_tasks_task_technologies_technology {
  __typename: 'technologies';
  name: string;
}

export interface fetchTicketsByTicketCode_tickets_tasks_task_technologies {
  __typename: 'task_technologies';
  /**
   * An object relationship
   */
  technology: fetchTicketsByTicketCode_tickets_tasks_task_technologies_technology;
}

export interface fetchTicketsByTicketCode_tickets_tasks_task_reviews_developer {
  __typename: 'developers';
  firstName: string | null;
  lastName: string | null;
}

export interface fetchTicketsByTicketCode_tickets_tasks_task_reviews {
  __typename: 'task_reviews';
  id: number;
  approvesTaskId: number;
  /**
   * An object relationship
   */
  developer: fetchTicketsByTicketCode_tickets_tasks_task_reviews_developer | null;
}

export interface fetchTicketsByTicketCode_tickets_tasks_developerByDeveloperid {
  __typename: 'developers';
  id: string;
  firstName: string | null;
  lastName: string | null;
}

export interface fetchTicketsByTicketCode_tickets_tasks_developerByManagerid {
  __typename: 'developers';
  id: string;
  firstName: string | null;
  lastName: string | null;
}

export interface fetchTicketsByTicketCode_tickets_tasks_developerByReviewerid {
  __typename: 'developers';
  id: string;
  firstName: string | null;
  lastName: string | null;
}

export interface fetchTicketsByTicketCode_tickets_tasks {
  __typename: 'tasks';
  id: number;
  description: string;
  title: string;
  createdAt: hasura_timestamptz;
  completedAt: hasura_timestamptz | null;
  branchName: string | null;
  prLink: string | null;
  costInUSD: number;
  status: tasks_status_enum;
  ticketCode: string;
  /**
   * An array relationship
   */
  task_technologies: fetchTicketsByTicketCode_tickets_tasks_task_technologies[];
  /**
   * An array relationship
   */
  task_reviews: fetchTicketsByTicketCode_tickets_tasks_task_reviews[];
  /**
   * An object relationship
   */
  developerByDeveloperid: fetchTicketsByTicketCode_tickets_tasks_developerByDeveloperid | null;
  /**
   * An object relationship
   */
  developerByManagerid: fetchTicketsByTicketCode_tickets_tasks_developerByManagerid | null;
  /**
   * An object relationship
   */
  developerByReviewerid: fetchTicketsByTicketCode_tickets_tasks_developerByReviewerid | null;
}

export interface fetchTicketsByTicketCode_tickets {
  __typename: 'tickets';
  code: string;
  completedAt: hasura_timestamptz | null;
  createdAt: hasura_timestamptz;
  costInCredits: number | null;
  description: string | null;
  id: number;
  startedAt: hasura_timestamptz | null;
  managerId: string | null;
  title: string;
  updatedAt: hasura_timestamptz;
  ticketLink: string | null;
  /**
   * An array relationship
   */
  tasks: fetchTicketsByTicketCode_tickets_tasks[];
}

export interface fetchTicketsByTicketCode {
  /**
   * fetch data from the table: "tickets"
   */
  tickets: fetchTicketsByTicketCode_tickets[];
}

export interface fetchTicketsByTicketCodeVariables {
  ticketCode: string;
}
