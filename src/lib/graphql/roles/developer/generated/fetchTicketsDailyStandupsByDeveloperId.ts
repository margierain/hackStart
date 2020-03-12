/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { tasks_status_enum } from './globalTypes';

// ====================================================
// GraphQL query operation: fetchTicketsDailyStandupsByDeveloperId
// ====================================================

export interface fetchTicketsDailyStandupsByDeveloperId_tickets_ticket_daily_standups_user {
  __typename: 'users';
  id: number;
  avatarUrl: string | null;
}

export interface fetchTicketsDailyStandupsByDeveloperId_tickets_ticket_daily_standups_ticket {
  __typename: 'tickets';
  id: number;
  code: string;
}

export interface fetchTicketsDailyStandupsByDeveloperId_tickets_ticket_daily_standups {
  __typename: 'ticket_daily_standups';
  id: number;
  submittedAt: string;
  createdAt: hasura_timestamptz;
  message: string;
  updatedETA: hasura_timestamptz;
  updatedAt: hasura_timestamptz;
  ticketId: number;
  /**
   * An object relationship
   */
  user: fetchTicketsDailyStandupsByDeveloperId_tickets_ticket_daily_standups_user;
  /**
   * An object relationship
   */
  ticket: fetchTicketsDailyStandupsByDeveloperId_tickets_ticket_daily_standups_ticket;
}

export interface fetchTicketsDailyStandupsByDeveloperId_tickets_tasks_task_daily_standups_user {
  __typename: 'users';
  id: number;
  avatarUrl: string | null;
}

export interface fetchTicketsDailyStandupsByDeveloperId_tickets_tasks_task_daily_standups_task {
  __typename: 'tasks';
  id: number;
  ticketCode: string;
}

export interface fetchTicketsDailyStandupsByDeveloperId_tickets_tasks_task_daily_standups {
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
  user: fetchTicketsDailyStandupsByDeveloperId_tickets_tasks_task_daily_standups_user;
  /**
   * An object relationship
   */
  task: fetchTicketsDailyStandupsByDeveloperId_tickets_tasks_task_daily_standups_task;
}

export interface fetchTicketsDailyStandupsByDeveloperId_tickets_tasks_ticket {
  __typename: 'tickets';
  id: number;
}

export interface fetchTicketsDailyStandupsByDeveloperId_tickets_tasks {
  __typename: 'tasks';
  /**
   * An array relationship
   */
  task_daily_standups: fetchTicketsDailyStandupsByDeveloperId_tickets_tasks_task_daily_standups[];
  clientId: string;
  status: tasks_status_enum;
  startedAt: hasura_timestamptz | null;
  prLink: string | null;
  completedAt: hasura_timestamptz | null;
  id: number;
  /**
   * An object relationship
   */
  ticket: fetchTicketsDailyStandupsByDeveloperId_tickets_tasks_ticket;
}

export interface fetchTicketsDailyStandupsByDeveloperId_tickets {
  __typename: 'tickets';
  startedAt: hasura_timestamptz | null;
  id: number;
  code: string;
  completedAt: hasura_timestamptz | null;
  createdAt: hasura_timestamptz;
  managerId: string | null;
  title: string;
  /**
   * An array relationship
   */
  ticket_daily_standups: fetchTicketsDailyStandupsByDeveloperId_tickets_ticket_daily_standups[];
  /**
   * An array relationship
   */
  tasks: fetchTicketsDailyStandupsByDeveloperId_tickets_tasks[];
}

export interface fetchTicketsDailyStandupsByDeveloperId {
  /**
   * fetch data from the table: "tickets"
   */
  tickets: fetchTicketsDailyStandupsByDeveloperId_tickets[];
}

export interface fetchTicketsDailyStandupsByDeveloperIdVariables {
  developerId: string;
}
