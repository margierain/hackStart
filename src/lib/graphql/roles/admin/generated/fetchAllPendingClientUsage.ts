/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  client_transaction_status_enum,
  client_transaction_types_enum,
  client_invoice_status_enum,
} from './globalTypes';

// ====================================================
// GraphQL query operation: fetchAllPendingClientUsage
// ====================================================

export interface fetchAllPendingClientUsage_clients_client_transactions {
  __typename: 'client_transactions';
  id: number;
  invoiceCode: string | null;
  status: client_transaction_status_enum;
  channelType: client_transaction_types_enum;
  channelTransactionId: string | null;
  costInUSD: number;
  costInCredits: number;
  transactedAt: hasura_timestamptz;
  dueAt: hasura_timestamptz | null;
}

export interface fetchAllPendingClientUsage_clients_client_invoices_consumedCredits_aggregate_sum {
  __typename: 'client_tickets_sum_fields';
  discountedCostInCredits: number | null;
}

export interface fetchAllPendingClientUsage_clients_client_invoices_consumedCredits_aggregate {
  __typename: 'client_tickets_aggregate_fields';
  sum: fetchAllPendingClientUsage_clients_client_invoices_consumedCredits_aggregate_sum | null;
}

export interface fetchAllPendingClientUsage_clients_client_invoices_consumedCredits {
  __typename: 'client_tickets_aggregate';
  aggregate: fetchAllPendingClientUsage_clients_client_invoices_consumedCredits_aggregate | null;
}

export interface fetchAllPendingClientUsage_clients_client_invoices {
  __typename: 'client_invoices';
  id: number;
  costInUSD: number;
  costInCredits: number;
  dueAt: hasura_timestamptz | null;
  maxBudgetInCredits: number | null;
  /**
   * An aggregated array relationship
   */
  consumedCredits: fetchAllPendingClientUsage_clients_client_invoices_consumedCredits;
  status: client_invoice_status_enum;
}

export interface fetchAllPendingClientUsage_clients_tickets {
  __typename: 'tickets';
  id: number;
  code: string;
  costInCredits: number | null;
  discount: number;
  completedAt: hasura_timestamptz | null;
}

export interface fetchAllPendingClientUsage_clients {
  __typename: 'clients';
  id: string;
  name: string;
  creditBatchSize: number;
  /**
   * An array relationship
   */
  client_transactions: fetchAllPendingClientUsage_clients_client_transactions[];
  /**
   * An array relationship
   */
  client_invoices: fetchAllPendingClientUsage_clients_client_invoices[];
  /**
   * An array relationship
   */
  tickets: fetchAllPendingClientUsage_clients_tickets[];
}

export interface fetchAllPendingClientUsage {
  /**
   * fetch data from the table: "clients"
   */
  clients: fetchAllPendingClientUsage_clients[];
}
