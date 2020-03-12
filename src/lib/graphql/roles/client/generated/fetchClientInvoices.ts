/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { client_invoice_status_enum } from './globalTypes';

// ====================================================
// GraphQL query operation: fetchClientInvoices
// ====================================================

export interface fetchClientInvoices_client_invoices {
  __typename: 'client_invoices';
  id: number;
  dueAt: hasura_timestamptz | null;
  costInUSD: number;
  costInCredits: number;
  status: client_invoice_status_enum;
}

export interface fetchClientInvoices {
  /**
   * fetch data from the table: "client_invoices"
   */
  client_invoices: fetchClientInvoices_client_invoices[];
}

export interface fetchClientInvoicesVariables {
  clientId: string;
}
