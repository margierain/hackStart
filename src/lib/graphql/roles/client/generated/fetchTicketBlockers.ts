/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { client_blocker_status_enum } from './globalTypes';

// ====================================================
// GraphQL query operation: fetchTicketBlockers
// ====================================================

export interface fetchTicketBlockers_client_blockers {
  __typename: 'client_blockers';
  id: number;
  details: string;
  summary: string;
  createdAt: hasura_timestamptz;
  updatedAt: hasura_timestamptz;
  status: client_blocker_status_enum;
}

export interface fetchTicketBlockers {
  /**
   * fetch data from the table: "client_blockers"
   */
  client_blockers: fetchTicketBlockers_client_blockers[];
}

export interface fetchTicketBlockersVariables {
  ticketId: number;
}
