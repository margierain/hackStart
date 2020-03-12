/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  client_transaction_status_enum,
  client_transaction_types_enum,
} from './globalTypes';

// ====================================================
// GraphQL query operation: fetchClientTransactions
// ====================================================

export interface fetchClientTransactions_client_transactions {
  __typename: 'client_transactions';
  id: number;
  invoiceCode: string | null;
  costInCredits: number;
  costInUSD: number;
  dueAt: hasura_timestamptz | null;
  status: client_transaction_status_enum;
  transactedAt: hasura_timestamptz;
  channelType: client_transaction_types_enum;
  channelTransactionId: string | null;
}

export interface fetchClientTransactions {
  /**
   * fetch data from the table: "client_transactions"
   */
  client_transactions: fetchClientTransactions_client_transactions[];
}

export interface fetchClientTransactionsVariables {
  clientId: string;
}
