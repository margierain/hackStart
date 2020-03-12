/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchDevelopersClientsAndTicketDetails
// ====================================================

export interface fetchDevelopersClientsAndTicketDetails_developers {
  __typename: 'developers';
  id: string;
  firstName: string | null;
  lastName: string | null;
}

export interface fetchDevelopersClientsAndTicketDetails_clients {
  __typename: 'clients';
  id: string;
  name: string;
}

export interface fetchDevelopersClientsAndTicketDetails_tickets {
  __typename: 'tickets';
  id: number;
  code: string;
  title: string;
  discount: number;
  clientId: string;
  createdAt: hasura_timestamptz;
  managerId: string | null;
  isInternal: boolean;
  ticketLink: string | null;
  description: string | null;
  completedAt: hasura_timestamptz | null;
  costInCredits: number | null;
}

export interface fetchDevelopersClientsAndTicketDetails {
  /**
   * fetch data from the table: "developers"
   */
  developers: fetchDevelopersClientsAndTicketDetails_developers[];
  /**
   * fetch data from the table: "clients"
   */
  clients: fetchDevelopersClientsAndTicketDetails_clients[];
  /**
   * fetch data from the table: "tickets"
   */
  tickets: fetchDevelopersClientsAndTicketDetails_tickets[];
}

export interface fetchDevelopersClientsAndTicketDetailsVariables {
  ticketId?: number | null;
}
