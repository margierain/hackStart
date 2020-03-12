/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { client_invoice_status_enum } from './globalTypes';

// ====================================================
// GraphQL query operation: fetchClientInvoicesAndTickets
// ====================================================

export interface fetchClientInvoicesAndTickets_client_invoices_tickets {
  __typename: 'tickets';
  id: number;
  code: string;
  completedAt: hasura_timestamptz | null;
  costInCredits: number | null;
  createdAt: hasura_timestamptz;
  description: string | null;
  discount: number;
}

export interface fetchClientInvoicesAndTickets_client_invoices {
  __typename: 'client_invoices';
  id: number;
  dueAt: hasura_timestamptz | null;
  costInUSD: number;
  costInCredits: number;
  maxBudgetInCredits: number | null;
  status: client_invoice_status_enum;
  /**
   * An array relationship
   */
  tickets: fetchClientInvoicesAndTickets_client_invoices_tickets[];
}

export interface fetchClientInvoicesAndTickets {
  /**
   * fetch data from the table: "client_invoices"
   */
  client_invoices: fetchClientInvoicesAndTickets_client_invoices[];
}

export interface fetchClientInvoicesAndTicketsVariables {
  clientId: string;
}
