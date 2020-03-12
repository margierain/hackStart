/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchUserStandupOverview
// ====================================================

export interface fetchUserStandupOverview_users_user_daily_standups_user {
  __typename: 'users';
  id: number;
  avatarUrl: string | null;
}

export interface fetchUserStandupOverview_users_user_daily_standups_ticket_daily_standups_user {
  __typename: 'users';
  avatarUrl: string | null;
}

export interface fetchUserStandupOverview_users_user_daily_standups_ticket_daily_standups_ticket {
  __typename: 'tickets';
  id: number;
  code: string;
}

export interface fetchUserStandupOverview_users_user_daily_standups_ticket_daily_standups {
  __typename: 'ticket_daily_standups';
  id: number;
  message: string;
  submittedAt: string;
  createdAt: hasura_timestamptz;
  updatedETA: hasura_timestamptz;
  /**
   * An object relationship
   */
  user: fetchUserStandupOverview_users_user_daily_standups_ticket_daily_standups_user;
  /**
   * An object relationship
   */
  ticket: fetchUserStandupOverview_users_user_daily_standups_ticket_daily_standups_ticket;
}

export interface fetchUserStandupOverview_users_user_daily_standups_task_daily_standups_user {
  __typename: 'users';
  id: number;
  avatarUrl: string | null;
}

export interface fetchUserStandupOverview_users_user_daily_standups_task_daily_standups_task {
  __typename: 'tasks';
  id: number;
  ticketCode: string;
}

export interface fetchUserStandupOverview_users_user_daily_standups_task_daily_standups {
  __typename: 'task_daily_standups';
  id: number;
  submittedAt: string;
  createdAt: hasura_timestamptz;
  summary: string;
  updatedETA: hasura_timestamptz;
  /**
   * An object relationship
   */
  user: fetchUserStandupOverview_users_user_daily_standups_task_daily_standups_user;
  /**
   * An object relationship
   */
  task: fetchUserStandupOverview_users_user_daily_standups_task_daily_standups_task;
}

export interface fetchUserStandupOverview_users_user_daily_standups_client_daily_standups_user {
  __typename: 'users';
  id: number;
  avatarUrl: string | null;
}

export interface fetchUserStandupOverview_users_user_daily_standups_client_daily_standups_client {
  __typename: 'clients';
  id: string;
}

export interface fetchUserStandupOverview_users_user_daily_standups_client_daily_standups {
  __typename: 'client_daily_standups';
  id: number;
  submittedAt: string | null;
  createdAt: hasura_timestamptz;
  summary: string;
  /**
   * An object relationship
   */
  user: fetchUserStandupOverview_users_user_daily_standups_client_daily_standups_user;
  /**
   * An object relationship
   */
  client: fetchUserStandupOverview_users_user_daily_standups_client_daily_standups_client;
}

export interface fetchUserStandupOverview_users_user_daily_standups {
  __typename: 'user_daily_standups';
  id: number;
  summary: string;
  submittedAt: string | null;
  createdAt: hasura_timestamptz;
  /**
   * An object relationship
   */
  user: fetchUserStandupOverview_users_user_daily_standups_user;
  /**
   * An array relationship
   */
  ticket_daily_standups: fetchUserStandupOverview_users_user_daily_standups_ticket_daily_standups[];
  /**
   * An array relationship
   */
  task_daily_standups: fetchUserStandupOverview_users_user_daily_standups_task_daily_standups[];
  /**
   * An array relationship
   */
  client_daily_standups: fetchUserStandupOverview_users_user_daily_standups_client_daily_standups[];
}

export interface fetchUserStandupOverview_users_unlinked_ticket_daily_standups_user {
  __typename: 'users';
  id: number;
  avatarUrl: string | null;
}

export interface fetchUserStandupOverview_users_unlinked_ticket_daily_standups_ticket {
  __typename: 'tickets';
  id: number;
  code: string;
}

export interface fetchUserStandupOverview_users_unlinked_ticket_daily_standups {
  __typename: 'ticket_daily_standups';
  id: number;
  message: string;
  submittedAt: string;
  createdAt: hasura_timestamptz;
  updatedETA: hasura_timestamptz;
  /**
   * An object relationship
   */
  user: fetchUserStandupOverview_users_unlinked_ticket_daily_standups_user;
  /**
   * An object relationship
   */
  ticket: fetchUserStandupOverview_users_unlinked_ticket_daily_standups_ticket;
}

export interface fetchUserStandupOverview_users_unlinked_task_daily_standups_user {
  __typename: 'users';
  id: number;
  avatarUrl: string | null;
}

export interface fetchUserStandupOverview_users_unlinked_task_daily_standups_task {
  __typename: 'tasks';
  id: number;
  ticketCode: string;
}

export interface fetchUserStandupOverview_users_unlinked_task_daily_standups {
  __typename: 'task_daily_standups';
  id: number;
  submittedAt: string;
  createdAt: hasura_timestamptz;
  summary: string;
  updatedETA: hasura_timestamptz;
  /**
   * An object relationship
   */
  user: fetchUserStandupOverview_users_unlinked_task_daily_standups_user;
  /**
   * An object relationship
   */
  task: fetchUserStandupOverview_users_unlinked_task_daily_standups_task;
}

export interface fetchUserStandupOverview_users_unlinked_client_daily_standups_user {
  __typename: 'users';
  id: number;
  avatarUrl: string | null;
}

export interface fetchUserStandupOverview_users_unlinked_client_daily_standups_client {
  __typename: 'clients';
  id: string;
}

export interface fetchUserStandupOverview_users_unlinked_client_daily_standups {
  __typename: 'client_daily_standups';
  id: number;
  submittedAt: string | null;
  createdAt: hasura_timestamptz;
  summary: string;
  /**
   * An object relationship
   */
  user: fetchUserStandupOverview_users_unlinked_client_daily_standups_user;
  /**
   * An object relationship
   */
  client: fetchUserStandupOverview_users_unlinked_client_daily_standups_client;
}

export interface fetchUserStandupOverview_users {
  __typename: 'users';
  id: number;
  /**
   * An array relationship
   */
  user_daily_standups: fetchUserStandupOverview_users_user_daily_standups[];
  /**
   * An array relationship
   */
  unlinked_ticket_daily_standups: fetchUserStandupOverview_users_unlinked_ticket_daily_standups[];
  /**
   * An array relationship
   */
  unlinked_task_daily_standups: fetchUserStandupOverview_users_unlinked_task_daily_standups[];
  /**
   * An array relationship
   */
  unlinked_client_daily_standups: fetchUserStandupOverview_users_unlinked_client_daily_standups[];
}

export interface fetchUserStandupOverview {
  /**
   * fetch data from the table: "users"
   */
  users: fetchUserStandupOverview_users[];
}

export interface fetchUserStandupOverviewVariables {
  userId: number;
}
