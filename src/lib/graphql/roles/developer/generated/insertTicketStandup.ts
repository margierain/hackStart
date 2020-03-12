/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: insertTicketStandup
// ====================================================

export interface insertTicketStandup_insert_ticket_daily_standups_returning {
  __typename: 'ticket_daily_standups';
  id: number;
  ticketId: number;
}

export interface insertTicketStandup_insert_ticket_daily_standups {
  __typename: 'ticket_daily_standups_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: insertTicketStandup_insert_ticket_daily_standups_returning[];
}

export interface insertTicketStandup {
  /**
   * insert data into the table: "ticket_daily_standups"
   */
  insert_ticket_daily_standups: insertTicketStandup_insert_ticket_daily_standups | null;
}

export interface insertTicketStandupVariables {
  ticketId: number;
  updatedETA: hasura_timestamptz;
  message: string;
  userId: number;
}
