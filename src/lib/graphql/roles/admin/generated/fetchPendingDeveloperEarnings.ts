/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { user_invoice_status_enum } from './globalTypes';

// ====================================================
// GraphQL query operation: fetchPendingDeveloperEarnings
// ====================================================

export interface fetchPendingDeveloperEarnings_developers_user_user_time_earnings {
  __typename: 'user_time_earnings';
  id: number | null;
  earningsinusd: hasura_numeric | null;
  timeSpentInHours: number | null;
  finishedAt: hasura_timestamptz | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_developer_bonus_earnings_nodes {
  __typename: 'developer_bonus_earning';
  amountInUSD: hasura_float8;
  id: number;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_developer_bonus_earnings_aggregate_sum {
  __typename: 'developer_bonus_earning_sum_fields';
  amountInUSD: hasura_float8 | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_developer_bonus_earnings_aggregate {
  __typename: 'developer_bonus_earning_aggregate_fields';
  sum: fetchPendingDeveloperEarnings_developers_user_user_invoices_developer_bonus_earnings_aggregate_sum | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_developer_bonus_earnings {
  __typename: 'developer_bonus_earning_aggregate';
  nodes: fetchPendingDeveloperEarnings_developers_user_user_invoices_developer_bonus_earnings_nodes[];
  aggregate: fetchPendingDeveloperEarnings_developers_user_user_invoices_developer_bonus_earnings_aggregate | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_user_time_earnings_aggregate_sum {
  __typename: 'user_time_earnings_sum_fields';
  earningsinusd: hasura_numeric | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_user_time_earnings_aggregate {
  __typename: 'user_time_earnings_aggregate_fields';
  sum: fetchPendingDeveloperEarnings_developers_user_user_invoices_user_time_earnings_aggregate_sum | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_user_time_earnings_nodes {
  __typename: 'user_time_earnings';
  id: number | null;
  startedAt: hasura_timestamptz | null;
  finishedAt: hasura_timestamptz | null;
  earningsinusd: hasura_numeric | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_user_time_earnings {
  __typename: 'user_time_earnings_aggregate';
  aggregate: fetchPendingDeveloperEarnings_developers_user_user_invoices_user_time_earnings_aggregate | null;
  nodes: fetchPendingDeveloperEarnings_developers_user_user_invoices_user_time_earnings_nodes[];
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_task_works_nodes {
  __typename: 'task_work';
  id: number;
  costInUSD: number;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_task_works_aggregate_sum {
  __typename: 'task_work_sum_fields';
  costInUSD: number | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_task_works_aggregate {
  __typename: 'task_work_aggregate_fields';
  sum: fetchPendingDeveloperEarnings_developers_user_user_invoices_task_works_aggregate_sum | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_task_works {
  __typename: 'task_work_aggregate';
  nodes: fetchPendingDeveloperEarnings_developers_user_user_invoices_task_works_nodes[];
  aggregate: fetchPendingDeveloperEarnings_developers_user_user_invoices_task_works_aggregate | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_taskWorksByManagerinvoiceid_nodes {
  __typename: 'task_work';
  id: number;
  costInUSD: number;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_taskWorksByManagerinvoiceid_aggregate_sum {
  __typename: 'task_work_sum_fields';
  costInUSD: number | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_taskWorksByManagerinvoiceid_aggregate {
  __typename: 'task_work_aggregate_fields';
  sum: fetchPendingDeveloperEarnings_developers_user_user_invoices_taskWorksByManagerinvoiceid_aggregate_sum | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_taskWorksByManagerinvoiceid {
  __typename: 'task_work_aggregate';
  nodes: fetchPendingDeveloperEarnings_developers_user_user_invoices_taskWorksByManagerinvoiceid_nodes[];
  aggregate: fetchPendingDeveloperEarnings_developers_user_user_invoices_taskWorksByManagerinvoiceid_aggregate | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_tasksDeveloper_nodes {
  __typename: 'tasks';
  id: number;
  costInUSD: number;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_tasksDeveloper_aggregate_sum {
  __typename: 'tasks_sum_fields';
  costInUSD: number | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_tasksDeveloper_aggregate {
  __typename: 'tasks_aggregate_fields';
  sum: fetchPendingDeveloperEarnings_developers_user_user_invoices_tasksDeveloper_aggregate_sum | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_tasksDeveloper {
  __typename: 'tasks_aggregate';
  nodes: fetchPendingDeveloperEarnings_developers_user_user_invoices_tasksDeveloper_nodes[];
  aggregate: fetchPendingDeveloperEarnings_developers_user_user_invoices_tasksDeveloper_aggregate | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_tasksManager_nodes {
  __typename: 'tasks';
  id: number;
  costInUSD: number;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_tasksManager_aggregate_sum {
  __typename: 'tasks_sum_fields';
  costInUSD: number | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_tasksManager_aggregate {
  __typename: 'tasks_aggregate_fields';
  sum: fetchPendingDeveloperEarnings_developers_user_user_invoices_tasksManager_aggregate_sum | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_tasksManager {
  __typename: 'tasks_aggregate';
  nodes: fetchPendingDeveloperEarnings_developers_user_user_invoices_tasksManager_nodes[];
  aggregate: fetchPendingDeveloperEarnings_developers_user_user_invoices_tasksManager_aggregate | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_taskReviewerDeveloper_nodes {
  __typename: 'task_reviews';
  id: number;
  costInUSD: number;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_taskReviewerDeveloper_aggregate_sum {
  __typename: 'task_reviews_sum_fields';
  costInUSD: number | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_taskReviewerDeveloper_aggregate {
  __typename: 'task_reviews_aggregate_fields';
  sum: fetchPendingDeveloperEarnings_developers_user_user_invoices_taskReviewerDeveloper_aggregate_sum | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_taskReviewerDeveloper {
  __typename: 'task_reviews_aggregate';
  nodes: fetchPendingDeveloperEarnings_developers_user_user_invoices_taskReviewerDeveloper_nodes[];
  aggregate: fetchPendingDeveloperEarnings_developers_user_user_invoices_taskReviewerDeveloper_aggregate | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_taskReviewerManager_nodes {
  __typename: 'task_reviews';
  id: number;
  costInUSD: number;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_taskReviewerManager_aggregate_sum {
  __typename: 'task_reviews_sum_fields';
  costInUSD: number | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_taskReviewerManager_aggregate {
  __typename: 'task_reviews_aggregate_fields';
  sum: fetchPendingDeveloperEarnings_developers_user_user_invoices_taskReviewerManager_aggregate_sum | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices_taskReviewerManager {
  __typename: 'task_reviews_aggregate';
  nodes: fetchPendingDeveloperEarnings_developers_user_user_invoices_taskReviewerManager_nodes[];
  aggregate: fetchPendingDeveloperEarnings_developers_user_user_invoices_taskReviewerManager_aggregate | null;
}

export interface fetchPendingDeveloperEarnings_developers_user_user_invoices {
  __typename: 'user_invoices';
  id: number;
  costInUSD: number;
  dueAt: hasura_timestamptz | null;
  status: user_invoice_status_enum;
  createdAt: hasura_timestamptz;
  startAt: hasura_timestamptz | null;
  endAt: hasura_timestamptz | null;
  adjustedCostInUSD: number | null;
  /**
   * An aggregated array relationship
   */
  developer_bonus_earnings: fetchPendingDeveloperEarnings_developers_user_user_invoices_developer_bonus_earnings;
  /**
   * An aggregated array relationship
   */
  user_time_earnings: fetchPendingDeveloperEarnings_developers_user_user_invoices_user_time_earnings;
  /**
   * An aggregated array relationship
   */
  task_works: fetchPendingDeveloperEarnings_developers_user_user_invoices_task_works;
  /**
   * An aggregated array relationship
   */
  taskWorksByManagerinvoiceid: fetchPendingDeveloperEarnings_developers_user_user_invoices_taskWorksByManagerinvoiceid;
  /**
   * An aggregated array relationship
   */
  tasksDeveloper: fetchPendingDeveloperEarnings_developers_user_user_invoices_tasksDeveloper;
  /**
   * An aggregated array relationship
   */
  tasksManager: fetchPendingDeveloperEarnings_developers_user_user_invoices_tasksManager;
  /**
   * An aggregated array relationship
   */
  taskReviewerDeveloper: fetchPendingDeveloperEarnings_developers_user_user_invoices_taskReviewerDeveloper;
  /**
   * An aggregated array relationship
   */
  taskReviewerManager: fetchPendingDeveloperEarnings_developers_user_user_invoices_taskReviewerManager;
}

export interface fetchPendingDeveloperEarnings_developers_user {
  __typename: 'users';
  id: number;
  /**
   * An array relationship
   */
  user_time_earnings: fetchPendingDeveloperEarnings_developers_user_user_time_earnings[];
  /**
   * An array relationship
   */
  user_invoices: fetchPendingDeveloperEarnings_developers_user_user_invoices[];
}

export interface fetchPendingDeveloperEarnings_developers_developer_bonus_earnings {
  __typename: 'developer_bonus_earning';
  id: number;
  amountInUSD: hasura_float8;
  startDate: hasura_timestamptz;
  endDate: hasura_timestamptz;
}

export interface fetchPendingDeveloperEarnings_developers_task_reviews {
  __typename: 'task_reviews';
  id: number;
  costInUSD: number;
  completedAt: hasura_timestamptz | null;
}

export interface fetchPendingDeveloperEarnings_developers_taskReviewsByDeveloperid {
  __typename: 'task_reviews';
  id: number;
  costInUSD: number;
  completedAt: hasura_timestamptz | null;
}

export interface fetchPendingDeveloperEarnings_developers_tasksByDeveloperid {
  __typename: 'tasks';
  id: number;
  costInUSD: number;
  completedAt: hasura_timestamptz | null;
}

export interface fetchPendingDeveloperEarnings_developers_tasksByManagerid {
  __typename: 'tasks';
  id: number;
  costInUSD: number;
  completedAt: hasura_timestamptz | null;
}

export interface fetchPendingDeveloperEarnings_developers_task_works {
  __typename: 'task_work';
  id: number;
  costInUSD: number;
  completedAt: hasura_timestamptz | null;
}

export interface fetchPendingDeveloperEarnings_developers_taskWorksByDeveloperid {
  __typename: 'task_work';
  id: number;
  costInUSD: number;
  completedAt: hasura_timestamptz | null;
}

export interface fetchPendingDeveloperEarnings_developers {
  __typename: 'developers';
  id: string;
  /**
   * An object relationship
   */
  user: fetchPendingDeveloperEarnings_developers_user;
  /**
   * An array relationship
   */
  developer_bonus_earnings: fetchPendingDeveloperEarnings_developers_developer_bonus_earnings[];
  /**
   * An array relationship
   */
  task_reviews: fetchPendingDeveloperEarnings_developers_task_reviews[];
  /**
   * An array relationship
   */
  taskReviewsByDeveloperid: fetchPendingDeveloperEarnings_developers_taskReviewsByDeveloperid[];
  /**
   * An array relationship
   */
  tasksByDeveloperid: fetchPendingDeveloperEarnings_developers_tasksByDeveloperid[];
  /**
   * An array relationship
   */
  tasksByManagerid: fetchPendingDeveloperEarnings_developers_tasksByManagerid[];
  /**
   * An array relationship
   */
  task_works: fetchPendingDeveloperEarnings_developers_task_works[];
  /**
   * An array relationship
   */
  taskWorksByDeveloperid: fetchPendingDeveloperEarnings_developers_taskWorksByDeveloperid[];
}

export interface fetchPendingDeveloperEarnings {
  /**
   * fetch data from the table: "developers"
   */
  developers: fetchPendingDeveloperEarnings_developers[];
}

export interface fetchPendingDeveloperEarningsVariables {
  developerId: string;
}
