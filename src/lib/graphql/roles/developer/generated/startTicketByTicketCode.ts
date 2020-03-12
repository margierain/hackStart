/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: startTicketByTicketCode
// ====================================================

export interface startTicketByTicketCode_update_tickets_returning {
  __typename: 'tickets';
  code: string;
  startedAt: hasura_timestamptz | null;
}

export interface startTicketByTicketCode_update_tickets {
  __typename: 'tickets_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: startTicketByTicketCode_update_tickets_returning[];
}

export interface startTicketByTicketCode {
  /**
   * update data of the table: "tickets"
   */
  update_tickets: startTicketByTicketCode_update_tickets | null;
}

export interface startTicketByTicketCodeVariables {
  ticketCode: string;
  startedAt: hasura_timestamptz;
}
