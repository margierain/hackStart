/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { tickets_bool_exp, tasks_status_enum } from './globalTypes';

// ====================================================
// GraphQL query operation: fetchClientTickets
// ====================================================

export interface fetchClientTickets_tickets_tasks_client_repository {
  __typename: 'client_repositories';
  id: hasura_uuid;
  clientRepoUrl: string;
}

export interface fetchClientTickets_tickets_tasks {
  __typename: 'tasks';
  id: number;
  status: tasks_status_enum;
  /**
   * An object relationship
   */
  client_repository: fetchClientTickets_tickets_tasks_client_repository;
}

export interface fetchClientTickets_tickets {
  __typename: 'tickets';
  id: number;
  ticketLink: string | null;
  code: string;
  completedAt: hasura_timestamptz | null;
  createdAt: hasura_timestamptz;
  discount: number;
  costInCredits: number | null;
  title: string;
  /**
   * An array relationship
   */
  tasks: fetchClientTickets_tickets_tasks[];
}

export interface fetchClientTickets {
  /**
   * fetch data from the table: "tickets"
   */
  tickets: fetchClientTickets_tickets[];
}

export interface fetchClientTicketsVariables {
  clientId: string;
  keywordFilter?: tickets_bool_exp | null;
  statusFilter?: tickets_bool_exp | null;
  repositoryFilter?: tickets_bool_exp | null;
}
