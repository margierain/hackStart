/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchClientDueInvoices
// ====================================================

export interface fetchClientDueInvoices_client_invoices {
  __typename: 'client_invoices';
  clientId: string;
  dueAt: hasura_timestamptz | null;
  costInUSD: number;
  costInCredits: number;
  id: number;
}

export interface fetchClientDueInvoices {
  /**
   * fetch data from the table: "client_invoices"
   */
  client_invoices: fetchClientDueInvoices_client_invoices[];
}

export interface fetchClientDueInvoicesVariables {
  clientId: string;
}
