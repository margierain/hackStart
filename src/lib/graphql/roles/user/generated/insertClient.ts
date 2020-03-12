/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { clients_insert_input } from './globalTypes';

// ====================================================
// GraphQL mutation operation: insertClient
// ====================================================

export interface insertClient_insert_clients_returning_client_users {
  __typename: 'client_users';
  id: hasura_uuid;
}

export interface insertClient_insert_clients_returning {
  __typename: 'clients';
  id: string;
  /**
   * An array relationship
   */
  client_users: insertClient_insert_clients_returning_client_users[];
}

export interface insertClient_insert_clients {
  __typename: 'clients_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: insertClient_insert_clients_returning[];
}

export interface insertClient {
  /**
   * insert data into the table: "clients"
   */
  insert_clients: insertClient_insert_clients | null;
}

export interface insertClientVariables {
  client: clients_insert_input;
  userId: number;
}
