/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchUserInvoice
// ====================================================

export interface fetchUserInvoice_tasks_user_time_logs_aggregate_aggregate_sum {
  __typename: 'user_time_logs_sum_fields';
  timeSpentInHours: number | null;
}

export interface fetchUserInvoice_tasks_user_time_logs_aggregate_aggregate {
  __typename: 'user_time_logs_aggregate_fields';
  sum: fetchUserInvoice_tasks_user_time_logs_aggregate_aggregate_sum | null;
}

export interface fetchUserInvoice_tasks_user_time_logs_aggregate {
  __typename: 'user_time_logs_aggregate';
  aggregate: fetchUserInvoice_tasks_user_time_logs_aggregate_aggregate | null;
}

export interface fetchUserInvoice_tasks_task_reviews {
  __typename: 'task_reviews';
  managerId: string | null;
  developerId: string | null;
  managerInvoiceId: number | null;
  reviewerInvoiceId: number | null;
  costInUSD: number;
}

export interface fetchUserInvoice_tasks {
  __typename: 'tasks';
  /**
   * An aggregated array relationship
   */
  user_time_logs_aggregate: fetchUserInvoice_tasks_user_time_logs_aggregate;
  id: number;
  costInUSD: number;
  ticketCode: string;
  title: string;
  managerId: string | null;
  reviewerId: string | null;
  developerId: string | null;
  managerInvoiceId: number | null;
  developerInvoiceId: number | null;
  /**
   * An array relationship
   */
  task_reviews: fetchUserInvoice_tasks_task_reviews[];
}

export interface fetchUserInvoice_task_work_user_time_logs_aggregate_aggregate_sum {
  __typename: 'user_time_logs_sum_fields';
  timeSpentInHours: number | null;
}

export interface fetchUserInvoice_task_work_user_time_logs_aggregate_aggregate {
  __typename: 'user_time_logs_aggregate_fields';
  sum: fetchUserInvoice_task_work_user_time_logs_aggregate_aggregate_sum | null;
}

export interface fetchUserInvoice_task_work_user_time_logs_aggregate {
  __typename: 'user_time_logs_aggregate';
  aggregate: fetchUserInvoice_task_work_user_time_logs_aggregate_aggregate | null;
}

export interface fetchUserInvoice_task_work {
  __typename: 'task_work';
  /**
   * An aggregated array relationship
   */
  user_time_logs_aggregate: fetchUserInvoice_task_work_user_time_logs_aggregate;
  id: number;
  managerId: string | null;
  developerId: string | null;
  managerInvoiceId: number | null;
  workerInvoiceId: number | null;
  costInUSD: number;
}

export interface fetchUserInvoice_user_invoice_balances_totalBonus_aggregate_sum {
  __typename: 'developer_bonus_earning_sum_fields';
  amountInUSD: hasura_float8 | null;
}

export interface fetchUserInvoice_user_invoice_balances_totalBonus_aggregate {
  __typename: 'developer_bonus_earning_aggregate_fields';
  sum: fetchUserInvoice_user_invoice_balances_totalBonus_aggregate_sum | null;
}

export interface fetchUserInvoice_user_invoice_balances_totalBonus {
  __typename: 'developer_bonus_earning_aggregate';
  aggregate: fetchUserInvoice_user_invoice_balances_totalBonus_aggregate | null;
}

export interface fetchUserInvoice_user_invoice_balances_totalUncategorizedTimeLogged_aggregate_sum {
  __typename: 'user_time_logs_sum_fields';
  timeSpentInHours: number | null;
}

export interface fetchUserInvoice_user_invoice_balances_totalUncategorizedTimeLogged_aggregate {
  __typename: 'user_time_logs_aggregate_fields';
  sum: fetchUserInvoice_user_invoice_balances_totalUncategorizedTimeLogged_aggregate_sum | null;
}

export interface fetchUserInvoice_user_invoice_balances_totalUncategorizedTimeLogged {
  __typename: 'user_time_logs_aggregate';
  aggregate: fetchUserInvoice_user_invoice_balances_totalUncategorizedTimeLogged_aggregate | null;
}

export interface fetchUserInvoice_user_invoice_balances_totalUncategorizedTimeEarning_aggregate_sum {
  __typename: 'user_time_earnings_sum_fields';
  earningsinusd: hasura_numeric | null;
}

export interface fetchUserInvoice_user_invoice_balances_totalUncategorizedTimeEarning_aggregate {
  __typename: 'user_time_earnings_aggregate_fields';
  sum: fetchUserInvoice_user_invoice_balances_totalUncategorizedTimeEarning_aggregate_sum | null;
}

export interface fetchUserInvoice_user_invoice_balances_totalUncategorizedTimeEarning {
  __typename: 'user_time_earnings_aggregate';
  aggregate: fetchUserInvoice_user_invoice_balances_totalUncategorizedTimeEarning_aggregate | null;
}

export interface fetchUserInvoice_user_invoice_balances_totalTimeEarning_aggregate_sum {
  __typename: 'user_time_earnings_sum_fields';
  earningsinusd: hasura_numeric | null;
}

export interface fetchUserInvoice_user_invoice_balances_totalTimeEarning_aggregate {
  __typename: 'user_time_earnings_aggregate_fields';
  sum: fetchUserInvoice_user_invoice_balances_totalTimeEarning_aggregate_sum | null;
}

export interface fetchUserInvoice_user_invoice_balances_totalTimeEarning {
  __typename: 'user_time_earnings_aggregate';
  aggregate: fetchUserInvoice_user_invoice_balances_totalTimeEarning_aggregate | null;
}

export interface fetchUserInvoice_user_invoice_balances {
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
  totalBonus: fetchUserInvoice_user_invoice_balances_totalBonus;
  /**
   * An aggregated array relationship
   */
  totalUncategorizedTimeLogged: fetchUserInvoice_user_invoice_balances_totalUncategorizedTimeLogged;
  /**
   * An aggregated array relationship
   */
  totalUncategorizedTimeEarning: fetchUserInvoice_user_invoice_balances_totalUncategorizedTimeEarning;
  /**
   * An aggregated array relationship
   */
  totalTimeEarning: fetchUserInvoice_user_invoice_balances_totalTimeEarning;
}

export interface fetchUserInvoice {
  /**
   * fetch data from the table: "tasks"
   */
  tasks: fetchUserInvoice_tasks[];
  /**
   * fetch data from the table: "task_work"
   */
  task_work: fetchUserInvoice_task_work[];
  /**
   * fetch data from the table: "user_invoice_balances"
   */
  user_invoice_balances: fetchUserInvoice_user_invoice_balances[];
}

export interface fetchUserInvoiceVariables {
  id: number;
}
