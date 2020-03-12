/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: linkTaskStandupToTicket
// ====================================================

export interface linkTaskStandupToTicket_update_task_daily_standups_returning {
  __typename: 'task_daily_standups';
  id: number;
}

export interface linkTaskStandupToTicket_update_task_daily_standups {
  __typename: 'task_daily_standups_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: linkTaskStandupToTicket_update_task_daily_standups_returning[];
}

export interface linkTaskStandupToTicket {
  /**
   * update data of the table: "task_daily_standups"
   */
  update_task_daily_standups: linkTaskStandupToTicket_update_task_daily_standups | null;
}

export interface linkTaskStandupToTicketVariables {
  ticketId: number;
  standupId: number;
}
