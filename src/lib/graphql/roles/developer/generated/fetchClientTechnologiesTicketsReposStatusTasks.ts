/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { tasks_type_enum, tasks_status_enum } from './globalTypes';

// ====================================================
// GraphQL query operation: fetchClientTechnologiesTicketsReposStatusTasks
// ====================================================

export interface fetchClientTechnologiesTicketsReposStatusTasks_clients {
  __typename: 'clients';
  name: string;
  id: string;
}

export interface fetchClientTechnologiesTicketsReposStatusTasks_technologies {
  __typename: 'technologies';
  id: number;
  name: string;
}

export interface fetchClientTechnologiesTicketsReposStatusTasks_tickets {
  __typename: 'tickets';
  code: string;
  clientId: string;
}

export interface fetchClientTechnologiesTicketsReposStatusTasks_client_repositories {
  __typename: 'client_repositories';
  id: hasura_uuid;
  clientRepoUrl: string;
  clientId: string;
}

export interface fetchClientTechnologiesTicketsReposStatusTasks_tasks_type {
  __typename: 'tasks_type';
  type: string;
}

export interface fetchClientTechnologiesTicketsReposStatusTasks_tasks_status {
  __typename: 'tasks_status';
  type: string;
}

export interface fetchClientTechnologiesTicketsReposStatusTasks_developers {
  __typename: 'developers';
  id: string;
}

export interface fetchClientTechnologiesTicketsReposStatusTasks_tasks_task_technologies {
  __typename: 'task_technologies';
  technologiesId: number;
}

export interface fetchClientTechnologiesTicketsReposStatusTasks_tasks {
  __typename: 'tasks';
  type: tasks_type_enum;
  description: string;
  title: string;
  ticketCode: string;
  prLink: string | null;
  costInUSD: number;
  clientId: string;
  managerId: string | null;
  reviewerId: string | null;
  developerId: string | null;
  branchName: string | null;
  clientRepositoryId: hasura_uuid;
  isBillable: boolean;
  status: tasks_status_enum;
  /**
   * An array relationship
   */
  task_technologies: fetchClientTechnologiesTicketsReposStatusTasks_tasks_task_technologies[];
}

export interface fetchClientTechnologiesTicketsReposStatusTasks {
  /**
   * fetch data from the table: "clients"
   */
  clients: fetchClientTechnologiesTicketsReposStatusTasks_clients[];
  /**
   * fetch data from the table: "technologies"
   */
  technologies: fetchClientTechnologiesTicketsReposStatusTasks_technologies[];
  /**
   * fetch data from the table: "tickets"
   */
  tickets: fetchClientTechnologiesTicketsReposStatusTasks_tickets[];
  /**
   * fetch data from the table: "client_repositories"
   */
  client_repositories: fetchClientTechnologiesTicketsReposStatusTasks_client_repositories[];
  /**
   * fetch data from the table: "tasks_type"
   */
  tasks_type: fetchClientTechnologiesTicketsReposStatusTasks_tasks_type[];
  /**
   * fetch data from the table: "tasks_status"
   */
  tasks_status: fetchClientTechnologiesTicketsReposStatusTasks_tasks_status[];
  /**
   * fetch data from the table: "developers"
   */
  developers: fetchClientTechnologiesTicketsReposStatusTasks_developers[];
  /**
   * fetch data from the table: "tasks"
   */
  tasks: fetchClientTechnologiesTicketsReposStatusTasks_tasks[];
}

export interface fetchClientTechnologiesTicketsReposStatusTasksVariables {
  taskId?: number | null;
}
