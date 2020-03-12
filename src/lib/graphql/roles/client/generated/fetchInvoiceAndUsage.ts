/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  client_transaction_status_enum,
  client_transaction_types_enum,
} from './globalTypes';

// ====================================================
// GraphQL query operation: fetchInvoiceAndUsage
// ====================================================

export interface fetchInvoiceAndUsage_clients_client_transactions {
  __typename: 'client_transactions';
  id: number;
  invoiceCode: string | null;
  status: client_transaction_status_enum;
  channelType: client_transaction_types_enum;
  channelTransactionId: string | null;
  costInUSD: number;
  costInCredits: number;
  transactedAt: hasura_timestamptz;
}

export interface fetchInvoiceAndUsage_clients_tickets {
  __typename: 'tickets';
  id: number;
  code: string;
  costInCredits: number | null;
  discount: number;
  completedAt: hasura_timestamptz | null;
}

export interface fetchInvoiceAndUsage_clients {
  __typename: 'clients';
  name: string;
  /**
   * An array relationship
   */
  client_transactions: fetchInvoiceAndUsage_clients_client_transactions[];
  /**
   * An array relationship
   */
  tickets: fetchInvoiceAndUsage_clients_tickets[];
}

export interface fetchInvoiceAndUsage {
  /**
   * fetch data from the table: "clients"
   */
  clients: fetchInvoiceAndUsage_clients[];
}

export interface fetchInvoiceAndUsageVariables {
  clientId: string;
}
