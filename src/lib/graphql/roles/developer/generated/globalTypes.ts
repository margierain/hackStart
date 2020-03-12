/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum TaskStateType {
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

export enum bonus_types_enum {
  developer_referral = 'developer_referral',
  holiday_bonus = 'holiday_bonus',
  weekly_bonus = 'weekly_bonus',
  workplace_bonus = 'workplace_bonus',
}

export enum client_blocker_status_enum {
  pending = 'pending',
  resolved = 'resolved',
  review = 'review',
}

/**
 * unique or primary key constraints on table "client_bots"
 */
export enum client_bots_constraint {
  PK_57d9d7839cfa844a051fdd1a6d4 = 'PK_57d9d7839cfa844a051fdd1a6d4',
  UQ_BOTS_GLOBALLY = 'UQ_BOTS_GLOBALLY',
}

/**
 * update columns of table "client_bots"
 */
export enum client_bots_update_column {
  accessEndpoint = 'accessEndpoint',
  clientId = 'clientId',
  id = 'id',
  password = 'password',
  token = 'token',
  type = 'type',
  username = 'username',
}

/**
 * unique or primary key constraints on table "client_daily_standups"
 */
export enum client_daily_standups_constraint {
  PK_3d02aa88b33cbd92f26af22c37b = 'PK_3d02aa88b33cbd92f26af22c37b',
}

/**
 * update columns of table "client_daily_standups"
 */
export enum client_daily_standups_update_column {
  clientId = 'clientId',
  createdAt = 'createdAt',
  id = 'id',
  submittedAt = 'submittedAt',
  summarizedInUserDailyStandupId = 'summarizedInUserDailyStandupId',
  summary = 'summary',
  updatedAt = 'updatedAt',
  userId = 'userId',
}

/**
 * unique or primary key constraints on table "client_repositories"
 */
export enum client_repositories_constraint {
  PK_297a3bc66bd34fa787b2249ba23 = 'PK_297a3bc66bd34fa787b2249ba23',
  UQ_CLIENT_REPO = 'UQ_CLIENT_REPO',
  UQ_SLICED_REPO = 'UQ_SLICED_REPO',
}

/**
 * update columns of table "client_repositories"
 */
export enum client_repositories_update_column {
  clientBaseBranchName = 'clientBaseBranchName',
  clientId = 'clientId',
  clientRepoUrl = 'clientRepoUrl',
  ignoredPaths = 'ignoredPaths',
  slicedFolders = 'slicedFolders',
  slicedRepoUrl = 'slicedRepoUrl',
}

/**
 * unique or primary key constraints on table "clients"
 */
export enum clients_constraint {
  PK_f1ab7cf3a5714dbc6bb4e1c28a4 = 'PK_f1ab7cf3a5714dbc6bb4e1c28a4',
}

/**
 * update columns of table "clients"
 */
export enum clients_update_column {
  id = 'id',
  name = 'name',
}

/**
 * unique or primary key constraints on table "task_daily_standups"
 */
export enum task_daily_standups_constraint {
  PK_62edf80b503d3d011e049824561 = 'PK_62edf80b503d3d011e049824561',
}

/**
 * update columns of table "task_daily_standups"
 */
export enum task_daily_standups_update_column {
  createdAt = 'createdAt',
  id = 'id',
  submittedAt = 'submittedAt',
  summarizedInTicketDailyStandupId = 'summarizedInTicketDailyStandupId',
  summarizedInUserDailyStandupId = 'summarizedInUserDailyStandupId',
  summary = 'summary',
  taskId = 'taskId',
  updatedAt = 'updatedAt',
  updatedETA = 'updatedETA',
  userId = 'userId',
}

/**
 * unique or primary key constraints on table "task_reviews"
 */
export enum task_reviews_constraint {
  PK_0e1b45486945f89aee4136b318f = 'PK_0e1b45486945f89aee4136b318f',
}

export enum task_reviews_status_enum {
  assigned = 'assigned',
  available = 'available',
  cancelled = 'cancelled',
  failed = 'failed',
  in_progress = 'in_progress',
  passed = 'passed',
}

/**
 * update columns of table "task_reviews"
 */
export enum task_reviews_update_column {
  completedAt = 'completedAt',
  costInUSD = 'costInUSD',
  createdAt = 'createdAt',
  developerId = 'developerId',
  id = 'id',
  managerId = 'managerId',
  startedAt = 'startedAt',
  status = 'status',
  updatedAt = 'updatedAt',
}

/**
 * unique or primary key constraints on table "task_technologies"
 */
export enum task_technologies_constraint {
  PK_d093d12bdef63226744f923d35c = 'PK_d093d12bdef63226744f923d35c',
}

/**
 * update columns of table "task_technologies"
 */
export enum task_technologies_update_column {
  tasksId = 'tasksId',
  technologiesId = 'technologiesId',
}

/**
 * unique or primary key constraints on table "tasks"
 */
export enum tasks_constraint {
  PK_8d12ff38fcc62aaba2cab748772 = 'PK_8d12ff38fcc62aaba2cab748772',
  tasks_id_key = 'tasks_id_key',
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
 * update columns of table "tasks"
 */
export enum tasks_update_column {
  branchName = 'branchName',
  clientCommitDate = 'clientCommitDate',
  clientCommitMessage = 'clientCommitMessage',
  clientId = 'clientId',
  clientRepositoryId = 'clientRepositoryId',
  completedAt = 'completedAt',
  costInUSD = 'costInUSD',
  createdAt = 'createdAt',
  description = 'description',
  developerId = 'developerId',
  id = 'id',
  isBillable = 'isBillable',
  managerId = 'managerId',
  prLink = 'prLink',
  reviewerId = 'reviewerId',
  specLink = 'specLink',
  startedAt = 'startedAt',
  status = 'status',
  ticketCode = 'ticketCode',
  title = 'title',
  type = 'type',
  updatedAt = 'updatedAt',
}

/**
 * unique or primary key constraints on table "ticket_daily_standups"
 */
export enum ticket_daily_standups_constraint {
  PK_e2c56eb9a2625999ace654b54f9 = 'PK_e2c56eb9a2625999ace654b54f9',
}

/**
 * update columns of table "ticket_daily_standups"
 */
export enum ticket_daily_standups_update_column {
  createdAt = 'createdAt',
  id = 'id',
  message = 'message',
  submittedAt = 'submittedAt',
  summarizedInClientDailyStandupId = 'summarizedInClientDailyStandupId',
  summarizedInUserDailyStandupId = 'summarizedInUserDailyStandupId',
  ticketId = 'ticketId',
  updatedAt = 'updatedAt',
  updatedETA = 'updatedETA',
  userId = 'userId',
}

/**
 * unique or primary key constraints on table "tickets"
 */
export enum tickets_constraint {
  PK_343bc942ae261cf7a1377f48fd0 = 'PK_343bc942ae261cf7a1377f48fd0',
  UQ_c6e20a830c0f8b571abd331b775 = 'UQ_c6e20a830c0f8b571abd331b775',
}

/**
 * update columns of table "tickets"
 */
export enum tickets_update_column {
  clientId = 'clientId',
  clientProjectId = 'clientProjectId',
  code = 'code',
  completedAt = 'completedAt',
  costInCredits = 'costInCredits',
  createdAt = 'createdAt',
  description = 'description',
  discount = 'discount',
  id = 'id',
  invoiceId = 'invoiceId',
  isFixed = 'isFixed',
  isInternal = 'isInternal',
  isSynced = 'isSynced',
  managerId = 'managerId',
  startedAt = 'startedAt',
  syncedAt = 'syncedAt',
  ticketLink = 'ticketLink',
  title = 'title',
  updatedAt = 'updatedAt',
}

/**
 * unique or primary key constraints on table "user_daily_standups"
 */
export enum user_daily_standups_constraint {
  PK_49f95492e9d0de21cd74f5a1768 = 'PK_49f95492e9d0de21cd74f5a1768',
}

/**
 * update columns of table "user_daily_standups"
 */
export enum user_daily_standups_update_column {
  createdAt = 'createdAt',
  id = 'id',
  submittedAt = 'submittedAt',
  summary = 'summary',
  updatedAt = 'updatedAt',
  userId = 'userId',
}

export enum user_invoice_status_enum {
  complete = 'complete',
  draft = 'draft',
}

export enum user_payment_status_enum {
  failed = 'failed',
  in_progress = 'in_progress',
  pending = 'pending',
  successful = 'successful',
}

export enum user_payment_types_enum {
  payoneer = 'payoneer',
  paypal = 'paypal',
  rippling = 'rippling',
  transferwise = 'transferwise',
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
 * Boolean expression to filter rows from the table "bonus_types". All fields are combined with a logical 'AND'.
 */
export interface bonus_types_bool_exp {
  _and?: (bonus_types_bool_exp | null)[] | null;
  _not?: bonus_types_bool_exp | null;
  _or?: (bonus_types_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  developer_bonus_earnings?: developer_bonus_earning_bool_exp | null;
  type?: String_comparison_exp | null;
}

/**
 * expression to compare columns of type bonus_types_enum. All fields are combined with logical 'AND'.
 */
export interface bonus_types_enum_comparison_exp {
  _eq?: bonus_types_enum | null;
  _in?: bonus_types_enum[] | null;
  _is_null?: boolean | null;
  _neq?: bonus_types_enum | null;
  _nin?: bonus_types_enum[] | null;
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
 * input type for inserting array relation for remote table "client_bots"
 */
export interface client_bots_arr_rel_insert_input {
  data: client_bots_insert_input[];
  on_conflict?: client_bots_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "client_bots". All fields are combined with a logical 'AND'.
 */
export interface client_bots_bool_exp {
  _and?: (client_bots_bool_exp | null)[] | null;
  _not?: client_bots_bool_exp | null;
  _or?: (client_bots_bool_exp | null)[] | null;
  accessEndpoint?: String_comparison_exp | null;
  client?: clients_bool_exp | null;
  clientId?: String_comparison_exp | null;
  client_repositories?: client_repositories_bool_exp | null;
  id?: Int_comparison_exp | null;
  password?: String_comparison_exp | null;
  token?: String_comparison_exp | null;
  type?: String_comparison_exp | null;
  username?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "client_bots"
 */
export interface client_bots_insert_input {
  accessEndpoint?: string | null;
  client?: clients_obj_rel_insert_input | null;
  clientId?: string | null;
  client_repositories?: client_repositories_arr_rel_insert_input | null;
  id?: number | null;
  password?: string | null;
  token?: string | null;
  type?: string | null;
  username?: string | null;
}

/**
 * input type for inserting object relation for remote table "client_bots"
 */
export interface client_bots_obj_rel_insert_input {
  data: client_bots_insert_input;
  on_conflict?: client_bots_on_conflict | null;
}

/**
 * on conflict condition type for table "client_bots"
 */
export interface client_bots_on_conflict {
  constraint: client_bots_constraint;
  update_columns: client_bots_update_column[];
  where?: client_bots_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "client_daily_standups"
 */
export interface client_daily_standups_arr_rel_insert_input {
  data: client_daily_standups_insert_input[];
  on_conflict?: client_daily_standups_on_conflict | null;
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
  summarizedInUserDailyStandupId?: Int_comparison_exp | null;
  summary?: String_comparison_exp | null;
  ticket_daily_standups?: ticket_daily_standups_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
  userId?: Int_comparison_exp | null;
  user_daily_standup?: user_daily_standups_bool_exp | null;
}

/**
 * input type for inserting data into table "client_daily_standups"
 */
export interface client_daily_standups_insert_input {
  client?: clients_obj_rel_insert_input | null;
  clientId?: string | null;
  createdAt?: hasura_timestamptz | null;
  id?: number | null;
  submittedAt?: string | null;
  summary?: string | null;
  ticket_daily_standups?: ticket_daily_standups_arr_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
  userId?: number | null;
  user_daily_standup?: user_daily_standups_obj_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "client_daily_standups"
 */
export interface client_daily_standups_obj_rel_insert_input {
  data: client_daily_standups_insert_input;
  on_conflict?: client_daily_standups_on_conflict | null;
}

/**
 * on conflict condition type for table "client_daily_standups"
 */
export interface client_daily_standups_on_conflict {
  constraint: client_daily_standups_constraint;
  update_columns: client_daily_standups_update_column[];
  where?: client_daily_standups_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "client_jobs"
 */
export interface client_jobs_arr_rel_insert_input {
  data: client_jobs_insert_input[];
}

/**
 * Boolean expression to filter rows from the table "client_jobs". All fields are combined with a logical 'AND'.
 */
export interface client_jobs_bool_exp {
  _and?: (client_jobs_bool_exp | null)[] | null;
  _not?: client_jobs_bool_exp | null;
  _or?: (client_jobs_bool_exp | null)[] | null;
  canSponsorVisa?: Boolean_comparison_exp | null;
  client?: clients_bool_exp | null;
  clientId?: String_comparison_exp | null;
  earliestStartDate?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  isRemote?: Boolean_comparison_exp | null;
  linkToJobDescription?: String_comparison_exp | null;
  maxAnnualSalary?: Int_comparison_exp | null;
  minQualifiedRank?: Int_comparison_exp | null;
  qualifiedCities?: String_comparison_exp | null;
  qualifiedCountries?: String_comparison_exp | null;
  qualifiedTimezoneOverlap?: Int_comparison_exp | null;
  totalPlacements?: Int_comparison_exp | null;
  workTimeZone?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "client_jobs"
 */
export interface client_jobs_insert_input {
  canSponsorVisa?: boolean | null;
  client?: clients_obj_rel_insert_input | null;
  clientId?: string | null;
  earliestStartDate?: hasura_timestamptz | null;
  id?: hasura_uuid | null;
  isRemote?: boolean | null;
  linkToJobDescription?: string | null;
  maxAnnualSalary?: number | null;
  minQualifiedRank?: number | null;
  qualifiedCities?: string | null;
  qualifiedCountries?: string | null;
  qualifiedTimezoneOverlap?: number | null;
  totalPlacements?: number | null;
  workTimeZone?: number | null;
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
 * input type for inserting array relation for remote table "client_repositories"
 */
export interface client_repositories_arr_rel_insert_input {
  data: client_repositories_insert_input[];
  on_conflict?: client_repositories_on_conflict | null;
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
  client_bot?: client_bots_bool_exp | null;
  client_project_repositories?: client_project_repositories_bool_exp | null;
  client_repositories_commits?: client_repositories_commits_bool_exp | null;
  id?: uuid_comparison_exp | null;
  slicedRepoUrl?: String_comparison_exp | null;
  tasks?: tasks_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "client_repositories_commits"
 */
export interface client_repositories_commits_arr_rel_insert_input {
  data: client_repositories_commits_insert_input[];
}

/**
 * Boolean expression to filter rows from the table "client_repositories_commits".
 * All fields are combined with a logical 'AND'.
 */
export interface client_repositories_commits_bool_exp {
  _and?: (client_repositories_commits_bool_exp | null)[] | null;
  _not?: client_repositories_commits_bool_exp | null;
  _or?: (client_repositories_commits_bool_exp | null)[] | null;
  clientCommitDate?: timestamptz_comparison_exp | null;
  clientCommitSHA?: String_comparison_exp | null;
  clientRepositoryId?: uuid_comparison_exp | null;
  client_repository?: client_repositories_bool_exp | null;
  id?: uuid_comparison_exp | null;
  slicedCommitDate?: timestamptz_comparison_exp | null;
  slicedCommitSHA?: String_comparison_exp | null;
  task?: tasks_bool_exp | null;
}

/**
 * input type for inserting data into table "client_repositories_commits"
 */
export interface client_repositories_commits_insert_input {
  clientCommitDate?: hasura_timestamptz | null;
  clientCommitSHA?: string | null;
  clientRepositoryId?: hasura_uuid | null;
  client_repository?: client_repositories_obj_rel_insert_input | null;
  id?: hasura_uuid | null;
  slicedCommitDate?: hasura_timestamptz | null;
  slicedCommitSHA?: string | null;
  task?: tasks_obj_rel_insert_input | null;
}

/**
 * input type for inserting data into table "client_repositories"
 */
export interface client_repositories_insert_input {
  botId?: number | null;
  botType?: string | null;
  client?: clients_obj_rel_insert_input | null;
  clientBaseBranchName?: string | null;
  clientId?: string | null;
  clientRepoUrl?: string | null;
  client_bot?: client_bots_obj_rel_insert_input | null;
  client_repositories_commits?: client_repositories_commits_arr_rel_insert_input | null;
  id?: hasura_uuid | null;
  ignoredPaths?: string | null;
  slicedFolders?: string | null;
  slicedRepoUrl?: string | null;
  tasks?: tasks_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "client_repositories"
 */
export interface client_repositories_obj_rel_insert_input {
  data: client_repositories_insert_input;
  on_conflict?: client_repositories_on_conflict | null;
}

/**
 * on conflict condition type for table "client_repositories"
 */
export interface client_repositories_on_conflict {
  constraint: client_repositories_constraint;
  update_columns: client_repositories_update_column[];
  where?: client_repositories_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "clients". All fields are combined with a logical 'AND'.
 */
export interface clients_bool_exp {
  _and?: (clients_bool_exp | null)[] | null;
  _not?: clients_bool_exp | null;
  _or?: (clients_bool_exp | null)[] | null;
  agencyId?: String_comparison_exp | null;
  client_blockers?: client_blockers_bool_exp | null;
  client_bots?: client_bots_bool_exp | null;
  client_daily_standups?: client_daily_standups_bool_exp | null;
  client_jobs?: client_jobs_bool_exp | null;
  client_projects?: client_projects_bool_exp | null;
  client_repositories?: client_repositories_bool_exp | null;
  id?: String_comparison_exp | null;
  legalName?: String_comparison_exp | null;
  logoUrl?: String_comparison_exp | null;
  meetings?: meetings_bool_exp | null;
  name?: String_comparison_exp | null;
  tasks?: tasks_bool_exp | null;
  tickets?: tickets_bool_exp | null;
  userDomains?: String_comparison_exp | null;
  user_time_logs?: user_time_logs_bool_exp | null;
}

/**
 * input type for inserting data into table "clients"
 */
export interface clients_insert_input {
  client_bots?: client_bots_arr_rel_insert_input | null;
  client_daily_standups?: client_daily_standups_arr_rel_insert_input | null;
  client_jobs?: client_jobs_arr_rel_insert_input | null;
  client_repositories?: client_repositories_arr_rel_insert_input | null;
  id?: string | null;
  meetings?: meetings_arr_rel_insert_input | null;
  name?: string | null;
  tasks?: tasks_arr_rel_insert_input | null;
  tickets?: tickets_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "clients"
 */
export interface clients_obj_rel_insert_input {
  data: clients_insert_input;
  on_conflict?: clients_on_conflict | null;
}

/**
 * on conflict condition type for table "clients"
 */
export interface clients_on_conflict {
  constraint: clients_constraint;
  update_columns: clients_update_column[];
  where?: clients_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "developer_bonus_earning". All fields are combined with a logical 'AND'.
 */
export interface developer_bonus_earning_bool_exp {
  _and?: (developer_bonus_earning_bool_exp | null)[] | null;
  _not?: developer_bonus_earning_bool_exp | null;
  _or?: (developer_bonus_earning_bool_exp | null)[] | null;
  amountInUSD?: float8_comparison_exp | null;
  bonusType?: bonus_types_enum_comparison_exp | null;
  bonus_type?: bonus_types_bool_exp | null;
  developer?: developers_bool_exp | null;
  endDate?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  startDate?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
  userInvoiceId?: Int_comparison_exp | null;
  userLogin?: String_comparison_exp | null;
  user_invoice?: user_invoices_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "developer_weekly_earning". All fields are combined with a logical 'AND'.
 */
export interface developer_weekly_earning_bool_exp {
  _and?: (developer_weekly_earning_bool_exp | null)[] | null;
  _not?: developer_weekly_earning_bool_exp | null;
  _or?: (developer_weekly_earning_bool_exp | null)[] | null;
  amountEarnedWithTasks?: float8_comparison_exp | null;
  developer?: developers_bool_exp | null;
  developerId?: String_comparison_exp | null;
  endDate?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  minimumAmountEarned?: float8_comparison_exp | null;
  startDate?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
  userLogin?: String_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "developers". All fields are combined with a logical 'AND'.
 */
export interface developers_bool_exp {
  _and?: (developers_bool_exp | null)[] | null;
  _not?: developers_bool_exp | null;
  _or?: (developers_bool_exp | null)[] | null;
  candidateId?: uuid_comparison_exp | null;
  cohort?: String_comparison_exp | null;
  developer_bonus_earnings?: developer_bonus_earning_bool_exp | null;
  developer_contracts?: user_contracts_bool_exp | null;
  developer_payments?: user_payments_bool_exp | null;
  developer_weekly_earnings?: developer_weekly_earning_bool_exp | null;
  firstName?: String_comparison_exp | null;
  githubId?: String_comparison_exp | null;
  id?: String_comparison_exp | null;
  lastName?: String_comparison_exp | null;
  login?: String_comparison_exp | null;
  passwordHash?: String_comparison_exp | null;
  targetCurrency?: String_comparison_exp | null;
  taskReviewsByDeveloperid?: task_reviews_bool_exp | null;
  taskWorksByDeveloperid?: task_work_bool_exp | null;
  task_reviews?: task_reviews_bool_exp | null;
  task_time_log?: task_time_logs_bool_exp | null;
  task_time_logs?: task_time_logs_bool_exp | null;
  task_works?: task_work_bool_exp | null;
  tasks?: tasks_bool_exp | null;
  tasksByDeveloperid?: tasks_bool_exp | null;
  tasksByManagerid?: tasks_bool_exp | null;
  telephone?: String_comparison_exp | null;
  tickets?: tickets_bool_exp | null;
  transferwiseId?: String_comparison_exp | null;
  user?: users_bool_exp | null;
}

/**
 * expression to compare columns of type float8. All fields are combined with logical 'AND'.
 */
export interface float8_comparison_exp {
  _eq?: hasura_float8 | null;
  _gt?: hasura_float8 | null;
  _gte?: hasura_float8 | null;
  _in?: hasura_float8[] | null;
  _is_null?: boolean | null;
  _lt?: hasura_float8 | null;
  _lte?: hasura_float8 | null;
  _neq?: hasura_float8 | null;
  _nin?: hasura_float8[] | null;
}

/**
 * Boolean expression to filter rows from the table "git_branch_commits". All fields are combined with a logical 'AND'.
 */
export interface git_branch_commits_bool_exp {
  _and?: (git_branch_commits_bool_exp | null)[] | null;
  _not?: git_branch_commits_bool_exp | null;
  _or?: (git_branch_commits_bool_exp | null)[] | null;
  branchId?: Int_comparison_exp | null;
  commitId?: Int_comparison_exp | null;
  git_branch?: git_branches_bool_exp | null;
  git_commit?: git_commits_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "git_branches". All fields are combined with a logical 'AND'.
 */
export interface git_branches_bool_exp {
  _and?: (git_branches_bool_exp | null)[] | null;
  _not?: git_branches_bool_exp | null;
  _or?: (git_branches_bool_exp | null)[] | null;
  createdAt?: timestamptz_comparison_exp | null;
  gitPullRequestsByTargetbranchid?: git_pull_requests_bool_exp | null;
  git_branch_commits?: git_branch_commits_bool_exp | null;
  git_commit?: git_commits_bool_exp | null;
  git_pull_requests?: git_pull_requests_bool_exp | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  repoId?: Int_comparison_exp | null;
  tasks?: tasks_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "git_commits". All fields are combined with a logical 'AND'.
 */
export interface git_commits_bool_exp {
  _and?: (git_commits_bool_exp | null)[] | null;
  _not?: git_commits_bool_exp | null;
  _or?: (git_commits_bool_exp | null)[] | null;
  authorUsername?: String_comparison_exp | null;
  git_branch_commits?: git_branch_commits_bool_exp | null;
  git_branches?: git_branches_bool_exp | null;
  id?: Int_comparison_exp | null;
  status?: String_comparison_exp | null;
  task?: tasks_bool_exp | null;
  taskId?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "git_pull_request_reviewers". All fields are combined with a logical 'AND'.
 */
export interface git_pull_request_reviewers_bool_exp {
  _and?: (git_pull_request_reviewers_bool_exp | null)[] | null;
  _not?: git_pull_request_reviewers_bool_exp | null;
  _or?: (git_pull_request_reviewers_bool_exp | null)[] | null;
  accountUsername?: String_comparison_exp | null;
  git_pull_request?: git_pull_requests_bool_exp | null;
  pullRequestId?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "git_pull_request_state". All fields are combined with a logical 'AND'.
 */
export interface git_pull_request_state_bool_exp {
  _and?: (git_pull_request_state_bool_exp | null)[] | null;
  _not?: git_pull_request_state_bool_exp | null;
  _or?: (git_pull_request_state_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  git_pull_requests?: git_pull_requests_bool_exp | null;
  id?: String_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "git_pull_requests". All fields are combined with a logical 'AND'.
 */
export interface git_pull_requests_bool_exp {
  _and?: (git_pull_requests_bool_exp | null)[] | null;
  _not?: git_pull_requests_bool_exp | null;
  _or?: (git_pull_requests_bool_exp | null)[] | null;
  authorUsername?: String_comparison_exp | null;
  baseBranchId?: Int_comparison_exp | null;
  body?: String_comparison_exp | null;
  gitBranchByTargetbranchid?: git_branches_bool_exp | null;
  git_branch?: git_branches_bool_exp | null;
  git_pull_request_reviewers?: git_pull_request_reviewers_bool_exp | null;
  git_pull_request_state?: git_pull_request_state_bool_exp | null;
  id?: Int_comparison_exp | null;
  isDraft?: Boolean_comparison_exp | null;
  isMerged?: Boolean_comparison_exp | null;
  mergeable?: Boolean_comparison_exp | null;
  mergedAt?: timestamptz_comparison_exp | null;
  state?: String_comparison_exp | null;
  title?: String_comparison_exp | null;
}

/**
 * input type for inserting array relation for remote table "meetings"
 */
export interface meetings_arr_rel_insert_input {
  data: meetings_insert_input[];
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
  client?: clients_obj_rel_insert_input | null;
  createdAt?: hasura_timestamptz | null;
  id?: number | null;
  scheduledAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  zoomMeetingSid?: string | null;
}

/**
 * expression to compare columns of type numeric. All fields are combined with logical 'AND'.
 */
export interface numeric_comparison_exp {
  _eq?: hasura_numeric | null;
  _gt?: hasura_numeric | null;
  _gte?: hasura_numeric | null;
  _in?: hasura_numeric[] | null;
  _is_null?: boolean | null;
  _lt?: hasura_numeric | null;
  _lte?: hasura_numeric | null;
  _neq?: hasura_numeric | null;
  _nin?: hasura_numeric[] | null;
}

/**
 * Boolean expression to filter rows from the table "task_attributes". All fields are combined with a logical 'AND'.
 */
export interface task_attributes_bool_exp {
  _and?: (task_attributes_bool_exp | null)[] | null;
  _not?: task_attributes_bool_exp | null;
  _or?: (task_attributes_bool_exp | null)[] | null;
  id?: Int_comparison_exp | null;
  remainingduplicatelimit?: bigint_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "task_client_blockers". All fields are combined with a logical 'AND'.
 */
export interface task_client_blockers_bool_exp {
  _and?: (task_client_blockers_bool_exp | null)[] | null;
  _not?: task_client_blockers_bool_exp | null;
  _or?: (task_client_blockers_bool_exp | null)[] | null;
  clientBlockersId?: Int_comparison_exp | null;
  client_blocker?: client_blockers_bool_exp | null;
  task?: tasks_bool_exp | null;
  tasksId?: Int_comparison_exp | null;
}

/**
 * input type for inserting array relation for remote table "task_daily_standups"
 */
export interface task_daily_standups_arr_rel_insert_input {
  data: task_daily_standups_insert_input[];
  on_conflict?: task_daily_standups_on_conflict | null;
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
 * input type for inserting data into table "task_daily_standups"
 */
export interface task_daily_standups_insert_input {
  createdAt?: hasura_timestamptz | null;
  id?: number | null;
  submittedAt?: string | null;
  summarizedInTicketDailyStandupId?: number | null;
  summary?: string | null;
  task?: tasks_obj_rel_insert_input | null;
  taskId?: number | null;
  ticket_daily_standup?: ticket_daily_standups_obj_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
  updatedETA?: hasura_timestamptz | null;
  userId?: number | null;
  user_daily_standup?: user_daily_standups_obj_rel_insert_input | null;
}

/**
 * on conflict condition type for table "task_daily_standups"
 */
export interface task_daily_standups_on_conflict {
  constraint: task_daily_standups_constraint;
  update_columns: task_daily_standups_update_column[];
  where?: task_daily_standups_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "task_followers". All fields are combined with a logical 'AND'.
 */
export interface task_followers_bool_exp {
  _and?: (task_followers_bool_exp | null)[] | null;
  _not?: task_followers_bool_exp | null;
  _or?: (task_followers_bool_exp | null)[] | null;
  task?: tasks_bool_exp | null;
  taskByTasksid2?: tasks_bool_exp | null;
  tasksId_1?: Int_comparison_exp | null;
  tasksId_2?: Int_comparison_exp | null;
}

/**
 * input type for inserting array relation for remote table "task_reviews"
 */
export interface task_reviews_arr_rel_insert_input {
  data: task_reviews_insert_input[];
  on_conflict?: task_reviews_on_conflict | null;
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
  managerInvoiceId?: Int_comparison_exp | null;
  reviewerInvoiceId?: Int_comparison_exp | null;
  startedAt?: timestamptz_comparison_exp | null;
  status?: task_reviews_status_enum_comparison_exp | null;
  task?: tasks_bool_exp | null;
  task_reviews_status?: task_reviews_status_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  userInvoiceByReviewerinvoiceid?: user_invoices_bool_exp | null;
  user_invoice?: user_invoices_bool_exp | null;
}

/**
 * input type for inserting data into table "task_reviews"
 */
export interface task_reviews_insert_input {
  approvesTaskId?: number | null;
  completedAt?: hasura_timestamptz | null;
  costInUSD?: number | null;
  createdAt?: hasura_timestamptz | null;
  developerId?: string | null;
  id?: number | null;
  managerId?: string | null;
  startedAt?: hasura_timestamptz | null;
  status?: task_reviews_status_enum | null;
  task?: tasks_obj_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
}

/**
 * on conflict condition type for table "task_reviews"
 */
export interface task_reviews_on_conflict {
  constraint: task_reviews_constraint;
  update_columns: task_reviews_update_column[];
  where?: task_reviews_bool_exp | null;
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
 * input type for inserting array relation for remote table "task_submission"
 */
export interface task_submission_arr_rel_insert_input {
  data: task_submission_insert_input[];
}

/**
 * input type for inserting data into table "task_submission"
 */
export interface task_submission_insert_input {
  createdAt?: hasura_timestamptz | null;
  gcpObjectId?: string | null;
  id?: number | null;
  task?: tasks_obj_rel_insert_input | null;
  taskId?: number | null;
  updatedAt?: hasura_timestamptz | null;
}

/**
 * input type for inserting array relation for remote table "task_technologies"
 */
export interface task_technologies_arr_rel_insert_input {
  data: task_technologies_insert_input[];
  on_conflict?: task_technologies_on_conflict | null;
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
 * input type for inserting data into table "task_technologies"
 */
export interface task_technologies_insert_input {
  task?: tasks_obj_rel_insert_input | null;
  tasksId?: number | null;
  technologiesId?: number | null;
}

/**
 * on conflict condition type for table "task_technologies"
 */
export interface task_technologies_on_conflict {
  constraint: task_technologies_constraint;
  update_columns: task_technologies_update_column[];
  where?: task_technologies_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "task_time_logs"
 */
export interface task_time_logs_arr_rel_insert_input {
  data: task_time_logs_insert_input[];
}

/**
 * Boolean expression to filter rows from the table "task_time_logs". All fields are combined with a logical 'AND'.
 */
export interface task_time_logs_bool_exp {
  CreatedDateColumn?: timestamptz_comparison_exp | null;
  UpdateDateColumn?: timestamptz_comparison_exp | null;
  _and?: (task_time_logs_bool_exp | null)[] | null;
  _not?: task_time_logs_bool_exp | null;
  _or?: (task_time_logs_bool_exp | null)[] | null;
  developer?: developers_bool_exp | null;
  developerId?: String_comparison_exp | null;
  finishedAt?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  startedAt?: timestamptz_comparison_exp | null;
  task?: tasks_bool_exp | null;
  taskId?: Int_comparison_exp | null;
  timeSpent?: Int_comparison_exp | null;
  timedoctorTaskId?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "task_time_logs"
 */
export interface task_time_logs_insert_input {
  CreatedDateColumn?: hasura_timestamptz | null;
  UpdateDateColumn?: hasura_timestamptz | null;
  developerId?: string | null;
  finishedAt?: hasura_timestamptz | null;
  id?: number | null;
  startedAt?: hasura_timestamptz | null;
  task?: tasks_obj_rel_insert_input | null;
  taskId?: number | null;
  timeSpent?: number | null;
  timedoctorTaskId?: string | null;
}

/**
 * input type for inserting object relation for remote table "task_time_logs"
 */
export interface task_time_logs_obj_rel_insert_input {
  data: task_time_logs_insert_input;
}

/**
 * Boolean expression to filter rows from the table "task_work". All fields are combined with a logical 'AND'.
 */
export interface task_work_bool_exp {
  _and?: (task_work_bool_exp | null)[] | null;
  _not?: task_work_bool_exp | null;
  _or?: (task_work_bool_exp | null)[] | null;
  costInUSD?: Int_comparison_exp | null;
  developer?: developers_bool_exp | null;
  developerByManagerid?: developers_bool_exp | null;
  developerId?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  managerId?: String_comparison_exp | null;
  managerInvoiceId?: Int_comparison_exp | null;
  task_work_status?: task_work_status_bool_exp | null;
  userInvoiceByManagerinvoiceid?: user_invoices_bool_exp | null;
  user_invoice?: user_invoices_bool_exp | null;
  user_time_logs?: user_time_logs_bool_exp | null;
  workerInvoiceId?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "task_work_status". All fields are combined with a logical 'AND'.
 */
export interface task_work_status_bool_exp {
  _and?: (task_work_status_bool_exp | null)[] | null;
  _not?: task_work_status_bool_exp | null;
  _or?: (task_work_status_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  task_works?: task_work_bool_exp | null;
  type?: String_comparison_exp | null;
}

/**
 * input type for inserting array relation for remote table "tasks"
 */
export interface tasks_arr_rel_insert_input {
  data: tasks_insert_input[];
  on_conflict?: tasks_on_conflict | null;
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
  client_repositories_commits?: client_repositories_commits_bool_exp | null;
  client_repository?: client_repositories_bool_exp | null;
  completedAt?: timestamptz_comparison_exp | null;
  costInUSD?: Int_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  description?: String_comparison_exp | null;
  developerByDeveloperid?: developers_bool_exp | null;
  developerByManagerid?: developers_bool_exp | null;
  developerByReviewerid?: developers_bool_exp | null;
  developerId?: String_comparison_exp | null;
  developerInvoiceId?: Int_comparison_exp | null;
  duplicateOfTask?: tasks_bool_exp | null;
  duplicateOfTaskId?: Int_comparison_exp | null;
  git_branch?: git_branches_bool_exp | null;
  git_commits?: git_commits_bool_exp | null;
  id?: Int_comparison_exp | null;
  isBillable?: Boolean_comparison_exp | null;
  managerId?: String_comparison_exp | null;
  managerInvoiceId?: Int_comparison_exp | null;
  maxDuplicateLimit?: Int_comparison_exp | null;
  parentTaskId?: tasks_bool_exp | null;
  prLink?: String_comparison_exp | null;
  reviewerId?: String_comparison_exp | null;
  specLink?: String_comparison_exp | null;
  startedAt?: timestamptz_comparison_exp | null;
  status?: tasks_status_enum_comparison_exp | null;
  taskFollowersByTasksid2?: task_followers_bool_exp | null;
  task_attributes?: task_attributes_bool_exp | null;
  task_client_blockers?: task_client_blockers_bool_exp | null;
  task_daily_standups?: task_daily_standups_bool_exp | null;
  task_followers?: task_followers_bool_exp | null;
  task_reviews?: task_reviews_bool_exp | null;
  task_status?: tasks_status_bool_exp | null;
  task_technologies?: task_technologies_bool_exp | null;
  task_time_log?: task_time_logs_bool_exp | null;
  task_time_logs?: task_time_logs_bool_exp | null;
  task_type?: tasks_type_bool_exp | null;
  tasks_status?: tasks_status_bool_exp | null;
  tasks_type?: tasks_type_bool_exp | null;
  ticket?: tickets_bool_exp | null;
  ticketCode?: String_comparison_exp | null;
  title?: String_comparison_exp | null;
  type?: tasks_type_enum_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  userInvoiceByDeveloperinvoiceid?: user_invoices_bool_exp | null;
  user_invoice?: user_invoices_bool_exp | null;
  user_time_logs?: user_time_logs_bool_exp | null;
}

/**
 * input type for inserting data into table "tasks"
 */
export interface tasks_insert_input {
  branchName?: string | null;
  client?: clients_obj_rel_insert_input | null;
  clientCommitDate?: hasura_timestamptz | null;
  clientCommitMessage?: string | null;
  clientId?: string | null;
  clientRepositoryId?: hasura_uuid | null;
  client_repositories_commits?: client_repositories_commits_arr_rel_insert_input | null;
  client_repository?: client_repositories_obj_rel_insert_input | null;
  completedAt?: hasura_timestamptz | null;
  costInUSD?: number | null;
  createdAt?: hasura_timestamptz | null;
  description?: string | null;
  developerId?: string | null;
  duplicateOfTask?: tasks_obj_rel_insert_input | null;
  duplicateOfTaskId?: number | null;
  id?: number | null;
  isBillable?: boolean | null;
  managerId?: string | null;
  parentTaskId?: tasks_arr_rel_insert_input | null;
  prLink?: string | null;
  reviewerId?: string | null;
  specLink?: string | null;
  startedAt?: hasura_timestamptz | null;
  status?: tasks_status_enum | null;
  task_daily_standups?: task_daily_standups_arr_rel_insert_input | null;
  task_reviews?: task_reviews_arr_rel_insert_input | null;
  task_submissions?: task_submission_arr_rel_insert_input | null;
  task_technologies?: task_technologies_arr_rel_insert_input | null;
  task_time_log?: task_time_logs_obj_rel_insert_input | null;
  task_time_logs?: task_time_logs_arr_rel_insert_input | null;
  ticket?: tickets_obj_rel_insert_input | null;
  ticketCode?: string | null;
  title?: string | null;
  type?: tasks_type_enum | null;
  updatedAt?: hasura_timestamptz | null;
}

/**
 * input type for inserting object relation for remote table "tasks"
 */
export interface tasks_obj_rel_insert_input {
  data: tasks_insert_input;
  on_conflict?: tasks_on_conflict | null;
}

/**
 * on conflict condition type for table "tasks"
 */
export interface tasks_on_conflict {
  constraint: tasks_constraint;
  update_columns: tasks_update_column[];
  where?: tasks_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "tasks_status". All fields are combined with a logical 'AND'.
 */
export interface tasks_status_bool_exp {
  _and?: (tasks_status_bool_exp | null)[] | null;
  _not?: tasks_status_bool_exp | null;
  _or?: (tasks_status_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  tasks?: tasks_bool_exp | null;
  type?: String_comparison_exp | null;
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
  description?: String_comparison_exp | null;
  tasks?: tasks_bool_exp | null;
  type?: String_comparison_exp | null;
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
  clientBlockersId?: Int_comparison_exp | null;
  client_blocker?: client_blockers_bool_exp | null;
  ticket?: tickets_bool_exp | null;
  ticketsId?: Int_comparison_exp | null;
}

/**
 * input type for inserting array relation for remote table "ticket_daily_standups"
 */
export interface ticket_daily_standups_arr_rel_insert_input {
  data: ticket_daily_standups_insert_input[];
  on_conflict?: ticket_daily_standups_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "ticket_daily_standups". All fields are combined with a logical 'AND'.
 */
export interface ticket_daily_standups_bool_exp {
  _and?: (ticket_daily_standups_bool_exp | null)[] | null;
  _not?: ticket_daily_standups_bool_exp | null;
  _or?: (ticket_daily_standups_bool_exp | null)[] | null;
  client_daily_standup?: client_daily_standups_bool_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  message?: String_comparison_exp | null;
  submittedAt?: String_comparison_exp | null;
  summarizedInClientDailyStandupId?: Int_comparison_exp | null;
  summarizedInUserDailyStandupId?: Int_comparison_exp | null;
  task_daily_standups?: task_daily_standups_bool_exp | null;
  ticket?: tickets_bool_exp | null;
  ticketId?: Int_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedETA?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
  userId?: Int_comparison_exp | null;
  user_daily_standup?: user_daily_standups_bool_exp | null;
}

/**
 * input type for inserting data into table "ticket_daily_standups"
 */
export interface ticket_daily_standups_insert_input {
  client_daily_standup?: client_daily_standups_obj_rel_insert_input | null;
  createdAt?: hasura_timestamptz | null;
  id?: number | null;
  message?: string | null;
  submittedAt?: string | null;
  summarizedInClientDailyStandupId?: number | null;
  summarizedInUserDailyStandupId?: number | null;
  task_daily_standups?: task_daily_standups_arr_rel_insert_input | null;
  ticket?: tickets_obj_rel_insert_input | null;
  ticketId?: number | null;
  updatedAt?: hasura_timestamptz | null;
  updatedETA?: hasura_timestamptz | null;
  userId?: number | null;
  user_daily_standup?: user_daily_standups_obj_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "ticket_daily_standups"
 */
export interface ticket_daily_standups_obj_rel_insert_input {
  data: ticket_daily_standups_insert_input;
  on_conflict?: ticket_daily_standups_on_conflict | null;
}

/**
 * on conflict condition type for table "ticket_daily_standups"
 */
export interface ticket_daily_standups_on_conflict {
  constraint: ticket_daily_standups_constraint;
  update_columns: ticket_daily_standups_update_column[];
  where?: ticket_daily_standups_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "tickets"
 */
export interface tickets_arr_rel_insert_input {
  data: tickets_insert_input[];
  on_conflict?: tickets_on_conflict | null;
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
  user_time_logs?: user_time_logs_bool_exp | null;
}

/**
 * input type for inserting data into table "tickets"
 */
export interface tickets_insert_input {
  client?: clients_obj_rel_insert_input | null;
  clientId?: string | null;
  code?: string | null;
  completedAt?: hasura_timestamptz | null;
  costInCredits?: number | null;
  createdAt?: hasura_timestamptz | null;
  description?: string | null;
  discount?: number | null;
  id?: number | null;
  isFixed?: boolean | null;
  isInternal?: boolean | null;
  managerId?: string | null;
  startedAt?: hasura_timestamptz | null;
  tasks?: tasks_arr_rel_insert_input | null;
  ticketLink?: string | null;
  ticket_daily_standups?: ticket_daily_standups_arr_rel_insert_input | null;
  title?: string | null;
  updatedAt?: hasura_timestamptz | null;
}

/**
 * input type for inserting object relation for remote table "tickets"
 */
export interface tickets_obj_rel_insert_input {
  data: tickets_insert_input;
  on_conflict?: tickets_on_conflict | null;
}

/**
 * on conflict condition type for table "tickets"
 */
export interface tickets_on_conflict {
  constraint: tickets_constraint;
  update_columns: tickets_update_column[];
  where?: tickets_bool_exp | null;
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
 * Boolean expression to filter rows from the table "user_contracts". All fields are combined with a logical 'AND'.
 */
export interface user_contracts_bool_exp {
  _and?: (user_contracts_bool_exp | null)[] | null;
  _not?: user_contracts_bool_exp | null;
  _or?: (user_contracts_bool_exp | null)[] | null;
  developer?: developers_bool_exp | null;
  endDate?: timestamptz_comparison_exp | null;
  hoursPerWeek?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  startDate?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
  userLogin?: String_comparison_exp | null;
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
 * input type for inserting data into table "user_daily_standups"
 */
export interface user_daily_standups_insert_input {
  client_daily_standups?: client_daily_standups_arr_rel_insert_input | null;
  createdAt?: hasura_timestamptz | null;
  id?: number | null;
  submittedAt?: string | null;
  summary?: string | null;
  task_daily_standups?: task_daily_standups_arr_rel_insert_input | null;
  ticket_daily_standups?: ticket_daily_standups_arr_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
  userId?: number | null;
}

/**
 * input type for inserting object relation for remote table "user_daily_standups"
 */
export interface user_daily_standups_obj_rel_insert_input {
  data: user_daily_standups_insert_input;
  on_conflict?: user_daily_standups_on_conflict | null;
}

/**
 * on conflict condition type for table "user_daily_standups"
 */
export interface user_daily_standups_on_conflict {
  constraint: user_daily_standups_constraint;
  update_columns: user_daily_standups_update_column[];
  where?: user_daily_standups_bool_exp | null;
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
 * Boolean expression to filter rows from the table "user_invoice_balances". All fields are combined with a logical 'AND'.
 */
export interface user_invoice_balances_bool_exp {
  _and?: (user_invoice_balances_bool_exp | null)[] | null;
  _not?: user_invoice_balances_bool_exp | null;
  _or?: (user_invoice_balances_bool_exp | null)[] | null;
  adjustedCostInUSD?: Int_comparison_exp | null;
  costInUSD?: Int_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  current_paid_balance_in_usd?: float8_comparison_exp | null;
  developer_bonus_earnings?: developer_bonus_earning_bool_exp | null;
  dueAt?: timestamptz_comparison_exp | null;
  endAt?: timestamptz_comparison_exp | null;
  hours_logged_in_invoice?: bigint_comparison_exp | null;
  id?: Int_comparison_exp | null;
  invoiceCode?: String_comparison_exp | null;
  paidByAgencyInvoiceId?: Int_comparison_exp | null;
  previous_invoiced_balance_in_usd?: bigint_comparison_exp | null;
  startAt?: timestamptz_comparison_exp | null;
  status?: String_comparison_exp | null;
  task_reviews_as_manager?: task_reviews_bool_exp | null;
  task_reviews_as_reviewer?: task_reviews_bool_exp | null;
  task_works_as_manager?: task_work_bool_exp | null;
  task_works_as_worker?: task_work_bool_exp | null;
  tasks_as_developer?: tasks_bool_exp | null;
  tasks_as_manager?: tasks_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
  userId?: Int_comparison_exp | null;
  user_invoice?: user_invoices_bool_exp | null;
  user_invoice_status?: user_invoice_status_bool_exp | null;
  user_time_earnings?: user_time_earnings_bool_exp | null;
  user_time_logs?: user_time_logs_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "user_invoice_status". All fields are combined with a logical 'AND'.
 */
export interface user_invoice_status_bool_exp {
  _and?: (user_invoice_status_bool_exp | null)[] | null;
  _not?: user_invoice_status_bool_exp | null;
  _or?: (user_invoice_status_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  id?: String_comparison_exp | null;
  user_invoices?: user_invoices_bool_exp | null;
}

/**
 * expression to compare columns of type user_invoice_status_enum. All fields are combined with logical 'AND'.
 */
export interface user_invoice_status_enum_comparison_exp {
  _eq?: user_invoice_status_enum | null;
  _in?: user_invoice_status_enum[] | null;
  _is_null?: boolean | null;
  _neq?: user_invoice_status_enum | null;
  _nin?: user_invoice_status_enum[] | null;
}

/**
 * Boolean expression to filter rows from the table "user_invoices". All fields are combined with a logical 'AND'.
 */
export interface user_invoices_bool_exp {
  _and?: (user_invoices_bool_exp | null)[] | null;
  _not?: user_invoices_bool_exp | null;
  _or?: (user_invoices_bool_exp | null)[] | null;
  adjustedCostInUSD?: Int_comparison_exp | null;
  costInUSD?: Int_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  developer_bonus_earnings?: developer_bonus_earning_bool_exp | null;
  dueAt?: timestamptz_comparison_exp | null;
  endAt?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  invoiceCode?: String_comparison_exp | null;
  paidByAgencyInvoiceId?: Int_comparison_exp | null;
  startAt?: timestamptz_comparison_exp | null;
  status?: user_invoice_status_enum_comparison_exp | null;
  taskReviewsByManagerinvoiceid?: task_reviews_bool_exp | null;
  taskWorksByManagerinvoiceid?: task_work_bool_exp | null;
  task_reviews?: task_reviews_bool_exp | null;
  task_works?: task_work_bool_exp | null;
  tasks?: tasks_bool_exp | null;
  tasksByManagerinvoiceid?: tasks_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
  userId?: Int_comparison_exp | null;
  user_invoice_balance?: user_invoice_balances_bool_exp | null;
  user_invoice_status?: user_invoice_status_bool_exp | null;
  user_time_earnings?: user_time_earnings_bool_exp | null;
  user_time_logs?: user_time_logs_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "user_payment_status". All fields are combined with a logical 'AND'.
 */
export interface user_payment_status_bool_exp {
  _and?: (user_payment_status_bool_exp | null)[] | null;
  _not?: user_payment_status_bool_exp | null;
  _or?: (user_payment_status_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  id?: String_comparison_exp | null;
  user_payments?: user_payments_bool_exp | null;
}

/**
 * expression to compare columns of type user_payment_status_enum. All fields are combined with logical 'AND'.
 */
export interface user_payment_status_enum_comparison_exp {
  _eq?: user_payment_status_enum | null;
  _in?: user_payment_status_enum[] | null;
  _is_null?: boolean | null;
  _neq?: user_payment_status_enum | null;
  _nin?: user_payment_status_enum[] | null;
}

/**
 * Boolean expression to filter rows from the table "user_payment_types". All fields are combined with a logical 'AND'.
 */
export interface user_payment_types_bool_exp {
  _and?: (user_payment_types_bool_exp | null)[] | null;
  _not?: user_payment_types_bool_exp | null;
  _or?: (user_payment_types_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  id?: String_comparison_exp | null;
  user_payments?: user_payments_bool_exp | null;
}

/**
 * expression to compare columns of type user_payment_types_enum. All fields are combined with logical 'AND'.
 */
export interface user_payment_types_enum_comparison_exp {
  _eq?: user_payment_types_enum | null;
  _in?: user_payment_types_enum[] | null;
  _is_null?: boolean | null;
  _neq?: user_payment_types_enum | null;
  _nin?: user_payment_types_enum[] | null;
}

/**
 * Boolean expression to filter rows from the table "user_payments". All fields are combined with a logical 'AND'.
 */
export interface user_payments_bool_exp {
  _and?: (user_payments_bool_exp | null)[] | null;
  _not?: user_payments_bool_exp | null;
  _or?: (user_payments_bool_exp | null)[] | null;
  amountInUSD?: float8_comparison_exp | null;
  channelTransactionId?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  developer?: developers_bool_exp | null;
  finishedAt?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  paymentType?: user_payment_types_enum_comparison_exp | null;
  status?: user_payment_status_enum_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
  userLogin?: String_comparison_exp | null;
  user_payment_status?: user_payment_status_bool_exp | null;
  user_payment_type?: user_payment_types_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "user_time_earnings". All fields are combined with a logical 'AND'.
 */
export interface user_time_earnings_bool_exp {
  _and?: (user_time_earnings_bool_exp | null)[] | null;
  _not?: user_time_earnings_bool_exp | null;
  _or?: (user_time_earnings_bool_exp | null)[] | null;
  earningsinusd?: numeric_comparison_exp | null;
  taskId?: Int_comparison_exp | null;
  taskWorkId?: Int_comparison_exp | null;
  user?: users_bool_exp | null;
  user_invoice?: user_invoices_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "user_time_logs". All fields are combined with a logical 'AND'.
 */
export interface user_time_logs_bool_exp {
  _and?: (user_time_logs_bool_exp | null)[] | null;
  _not?: user_time_logs_bool_exp | null;
  _or?: (user_time_logs_bool_exp | null)[] | null;
  client?: clients_bool_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  finishedAt?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  startedAt?: timestamptz_comparison_exp | null;
  task?: tasks_bool_exp | null;
  taskId?: Int_comparison_exp | null;
  taskWorkId?: Int_comparison_exp | null;
  task_work?: task_work_bool_exp | null;
  ticket?: tickets_bool_exp | null;
  timeDoctorTaskLogSid?: String_comparison_exp | null;
  timeSpentInHours?: Int_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
  userInvoiceId?: Int_comparison_exp | null;
  userLogin?: String_comparison_exp | null;
  user_invoice?: user_invoices_bool_exp | null;
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
  auth0Sid?: String_comparison_exp | null;
  avatarUrl?: String_comparison_exp | null;
  client_daily_standups?: client_daily_standups_bool_exp | null;
  defaultEmail?: String_comparison_exp | null;
  developer?: developers_bool_exp | null;
  developer_bonus_earnings?: developer_bonus_earning_bool_exp | null;
  developer_weekly_earnings?: developer_weekly_earning_bool_exp | null;
  firstName?: String_comparison_exp | null;
  githubLogin?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  lastName?: String_comparison_exp | null;
  login?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
  nickname?: String_comparison_exp | null;
  passwordHash?: String_comparison_exp | null;
  ripplingEmployeeId?: Int_comparison_exp | null;
  task_daily_standups?: task_daily_standups_bool_exp | null;
  telephone?: String_comparison_exp | null;
  ticket_daily_standups?: ticket_daily_standups_bool_exp | null;
  timeDoctorUserId?: Int_comparison_exp | null;
  unverifiedEmail?: String_comparison_exp | null;
  userEmailByUnverifiedemail?: user_emails_bool_exp | null;
  user_contracts?: user_contracts_bool_exp | null;
  user_daily_standups?: user_daily_standups_bool_exp | null;
  user_email?: user_emails_bool_exp | null;
  user_emails?: user_emails_bool_exp | null;
  user_invoice_balances?: user_invoice_balances_bool_exp | null;
  user_invoices?: user_invoices_bool_exp | null;
  user_payments?: user_payments_bool_exp | null;
  user_time_earnings?: user_time_earnings_bool_exp | null;
  user_time_logs?: user_time_logs_bool_exp | null;
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
