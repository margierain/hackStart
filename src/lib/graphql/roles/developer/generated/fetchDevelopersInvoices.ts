/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchDevelopersInvoices
// ====================================================

export interface fetchDevelopersInvoices_user_invoice_balances_totalBonus_aggregate_sum {
  __typename: 'developer_bonus_earning_sum_fields';
  amountInUSD: hasura_float8 | null;
}

export interface fetchDevelopersInvoices_user_invoice_balances_totalBonus_aggregate {
  __typename: 'developer_bonus_earning_aggregate_fields';
  sum: fetchDevelopersInvoices_user_invoice_balances_totalBonus_aggregate_sum | null;
}

export interface fetchDevelopersInvoices_user_invoice_balances_totalBonus {
  __typename: 'developer_bonus_earning_aggregate';
  aggregate: fetchDevelopersInvoices_user_invoice_balances_totalBonus_aggregate | null;
}

export interface fetchDevelopersInvoices_user_invoice_balances {
  __typename: 'user_invoice_balances';
  id: number | null;
  invoiceCode: string | null;
  costInUSD: number | null;
  paidByAgencyInvoiceId: number | null;
  status: string | null;
  current_paid_balance_in_usd: hasura_float8 | null;
  previous_invoiced_balance_in_usd: hasura_bigint | null;
  startAt: hasura_timestamptz | null;
  endAt: hasura_timestamptz | null;
  /**
   * An aggregated array relationship
   */
  totalBonus: fetchDevelopersInvoices_user_invoice_balances_totalBonus;
}

export interface fetchDevelopersInvoices {
  /**
   * fetch data from the table: "user_invoice_balances"
   */
  user_invoice_balances: fetchDevelopersInvoices_user_invoice_balances[];
}

export interface fetchDevelopersInvoicesVariables {
  developerId: string;
}
