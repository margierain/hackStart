/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchClientsStandupByDeveloperId
// ====================================================

export interface fetchClientsStandupByDeveloperId_clients_tickets_ticket_daily_standups_user {
  __typename: 'users';
  id: number;
  avatarUrl: string | null;
}

export interface fetchClientsStandupByDeveloperId_clients_tickets_ticket_daily_standups_ticket {
  __typename: 'tickets';
  id: number;
  code: string;
}

export interface fetchClientsStandupByDeveloperId_clients_tickets_ticket_daily_standups {
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
  user: fetchClientsStandupByDeveloperId_clients_tickets_ticket_daily_standups_user;
  /**
   * An object relationship
   */
  ticket: fetchClientsStandupByDeveloperId_clients_tickets_ticket_daily_standups_ticket;
}

export interface fetchClientsStandupByDeveloperId_clients_tickets {
  __typename: 'tickets';
  code: string;
  title: string;
  clientId: string;
  id: number;
  /**
   * An array relationship
   */
  ticket_daily_standups: fetchClientsStandupByDeveloperId_clients_tickets_ticket_daily_standups[];
}

export interface fetchClientsStandupByDeveloperId_clients_client_daily_standups_user {
  __typename: 'users';
  id: number;
  avatarUrl: string | null;
}

export interface fetchClientsStandupByDeveloperId_clients_client_daily_standups_ticket_daily_standups_user {
  __typename: 'users';
  id: number;
  avatarUrl: string | null;
}

export interface fetchClientsStandupByDeveloperId_clients_client_daily_standups_ticket_daily_standups_ticket {
  __typename: 'tickets';
  code: string;
  title: string;
  clientId: string;
  id: number;
}

export interface fetchClientsStandupByDeveloperId_clients_client_daily_standups_ticket_daily_standups {
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
  user: fetchClientsStandupByDeveloperId_clients_client_daily_standups_ticket_daily_standups_user;
  /**
   * An object relationship
   */
  ticket: fetchClientsStandupByDeveloperId_clients_client_daily_standups_ticket_daily_standups_ticket;
}

export interface fetchClientsStandupByDeveloperId_clients_client_daily_standups {
  __typename: 'client_daily_standups';
  summary: string;
  createdAt: hasura_timestamptz;
  clientId: string;
  id: number;
  submittedAt: string | null;
  /**
   * An object relationship
   */
  user: fetchClientsStandupByDeveloperId_clients_client_daily_standups_user;
  /**
   * An array relationship
   */
  ticket_daily_standups: fetchClientsStandupByDeveloperId_clients_client_daily_standups_ticket_daily_standups[];
}

export interface fetchClientsStandupByDeveloperId_clients {
  __typename: 'clients';
  name: string;
  id: string;
  /**
   * An array relationship
   */
  tickets: fetchClientsStandupByDeveloperId_clients_tickets[];
  /**
   * An array relationship
   */
  client_daily_standups: fetchClientsStandupByDeveloperId_clients_client_daily_standups[];
}

export interface fetchClientsStandupByDeveloperId {
  /**
   * fetch data from the table: "clients"
   */
  clients: fetchClientsStandupByDeveloperId_clients[];
}

export interface fetchClientsStandupByDeveloperIdVariables {
  developerId: string;
}
