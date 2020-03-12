/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  user_payment_types_enum,
  user_payment_status_enum,
  user_invoice_status_enum,
} from './globalTypes';

// ====================================================
// GraphQL query operation: fetchDevelopersPaymentsAndInvoices
// ====================================================

export interface fetchDevelopersPaymentsAndInvoices_user_payments {
  __typename: 'user_payments';
  id: number;
  createdAt: hasura_timestamptz;
  finishedAt: hasura_timestamptz;
  amountInUSD: hasura_float8;
  channelTransactionId: string;
  paymentType: user_payment_types_enum;
  status: user_payment_status_enum;
  updatedAt: hasura_timestamptz;
}

export interface fetchDevelopersPaymentsAndInvoices_user_invoices_user_invoice_balance {
  __typename: 'user_invoice_balances';
  current_paid_balance_in_usd: hasura_float8 | null;
  hours_logged_in_invoice: hasura_bigint | null;
  previous_invoiced_balance_in_usd: hasura_bigint | null;
}

export interface fetchDevelopersPaymentsAndInvoices_user_invoices {
  __typename: 'user_invoices';
  id: number;
  invoiceCode: string | null;
  costInUSD: number;
  dueAt: hasura_timestamptz | null;
  createdAt: hasura_timestamptz;
  adjustedCostInUSD: number | null;
  paidByAgencyInvoiceId: number | null;
  status: user_invoice_status_enum;
  /**
   * An object relationship
   */
  user_invoice_balance: fetchDevelopersPaymentsAndInvoices_user_invoices_user_invoice_balance | null;
}

export interface fetchDevelopersPaymentsAndInvoices {
  /**
   * fetch data from the table: "user_payments"
   */
  user_payments: fetchDevelopersPaymentsAndInvoices_user_payments[];
  /**
   * fetch data from the table: "user_invoices"
   */
  user_invoices: fetchDevelopersPaymentsAndInvoices_user_invoices[];
}

export interface fetchDevelopersPaymentsAndInvoicesVariables {
  developerId: string;
}
