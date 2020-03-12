/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  client_invoice_status_enum,
  client_transaction_status_enum,
  client_transaction_types_enum,
} from './globalTypes';

// ====================================================
// GraphQL query operation: fetchClientInvoicesAndTransactions
// ====================================================

export interface fetchClientInvoicesAndTransactions_client_invoices {
  __typename: 'client_invoices';
  id: number;
  dueAt: hasura_timestamptz | null;
  costInUSD: number;
  costInCredits: number;
  status: client_invoice_status_enum;
}

export interface fetchClientInvoicesAndTransactions_client_transactions {
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

export interface fetchClientInvoicesAndTransactions {
  /**
   * fetch data from the table: "client_invoices"
   */
  client_invoices: fetchClientInvoicesAndTransactions_client_invoices[];
  /**
   * fetch data from the table: "client_transactions"
   */
  client_transactions: fetchClientInvoicesAndTransactions_client_transactions[];
}

export interface fetchClientInvoicesAndTransactionsVariables {
  clientId: string;
}
