/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum candidate_stage_enum {
  failed_culture_screen = 'failed_culture_screen',
  failed_hack_week = 'failed_hack_week',
  hired_full_time = 'hired_full_time',
  hired_part_time = 'hired_part_time',
  invited_for_culture_screen = 'invited_for_culture_screen',
  invited_for_hack_week = 'invited_for_hack_week',
  invited_for_tech_screen = 'invited_for_tech_screen',
  missed_culture_screen = 'missed_culture_screen',
  missed_tech_screen = 'missed_tech_screen',
  needs_culture_screen = 'needs_culture_screen',
  needs_tech_screen = 'needs_tech_screen',
  on_hold = 'on_hold',
  passed_tech_screen = 'passed_tech_screen',
  qualified = 'qualified',
  rejected_culture = 'rejected_culture',
  rejected_tech = 'rejected_tech',
  undergoing_hack_week = 'undergoing_hack_week',
  unqualified = 'unqualified',
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

/**
 * unique or primary key constraints on table "meetings"
 */
export enum meetings_constraint {
  PK_aa73be861afa77eb4ed31f3ed57 = 'PK_aa73be861afa77eb4ed31f3ed57',
  UQ_MEETING_TIME = 'UQ_MEETING_TIME',
  UQ_c801cca6def3dc9f638928affee = 'UQ_c801cca6def3dc9f638928affee',
}

/**
 * update columns of table "meetings"
 */
export enum meetings_update_column {
  associatedClientId = 'associatedClientId',
  calendlyMeetingId = 'calendlyMeetingId',
  createdAt = 'createdAt',
  id = 'id',
  scheduledAt = 'scheduledAt',
  updatedAt = 'updatedAt',
  zoomMeetingSid = 'zoomMeetingSid',
}

export enum skilltrack_types_enum {
  client_manager = 'client_manager',
  hacker = 'hacker',
  tech_lead = 'tech_lead',
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
 * unique or primary key constraints on table "user_emails"
 */
export enum user_emails_constraint {
  PK_6594597afde633cfeab9a806e4f = 'PK_6594597afde633cfeab9a806e4f',
}

/**
 * update columns of table "user_emails"
 */
export enum user_emails_update_column {
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
 * unique or primary key constraints on table "users"
 */
export enum users_constraint {
  PK_a3ffb1c0c8416b9fc6f907b7433 = 'PK_a3ffb1c0c8416b9fc6f907b7433',
  UQ_2d443082eccd5198f95f2a36e2c = 'UQ_2d443082eccd5198f95f2a36e2c',
  UQ_3afb62555b874925fb7352eca43 = 'UQ_3afb62555b874925fb7352eca43',
  UQ_53a495e5b24279804db49702cc1 = 'UQ_53a495e5b24279804db49702cc1',
  UQ_72ebec487e31768a92d60b598b3 = 'UQ_72ebec487e31768a92d60b598b3',
  UQ_9e487924df94a4241b487b2b52e = 'UQ_9e487924df94a4241b487b2b52e',
  UQ_aacbcbfc16077f6b485951adfb4 = 'UQ_aacbcbfc16077f6b485951adfb4',
  UQ_f53d1c88763af9aa36c01b2a801 = 'UQ_f53d1c88763af9aa36c01b2a801',
  UQ_f717133734624b4e55db8fbcdd1 = 'UQ_f717133734624b4e55db8fbcdd1',
}

/**
 * update columns of table "users"
 */
export enum users_update_column {
  login = 'login',
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
 * Boolean expression to filter rows from the table "agencies". All fields are combined with a logical 'AND'.
 */
export interface agencies_bool_exp {
  _and?: (agencies_bool_exp | null)[] | null;
  _not?: agencies_bool_exp | null;
  _or?: (agencies_bool_exp | null)[] | null;
  agency_users?: agency_users_bool_exp | null;
  candidates?: candidates_bool_exp | null;
  clients?: clients_bool_exp | null;
  id?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "agencies"
 */
export interface agencies_insert_input {
  agency_users?: agency_users_arr_rel_insert_input | null;
  candidates?: candidates_arr_rel_insert_input | null;
  clients?: clients_arr_rel_insert_input | null;
  createdAt?: hasura_timestamptz | null;
  id?: string | null;
  legalName?: string | null;
  name?: string | null;
  updatedAt?: hasura_timestamptz | null;
  userDomains?: string | null;
}

/**
 * input type for inserting object relation for remote table "agencies"
 */
export interface agencies_obj_rel_insert_input {
  data: agencies_insert_input;
}

/**
 * input type for inserting array relation for remote table "agency_users"
 */
export interface agency_users_arr_rel_insert_input {
  data: agency_users_insert_input[];
}

/**
 * Boolean expression to filter rows from the table "agency_users". All fields are combined with a logical 'AND'.
 */
export interface agency_users_bool_exp {
  _and?: (agency_users_bool_exp | null)[] | null;
  _not?: agency_users_bool_exp | null;
  _or?: (agency_users_bool_exp | null)[] | null;
  agency?: agencies_bool_exp | null;
  agencyId?: String_comparison_exp | null;
  id?: String_comparison_exp | null;
  user?: users_bool_exp | null;
  userId?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "agency_users"
 */
export interface agency_users_insert_input {
  agency?: agencies_obj_rel_insert_input | null;
  agencyId?: string | null;
  id?: string | null;
  user?: users_obj_rel_insert_input | null;
  userId?: number | null;
}

/**
 * input type for inserting object relation for remote table "agency_users"
 */
export interface agency_users_obj_rel_insert_input {
  data: agency_users_insert_input;
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
 * expression to compare columns of type candidate_stage_enum. All fields are combined with logical 'AND'.
 */
export interface candidate_stage_enum_comparison_exp {
  _eq?: candidate_stage_enum | null;
  _in?: candidate_stage_enum[] | null;
  _is_null?: boolean | null;
  _neq?: candidate_stage_enum | null;
  _nin?: candidate_stage_enum[] | null;
}

/**
 * input type for inserting array relation for remote table "candidates"
 */
export interface candidates_arr_rel_insert_input {
  data: candidates_insert_input[];
}

/**
 * Boolean expression to filter rows from the table "candidates". All fields are combined with a logical 'AND'.
 */
export interface candidates_bool_exp {
  _and?: (candidates_bool_exp | null)[] | null;
  _not?: candidates_bool_exp | null;
  _or?: (candidates_bool_exp | null)[] | null;
  agency?: agencies_bool_exp | null;
  agencyId?: String_comparison_exp | null;
  city?: String_comparison_exp | null;
  country?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  cv?: String_comparison_exp | null;
  developer?: developers_bool_exp | null;
  earliestStartDate?: timestamptz_comparison_exp | null;
  githubId?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  minAnnualSalary?: Int_comparison_exp | null;
  noticePeriod?: Int_comparison_exp | null;
  skillTrack?: skilltrack_types_enum_comparison_exp | null;
  source?: String_comparison_exp | null;
  stage?: candidate_stage_enum_comparison_exp | null;
  timezone?: Int_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
  userId?: Int_comparison_exp | null;
  yearsOfExperience?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "candidates"
 */
export interface candidates_insert_input {
  agency?: agencies_obj_rel_insert_input | null;
  agencyId?: string | null;
  city?: string | null;
  country?: string | null;
  createdAt?: hasura_timestamptz | null;
  cv?: string | null;
  developer?: developers_obj_rel_insert_input | null;
  earliestStartDate?: hasura_timestamptz | null;
  githubId?: string | null;
  id?: hasura_uuid | null;
  minAnnualSalary?: number | null;
  noticePeriod?: number | null;
  skillTrack?: skilltrack_types_enum | null;
  source?: string | null;
  timezone?: number | null;
  updatedAt?: hasura_timestamptz | null;
  user?: users_obj_rel_insert_input | null;
  userId?: number | null;
  yearsOfExperience?: number | null;
}

/**
 * input type for inserting object relation for remote table "candidates"
 */
export interface candidates_obj_rel_insert_input {
  data: candidates_insert_input;
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
 * input type for inserting array relation for remote table "client_users"
 */
export interface client_users_arr_rel_insert_input {
  data: client_users_insert_input[];
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
 * input type for inserting data into table "client_users"
 */
export interface client_users_insert_input {
  client?: clients_obj_rel_insert_input | null;
  clientId?: string | null;
  id?: hasura_uuid | null;
  user?: users_obj_rel_insert_input | null;
  userId?: number | null;
}

/**
 * input type for inserting object relation for remote table "client_users"
 */
export interface client_users_obj_rel_insert_input {
  data: client_users_insert_input;
}

/**
 * input type for inserting array relation for remote table "clients"
 */
export interface clients_arr_rel_insert_input {
  data: clients_insert_input[];
}

/**
 * Boolean expression to filter rows from the table "clients". All fields are combined with a logical 'AND'.
 */
export interface clients_bool_exp {
  _and?: (clients_bool_exp | null)[] | null;
  _not?: clients_bool_exp | null;
  _or?: (clients_bool_exp | null)[] | null;
  agency?: agencies_bool_exp | null;
  agencyId?: String_comparison_exp | null;
  client_jobs?: client_jobs_bool_exp | null;
  client_transactions?: client_transactions_bool_exp | null;
  client_users?: client_users_bool_exp | null;
  id?: String_comparison_exp | null;
  legalName?: String_comparison_exp | null;
  logoUrl?: String_comparison_exp | null;
  meetings?: meetings_bool_exp | null;
  name?: String_comparison_exp | null;
  onBoardedAt?: timestamptz_comparison_exp | null;
  tasks?: tasks_bool_exp | null;
  userDomains?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "clients"
 */
export interface clients_insert_input {
  addressAddress?: hasura_jsonb | null;
  agency?: agencies_obj_rel_insert_input | null;
  agencyId?: string | null;
  client_users?: client_users_arr_rel_insert_input | null;
  creditBatchSize?: number | null;
  id?: string | null;
  legalName?: string | null;
  logoUrl?: string | null;
  meetings?: meetings_arr_rel_insert_input | null;
  name?: string | null;
  userDomains?: string | null;
}

/**
 * input type for inserting object relation for remote table "clients"
 */
export interface clients_obj_rel_insert_input {
  data: clients_insert_input;
}

/**
 * Boolean expression to filter rows from the table "developers". All fields are combined with a logical 'AND'.
 */
export interface developers_bool_exp {
  _and?: (developers_bool_exp | null)[] | null;
  _not?: developers_bool_exp | null;
  _or?: (developers_bool_exp | null)[] | null;
  candidate?: candidates_bool_exp | null;
  candidateId?: uuid_comparison_exp | null;
  cohort?: String_comparison_exp | null;
  developer_contracts?: user_contracts_bool_exp | null;
  developer_payments?: user_payments_bool_exp | null;
  firstName?: String_comparison_exp | null;
  githubId?: String_comparison_exp | null;
  id?: String_comparison_exp | null;
  lastName?: String_comparison_exp | null;
  login?: String_comparison_exp | null;
  passwordHash?: String_comparison_exp | null;
  targetCurrency?: String_comparison_exp | null;
  taskReviewsByDeveloperid?: task_reviews_bool_exp | null;
  task_reviews?: task_reviews_bool_exp | null;
  tasks?: tasks_bool_exp | null;
  tasksByDeveloperid?: tasks_bool_exp | null;
  tasksByManagerid?: tasks_bool_exp | null;
  telephone?: String_comparison_exp | null;
  transferwiseId?: String_comparison_exp | null;
  user?: users_bool_exp | null;
}

/**
 * input type for inserting data into table "developers"
 */
export interface developers_insert_input {
  candidate?: candidates_obj_rel_insert_input | null;
  candidateId?: hasura_uuid | null;
  developer_contracts?: user_contracts_arr_rel_insert_input | null;
  developer_payments?: user_payments_arr_rel_insert_input | null;
  firstName?: string | null;
  githubId?: string | null;
  id?: string | null;
  lastName?: string | null;
  login?: string | null;
  passwordHash?: string | null;
  targetCurrency?: string | null;
  telephone?: string | null;
  transferwiseId?: string | null;
  user?: users_obj_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "developers"
 */
export interface developers_obj_rel_insert_input {
  data: developers_insert_input;
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
 * input type for inserting array relation for remote table "meetings"
 */
export interface meetings_arr_rel_insert_input {
  data: meetings_insert_input[];
  on_conflict?: meetings_on_conflict | null;
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
 * on conflict condition type for table "meetings"
 */
export interface meetings_on_conflict {
  constraint: meetings_constraint;
  update_columns: meetings_update_column[];
  where?: meetings_bool_exp | null;
}

/**
 * expression to compare columns of type skilltrack_types_enum. All fields are combined with logical 'AND'.
 */
export interface skilltrack_types_enum_comparison_exp {
  _eq?: skilltrack_types_enum | null;
  _in?: skilltrack_types_enum[] | null;
  _is_null?: boolean | null;
  _neq?: skilltrack_types_enum | null;
  _nin?: skilltrack_types_enum[] | null;
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
  task_attributes?: task_attributes_bool_exp | null;
  task_reviews?: task_reviews_bool_exp | null;
  task_status?: tasks_status_bool_exp | null;
  task_type?: tasks_type_bool_exp | null;
  tasks_status?: tasks_status_bool_exp | null;
  tasks_type?: tasks_type_bool_exp | null;
  ticketCode?: String_comparison_exp | null;
  title?: String_comparison_exp | null;
  type?: tasks_type_enum_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  userInvoiceByDeveloperinvoiceid?: user_invoices_bool_exp | null;
  user_invoice?: user_invoices_bool_exp | null;
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
 * input type for inserting array relation for remote table "user_contracts"
 */
export interface user_contracts_arr_rel_insert_input {
  data: user_contracts_insert_input[];
}

/**
 * Boolean expression to filter rows from the table "user_contracts". All fields are combined with a logical 'AND'.
 */
export interface user_contracts_bool_exp {
  _and?: (user_contracts_bool_exp | null)[] | null;
  _not?: user_contracts_bool_exp | null;
  _or?: (user_contracts_bool_exp | null)[] | null;
  developer?: developers_bool_exp | null;
  user?: users_bool_exp | null;
}

/**
 * input type for inserting data into table "user_contracts"
 */
export interface user_contracts_insert_input {
  developer?: developers_obj_rel_insert_input | null;
  user?: users_obj_rel_insert_input | null;
}

/**
 * input type for inserting array relation for remote table "user_emails"
 */
export interface user_emails_arr_rel_insert_input {
  data: user_emails_insert_input[];
  on_conflict?: user_emails_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "user_emails". All fields are combined with a logical 'AND'.
 */
export interface user_emails_bool_exp {
  _and?: (user_emails_bool_exp | null)[] | null;
  _not?: user_emails_bool_exp | null;
  _or?: (user_emails_bool_exp | null)[] | null;
  email?: String_comparison_exp | null;
  user?: users_bool_exp | null;
  userByEmail?: users_bool_exp | null;
  userId?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "user_emails"
 */
export interface user_emails_insert_input {
  user?: users_obj_rel_insert_input | null;
  userByEmail?: users_obj_rel_insert_input | null;
  userId?: number | null;
}

/**
 * input type for inserting object relation for remote table "user_emails"
 */
export interface user_emails_obj_rel_insert_input {
  data: user_emails_insert_input;
  on_conflict?: user_emails_on_conflict | null;
}

/**
 * on conflict condition type for table "user_emails"
 */
export interface user_emails_on_conflict {
  constraint: user_emails_constraint;
  update_columns: user_emails_update_column[];
  where?: user_emails_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "user_invoice_balances". All fields are combined with a logical 'AND'.
 */
export interface user_invoice_balances_bool_exp {
  _and?: (user_invoice_balances_bool_exp | null)[] | null;
  _not?: user_invoice_balances_bool_exp | null;
  _or?: (user_invoice_balances_bool_exp | null)[] | null;
  task_reviews_as_manager?: task_reviews_bool_exp | null;
  task_reviews_as_reviewer?: task_reviews_bool_exp | null;
  tasks_as_developer?: tasks_bool_exp | null;
  tasks_as_manager?: tasks_bool_exp | null;
  user?: users_bool_exp | null;
  user_invoice?: user_invoices_bool_exp | null;
  user_invoice_status?: user_invoice_status_bool_exp | null;
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
  dueAt?: timestamptz_comparison_exp | null;
  endAt?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  invoiceCode?: String_comparison_exp | null;
  paidByAgencyInvoiceId?: Int_comparison_exp | null;
  startAt?: timestamptz_comparison_exp | null;
  status?: user_invoice_status_enum_comparison_exp | null;
  taskReviewsByManagerinvoiceid?: task_reviews_bool_exp | null;
  task_reviews?: task_reviews_bool_exp | null;
  tasks?: tasks_bool_exp | null;
  tasksByManagerinvoiceid?: tasks_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
  userId?: Int_comparison_exp | null;
  user_invoice_balance?: user_invoice_balances_bool_exp | null;
  user_invoice_status?: user_invoice_status_bool_exp | null;
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
 * input type for inserting array relation for remote table "user_payments"
 */
export interface user_payments_arr_rel_insert_input {
  data: user_payments_insert_input[];
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
 * input type for inserting data into table "user_payments"
 */
export interface user_payments_insert_input {
  amountInUSD?: hasura_float8 | null;
  channelTransactionId?: string | null;
  createdAt?: hasura_timestamptz | null;
  developer?: developers_obj_rel_insert_input | null;
  finishedAt?: hasura_timestamptz | null;
  id?: number | null;
  paymentType?: user_payment_types_enum | null;
  status?: user_payment_status_enum | null;
  updatedAt?: hasura_timestamptz | null;
  user?: users_obj_rel_insert_input | null;
  userLogin?: string | null;
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
  agency_user?: agency_users_bool_exp | null;
  agency_users?: agency_users_bool_exp | null;
  avatarUrl?: String_comparison_exp | null;
  candidate?: candidates_bool_exp | null;
  client_user?: client_users_bool_exp | null;
  client_users?: client_users_bool_exp | null;
  defaultEmail?: String_comparison_exp | null;
  developer?: developers_bool_exp | null;
  firstName?: String_comparison_exp | null;
  githubLogin?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  lastName?: String_comparison_exp | null;
  login?: String_comparison_exp | null;
  nickname?: String_comparison_exp | null;
  passwordHash?: String_comparison_exp | null;
  ripplingEmployeeId?: Int_comparison_exp | null;
  telephone?: String_comparison_exp | null;
  timeDoctorUserId?: Int_comparison_exp | null;
  userEmailByUnverifiedemail?: user_emails_bool_exp | null;
  user_contracts?: user_contracts_bool_exp | null;
  user_email?: user_emails_bool_exp | null;
  user_emails?: user_emails_bool_exp | null;
  user_invoice_balances?: user_invoice_balances_bool_exp | null;
  user_invoices?: user_invoices_bool_exp | null;
  user_payments?: user_payments_bool_exp | null;
}

/**
 * input type for inserting data into table "users"
 */
export interface users_insert_input {
  agency_user?: agency_users_obj_rel_insert_input | null;
  agency_users?: agency_users_arr_rel_insert_input | null;
  candidate?: candidates_obj_rel_insert_input | null;
  client_user?: client_users_obj_rel_insert_input | null;
  client_users?: client_users_arr_rel_insert_input | null;
  developer?: developers_obj_rel_insert_input | null;
  id?: number | null;
  login?: string | null;
  userEmailByUnverifiedemail?: user_emails_obj_rel_insert_input | null;
  user_contracts?: user_contracts_arr_rel_insert_input | null;
  user_email?: user_emails_obj_rel_insert_input | null;
  user_emails?: user_emails_arr_rel_insert_input | null;
  user_payments?: user_payments_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "users"
 */
export interface users_obj_rel_insert_input {
  data: users_insert_input;
  on_conflict?: users_on_conflict | null;
}

/**
 * on conflict condition type for table "users"
 */
export interface users_on_conflict {
  constraint: users_constraint;
  update_columns: users_update_column[];
  where?: users_bool_exp | null;
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
