/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  client_invoice_status_enum,
  client_transaction_status_enum,
} from './globalTypes';

// ====================================================
// GraphQL query operation: fetchClientOverview
// ====================================================

export interface fetchClientOverview_clients_meetings {
  __typename: 'meetings';
  scheduledAt: hasura_timestamptz | null;
}

export interface fetchClientOverview_clients_tickets {
  __typename: 'tickets';
  code: string;
  id: number;
  completedAt: hasura_timestamptz | null;
  discount: number;
  costInCredits: number | null;
}

export interface fetchClientOverview_clients_client_invoices_client_invoice_balance {
  __typename: 'client_invoices_with_balance';
  id: number | null;
  currrent_paid_balance_in_usd: hasura_bigint | null;
  previous_balance_in_usd: hasura_bigint | null;
  previous_balance_in_credits: hasura_bigint | null;
  previous_consumed_balance_in_credits: hasura_bigint | null;
}

export interface fetchClientOverview_clients_client_invoices {
  __typename: 'client_invoices';
  costInUSD: number;
  status: client_invoice_status_enum;
  dueAt: hasura_timestamptz | null;
  costInCredits: number;
  id: number;
  clientId: string;
  /**
   * An object relationship
   */
  client_invoice_balance: fetchClientOverview_clients_client_invoices_client_invoice_balance | null;
}

export interface fetchClientOverview_clients_client_transactions {
  __typename: 'client_transactions';
  status: client_transaction_status_enum;
  costInUSD: number;
  costInCredits: number;
  transactedAt: hasura_timestamptz;
  dueAt: hasura_timestamptz | null;
  id: number;
  clientId: string;
}

export interface fetchClientOverview_clients_pending_transactions {
  __typename: 'client_transactions';
  id: number;
  costInUSD: number;
  costInCredits: number;
  transactedAt: hasura_timestamptz;
  clientId: string;
}

export interface fetchClientOverview_clients_tasks {
  __typename: 'tasks';
  ticketCode: string;
  id: number;
}

export interface fetchClientOverview_clients_draftInvoices {
  __typename: 'client_invoices';
  id: number;
  costInCredits: number;
  costInUSD: number;
}

export interface fetchClientOverview_clients_distinctDevs {
  __typename: 'tasks';
  developerId: string | null;
}

export interface fetchClientOverview_clients {
  __typename: 'clients';
  id: string;
  name: string;
  onBoardedAt: hasura_timestamptz | null;
  /**
   * An array relationship
   */
  meetings: fetchClientOverview_clients_meetings[];
  /**
   * An array relationship
   */
  tickets: fetchClientOverview_clients_tickets[];
  /**
   * An array relationship
   */
  client_invoices: fetchClientOverview_clients_client_invoices[];
  /**
   * An array relationship
   */
  client_transactions: fetchClientOverview_clients_client_transactions[];
  /**
   * An array relationship
   */
  pending_transactions: fetchClientOverview_clients_pending_transactions[];
  /**
   * An array relationship
   */
  tasks: fetchClientOverview_clients_tasks[];
  /**
   * An array relationship
   */
  draftInvoices: fetchClientOverview_clients_draftInvoices[];
  /**
   * An array relationship
   */
  distinctDevs: fetchClientOverview_clients_distinctDevs[];
}

export interface fetchClientOverview_client_daily_standups_ticket_daily_standups_ticket {
  __typename: 'tickets';
  code: string;
  ticketLink: string | null;
  completedAt: hasura_timestamptz | null;
}

export interface fetchClientOverview_client_daily_standups_ticket_daily_standups {
  __typename: 'ticket_daily_standups';
  updatedETA: hasura_timestamptz;
  message: string;
  /**
   * An object relationship
   */
  ticket: fetchClientOverview_client_daily_standups_ticket_daily_standups_ticket;
}

export interface fetchClientOverview_client_daily_standups {
  __typename: 'client_daily_standups';
  /**
   * An array relationship
   */
  ticket_daily_standups: fetchClientOverview_client_daily_standups_ticket_daily_standups[];
}

export interface fetchClientOverview {
  /**
   * fetch data from the table: "clients"
   */
  clients: fetchClientOverview_clients[];
  /**
   * fetch data from the table: "client_daily_standups"
   */
  client_daily_standups: fetchClientOverview_client_daily_standups[];
}

export interface fetchClientOverviewVariables {
  clientId: string;
  warmUpStart: hasura_timestamptz;
  warmUpEnd: hasura_timestamptz;
}
