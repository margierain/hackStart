/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchClientDueInvoicesAggregate
// ====================================================

export interface fetchClientDueInvoicesAggregate_client_transactions_aggregate_aggregate_sum {
  __typename: 'client_transactions_sum_fields';
  costInUSD: number | null;
  costInCredits: number | null;
}

export interface fetchClientDueInvoicesAggregate_client_transactions_aggregate_aggregate {
  __typename: 'client_transactions_aggregate_fields';
  sum: fetchClientDueInvoicesAggregate_client_transactions_aggregate_aggregate_sum | null;
}

export interface fetchClientDueInvoicesAggregate_client_transactions_aggregate {
  __typename: 'client_transactions_aggregate';
  aggregate: fetchClientDueInvoicesAggregate_client_transactions_aggregate_aggregate | null;
}

export interface fetchClientDueInvoicesAggregate_client_invoices_aggregate_aggregate_sum {
  __typename: 'client_invoices_sum_fields';
  costInUSD: number | null;
  costInCredits: number | null;
}

export interface fetchClientDueInvoicesAggregate_client_invoices_aggregate_aggregate {
  __typename: 'client_invoices_aggregate_fields';
  sum: fetchClientDueInvoicesAggregate_client_invoices_aggregate_aggregate_sum | null;
}

export interface fetchClientDueInvoicesAggregate_client_invoices_aggregate {
  __typename: 'client_invoices_aggregate';
  aggregate: fetchClientDueInvoicesAggregate_client_invoices_aggregate_aggregate | null;
}

export interface fetchClientDueInvoicesAggregate {
  /**
   * fetch aggregated fields from the table: "client_transactions"
   */
  client_transactions_aggregate: fetchClientDueInvoicesAggregate_client_transactions_aggregate;
  /**
   * fetch aggregated fields from the table: "client_invoices"
   */
  client_invoices_aggregate: fetchClientDueInvoicesAggregate_client_invoices_aggregate;
}

export interface fetchClientDueInvoicesAggregateVariables {
  clientId: string;
}
