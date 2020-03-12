/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  client_transaction_status_enum,
  client_transaction_types_enum,
} from './globalTypes';

// ====================================================
// GraphQL query operation: fetchClientInvoicesWithBalanceAndTransactions
// ====================================================

export interface fetchClientInvoicesWithBalanceAndTransactions_client_invoices_with_balance {
  __typename: 'client_invoices_with_balance';
  id: number | null;
  dueAt: hasura_timestamptz | null;
  costInUSD: number | null;
  costInCredits: number | null;
  status: string | null;
  currrent_paid_balance_in_usd: hasura_bigint | null;
  previous_balance_in_usd: hasura_bigint | null;
  previous_consumed_balance_in_credits: hasura_bigint | null;
  consumed_balance_in_credits: hasura_bigint | null;
  createdAt: hasura_timestamptz | null;
}

export interface fetchClientInvoicesWithBalanceAndTransactions_client_transactions {
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

export interface fetchClientInvoicesWithBalanceAndTransactions {
  /**
   * fetch data from the table: "client_invoices_with_balance"
   */
  client_invoices_with_balance: fetchClientInvoicesWithBalanceAndTransactions_client_invoices_with_balance[];
  /**
   * fetch data from the table: "client_transactions"
   */
  client_transactions: fetchClientInvoicesWithBalanceAndTransactions_client_transactions[];
}

export interface fetchClientInvoicesWithBalanceAndTransactionsVariables {
  clientId: string;
}
