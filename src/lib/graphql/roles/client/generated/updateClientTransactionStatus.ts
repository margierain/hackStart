/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { client_transaction_status_enum } from './globalTypes';

// ====================================================
// GraphQL mutation operation: updateClientTransactionStatus
// ====================================================

export interface updateClientTransactionStatus_update_client_transactions {
  __typename: 'client_transactions_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface updateClientTransactionStatus {
  /**
   * update data of the table: "client_transactions"
   */
  update_client_transactions: updateClientTransactionStatus_update_client_transactions | null;
}

export interface updateClientTransactionStatusVariables {
  transactionId: number;
  status: client_transaction_status_enum;
}
