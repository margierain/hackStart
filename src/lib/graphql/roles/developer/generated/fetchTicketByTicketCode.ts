/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchTicketByTicketCode
// ====================================================

export interface fetchTicketByTicketCode_tickets {
  __typename: 'tickets';
  id: number;
  title: string;
  code: string;
  description: string | null;
  clientId: string;
  managerId: string | null;
  ticketLink: string | null;
  costInCredits: number | null;
  completedAt: hasura_timestamptz | null;
  createdAt: hasura_timestamptz;
  discount: number;
  isInternal: boolean;
}

export interface fetchTicketByTicketCode {
  /**
   * fetch data from the table: "tickets"
   */
  tickets: fetchTicketByTicketCode_tickets[];
}

export interface fetchTicketByTicketCodeVariables {
  ticketId: number;
}
