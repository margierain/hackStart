/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { tasks_status_enum, tasks_type_enum } from './globalTypes';

// ====================================================
// GraphQL query operation: fetchTicketDetailsByTicketCode
// ====================================================

export interface fetchTicketDetailsByTicketCode_tickets_ticket_daily_standups {
  __typename: 'ticket_daily_standups';
  message: string;
  updatedAt: hasura_timestamptz;
  updatedETA: hasura_timestamptz;
}

export interface fetchTicketDetailsByTicketCode_tickets_tasks_task_technologies_technology {
  __typename: 'technologies';
  name: string;
}

export interface fetchTicketDetailsByTicketCode_tickets_tasks_task_technologies {
  __typename: 'task_technologies';
  /**
   * An object relationship
   */
  technology: fetchTicketDetailsByTicketCode_tickets_tasks_task_technologies_technology;
}

export interface fetchTicketDetailsByTicketCode_tickets_tasks_task_reviews_developer {
  __typename: 'developers';
  firstName: string | null;
  lastName: string | null;
  githubId: string | null;
}

export interface fetchTicketDetailsByTicketCode_tickets_tasks_task_reviews_developerByDeveloperid {
  __typename: 'developers';
  firstName: string | null;
  lastName: string | null;
  githubId: string | null;
}

export interface fetchTicketDetailsByTicketCode_tickets_tasks_task_reviews {
  __typename: 'task_reviews';
  id: number;
  approvesTaskId: number;
  /**
   * An object relationship
   */
  developer: fetchTicketDetailsByTicketCode_tickets_tasks_task_reviews_developer | null;
  /**
   * An object relationship
   */
  developerByDeveloperid: fetchTicketDetailsByTicketCode_tickets_tasks_task_reviews_developerByDeveloperid | null;
}

export interface fetchTicketDetailsByTicketCode_tickets_tasks_developerByDeveloperid {
  __typename: 'developers';
  firstName: string | null;
  lastName: string | null;
  githubId: string | null;
}

export interface fetchTicketDetailsByTicketCode_tickets_tasks_developerByManagerid {
  __typename: 'developers';
  id: string;
  lastName: string | null;
  firstName: string | null;
  githubId: string | null;
}

export interface fetchTicketDetailsByTicketCode_tickets_tasks_developerByReviewerid {
  __typename: 'developers';
  id: string;
  lastName: string | null;
  firstName: string | null;
  githubId: string | null;
}

export interface fetchTicketDetailsByTicketCode_tickets_tasks_task_daily_standups {
  __typename: 'task_daily_standups';
  summary: string;
  updatedAt: hasura_timestamptz;
  updatedETA: hasura_timestamptz;
}

export interface fetchTicketDetailsByTicketCode_tickets_tasks {
  __typename: 'tasks';
  id: number;
  title: string;
  description: string;
  createdAt: hasura_timestamptz;
  branchName: string | null;
  prLink: string | null;
  status: tasks_status_enum;
  type: tasks_type_enum;
  ticketCode: string;
  /**
   * An array relationship
   */
  task_technologies: fetchTicketDetailsByTicketCode_tickets_tasks_task_technologies[];
  /**
   * An array relationship
   */
  task_reviews: fetchTicketDetailsByTicketCode_tickets_tasks_task_reviews[];
  /**
   * An object relationship
   */
  developerByDeveloperid: fetchTicketDetailsByTicketCode_tickets_tasks_developerByDeveloperid | null;
  /**
   * An object relationship
   */
  developerByManagerid: fetchTicketDetailsByTicketCode_tickets_tasks_developerByManagerid | null;
  /**
   * An object relationship
   */
  developerByReviewerid: fetchTicketDetailsByTicketCode_tickets_tasks_developerByReviewerid | null;
  /**
   * An array relationship
   */
  task_daily_standups: fetchTicketDetailsByTicketCode_tickets_tasks_task_daily_standups[];
}

export interface fetchTicketDetailsByTicketCode_tickets {
  __typename: 'tickets';
  code: string;
  completedAt: hasura_timestamptz | null;
  clientId: string;
  cancelledAt: hasura_timestamptz | null;
  createdAt: hasura_timestamptz;
  costInCredits: number | null;
  description: string | null;
  id: number;
  invoiceId: number | null;
  startedAt: hasura_timestamptz | null;
  managerId: string | null;
  syncedAt: hasura_timestamptz | null;
  title: string;
  updatedAt: hasura_timestamptz;
  ticketLink: string | null;
  /**
   * An array relationship
   */
  ticket_daily_standups: fetchTicketDetailsByTicketCode_tickets_ticket_daily_standups[];
  /**
   * An array relationship
   */
  tasks: fetchTicketDetailsByTicketCode_tickets_tasks[];
}

export interface fetchTicketDetailsByTicketCode {
  /**
   * fetch data from the table: "tickets"
   */
  tickets: fetchTicketDetailsByTicketCode_tickets[];
}

export interface fetchTicketDetailsByTicketCodeVariables {
  ticketCode: string;
}
