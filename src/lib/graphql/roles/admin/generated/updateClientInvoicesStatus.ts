/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { client_invoice_status_enum } from './globalTypes';

// ====================================================
// GraphQL mutation operation: updateClientInvoicesStatus
// ====================================================

export interface updateClientInvoicesStatus_update_client_invoices {
  __typename: 'client_invoices_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface updateClientInvoicesStatus {
  /**
   * update data of the table: "client_invoices"
   */
  update_client_invoices: updateClientInvoicesStatus_update_client_invoices | null;
}

export interface updateClientInvoicesStatusVariables {
  invoiceIds: number[];
  status: client_invoice_status_enum;
}
