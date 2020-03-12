/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { client_transactions_insert_input } from './globalTypes';

// ====================================================
// GraphQL mutation operation: insertNewClientTransaction
// ====================================================

export interface insertNewClientTransaction_insert_client_transactions {
  __typename: 'client_transactions_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface insertNewClientTransaction {
  /**
   * insert data into the table: "client_transactions"
   */
  insert_client_transactions: insertNewClientTransaction_insert_client_transactions | null;
}

export interface insertNewClientTransactionVariables {
  transactions: client_transactions_insert_input[];
}
