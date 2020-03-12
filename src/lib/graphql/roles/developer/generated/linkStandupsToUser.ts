/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: linkStandupsToUser
// ====================================================

export interface linkStandupsToUser_update_ticket_daily_standups_returning {
  __typename: 'ticket_daily_standups';
  id: number;
}

export interface linkStandupsToUser_update_ticket_daily_standups {
  __typename: 'ticket_daily_standups_mutation_response';
  /**
   * data of the affected rows by the mutation
   */
  returning: linkStandupsToUser_update_ticket_daily_standups_returning[];
}

export interface linkStandupsToUser_update_task_daily_standups_returning {
  __typename: 'task_daily_standups';
  id: number;
}

export interface linkStandupsToUser_update_task_daily_standups {
  __typename: 'task_daily_standups_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: linkStandupsToUser_update_task_daily_standups_returning[];
}

export interface linkStandupsToUser_update_client_daily_standups_returning {
  __typename: 'client_daily_standups';
  id: number;
}

export interface linkStandupsToUser_update_client_daily_standups {
  __typename: 'client_daily_standups_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: linkStandupsToUser_update_client_daily_standups_returning[];
}

export interface linkStandupsToUser {
  /**
   * update data of the table: "ticket_daily_standups"
   */
  update_ticket_daily_standups: linkStandupsToUser_update_ticket_daily_standups | null;
  /**
   * update data of the table: "task_daily_standups"
   */
  update_task_daily_standups: linkStandupsToUser_update_task_daily_standups | null;
  /**
   * update data of the table: "client_daily_standups"
   */
  update_client_daily_standups: linkStandupsToUser_update_client_daily_standups | null;
}

export interface linkStandupsToUserVariables {
  ticketIds?: number[] | null;
  taskIds?: number[] | null;
  clientIds?: number[] | null;
  standupId: number;
}
