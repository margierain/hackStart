/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchClientInvoicesAndBalances
// ====================================================

export interface fetchClientInvoicesAndBalances_client_invoices_with_balance_tickets {
  __typename: 'tickets';
  id: number;
  title: string;
  code: string;
  completedAt: hasura_timestamptz | null;
  ticketLink: string | null;
  costInCredits: number | null;
  createdAt: hasura_timestamptz;
  description: string | null;
  discount: number;
}

export interface fetchClientInvoicesAndBalances_client_invoices_with_balance {
  __typename: 'client_invoices_with_balance';
  id: number | null;
  clientId: string | null;
  dueAt: hasura_timestamptz | null;
  costInUSD: number | null;
  costInCredits: number | null;
  status: string | null;
  currrent_paid_balance_in_usd: hasura_bigint | null;
  previous_balance_in_usd: hasura_bigint | null;
  previous_balance_in_credits: hasura_bigint | null;
  previous_consumed_balance_in_credits: hasura_bigint | null;
  createdAt: hasura_timestamptz | null;
  /**
   * An array relationship
   */
  tickets: fetchClientInvoicesAndBalances_client_invoices_with_balance_tickets[];
}

export interface fetchClientInvoicesAndBalances {
  /**
   * fetch data from the table: "client_invoices_with_balance"
   */
  client_invoices_with_balance: fetchClientInvoicesAndBalances_client_invoices_with_balance[];
}

export interface fetchClientInvoicesAndBalancesVariables {
  clientId: string;
  invoicesId: number;
}
