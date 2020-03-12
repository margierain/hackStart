/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: linkTicketStandupToClient
// ====================================================

export interface linkTicketStandupToClient_update_ticket_daily_standups_returning {
  __typename: 'ticket_daily_standups';
  id: number;
}

export interface linkTicketStandupToClient_update_ticket_daily_standups {
  __typename: 'ticket_daily_standups_mutation_response';
  /**
   * data of the affected rows by the mutation
   */
  returning: linkTicketStandupToClient_update_ticket_daily_standups_returning[];
}

export interface linkTicketStandupToClient {
  /**
   * update data of the table: "ticket_daily_standups"
   */
  update_ticket_daily_standups: linkTicketStandupToClient_update_ticket_daily_standups | null;
}

export interface linkTicketStandupToClientVariables {
  clientId: string;
  standupId: number;
}
