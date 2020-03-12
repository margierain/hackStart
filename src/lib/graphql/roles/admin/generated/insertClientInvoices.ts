/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  client_invoices_insert_input,
  client_invoices_on_conflict,
  client_invoice_status_enum,
} from './globalTypes';

// ====================================================
// GraphQL mutation operation: insertClientInvoices
// ====================================================

export interface insertClientInvoices_insert_client_invoices_returning_consumedCredits_aggregate_sum {
  __typename: 'client_tickets_sum_fields';
  discountedCostInCredits: number | null;
}

export interface insertClientInvoices_insert_client_invoices_returning_consumedCredits_aggregate {
  __typename: 'client_tickets_aggregate_fields';
  sum: insertClientInvoices_insert_client_invoices_returning_consumedCredits_aggregate_sum | null;
}

export interface insertClientInvoices_insert_client_invoices_returning_consumedCredits {
  __typename: 'client_tickets_aggregate';
  aggregate: insertClientInvoices_insert_client_invoices_returning_consumedCredits_aggregate | null;
}

export interface insertClientInvoices_insert_client_invoices_returning {
  __typename: 'client_invoices';
  id: number;
  clientId: string;
  costInCredits: number;
  costInUSD: number;
  dueAt: hasura_timestamptz | null;
  status: client_invoice_status_enum;
  maxBudgetInCredits: number | null;
  /**
   * An aggregated array relationship
   */
  consumedCredits: insertClientInvoices_insert_client_invoices_returning_consumedCredits;
}

export interface insertClientInvoices_insert_client_invoices {
  __typename: 'client_invoices_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: insertClientInvoices_insert_client_invoices_returning[];
}

export interface insertClientInvoices {
  /**
   * insert data into the table: "client_invoices"
   */
  insert_client_invoices: insertClientInvoices_insert_client_invoices | null;
}

export interface insertClientInvoicesVariables {
  invoices: client_invoices_insert_input[];
  onConflict: client_invoices_on_conflict;
}
