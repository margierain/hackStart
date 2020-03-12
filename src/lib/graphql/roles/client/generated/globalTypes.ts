/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum client_blocker_status_enum {
  pending = 'pending',
  resolved = 'resolved',
  review = 'review',
}

export enum client_invoice_status_enum {
  complete = 'complete',
  draft = 'draft',
}

export enum client_transaction_status_enum {
  cancelled = 'cancelled',
  failed = 'failed',
  in_progress = 'in_progress',
  pending = 'pending',
  successful = 'successful',
}

export enum client_transaction_types_enum {
  eu_bank = 'eu_bank',
  gb_bank = 'gb_bank',
  hk_bank = 'hk_bank',
  paypal = 'paypal',
  stripe = 'stripe',
  transferwise = 'transferwise',
  us_bank = 'us_bank',
}

export enum task_reviews_status_enum {
  assigned = 'assigned',
  available = 'available',
  cancelled = 'cancelled',
  failed = 'failed',
  in_progress = 'in_progress',
  passed = 'passed',
}

export enum tasks_status_enum {
  assigned = 'assigned',
  available = 'available',
  backlog = 'backlog',
  cancelled = 'cancelled',
  client_review = 'client_review',
  finished = 'finished',
  in_progress = 'in_progress',
  internal_review = 'internal_review',
  needs_changes = 'needs_changes',
  passed_internal_review = 'passed_internal_review',
}

export enum tasks_type_enum {
  admin = 'admin',
  challenge = 'challenge',
  code = 'code',
  retool = 'retool',
  review = 'review',
  spec = 'spec',
}

/**
 * expression to compare columns of type Boolean. All fields are combined with logical 'AND'.
 */
export interface Boolean_comparison_exp {
  _eq?: boolean | null;
  _gt?: boolean | null;
  _gte?: boolean | null;
  _in?: boolean[] | null;
  _is_null?: boolean | null;
  _lt?: boolean | null;
  _lte?: boolean | null;
  _neq?: boolean | null;
  _nin?: boolean[] | null;
}

/**
 * expression to compare columns of type Int. All fields are combined with logical 'AND'.
 */
export interface Int_comparison_exp {
  _eq?: number | null;
  _gt?: number | null;
  _gte?: number | null;
  _in?: number[] | null;
  _is_null?: boolean | null;
  _lt?: number | null;
  _lte?: number | null;
  _neq?: number | null;
  _nin?: number[] | null;
}

/**
 * expression to compare columns of type String. All fields are combined with logical 'AND'.
 */
export interface String_comparison_exp {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _ilike?: string | null;
  _in?: string[] | null;
  _is_null?: boolean | null;
  _like?: string | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nilike?: string | null;
  _nin?: string[] | null;
  _nlike?: string | null;
  _nsimilar?: string | null;
  _similar?: string | null;
}

/**
 * Boolean expression to filter rows from the table "admin". All fields are combined with a logical 'AND'.
 */
export interface admin_bool_exp {
  _and?: (admin_bool_exp | null)[] | null;
  _not?: admin_bool_exp | null;
  _or?: (admin_bool_exp | null)[] | null;
  id?: String_comparison_exp | null;
  user?: users_bool_exp | null;
  userById?: users_bool_exp | null;
  userId?: Int_comparison_exp | null;
  userLogin?: String_comparison_exp | null;
}

/**
 * expression to compare columns of type bigint. All fields are combined with logical 'AND'.
 */
export interface bigint_comparison_exp {
  _eq?: hasura_bigint | null;
  _gt?: hasura_bigint | null;
  _gte?: hasura_bigint | null;
  _in?: hasura_bigint[] | null;
  _is_null?: boolean | null;
  _lt?: hasura_bigint | null;
  _lte?: hasura_bigint | null;
  _neq?: hasura_bigint | null;
  _nin?: hasura_bigint[] | null;
}

/**
 * Boolean expression to filter rows from the table "client_blocker_status". All fields are combined with a logical 'AND'.
 */
export interface client_blocker_status_bool_exp {
  _and?: (client_blocker_status_bool_exp | null)[] | null;
  _not?: client_blocker_status_bool_exp | null;
  _or?: (client_blocker_status_bool_exp | null)[] | null;
  client_blockers?: client_blockers_bool_exp | null;
  description?: String_comparison_exp | null;
  type?: String_comparison_exp | null;
}

/**
 * expression to compare columns of type client_blocker_status_enum. All fields are combined with logical 'AND'.
 */
export interface client_blocker_status_enum_comparison_exp {
  _eq?: client_blocker_status_enum | null;
  _in?: client_blocker_status_enum[] | null;
  _is_null?: boolean | null;
  _neq?: client_blocker_status_enum | null;
  _nin?: client_blocker_status_enum[] | null;
}

/**
 * Boolean expression to filter rows from the table "client_blockers". All fields are combined with a logical 'AND'.
 */
export interface client_blockers_bool_exp {
  _and?: (client_blockers_bool_exp | null)[] | null;
  _not?: client_blockers_bool_exp | null;
  _or?: (client_blockers_bool_exp | null)[] | null;
  client?: clients_bool_exp | null;
  clientId?: String_comparison_exp | null;
  client_blocker_status?: client_blocker_status_bool_exp | null;
  client_project?: client_projects_bool_exp | null;
  client_repository?: client_repositories_bool_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  details?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  projectId?: Int_comparison_exp | null;
  repoId?: uuid_comparison_exp | null;
  status?: client_blocker_status_enum_comparison_exp | null;
  summary?: String_comparison_exp | null;
  task_client_blockers?: task_client_blockers_bool_exp | null;
  ticket_client_blockers?: ticket_client_blockers_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "client_daily_standups". All fields are combined with a logical 'AND'.
 */
export interface client_daily_standups_bool_exp {
  _and?: (client_daily_standups_bool_exp | null)[] | null;
  _not?: client_daily_standups_bool_exp | null;
  _or?: (client_daily_standups_bool_exp | null)[] | null;
  client?: clients_bool_exp | null;
  clientId?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  submittedAt?: String_comparison_exp | null;
  summary?: String_comparison_exp | null;
  ticket_daily_standups?: ticket_daily_standups_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
  userId?: Int_comparison_exp | null;
  user_daily_standup?: user_daily_standups_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "client_invoice_status". All fields are combined with a logical 'AND'.
 */
export interface client_invoice_status_bool_exp {
  _and?: (client_invoice_status_bool_exp | null)[] | null;
  _not?: client_invoice_status_bool_exp | null;
  _or?: (client_invoice_status_bool_exp | null)[] | null;
  client_invoices?: client_invoices_bool_exp | null;
  description?: String_comparison_exp | null;
  id?: String_comparison_exp | null;
}

/**
 * expression to compare columns of type client_invoice_status_enum. All fields are combined with logical 'AND'.
 */
export interface client_invoice_status_enum_comparison_exp {
  _eq?: client_invoice_status_enum | null;
  _in?: client_invoice_status_enum[] | null;
  _is_null?: boolean | null;
  _neq?: client_invoice_status_enum | null;
  _nin?: client_invoice_status_enum[] | null;
}

/**
 * Boolean expression to filter rows from the table "client_invoices". All fields are combined with a logical 'AND'.
 */
export interface client_invoices_bool_exp {
  _and?: (client_invoices_bool_exp | null)[] | null;
  _not?: client_invoices_bool_exp | null;
  _or?: (client_invoices_bool_exp | null)[] | null;
  client?: clients_bool_exp | null;
  clientId?: String_comparison_exp | null;
  client_invoice_balance?: client_invoices_with_balance_bool_exp | null;
  client_invoice_status?: client_invoice_status_bool_exp | null;
  costInCredits?: Int_comparison_exp | null;
  costInUSD?: Int_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  dueAt?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  maxBudgetInCredits?: Int_comparison_exp | null;
  status?: client_invoice_status_enum_comparison_exp | null;
  tickets?: tickets_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "client_invoices_with_balance".
 * All fields are combined with a logical 'AND'.
 */
export interface client_invoices_with_balance_bool_exp {
  _and?: (client_invoices_with_balance_bool_exp | null)[] | null;
  _not?: client_invoices_with_balance_bool_exp | null;
  _or?: (client_invoices_with_balance_bool_exp | null)[] | null;
  client?: clients_bool_exp | null;
  clientId?: String_comparison_exp | null;
  client_invoice?: client_invoices_bool_exp | null;
  client_invoice_status?: client_invoice_status_bool_exp | null;
  consumed_balance_in_credits?: bigint_comparison_exp | null;
  costInCredits?: Int_comparison_exp | null;
  costInUSD?: Int_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  currrent_paid_balance_in_usd?: bigint_comparison_exp | null;
  dueAt?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  maxBudgetInCredits?: Int_comparison_exp | null;
  previous_balance_in_credits?: bigint_comparison_exp | null;
  previous_balance_in_usd?: bigint_comparison_exp | null;
  previous_consumed_balance_in_credits?: bigint_comparison_exp | null;
  status?: String_comparison_exp | null;
  tickets?: tickets_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "client_jobs". All fields are combined with a logical 'AND'.
 */
export interface client_jobs_bool_exp {
  _and?: (client_jobs_bool_exp | null)[] | null;
  _not?: client_jobs_bool_exp | null;
  _or?: (client_jobs_bool_exp | null)[] | null;
  client?: clients_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "client_project_repositories".
 * All fields are combined with a logical 'AND'.
 */
export interface client_project_repositories_bool_exp {
  _and?: (client_project_repositories_bool_exp | null)[] | null;
  _not?: client_project_repositories_bool_exp | null;
  _or?: (client_project_repositories_bool_exp | null)[] | null;
  clientProjectsId?: Int_comparison_exp | null;
  clientRepositoriesId?: uuid_comparison_exp | null;
  client_project?: client_projects_bool_exp | null;
  client_repository?: client_repositories_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "client_projects". All fields are combined with a logical 'AND'.
 */
export interface client_projects_bool_exp {
  _and?: (client_projects_bool_exp | null)[] | null;
  _not?: client_projects_bool_exp | null;
  _or?: (client_projects_bool_exp | null)[] | null;
  client?: clients_bool_exp | null;
  clientId?: String_comparison_exp | null;
  client_blockers?: client_blockers_bool_exp | null;
  client_project_repositories?: client_project_repositories_bool_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  tickets?: tickets_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "client_repositories". All fields are combined with a logical 'AND'.
 */
export interface client_repositories_bool_exp {
  _and?: (client_repositories_bool_exp | null)[] | null;
  _not?: client_repositories_bool_exp | null;
  _or?: (client_repositories_bool_exp | null)[] | null;
  botId?: Int_comparison_exp | null;
  botType?: String_comparison_exp | null;
  client?: clients_bool_exp | null;
  clientBaseBranchName?: String_comparison_exp | null;
  clientId?: String_comparison_exp | null;
  clientRepoUrl?: String_comparison_exp | null;
  client_blockers?: client_blockers_bool_exp | null;
  client_project_repositories?: client_project_repositories_bool_exp | null;
  id?: uuid_comparison_exp | null;
  ignoredPaths?: String_comparison_exp | null;
  slicedFolders?: String_comparison_exp | null;
  slicedRepoUrl?: String_comparison_exp | null;
  tasks?: tasks_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "client_transaction_status". All fields are combined with a logical 'AND'.
 */
export interface client_transaction_status_bool_exp {
  _and?: (client_transaction_status_bool_exp | null)[] | null;
  _not?: client_transaction_status_bool_exp | null;
  _or?: (client_transaction_status_bool_exp | null)[] | null;
  client_transactions?: client_transactions_bool_exp | null;
  description?: String_comparison_exp | null;
  id?: String_comparison_exp | null;
}

/**
 * expression to compare columns of type client_transaction_status_enum. All fields are combined with logical 'AND'.
 */
export interface client_transaction_status_enum_comparison_exp {
  _eq?: client_transaction_status_enum | null;
  _in?: client_transaction_status_enum[] | null;
  _is_null?: boolean | null;
  _neq?: client_transaction_status_enum | null;
  _nin?: client_transaction_status_enum[] | null;
}

/**
 * Boolean expression to filter rows from the table "client_transaction_types". All fields are combined with a logical 'AND'.
 */
export interface client_transaction_types_bool_exp {
  _and?: (client_transaction_types_bool_exp | null)[] | null;
  _not?: client_transaction_types_bool_exp | null;
  _or?: (client_transaction_types_bool_exp | null)[] | null;
  client_transactions?: client_transactions_bool_exp | null;
  description?: String_comparison_exp | null;
  id?: String_comparison_exp | null;
}

/**
 * expression to compare columns of type client_transaction_types_enum. All fields are combined with logical 'AND'.
 */
export interface client_transaction_types_enum_comparison_exp {
  _eq?: client_transaction_types_enum | null;
  _in?: client_transaction_types_enum[] | null;
  _is_null?: boolean | null;
  _neq?: client_transaction_types_enum | null;
  _nin?: client_transaction_types_enum[] | null;
}

/**
 * Boolean expression to filter rows from the table "client_transactions". All fields are combined with a logical 'AND'.
 */
export interface client_transactions_bool_exp {
  _and?: (client_transactions_bool_exp | null)[] | null;
  _not?: client_transactions_bool_exp | null;
  _or?: (client_transactions_bool_exp | null)[] | null;
  channelTransactionId?: String_comparison_exp | null;
  channelType?: client_transaction_types_enum_comparison_exp | null;
  client?: clients_bool_exp | null;
  clientId?: String_comparison_exp | null;
  client_transaction_status?: client_transaction_status_bool_exp | null;
  client_transaction_type?: client_transaction_types_bool_exp | null;
  costInCredits?: Int_comparison_exp | null;
  costInUSD?: Int_comparison_exp | null;
  dueAt?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  invoiceCode?: String_comparison_exp | null;
  status?: client_transaction_status_enum_comparison_exp | null;
  transactedAt?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "client_transactions"
 */
export interface client_transactions_insert_input {
  channelTransactionId?: string | null;
  channelType?: client_transaction_types_enum | null;
  clientId?: string | null;
  costInCredits?: number | null;
  costInUSD?: number | null;
  dueAt?: hasura_timestamptz | null;
  id?: number | null;
  invoiceCode?: string | null;
  status?: client_transaction_status_enum | null;
  transactedAt?: hasura_timestamptz | null;
}

/**
 * Boolean expression to filter rows from the table "client_users". All fields are combined with a logical 'AND'.
 */
export interface client_users_bool_exp {
  _and?: (client_users_bool_exp | null)[] | null;
  _not?: client_users_bool_exp | null;
  _or?: (client_users_bool_exp | null)[] | null;
  client?: clients_bool_exp | null;
  clientId?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  user?: users_bool_exp | null;
  userId?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "clients". All fields are combined with a logical 'AND'.
 */
export interface clients_bool_exp {
  _and?: (clients_bool_exp | null)[] | null;
  _not?: clients_bool_exp | null;
  _or?: (clients_bool_exp | null)[] | null;
  addressAddress?: jsonb_comparison_exp | null;
  agencyId?: String_comparison_exp | null;
  client_blockers?: client_blockers_bool_exp | null;
  client_daily_standups?: client_daily_standups_bool_exp | null;
  client_invoices?: client_invoices_bool_exp | null;
  client_invoices_with_balance?: client_invoices_with_balance_bool_exp | null;
  client_jobs?: client_jobs_bool_exp | null;
  client_projects?: client_projects_bool_exp | null;
  client_repositories?: client_repositories_bool_exp | null;
  client_transactions?: client_transactions_bool_exp | null;
  client_users?: client_users_bool_exp | null;
  creditBatchSize?: Int_comparison_exp | null;
  id?: String_comparison_exp | null;
  legalName?: String_comparison_exp | null;
  logoUrl?: String_comparison_exp | null;
  meetings?: meetings_bool_exp | null;
  name?: String_comparison_exp | null;
  onBoardedAt?: timestamptz_comparison_exp | null;
  tasks?: tasks_bool_exp | null;
  tickets?: tickets_bool_exp | null;
  userDomains?: String_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "developers". All fields are combined with a logical 'AND'.
 */
export interface developers_bool_exp {
  _and?: (developers_bool_exp | null)[] | null;
  _not?: developers_bool_exp | null;
  _or?: (developers_bool_exp | null)[] | null;
  firstName?: String_comparison_exp | null;
  githubId?: String_comparison_exp | null;
  id?: String_comparison_exp | null;
  lastName?: String_comparison_exp | null;
  login?: String_comparison_exp | null;
  taskReviewsByDeveloperid?: task_reviews_bool_exp | null;
  task_reviews?: task_reviews_bool_exp | null;
  tasks?: tasks_bool_exp | null;
  tasksByDeveloperid?: tasks_bool_exp | null;
  tasksByManagerid?: tasks_bool_exp | null;
  tickets?: tickets_bool_exp | null;
  user?: users_bool_exp | null;
}

/**
 * expression to compare columns of type jsonb. All fields are combined with logical 'AND'.
 */
export interface jsonb_comparison_exp {
  _contained_in?: hasura_jsonb | null;
  _contains?: hasura_jsonb | null;
  _eq?: hasura_jsonb | null;
  _gt?: hasura_jsonb | null;
  _gte?: hasura_jsonb | null;
  _has_key?: string | null;
  _has_keys_all?: string[] | null;
  _has_keys_any?: string[] | null;
  _in?: hasura_jsonb[] | null;
  _is_null?: boolean | null;
  _lt?: hasura_jsonb | null;
  _lte?: hasura_jsonb | null;
  _neq?: hasura_jsonb | null;
  _nin?: hasura_jsonb[] | null;
}

/**
 * Boolean expression to filter rows from the table "meetings". All fields are combined with a logical 'AND'.
 */
export interface meetings_bool_exp {
  _and?: (meetings_bool_exp | null)[] | null;
  _not?: meetings_bool_exp | null;
  _or?: (meetings_bool_exp | null)[] | null;
  associatedClientId?: String_comparison_exp | null;
  calendlyMeetingId?: String_comparison_exp | null;
  client?: clients_bool_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  scheduledAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  zoomMeetingSid?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "meetings"
 */
export interface meetings_insert_input {
  associatedClientId?: string | null;
  calendlyMeetingId?: string | null;
  createdAt?: hasura_timestamptz | null;
  id?: number | null;
  scheduledAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  zoomMeetingSid?: string | null;
}

/**
 * Boolean expression to filter rows from the table "task_client_blockers". All fields are combined with a logical 'AND'.
 */
export interface task_client_blockers_bool_exp {
  _and?: (task_client_blockers_bool_exp | null)[] | null;
  _not?: task_client_blockers_bool_exp | null;
  _or?: (task_client_blockers_bool_exp | null)[] | null;
  client_blocker?: client_blockers_bool_exp | null;
  task?: tasks_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "task_daily_standups". All fields are combined with a logical 'AND'.
 */
export interface task_daily_standups_bool_exp {
  _and?: (task_daily_standups_bool_exp | null)[] | null;
  _not?: task_daily_standups_bool_exp | null;
  _or?: (task_daily_standups_bool_exp | null)[] | null;
  createdAt?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  submittedAt?: String_comparison_exp | null;
  summarizedInTicketDailyStandupId?: Int_comparison_exp | null;
  summarizedInUserDailyStandupId?: Int_comparison_exp | null;
  summary?: String_comparison_exp | null;
  task?: tasks_bool_exp | null;
  taskId?: Int_comparison_exp | null;
  ticket_daily_standup?: ticket_daily_standups_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedETA?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
  userId?: Int_comparison_exp | null;
  user_daily_standup?: user_daily_standups_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "task_reviews". All fields are combined with a logical 'AND'.
 */
export interface task_reviews_bool_exp {
  _and?: (task_reviews_bool_exp | null)[] | null;
  _not?: task_reviews_bool_exp | null;
  _or?: (task_reviews_bool_exp | null)[] | null;
  approvesTaskId?: Int_comparison_exp | null;
  completedAt?: timestamptz_comparison_exp | null;
  costInUSD?: Int_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  developer?: developers_bool_exp | null;
  developerByDeveloperid?: developers_bool_exp | null;
  developerId?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  managerId?: String_comparison_exp | null;
  startedAt?: timestamptz_comparison_exp | null;
  status?: task_reviews_status_enum_comparison_exp | null;
  task?: tasks_bool_exp | null;
  task_reviews_status?: task_reviews_status_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "task_reviews_status". All fields are combined with a logical 'AND'.
 */
export interface task_reviews_status_bool_exp {
  _and?: (task_reviews_status_bool_exp | null)[] | null;
  _not?: task_reviews_status_bool_exp | null;
  _or?: (task_reviews_status_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  task_reviews?: task_reviews_bool_exp | null;
  type?: String_comparison_exp | null;
}

/**
 * expression to compare columns of type task_reviews_status_enum. All fields are combined with logical 'AND'.
 */
export interface task_reviews_status_enum_comparison_exp {
  _eq?: task_reviews_status_enum | null;
  _in?: task_reviews_status_enum[] | null;
  _is_null?: boolean | null;
  _neq?: task_reviews_status_enum | null;
  _nin?: task_reviews_status_enum[] | null;
}

/**
 * Boolean expression to filter rows from the table "task_technologies". All fields are combined with a logical 'AND'.
 */
export interface task_technologies_bool_exp {
  _and?: (task_technologies_bool_exp | null)[] | null;
  _not?: task_technologies_bool_exp | null;
  _or?: (task_technologies_bool_exp | null)[] | null;
  task?: tasks_bool_exp | null;
  tasksId?: Int_comparison_exp | null;
  technologiesId?: Int_comparison_exp | null;
  technology?: technologies_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "tasks". All fields are combined with a logical 'AND'.
 */
export interface tasks_bool_exp {
  _and?: (tasks_bool_exp | null)[] | null;
  _not?: tasks_bool_exp | null;
  _or?: (tasks_bool_exp | null)[] | null;
  branchName?: String_comparison_exp | null;
  client?: clients_bool_exp | null;
  clientCommitDate?: timestamptz_comparison_exp | null;
  clientCommitMessage?: String_comparison_exp | null;
  clientId?: String_comparison_exp | null;
  clientRepositoryId?: uuid_comparison_exp | null;
  client_repository?: client_repositories_bool_exp | null;
  completedAt?: timestamptz_comparison_exp | null;
  costInUSD?: Int_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  description?: String_comparison_exp | null;
  developerByDeveloperid?: developers_bool_exp | null;
  developerByManagerid?: developers_bool_exp | null;
  developerByReviewerid?: developers_bool_exp | null;
  developerId?: String_comparison_exp | null;
  duplicateOfTask?: tasks_bool_exp | null;
  id?: Int_comparison_exp | null;
  isBillable?: Boolean_comparison_exp | null;
  managerId?: String_comparison_exp | null;
  parentTaskId?: tasks_bool_exp | null;
  prLink?: String_comparison_exp | null;
  reviewerId?: String_comparison_exp | null;
  specLink?: String_comparison_exp | null;
  startedAt?: timestamptz_comparison_exp | null;
  status?: tasks_status_enum_comparison_exp | null;
  task_client_blockers?: task_client_blockers_bool_exp | null;
  task_daily_standups?: task_daily_standups_bool_exp | null;
  task_reviews?: task_reviews_bool_exp | null;
  task_status?: tasks_status_bool_exp | null;
  task_technologies?: task_technologies_bool_exp | null;
  task_type?: tasks_type_bool_exp | null;
  tasks_status?: tasks_status_bool_exp | null;
  tasks_type?: tasks_type_bool_exp | null;
  ticket?: tickets_bool_exp | null;
  ticketCode?: String_comparison_exp | null;
  title?: String_comparison_exp | null;
  type?: tasks_type_enum_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "tasks_status". All fields are combined with a logical 'AND'.
 */
export interface tasks_status_bool_exp {
  _and?: (tasks_status_bool_exp | null)[] | null;
  _not?: tasks_status_bool_exp | null;
  _or?: (tasks_status_bool_exp | null)[] | null;
  tasks?: tasks_bool_exp | null;
}

/**
 * expression to compare columns of type tasks_status_enum. All fields are combined with logical 'AND'.
 */
export interface tasks_status_enum_comparison_exp {
  _eq?: tasks_status_enum | null;
  _in?: tasks_status_enum[] | null;
  _is_null?: boolean | null;
  _neq?: tasks_status_enum | null;
  _nin?: tasks_status_enum[] | null;
}

/**
 * Boolean expression to filter rows from the table "tasks_type". All fields are combined with a logical 'AND'.
 */
export interface tasks_type_bool_exp {
  _and?: (tasks_type_bool_exp | null)[] | null;
  _not?: tasks_type_bool_exp | null;
  _or?: (tasks_type_bool_exp | null)[] | null;
  tasks?: tasks_bool_exp | null;
}

/**
 * expression to compare columns of type tasks_type_enum. All fields are combined with logical 'AND'.
 */
export interface tasks_type_enum_comparison_exp {
  _eq?: tasks_type_enum | null;
  _in?: tasks_type_enum[] | null;
  _is_null?: boolean | null;
  _neq?: tasks_type_enum | null;
  _nin?: tasks_type_enum[] | null;
}

/**
 * Boolean expression to filter rows from the table "technologies". All fields are combined with a logical 'AND'.
 */
export interface technologies_bool_exp {
  _and?: (technologies_bool_exp | null)[] | null;
  _not?: technologies_bool_exp | null;
  _or?: (technologies_bool_exp | null)[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  task_technologies?: task_technologies_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "ticket_client_blockers". All fields are combined with a logical 'AND'.
 */
export interface ticket_client_blockers_bool_exp {
  _and?: (ticket_client_blockers_bool_exp | null)[] | null;
  _not?: ticket_client_blockers_bool_exp | null;
  _or?: (ticket_client_blockers_bool_exp | null)[] | null;
  client_blocker?: client_blockers_bool_exp | null;
  ticket?: tickets_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "ticket_daily_standups". All fields are combined with a logical 'AND'.
 */
export interface ticket_daily_standups_bool_exp {
  _and?: (ticket_daily_standups_bool_exp | null)[] | null;
  _not?: ticket_daily_standups_bool_exp | null;
  _or?: (ticket_daily_standups_bool_exp | null)[] | null;
  client_daily_standup?: client_daily_standups_bool_exp | null;
  message?: String_comparison_exp | null;
  task_daily_standups?: task_daily_standups_bool_exp | null;
  ticket?: tickets_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedETA?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
  user_daily_standup?: user_daily_standups_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "tickets". All fields are combined with a logical 'AND'.
 */
export interface tickets_bool_exp {
  _and?: (tickets_bool_exp | null)[] | null;
  _not?: tickets_bool_exp | null;
  _or?: (tickets_bool_exp | null)[] | null;
  cancelledAt?: timestamptz_comparison_exp | null;
  client?: clients_bool_exp | null;
  clientId?: String_comparison_exp | null;
  clientProjectId?: Int_comparison_exp | null;
  client_invoice?: client_invoices_bool_exp | null;
  client_project?: client_projects_bool_exp | null;
  code?: String_comparison_exp | null;
  completedAt?: timestamptz_comparison_exp | null;
  costInCredits?: Int_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  description?: String_comparison_exp | null;
  developer?: developers_bool_exp | null;
  discount?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  invoiceId?: Int_comparison_exp | null;
  isFixed?: Boolean_comparison_exp | null;
  isInternal?: Boolean_comparison_exp | null;
  isSynced?: Boolean_comparison_exp | null;
  manager?: users_bool_exp | null;
  managerId?: String_comparison_exp | null;
  startedAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  tasks?: tasks_bool_exp | null;
  ticketLink?: String_comparison_exp | null;
  ticket_client_blockers?: ticket_client_blockers_bool_exp | null;
  ticket_daily_standups?: ticket_daily_standups_bool_exp | null;
  title?: String_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * expression to compare columns of type timestamptz. All fields are combined with logical 'AND'.
 */
export interface timestamptz_comparison_exp {
  _eq?: hasura_timestamptz | null;
  _gt?: hasura_timestamptz | null;
  _gte?: hasura_timestamptz | null;
  _in?: hasura_timestamptz[] | null;
  _is_null?: boolean | null;
  _lt?: hasura_timestamptz | null;
  _lte?: hasura_timestamptz | null;
  _neq?: hasura_timestamptz | null;
  _nin?: hasura_timestamptz[] | null;
}

/**
 * Boolean expression to filter rows from the table "user_daily_standups". All fields are combined with a logical 'AND'.
 */
export interface user_daily_standups_bool_exp {
  _and?: (user_daily_standups_bool_exp | null)[] | null;
  _not?: user_daily_standups_bool_exp | null;
  _or?: (user_daily_standups_bool_exp | null)[] | null;
  client_daily_standups?: client_daily_standups_bool_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  submittedAt?: String_comparison_exp | null;
  summary?: String_comparison_exp | null;
  task_daily_standups?: task_daily_standups_bool_exp | null;
  ticket_daily_standups?: ticket_daily_standups_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
  userId?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "user_emails". All fields are combined with a logical 'AND'.
 */
export interface user_emails_bool_exp {
  _and?: (user_emails_bool_exp | null)[] | null;
  _not?: user_emails_bool_exp | null;
  _or?: (user_emails_bool_exp | null)[] | null;
  user?: users_bool_exp | null;
  userByEmail?: users_bool_exp | null;
  userId?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'.
 */
export interface users_bool_exp {
  _and?: (users_bool_exp | null)[] | null;
  _not?: users_bool_exp | null;
  _or?: (users_bool_exp | null)[] | null;
  admin?: admin_bool_exp | null;
  admins?: admin_bool_exp | null;
  avatarUrl?: String_comparison_exp | null;
  client_daily_standups?: client_daily_standups_bool_exp | null;
  client_user?: client_users_bool_exp | null;
  client_users?: client_users_bool_exp | null;
  defaultEmail?: String_comparison_exp | null;
  developer?: developers_bool_exp | null;
  firstName?: String_comparison_exp | null;
  githubLogin?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  lastName?: String_comparison_exp | null;
  login?: String_comparison_exp | null;
  passwordHash?: String_comparison_exp | null;
  ripplingEmployeeId?: Int_comparison_exp | null;
  task_daily_standups?: task_daily_standups_bool_exp | null;
  telephone?: String_comparison_exp | null;
  ticket_daily_standups?: ticket_daily_standups_bool_exp | null;
  timeDoctorUserId?: Int_comparison_exp | null;
  userEmailByUnverifiedemail?: user_emails_bool_exp | null;
  user_daily_standups?: user_daily_standups_bool_exp | null;
  user_email?: user_emails_bool_exp | null;
  user_emails?: user_emails_bool_exp | null;
}

/**
 * expression to compare columns of type uuid. All fields are combined with logical 'AND'.
 */
export interface uuid_comparison_exp {
  _eq?: hasura_uuid | null;
  _gt?: hasura_uuid | null;
  _gte?: hasura_uuid | null;
  _in?: hasura_uuid[] | null;
  _is_null?: boolean | null;
  _lt?: hasura_uuid | null;
  _lte?: hasura_uuid | null;
  _neq?: hasura_uuid | null;
  _nin?: hasura_uuid[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
