/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { meetings_insert_input } from './globalTypes';

// ====================================================
// GraphQL mutation operation: insertClientMeeting
// ====================================================

export interface insertClientMeeting_insert_meetings_returning {
  __typename: 'meetings';
  id: number;
}

export interface insertClientMeeting_insert_meetings {
  __typename: 'meetings_mutation_response';
  /**
   * data of the affected rows by the mutation
   */
  returning: insertClientMeeting_insert_meetings_returning[];
}

export interface insertClientMeeting_update_clients_returning {
  __typename: 'clients';
  id: string;
}

export interface insertClientMeeting_update_clients {
  __typename: 'clients_mutation_response';
  /**
   * data of the affected rows by the mutation
   */
  returning: insertClientMeeting_update_clients_returning[];
}

export interface insertClientMeeting {
  /**
   * insert data into the table: "meetings"
   */
  insert_meetings: insertClientMeeting_insert_meetings | null;
  /**
   * update data of the table: "clients"
   */
  update_clients: insertClientMeeting_update_clients | null;
}

export interface insertClientMeetingVariables {
  meeting: meetings_insert_input;
  clientId: string;
  onBoardedAt: hasura_timestamptz;
}
