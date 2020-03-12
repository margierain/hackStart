/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { client_invoice_status_enum } from './globalTypes';

// ====================================================
// GraphQL query operation: fetchClientInvoicesOverview
// ====================================================

export interface fetchClientInvoicesOverview_client_invoices_client_invoice_balance {
  __typename: 'client_invoices_with_balance';
  id: number | null;
  currrent_paid_balance_in_usd: hasura_bigint | null;
  previous_balance_in_usd: hasura_bigint | null;
  previous_balance_in_credits: hasura_bigint | null;
  previous_consumed_balance_in_credits: hasura_bigint | null;
}

export interface fetchClientInvoicesOverview_client_invoices {
  __typename: 'client_invoices';
  costInUSD: number;
  status: client_invoice_status_enum;
  dueAt: hasura_timestamptz | null;
  costInCredits: number;
  clientId: string;
  id: number;
  /**
   * An object relationship
   */
  client_invoice_balance: fetchClientInvoicesOverview_client_invoices_client_invoice_balance | null;
}

export interface fetchClientInvoicesOverview_pending_transactions {
  __typename: 'client_transactions';
  id: number;
  costInUSD: number;
  costInCredits: number;
  transactedAt: hasura_timestamptz;
  clientId: string;
}

export interface fetchClientInvoicesOverview {
  /**
   * fetch data from the table: "client_invoices"
   */
  client_invoices: fetchClientInvoicesOverview_client_invoices[];
  /**
   * fetch data from the table: "client_transactions"
   */
  pending_transactions: fetchClientInvoicesOverview_pending_transactions[];
}

export interface fetchClientInvoicesOverviewVariables {
  clientId: string;
}
