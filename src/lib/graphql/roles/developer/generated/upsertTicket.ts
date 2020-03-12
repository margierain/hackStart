/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { tickets_insert_input, tickets_on_conflict } from './globalTypes';

// ====================================================
// GraphQL mutation operation: upsertTicket
// ====================================================

export interface upsertTicket_insert_tickets_returning {
  __typename: 'tickets';
  id: number;
  code: string;
  title: string;
  description: string | null;
  clientId: string;
  managerId: string | null;
  ticketLink: string | null;
  createdAt: hasura_timestamptz;
}

export interface upsertTicket_insert_tickets {
  __typename: 'tickets_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: upsertTicket_insert_tickets_returning[];
}

export interface upsertTicket {
  /**
   * insert data into the table: "tickets"
   */
  insert_tickets: upsertTicket_insert_tickets | null;
}

export interface upsertTicketVariables {
  ticket: tickets_insert_input[];
  onConflict?: tickets_on_conflict | null;
}
