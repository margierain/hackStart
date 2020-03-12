/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  bonus_types_enum,
  user_payment_status_enum,
  tasks_status_enum,
} from './globalTypes';

// ====================================================
// GraphQL query operation: fetchDeveloperOverview
// ====================================================

export interface fetchDeveloperOverview_developers_developer_bonus_earnings {
  __typename: 'developer_bonus_earning';
  amountInUSD: hasura_float8;
  startDate: hasura_timestamptz;
  endDate: hasura_timestamptz;
  bonusType: bonus_types_enum;
}

export interface fetchDeveloperOverview_developers_developer_contracts {
  __typename: 'user_contracts';
  id: number;
  startDate: hasura_timestamptz;
  endDate: hasura_timestamptz | null;
}

export interface fetchDeveloperOverview_developers_developer_weekly_earnings {
  __typename: 'developer_weekly_earning';
  amountEarnedWithTasks: hasura_float8 | null;
  minimumAmountEarned: hasura_float8 | null;
  startDate: hasura_timestamptz;
  endDate: hasura_timestamptz;
}

export interface fetchDeveloperOverview_developers_user_user_payments {
  __typename: 'user_payments';
  status: user_payment_status_enum;
  amountInUSD: hasura_float8;
  finishedAt: hasura_timestamptz;
}

export interface fetchDeveloperOverview_developers_user {
  __typename: 'users';
  /**
   * An array relationship
   */
  user_payments: fetchDeveloperOverview_developers_user_user_payments[];
}

export interface fetchDeveloperOverview_developers_tasks_ticket {
  __typename: 'tickets';
  ticketLink: string | null;
  code: string;
}

export interface fetchDeveloperOverview_developers_tasks_task_time_logs_task {
  __typename: 'tasks';
  ticketCode: string;
}

export interface fetchDeveloperOverview_developers_tasks_task_time_logs {
  __typename: 'task_time_logs';
  startedAt: hasura_timestamptz;
  /**
   * An object relationship
   */
  task: fetchDeveloperOverview_developers_tasks_task_time_logs_task;
  finishedAt: hasura_timestamptz | null;
  timeSpent: number;
}

export interface fetchDeveloperOverview_developers_tasks {
  __typename: 'tasks';
  id: number;
  ticketCode: string;
  title: string;
  clientId: string;
  status: tasks_status_enum;
  costInUSD: number;
  developerId: string | null;
  managerId: string | null;
  reviewerId: string | null;
  startedAt: hasura_timestamptz | null;
  updatedAt: hasura_timestamptz;
  createdAt: hasura_timestamptz;
  completedAt: hasura_timestamptz | null;
  /**
   * An object relationship
   */
  ticket: fetchDeveloperOverview_developers_tasks_ticket;
  /**
   * An array relationship
   */
  task_time_logs: fetchDeveloperOverview_developers_tasks_task_time_logs[];
}

export interface fetchDeveloperOverview_developers {
  __typename: 'developers';
  id: string;
  githubId: string | null;
  firstName: string | null;
  /**
   * An array relationship
   */
  developer_bonus_earnings: fetchDeveloperOverview_developers_developer_bonus_earnings[];
  /**
   * An array relationship
   */
  developer_contracts: fetchDeveloperOverview_developers_developer_contracts[];
  /**
   * An array relationship
   */
  developer_weekly_earnings: fetchDeveloperOverview_developers_developer_weekly_earnings[];
  /**
   * An object relationship
   */
  user: fetchDeveloperOverview_developers_user;
  /**
   * An array relationship
   */
  tasks: fetchDeveloperOverview_developers_tasks[];
}

export interface fetchDeveloperOverview {
  /**
   * fetch data from the table: "developers"
   */
  developers: fetchDeveloperOverview_developers[];
}

export interface fetchDeveloperOverviewVariables {
  developerId: string;
}
