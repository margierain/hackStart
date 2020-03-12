/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  user_invoices_insert_input,
  user_invoices_on_conflict,
  user_invoice_status_enum,
} from './globalTypes';

// ====================================================
// GraphQL mutation operation: insertUserInvoices
// ====================================================

export interface insertUserInvoices_insert_user_invoices_returning_developer_bonus_earnings {
  __typename: 'developer_bonus_earning';
  id: number;
  amountInUSD: hasura_float8;
}

export interface insertUserInvoices_insert_user_invoices_returning_task_reviews {
  __typename: 'task_reviews';
  id: number;
  costInUSD: number;
}

export interface insertUserInvoices_insert_user_invoices_returning_taskReviewsByManagerinvoiceid {
  __typename: 'task_reviews';
  id: number;
  costInUSD: number;
}

export interface insertUserInvoices_insert_user_invoices_returning_tasks {
  __typename: 'tasks';
  id: number;
  costInUSD: number;
}

export interface insertUserInvoices_insert_user_invoices_returning_tasksByManagerinvoiceid {
  __typename: 'tasks';
  id: number;
  costInUSD: number;
}

export interface insertUserInvoices_insert_user_invoices_returning_task_works {
  __typename: 'task_work';
  id: number;
  costInUSD: number;
}

export interface insertUserInvoices_insert_user_invoices_returning_taskWorksByManagerinvoiceid {
  __typename: 'task_work';
  id: number;
  costInUSD: number;
}

export interface insertUserInvoices_insert_user_invoices_returning_user_time_earnings {
  __typename: 'user_time_earnings';
  id: number | null;
  earningsinusd: hasura_numeric | null;
}

export interface insertUserInvoices_insert_user_invoices_returning_user {
  __typename: 'users';
  login: string | null;
}

export interface insertUserInvoices_insert_user_invoices_returning {
  __typename: 'user_invoices';
  id: number;
  userId: number;
  adjustedCostInUSD: number | null;
  costInUSD: number;
  dueAt: hasura_timestamptz | null;
  status: user_invoice_status_enum;
  /**
   * An array relationship
   */
  developer_bonus_earnings: insertUserInvoices_insert_user_invoices_returning_developer_bonus_earnings[];
  /**
   * An array relationship
   */
  task_reviews: insertUserInvoices_insert_user_invoices_returning_task_reviews[];
  /**
   * An array relationship
   */
  taskReviewsByManagerinvoiceid: insertUserInvoices_insert_user_invoices_returning_taskReviewsByManagerinvoiceid[];
  /**
   * An array relationship
   */
  tasks: insertUserInvoices_insert_user_invoices_returning_tasks[];
  /**
   * An array relationship
   */
  tasksByManagerinvoiceid: insertUserInvoices_insert_user_invoices_returning_tasksByManagerinvoiceid[];
  /**
   * An array relationship
   */
  task_works: insertUserInvoices_insert_user_invoices_returning_task_works[];
  /**
   * An array relationship
   */
  taskWorksByManagerinvoiceid: insertUserInvoices_insert_user_invoices_returning_taskWorksByManagerinvoiceid[];
  /**
   * An array relationship
   */
  user_time_earnings: insertUserInvoices_insert_user_invoices_returning_user_time_earnings[];
  /**
   * An object relationship
   */
  user: insertUserInvoices_insert_user_invoices_returning_user;
}

export interface insertUserInvoices_insert_user_invoices {
  __typename: 'user_invoices_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: insertUserInvoices_insert_user_invoices_returning[];
}

export interface insertUserInvoices {
  /**
   * insert data into the table: "user_invoices"
   */
  insert_user_invoices: insertUserInvoices_insert_user_invoices | null;
}

export interface insertUserInvoicesVariables {
  invoices: user_invoices_insert_input[];
  onConflict: user_invoices_on_conflict;
}
