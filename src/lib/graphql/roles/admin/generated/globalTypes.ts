/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * unique or primary key constraints on table "admin"
 */
export enum admin_constraint {
  PK_e032310bcef831fb83101899b10 = 'PK_e032310bcef831fb83101899b10',
  REL_f8a889c4362d78f056960ca6da = 'REL_f8a889c4362d78f056960ca6da',
}

/**
 * update columns of table "admin"
 */
export enum admin_update_column {
  id = 'id',
  userId = 'userId',
  userLogin = 'userLogin',
}

/**
 * unique or primary key constraints on table "agencies"
 */
export enum agencies_constraint {
  PK_8ab1f1f53f56c8255b0d7e68b28 = 'PK_8ab1f1f53f56c8255b0d7e68b28',
}

/**
 * update columns of table "agencies"
 */
export enum agencies_update_column {
  addressAddress = 'addressAddress',
  createdAt = 'createdAt',
  id = 'id',
  legalName = 'legalName',
  name = 'name',
  updatedAt = 'updatedAt',
  userDomains = 'userDomains',
}

/**
 * unique or primary key constraints on table "agency_invoice_status"
 */
export enum agency_invoice_status_constraint {
  PK_f99d998b29ccaa60a77341ab6be = 'PK_f99d998b29ccaa60a77341ab6be',
}

export enum agency_invoice_status_enum {
  complete = 'complete',
  draft = 'draft',
}

/**
 * update columns of table "agency_invoice_status"
 */
export enum agency_invoice_status_update_column {
  description = 'description',
  id = 'id',
}

/**
 * unique or primary key constraints on table "agency_invoices"
 */
export enum agency_invoices_constraint {
  PK_6169defa906f59c4709d35a47a4 = 'PK_6169defa906f59c4709d35a47a4',
  UQ_SINGLE_DRAFT_AGENCY_INVOICE = 'UQ_SINGLE_DRAFT_AGENCY_INVOICE',
}

/**
 * update columns of table "agency_invoices"
 */
export enum agency_invoices_update_column {
  agencyId = 'agencyId',
  costInUSD = 'costInUSD',
  createdAt = 'createdAt',
  dueAt = 'dueAt',
  id = 'id',
  invoiceCode = 'invoiceCode',
  status = 'status',
  updatedAt = 'updatedAt',
}

/**
 * unique or primary key constraints on table "agency_payment_types"
 */
export enum agency_payment_types_constraint {
  PK_c3a39e8fe1fa716ef4d529d88ed = 'PK_c3a39e8fe1fa716ef4d529d88ed',
}

/**
 * update columns of table "agency_payment_types"
 */
export enum agency_payment_types_update_column {
  description = 'description',
  id = 'id',
}

/**
 * unique or primary key constraints on table "agency_payments"
 */
export enum agency_payments_constraint {
  PK_5b356505119b8a5c530675f7fb8 = 'PK_5b356505119b8a5c530675f7fb8',
  UQ_b26372d21555b581a1384851444 = 'UQ_b26372d21555b581a1384851444',
}

/**
 * unique or primary key constraints on table "agency_payments_status"
 */
export enum agency_payments_status_constraint {
  PK_d8035bcf3109bbf590561417ee8 = 'PK_d8035bcf3109bbf590561417ee8',
}

export enum agency_payments_status_enum {
  failed = 'failed',
  in_progress = 'in_progress',
  pending = 'pending',
  successful = 'successful',
}

/**
 * update columns of table "agency_payments_status"
 */
export enum agency_payments_status_update_column {
  description = 'description',
  id = 'id',
}

/**
 * update columns of table "agency_payments"
 */
export enum agency_payments_update_column {
  agencyId = 'agencyId',
  amountInUSD = 'amountInUSD',
  channelTransactionId = 'channelTransactionId',
  createdAt = 'createdAt',
  finishedAt = 'finishedAt',
  id = 'id',
  paymentType = 'paymentType',
  status = 'status',
}

/**
 * unique or primary key constraints on table "agency_users"
 */
export enum agency_users_constraint {
  PK_ae72ca39f0a748bf74eef99df42 = 'PK_ae72ca39f0a748bf74eef99df42',
}

/**
 * update columns of table "agency_users"
 */
export enum agency_users_update_column {
  agencyId = 'agencyId',
  id = 'id',
  userId = 'userId',
}

/**
 * unique or primary key constraints on table "bonus_types"
 */
export enum bonus_types_constraint {
  PK_ae65e47304014aca57f2b882ecf = 'PK_ae65e47304014aca57f2b882ecf',
}

export enum bonus_types_enum {
  developer_referral = 'developer_referral',
  holiday_bonus = 'holiday_bonus',
  weekly_bonus = 'weekly_bonus',
  workplace_bonus = 'workplace_bonus',
}

/**
 * update columns of table "bonus_types"
 */
export enum bonus_types_update_column {
  description = 'description',
  type = 'type',
}

/**
 * unique or primary key constraints on table "candidate_stage"
 */
export enum candidate_stage_constraint {
  PK_0bd65f365a75982be3729b2a106 = 'PK_0bd65f365a75982be3729b2a106',
}

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

/**
 * update columns of table "candidate_stage"
 */
export enum candidate_stage_update_column {
  type = 'type',
}

/**
 * unique or primary key constraints on table "candidate_technologies"
 */
export enum candidate_technologies_constraint {
  PK_4f942a1784be97e0b1b85042aaf = 'PK_4f942a1784be97e0b1b85042aaf',
}

/**
 * update columns of table "candidate_technologies"
 */
export enum candidate_technologies_update_column {
  candidatesId = 'candidatesId',
  technologiesId = 'technologiesId',
}

/**
 * unique or primary key constraints on table "candidates"
 */
export enum candidates_constraint {
  PK_140681296bf033ab1eb95288abb = 'PK_140681296bf033ab1eb95288abb',
  UQ_10d0384a816526f8c7f6b1e67b3 = 'UQ_10d0384a816526f8c7f6b1e67b3',
  UQ_90506b63a8a1d5f6fecb71b0d4c = 'UQ_90506b63a8a1d5f6fecb71b0d4c',
}

/**
 * update columns of table "candidates"
 */
export enum candidates_update_column {
  agencyId = 'agencyId',
  canRelocate = 'canRelocate',
  city = 'city',
  country = 'country',
  createdAt = 'createdAt',
  culture_screen_feedback = 'culture_screen_feedback',
  currentMonthlySalary = 'currentMonthlySalary',
  cv = 'cv',
  earliestStartDate = 'earliestStartDate',
  githubId = 'githubId',
  id = 'id',
  isActiveStudent = 'isActiveStudent',
  minAnnualSalary = 'minAnnualSalary',
  noticePeriod = 'noticePeriod',
  skillTrack = 'skillTrack',
  source = 'source',
  stage = 'stage',
  tech_screen_feedback = 'tech_screen_feedback',
  timezone = 'timezone',
  updatedAt = 'updatedAt',
  userId = 'userId',
  yearsOfExperience = 'yearsOfExperience',
}

/**
 * unique or primary key constraints on table "client_blocker_status"
 */
export enum client_blocker_status_constraint {
  PK_e5d5ae275bef16666e36effbfc1 = 'PK_e5d5ae275bef16666e36effbfc1',
}

export enum client_blocker_status_enum {
  pending = 'pending',
  resolved = 'resolved',
  review = 'review',
}

/**
 * update columns of table "client_blocker_status"
 */
export enum client_blocker_status_update_column {
  description = 'description',
  type = 'type',
}

/**
 * unique or primary key constraints on table "client_blockers"
 */
export enum client_blockers_constraint {
  PK_6e24a89cf5ae85282634062b5dc = 'PK_6e24a89cf5ae85282634062b5dc',
}

/**
 * update columns of table "client_blockers"
 */
export enum client_blockers_update_column {
  clientId = 'clientId',
  createdAt = 'createdAt',
  details = 'details',
  id = 'id',
  projectId = 'projectId',
  repoId = 'repoId',
  status = 'status',
  summary = 'summary',
  unblockDetails = 'unblockDetails',
  updatedAt = 'updatedAt',
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
 * unique or primary key constraints on table "client_invoice_status"
 */
export enum client_invoice_status_constraint {
  PK_7c3f64355cc211704b785d783f2 = 'PK_7c3f64355cc211704b785d783f2',
}

export enum client_invoice_status_enum {
  complete = 'complete',
  draft = 'draft',
}

/**
 * update columns of table "client_invoice_status"
 */
export enum client_invoice_status_update_column {
  description = 'description',
  id = 'id',
}

/**
 * unique or primary key constraints on table "client_invoices"
 */
export enum client_invoices_constraint {
  PK_e710ecb019ac03ca2d3f3905024 = 'PK_e710ecb019ac03ca2d3f3905024',
  UQ_SINGLE_DRAFT_CLIENT_INVOICE = 'UQ_SINGLE_DRAFT_CLIENT_INVOICE',
}

/**
 * update columns of table "client_invoices"
 */
export enum client_invoices_update_column {
  clientId = 'clientId',
  costInCredits = 'costInCredits',
  costInUSD = 'costInUSD',
  createdAt = 'createdAt',
  dueAt = 'dueAt',
  endAt = 'endAt',
  id = 'id',
  invoiceCode = 'invoiceCode',
  maxBudgetInCredits = 'maxBudgetInCredits',
  startAt = 'startAt',
  status = 'status',
  updatedAt = 'updatedAt',
}

/**
 * unique or primary key constraints on table "client_jobs"
 */
export enum client_jobs_constraint {
  PK_2b3cf801ee3ba060593224e382e = 'PK_2b3cf801ee3ba060593224e382e',
}

/**
 * update columns of table "client_jobs"
 */
export enum client_jobs_update_column {
  canSponsorVisa = 'canSponsorVisa',
  clientId = 'clientId',
  earliestStartDate = 'earliestStartDate',
  id = 'id',
  isRemote = 'isRemote',
  linkToJobDescription = 'linkToJobDescription',
  maxAnnualSalary = 'maxAnnualSalary',
  minQualifiedRank = 'minQualifiedRank',
  qualifiedCities = 'qualifiedCities',
  qualifiedCountries = 'qualifiedCountries',
  qualifiedTimezoneOverlap = 'qualifiedTimezoneOverlap',
  totalPlacements = 'totalPlacements',
  workTimeZone = 'workTimeZone',
}

/**
 * unique or primary key constraints on table "client_project_repositories"
 */
export enum client_project_repositories_constraint {
  PK_4ef8d664ce8d2c1f0867070f8c4 = 'PK_4ef8d664ce8d2c1f0867070f8c4',
}

/**
 * update columns of table "client_project_repositories"
 */
export enum client_project_repositories_update_column {
  clientProjectsId = 'clientProjectsId',
  clientRepositoriesId = 'clientRepositoriesId',
}

/**
 * unique or primary key constraints on table "client_projects"
 */
export enum client_projects_constraint {
  PK_25cf83f0d86704a0363ddd713ca = 'PK_25cf83f0d86704a0363ddd713ca',
}

/**
 * update columns of table "client_projects"
 */
export enum client_projects_update_column {
  clientId = 'clientId',
  createdAt = 'createdAt',
  id = 'id',
  updatedAt = 'updatedAt',
}

/**
 * unique or primary key constraints on table "client_repositories_commits"
 */
export enum client_repositories_commits_constraint {
  PK_b8700f8adbc5df0264643af8328 = 'PK_b8700f8adbc5df0264643af8328',
  UQ_REPO_COMMIT = 'UQ_REPO_COMMIT',
}

/**
 * update columns of table "client_repositories_commits"
 */
export enum client_repositories_commits_update_column {
  clientCommitDate = 'clientCommitDate',
  clientCommitSHA = 'clientCommitSHA',
  clientRepositoryId = 'clientRepositoryId',
  id = 'id',
  slicedCommitDate = 'slicedCommitDate',
  slicedCommitSHA = 'slicedCommitSHA',
  taskId = 'taskId',
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
  botId = 'botId',
  botType = 'botType',
  clientBaseBranchName = 'clientBaseBranchName',
  clientId = 'clientId',
  clientRepoUrl = 'clientRepoUrl',
  id = 'id',
  ignoredPaths = 'ignoredPaths',
  slicedFolders = 'slicedFolders',
  slicedRepoUrl = 'slicedRepoUrl',
}

/**
 * unique or primary key constraints on table "client_transaction_status"
 */
export enum client_transaction_status_constraint {
  PK_f64edcb50f43b2172f741303312 = 'PK_f64edcb50f43b2172f741303312',
}

export enum client_transaction_status_enum {
  cancelled = 'cancelled',
  failed = 'failed',
  in_progress = 'in_progress',
  pending = 'pending',
  successful = 'successful',
}

/**
 * update columns of table "client_transaction_status"
 */
export enum client_transaction_status_update_column {
  description = 'description',
  id = 'id',
}

/**
 * unique or primary key constraints on table "client_transaction_types"
 */
export enum client_transaction_types_constraint {
  PK_2215a362a65a4cbba8343a4234b = 'PK_2215a362a65a4cbba8343a4234b',
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
 * update columns of table "client_transaction_types"
 */
export enum client_transaction_types_update_column {
  description = 'description',
  id = 'id',
}

/**
 * unique or primary key constraints on table "client_transactions"
 */
export enum client_transactions_constraint {
  PK_affbc9a9a22aa18f40b1bf7a9b3 = 'PK_affbc9a9a22aa18f40b1bf7a9b3',
}

/**
 * update columns of table "client_transactions"
 */
export enum client_transactions_update_column {
  channelTransactionId = 'channelTransactionId',
  channelType = 'channelType',
  clientId = 'clientId',
  costInCredits = 'costInCredits',
  costInUSD = 'costInUSD',
  dueAt = 'dueAt',
  id = 'id',
  invoiceCode = 'invoiceCode',
  status = 'status',
  transactedAt = 'transactedAt',
}

/**
 * unique or primary key constraints on table "client_users"
 */
export enum client_users_constraint {
  PK_fe74bfd4d01077395ee4204b553 = 'PK_fe74bfd4d01077395ee4204b553',
}

/**
 * update columns of table "client_users"
 */
export enum client_users_update_column {
  clientId = 'clientId',
  id = 'id',
  userId = 'userId',
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
  addressAddress = 'addressAddress',
  agencyId = 'agencyId',
  churnedAt = 'churnedAt',
  createdAt = 'createdAt',
  creditBatchSize = 'creditBatchSize',
  id = 'id',
  legalName = 'legalName',
  logoUrl = 'logoUrl',
  name = 'name',
  onBoardedAt = 'onBoardedAt',
  updatedAt = 'updatedAt',
  userDomains = 'userDomains',
}

/**
 * unique or primary key constraints on table "developer_bonus_earning"
 */
export enum developer_bonus_earning_constraint {
  PK_c48f5e0409fe7f51ca64525b721 = 'PK_c48f5e0409fe7f51ca64525b721',
}

/**
 * update columns of table "developer_bonus_earning"
 */
export enum developer_bonus_earning_update_column {
  amountInUSD = 'amountInUSD',
  bonusType = 'bonusType',
  endDate = 'endDate',
  id = 'id',
  startDate = 'startDate',
  userInvoiceId = 'userInvoiceId',
  userLogin = 'userLogin',
}

/**
 * unique or primary key constraints on table "developer_daily_log"
 */
export enum developer_daily_log_constraint {
  PK_7cc18edd08a1ba851e4651f49ef = 'PK_7cc18edd08a1ba851e4651f49ef',
}

/**
 * update columns of table "developer_daily_log"
 */
export enum developer_daily_log_update_column {
  createdAt = 'createdAt',
  developerId = 'developerId',
  id = 'id',
  numberOfCommits = 'numberOfCommits',
  timeLogged = 'timeLogged',
  updatedAt = 'updatedAt',
  workDate = 'workDate',
}

/**
 * unique or primary key constraints on table "developer_weekly_earning"
 */
export enum developer_weekly_earning_constraint {
  PK_7765206b04b419f25b60adabe56 = 'PK_7765206b04b419f25b60adabe56',
}

/**
 * update columns of table "developer_weekly_earning"
 */
export enum developer_weekly_earning_update_column {
  amountEarnedWithTasks = 'amountEarnedWithTasks',
  developerId = 'developerId',
  endDate = 'endDate',
  id = 'id',
  minimumAmountEarned = 'minimumAmountEarned',
  startDate = 'startDate',
  userLogin = 'userLogin',
}

/**
 * unique or primary key constraints on table "developers"
 */
export enum developers_constraint {
  PK_247719240b950bd26dec14bdd21 = 'PK_247719240b950bd26dec14bdd21',
  UQ_648ceadf2310802da16ba8daa2f = 'UQ_648ceadf2310802da16ba8daa2f',
  UQ_75632afc5e3e4343965ea7573fd = 'UQ_75632afc5e3e4343965ea7573fd',
  UQ_b857ddc4fd4392133599b69bc64 = 'UQ_b857ddc4fd4392133599b69bc64',
  UQ_d32dcb063abff76dbf0a5ce92eb = 'UQ_d32dcb063abff76dbf0a5ce92eb',
}

/**
 * update columns of table "developers"
 */
export enum developers_update_column {
  candidateId = 'candidateId',
  cohort = 'cohort',
  firstName = 'firstName',
  githubId = 'githubId',
  id = 'id',
  lastName = 'lastName',
  login = 'login',
  passwordHash = 'passwordHash',
  targetCurrency = 'targetCurrency',
  telephone = 'telephone',
  transferwiseId = 'transferwiseId',
}

/**
 * unique or primary key constraints on table "further_reviews"
 */
export enum further_reviews_constraint {
  PK_647fefe2525a96c307e9a1760be = 'PK_647fefe2525a96c307e9a1760be',
}

/**
 * update columns of table "further_reviews"
 */
export enum further_reviews_update_column {
  taskReviewsId = 'taskReviewsId',
  tasksId = 'tasksId',
}

/**
 * unique or primary key constraints on table "gcp_storage_buckets"
 */
export enum gcp_storage_buckets_constraint {
  PK_82b02e1ec106e8c0bbacedd2ab6 = 'PK_82b02e1ec106e8c0bbacedd2ab6',
  UQ_2317eabdf7038d36bdfb0975fdd = 'UQ_2317eabdf7038d36bdfb0975fdd',
}

/**
 * update columns of table "gcp_storage_buckets"
 */
export enum gcp_storage_buckets_update_column {
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  name = 'name',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "gcp_storage_objects"
 */
export enum gcp_storage_objects_constraint {
  PK_8cef844a166a77c34d468fb955e = 'PK_8cef844a166a77c34d468fb955e',
  UQ_f4bf5b2bab18cdc0e503d850361 = 'UQ_f4bf5b2bab18cdc0e503d850361',
}

/**
 * update columns of table "gcp_storage_objects"
 */
export enum gcp_storage_objects_update_column {
  bucketId = 'bucketId',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  expiresInType = 'expiresInType',
  filename = 'filename',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "git_branch_commits"
 */
export enum git_branch_commits_constraint {
  PK_8114bd8b1c6b568581914d93fc0 = 'PK_8114bd8b1c6b568581914d93fc0',
}

/**
 * update columns of table "git_branch_commits"
 */
export enum git_branch_commits_update_column {
  branchId = 'branchId',
  commitId = 'commitId',
}

/**
 * unique or primary key constraints on table "git_branches"
 */
export enum git_branches_constraint {
  PK_e452173d18c31eba971f888d09b = 'PK_e452173d18c31eba971f888d09b',
  REL_92c4bc31e0f8dd9926f015186b = 'REL_92c4bc31e0f8dd9926f015186b',
  UQ_BRANCH_REPO_OID_NAME = 'UQ_BRANCH_REPO_OID_NAME',
}

/**
 * update columns of table "git_branches"
 */
export enum git_branches_update_column {
  createdAt = 'createdAt',
  githubBranchSid = 'githubBranchSid',
  headCommitId = 'headCommitId',
  id = 'id',
  name = 'name',
  oid = 'oid',
  repoId = 'repoId',
  updatedAt = 'updatedAt',
}

/**
 * unique or primary key constraints on table "git_comment_reactions"
 */
export enum git_comment_reactions_constraint {
  PK_3dbd179d36ebb71ac5d697325e4 = 'PK_3dbd179d36ebb71ac5d697325e4',
  REL_936a2c82d0f292dcc79bfe99ce = 'REL_936a2c82d0f292dcc79bfe99ce',
}

/**
 * update columns of table "git_comment_reactions"
 */
export enum git_comment_reactions_update_column {
  authorUsername = 'authorUsername',
  content = 'content',
  createdAt = 'createdAt',
  githubCommentReactionSid = 'githubCommentReactionSid',
  id = 'id',
  pullRequestCommentId = 'pullRequestCommentId',
  pullRequestId = 'pullRequestId',
  pullRequestReviewCommentId = 'pullRequestReviewCommentId',
  pullRequestReviewId = 'pullRequestReviewId',
  updatedAt = 'updatedAt',
}

/**
 * unique or primary key constraints on table "git_commit_contexts"
 */
export enum git_commit_contexts_constraint {
  PK_2a93245eb338ce04ce2fe812035 = 'PK_2a93245eb338ce04ce2fe812035',
  REL_0ea01ccfb59581e300f2291452 = 'REL_0ea01ccfb59581e300f2291452',
}

/**
 * update columns of table "git_commit_contexts"
 */
export enum git_commit_contexts_update_column {
  avatarUrl = 'avatarUrl',
  commitId = 'commitId',
  context = 'context',
  createdAt = 'createdAt',
  description = 'description',
  githubCommitContextSid = 'githubCommitContextSid',
  id = 'id',
  status = 'status',
  targetUrl = 'targetUrl',
  updatedAt = 'updatedAt',
}

/**
 * unique or primary key constraints on table "git_commit_status"
 */
export enum git_commit_status_constraint {
  PK_700d03a534413dee6c079989e50 = 'PK_700d03a534413dee6c079989e50',
}

/**
 * update columns of table "git_commit_status"
 */
export enum git_commit_status_update_column {
  description = 'description',
  id = 'id',
}

/**
 * unique or primary key constraints on table "git_commits"
 */
export enum git_commits_constraint {
  PK_89075cd165d10bd3c6f659f5b53 = 'PK_89075cd165d10bd3c6f659f5b53',
  REL_9457a1422de8bcf8776829786f = 'REL_9457a1422de8bcf8776829786f',
}

/**
 * update columns of table "git_commits"
 */
export enum git_commits_update_column {
  authorUsername = 'authorUsername',
  createdAt = 'createdAt',
  githubCommitSid = 'githubCommitSid',
  id = 'id',
  oid = 'oid',
  status = 'status',
  taskId = 'taskId',
  updatedAt = 'updatedAt',
}

/**
 * unique or primary key constraints on table "git_organizations"
 */
export enum git_organizations_constraint {
  PK_33fd98d09e05427408c9f864571 = 'PK_33fd98d09e05427408c9f864571',
  REL_2d1855a7a8d505eea20fae76c8 = 'REL_2d1855a7a8d505eea20fae76c8',
}

/**
 * update columns of table "git_organizations"
 */
export enum git_organizations_update_column {
  clientId = 'clientId',
  createdAt = 'createdAt',
  githubOrganizationSid = 'githubOrganizationSid',
  id = 'id',
  updatedAt = 'updatedAt',
}

/**
 * unique or primary key constraints on table "git_pull_request_assignees"
 */
export enum git_pull_request_assignees_constraint {
  PK_2e3250cca8d2e6d55442bb81cae = 'PK_2e3250cca8d2e6d55442bb81cae',
}

/**
 * update columns of table "git_pull_request_assignees"
 */
export enum git_pull_request_assignees_update_column {
  accountUsername = 'accountUsername',
  pullRequestId = 'pullRequestId',
}

/**
 * unique or primary key constraints on table "git_pull_request_comments"
 */
export enum git_pull_request_comments_constraint {
  PK_c06551647d1dace2dc2ef732c7d = 'PK_c06551647d1dace2dc2ef732c7d',
  REL_9c283eb25f73394062ac1980a5 = 'REL_9c283eb25f73394062ac1980a5',
}

/**
 * update columns of table "git_pull_request_comments"
 */
export enum git_pull_request_comments_update_column {
  authorUsername = 'authorUsername',
  body = 'body',
  createdAt = 'createdAt',
  githubPullRequestCommentSid = 'githubPullRequestCommentSid',
  id = 'id',
  pullRequestId = 'pullRequestId',
  updatedAt = 'updatedAt',
}

/**
 * unique or primary key constraints on table "git_pull_request_review_comment_state"
 */
export enum git_pull_request_review_comment_state_constraint {
  PK_25dd4deed317074f00df1d861b5 = 'PK_25dd4deed317074f00df1d861b5',
}

/**
 * update columns of table "git_pull_request_review_comment_state"
 */
export enum git_pull_request_review_comment_state_update_column {
  description = 'description',
  id = 'id',
}

/**
 * unique or primary key constraints on table "git_pull_request_review_comments"
 */
export enum git_pull_request_review_comments_constraint {
  PK_99239583898b108dd1ab7d169a6 = 'PK_99239583898b108dd1ab7d169a6',
  REL_858021f7504b0f032aa5321891 = 'REL_858021f7504b0f032aa5321891',
}

/**
 * update columns of table "git_pull_request_review_comments"
 */
export enum git_pull_request_review_comments_update_column {
  authorUsername = 'authorUsername',
  body = 'body',
  commitId = 'commitId',
  createdAt = 'createdAt',
  diffHunk = 'diffHunk',
  githubPullRequestReviewCommentSid = 'githubPullRequestReviewCommentSid',
  id = 'id',
  originalCommitId = 'originalCommitId',
  originalPosition = 'originalPosition',
  outdated = 'outdated',
  path = 'path',
  position = 'position',
  pullRequestId = 'pullRequestId',
  pullRequestReviewId = 'pullRequestReviewId',
  pullRequestReviewThreadId = 'pullRequestReviewThreadId',
  replyToCommentId = 'replyToCommentId',
  state = 'state',
  updatedAt = 'updatedAt',
}

/**
 * unique or primary key constraints on table "git_pull_request_review_state"
 */
export enum git_pull_request_review_state_constraint {
  PK_0710721310cf682af7f4cad5565 = 'PK_0710721310cf682af7f4cad5565',
}

/**
 * update columns of table "git_pull_request_review_state"
 */
export enum git_pull_request_review_state_update_column {
  description = 'description',
  id = 'id',
}

/**
 * unique or primary key constraints on table "git_pull_request_review_threads"
 */
export enum git_pull_request_review_threads_constraint {
  PK_9e08b43b494850697fceedad7ac = 'PK_9e08b43b494850697fceedad7ac',
  REL_a35432e0c6076f953f36b052c3 = 'REL_a35432e0c6076f953f36b052c3',
}

/**
 * update columns of table "git_pull_request_review_threads"
 */
export enum git_pull_request_review_threads_update_column {
  createdAt = 'createdAt',
  githubPullRequestReviewThreadSid = 'githubPullRequestReviewThreadSid',
  id = 'id',
  isResolved = 'isResolved',
  pullRequestId = 'pullRequestId',
  updatedAt = 'updatedAt',
}

/**
 * unique or primary key constraints on table "git_pull_request_reviewers"
 */
export enum git_pull_request_reviewers_constraint {
  PK_f8709c5f12c29da9f0007ba463f = 'PK_f8709c5f12c29da9f0007ba463f',
}

/**
 * update columns of table "git_pull_request_reviewers"
 */
export enum git_pull_request_reviewers_update_column {
  accountUsername = 'accountUsername',
  pullRequestId = 'pullRequestId',
}

/**
 * unique or primary key constraints on table "git_pull_request_reviews"
 */
export enum git_pull_request_reviews_constraint {
  PK_985d4c78583ae42ae65233ca35f = 'PK_985d4c78583ae42ae65233ca35f',
  REL_4c8fe8eda8c32b11423c3be115 = 'REL_4c8fe8eda8c32b11423c3be115',
}

/**
 * update columns of table "git_pull_request_reviews"
 */
export enum git_pull_request_reviews_update_column {
  authorUsername = 'authorUsername',
  body = 'body',
  createdAt = 'createdAt',
  githubPullRequestReviewSid = 'githubPullRequestReviewSid',
  id = 'id',
  pullRequestId = 'pullRequestId',
  state = 'state',
  updatedAt = 'updatedAt',
}

/**
 * unique or primary key constraints on table "git_pull_request_state"
 */
export enum git_pull_request_state_constraint {
  PK_43596bcc8b623b3716a9d3b394e = 'PK_43596bcc8b623b3716a9d3b394e',
}

/**
 * update columns of table "git_pull_request_state"
 */
export enum git_pull_request_state_update_column {
  description = 'description',
  id = 'id',
}

/**
 * unique or primary key constraints on table "git_pull_requests"
 */
export enum git_pull_requests_constraint {
  PK_671f6b2a8a6ccef3c5ba79b6a3a = 'PK_671f6b2a8a6ccef3c5ba79b6a3a',
  REL_282592be47a8f605113d19a9c8 = 'REL_282592be47a8f605113d19a9c8',
}

/**
 * update columns of table "git_pull_requests"
 */
export enum git_pull_requests_update_column {
  authorUsername = 'authorUsername',
  baseBranchId = 'baseBranchId',
  body = 'body',
  createdAt = 'createdAt',
  githubPullRequestSid = 'githubPullRequestSid',
  id = 'id',
  isDraft = 'isDraft',
  isMerged = 'isMerged',
  mergeable = 'mergeable',
  mergedAt = 'mergedAt',
  repoId = 'repoId',
  state = 'state',
  targetBranchId = 'targetBranchId',
  title = 'title',
  updatedAt = 'updatedAt',
}

/**
 * unique or primary key constraints on table "git_repo_users"
 */
export enum git_repo_users_constraint {
  PK_95e0a8a7b9719c7466261e9d77a = 'PK_95e0a8a7b9719c7466261e9d77a',
}

/**
 * update columns of table "git_repo_users"
 */
export enum git_repo_users_update_column {
  accountUsername = 'accountUsername',
  repoId = 'repoId',
}

/**
 * unique or primary key constraints on table "git_repos"
 */
export enum git_repos_constraint {
  PK_bfe52eadd3f50e722a5f3796af6 = 'PK_bfe52eadd3f50e722a5f3796af6',
  REL_0249cbd083b68cb6e76483fd56 = 'REL_0249cbd083b68cb6e76483fd56',
}

/**
 * update columns of table "git_repos"
 */
export enum git_repos_update_column {
  createdAt = 'createdAt',
  description = 'description',
  githubRepoSid = 'githubRepoSid',
  id = 'id',
  ignoredPaths = 'ignoredPaths',
  isArchived = 'isArchived',
  isDisabled = 'isDisabled',
  isFork = 'isFork',
  isLocked = 'isLocked',
  isPrivate = 'isPrivate',
  isTemplate = 'isTemplate',
  name = 'name',
  organizationId = 'organizationId',
  slicedFolders = 'slicedFolders',
  slicedFromId = 'slicedFromId',
  updatedAt = 'updatedAt',
}

/**
 * unique or primary key constraints on table "git_users"
 */
export enum git_users_constraint {
  PK_095ec487e1e4bd8e76a11f25e0e = 'PK_095ec487e1e4bd8e76a11f25e0e',
  REL_0655b40269b8c0cb8374b9ecd6 = 'REL_0655b40269b8c0cb8374b9ecd6',
  REL_12e3e7cc3c499f603be42abc63 = 'REL_12e3e7cc3c499f603be42abc63',
  UQ_d0e176264d6738b990060d4f6a5 = 'UQ_d0e176264d6738b990060d4f6a5',
}

/**
 * update columns of table "git_users"
 */
export enum git_users_update_column {
  agencyId = 'agencyId',
  createdAt = 'createdAt',
  email = 'email',
  githubAccountSid = 'githubAccountSid',
  id = 'id',
  name = 'name',
  password = 'password',
  updatedAt = 'updatedAt',
  userLogin = 'userLogin',
  username = 'username',
}

/**
 * unique or primary key constraints on table "github_accounts"
 */
export enum github_accounts_constraint {
  PK_01b75d48868462b91c920cc80dc = 'PK_01b75d48868462b91c920cc80dc',
  UQ_GITHUB_LOGIN = 'UQ_GITHUB_LOGIN',
  UQ_d1f58014d7320eeca5e0497dbad = 'UQ_d1f58014d7320eeca5e0497dbad',
  UQ_d3a85d85ab19520445ade53150d = 'UQ_d3a85d85ab19520445ade53150d',
  UQ_e86ca9a6f5c85173103df89c73b = 'UQ_e86ca9a6f5c85173103df89c73b',
}

/**
 * update columns of table "github_accounts"
 */
export enum github_accounts_update_column {
  agencyId = 'agencyId',
  avatarUrl = 'avatarUrl',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  email = 'email',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  login = 'login',
  name = 'name',
  password = 'password',
  personalAccessToken = 'personalAccessToken',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "github_app_installations"
 */
export enum github_app_installations_constraint {
  PK_25a63d76935ddf621bfb6277954 = 'PK_25a63d76935ddf621bfb6277954',
  UQ_04f89bc7719f929019b7398b1e1 = 'UQ_04f89bc7719f929019b7398b1e1',
}

/**
 * update columns of table "github_app_installations"
 */
export enum github_app_installations_update_column {
  accountSid = 'accountSid',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  expiresInType = 'expiresInType',
  githubAppSid = 'githubAppSid',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  organizationSid = 'organizationSid',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "github_apps"
 */
export enum github_apps_constraint {
  PK_4d362c8601aee838dc04e3e1904 = 'PK_4d362c8601aee838dc04e3e1904',
  UQ_3c3d2434df6adcd1aceb1ed7927 = 'UQ_3c3d2434df6adcd1aceb1ed7927',
  UQ_b99f282d90d05c05006c09edbed = 'UQ_b99f282d90d05c05006c09edbed',
  UQ_c5f0cc22818db7b3976e6ab05b7 = 'UQ_c5f0cc22818db7b3976e6ab05b7',
  UQ_f49df63ed9faeade2db9eefa9ff = 'UQ_f49df63ed9faeade2db9eefa9ff',
}

/**
 * update columns of table "github_apps"
 */
export enum github_apps_update_column {
  adminAccountSid = 'adminAccountSid',
  admingOrganizationSid = 'admingOrganizationSid',
  clientId = 'clientId',
  clientSecret = 'clientSecret',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  name = 'name',
  privateKey = 'privateKey',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "github_branch_commits"
 */
export enum github_branch_commits_constraint {
  PK_09f54f4cb0888c191dabc256a05 = 'PK_09f54f4cb0888c191dabc256a05',
}

/**
 * update columns of table "github_branch_commits"
 */
export enum github_branch_commits_update_column {
  branchSid = 'branchSid',
  commitSid = 'commitSid',
}

/**
 * unique or primary key constraints on table "github_branches"
 */
export enum github_branches_constraint {
  PK_1d6eef97fe8fe9c1d02adb090af = 'PK_1d6eef97fe8fe9c1d02adb090af',
  UQ_44174ce964dac5e91ba6967d87c = 'UQ_44174ce964dac5e91ba6967d87c',
  UQ_GITHUB_BRANCH_REPO_OID_NAME = 'UQ_GITHUB_BRANCH_REPO_OID_NAME',
}

/**
 * update columns of table "github_branches"
 */
export enum github_branches_update_column {
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  expiresInType = 'expiresInType',
  headCommitSid = 'headCommitSid',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  name = 'name',
  oid = 'oid',
  redundantFields = 'redundantFields',
  repoSid = 'repoSid',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "github_code_comments"
 */
export enum github_code_comments_constraint {
  PK_7d81f0f7b48b1a2e9a4b0e1bff4 = 'PK_7d81f0f7b48b1a2e9a4b0e1bff4',
  UQ_27feda6b32a0f3dba99ea2ac150 = 'UQ_27feda6b32a0f3dba99ea2ac150',
}

/**
 * update columns of table "github_code_comments"
 */
export enum github_code_comments_update_column {
  authorLogin = 'authorLogin',
  body = 'body',
  commitSid = 'commitSid',
  createdAt = 'createdAt',
  diffHunk = 'diffHunk',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  path = 'path',
  pullRequestSid = 'pullRequestSid',
  redundantFields = 'redundantFields',
  sid = 'sid',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
}

/**
 * unique or primary key constraints on table "github_comment_reactions"
 */
export enum github_comment_reactions_constraint {
  PK_380f1eb202a6d6705f3f5397f5d = 'PK_380f1eb202a6d6705f3f5397f5d',
  UQ_ce6c28c59334ed806116f91dbfd = 'UQ_ce6c28c59334ed806116f91dbfd',
}

/**
 * update columns of table "github_comment_reactions"
 */
export enum github_comment_reactions_update_column {
  authorLogin = 'authorLogin',
  content = 'content',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  issueCommentSid = 'issueCommentSid',
  issueSid = 'issueSid',
  pullRequestCommentSid = 'pullRequestCommentSid',
  pullRequestReviewCommentSid = 'pullRequestReviewCommentSid',
  pullRequestReviewSid = 'pullRequestReviewSid',
  pullRequestSid = 'pullRequestSid',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "github_comments"
 */
export enum github_comments_constraint {
  PK_2772404f0123e57638e37fccfcb = 'PK_2772404f0123e57638e37fccfcb',
  UQ_0d5e5f0f7948dc5187204b312f9 = 'UQ_0d5e5f0f7948dc5187204b312f9',
}

/**
 * update columns of table "github_comments"
 */
export enum github_comments_update_column {
  authorLogin = 'authorLogin',
  body = 'body',
  createdAt = 'createdAt',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  issueSid = 'issueSid',
  pullRequestSid = 'pullRequestSid',
  redundantFields = 'redundantFields',
  sid = 'sid',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
}

/**
 * unique or primary key constraints on table "github_commit_contexts"
 */
export enum github_commit_contexts_constraint {
  PK_7269d39084d66d4a00e6d5b603a = 'PK_7269d39084d66d4a00e6d5b603a',
  UQ_44a6fe91a28b85b9cc16e44bdfa = 'UQ_44a6fe91a28b85b9cc16e44bdfa',
}

/**
 * update columns of table "github_commit_contexts"
 */
export enum github_commit_contexts_update_column {
  avatarUrl = 'avatarUrl',
  commitSid = 'commitSid',
  context = 'context',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  description = 'description',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  status = 'status',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  targetUrl = 'targetUrl',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "github_commit_status"
 */
export enum github_commit_status_constraint {
  PK_b79673170f5024e1dcc54090854 = 'PK_b79673170f5024e1dcc54090854',
}

export enum github_commit_status_enum {
  ERROR = 'ERROR',
  EXPECTED = 'EXPECTED',
  FAILURE = 'FAILURE',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
}

/**
 * update columns of table "github_commit_status"
 */
export enum github_commit_status_update_column {
  description = 'description',
  id = 'id',
}

/**
 * unique or primary key constraints on table "github_commits"
 */
export enum github_commits_constraint {
  PK_57b96ef49e8ced6fa62005e0d45 = 'PK_57b96ef49e8ced6fa62005e0d45',
  UQ_633fe494675abe239c98e7eccf6 = 'UQ_633fe494675abe239c98e7eccf6',
}

/**
 * update columns of table "github_commits"
 */
export enum github_commits_update_column {
  authorLogin = 'authorLogin',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  oid = 'oid',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  status = 'status',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "github_issue_assignees"
 */
export enum github_issue_assignees_constraint {
  PK_dcffecd0992fb6bfd38c3b18798 = 'PK_dcffecd0992fb6bfd38c3b18798',
}

/**
 * update columns of table "github_issue_assignees"
 */
export enum github_issue_assignees_update_column {
  accountLogin = 'accountLogin',
  issueSid = 'issueSid',
}

/**
 * unique or primary key constraints on table "github_issue_comments"
 */
export enum github_issue_comments_constraint {
  PK_38b3f9b5475c81cf7ef4cad0f25 = 'PK_38b3f9b5475c81cf7ef4cad0f25',
  UQ_cb4ff495bb5a8ab167df031a63b = 'UQ_cb4ff495bb5a8ab167df031a63b',
}

/**
 * update columns of table "github_issue_comments"
 */
export enum github_issue_comments_update_column {
  authorLogin = 'authorLogin',
  body = 'body',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  issueSid = 'issueSid',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "github_issue_state"
 */
export enum github_issue_state_constraint {
  PK_496822808a3c78bfa8e30b0be28 = 'PK_496822808a3c78bfa8e30b0be28',
}

export enum github_issue_state_enum {
  CLOSED = 'CLOSED',
  OPEN = 'OPEN',
}

/**
 * update columns of table "github_issue_state"
 */
export enum github_issue_state_update_column {
  description = 'description',
  id = 'id',
}

/**
 * unique or primary key constraints on table "github_issues"
 */
export enum github_issues_constraint {
  PK_756f34b9803d3eebfb311e07150 = 'PK_756f34b9803d3eebfb311e07150',
  UQ_763d8e062081ec0c19bea619853 = 'UQ_763d8e062081ec0c19bea619853',
}

/**
 * update columns of table "github_issues"
 */
export enum github_issues_update_column {
  authorLogin = 'authorLogin',
  body = 'body',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  redundantFields = 'redundantFields',
  repoSid = 'repoSid',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  state = 'state',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  title = 'title',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "github_organizations"
 */
export enum github_organizations_constraint {
  PK_1a69589fba675b6d60d497f5ec8 = 'PK_1a69589fba675b6d60d497f5ec8',
  REL_48ce8aab4daba5e58b832c4130 = 'REL_48ce8aab4daba5e58b832c4130',
  UQ_534f98da41a0d26e8efed61ed9b = 'UQ_534f98da41a0d26e8efed61ed9b',
}

/**
 * update columns of table "github_organizations"
 */
export enum github_organizations_update_column {
  avatarUrl = 'avatarUrl',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  login = 'login',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "github_owners"
 */
export enum github_owners_constraint {
  PK_ab3ace114efcda7fdba945629cc = 'PK_ab3ace114efcda7fdba945629cc',
  UQ_61c92398cc8af1ada4d35eaeccd = 'UQ_61c92398cc8af1ada4d35eaeccd',
  UQ_63a03135f0c134170b89f45e86d = 'UQ_63a03135f0c134170b89f45e86d',
}

/**
 * update columns of table "github_owners"
 */
export enum github_owners_update_column {
  agencyId = 'agencyId',
  avatarUrl = 'avatarUrl',
  clientId = 'clientId',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  login = 'login',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "github_pull_request_assignees"
 */
export enum github_pull_request_assignees_constraint {
  PK_9173605f03c60c23083e6d23cb8 = 'PK_9173605f03c60c23083e6d23cb8',
}

/**
 * update columns of table "github_pull_request_assignees"
 */
export enum github_pull_request_assignees_update_column {
  accountLogin = 'accountLogin',
  pullRequestSid = 'pullRequestSid',
}

/**
 * unique or primary key constraints on table "github_pull_request_comments"
 */
export enum github_pull_request_comments_constraint {
  PK_2caa6ccaeb876aaf96bc88aaa59 = 'PK_2caa6ccaeb876aaf96bc88aaa59',
  UQ_89e9bbd819631cb57f7dfa91fa3 = 'UQ_89e9bbd819631cb57f7dfa91fa3',
}

/**
 * update columns of table "github_pull_request_comments"
 */
export enum github_pull_request_comments_update_column {
  authorLogin = 'authorLogin',
  body = 'body',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  pullRequestSid = 'pullRequestSid',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "github_pull_request_review_comment_state"
 */
export enum github_pull_request_review_comment_state_constraint {
  PK_d6054c4d60590525f13717380d6 = 'PK_d6054c4d60590525f13717380d6',
}

/**
 * update columns of table "github_pull_request_review_comment_state"
 */
export enum github_pull_request_review_comment_state_update_column {
  description = 'description',
  id = 'id',
}

/**
 * unique or primary key constraints on table "github_pull_request_review_comments"
 */
export enum github_pull_request_review_comments_constraint {
  PK_3682193b858407028d1e4655aaa = 'PK_3682193b858407028d1e4655aaa',
  UQ_e480d42546d3023aa673c441b1a = 'UQ_e480d42546d3023aa673c441b1a',
}

/**
 * update columns of table "github_pull_request_review_comments"
 */
export enum github_pull_request_review_comments_update_column {
  authorLogin = 'authorLogin',
  body = 'body',
  commitSid = 'commitSid',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  diffHunk = 'diffHunk',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  originalCommitSid = 'originalCommitSid',
  originalPosition = 'originalPosition',
  outdated = 'outdated',
  path = 'path',
  position = 'position',
  pullRequestReviewSid = 'pullRequestReviewSid',
  pullRequestReviewThreadSid = 'pullRequestReviewThreadSid',
  pullRequestSid = 'pullRequestSid',
  redundantFields = 'redundantFields',
  replyToCommentSid = 'replyToCommentSid',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  state = 'state',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "github_pull_request_review_state"
 */
export enum github_pull_request_review_state_constraint {
  PK_f0631334ebe1f339dd44cf57ff1 = 'PK_f0631334ebe1f339dd44cf57ff1',
}

/**
 * update columns of table "github_pull_request_review_state"
 */
export enum github_pull_request_review_state_update_column {
  description = 'description',
  id = 'id',
}

/**
 * unique or primary key constraints on table "github_pull_request_review_threads"
 */
export enum github_pull_request_review_threads_constraint {
  PK_cdebd98d58d506f3803f84f5861 = 'PK_cdebd98d58d506f3803f84f5861',
  UQ_7bdbf6993ec3199429c6981c25b = 'UQ_7bdbf6993ec3199429c6981c25b',
}

/**
 * update columns of table "github_pull_request_review_threads"
 */
export enum github_pull_request_review_threads_update_column {
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  isResolved = 'isResolved',
  pullRequestSid = 'pullRequestSid',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "github_pull_request_reviewers"
 */
export enum github_pull_request_reviewers_constraint {
  PK_13fb41ff2ab12e6c5c01b64a62a = 'PK_13fb41ff2ab12e6c5c01b64a62a',
}

/**
 * update columns of table "github_pull_request_reviewers"
 */
export enum github_pull_request_reviewers_update_column {
  accountLogin = 'accountLogin',
  pullRequestSid = 'pullRequestSid',
}

/**
 * unique or primary key constraints on table "github_pull_request_reviews"
 */
export enum github_pull_request_reviews_constraint {
  PK_58d77da3cd072a6f6ace0d63782 = 'PK_58d77da3cd072a6f6ace0d63782',
  UQ_f5850d41daf1f04a4fa3aeb3ba9 = 'UQ_f5850d41daf1f04a4fa3aeb3ba9',
}

/**
 * update columns of table "github_pull_request_reviews"
 */
export enum github_pull_request_reviews_update_column {
  authorLogin = 'authorLogin',
  body = 'body',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  pullRequestSid = 'pullRequestSid',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  state = 'state',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "github_pull_request_state"
 */
export enum github_pull_request_state_constraint {
  PK_f59ae40bc137d0a1a7ece15a2c4 = 'PK_f59ae40bc137d0a1a7ece15a2c4',
}

export enum github_pull_request_state_enum {
  CLOSED = 'CLOSED',
  MERGED = 'MERGED',
  OPEN = 'OPEN',
}

/**
 * update columns of table "github_pull_request_state"
 */
export enum github_pull_request_state_update_column {
  description = 'description',
  id = 'id',
}

/**
 * unique or primary key constraints on table "github_pull_requests"
 */
export enum github_pull_requests_constraint {
  PK_cdbb22e2ee279ee7ae180b27994 = 'PK_cdbb22e2ee279ee7ae180b27994',
  UQ_9cb13c632ee9fb0dc6b340bceab = 'UQ_9cb13c632ee9fb0dc6b340bceab',
}

/**
 * update columns of table "github_pull_requests"
 */
export enum github_pull_requests_update_column {
  authorLogin = 'authorLogin',
  baseBranchSid = 'baseBranchSid',
  body = 'body',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  expiresInType = 'expiresInType',
  id = 'id',
  isDraft = 'isDraft',
  isForked = 'isForked',
  isMerged = 'isMerged',
  isOutdated = 'isOutdated',
  mergeable = 'mergeable',
  mergedAt = 'mergedAt',
  redundantFields = 'redundantFields',
  repoSid = 'repoSid',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  state = 'state',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  targetBranchSid = 'targetBranchSid',
  title = 'title',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "github_repo_users"
 */
export enum github_repo_users_constraint {
  PK_dd51e65229258cbabd8ff30edf9 = 'PK_dd51e65229258cbabd8ff30edf9',
}

/**
 * update columns of table "github_repo_users"
 */
export enum github_repo_users_update_column {
  accountLogin = 'accountLogin',
  repoSid = 'repoSid',
}

/**
 * unique or primary key constraints on table "github_repos"
 */
export enum github_repos_constraint {
  PK_30cf92866ef493943da404df6a4 = 'PK_30cf92866ef493943da404df6a4',
  UQ_980e72bdc6b2b8cc1b40b558d7e = 'UQ_980e72bdc6b2b8cc1b40b558d7e',
}

/**
 * update columns of table "github_repos"
 */
export enum github_repos_update_column {
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  description = 'description',
  expiresInType = 'expiresInType',
  id = 'id',
  isArchived = 'isArchived',
  isDisabled = 'isDisabled',
  isFork = 'isFork',
  isForked = 'isForked',
  isLocked = 'isLocked',
  isOutdated = 'isOutdated',
  isPrivate = 'isPrivate',
  isTemplate = 'isTemplate',
  name = 'name',
  ownerLogin = 'ownerLogin',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "github_tokens"
 */
export enum github_tokens_constraint {
  PK_0954e87a291e2cf59399fcad34f = 'PK_0954e87a291e2cf59399fcad34f',
  UQ_8fd68352639d55c808e18f8548d = 'UQ_8fd68352639d55c808e18f8548d',
}

/**
 * update columns of table "github_tokens"
 */
export enum github_tokens_update_column {
  createdAt = 'createdAt',
  id = 'id',
  limit = 'limit',
  remaining = 'remaining',
  resetAt = 'resetAt',
  token = 'token',
  updatedAt = 'updatedAt',
}

/**
 * unique or primary key constraints on table "job_intervals"
 */
export enum job_intervals_constraint {
  PK_37d96f6dc9406fa7351efe2a359 = 'PK_37d96f6dc9406fa7351efe2a359',
}

export enum job_intervals_enum {
  day = 'day',
  hr = 'hr',
  min = 'min',
  never = 'never',
  week = 'week',
}

/**
 * update columns of table "job_intervals"
 */
export enum job_intervals_update_column {
  description = 'description',
  type = 'type',
}

/**
 * unique or primary key constraints on table "meeting_user_emails"
 */
export enum meeting_user_emails_constraint {
  PK_5e7b29729e34f618942e35885c9 = 'PK_5e7b29729e34f618942e35885c9',
}

/**
 * update columns of table "meeting_user_emails"
 */
export enum meeting_user_emails_update_column {
  email = 'email',
  meetingId = 'meetingId',
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

/**
 * unique or primary key constraints on table "optional_technologies"
 */
export enum optional_technologies_constraint {
  PK_39b7ac1812c60faf9b9c9e5249f = 'PK_39b7ac1812c60faf9b9c9e5249f',
}

/**
 * update columns of table "optional_technologies"
 */
export enum optional_technologies_update_column {
  clientJobsId = 'clientJobsId',
  technologiesId = 'technologiesId',
}

/**
 * unique or primary key constraints on table "qualified_agencies"
 */
export enum qualified_agencies_constraint {
  PK_0e326f9283cdac352e0e30229c2 = 'PK_0e326f9283cdac352e0e30229c2',
}

/**
 * update columns of table "qualified_agencies"
 */
export enum qualified_agencies_update_column {
  agenciesId = 'agenciesId',
  clientsId = 'clientsId',
}

/**
 * unique or primary key constraints on table "qualified_technologies"
 */
export enum qualified_technologies_constraint {
  PK_b5b74f57dc32f2cc67212b6b3da = 'PK_b5b74f57dc32f2cc67212b6b3da',
}

/**
 * update columns of table "qualified_technologies"
 */
export enum qualified_technologies_update_column {
  clientJobsId = 'clientJobsId',
  technologiesId = 'technologiesId',
}

/**
 * unique or primary key constraints on table "recruiter_agencies"
 */
export enum recruiter_agencies_constraint {
  PK_dd3bc60e37f316e6f2027aa4ffa = 'PK_dd3bc60e37f316e6f2027aa4ffa',
}

/**
 * update columns of table "recruiter_agencies"
 */
export enum recruiter_agencies_update_column {
  agency_id = 'agency_id',
  recruiter_agency_id = 'recruiter_agency_id',
}

/**
 * unique or primary key constraints on table "rippling_companies"
 */
export enum rippling_companies_constraint {
  PK_fb2de1a997f4fb8f2693bcaf4aa = 'PK_fb2de1a997f4fb8f2693bcaf4aa',
  UQ_6bdd91e2c2dfc60fee0be276867 = 'UQ_6bdd91e2c2dfc60fee0be276867',
  UQ_a724852d37e63f6844a6628d77a = 'UQ_a724852d37e63f6844a6628d77a',
  UQ_e18b4cac119a7eec15e31a8ed6d = 'UQ_e18b4cac119a7eec15e31a8ed6d',
}

/**
 * update columns of table "rippling_companies"
 */
export enum rippling_companies_update_column {
  accessToken = 'accessToken',
  address = 'address',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  ein = 'ein',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  name = 'name',
  payroll_settings = 'payroll_settings',
  phone = 'phone',
  primaryEmail = 'primaryEmail',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  tax_info = 'tax_info',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
  workLocations = 'workLocations',
}

/**
 * unique or primary key constraints on table "rippling_company_tokens"
 */
export enum rippling_company_tokens_constraint {
  PK_c411be49410a93e600dc33398f3 = 'PK_c411be49410a93e600dc33398f3',
  UQ_030bd494d4312b43e50598b0e1d = 'UQ_030bd494d4312b43e50598b0e1d',
}

/**
 * update columns of table "rippling_company_tokens"
 */
export enum rippling_company_tokens_update_column {
  accessToken = 'accessToken',
  companySid = 'companySid',
}

/**
 * unique or primary key constraints on table "rippling_employees"
 */
export enum rippling_employees_constraint {
  PK_b203d5eaf8a11befc22ba521314 = 'PK_b203d5eaf8a11befc22ba521314',
  UQ_c0d7e27367533b1d4fed64e2d13 = 'UQ_c0d7e27367533b1d4fed64e2d13',
}

/**
 * update columns of table "rippling_employees"
 */
export enum rippling_employees_update_column {
  address = 'address',
  companySid = 'companySid',
  compensationAnnualSalary = 'compensationAnnualSalary',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  customFields = 'customFields',
  department = 'department',
  dob = 'dob',
  employmentType = 'employmentType',
  endDate = 'endDate',
  expiresInType = 'expiresInType',
  filingStatus = 'filingStatus',
  firstName = 'firstName',
  flsaStatus = 'flsaStatus',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  lastName = 'lastName',
  managerSid = 'managerSid',
  name = 'name',
  personalEmail = 'personalEmail',
  phone = 'phone',
  redundantFields = 'redundantFields',
  roleState = 'roleState',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  ssn = 'ssn',
  startDate = 'startDate',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  title = 'title',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
  workEmail = 'workEmail',
  workLocation = 'workLocation',
}

/**
 * unique or primary key constraints on table "rippling_payroll_earning_types"
 */
export enum rippling_payroll_earning_types_constraint {
  PK_3f3f34fcb283179b28b962a26a6 = 'PK_3f3f34fcb283179b28b962a26a6',
  UQ_49e90476443b36a9ea0d876fd91 = 'UQ_49e90476443b36a9ea0d876fd91',
}

/**
 * update columns of table "rippling_payroll_earning_types"
 */
export enum rippling_payroll_earning_types_update_column {
  companySid = 'companySid',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  earningType = 'earningType',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  name = 'name',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "rippling_payroll_run_details"
 */
export enum rippling_payroll_run_details_constraint {
  PK_43839cfd90958cddadf58a6de92 = 'PK_43839cfd90958cddadf58a6de92',
  UQ_e8a24cfab99dddcebafd015848f = 'UQ_e8a24cfab99dddcebafd015848f',
}

/**
 * update columns of table "rippling_payroll_run_details"
 */
export enum rippling_payroll_run_details_update_column {
  companySid = 'companySid',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  deductions = 'deductions',
  employeeSid = 'employeeSid',
  expiresInType = 'expiresInType',
  garnishments = 'garnishments',
  grossPay = 'grossPay',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  netPay = 'netPay',
  redundantFields = 'redundantFields',
  runSid = 'runSid',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  taxes = 'taxes',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "rippling_payroll_run_earnings"
 */
export enum rippling_payroll_run_earnings_constraint {
  PK_b20f02d7704b262dae0aab4661c = 'PK_b20f02d7704b262dae0aab4661c',
  UQ_011142858f8455b8203b952f457 = 'UQ_011142858f8455b8203b952f457',
}

/**
 * update columns of table "rippling_payroll_run_earnings"
 */
export enum rippling_payroll_run_earnings_update_column {
  amount = 'amount',
  companySid = 'companySid',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  employeeSid = 'employeeSid',
  expiresInType = 'expiresInType',
  hours = 'hours',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  name = 'name',
  payrollRunDetailsSid = 'payrollRunDetailsSid',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "rippling_payroll_run_states"
 */
export enum rippling_payroll_run_states_constraint {
  PK_4b0d065e9e655b8025f0c95af31 = 'PK_4b0d065e9e655b8025f0c95af31',
}

export enum rippling_payroll_run_states_enum {
  APPROVED = 'APPROVED',
  CLOSED = 'CLOSED',
  DRAFT = 'DRAFT',
  FAILED = 'FAILED',
  PAID = 'PAID',
}

/**
 * update columns of table "rippling_payroll_run_states"
 */
export enum rippling_payroll_run_states_update_column {
  description = 'description',
  id = 'id',
}

/**
 * unique or primary key constraints on table "rippling_payroll_runs"
 */
export enum rippling_payroll_runs_constraint {
  PK_5a8b44f4d1f5d6bff8ee8810cde = 'PK_5a8b44f4d1f5d6bff8ee8810cde',
  UQ_2120bd635afa7b97a8363cda89f = 'UQ_2120bd635afa7b97a8363cda89f',
}

/**
 * update columns of table "rippling_payroll_runs"
 */
export enum rippling_payroll_runs_update_column {
  approvalDeadline = 'approvalDeadline',
  checkDate = 'checkDate',
  companySid = 'companySid',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  name = 'name',
  payPeriodEndDate = 'payPeriodEndDate',
  payPeriodStartDate = 'payPeriodStartDate',
  redundantFields = 'redundantFields',
  runStateId = 'runStateId',
  runType = 'runType',
  scheduleSid = 'scheduleSid',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "rippling_payroll_schedules"
 */
export enum rippling_payroll_schedules_constraint {
  PK_a275460d91a9d9994e4728fa86e = 'PK_a275460d91a9d9994e4728fa86e',
  UQ_b670f37f1e878c6b09eedae68c0 = 'UQ_b670f37f1e878c6b09eedae68c0',
}

/**
 * update columns of table "rippling_payroll_schedules"
 */
export enum rippling_payroll_schedules_update_column {
  companySid = 'companySid',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  name = 'name',
  payFrequency = 'payFrequency',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "skilltrack_types"
 */
export enum skilltrack_types_constraint {
  PK_9002cb6a6e253d565a0b898b349 = 'PK_9002cb6a6e253d565a0b898b349',
}

export enum skilltrack_types_enum {
  client_manager = 'client_manager',
  hacker = 'hacker',
  tech_lead = 'tech_lead',
}

/**
 * update columns of table "skilltrack_types"
 */
export enum skilltrack_types_update_column {
  description = 'description',
  type = 'type',
}

/**
 * unique or primary key constraints on table "task_client_blockers"
 */
export enum task_client_blockers_constraint {
  PK_f314fcd6eddf7ff5e2d518a12ce = 'PK_f314fcd6eddf7ff5e2d518a12ce',
}

/**
 * update columns of table "task_client_blockers"
 */
export enum task_client_blockers_update_column {
  clientBlockersId = 'clientBlockersId',
  tasksId = 'tasksId',
}

/**
 * unique or primary key constraints on table "task_code_comments"
 */
export enum task_code_comments_constraint {
  PK_c24cd84f0bbecaa854bce025c4f = 'PK_c24cd84f0bbecaa854bce025c4f',
}

/**
 * update columns of table "task_code_comments"
 */
export enum task_code_comments_update_column {
  authorId = 'authorId',
  body = 'body',
  commitId = 'commitId',
  createdAt = 'createdAt',
  diffHunk = 'diffHunk',
  externalCommentUrl = 'externalCommentUrl',
  id = 'id',
  internalCommentUrl = 'internalCommentUrl',
  lastSync = 'lastSync',
  path = 'path',
  shouldPublish = 'shouldPublish',
  shouldSync = 'shouldSync',
  updatedAt = 'updatedAt',
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
 * unique or primary key constraints on table "task_dependencies"
 */
export enum task_dependencies_constraint {
  PK_e170aaca0ff8395af61da9be224 = 'PK_e170aaca0ff8395af61da9be224',
}

/**
 * update columns of table "task_dependencies"
 */
export enum task_dependencies_update_column {
  tasksId_1 = 'tasksId_1',
  tasksId_2 = 'tasksId_2',
}

/**
 * unique or primary key constraints on table "task_followers"
 */
export enum task_followers_constraint {
  PK_e147d6664e35da3cbf11300047d = 'PK_e147d6664e35da3cbf11300047d',
}

/**
 * update columns of table "task_followers"
 */
export enum task_followers_update_column {
  tasksId_1 = 'tasksId_1',
  tasksId_2 = 'tasksId_2',
}

/**
 * unique or primary key constraints on table "task_pull_requests"
 */
export enum task_pull_requests_constraint {
  PK_f883f93b7e3647369b9a17da156 = 'PK_f883f93b7e3647369b9a17da156',
}

/**
 * update columns of table "task_pull_requests"
 */
export enum task_pull_requests_update_column {
  pullRequestSid = 'pullRequestSid',
  taskId = 'taskId',
}

/**
 * unique or primary key constraints on table "task_reviews"
 */
export enum task_reviews_constraint {
  PK_0e1b45486945f89aee4136b318f = 'PK_0e1b45486945f89aee4136b318f',
}

/**
 * unique or primary key constraints on table "task_reviews_status"
 */
export enum task_reviews_status_constraint {
  PK_d829c3835a997717dc8bf8bcf57 = 'PK_d829c3835a997717dc8bf8bcf57',
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
 * update columns of table "task_reviews_status"
 */
export enum task_reviews_status_update_column {
  description = 'description',
  type = 'type',
}

/**
 * update columns of table "task_reviews"
 */
export enum task_reviews_update_column {
  approvesTaskId = 'approvesTaskId',
  completedAt = 'completedAt',
  costInUSD = 'costInUSD',
  createdAt = 'createdAt',
  developerId = 'developerId',
  id = 'id',
  managerId = 'managerId',
  managerInvoiceId = 'managerInvoiceId',
  reviewerInvoiceId = 'reviewerInvoiceId',
  startedAt = 'startedAt',
  status = 'status',
  updatedAt = 'updatedAt',
}

/**
 * unique or primary key constraints on table "task_submission"
 */
export enum task_submission_constraint {
  PK_f6a1c74cc8b9347e916d516f2c0 = 'PK_f6a1c74cc8b9347e916d516f2c0',
}

/**
 * update columns of table "task_submission"
 */
export enum task_submission_update_column {
  createdAt = 'createdAt',
  gcpObjectId = 'gcpObjectId',
  id = 'id',
  taskId = 'taskId',
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
 * unique or primary key constraints on table "task_time_logs"
 */
export enum task_time_logs_constraint {
  PK_785b74bf0fb2dc79de82f73e7b6 = 'PK_785b74bf0fb2dc79de82f73e7b6',
  UQ_27f303bea36720f3e4ebd4dd71c = 'UQ_27f303bea36720f3e4ebd4dd71c',
  UQ_86d84d06e0fffcf20ddc7d807e8 = 'UQ_86d84d06e0fffcf20ddc7d807e8',
}

/**
 * update columns of table "task_time_logs"
 */
export enum task_time_logs_update_column {
  CreatedDateColumn = 'CreatedDateColumn',
  UpdateDateColumn = 'UpdateDateColumn',
  developerId = 'developerId',
  finishedAt = 'finishedAt',
  id = 'id',
  startedAt = 'startedAt',
  taskId = 'taskId',
  timeSpent = 'timeSpent',
  timedoctorTaskId = 'timedoctorTaskId',
}

/**
 * unique or primary key constraints on table "task_work"
 */
export enum task_work_constraint {
  PK_e91316aba5c0fa394f53cd94bf4 = 'PK_e91316aba5c0fa394f53cd94bf4',
}

/**
 * unique or primary key constraints on table "task_work_status"
 */
export enum task_work_status_constraint {
  PK_e5fc9c89aa415ff45d4d6194e2d = 'PK_e5fc9c89aa415ff45d4d6194e2d',
}

export enum task_work_status_enum {
  assigned = 'assigned',
  available = 'available',
  finished = 'finished',
  in_progress = 'in_progress',
}

/**
 * update columns of table "task_work_status"
 */
export enum task_work_status_update_column {
  description = 'description',
  type = 'type',
}

/**
 * update columns of table "task_work"
 */
export enum task_work_update_column {
  completedAt = 'completedAt',
  costInUSD = 'costInUSD',
  createdAt = 'createdAt',
  developerId = 'developerId',
  id = 'id',
  managerId = 'managerId',
  managerInvoiceId = 'managerInvoiceId',
  resourceURL = 'resourceURL',
  startedAt = 'startedAt',
  status = 'status',
  updatedAt = 'updatedAt',
  workerInvoiceId = 'workerInvoiceId',
}

/**
 * unique or primary key constraints on table "tasks"
 */
export enum tasks_constraint {
  PK_8d12ff38fcc62aaba2cab748772 = 'PK_8d12ff38fcc62aaba2cab748772',
  tasks_id_key = 'tasks_id_key',
}

/**
 * unique or primary key constraints on table "tasks_status"
 */
export enum tasks_status_constraint {
  PK_f0ef6c949d1b7400522d71aa5dd = 'PK_f0ef6c949d1b7400522d71aa5dd',
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

/**
 * update columns of table "tasks_status"
 */
export enum tasks_status_update_column {
  description = 'description',
  type = 'type',
}

/**
 * unique or primary key constraints on table "tasks_type"
 */
export enum tasks_type_constraint {
  PK_029f732cbcf396b164467f4a0fb = 'PK_029f732cbcf396b164467f4a0fb',
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
 * update columns of table "tasks_type"
 */
export enum tasks_type_update_column {
  description = 'description',
  type = 'type',
}

/**
 * update columns of table "tasks"
 */
export enum tasks_update_column {
  baseBranchId = 'baseBranchId',
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
  developerInvoiceId = 'developerInvoiceId',
  duplicateOfTaskId = 'duplicateOfTaskId',
  id = 'id',
  isBillable = 'isBillable',
  managerId = 'managerId',
  managerInvoiceId = 'managerInvoiceId',
  maxDuplicateLimit = 'maxDuplicateLimit',
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
 * unique or primary key constraints on table "technologies"
 */
export enum technologies_constraint {
  PK_9a97465b79568f00becacdd4e4a = 'PK_9a97465b79568f00becacdd4e4a',
  UQ_46800813f460eb131823371caee = 'UQ_46800813f460eb131823371caee',
}

/**
 * update columns of table "technologies"
 */
export enum technologies_update_column {
  id = 'id',
  name = 'name',
}

/**
 * unique or primary key constraints on table "ticket_client_blockers"
 */
export enum ticket_client_blockers_constraint {
  PK_f589a1ee438c15a9e5e5cf01e8d = 'PK_f589a1ee438c15a9e5e5cf01e8d',
}

/**
 * update columns of table "ticket_client_blockers"
 */
export enum ticket_client_blockers_update_column {
  clientBlockersId = 'clientBlockersId',
  ticketsId = 'ticketsId',
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
  cancelledAt = 'cancelledAt',
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
 * unique or primary key constraints on table "timedoctor_bots"
 */
export enum timedoctor_bots_constraint {
  PK_9ab4c35bd4a22d5e16b0523f6c9 = 'PK_9ab4c35bd4a22d5e16b0523f6c9',
  UQ_bf119ec27a5c199daf62fbdbef4 = 'UQ_bf119ec27a5c199daf62fbdbef4',
}

/**
 * update columns of table "timedoctor_bots"
 */
export enum timedoctor_bots_update_column {
  accessToken = 'accessToken',
  accessTokenCreatedAt = 'accessTokenCreatedAt',
  agencyId = 'agencyId',
  clientKey = 'clientKey',
  clientSecret = 'clientSecret',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  redundantFields = 'redundantFields',
  refreshToken = 'refreshToken',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "timedoctor_companies"
 */
export enum timedoctor_companies_constraint {
  PK_377bc127ba8700f5ec4b52bc3d3 = 'PK_377bc127ba8700f5ec4b52bc3d3',
  UQ_6b50bb3f1f1d7834eeeed924198 = 'UQ_6b50bb3f1f1d7834eeeed924198',
}

/**
 * update columns of table "timedoctor_companies"
 */
export enum timedoctor_companies_update_column {
  botSid = 'botSid',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  name = 'name',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "timedoctor_project_users"
 */
export enum timedoctor_project_users_constraint {
  PK_83b0b4ae6f5febcfa9c263f5e43 = 'PK_83b0b4ae6f5febcfa9c263f5e43',
}

/**
 * update columns of table "timedoctor_project_users"
 */
export enum timedoctor_project_users_update_column {
  projectSid = 'projectSid',
  userSid = 'userSid',
}

/**
 * unique or primary key constraints on table "timedoctor_projects"
 */
export enum timedoctor_projects_constraint {
  PK_2be46159847765f4beb167a2067 = 'PK_2be46159847765f4beb167a2067',
  UQ_3e63e2ad5e8d2f03e04709bb69f = 'UQ_3e63e2ad5e8d2f03e04709bb69f',
}

/**
 * update columns of table "timedoctor_projects"
 */
export enum timedoctor_projects_update_column {
  archived = 'archived',
  companySid = 'companySid',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  name = 'name',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "timedoctor_task_status"
 */
export enum timedoctor_task_status_constraint {
  PK_af140ca6e70873bfc0acd0ddfe3 = 'PK_af140ca6e70873bfc0acd0ddfe3',
}

export enum timedoctor_task_status_enum {
  active = 'active',
  complete = 'complete',
  inactive = 'inactive',
}

/**
 * update columns of table "timedoctor_task_status"
 */
export enum timedoctor_task_status_update_column {
  description = 'description',
  id = 'id',
}

/**
 * unique or primary key constraints on table "timedoctor_task_worklogs"
 */
export enum timedoctor_task_worklogs_constraint {
  PK_46533b3b06549de560e64022676 = 'PK_46533b3b06549de560e64022676',
  UQ_56f8fdef28f1797ac1b9935b375 = 'UQ_56f8fdef28f1797ac1b9935b375',
}

/**
 * update columns of table "timedoctor_task_worklogs"
 */
export enum timedoctor_task_worklogs_update_column {
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  edited = 'edited',
  expiresInType = 'expiresInType',
  finishedAt = 'finishedAt',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  startedAt = 'startedAt',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  taskSid = 'taskSid',
  timeSpendInSecs = 'timeSpendInSecs',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  userSid = 'userSid',
  weight = 'weight',
  workMode = 'workMode',
}

/**
 * unique or primary key constraints on table "timedoctor_tasks"
 */
export enum timedoctor_tasks_constraint {
  PK_f8795a0030fcda971088dcb41ea = 'PK_f8795a0030fcda971088dcb41ea',
  UQ_abb9af2d6f396d2995965fda86a = 'UQ_abb9af2d6f396d2995965fda86a',
}

/**
 * update columns of table "timedoctor_tasks"
 */
export enum timedoctor_tasks_update_column {
  clientId = 'clientId',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  statusId = 'statusId',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  taskId = 'taskId',
  taskWorkId = 'taskWorkId',
  ticketId = 'ticketId',
  timeSpent = 'timeSpent',
  title = 'title',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  userSid = 'userSid',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "timedoctor_users"
 */
export enum timedoctor_users_constraint {
  PK_d5ed2f05bb3cd9042ef4f8f4ad9 = 'PK_d5ed2f05bb3cd9042ef4f8f4ad9',
  UQ_ac459c59cd2927be81cd9d38d87 = 'UQ_ac459c59cd2927be81cd9d38d87',
  UQ_aef5234a1a561e49f85ac905c82 = 'UQ_aef5234a1a561e49f85ac905c82',
}

/**
 * update columns of table "timedoctor_users"
 */
export enum timedoctor_users_update_column {
  companySid = 'companySid',
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  email = 'email',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
}

/**
 * unique or primary key constraints on table "user_contracts"
 */
export enum user_contracts_constraint {
  PK_064bcba7cf7716121d842eaty5y = 'PK_064bcba7cf7716121d842eaty5y',
}

/**
 * update columns of table "user_contracts"
 */
export enum user_contracts_update_column {
  amountPerWeek = 'amountPerWeek',
  endDate = 'endDate',
  hoursPerWeek = 'hoursPerWeek',
  id = 'id',
  startDate = 'startDate',
  title = 'title',
  url = 'url',
  userLogin = 'userLogin',
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
  email = 'email',
  userId = 'userId',
  verified = 'verified',
}

/**
 * unique or primary key constraints on table "user_invoice_status"
 */
export enum user_invoice_status_constraint {
  PK_e2ee5a78850f6a80ba963c12dd0 = 'PK_e2ee5a78850f6a80ba963c12dd0',
}

export enum user_invoice_status_enum {
  complete = 'complete',
  draft = 'draft',
}

/**
 * update columns of table "user_invoice_status"
 */
export enum user_invoice_status_update_column {
  description = 'description',
  id = 'id',
}

/**
 * unique or primary key constraints on table "user_invoices"
 */
export enum user_invoices_constraint {
  PK_cedd26761ec7d6a0772be9f8289 = 'PK_cedd26761ec7d6a0772be9f8289',
  UQ_SINGLE_DRAFT_USER_INVOICE = 'UQ_SINGLE_DRAFT_USER_INVOICE',
}

/**
 * update columns of table "user_invoices"
 */
export enum user_invoices_update_column {
  adjustedCostInUSD = 'adjustedCostInUSD',
  costInUSD = 'costInUSD',
  createdAt = 'createdAt',
  dueAt = 'dueAt',
  endAt = 'endAt',
  id = 'id',
  invoiceCode = 'invoiceCode',
  paidByAgencyInvoiceId = 'paidByAgencyInvoiceId',
  startAt = 'startAt',
  status = 'status',
  updatedAt = 'updatedAt',
  userId = 'userId',
}

/**
 * unique or primary key constraints on table "user_onboarded_repos"
 */
export enum user_onboarded_repos_constraint {
  PK_8ba14f82badaac977ded334a04f = 'PK_8ba14f82badaac977ded334a04f',
  REL_21322bd0c5039ce884822fad5d = 'REL_21322bd0c5039ce884822fad5d',
}

/**
 * update columns of table "user_onboarded_repos"
 */
export enum user_onboarded_repos_update_column {
  createdAt = 'createdAt',
  id = 'id',
  login = 'login',
  repoId = 'repoId',
  updatedAt = 'updatedAt',
}

/**
 * unique or primary key constraints on table "user_payment_status"
 */
export enum user_payment_status_constraint {
  PK_c33d515e570af32c25f63e1b79f = 'PK_c33d515e570af32c25f63e1b79f',
}

export enum user_payment_status_enum {
  failed = 'failed',
  in_progress = 'in_progress',
  pending = 'pending',
  successful = 'successful',
}

/**
 * update columns of table "user_payment_status"
 */
export enum user_payment_status_update_column {
  description = 'description',
  id = 'id',
}

/**
 * unique or primary key constraints on table "user_payment_types"
 */
export enum user_payment_types_constraint {
  PK_c723f67490f86674c428bec1c2d = 'PK_c723f67490f86674c428bec1c2d',
}

export enum user_payment_types_enum {
  payoneer = 'payoneer',
  paypal = 'paypal',
  rippling = 'rippling',
  transferwise = 'transferwise',
}

/**
 * update columns of table "user_payment_types"
 */
export enum user_payment_types_update_column {
  description = 'description',
  id = 'id',
}

/**
 * unique or primary key constraints on table "user_payments"
 */
export enum user_payments_constraint {
  PK_d4cd725874e6403f6a8f774cdad = 'PK_d4cd725874e6403f6a8f774cdad',
  UQ_0d9ce2f90f8d58a69814e41b6e3 = 'UQ_0d9ce2f90f8d58a69814e41b6e3',
  UQ_893093c647efa86a0b961eeb986 = 'UQ_893093c647efa86a0b961eeb986',
}

/**
 * update columns of table "user_payments"
 */
export enum user_payments_update_column {
  amountInUSD = 'amountInUSD',
  channelTransactionId = 'channelTransactionId',
  createdAt = 'createdAt',
  finishedAt = 'finishedAt',
  id = 'id',
  paymentType = 'paymentType',
  ripplingPayrollRunDetailsSid = 'ripplingPayrollRunDetailsSid',
  status = 'status',
  updatedAt = 'updatedAt',
  userLogin = 'userLogin',
}

/**
 * unique or primary key constraints on table "user_time_logs"
 */
export enum user_time_logs_constraint {
  PK_112b9e271f3eb39a9e347db07bb = 'PK_112b9e271f3eb39a9e347db07bb',
  REL_3732f4918d6ac19b25b2f3edcc = 'REL_3732f4918d6ac19b25b2f3edcc',
}

/**
 * update columns of table "user_time_logs"
 */
export enum user_time_logs_update_column {
  clientId = 'clientId',
  createdAt = 'createdAt',
  finishedAt = 'finishedAt',
  id = 'id',
  startedAt = 'startedAt',
  taskId = 'taskId',
  taskWorkId = 'taskWorkId',
  ticketId = 'ticketId',
  timeDoctorTaskLogSid = 'timeDoctorTaskLogSid',
  timeSpentInHours = 'timeSpentInHours',
  timeSpentInSecs = 'timeSpentInSecs',
  updatedAt = 'updatedAt',
  userInvoiceId = 'userInvoiceId',
  userLogin = 'userLogin',
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
  auth0Sid = 'auth0Sid',
  avatarUrl = 'avatarUrl',
  defaultEmail = 'defaultEmail',
  firstName = 'firstName',
  githubLogin = 'githubLogin',
  id = 'id',
  lastName = 'lastName',
  login = 'login',
  name = 'name',
  nickname = 'nickname',
  passwordHash = 'passwordHash',
  ripplingEmployeeId = 'ripplingEmployeeId',
  telephone = 'telephone',
  timeDoctorUserId = 'timeDoctorUserId',
  unverifiedEmail = 'unverifiedEmail',
}

/**
 * unique or primary key constraints on table "zoom_meeting_instance_participants"
 */
export enum zoom_meeting_instance_participants_constraint {
  PK_9fc201494c362d9bb3dec76804a = 'PK_9fc201494c362d9bb3dec76804a',
}

/**
 * update columns of table "zoom_meeting_instance_participants"
 */
export enum zoom_meeting_instance_participants_update_column {
  zoomMeetingInstanceSid = 'zoomMeetingInstanceSid',
  zoomUserSid = 'zoomUserSid',
}

/**
 * unique or primary key constraints on table "zoom_meeting_instances"
 */
export enum zoom_meeting_instances_constraint {
  PK_46e5099e55adfe858d12418f4b7 = 'PK_46e5099e55adfe858d12418f4b7',
  UQ_7f7c8678bd8ab78180d0d254364 = 'UQ_7f7c8678bd8ab78180d0d254364',
}

/**
 * update columns of table "zoom_meeting_instances"
 */
export enum zoom_meeting_instances_update_column {
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
  zoomMeetingSid = 'zoomMeetingSid',
}

/**
 * unique or primary key constraints on table "zoom_meetings"
 */
export enum zoom_meetings_constraint {
  PK_797522517ec01b068be1849260b = 'PK_797522517ec01b068be1849260b',
  UQ_2a4eeea7da39e8badd5bf859a10 = 'UQ_2a4eeea7da39e8badd5bf859a10',
}

/**
 * update columns of table "zoom_meetings"
 */
export enum zoom_meetings_update_column {
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  duration = 'duration',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  joinUrl = 'joinUrl',
  password = 'password',
  pmi = 'pmi',
  recurrenceEndDateTime = 'recurrenceEndDateTime',
  recurrenceEndTimes = 'recurrenceEndTimes',
  recurrenceMonthlyDay = 'recurrenceMonthlyDay',
  recurrenceMonthlyWeek = 'recurrenceMonthlyWeek',
  recurrenceMonthlyWeekDay = 'recurrenceMonthlyWeekDay',
  recurrenceRepeatInterval = 'recurrenceRepeatInterval',
  recurrenceType = 'recurrenceType',
  recurrenceWeeklyDays = 'recurrenceWeeklyDays',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  startTime = 'startTime',
  startUrl = 'startUrl',
  status = 'status',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  type = 'type',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
  zoomHostSid = 'zoomHostSid',
}

/**
 * unique or primary key constraints on table "zoom_recording_files"
 */
export enum zoom_recording_files_constraint {
  PK_e4a9c04dfb0aab09f063be911b2 = 'PK_e4a9c04dfb0aab09f063be911b2',
  UQ_d8f6fb9795bdd0eba074fa98015 = 'UQ_d8f6fb9795bdd0eba074fa98015',
}

/**
 * update columns of table "zoom_recording_files"
 */
export enum zoom_recording_files_update_column {
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  downloadUrl = 'downloadUrl',
  endTime = 'endTime',
  expiresInType = 'expiresInType',
  fileSize = 'fileSize',
  fileType = 'fileType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  playUrl = 'playUrl',
  recordingType = 'recordingType',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  startTime = 'startTime',
  status = 'status',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
  zoomMeetingSid = 'zoomMeetingSid',
  zoomRecordingSid = 'zoomRecordingSid',
}

/**
 * unique or primary key constraints on table "zoom_recordings"
 */
export enum zoom_recordings_constraint {
  PK_4c634c36ea3b1fdb72b1f067b36 = 'PK_4c634c36ea3b1fdb72b1f067b36',
  UQ_a31be2e1a32d790af701a37ea66 = 'UQ_a31be2e1a32d790af701a37ea66',
}

/**
 * update columns of table "zoom_recordings"
 */
export enum zoom_recordings_update_column {
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  duration = 'duration',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  startTime = 'startTime',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
  zoomMeetingInstanceSid = 'zoomMeetingInstanceSid',
  zoomMeetingSid = 'zoomMeetingSid',
}

/**
 * unique or primary key constraints on table "zoom_users"
 */
export enum zoom_users_constraint {
  PK_7b9a328c14db60e95171767561c = 'PK_7b9a328c14db60e95171767561c',
  REL_ddd269ee617750607f0cbef65b = 'REL_ddd269ee617750607f0cbef65b',
  UQ_e0dc7bf71fb8f63442cd44e23a2 = 'UQ_e0dc7bf71fb8f63442cd44e23a2',
}

/**
 * update columns of table "zoom_users"
 */
export enum zoom_users_update_column {
  createdAt = 'createdAt',
  createdAtSource = 'createdAtSource',
  email = 'email',
  expiresInType = 'expiresInType',
  id = 'id',
  isForked = 'isForked',
  isOutdated = 'isOutdated',
  redundantFields = 'redundantFields',
  shallow = 'shallow',
  shouldStartSyncAt = 'shouldStartSyncAt',
  sid = 'sid',
  sourceUrl = 'sourceUrl',
  syncError = 'syncError',
  syncStartedAt = 'syncStartedAt',
  syncTriggeredAt = 'syncTriggeredAt',
  syncedAt = 'syncedAt',
  updatedAt = 'updatedAt',
  updatedAtSource = 'updatedAtSource',
  weight = 'weight',
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
 * input type for inserting array relation for remote table "admin"
 */
export interface admin_arr_rel_insert_input {
  data: admin_insert_input[];
  on_conflict?: admin_on_conflict | null;
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
 * input type for inserting data into table "admin"
 */
export interface admin_insert_input {
  id?: string | null;
  user?: users_obj_rel_insert_input | null;
  userById?: users_obj_rel_insert_input | null;
  userId?: number | null;
  userLogin?: string | null;
}

/**
 * input type for inserting object relation for remote table "admin"
 */
export interface admin_obj_rel_insert_input {
  data: admin_insert_input;
  on_conflict?: admin_on_conflict | null;
}

/**
 * on conflict condition type for table "admin"
 */
export interface admin_on_conflict {
  constraint: admin_constraint;
  update_columns: admin_update_column[];
  where?: admin_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "agencies". All fields are combined with a logical 'AND'.
 */
export interface agencies_bool_exp {
  _and?: (agencies_bool_exp | null)[] | null;
  _not?: agencies_bool_exp | null;
  _or?: (agencies_bool_exp | null)[] | null;
  addressAddress?: jsonb_comparison_exp | null;
  agency_invoices?: agency_invoices_bool_exp | null;
  agency_payments?: agency_payments_bool_exp | null;
  agency_users?: agency_users_bool_exp | null;
  candidates?: candidates_bool_exp | null;
  clients?: clients_bool_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  git_users?: git_users_bool_exp | null;
  github_accounts?: github_accounts_bool_exp | null;
  github_owners?: github_owners_bool_exp | null;
  id?: String_comparison_exp | null;
  legalName?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
  qualified_agencies?: qualified_agencies_bool_exp | null;
  recruiterAgenciesByRecruiterAgencyId?: recruiter_agencies_bool_exp | null;
  recruiter_agencies?: recruiter_agencies_bool_exp | null;
  timedoctor_bots?: timedoctor_bots_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  userDomains?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "agencies"
 */
export interface agencies_insert_input {
  addressAddress?: hasura_jsonb | null;
  agency_invoices?: agency_invoices_arr_rel_insert_input | null;
  agency_payments?: agency_payments_arr_rel_insert_input | null;
  agency_users?: agency_users_arr_rel_insert_input | null;
  candidates?: candidates_arr_rel_insert_input | null;
  clients?: clients_arr_rel_insert_input | null;
  createdAt?: hasura_timestamptz | null;
  git_users?: git_users_arr_rel_insert_input | null;
  github_accounts?: github_accounts_arr_rel_insert_input | null;
  github_owners?: github_owners_arr_rel_insert_input | null;
  id?: string | null;
  legalName?: string | null;
  name?: string | null;
  qualified_agencies?: qualified_agencies_arr_rel_insert_input | null;
  recruiterAgenciesByRecruiterAgencyId?: recruiter_agencies_arr_rel_insert_input | null;
  recruiter_agencies?: recruiter_agencies_arr_rel_insert_input | null;
  timedoctor_bots?: timedoctor_bots_arr_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
  userDomains?: string | null;
}

/**
 * input type for inserting object relation for remote table "agencies"
 */
export interface agencies_obj_rel_insert_input {
  data: agencies_insert_input;
  on_conflict?: agencies_on_conflict | null;
}

/**
 * on conflict condition type for table "agencies"
 */
export interface agencies_on_conflict {
  constraint: agencies_constraint;
  update_columns: agencies_update_column[];
  where?: agencies_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "agency_invoice_status". All fields are combined with a logical 'AND'.
 */
export interface agency_invoice_status_bool_exp {
  _and?: (agency_invoice_status_bool_exp | null)[] | null;
  _not?: agency_invoice_status_bool_exp | null;
  _or?: (agency_invoice_status_bool_exp | null)[] | null;
  agency_invoices?: agency_invoices_bool_exp | null;
  description?: String_comparison_exp | null;
  id?: String_comparison_exp | null;
}

/**
 * expression to compare columns of type agency_invoice_status_enum. All fields are combined with logical 'AND'.
 */
export interface agency_invoice_status_enum_comparison_exp {
  _eq?: agency_invoice_status_enum | null;
  _in?: agency_invoice_status_enum[] | null;
  _is_null?: boolean | null;
  _neq?: agency_invoice_status_enum | null;
  _nin?: agency_invoice_status_enum[] | null;
}

/**
 * input type for inserting data into table "agency_invoice_status"
 */
export interface agency_invoice_status_insert_input {
  agency_invoices?: agency_invoices_arr_rel_insert_input | null;
  description?: string | null;
  id?: string | null;
}

/**
 * input type for inserting object relation for remote table "agency_invoice_status"
 */
export interface agency_invoice_status_obj_rel_insert_input {
  data: agency_invoice_status_insert_input;
  on_conflict?: agency_invoice_status_on_conflict | null;
}

/**
 * on conflict condition type for table "agency_invoice_status"
 */
export interface agency_invoice_status_on_conflict {
  constraint: agency_invoice_status_constraint;
  update_columns: agency_invoice_status_update_column[];
  where?: agency_invoice_status_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "agency_invoices"
 */
export interface agency_invoices_arr_rel_insert_input {
  data: agency_invoices_insert_input[];
  on_conflict?: agency_invoices_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "agency_invoices". All fields are combined with a logical 'AND'.
 */
export interface agency_invoices_bool_exp {
  _and?: (agency_invoices_bool_exp | null)[] | null;
  _not?: agency_invoices_bool_exp | null;
  _or?: (agency_invoices_bool_exp | null)[] | null;
  agency?: agencies_bool_exp | null;
  agencyId?: String_comparison_exp | null;
  agency_invoice_status?: agency_invoice_status_bool_exp | null;
  costInUSD?: Int_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  dueAt?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  invoiceCode?: String_comparison_exp | null;
  status?: agency_invoice_status_enum_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  user_invoices?: user_invoices_bool_exp | null;
}

/**
 * input type for inserting data into table "agency_invoices"
 */
export interface agency_invoices_insert_input {
  agency?: agencies_obj_rel_insert_input | null;
  agencyId?: string | null;
  agency_invoice_status?: agency_invoice_status_obj_rel_insert_input | null;
  costInUSD?: number | null;
  createdAt?: hasura_timestamptz | null;
  dueAt?: hasura_timestamptz | null;
  id?: number | null;
  invoiceCode?: string | null;
  status?: agency_invoice_status_enum | null;
  updatedAt?: hasura_timestamptz | null;
  user_invoices?: user_invoices_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "agency_invoices"
 */
export interface agency_invoices_obj_rel_insert_input {
  data: agency_invoices_insert_input;
  on_conflict?: agency_invoices_on_conflict | null;
}

/**
 * on conflict condition type for table "agency_invoices"
 */
export interface agency_invoices_on_conflict {
  constraint: agency_invoices_constraint;
  update_columns: agency_invoices_update_column[];
  where?: agency_invoices_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "agency_payment_types". All fields are combined with a logical 'AND'.
 */
export interface agency_payment_types_bool_exp {
  _and?: (agency_payment_types_bool_exp | null)[] | null;
  _not?: agency_payment_types_bool_exp | null;
  _or?: (agency_payment_types_bool_exp | null)[] | null;
  agency_payments?: agency_payments_bool_exp | null;
  description?: String_comparison_exp | null;
  id?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "agency_payment_types"
 */
export interface agency_payment_types_insert_input {
  agency_payments?: agency_payments_arr_rel_insert_input | null;
  description?: string | null;
  id?: string | null;
}

/**
 * input type for inserting object relation for remote table "agency_payment_types"
 */
export interface agency_payment_types_obj_rel_insert_input {
  data: agency_payment_types_insert_input;
  on_conflict?: agency_payment_types_on_conflict | null;
}

/**
 * on conflict condition type for table "agency_payment_types"
 */
export interface agency_payment_types_on_conflict {
  constraint: agency_payment_types_constraint;
  update_columns: agency_payment_types_update_column[];
  where?: agency_payment_types_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "agency_payments"
 */
export interface agency_payments_arr_rel_insert_input {
  data: agency_payments_insert_input[];
  on_conflict?: agency_payments_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "agency_payments". All fields are combined with a logical 'AND'.
 */
export interface agency_payments_bool_exp {
  _and?: (agency_payments_bool_exp | null)[] | null;
  _not?: agency_payments_bool_exp | null;
  _or?: (agency_payments_bool_exp | null)[] | null;
  agency?: agencies_bool_exp | null;
  agencyId?: String_comparison_exp | null;
  agency_payment_type?: agency_payment_types_bool_exp | null;
  agency_payments_status?: agency_payments_status_bool_exp | null;
  amountInUSD?: float8_comparison_exp | null;
  channelTransactionId?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  finishedAt?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  paymentType?: String_comparison_exp | null;
  status?: agency_payments_status_enum_comparison_exp | null;
}

/**
 * input type for inserting data into table "agency_payments"
 */
export interface agency_payments_insert_input {
  agency?: agencies_obj_rel_insert_input | null;
  agencyId?: string | null;
  agency_payment_type?: agency_payment_types_obj_rel_insert_input | null;
  agency_payments_status?: agency_payments_status_obj_rel_insert_input | null;
  amountInUSD?: hasura_float8 | null;
  channelTransactionId?: string | null;
  createdAt?: hasura_timestamptz | null;
  finishedAt?: hasura_timestamptz | null;
  id?: number | null;
  paymentType?: string | null;
  status?: agency_payments_status_enum | null;
}

/**
 * on conflict condition type for table "agency_payments"
 */
export interface agency_payments_on_conflict {
  constraint: agency_payments_constraint;
  update_columns: agency_payments_update_column[];
  where?: agency_payments_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "agency_payments_status". All fields are combined with a logical 'AND'.
 */
export interface agency_payments_status_bool_exp {
  _and?: (agency_payments_status_bool_exp | null)[] | null;
  _not?: agency_payments_status_bool_exp | null;
  _or?: (agency_payments_status_bool_exp | null)[] | null;
  agency_payments?: agency_payments_bool_exp | null;
  description?: String_comparison_exp | null;
  id?: String_comparison_exp | null;
}

/**
 * expression to compare columns of type agency_payments_status_enum. All fields are combined with logical 'AND'.
 */
export interface agency_payments_status_enum_comparison_exp {
  _eq?: agency_payments_status_enum | null;
  _in?: agency_payments_status_enum[] | null;
  _is_null?: boolean | null;
  _neq?: agency_payments_status_enum | null;
  _nin?: agency_payments_status_enum[] | null;
}

/**
 * input type for inserting data into table "agency_payments_status"
 */
export interface agency_payments_status_insert_input {
  agency_payments?: agency_payments_arr_rel_insert_input | null;
  description?: string | null;
  id?: string | null;
}

/**
 * input type for inserting object relation for remote table "agency_payments_status"
 */
export interface agency_payments_status_obj_rel_insert_input {
  data: agency_payments_status_insert_input;
  on_conflict?: agency_payments_status_on_conflict | null;
}

/**
 * on conflict condition type for table "agency_payments_status"
 */
export interface agency_payments_status_on_conflict {
  constraint: agency_payments_status_constraint;
  update_columns: agency_payments_status_update_column[];
  where?: agency_payments_status_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "agency_users"
 */
export interface agency_users_arr_rel_insert_input {
  data: agency_users_insert_input[];
  on_conflict?: agency_users_on_conflict | null;
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
  on_conflict?: agency_users_on_conflict | null;
}

/**
 * on conflict condition type for table "agency_users"
 */
export interface agency_users_on_conflict {
  constraint: agency_users_constraint;
  update_columns: agency_users_update_column[];
  where?: agency_users_bool_exp | null;
}

/**
 * input type for updating data in table "auth_settings"
 */
export interface auth_settings_set_input {
  createdAt?: hasura_timestamptz | null;
  id?: number | null;
  name?: string | null;
  provider?: string | null;
  updatedAt?: hasura_timestamptz | null;
  value?: string | null;
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
 * input type for inserting data into table "bonus_types"
 */
export interface bonus_types_insert_input {
  description?: string | null;
  developer_bonus_earnings?: developer_bonus_earning_arr_rel_insert_input | null;
  type?: string | null;
}

/**
 * input type for inserting object relation for remote table "bonus_types"
 */
export interface bonus_types_obj_rel_insert_input {
  data: bonus_types_insert_input;
  on_conflict?: bonus_types_on_conflict | null;
}

/**
 * on conflict condition type for table "bonus_types"
 */
export interface bonus_types_on_conflict {
  constraint: bonus_types_constraint;
  update_columns: bonus_types_update_column[];
  where?: bonus_types_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "candidate_stage". All fields are combined with a logical 'AND'.
 */
export interface candidate_stage_bool_exp {
  _and?: (candidate_stage_bool_exp | null)[] | null;
  _not?: candidate_stage_bool_exp | null;
  _or?: (candidate_stage_bool_exp | null)[] | null;
  candidates?: candidates_bool_exp | null;
  type?: String_comparison_exp | null;
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
 * input type for inserting data into table "candidate_stage"
 */
export interface candidate_stage_insert_input {
  candidates?: candidates_arr_rel_insert_input | null;
  type?: string | null;
}

/**
 * input type for inserting object relation for remote table "candidate_stage"
 */
export interface candidate_stage_obj_rel_insert_input {
  data: candidate_stage_insert_input;
  on_conflict?: candidate_stage_on_conflict | null;
}

/**
 * on conflict condition type for table "candidate_stage"
 */
export interface candidate_stage_on_conflict {
  constraint: candidate_stage_constraint;
  update_columns: candidate_stage_update_column[];
  where?: candidate_stage_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "candidate_technologies"
 */
export interface candidate_technologies_arr_rel_insert_input {
  data: candidate_technologies_insert_input[];
  on_conflict?: candidate_technologies_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "candidate_technologies". All fields are combined with a logical 'AND'.
 */
export interface candidate_technologies_bool_exp {
  _and?: (candidate_technologies_bool_exp | null)[] | null;
  _not?: candidate_technologies_bool_exp | null;
  _or?: (candidate_technologies_bool_exp | null)[] | null;
  candidate?: candidates_bool_exp | null;
  candidatesId?: uuid_comparison_exp | null;
  technologiesId?: Int_comparison_exp | null;
  technology?: technologies_bool_exp | null;
}

/**
 * input type for inserting data into table "candidate_technologies"
 */
export interface candidate_technologies_insert_input {
  candidate?: candidates_obj_rel_insert_input | null;
  candidatesId?: hasura_uuid | null;
  technologiesId?: number | null;
  technology?: technologies_obj_rel_insert_input | null;
}

/**
 * on conflict condition type for table "candidate_technologies"
 */
export interface candidate_technologies_on_conflict {
  constraint: candidate_technologies_constraint;
  update_columns: candidate_technologies_update_column[];
  where?: candidate_technologies_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "candidates"
 */
export interface candidates_arr_rel_insert_input {
  data: candidates_insert_input[];
  on_conflict?: candidates_on_conflict | null;
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
  canRelocate?: Boolean_comparison_exp | null;
  candidate_stage?: candidate_stage_bool_exp | null;
  candidate_technologies?: candidate_technologies_bool_exp | null;
  city?: String_comparison_exp | null;
  country?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  culture_screen_feedback?: String_comparison_exp | null;
  currentMonthlySalary?: Int_comparison_exp | null;
  cv?: String_comparison_exp | null;
  developer?: developers_bool_exp | null;
  earliestStartDate?: timestamptz_comparison_exp | null;
  githubId?: String_comparison_exp | null;
  githubUser?: github_accounts_bool_exp | null;
  id?: uuid_comparison_exp | null;
  isActiveStudent?: Boolean_comparison_exp | null;
  minAnnualSalary?: Int_comparison_exp | null;
  noticePeriod?: Int_comparison_exp | null;
  skillTrack?: skilltrack_types_enum_comparison_exp | null;
  skilltrack_type?: skilltrack_types_bool_exp | null;
  source?: String_comparison_exp | null;
  stage?: candidate_stage_enum_comparison_exp | null;
  tech_screen_feedback?: String_comparison_exp | null;
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
  canRelocate?: boolean | null;
  candidate_stage?: candidate_stage_obj_rel_insert_input | null;
  candidate_technologies?: candidate_technologies_arr_rel_insert_input | null;
  city?: string | null;
  country?: string | null;
  createdAt?: hasura_timestamptz | null;
  culture_screen_feedback?: string | null;
  currentMonthlySalary?: number | null;
  cv?: string | null;
  developer?: developers_obj_rel_insert_input | null;
  earliestStartDate?: hasura_timestamptz | null;
  githubId?: string | null;
  githubUser?: github_accounts_obj_rel_insert_input | null;
  id?: hasura_uuid | null;
  isActiveStudent?: boolean | null;
  minAnnualSalary?: number | null;
  noticePeriod?: number | null;
  skillTrack?: skilltrack_types_enum | null;
  skilltrack_type?: skilltrack_types_obj_rel_insert_input | null;
  source?: string | null;
  stage?: candidate_stage_enum | null;
  tech_screen_feedback?: string | null;
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
  on_conflict?: candidates_on_conflict | null;
}

/**
 * on conflict condition type for table "candidates"
 */
export interface candidates_on_conflict {
  constraint: candidates_constraint;
  update_columns: candidates_update_column[];
  where?: candidates_bool_exp | null;
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
 * input type for inserting data into table "client_blocker_status"
 */
export interface client_blocker_status_insert_input {
  client_blockers?: client_blockers_arr_rel_insert_input | null;
  description?: string | null;
  type?: string | null;
}

/**
 * input type for inserting object relation for remote table "client_blocker_status"
 */
export interface client_blocker_status_obj_rel_insert_input {
  data: client_blocker_status_insert_input;
  on_conflict?: client_blocker_status_on_conflict | null;
}

/**
 * on conflict condition type for table "client_blocker_status"
 */
export interface client_blocker_status_on_conflict {
  constraint: client_blocker_status_constraint;
  update_columns: client_blocker_status_update_column[];
  where?: client_blocker_status_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "client_blockers"
 */
export interface client_blockers_arr_rel_insert_input {
  data: client_blockers_insert_input[];
  on_conflict?: client_blockers_on_conflict | null;
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
  unblockDetails?: String_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "client_blockers"
 */
export interface client_blockers_insert_input {
  client?: clients_obj_rel_insert_input | null;
  clientId?: string | null;
  client_blocker_status?: client_blocker_status_obj_rel_insert_input | null;
  client_project?: client_projects_obj_rel_insert_input | null;
  client_repository?: client_repositories_obj_rel_insert_input | null;
  createdAt?: hasura_timestamptz | null;
  details?: string | null;
  id?: number | null;
  projectId?: number | null;
  repoId?: hasura_uuid | null;
  status?: client_blocker_status_enum | null;
  summary?: string | null;
  task_client_blockers?: task_client_blockers_arr_rel_insert_input | null;
  ticket_client_blockers?: ticket_client_blockers_arr_rel_insert_input | null;
  unblockDetails?: string | null;
  updatedAt?: hasura_timestamptz | null;
}

/**
 * input type for inserting object relation for remote table "client_blockers"
 */
export interface client_blockers_obj_rel_insert_input {
  data: client_blockers_insert_input;
  on_conflict?: client_blockers_on_conflict | null;
}

/**
 * on conflict condition type for table "client_blockers"
 */
export interface client_blockers_on_conflict {
  constraint: client_blockers_constraint;
  update_columns: client_blockers_update_column[];
  where?: client_blockers_bool_exp | null;
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
  summarizedInUserDailyStandupId?: number | null;
  summary?: string | null;
  ticket_daily_standups?: ticket_daily_standups_arr_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
  user?: users_obj_rel_insert_input | null;
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
 * input type for inserting data into table "client_invoice_status"
 */
export interface client_invoice_status_insert_input {
  client_invoices?: client_invoices_arr_rel_insert_input | null;
  description?: string | null;
  id?: string | null;
}

/**
 * input type for inserting object relation for remote table "client_invoice_status"
 */
export interface client_invoice_status_obj_rel_insert_input {
  data: client_invoice_status_insert_input;
  on_conflict?: client_invoice_status_on_conflict | null;
}

/**
 * on conflict condition type for table "client_invoice_status"
 */
export interface client_invoice_status_on_conflict {
  constraint: client_invoice_status_constraint;
  update_columns: client_invoice_status_update_column[];
  where?: client_invoice_status_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "client_invoices"
 */
export interface client_invoices_arr_rel_insert_input {
  data: client_invoices_insert_input[];
  on_conflict?: client_invoices_on_conflict | null;
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
  client_tickets?: client_tickets_bool_exp | null;
  costInCredits?: Int_comparison_exp | null;
  costInUSD?: Int_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  dueAt?: timestamptz_comparison_exp | null;
  endAt?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  invoiceCode?: String_comparison_exp | null;
  maxBudgetInCredits?: Int_comparison_exp | null;
  startAt?: timestamptz_comparison_exp | null;
  status?: client_invoice_status_enum_comparison_exp | null;
  tickets?: tickets_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "client_invoices"
 */
export interface client_invoices_insert_input {
  client?: clients_obj_rel_insert_input | null;
  clientId?: string | null;
  client_invoice_balance?: client_invoices_with_balance_obj_rel_insert_input | null;
  client_invoice_status?: client_invoice_status_obj_rel_insert_input | null;
  client_tickets?: client_tickets_arr_rel_insert_input | null;
  costInCredits?: number | null;
  costInUSD?: number | null;
  createdAt?: hasura_timestamptz | null;
  dueAt?: hasura_timestamptz | null;
  endAt?: hasura_timestamptz | null;
  id?: number | null;
  invoiceCode?: string | null;
  maxBudgetInCredits?: number | null;
  startAt?: hasura_timestamptz | null;
  status?: client_invoice_status_enum | null;
  tickets?: tickets_arr_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
}

/**
 * input type for inserting object relation for remote table "client_invoices"
 */
export interface client_invoices_obj_rel_insert_input {
  data: client_invoices_insert_input;
  on_conflict?: client_invoices_on_conflict | null;
}

/**
 * on conflict condition type for table "client_invoices"
 */
export interface client_invoices_on_conflict {
  constraint: client_invoices_constraint;
  update_columns: client_invoices_update_column[];
  where?: client_invoices_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "client_invoices_with_balance"
 */
export interface client_invoices_with_balance_arr_rel_insert_input {
  data: client_invoices_with_balance_insert_input[];
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
  client_tickets?: client_tickets_bool_exp | null;
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
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "client_invoices_with_balance"
 */
export interface client_invoices_with_balance_insert_input {
  client?: clients_obj_rel_insert_input | null;
  clientId?: string | null;
  client_invoice?: client_invoices_obj_rel_insert_input | null;
  client_invoice_status?: client_invoice_status_obj_rel_insert_input | null;
  client_tickets?: client_tickets_arr_rel_insert_input | null;
  consumed_balance_in_credits?: hasura_bigint | null;
  costInCredits?: number | null;
  costInUSD?: number | null;
  createdAt?: hasura_timestamptz | null;
  currrent_paid_balance_in_usd?: hasura_bigint | null;
  dueAt?: hasura_timestamptz | null;
  id?: number | null;
  maxBudgetInCredits?: number | null;
  previous_balance_in_credits?: hasura_bigint | null;
  previous_balance_in_usd?: hasura_bigint | null;
  previous_consumed_balance_in_credits?: hasura_bigint | null;
  status?: string | null;
  tickets?: tickets_arr_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
}

/**
 * input type for inserting object relation for remote table "client_invoices_with_balance"
 */
export interface client_invoices_with_balance_obj_rel_insert_input {
  data: client_invoices_with_balance_insert_input;
}

/**
 * input type for inserting array relation for remote table "client_jobs"
 */
export interface client_jobs_arr_rel_insert_input {
  data: client_jobs_insert_input[];
  on_conflict?: client_jobs_on_conflict | null;
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
  optional_technologies?: optional_technologies_bool_exp | null;
  qualifiedCities?: String_comparison_exp | null;
  qualifiedCountries?: String_comparison_exp | null;
  qualifiedTimezoneOverlap?: Int_comparison_exp | null;
  qualified_technologies?: qualified_technologies_bool_exp | null;
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
  optional_technologies?: optional_technologies_arr_rel_insert_input | null;
  qualifiedCities?: string | null;
  qualifiedCountries?: string | null;
  qualifiedTimezoneOverlap?: number | null;
  qualified_technologies?: qualified_technologies_arr_rel_insert_input | null;
  totalPlacements?: number | null;
  workTimeZone?: number | null;
}

/**
 * input type for inserting object relation for remote table "client_jobs"
 */
export interface client_jobs_obj_rel_insert_input {
  data: client_jobs_insert_input;
  on_conflict?: client_jobs_on_conflict | null;
}

/**
 * on conflict condition type for table "client_jobs"
 */
export interface client_jobs_on_conflict {
  constraint: client_jobs_constraint;
  update_columns: client_jobs_update_column[];
  where?: client_jobs_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "client_project_repositories"
 */
export interface client_project_repositories_arr_rel_insert_input {
  data: client_project_repositories_insert_input[];
  on_conflict?: client_project_repositories_on_conflict | null;
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
 * input type for inserting data into table "client_project_repositories"
 */
export interface client_project_repositories_insert_input {
  clientProjectsId?: number | null;
  clientRepositoriesId?: hasura_uuid | null;
  client_project?: client_projects_obj_rel_insert_input | null;
  client_repository?: client_repositories_obj_rel_insert_input | null;
}

/**
 * on conflict condition type for table "client_project_repositories"
 */
export interface client_project_repositories_on_conflict {
  constraint: client_project_repositories_constraint;
  update_columns: client_project_repositories_update_column[];
  where?: client_project_repositories_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "client_projects"
 */
export interface client_projects_arr_rel_insert_input {
  data: client_projects_insert_input[];
  on_conflict?: client_projects_on_conflict | null;
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
 * input type for inserting data into table "client_projects"
 */
export interface client_projects_insert_input {
  client?: clients_obj_rel_insert_input | null;
  clientId?: string | null;
  client_blockers?: client_blockers_arr_rel_insert_input | null;
  client_project_repositories?: client_project_repositories_arr_rel_insert_input | null;
  createdAt?: hasura_timestamptz | null;
  id?: number | null;
  tickets?: tickets_arr_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
}

/**
 * input type for inserting object relation for remote table "client_projects"
 */
export interface client_projects_obj_rel_insert_input {
  data: client_projects_insert_input;
  on_conflict?: client_projects_on_conflict | null;
}

/**
 * on conflict condition type for table "client_projects"
 */
export interface client_projects_on_conflict {
  constraint: client_projects_constraint;
  update_columns: client_projects_update_column[];
  where?: client_projects_bool_exp | null;
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
  ignoredPaths?: String_comparison_exp | null;
  slicedFolders?: String_comparison_exp | null;
  slicedRepoUrl?: String_comparison_exp | null;
  tasks?: tasks_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "client_repositories_commits"
 */
export interface client_repositories_commits_arr_rel_insert_input {
  data: client_repositories_commits_insert_input[];
  on_conflict?: client_repositories_commits_on_conflict | null;
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
  taskId?: Int_comparison_exp | null;
  task_code_comments?: task_code_comments_bool_exp | null;
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
  taskId?: number | null;
  task_code_comments?: task_code_comments_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "client_repositories_commits"
 */
export interface client_repositories_commits_obj_rel_insert_input {
  data: client_repositories_commits_insert_input;
  on_conflict?: client_repositories_commits_on_conflict | null;
}

/**
 * on conflict condition type for table "client_repositories_commits"
 */
export interface client_repositories_commits_on_conflict {
  constraint: client_repositories_commits_constraint;
  update_columns: client_repositories_commits_update_column[];
  where?: client_repositories_commits_bool_exp | null;
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
  client_blockers?: client_blockers_arr_rel_insert_input | null;
  client_bot?: client_bots_obj_rel_insert_input | null;
  client_project_repositories?: client_project_repositories_arr_rel_insert_input | null;
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
 * input type for inserting array relation for remote table "client_tickets"
 */
export interface client_tickets_arr_rel_insert_input {
  data: client_tickets_insert_input[];
}

/**
 * Boolean expression to filter rows from the table "client_tickets". All fields are combined with a logical 'AND'.
 */
export interface client_tickets_bool_exp {
  _and?: (client_tickets_bool_exp | null)[] | null;
  _not?: client_tickets_bool_exp | null;
  _or?: (client_tickets_bool_exp | null)[] | null;
  client?: clients_bool_exp | null;
  clientId?: String_comparison_exp | null;
  client_invoice?: client_invoices_bool_exp | null;
  code?: String_comparison_exp | null;
  costInCredits?: Int_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  description?: String_comparison_exp | null;
  discount?: Int_comparison_exp | null;
  discountedCostInCredits?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  invoiceId?: Int_comparison_exp | null;
  ticket?: tickets_bool_exp | null;
  ticketLink?: String_comparison_exp | null;
  title?: String_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "client_tickets"
 */
export interface client_tickets_insert_input {
  client?: clients_obj_rel_insert_input | null;
  clientId?: string | null;
  client_invoice?: client_invoices_obj_rel_insert_input | null;
  code?: string | null;
  costInCredits?: number | null;
  createdAt?: hasura_timestamptz | null;
  description?: string | null;
  discount?: number | null;
  discountedCostInCredits?: number | null;
  id?: number | null;
  invoiceId?: number | null;
  ticket?: tickets_obj_rel_insert_input | null;
  ticketLink?: string | null;
  title?: string | null;
  updatedAt?: hasura_timestamptz | null;
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
 * input type for inserting data into table "client_transaction_status"
 */
export interface client_transaction_status_insert_input {
  client_transactions?: client_transactions_arr_rel_insert_input | null;
  description?: string | null;
  id?: string | null;
}

/**
 * input type for inserting object relation for remote table "client_transaction_status"
 */
export interface client_transaction_status_obj_rel_insert_input {
  data: client_transaction_status_insert_input;
  on_conflict?: client_transaction_status_on_conflict | null;
}

/**
 * on conflict condition type for table "client_transaction_status"
 */
export interface client_transaction_status_on_conflict {
  constraint: client_transaction_status_constraint;
  update_columns: client_transaction_status_update_column[];
  where?: client_transaction_status_bool_exp | null;
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
 * input type for inserting data into table "client_transaction_types"
 */
export interface client_transaction_types_insert_input {
  client_transactions?: client_transactions_arr_rel_insert_input | null;
  description?: string | null;
  id?: string | null;
}

/**
 * input type for inserting object relation for remote table "client_transaction_types"
 */
export interface client_transaction_types_obj_rel_insert_input {
  data: client_transaction_types_insert_input;
  on_conflict?: client_transaction_types_on_conflict | null;
}

/**
 * on conflict condition type for table "client_transaction_types"
 */
export interface client_transaction_types_on_conflict {
  constraint: client_transaction_types_constraint;
  update_columns: client_transaction_types_update_column[];
  where?: client_transaction_types_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "client_transactions"
 */
export interface client_transactions_arr_rel_insert_input {
  data: client_transactions_insert_input[];
  on_conflict?: client_transactions_on_conflict | null;
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
  client?: clients_obj_rel_insert_input | null;
  clientId?: string | null;
  client_transaction_status?: client_transaction_status_obj_rel_insert_input | null;
  client_transaction_type?: client_transaction_types_obj_rel_insert_input | null;
  costInCredits?: number | null;
  costInUSD?: number | null;
  dueAt?: hasura_timestamptz | null;
  id?: number | null;
  invoiceCode?: string | null;
  status?: client_transaction_status_enum | null;
  transactedAt?: hasura_timestamptz | null;
}

/**
 * on conflict condition type for table "client_transactions"
 */
export interface client_transactions_on_conflict {
  constraint: client_transactions_constraint;
  update_columns: client_transactions_update_column[];
  where?: client_transactions_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "client_users"
 */
export interface client_users_arr_rel_insert_input {
  data: client_users_insert_input[];
  on_conflict?: client_users_on_conflict | null;
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
  on_conflict?: client_users_on_conflict | null;
}

/**
 * on conflict condition type for table "client_users"
 */
export interface client_users_on_conflict {
  constraint: client_users_constraint;
  update_columns: client_users_update_column[];
  where?: client_users_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "clients"
 */
export interface clients_arr_rel_insert_input {
  data: clients_insert_input[];
  on_conflict?: clients_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "clients". All fields are combined with a logical 'AND'.
 */
export interface clients_bool_exp {
  _and?: (clients_bool_exp | null)[] | null;
  _not?: clients_bool_exp | null;
  _or?: (clients_bool_exp | null)[] | null;
  addressAddress?: jsonb_comparison_exp | null;
  agency?: agencies_bool_exp | null;
  agencyId?: String_comparison_exp | null;
  churnedAt?: timestamptz_comparison_exp | null;
  client_blockers?: client_blockers_bool_exp | null;
  client_bots?: client_bots_bool_exp | null;
  client_daily_standups?: client_daily_standups_bool_exp | null;
  client_invoices?: client_invoices_bool_exp | null;
  client_invoices_with_balance?: client_invoices_with_balance_bool_exp | null;
  client_jobs?: client_jobs_bool_exp | null;
  client_projects?: client_projects_bool_exp | null;
  client_repositories?: client_repositories_bool_exp | null;
  client_tickets?: client_tickets_bool_exp | null;
  client_transactions?: client_transactions_bool_exp | null;
  client_users?: client_users_bool_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  creditBatchSize?: Int_comparison_exp | null;
  git_organizations?: git_organizations_bool_exp | null;
  github_owners?: github_owners_bool_exp | null;
  id?: String_comparison_exp | null;
  legalName?: String_comparison_exp | null;
  logoUrl?: String_comparison_exp | null;
  meetings?: meetings_bool_exp | null;
  name?: String_comparison_exp | null;
  onBoardedAt?: timestamptz_comparison_exp | null;
  qualified_agencies?: qualified_agencies_bool_exp | null;
  tasks?: tasks_bool_exp | null;
  tickets?: tickets_bool_exp | null;
  timedoctor_tasks?: timedoctor_tasks_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  userDomains?: String_comparison_exp | null;
  user_time_logs?: user_time_logs_bool_exp | null;
}

/**
 * input type for inserting data into table "clients"
 */
export interface clients_insert_input {
  addressAddress?: hasura_jsonb | null;
  agency?: agencies_obj_rel_insert_input | null;
  agencyId?: string | null;
  churnedAt?: hasura_timestamptz | null;
  client_blockers?: client_blockers_arr_rel_insert_input | null;
  client_bots?: client_bots_arr_rel_insert_input | null;
  client_daily_standups?: client_daily_standups_arr_rel_insert_input | null;
  client_invoices?: client_invoices_arr_rel_insert_input | null;
  client_invoices_with_balance?: client_invoices_with_balance_arr_rel_insert_input | null;
  client_jobs?: client_jobs_arr_rel_insert_input | null;
  client_projects?: client_projects_arr_rel_insert_input | null;
  client_repositories?: client_repositories_arr_rel_insert_input | null;
  client_tickets?: client_tickets_arr_rel_insert_input | null;
  client_transactions?: client_transactions_arr_rel_insert_input | null;
  client_users?: client_users_arr_rel_insert_input | null;
  createdAt?: hasura_timestamptz | null;
  creditBatchSize?: number | null;
  git_organizations?: git_organizations_arr_rel_insert_input | null;
  github_owners?: github_owners_arr_rel_insert_input | null;
  id?: string | null;
  legalName?: string | null;
  logoUrl?: string | null;
  meetings?: meetings_arr_rel_insert_input | null;
  name?: string | null;
  onBoardedAt?: hasura_timestamptz | null;
  qualified_agencies?: qualified_agencies_arr_rel_insert_input | null;
  tasks?: tasks_arr_rel_insert_input | null;
  tickets?: tickets_arr_rel_insert_input | null;
  timedoctor_tasks?: timedoctor_tasks_arr_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
  userDomains?: string | null;
  user_time_logs?: user_time_logs_arr_rel_insert_input | null;
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
 * input type for inserting array relation for remote table "developer_bonus_earning"
 */
export interface developer_bonus_earning_arr_rel_insert_input {
  data: developer_bonus_earning_insert_input[];
  on_conflict?: developer_bonus_earning_on_conflict | null;
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
 * input type for inserting data into table "developer_bonus_earning"
 */
export interface developer_bonus_earning_insert_input {
  amountInUSD?: hasura_float8 | null;
  bonusType?: bonus_types_enum | null;
  bonus_type?: bonus_types_obj_rel_insert_input | null;
  developer?: developers_obj_rel_insert_input | null;
  endDate?: hasura_timestamptz | null;
  id?: number | null;
  startDate?: hasura_timestamptz | null;
  user?: users_obj_rel_insert_input | null;
  userInvoiceId?: number | null;
  userLogin?: string | null;
  user_invoice?: user_invoices_obj_rel_insert_input | null;
}

/**
 * on conflict condition type for table "developer_bonus_earning"
 */
export interface developer_bonus_earning_on_conflict {
  constraint: developer_bonus_earning_constraint;
  update_columns: developer_bonus_earning_update_column[];
  where?: developer_bonus_earning_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "developer_daily_log"
 */
export interface developer_daily_log_arr_rel_insert_input {
  data: developer_daily_log_insert_input[];
  on_conflict?: developer_daily_log_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "developer_daily_log". All fields are combined with a logical 'AND'.
 */
export interface developer_daily_log_bool_exp {
  _and?: (developer_daily_log_bool_exp | null)[] | null;
  _not?: developer_daily_log_bool_exp | null;
  _or?: (developer_daily_log_bool_exp | null)[] | null;
  createdAt?: timestamptz_comparison_exp | null;
  developer?: developers_bool_exp | null;
  developerId?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  numberOfCommits?: Int_comparison_exp | null;
  timeLogged?: Int_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  workDate?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "developer_daily_log"
 */
export interface developer_daily_log_insert_input {
  createdAt?: hasura_timestamptz | null;
  developer?: developers_obj_rel_insert_input | null;
  developerId?: string | null;
  id?: number | null;
  numberOfCommits?: number | null;
  timeLogged?: number | null;
  updatedAt?: hasura_timestamptz | null;
  workDate?: hasura_timestamptz | null;
}

/**
 * on conflict condition type for table "developer_daily_log"
 */
export interface developer_daily_log_on_conflict {
  constraint: developer_daily_log_constraint;
  update_columns: developer_daily_log_update_column[];
  where?: developer_daily_log_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "developer_weekly_earning"
 */
export interface developer_weekly_earning_arr_rel_insert_input {
  data: developer_weekly_earning_insert_input[];
  on_conflict?: developer_weekly_earning_on_conflict | null;
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
 * input type for inserting data into table "developer_weekly_earning"
 */
export interface developer_weekly_earning_insert_input {
  amountEarnedWithTasks?: hasura_float8 | null;
  developer?: developers_obj_rel_insert_input | null;
  developerId?: string | null;
  endDate?: hasura_timestamptz | null;
  id?: number | null;
  minimumAmountEarned?: hasura_float8 | null;
  startDate?: hasura_timestamptz | null;
  user?: users_obj_rel_insert_input | null;
  userLogin?: string | null;
}

/**
 * on conflict condition type for table "developer_weekly_earning"
 */
export interface developer_weekly_earning_on_conflict {
  constraint: developer_weekly_earning_constraint;
  update_columns: developer_weekly_earning_update_column[];
  where?: developer_weekly_earning_bool_exp | null;
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
  developer_bonus_earnings?: developer_bonus_earning_bool_exp | null;
  developer_contracts?: user_contracts_bool_exp | null;
  developer_daily_logs?: developer_daily_log_bool_exp | null;
  developer_payments?: user_payments_bool_exp | null;
  developer_weekly_earnings?: developer_weekly_earning_bool_exp | null;
  firstName?: String_comparison_exp | null;
  githubId?: String_comparison_exp | null;
  githubUser?: github_accounts_bool_exp | null;
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
 * input type for inserting data into table "developers"
 */
export interface developers_insert_input {
  candidate?: candidates_obj_rel_insert_input | null;
  candidateId?: hasura_uuid | null;
  cohort?: string | null;
  developer_bonus_earnings?: developer_bonus_earning_arr_rel_insert_input | null;
  developer_contracts?: user_contracts_arr_rel_insert_input | null;
  developer_daily_logs?: developer_daily_log_arr_rel_insert_input | null;
  developer_payments?: user_payments_arr_rel_insert_input | null;
  developer_weekly_earnings?: developer_weekly_earning_arr_rel_insert_input | null;
  firstName?: string | null;
  githubId?: string | null;
  githubUser?: github_accounts_obj_rel_insert_input | null;
  id?: string | null;
  lastName?: string | null;
  login?: string | null;
  passwordHash?: string | null;
  targetCurrency?: string | null;
  taskReviewsByDeveloperid?: task_reviews_arr_rel_insert_input | null;
  taskWorksByDeveloperid?: task_work_arr_rel_insert_input | null;
  task_reviews?: task_reviews_arr_rel_insert_input | null;
  task_time_log?: task_time_logs_obj_rel_insert_input | null;
  task_time_logs?: task_time_logs_arr_rel_insert_input | null;
  task_works?: task_work_arr_rel_insert_input | null;
  tasks?: tasks_arr_rel_insert_input | null;
  tasksByDeveloperid?: tasks_arr_rel_insert_input | null;
  tasksByManagerid?: tasks_arr_rel_insert_input | null;
  telephone?: string | null;
  tickets?: tickets_arr_rel_insert_input | null;
  transferwiseId?: string | null;
  user?: users_obj_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "developers"
 */
export interface developers_obj_rel_insert_input {
  data: developers_insert_input;
  on_conflict?: developers_on_conflict | null;
}

/**
 * on conflict condition type for table "developers"
 */
export interface developers_on_conflict {
  constraint: developers_constraint;
  update_columns: developers_update_column[];
  where?: developers_bool_exp | null;
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
 * input type for inserting array relation for remote table "further_reviews"
 */
export interface further_reviews_arr_rel_insert_input {
  data: further_reviews_insert_input[];
  on_conflict?: further_reviews_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "further_reviews". All fields are combined with a logical 'AND'.
 */
export interface further_reviews_bool_exp {
  _and?: (further_reviews_bool_exp | null)[] | null;
  _not?: further_reviews_bool_exp | null;
  _or?: (further_reviews_bool_exp | null)[] | null;
  task?: tasks_bool_exp | null;
  taskReviewsId?: Int_comparison_exp | null;
  task_review?: task_reviews_bool_exp | null;
  tasksId?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "further_reviews"
 */
export interface further_reviews_insert_input {
  task?: tasks_obj_rel_insert_input | null;
  taskReviewsId?: number | null;
  task_review?: task_reviews_obj_rel_insert_input | null;
  tasksId?: number | null;
}

/**
 * on conflict condition type for table "further_reviews"
 */
export interface further_reviews_on_conflict {
  constraint: further_reviews_constraint;
  update_columns: further_reviews_update_column[];
  where?: further_reviews_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "gcp_storage_buckets"
 */
export interface gcp_storage_buckets_arr_rel_insert_input {
  data: gcp_storage_buckets_insert_input[];
  on_conflict?: gcp_storage_buckets_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "gcp_storage_buckets". All fields are combined with a logical 'AND'.
 */
export interface gcp_storage_buckets_bool_exp {
  _and?: (gcp_storage_buckets_bool_exp | null)[] | null;
  _not?: gcp_storage_buckets_bool_exp | null;
  _or?: (gcp_storage_buckets_bool_exp | null)[] | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  gcp_storage_objects?: gcp_storage_objects_bool_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  name?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "gcp_storage_buckets"
 */
export interface gcp_storage_buckets_insert_input {
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  gcp_storage_objects?: gcp_storage_objects_arr_rel_insert_input | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  name?: string | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "gcp_storage_buckets"
 */
export interface gcp_storage_buckets_obj_rel_insert_input {
  data: gcp_storage_buckets_insert_input;
  on_conflict?: gcp_storage_buckets_on_conflict | null;
}

/**
 * on conflict condition type for table "gcp_storage_buckets"
 */
export interface gcp_storage_buckets_on_conflict {
  constraint: gcp_storage_buckets_constraint;
  update_columns: gcp_storage_buckets_update_column[];
  where?: gcp_storage_buckets_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "gcp_storage_objects"
 */
export interface gcp_storage_objects_arr_rel_insert_input {
  data: gcp_storage_objects_insert_input[];
  on_conflict?: gcp_storage_objects_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "gcp_storage_objects". All fields are combined with a logical 'AND'.
 */
export interface gcp_storage_objects_bool_exp {
  _and?: (gcp_storage_objects_bool_exp | null)[] | null;
  _not?: gcp_storage_objects_bool_exp | null;
  _or?: (gcp_storage_objects_bool_exp | null)[] | null;
  bucketId?: Int_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  filename?: String_comparison_exp | null;
  gcp_storage_bucket?: gcp_storage_buckets_bool_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  task_submissions?: task_submission_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "gcp_storage_objects"
 */
export interface gcp_storage_objects_insert_input {
  bucketId?: number | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  filename?: string | null;
  gcp_storage_bucket?: gcp_storage_buckets_obj_rel_insert_input | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  task_submissions?: task_submission_arr_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "gcp_storage_objects"
 */
export interface gcp_storage_objects_obj_rel_insert_input {
  data: gcp_storage_objects_insert_input;
  on_conflict?: gcp_storage_objects_on_conflict | null;
}

/**
 * on conflict condition type for table "gcp_storage_objects"
 */
export interface gcp_storage_objects_on_conflict {
  constraint: gcp_storage_objects_constraint;
  update_columns: gcp_storage_objects_update_column[];
  where?: gcp_storage_objects_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "git_branch_commits"
 */
export interface git_branch_commits_arr_rel_insert_input {
  data: git_branch_commits_insert_input[];
  on_conflict?: git_branch_commits_on_conflict | null;
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
 * input type for inserting data into table "git_branch_commits"
 */
export interface git_branch_commits_insert_input {
  branchId?: number | null;
  commitId?: number | null;
  git_branch?: git_branches_obj_rel_insert_input | null;
  git_commit?: git_commits_obj_rel_insert_input | null;
}

/**
 * on conflict condition type for table "git_branch_commits"
 */
export interface git_branch_commits_on_conflict {
  constraint: git_branch_commits_constraint;
  update_columns: git_branch_commits_update_column[];
  where?: git_branch_commits_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "git_branches"
 */
export interface git_branches_arr_rel_insert_input {
  data: git_branches_insert_input[];
  on_conflict?: git_branches_on_conflict | null;
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
  git_repo?: git_repos_bool_exp | null;
  git_repos?: git_repos_bool_exp | null;
  githubBranchSid?: String_comparison_exp | null;
  github_branch?: github_branches_bool_exp | null;
  headCommitId?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  oid?: String_comparison_exp | null;
  repoId?: Int_comparison_exp | null;
  tasks?: tasks_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "git_branches"
 */
export interface git_branches_insert_input {
  createdAt?: hasura_timestamptz | null;
  gitPullRequestsByTargetbranchid?: git_pull_requests_arr_rel_insert_input | null;
  git_branch_commits?: git_branch_commits_arr_rel_insert_input | null;
  git_commit?: git_commits_obj_rel_insert_input | null;
  git_pull_requests?: git_pull_requests_arr_rel_insert_input | null;
  git_repo?: git_repos_obj_rel_insert_input | null;
  git_repos?: git_repos_arr_rel_insert_input | null;
  githubBranchSid?: string | null;
  github_branch?: github_branches_obj_rel_insert_input | null;
  headCommitId?: number | null;
  id?: number | null;
  name?: string | null;
  oid?: string | null;
  repoId?: number | null;
  tasks?: tasks_arr_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
}

/**
 * input type for inserting object relation for remote table "git_branches"
 */
export interface git_branches_obj_rel_insert_input {
  data: git_branches_insert_input;
  on_conflict?: git_branches_on_conflict | null;
}

/**
 * on conflict condition type for table "git_branches"
 */
export interface git_branches_on_conflict {
  constraint: git_branches_constraint;
  update_columns: git_branches_update_column[];
  where?: git_branches_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "git_comment_reactions"
 */
export interface git_comment_reactions_arr_rel_insert_input {
  data: git_comment_reactions_insert_input[];
  on_conflict?: git_comment_reactions_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "git_comment_reactions". All fields are combined with a logical 'AND'.
 */
export interface git_comment_reactions_bool_exp {
  _and?: (git_comment_reactions_bool_exp | null)[] | null;
  _not?: git_comment_reactions_bool_exp | null;
  _or?: (git_comment_reactions_bool_exp | null)[] | null;
  authorUsername?: String_comparison_exp | null;
  content?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  git_pull_request?: git_pull_requests_bool_exp | null;
  git_pull_request_comment?: git_pull_request_comments_bool_exp | null;
  git_pull_request_review?: git_pull_request_reviews_bool_exp | null;
  git_pull_request_review_comment?: git_pull_request_review_comments_bool_exp | null;
  git_user?: git_users_bool_exp | null;
  githubCommentReactionSid?: String_comparison_exp | null;
  github_comment_reaction?: github_comment_reactions_bool_exp | null;
  id?: Int_comparison_exp | null;
  pullRequestCommentId?: Int_comparison_exp | null;
  pullRequestId?: Int_comparison_exp | null;
  pullRequestReviewCommentId?: Int_comparison_exp | null;
  pullRequestReviewId?: Int_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "git_comment_reactions"
 */
export interface git_comment_reactions_insert_input {
  authorUsername?: string | null;
  content?: string | null;
  createdAt?: hasura_timestamptz | null;
  git_pull_request?: git_pull_requests_obj_rel_insert_input | null;
  git_pull_request_comment?: git_pull_request_comments_obj_rel_insert_input | null;
  git_pull_request_review?: git_pull_request_reviews_obj_rel_insert_input | null;
  git_pull_request_review_comment?: git_pull_request_review_comments_obj_rel_insert_input | null;
  git_user?: git_users_obj_rel_insert_input | null;
  githubCommentReactionSid?: string | null;
  github_comment_reaction?: github_comment_reactions_obj_rel_insert_input | null;
  id?: number | null;
  pullRequestCommentId?: number | null;
  pullRequestId?: number | null;
  pullRequestReviewCommentId?: number | null;
  pullRequestReviewId?: number | null;
  updatedAt?: hasura_timestamptz | null;
}

/**
 * input type for inserting object relation for remote table "git_comment_reactions"
 */
export interface git_comment_reactions_obj_rel_insert_input {
  data: git_comment_reactions_insert_input;
  on_conflict?: git_comment_reactions_on_conflict | null;
}

/**
 * on conflict condition type for table "git_comment_reactions"
 */
export interface git_comment_reactions_on_conflict {
  constraint: git_comment_reactions_constraint;
  update_columns: git_comment_reactions_update_column[];
  where?: git_comment_reactions_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "git_commit_contexts"
 */
export interface git_commit_contexts_arr_rel_insert_input {
  data: git_commit_contexts_insert_input[];
  on_conflict?: git_commit_contexts_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "git_commit_contexts". All fields are combined with a logical 'AND'.
 */
export interface git_commit_contexts_bool_exp {
  _and?: (git_commit_contexts_bool_exp | null)[] | null;
  _not?: git_commit_contexts_bool_exp | null;
  _or?: (git_commit_contexts_bool_exp | null)[] | null;
  avatarUrl?: String_comparison_exp | null;
  commitId?: Int_comparison_exp | null;
  context?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  description?: String_comparison_exp | null;
  git_commit?: git_commits_bool_exp | null;
  git_commit_status?: git_commit_status_bool_exp | null;
  githubCommitContextSid?: String_comparison_exp | null;
  github_commit_context?: github_commit_contexts_bool_exp | null;
  id?: Int_comparison_exp | null;
  status?: String_comparison_exp | null;
  targetUrl?: String_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "git_commit_contexts"
 */
export interface git_commit_contexts_insert_input {
  avatarUrl?: string | null;
  commitId?: number | null;
  context?: string | null;
  createdAt?: hasura_timestamptz | null;
  description?: string | null;
  git_commit?: git_commits_obj_rel_insert_input | null;
  git_commit_status?: git_commit_status_obj_rel_insert_input | null;
  githubCommitContextSid?: string | null;
  github_commit_context?: github_commit_contexts_obj_rel_insert_input | null;
  id?: number | null;
  status?: string | null;
  targetUrl?: string | null;
  updatedAt?: hasura_timestamptz | null;
}

/**
 * input type for inserting object relation for remote table "git_commit_contexts"
 */
export interface git_commit_contexts_obj_rel_insert_input {
  data: git_commit_contexts_insert_input;
  on_conflict?: git_commit_contexts_on_conflict | null;
}

/**
 * on conflict condition type for table "git_commit_contexts"
 */
export interface git_commit_contexts_on_conflict {
  constraint: git_commit_contexts_constraint;
  update_columns: git_commit_contexts_update_column[];
  where?: git_commit_contexts_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "git_commit_status". All fields are combined with a logical 'AND'.
 */
export interface git_commit_status_bool_exp {
  _and?: (git_commit_status_bool_exp | null)[] | null;
  _not?: git_commit_status_bool_exp | null;
  _or?: (git_commit_status_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  git_commit_contexts?: git_commit_contexts_bool_exp | null;
  git_commits?: git_commits_bool_exp | null;
  id?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "git_commit_status"
 */
export interface git_commit_status_insert_input {
  description?: string | null;
  git_commit_contexts?: git_commit_contexts_arr_rel_insert_input | null;
  git_commits?: git_commits_arr_rel_insert_input | null;
  id?: string | null;
}

/**
 * input type for inserting object relation for remote table "git_commit_status"
 */
export interface git_commit_status_obj_rel_insert_input {
  data: git_commit_status_insert_input;
  on_conflict?: git_commit_status_on_conflict | null;
}

/**
 * on conflict condition type for table "git_commit_status"
 */
export interface git_commit_status_on_conflict {
  constraint: git_commit_status_constraint;
  update_columns: git_commit_status_update_column[];
  where?: git_commit_status_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "git_commits"
 */
export interface git_commits_arr_rel_insert_input {
  data: git_commits_insert_input[];
  on_conflict?: git_commits_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "git_commits". All fields are combined with a logical 'AND'.
 */
export interface git_commits_bool_exp {
  _and?: (git_commits_bool_exp | null)[] | null;
  _not?: git_commits_bool_exp | null;
  _or?: (git_commits_bool_exp | null)[] | null;
  authorUsername?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  gitPullRequestReviewCommentsByOriginalcommitid?: git_pull_request_review_comments_bool_exp | null;
  git_branch_commits?: git_branch_commits_bool_exp | null;
  git_branches?: git_branches_bool_exp | null;
  git_commit_contexts?: git_commit_contexts_bool_exp | null;
  git_commit_status?: git_commit_status_bool_exp | null;
  git_pull_request_review_comments?: git_pull_request_review_comments_bool_exp | null;
  git_user?: git_users_bool_exp | null;
  githubCommitSid?: String_comparison_exp | null;
  github_commit?: github_commits_bool_exp | null;
  id?: Int_comparison_exp | null;
  oid?: String_comparison_exp | null;
  status?: String_comparison_exp | null;
  task?: tasks_bool_exp | null;
  taskId?: Int_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "git_commits"
 */
export interface git_commits_insert_input {
  authorUsername?: string | null;
  createdAt?: hasura_timestamptz | null;
  gitPullRequestReviewCommentsByOriginalcommitid?: git_pull_request_review_comments_arr_rel_insert_input | null;
  git_branch_commits?: git_branch_commits_arr_rel_insert_input | null;
  git_branches?: git_branches_arr_rel_insert_input | null;
  git_commit_contexts?: git_commit_contexts_arr_rel_insert_input | null;
  git_commit_status?: git_commit_status_obj_rel_insert_input | null;
  git_pull_request_review_comments?: git_pull_request_review_comments_arr_rel_insert_input | null;
  git_user?: git_users_obj_rel_insert_input | null;
  githubCommitSid?: string | null;
  github_commit?: github_commits_obj_rel_insert_input | null;
  id?: number | null;
  oid?: string | null;
  status?: string | null;
  task?: tasks_obj_rel_insert_input | null;
  taskId?: number | null;
  updatedAt?: hasura_timestamptz | null;
}

/**
 * input type for inserting object relation for remote table "git_commits"
 */
export interface git_commits_obj_rel_insert_input {
  data: git_commits_insert_input;
  on_conflict?: git_commits_on_conflict | null;
}

/**
 * on conflict condition type for table "git_commits"
 */
export interface git_commits_on_conflict {
  constraint: git_commits_constraint;
  update_columns: git_commits_update_column[];
  where?: git_commits_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "git_organizations"
 */
export interface git_organizations_arr_rel_insert_input {
  data: git_organizations_insert_input[];
  on_conflict?: git_organizations_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "git_organizations". All fields are combined with a logical 'AND'.
 */
export interface git_organizations_bool_exp {
  _and?: (git_organizations_bool_exp | null)[] | null;
  _not?: git_organizations_bool_exp | null;
  _or?: (git_organizations_bool_exp | null)[] | null;
  client?: clients_bool_exp | null;
  clientId?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  git_repos?: git_repos_bool_exp | null;
  githubOrganizationSid?: String_comparison_exp | null;
  github_organization?: github_organizations_bool_exp | null;
  id?: Int_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "git_organizations"
 */
export interface git_organizations_insert_input {
  client?: clients_obj_rel_insert_input | null;
  clientId?: string | null;
  createdAt?: hasura_timestamptz | null;
  git_repos?: git_repos_arr_rel_insert_input | null;
  githubOrganizationSid?: string | null;
  github_organization?: github_organizations_obj_rel_insert_input | null;
  id?: number | null;
  updatedAt?: hasura_timestamptz | null;
}

/**
 * input type for inserting object relation for remote table "git_organizations"
 */
export interface git_organizations_obj_rel_insert_input {
  data: git_organizations_insert_input;
  on_conflict?: git_organizations_on_conflict | null;
}

/**
 * on conflict condition type for table "git_organizations"
 */
export interface git_organizations_on_conflict {
  constraint: git_organizations_constraint;
  update_columns: git_organizations_update_column[];
  where?: git_organizations_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "git_pull_request_assignees"
 */
export interface git_pull_request_assignees_arr_rel_insert_input {
  data: git_pull_request_assignees_insert_input[];
  on_conflict?: git_pull_request_assignees_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "git_pull_request_assignees". All fields are combined with a logical 'AND'.
 */
export interface git_pull_request_assignees_bool_exp {
  _and?: (git_pull_request_assignees_bool_exp | null)[] | null;
  _not?: git_pull_request_assignees_bool_exp | null;
  _or?: (git_pull_request_assignees_bool_exp | null)[] | null;
  accountUsername?: String_comparison_exp | null;
  git_pull_request?: git_pull_requests_bool_exp | null;
  git_user?: git_users_bool_exp | null;
  pullRequestId?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "git_pull_request_assignees"
 */
export interface git_pull_request_assignees_insert_input {
  accountUsername?: string | null;
  git_pull_request?: git_pull_requests_obj_rel_insert_input | null;
  git_user?: git_users_obj_rel_insert_input | null;
  pullRequestId?: number | null;
}

/**
 * on conflict condition type for table "git_pull_request_assignees"
 */
export interface git_pull_request_assignees_on_conflict {
  constraint: git_pull_request_assignees_constraint;
  update_columns: git_pull_request_assignees_update_column[];
  where?: git_pull_request_assignees_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "git_pull_request_comments"
 */
export interface git_pull_request_comments_arr_rel_insert_input {
  data: git_pull_request_comments_insert_input[];
  on_conflict?: git_pull_request_comments_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "git_pull_request_comments". All fields are combined with a logical 'AND'.
 */
export interface git_pull_request_comments_bool_exp {
  _and?: (git_pull_request_comments_bool_exp | null)[] | null;
  _not?: git_pull_request_comments_bool_exp | null;
  _or?: (git_pull_request_comments_bool_exp | null)[] | null;
  authorUsername?: String_comparison_exp | null;
  body?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  git_comment_reactions?: git_comment_reactions_bool_exp | null;
  git_pull_request?: git_pull_requests_bool_exp | null;
  git_user?: git_users_bool_exp | null;
  githubPullRequestCommentSid?: String_comparison_exp | null;
  github_pull_request_comment?: github_pull_request_comments_bool_exp | null;
  id?: Int_comparison_exp | null;
  pullRequestId?: Int_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "git_pull_request_comments"
 */
export interface git_pull_request_comments_insert_input {
  authorUsername?: string | null;
  body?: string | null;
  createdAt?: hasura_timestamptz | null;
  git_comment_reactions?: git_comment_reactions_arr_rel_insert_input | null;
  git_pull_request?: git_pull_requests_obj_rel_insert_input | null;
  git_user?: git_users_obj_rel_insert_input | null;
  githubPullRequestCommentSid?: string | null;
  github_pull_request_comment?: github_pull_request_comments_obj_rel_insert_input | null;
  id?: number | null;
  pullRequestId?: number | null;
  updatedAt?: hasura_timestamptz | null;
}

/**
 * input type for inserting object relation for remote table "git_pull_request_comments"
 */
export interface git_pull_request_comments_obj_rel_insert_input {
  data: git_pull_request_comments_insert_input;
  on_conflict?: git_pull_request_comments_on_conflict | null;
}

/**
 * on conflict condition type for table "git_pull_request_comments"
 */
export interface git_pull_request_comments_on_conflict {
  constraint: git_pull_request_comments_constraint;
  update_columns: git_pull_request_comments_update_column[];
  where?: git_pull_request_comments_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table
 * "git_pull_request_review_comment_state". All fields are combined with a logical 'AND'.
 */
export interface git_pull_request_review_comment_state_bool_exp {
  _and?: (git_pull_request_review_comment_state_bool_exp | null)[] | null;
  _not?: git_pull_request_review_comment_state_bool_exp | null;
  _or?: (git_pull_request_review_comment_state_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  git_pull_request_review_comments?: git_pull_request_review_comments_bool_exp | null;
  id?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "git_pull_request_review_comment_state"
 */
export interface git_pull_request_review_comment_state_insert_input {
  description?: string | null;
  git_pull_request_review_comments?: git_pull_request_review_comments_arr_rel_insert_input | null;
  id?: string | null;
}

/**
 * input type for inserting object relation for remote table "git_pull_request_review_comment_state"
 */
export interface git_pull_request_review_comment_state_obj_rel_insert_input {
  data: git_pull_request_review_comment_state_insert_input;
  on_conflict?: git_pull_request_review_comment_state_on_conflict | null;
}

/**
 * on conflict condition type for table "git_pull_request_review_comment_state"
 */
export interface git_pull_request_review_comment_state_on_conflict {
  constraint: git_pull_request_review_comment_state_constraint;
  update_columns: git_pull_request_review_comment_state_update_column[];
  where?: git_pull_request_review_comment_state_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "git_pull_request_review_comments"
 */
export interface git_pull_request_review_comments_arr_rel_insert_input {
  data: git_pull_request_review_comments_insert_input[];
  on_conflict?: git_pull_request_review_comments_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table
 * "git_pull_request_review_comments". All fields are combined with a logical 'AND'.
 */
export interface git_pull_request_review_comments_bool_exp {
  _and?: (git_pull_request_review_comments_bool_exp | null)[] | null;
  _not?: git_pull_request_review_comments_bool_exp | null;
  _or?: (git_pull_request_review_comments_bool_exp | null)[] | null;
  authorUsername?: String_comparison_exp | null;
  body?: String_comparison_exp | null;
  commitId?: Int_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  diffHunk?: String_comparison_exp | null;
  gitCommitByCommitid?: git_commits_bool_exp | null;
  git_comment_reactions?: git_comment_reactions_bool_exp | null;
  git_commit?: git_commits_bool_exp | null;
  git_pull_request?: git_pull_requests_bool_exp | null;
  git_pull_request_review?: git_pull_request_reviews_bool_exp | null;
  git_pull_request_review_comment?: git_pull_request_review_comments_bool_exp | null;
  git_pull_request_review_comment_state?: git_pull_request_review_comment_state_bool_exp | null;
  git_pull_request_review_comments?: git_pull_request_review_comments_bool_exp | null;
  git_pull_request_review_thread?: git_pull_request_review_threads_bool_exp | null;
  git_user?: git_users_bool_exp | null;
  githubPullRequestReviewCommentSid?: String_comparison_exp | null;
  github_pull_request_review_comment?: github_pull_request_review_comments_bool_exp | null;
  id?: Int_comparison_exp | null;
  originalCommitId?: Int_comparison_exp | null;
  originalPosition?: Int_comparison_exp | null;
  outdated?: Boolean_comparison_exp | null;
  path?: String_comparison_exp | null;
  position?: Int_comparison_exp | null;
  pullRequestId?: Int_comparison_exp | null;
  pullRequestReviewId?: Int_comparison_exp | null;
  pullRequestReviewThreadId?: Int_comparison_exp | null;
  replyToCommentId?: Int_comparison_exp | null;
  state?: String_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "git_pull_request_review_comments"
 */
export interface git_pull_request_review_comments_insert_input {
  authorUsername?: string | null;
  body?: string | null;
  commitId?: number | null;
  createdAt?: hasura_timestamptz | null;
  diffHunk?: string | null;
  gitCommitByCommitid?: git_commits_obj_rel_insert_input | null;
  git_comment_reactions?: git_comment_reactions_arr_rel_insert_input | null;
  git_commit?: git_commits_obj_rel_insert_input | null;
  git_pull_request?: git_pull_requests_obj_rel_insert_input | null;
  git_pull_request_review?: git_pull_request_reviews_obj_rel_insert_input | null;
  git_pull_request_review_comment?: git_pull_request_review_comments_obj_rel_insert_input | null;
  git_pull_request_review_comment_state?: git_pull_request_review_comment_state_obj_rel_insert_input | null;
  git_pull_request_review_comments?: git_pull_request_review_comments_arr_rel_insert_input | null;
  git_pull_request_review_thread?: git_pull_request_review_threads_obj_rel_insert_input | null;
  git_user?: git_users_obj_rel_insert_input | null;
  githubPullRequestReviewCommentSid?: string | null;
  github_pull_request_review_comment?: github_pull_request_review_comments_obj_rel_insert_input | null;
  id?: number | null;
  originalCommitId?: number | null;
  originalPosition?: number | null;
  outdated?: boolean | null;
  path?: string | null;
  position?: number | null;
  pullRequestId?: number | null;
  pullRequestReviewId?: number | null;
  pullRequestReviewThreadId?: number | null;
  replyToCommentId?: number | null;
  state?: string | null;
  updatedAt?: hasura_timestamptz | null;
}

/**
 * input type for inserting object relation for remote table "git_pull_request_review_comments"
 */
export interface git_pull_request_review_comments_obj_rel_insert_input {
  data: git_pull_request_review_comments_insert_input;
  on_conflict?: git_pull_request_review_comments_on_conflict | null;
}

/**
 * on conflict condition type for table "git_pull_request_review_comments"
 */
export interface git_pull_request_review_comments_on_conflict {
  constraint: git_pull_request_review_comments_constraint;
  update_columns: git_pull_request_review_comments_update_column[];
  where?: git_pull_request_review_comments_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table
 * "git_pull_request_review_state". All fields are combined with a logical 'AND'.
 */
export interface git_pull_request_review_state_bool_exp {
  _and?: (git_pull_request_review_state_bool_exp | null)[] | null;
  _not?: git_pull_request_review_state_bool_exp | null;
  _or?: (git_pull_request_review_state_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  git_pull_request_reviews?: git_pull_request_reviews_bool_exp | null;
  id?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "git_pull_request_review_state"
 */
export interface git_pull_request_review_state_insert_input {
  description?: string | null;
  git_pull_request_reviews?: git_pull_request_reviews_arr_rel_insert_input | null;
  id?: string | null;
}

/**
 * input type for inserting object relation for remote table "git_pull_request_review_state"
 */
export interface git_pull_request_review_state_obj_rel_insert_input {
  data: git_pull_request_review_state_insert_input;
  on_conflict?: git_pull_request_review_state_on_conflict | null;
}

/**
 * on conflict condition type for table "git_pull_request_review_state"
 */
export interface git_pull_request_review_state_on_conflict {
  constraint: git_pull_request_review_state_constraint;
  update_columns: git_pull_request_review_state_update_column[];
  where?: git_pull_request_review_state_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "git_pull_request_review_threads"
 */
export interface git_pull_request_review_threads_arr_rel_insert_input {
  data: git_pull_request_review_threads_insert_input[];
  on_conflict?: git_pull_request_review_threads_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table
 * "git_pull_request_review_threads". All fields are combined with a logical 'AND'.
 */
export interface git_pull_request_review_threads_bool_exp {
  _and?: (git_pull_request_review_threads_bool_exp | null)[] | null;
  _not?: git_pull_request_review_threads_bool_exp | null;
  _or?: (git_pull_request_review_threads_bool_exp | null)[] | null;
  createdAt?: timestamptz_comparison_exp | null;
  git_pull_request?: git_pull_requests_bool_exp | null;
  git_pull_request_review_comments?: git_pull_request_review_comments_bool_exp | null;
  githubPullRequestReviewThreadSid?: String_comparison_exp | null;
  github_pull_request_review_thread?: github_pull_request_review_threads_bool_exp | null;
  id?: Int_comparison_exp | null;
  isResolved?: Boolean_comparison_exp | null;
  pullRequestId?: Int_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "git_pull_request_review_threads"
 */
export interface git_pull_request_review_threads_insert_input {
  createdAt?: hasura_timestamptz | null;
  git_pull_request?: git_pull_requests_obj_rel_insert_input | null;
  git_pull_request_review_comments?: git_pull_request_review_comments_arr_rel_insert_input | null;
  githubPullRequestReviewThreadSid?: string | null;
  github_pull_request_review_thread?: github_pull_request_review_threads_obj_rel_insert_input | null;
  id?: number | null;
  isResolved?: boolean | null;
  pullRequestId?: number | null;
  updatedAt?: hasura_timestamptz | null;
}

/**
 * input type for inserting object relation for remote table "git_pull_request_review_threads"
 */
export interface git_pull_request_review_threads_obj_rel_insert_input {
  data: git_pull_request_review_threads_insert_input;
  on_conflict?: git_pull_request_review_threads_on_conflict | null;
}

/**
 * on conflict condition type for table "git_pull_request_review_threads"
 */
export interface git_pull_request_review_threads_on_conflict {
  constraint: git_pull_request_review_threads_constraint;
  update_columns: git_pull_request_review_threads_update_column[];
  where?: git_pull_request_review_threads_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "git_pull_request_reviewers"
 */
export interface git_pull_request_reviewers_arr_rel_insert_input {
  data: git_pull_request_reviewers_insert_input[];
  on_conflict?: git_pull_request_reviewers_on_conflict | null;
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
  git_user?: git_users_bool_exp | null;
  pullRequestId?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "git_pull_request_reviewers"
 */
export interface git_pull_request_reviewers_insert_input {
  accountUsername?: string | null;
  git_pull_request?: git_pull_requests_obj_rel_insert_input | null;
  git_user?: git_users_obj_rel_insert_input | null;
  pullRequestId?: number | null;
}

/**
 * on conflict condition type for table "git_pull_request_reviewers"
 */
export interface git_pull_request_reviewers_on_conflict {
  constraint: git_pull_request_reviewers_constraint;
  update_columns: git_pull_request_reviewers_update_column[];
  where?: git_pull_request_reviewers_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "git_pull_request_reviews"
 */
export interface git_pull_request_reviews_arr_rel_insert_input {
  data: git_pull_request_reviews_insert_input[];
  on_conflict?: git_pull_request_reviews_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "git_pull_request_reviews". All fields are combined with a logical 'AND'.
 */
export interface git_pull_request_reviews_bool_exp {
  _and?: (git_pull_request_reviews_bool_exp | null)[] | null;
  _not?: git_pull_request_reviews_bool_exp | null;
  _or?: (git_pull_request_reviews_bool_exp | null)[] | null;
  authorUsername?: String_comparison_exp | null;
  body?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  git_comment_reactions?: git_comment_reactions_bool_exp | null;
  git_pull_request?: git_pull_requests_bool_exp | null;
  git_pull_request_review_comments?: git_pull_request_review_comments_bool_exp | null;
  git_pull_request_review_state?: git_pull_request_review_state_bool_exp | null;
  git_user?: git_users_bool_exp | null;
  githubPullRequestReviewSid?: String_comparison_exp | null;
  github_pull_request_review?: github_pull_request_reviews_bool_exp | null;
  id?: Int_comparison_exp | null;
  pullRequestId?: Int_comparison_exp | null;
  state?: String_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "git_pull_request_reviews"
 */
export interface git_pull_request_reviews_insert_input {
  authorUsername?: string | null;
  body?: string | null;
  createdAt?: hasura_timestamptz | null;
  git_comment_reactions?: git_comment_reactions_arr_rel_insert_input | null;
  git_pull_request?: git_pull_requests_obj_rel_insert_input | null;
  git_pull_request_review_comments?: git_pull_request_review_comments_arr_rel_insert_input | null;
  git_pull_request_review_state?: git_pull_request_review_state_obj_rel_insert_input | null;
  git_user?: git_users_obj_rel_insert_input | null;
  githubPullRequestReviewSid?: string | null;
  github_pull_request_review?: github_pull_request_reviews_obj_rel_insert_input | null;
  id?: number | null;
  pullRequestId?: number | null;
  state?: string | null;
  updatedAt?: hasura_timestamptz | null;
}

/**
 * input type for inserting object relation for remote table "git_pull_request_reviews"
 */
export interface git_pull_request_reviews_obj_rel_insert_input {
  data: git_pull_request_reviews_insert_input;
  on_conflict?: git_pull_request_reviews_on_conflict | null;
}

/**
 * on conflict condition type for table "git_pull_request_reviews"
 */
export interface git_pull_request_reviews_on_conflict {
  constraint: git_pull_request_reviews_constraint;
  update_columns: git_pull_request_reviews_update_column[];
  where?: git_pull_request_reviews_bool_exp | null;
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
 * input type for inserting data into table "git_pull_request_state"
 */
export interface git_pull_request_state_insert_input {
  description?: string | null;
  git_pull_requests?: git_pull_requests_arr_rel_insert_input | null;
  id?: string | null;
}

/**
 * input type for inserting object relation for remote table "git_pull_request_state"
 */
export interface git_pull_request_state_obj_rel_insert_input {
  data: git_pull_request_state_insert_input;
  on_conflict?: git_pull_request_state_on_conflict | null;
}

/**
 * on conflict condition type for table "git_pull_request_state"
 */
export interface git_pull_request_state_on_conflict {
  constraint: git_pull_request_state_constraint;
  update_columns: git_pull_request_state_update_column[];
  where?: git_pull_request_state_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "git_pull_requests"
 */
export interface git_pull_requests_arr_rel_insert_input {
  data: git_pull_requests_insert_input[];
  on_conflict?: git_pull_requests_on_conflict | null;
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
  createdAt?: timestamptz_comparison_exp | null;
  gitBranchByTargetbranchid?: git_branches_bool_exp | null;
  git_branch?: git_branches_bool_exp | null;
  git_comment_reactions?: git_comment_reactions_bool_exp | null;
  git_pull_request_assignees?: git_pull_request_assignees_bool_exp | null;
  git_pull_request_comments?: git_pull_request_comments_bool_exp | null;
  git_pull_request_review_comments?: git_pull_request_review_comments_bool_exp | null;
  git_pull_request_review_threads?: git_pull_request_review_threads_bool_exp | null;
  git_pull_request_reviewers?: git_pull_request_reviewers_bool_exp | null;
  git_pull_request_reviews?: git_pull_request_reviews_bool_exp | null;
  git_pull_request_state?: git_pull_request_state_bool_exp | null;
  git_repo?: git_repos_bool_exp | null;
  git_user?: git_users_bool_exp | null;
  githubPullRequestSid?: String_comparison_exp | null;
  github_pull_request?: github_pull_requests_bool_exp | null;
  id?: Int_comparison_exp | null;
  isDraft?: Boolean_comparison_exp | null;
  isMerged?: Boolean_comparison_exp | null;
  mergeable?: Boolean_comparison_exp | null;
  mergedAt?: timestamptz_comparison_exp | null;
  repoId?: Int_comparison_exp | null;
  state?: String_comparison_exp | null;
  targetBranchId?: Int_comparison_exp | null;
  title?: String_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "git_pull_requests"
 */
export interface git_pull_requests_insert_input {
  authorUsername?: string | null;
  baseBranchId?: number | null;
  body?: string | null;
  createdAt?: hasura_timestamptz | null;
  gitBranchByTargetbranchid?: git_branches_obj_rel_insert_input | null;
  git_branch?: git_branches_obj_rel_insert_input | null;
  git_comment_reactions?: git_comment_reactions_arr_rel_insert_input | null;
  git_pull_request_assignees?: git_pull_request_assignees_arr_rel_insert_input | null;
  git_pull_request_comments?: git_pull_request_comments_arr_rel_insert_input | null;
  git_pull_request_review_comments?: git_pull_request_review_comments_arr_rel_insert_input | null;
  git_pull_request_review_threads?: git_pull_request_review_threads_arr_rel_insert_input | null;
  git_pull_request_reviewers?: git_pull_request_reviewers_arr_rel_insert_input | null;
  git_pull_request_reviews?: git_pull_request_reviews_arr_rel_insert_input | null;
  git_pull_request_state?: git_pull_request_state_obj_rel_insert_input | null;
  git_repo?: git_repos_obj_rel_insert_input | null;
  git_user?: git_users_obj_rel_insert_input | null;
  githubPullRequestSid?: string | null;
  github_pull_request?: github_pull_requests_obj_rel_insert_input | null;
  id?: number | null;
  isDraft?: boolean | null;
  isMerged?: boolean | null;
  mergeable?: boolean | null;
  mergedAt?: hasura_timestamptz | null;
  repoId?: number | null;
  state?: string | null;
  targetBranchId?: number | null;
  title?: string | null;
  updatedAt?: hasura_timestamptz | null;
}

/**
 * input type for inserting object relation for remote table "git_pull_requests"
 */
export interface git_pull_requests_obj_rel_insert_input {
  data: git_pull_requests_insert_input;
  on_conflict?: git_pull_requests_on_conflict | null;
}

/**
 * on conflict condition type for table "git_pull_requests"
 */
export interface git_pull_requests_on_conflict {
  constraint: git_pull_requests_constraint;
  update_columns: git_pull_requests_update_column[];
  where?: git_pull_requests_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "git_repo_users"
 */
export interface git_repo_users_arr_rel_insert_input {
  data: git_repo_users_insert_input[];
  on_conflict?: git_repo_users_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "git_repo_users". All fields are combined with a logical 'AND'.
 */
export interface git_repo_users_bool_exp {
  _and?: (git_repo_users_bool_exp | null)[] | null;
  _not?: git_repo_users_bool_exp | null;
  _or?: (git_repo_users_bool_exp | null)[] | null;
  accountUsername?: String_comparison_exp | null;
  git_repo?: git_repos_bool_exp | null;
  git_user?: git_users_bool_exp | null;
  repoId?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "git_repo_users"
 */
export interface git_repo_users_insert_input {
  accountUsername?: string | null;
  git_repo?: git_repos_obj_rel_insert_input | null;
  git_user?: git_users_obj_rel_insert_input | null;
  repoId?: number | null;
}

/**
 * on conflict condition type for table "git_repo_users"
 */
export interface git_repo_users_on_conflict {
  constraint: git_repo_users_constraint;
  update_columns: git_repo_users_update_column[];
  where?: git_repo_users_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "git_repos"
 */
export interface git_repos_arr_rel_insert_input {
  data: git_repos_insert_input[];
  on_conflict?: git_repos_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "git_repos". All fields are combined with a logical 'AND'.
 */
export interface git_repos_bool_exp {
  _and?: (git_repos_bool_exp | null)[] | null;
  _not?: git_repos_bool_exp | null;
  _or?: (git_repos_bool_exp | null)[] | null;
  createdAt?: timestamptz_comparison_exp | null;
  description?: String_comparison_exp | null;
  git_branch?: git_branches_bool_exp | null;
  git_branches?: git_branches_bool_exp | null;
  git_organization?: git_organizations_bool_exp | null;
  git_pull_requests?: git_pull_requests_bool_exp | null;
  git_repo_users?: git_repo_users_bool_exp | null;
  githubRepoSid?: String_comparison_exp | null;
  github_repo?: github_repos_bool_exp | null;
  id?: Int_comparison_exp | null;
  ignoredPaths?: String_comparison_exp | null;
  isArchived?: Boolean_comparison_exp | null;
  isDisabled?: Boolean_comparison_exp | null;
  isFork?: Boolean_comparison_exp | null;
  isLocked?: Boolean_comparison_exp | null;
  isPrivate?: Boolean_comparison_exp | null;
  isTemplate?: Boolean_comparison_exp | null;
  name?: String_comparison_exp | null;
  organizationId?: Int_comparison_exp | null;
  slicedFolders?: String_comparison_exp | null;
  slicedFromId?: Int_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  user_onboarded_repos?: user_onboarded_repos_bool_exp | null;
}

/**
 * input type for inserting data into table "git_repos"
 */
export interface git_repos_insert_input {
  createdAt?: hasura_timestamptz | null;
  description?: string | null;
  git_branch?: git_branches_obj_rel_insert_input | null;
  git_branches?: git_branches_arr_rel_insert_input | null;
  git_organization?: git_organizations_obj_rel_insert_input | null;
  git_pull_requests?: git_pull_requests_arr_rel_insert_input | null;
  git_repo_users?: git_repo_users_arr_rel_insert_input | null;
  githubRepoSid?: string | null;
  github_repo?: github_repos_obj_rel_insert_input | null;
  id?: number | null;
  ignoredPaths?: string | null;
  isArchived?: boolean | null;
  isDisabled?: boolean | null;
  isFork?: boolean | null;
  isLocked?: boolean | null;
  isPrivate?: boolean | null;
  isTemplate?: boolean | null;
  name?: string | null;
  organizationId?: number | null;
  slicedFolders?: string | null;
  slicedFromId?: number | null;
  updatedAt?: hasura_timestamptz | null;
  user_onboarded_repos?: user_onboarded_repos_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "git_repos"
 */
export interface git_repos_obj_rel_insert_input {
  data: git_repos_insert_input;
  on_conflict?: git_repos_on_conflict | null;
}

/**
 * on conflict condition type for table "git_repos"
 */
export interface git_repos_on_conflict {
  constraint: git_repos_constraint;
  update_columns: git_repos_update_column[];
  where?: git_repos_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "git_users"
 */
export interface git_users_arr_rel_insert_input {
  data: git_users_insert_input[];
  on_conflict?: git_users_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "git_users". All fields are combined with a logical 'AND'.
 */
export interface git_users_bool_exp {
  _and?: (git_users_bool_exp | null)[] | null;
  _not?: git_users_bool_exp | null;
  _or?: (git_users_bool_exp | null)[] | null;
  agency?: agencies_bool_exp | null;
  agencyId?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  email?: String_comparison_exp | null;
  git_comment_reactions?: git_comment_reactions_bool_exp | null;
  git_commits?: git_commits_bool_exp | null;
  git_pull_request_assignees?: git_pull_request_assignees_bool_exp | null;
  git_pull_request_comments?: git_pull_request_comments_bool_exp | null;
  git_pull_request_review_comments?: git_pull_request_review_comments_bool_exp | null;
  git_pull_request_reviewers?: git_pull_request_reviewers_bool_exp | null;
  git_pull_request_reviews?: git_pull_request_reviews_bool_exp | null;
  git_pull_requests?: git_pull_requests_bool_exp | null;
  git_repo_users?: git_repo_users_bool_exp | null;
  githubAccountSid?: String_comparison_exp | null;
  github_account?: github_accounts_bool_exp | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  password?: String_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
  userLogin?: String_comparison_exp | null;
  user_email?: user_emails_bool_exp | null;
  username?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "git_users"
 */
export interface git_users_insert_input {
  agency?: agencies_obj_rel_insert_input | null;
  agencyId?: string | null;
  createdAt?: hasura_timestamptz | null;
  email?: string | null;
  git_comment_reactions?: git_comment_reactions_arr_rel_insert_input | null;
  git_commits?: git_commits_arr_rel_insert_input | null;
  git_pull_request_assignees?: git_pull_request_assignees_arr_rel_insert_input | null;
  git_pull_request_comments?: git_pull_request_comments_arr_rel_insert_input | null;
  git_pull_request_review_comments?: git_pull_request_review_comments_arr_rel_insert_input | null;
  git_pull_request_reviewers?: git_pull_request_reviewers_arr_rel_insert_input | null;
  git_pull_request_reviews?: git_pull_request_reviews_arr_rel_insert_input | null;
  git_pull_requests?: git_pull_requests_arr_rel_insert_input | null;
  git_repo_users?: git_repo_users_arr_rel_insert_input | null;
  githubAccountSid?: string | null;
  github_account?: github_accounts_obj_rel_insert_input | null;
  id?: number | null;
  name?: string | null;
  password?: string | null;
  updatedAt?: hasura_timestamptz | null;
  user?: users_obj_rel_insert_input | null;
  userLogin?: string | null;
  user_email?: user_emails_obj_rel_insert_input | null;
  username?: string | null;
}

/**
 * input type for inserting object relation for remote table "git_users"
 */
export interface git_users_obj_rel_insert_input {
  data: git_users_insert_input;
  on_conflict?: git_users_on_conflict | null;
}

/**
 * on conflict condition type for table "git_users"
 */
export interface git_users_on_conflict {
  constraint: git_users_constraint;
  update_columns: git_users_update_column[];
  where?: git_users_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_accounts"
 */
export interface github_accounts_arr_rel_insert_input {
  data: github_accounts_insert_input[];
  on_conflict?: github_accounts_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "github_accounts". All fields are combined with a logical 'AND'.
 */
export interface github_accounts_bool_exp {
  _and?: (github_accounts_bool_exp | null)[] | null;
  _not?: github_accounts_bool_exp | null;
  _or?: (github_accounts_bool_exp | null)[] | null;
  agency?: agencies_bool_exp | null;
  agencyId?: String_comparison_exp | null;
  avatarUrl?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  email?: String_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  git_user?: git_users_bool_exp | null;
  github_app_installations?: github_app_installations_bool_exp | null;
  github_apps?: github_apps_bool_exp | null;
  github_code_comments?: github_code_comments_bool_exp | null;
  github_comment_reactions?: github_comment_reactions_bool_exp | null;
  github_comments?: github_comments_bool_exp | null;
  github_commits?: github_commits_bool_exp | null;
  github_issue_assignees?: github_issue_assignees_bool_exp | null;
  github_issue_comments?: github_issue_comments_bool_exp | null;
  github_issues?: github_issues_bool_exp | null;
  github_pull_request_assignees?: github_pull_request_assignees_bool_exp | null;
  github_pull_request_comments?: github_pull_request_comments_bool_exp | null;
  github_pull_request_review_comments?: github_pull_request_review_comments_bool_exp | null;
  github_pull_request_reviewers?: github_pull_request_reviewers_bool_exp | null;
  github_pull_request_reviews?: github_pull_request_reviews_bool_exp | null;
  github_pull_requests?: github_pull_requests_bool_exp | null;
  github_repo_users?: github_repo_users_bool_exp | null;
  github_token?: github_tokens_bool_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  login?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
  password?: String_comparison_exp | null;
  personalAccessToken?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
  user_email?: user_emails_bool_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_accounts"
 */
export interface github_accounts_insert_input {
  agency?: agencies_obj_rel_insert_input | null;
  agencyId?: string | null;
  avatarUrl?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  email?: string | null;
  expiresInType?: job_intervals_enum | null;
  git_user?: git_users_obj_rel_insert_input | null;
  github_app_installations?: github_app_installations_arr_rel_insert_input | null;
  github_apps?: github_apps_arr_rel_insert_input | null;
  github_code_comments?: github_code_comments_arr_rel_insert_input | null;
  github_comment_reactions?: github_comment_reactions_arr_rel_insert_input | null;
  github_comments?: github_comments_arr_rel_insert_input | null;
  github_commits?: github_commits_arr_rel_insert_input | null;
  github_issue_assignees?: github_issue_assignees_arr_rel_insert_input | null;
  github_issue_comments?: github_issue_comments_arr_rel_insert_input | null;
  github_issues?: github_issues_arr_rel_insert_input | null;
  github_pull_request_assignees?: github_pull_request_assignees_arr_rel_insert_input | null;
  github_pull_request_comments?: github_pull_request_comments_arr_rel_insert_input | null;
  github_pull_request_review_comments?: github_pull_request_review_comments_arr_rel_insert_input | null;
  github_pull_request_reviewers?: github_pull_request_reviewers_arr_rel_insert_input | null;
  github_pull_request_reviews?: github_pull_request_reviews_arr_rel_insert_input | null;
  github_pull_requests?: github_pull_requests_arr_rel_insert_input | null;
  github_repo_users?: github_repo_users_arr_rel_insert_input | null;
  github_token?: github_tokens_obj_rel_insert_input | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  login?: string | null;
  name?: string | null;
  password?: string | null;
  personalAccessToken?: string | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  user?: users_obj_rel_insert_input | null;
  user_email?: user_emails_obj_rel_insert_input | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "github_accounts"
 */
export interface github_accounts_obj_rel_insert_input {
  data: github_accounts_insert_input;
  on_conflict?: github_accounts_on_conflict | null;
}

/**
 * on conflict condition type for table "github_accounts"
 */
export interface github_accounts_on_conflict {
  constraint: github_accounts_constraint;
  update_columns: github_accounts_update_column[];
  where?: github_accounts_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_app_installations"
 */
export interface github_app_installations_arr_rel_insert_input {
  data: github_app_installations_insert_input[];
  on_conflict?: github_app_installations_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "github_app_installations". All fields are combined with a logical 'AND'.
 */
export interface github_app_installations_bool_exp {
  _and?: (github_app_installations_bool_exp | null)[] | null;
  _not?: github_app_installations_bool_exp | null;
  _or?: (github_app_installations_bool_exp | null)[] | null;
  accountSid?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  githubAppSid?: String_comparison_exp | null;
  github_account?: github_accounts_bool_exp | null;
  github_app?: github_apps_bool_exp | null;
  github_organization?: github_organizations_bool_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  organizationSid?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_app_installations"
 */
export interface github_app_installations_insert_input {
  accountSid?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  githubAppSid?: string | null;
  github_account?: github_accounts_obj_rel_insert_input | null;
  github_app?: github_apps_obj_rel_insert_input | null;
  github_organization?: github_organizations_obj_rel_insert_input | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  organizationSid?: string | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * on conflict condition type for table "github_app_installations"
 */
export interface github_app_installations_on_conflict {
  constraint: github_app_installations_constraint;
  update_columns: github_app_installations_update_column[];
  where?: github_app_installations_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_apps"
 */
export interface github_apps_arr_rel_insert_input {
  data: github_apps_insert_input[];
  on_conflict?: github_apps_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "github_apps". All fields are combined with a logical 'AND'.
 */
export interface github_apps_bool_exp {
  _and?: (github_apps_bool_exp | null)[] | null;
  _not?: github_apps_bool_exp | null;
  _or?: (github_apps_bool_exp | null)[] | null;
  adminAccountSid?: String_comparison_exp | null;
  admingOrganizationSid?: String_comparison_exp | null;
  clientId?: String_comparison_exp | null;
  clientSecret?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  github_account?: github_accounts_bool_exp | null;
  github_app_installations?: github_app_installations_bool_exp | null;
  github_organization?: github_organizations_bool_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  name?: String_comparison_exp | null;
  privateKey?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_apps"
 */
export interface github_apps_insert_input {
  adminAccountSid?: string | null;
  admingOrganizationSid?: string | null;
  clientId?: string | null;
  clientSecret?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  github_account?: github_accounts_obj_rel_insert_input | null;
  github_app_installations?: github_app_installations_arr_rel_insert_input | null;
  github_organization?: github_organizations_obj_rel_insert_input | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  name?: string | null;
  privateKey?: string | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "github_apps"
 */
export interface github_apps_obj_rel_insert_input {
  data: github_apps_insert_input;
  on_conflict?: github_apps_on_conflict | null;
}

/**
 * on conflict condition type for table "github_apps"
 */
export interface github_apps_on_conflict {
  constraint: github_apps_constraint;
  update_columns: github_apps_update_column[];
  where?: github_apps_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_branch_commits"
 */
export interface github_branch_commits_arr_rel_insert_input {
  data: github_branch_commits_insert_input[];
  on_conflict?: github_branch_commits_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "github_branch_commits". All fields are combined with a logical 'AND'.
 */
export interface github_branch_commits_bool_exp {
  _and?: (github_branch_commits_bool_exp | null)[] | null;
  _not?: github_branch_commits_bool_exp | null;
  _or?: (github_branch_commits_bool_exp | null)[] | null;
  branchSid?: String_comparison_exp | null;
  commitSid?: String_comparison_exp | null;
  github_branch?: github_branches_bool_exp | null;
  github_commit?: github_commits_bool_exp | null;
}

/**
 * input type for inserting data into table "github_branch_commits"
 */
export interface github_branch_commits_insert_input {
  branchSid?: string | null;
  commitSid?: string | null;
  github_branch?: github_branches_obj_rel_insert_input | null;
  github_commit?: github_commits_obj_rel_insert_input | null;
}

/**
 * on conflict condition type for table "github_branch_commits"
 */
export interface github_branch_commits_on_conflict {
  constraint: github_branch_commits_constraint;
  update_columns: github_branch_commits_update_column[];
  where?: github_branch_commits_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_branches"
 */
export interface github_branches_arr_rel_insert_input {
  data: github_branches_insert_input[];
  on_conflict?: github_branches_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "github_branches". All fields are combined with a logical 'AND'.
 */
export interface github_branches_bool_exp {
  _and?: (github_branches_bool_exp | null)[] | null;
  _not?: github_branches_bool_exp | null;
  _or?: (github_branches_bool_exp | null)[] | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  git_branch?: git_branches_bool_exp | null;
  githubPullRequestsByTargetbranchsid?: github_pull_requests_bool_exp | null;
  github_branch_commits?: github_branch_commits_bool_exp | null;
  github_commit?: github_commits_bool_exp | null;
  github_pull_requests?: github_pull_requests_bool_exp | null;
  github_repo?: github_repos_bool_exp | null;
  headCommitSid?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  name?: String_comparison_exp | null;
  oid?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  repoSid?: String_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_branches"
 */
export interface github_branches_insert_input {
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  git_branch?: git_branches_obj_rel_insert_input | null;
  githubPullRequestsByTargetbranchsid?: github_pull_requests_arr_rel_insert_input | null;
  github_branch_commits?: github_branch_commits_arr_rel_insert_input | null;
  github_commit?: github_commits_obj_rel_insert_input | null;
  github_pull_requests?: github_pull_requests_arr_rel_insert_input | null;
  github_repo?: github_repos_obj_rel_insert_input | null;
  headCommitSid?: string | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  name?: string | null;
  oid?: string | null;
  redundantFields?: hasura_jsonb | null;
  repoSid?: string | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "github_branches"
 */
export interface github_branches_obj_rel_insert_input {
  data: github_branches_insert_input;
  on_conflict?: github_branches_on_conflict | null;
}

/**
 * on conflict condition type for table "github_branches"
 */
export interface github_branches_on_conflict {
  constraint: github_branches_constraint;
  update_columns: github_branches_update_column[];
  where?: github_branches_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_code_comments"
 */
export interface github_code_comments_arr_rel_insert_input {
  data: github_code_comments_insert_input[];
  on_conflict?: github_code_comments_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "github_code_comments". All fields are combined with a logical 'AND'.
 */
export interface github_code_comments_bool_exp {
  _and?: (github_code_comments_bool_exp | null)[] | null;
  _not?: github_code_comments_bool_exp | null;
  _or?: (github_code_comments_bool_exp | null)[] | null;
  authorLogin?: String_comparison_exp | null;
  body?: String_comparison_exp | null;
  commitSid?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  diffHunk?: String_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  github_account?: github_accounts_bool_exp | null;
  github_commit?: github_commits_bool_exp | null;
  github_pull_request?: github_pull_requests_bool_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  path?: String_comparison_exp | null;
  pullRequestSid?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  sid?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_code_comments"
 */
export interface github_code_comments_insert_input {
  authorLogin?: string | null;
  body?: string | null;
  commitSid?: string | null;
  createdAt?: hasura_timestamptz | null;
  diffHunk?: string | null;
  expiresInType?: job_intervals_enum | null;
  github_account?: github_accounts_obj_rel_insert_input | null;
  github_commit?: github_commits_obj_rel_insert_input | null;
  github_pull_request?: github_pull_requests_obj_rel_insert_input | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  path?: string | null;
  pullRequestSid?: string | null;
  redundantFields?: hasura_jsonb | null;
  sid?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
}

/**
 * on conflict condition type for table "github_code_comments"
 */
export interface github_code_comments_on_conflict {
  constraint: github_code_comments_constraint;
  update_columns: github_code_comments_update_column[];
  where?: github_code_comments_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_comment_reactions"
 */
export interface github_comment_reactions_arr_rel_insert_input {
  data: github_comment_reactions_insert_input[];
  on_conflict?: github_comment_reactions_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "github_comment_reactions". All fields are combined with a logical 'AND'.
 */
export interface github_comment_reactions_bool_exp {
  _and?: (github_comment_reactions_bool_exp | null)[] | null;
  _not?: github_comment_reactions_bool_exp | null;
  _or?: (github_comment_reactions_bool_exp | null)[] | null;
  authorLogin?: String_comparison_exp | null;
  content?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  git_comment_reaction?: git_comment_reactions_bool_exp | null;
  github_account?: github_accounts_bool_exp | null;
  github_issue?: github_issues_bool_exp | null;
  github_issue_comment?: github_issue_comments_bool_exp | null;
  github_pull_request?: github_pull_requests_bool_exp | null;
  github_pull_request_comment?: github_pull_request_comments_bool_exp | null;
  github_pull_request_review?: github_pull_request_reviews_bool_exp | null;
  github_pull_request_review_comment?: github_pull_request_review_comments_bool_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  issueCommentSid?: String_comparison_exp | null;
  issueSid?: String_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  pullRequestCommentSid?: String_comparison_exp | null;
  pullRequestReviewCommentSid?: String_comparison_exp | null;
  pullRequestReviewSid?: String_comparison_exp | null;
  pullRequestSid?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_comment_reactions"
 */
export interface github_comment_reactions_insert_input {
  authorLogin?: string | null;
  content?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  git_comment_reaction?: git_comment_reactions_obj_rel_insert_input | null;
  github_account?: github_accounts_obj_rel_insert_input | null;
  github_issue?: github_issues_obj_rel_insert_input | null;
  github_issue_comment?: github_issue_comments_obj_rel_insert_input | null;
  github_pull_request?: github_pull_requests_obj_rel_insert_input | null;
  github_pull_request_comment?: github_pull_request_comments_obj_rel_insert_input | null;
  github_pull_request_review?: github_pull_request_reviews_obj_rel_insert_input | null;
  github_pull_request_review_comment?: github_pull_request_review_comments_obj_rel_insert_input | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  issueCommentSid?: string | null;
  issueSid?: string | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  pullRequestCommentSid?: string | null;
  pullRequestReviewCommentSid?: string | null;
  pullRequestReviewSid?: string | null;
  pullRequestSid?: string | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "github_comment_reactions"
 */
export interface github_comment_reactions_obj_rel_insert_input {
  data: github_comment_reactions_insert_input;
  on_conflict?: github_comment_reactions_on_conflict | null;
}

/**
 * on conflict condition type for table "github_comment_reactions"
 */
export interface github_comment_reactions_on_conflict {
  constraint: github_comment_reactions_constraint;
  update_columns: github_comment_reactions_update_column[];
  where?: github_comment_reactions_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_comments"
 */
export interface github_comments_arr_rel_insert_input {
  data: github_comments_insert_input[];
  on_conflict?: github_comments_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "github_comments". All fields are combined with a logical 'AND'.
 */
export interface github_comments_bool_exp {
  _and?: (github_comments_bool_exp | null)[] | null;
  _not?: github_comments_bool_exp | null;
  _or?: (github_comments_bool_exp | null)[] | null;
  authorLogin?: String_comparison_exp | null;
  body?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  github_account?: github_accounts_bool_exp | null;
  github_issue?: github_issues_bool_exp | null;
  github_pull_request?: github_pull_requests_bool_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  issueSid?: String_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  pullRequestSid?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  sid?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_comments"
 */
export interface github_comments_insert_input {
  authorLogin?: string | null;
  body?: string | null;
  createdAt?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  github_account?: github_accounts_obj_rel_insert_input | null;
  github_issue?: github_issues_obj_rel_insert_input | null;
  github_pull_request?: github_pull_requests_obj_rel_insert_input | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  issueSid?: string | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  pullRequestSid?: string | null;
  redundantFields?: hasura_jsonb | null;
  sid?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
}

/**
 * on conflict condition type for table "github_comments"
 */
export interface github_comments_on_conflict {
  constraint: github_comments_constraint;
  update_columns: github_comments_update_column[];
  where?: github_comments_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_commit_contexts"
 */
export interface github_commit_contexts_arr_rel_insert_input {
  data: github_commit_contexts_insert_input[];
  on_conflict?: github_commit_contexts_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "github_commit_contexts". All fields are combined with a logical 'AND'.
 */
export interface github_commit_contexts_bool_exp {
  _and?: (github_commit_contexts_bool_exp | null)[] | null;
  _not?: github_commit_contexts_bool_exp | null;
  _or?: (github_commit_contexts_bool_exp | null)[] | null;
  avatarUrl?: String_comparison_exp | null;
  commitSid?: String_comparison_exp | null;
  context?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  description?: String_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  git_commit_context?: git_commit_contexts_bool_exp | null;
  github_commit?: github_commits_bool_exp | null;
  github_commit_status?: github_commit_status_bool_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  status?: github_commit_status_enum_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  targetUrl?: String_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_commit_contexts"
 */
export interface github_commit_contexts_insert_input {
  avatarUrl?: string | null;
  commitSid?: string | null;
  context?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  description?: string | null;
  expiresInType?: job_intervals_enum | null;
  git_commit_context?: git_commit_contexts_obj_rel_insert_input | null;
  github_commit?: github_commits_obj_rel_insert_input | null;
  github_commit_status?: github_commit_status_obj_rel_insert_input | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  status?: github_commit_status_enum | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  targetUrl?: string | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "github_commit_contexts"
 */
export interface github_commit_contexts_obj_rel_insert_input {
  data: github_commit_contexts_insert_input;
  on_conflict?: github_commit_contexts_on_conflict | null;
}

/**
 * on conflict condition type for table "github_commit_contexts"
 */
export interface github_commit_contexts_on_conflict {
  constraint: github_commit_contexts_constraint;
  update_columns: github_commit_contexts_update_column[];
  where?: github_commit_contexts_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "github_commit_status". All fields are combined with a logical 'AND'.
 */
export interface github_commit_status_bool_exp {
  _and?: (github_commit_status_bool_exp | null)[] | null;
  _not?: github_commit_status_bool_exp | null;
  _or?: (github_commit_status_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  github_commit_contexts?: github_commit_contexts_bool_exp | null;
  github_commits?: github_commits_bool_exp | null;
  id?: String_comparison_exp | null;
}

/**
 * expression to compare columns of type github_commit_status_enum. All fields are combined with logical 'AND'.
 */
export interface github_commit_status_enum_comparison_exp {
  _eq?: github_commit_status_enum | null;
  _in?: github_commit_status_enum[] | null;
  _is_null?: boolean | null;
  _neq?: github_commit_status_enum | null;
  _nin?: github_commit_status_enum[] | null;
}

/**
 * input type for inserting data into table "github_commit_status"
 */
export interface github_commit_status_insert_input {
  description?: string | null;
  github_commit_contexts?: github_commit_contexts_arr_rel_insert_input | null;
  github_commits?: github_commits_arr_rel_insert_input | null;
  id?: string | null;
}

/**
 * input type for inserting object relation for remote table "github_commit_status"
 */
export interface github_commit_status_obj_rel_insert_input {
  data: github_commit_status_insert_input;
  on_conflict?: github_commit_status_on_conflict | null;
}

/**
 * on conflict condition type for table "github_commit_status"
 */
export interface github_commit_status_on_conflict {
  constraint: github_commit_status_constraint;
  update_columns: github_commit_status_update_column[];
  where?: github_commit_status_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_commits"
 */
export interface github_commits_arr_rel_insert_input {
  data: github_commits_insert_input[];
  on_conflict?: github_commits_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "github_commits". All fields are combined with a logical 'AND'.
 */
export interface github_commits_bool_exp {
  _and?: (github_commits_bool_exp | null)[] | null;
  _not?: github_commits_bool_exp | null;
  _or?: (github_commits_bool_exp | null)[] | null;
  authorLogin?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  git_commit?: git_commits_bool_exp | null;
  githubPullRequestReviewCommentsByOriginalcommitsid?: github_pull_request_review_comments_bool_exp | null;
  github_account?: github_accounts_bool_exp | null;
  github_branch_commits?: github_branch_commits_bool_exp | null;
  github_branches?: github_branches_bool_exp | null;
  github_code_comments?: github_code_comments_bool_exp | null;
  github_commit_contexts?: github_commit_contexts_bool_exp | null;
  github_commit_status?: github_commit_status_bool_exp | null;
  github_pull_request_review_comments?: github_pull_request_review_comments_bool_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  oid?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  status?: github_commit_status_enum_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_commits"
 */
export interface github_commits_insert_input {
  authorLogin?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  git_commit?: git_commits_obj_rel_insert_input | null;
  githubPullRequestReviewCommentsByOriginalcommitsid?: github_pull_request_review_comments_arr_rel_insert_input | null;
  github_account?: github_accounts_obj_rel_insert_input | null;
  github_branch_commits?: github_branch_commits_arr_rel_insert_input | null;
  github_branches?: github_branches_arr_rel_insert_input | null;
  github_code_comments?: github_code_comments_arr_rel_insert_input | null;
  github_commit_contexts?: github_commit_contexts_arr_rel_insert_input | null;
  github_commit_status?: github_commit_status_obj_rel_insert_input | null;
  github_pull_request_review_comments?: github_pull_request_review_comments_arr_rel_insert_input | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  oid?: string | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  status?: github_commit_status_enum | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "github_commits"
 */
export interface github_commits_obj_rel_insert_input {
  data: github_commits_insert_input;
  on_conflict?: github_commits_on_conflict | null;
}

/**
 * on conflict condition type for table "github_commits"
 */
export interface github_commits_on_conflict {
  constraint: github_commits_constraint;
  update_columns: github_commits_update_column[];
  where?: github_commits_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_issue_assignees"
 */
export interface github_issue_assignees_arr_rel_insert_input {
  data: github_issue_assignees_insert_input[];
  on_conflict?: github_issue_assignees_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "github_issue_assignees". All fields are combined with a logical 'AND'.
 */
export interface github_issue_assignees_bool_exp {
  _and?: (github_issue_assignees_bool_exp | null)[] | null;
  _not?: github_issue_assignees_bool_exp | null;
  _or?: (github_issue_assignees_bool_exp | null)[] | null;
  accountLogin?: String_comparison_exp | null;
  github_account?: github_accounts_bool_exp | null;
  github_issue?: github_issues_bool_exp | null;
  issueSid?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_issue_assignees"
 */
export interface github_issue_assignees_insert_input {
  accountLogin?: string | null;
  github_account?: github_accounts_obj_rel_insert_input | null;
  github_issue?: github_issues_obj_rel_insert_input | null;
  issueSid?: string | null;
}

/**
 * on conflict condition type for table "github_issue_assignees"
 */
export interface github_issue_assignees_on_conflict {
  constraint: github_issue_assignees_constraint;
  update_columns: github_issue_assignees_update_column[];
  where?: github_issue_assignees_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_issue_comments"
 */
export interface github_issue_comments_arr_rel_insert_input {
  data: github_issue_comments_insert_input[];
  on_conflict?: github_issue_comments_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "github_issue_comments". All fields are combined with a logical 'AND'.
 */
export interface github_issue_comments_bool_exp {
  _and?: (github_issue_comments_bool_exp | null)[] | null;
  _not?: github_issue_comments_bool_exp | null;
  _or?: (github_issue_comments_bool_exp | null)[] | null;
  authorLogin?: String_comparison_exp | null;
  body?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  github_account?: github_accounts_bool_exp | null;
  github_comment_reactions?: github_comment_reactions_bool_exp | null;
  github_issue?: github_issues_bool_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  issueSid?: String_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_issue_comments"
 */
export interface github_issue_comments_insert_input {
  authorLogin?: string | null;
  body?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  github_account?: github_accounts_obj_rel_insert_input | null;
  github_comment_reactions?: github_comment_reactions_arr_rel_insert_input | null;
  github_issue?: github_issues_obj_rel_insert_input | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  issueSid?: string | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "github_issue_comments"
 */
export interface github_issue_comments_obj_rel_insert_input {
  data: github_issue_comments_insert_input;
  on_conflict?: github_issue_comments_on_conflict | null;
}

/**
 * on conflict condition type for table "github_issue_comments"
 */
export interface github_issue_comments_on_conflict {
  constraint: github_issue_comments_constraint;
  update_columns: github_issue_comments_update_column[];
  where?: github_issue_comments_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "github_issue_state". All fields are combined with a logical 'AND'.
 */
export interface github_issue_state_bool_exp {
  _and?: (github_issue_state_bool_exp | null)[] | null;
  _not?: github_issue_state_bool_exp | null;
  _or?: (github_issue_state_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  github_issues?: github_issues_bool_exp | null;
  id?: String_comparison_exp | null;
}

/**
 * expression to compare columns of type github_issue_state_enum. All fields are combined with logical 'AND'.
 */
export interface github_issue_state_enum_comparison_exp {
  _eq?: github_issue_state_enum | null;
  _in?: github_issue_state_enum[] | null;
  _is_null?: boolean | null;
  _neq?: github_issue_state_enum | null;
  _nin?: github_issue_state_enum[] | null;
}

/**
 * input type for inserting data into table "github_issue_state"
 */
export interface github_issue_state_insert_input {
  description?: string | null;
  github_issues?: github_issues_arr_rel_insert_input | null;
  id?: string | null;
}

/**
 * input type for inserting object relation for remote table "github_issue_state"
 */
export interface github_issue_state_obj_rel_insert_input {
  data: github_issue_state_insert_input;
  on_conflict?: github_issue_state_on_conflict | null;
}

/**
 * on conflict condition type for table "github_issue_state"
 */
export interface github_issue_state_on_conflict {
  constraint: github_issue_state_constraint;
  update_columns: github_issue_state_update_column[];
  where?: github_issue_state_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_issues"
 */
export interface github_issues_arr_rel_insert_input {
  data: github_issues_insert_input[];
  on_conflict?: github_issues_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "github_issues". All fields are combined with a logical 'AND'.
 */
export interface github_issues_bool_exp {
  _and?: (github_issues_bool_exp | null)[] | null;
  _not?: github_issues_bool_exp | null;
  _or?: (github_issues_bool_exp | null)[] | null;
  authorLogin?: String_comparison_exp | null;
  body?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  github_account?: github_accounts_bool_exp | null;
  github_comment_reactions?: github_comment_reactions_bool_exp | null;
  github_comments?: github_comments_bool_exp | null;
  github_issue_assignees?: github_issue_assignees_bool_exp | null;
  github_issue_comments?: github_issue_comments_bool_exp | null;
  github_issue_state?: github_issue_state_bool_exp | null;
  github_repo?: github_repos_bool_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  repoSid?: String_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  state?: github_issue_state_enum_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  title?: String_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_issues"
 */
export interface github_issues_insert_input {
  authorLogin?: string | null;
  body?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  github_account?: github_accounts_obj_rel_insert_input | null;
  github_comment_reactions?: github_comment_reactions_arr_rel_insert_input | null;
  github_comments?: github_comments_arr_rel_insert_input | null;
  github_issue_assignees?: github_issue_assignees_arr_rel_insert_input | null;
  github_issue_comments?: github_issue_comments_arr_rel_insert_input | null;
  github_issue_state?: github_issue_state_obj_rel_insert_input | null;
  github_repo?: github_repos_obj_rel_insert_input | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  redundantFields?: hasura_jsonb | null;
  repoSid?: string | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  state?: github_issue_state_enum | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  title?: string | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "github_issues"
 */
export interface github_issues_obj_rel_insert_input {
  data: github_issues_insert_input;
  on_conflict?: github_issues_on_conflict | null;
}

/**
 * on conflict condition type for table "github_issues"
 */
export interface github_issues_on_conflict {
  constraint: github_issues_constraint;
  update_columns: github_issues_update_column[];
  where?: github_issues_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_organizations"
 */
export interface github_organizations_arr_rel_insert_input {
  data: github_organizations_insert_input[];
  on_conflict?: github_organizations_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "github_organizations". All fields are combined with a logical 'AND'.
 */
export interface github_organizations_bool_exp {
  _and?: (github_organizations_bool_exp | null)[] | null;
  _not?: github_organizations_bool_exp | null;
  _or?: (github_organizations_bool_exp | null)[] | null;
  avatarUrl?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  git_organization?: git_organizations_bool_exp | null;
  github_app_installations?: github_app_installations_bool_exp | null;
  github_apps?: github_apps_bool_exp | null;
  github_owner?: github_owners_bool_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  login?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_organizations"
 */
export interface github_organizations_insert_input {
  avatarUrl?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  git_organization?: git_organizations_obj_rel_insert_input | null;
  github_app_installations?: github_app_installations_arr_rel_insert_input | null;
  github_apps?: github_apps_arr_rel_insert_input | null;
  github_owner?: github_owners_obj_rel_insert_input | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  login?: string | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "github_organizations"
 */
export interface github_organizations_obj_rel_insert_input {
  data: github_organizations_insert_input;
  on_conflict?: github_organizations_on_conflict | null;
}

/**
 * on conflict condition type for table "github_organizations"
 */
export interface github_organizations_on_conflict {
  constraint: github_organizations_constraint;
  update_columns: github_organizations_update_column[];
  where?: github_organizations_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_owners"
 */
export interface github_owners_arr_rel_insert_input {
  data: github_owners_insert_input[];
  on_conflict?: github_owners_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "github_owners". All fields are combined with a logical 'AND'.
 */
export interface github_owners_bool_exp {
  _and?: (github_owners_bool_exp | null)[] | null;
  _not?: github_owners_bool_exp | null;
  _or?: (github_owners_bool_exp | null)[] | null;
  agency?: agencies_bool_exp | null;
  agencyId?: String_comparison_exp | null;
  avatarUrl?: String_comparison_exp | null;
  client?: clients_bool_exp | null;
  clientId?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  github_organization?: github_organizations_bool_exp | null;
  github_repos?: github_repos_bool_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  login?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_owners"
 */
export interface github_owners_insert_input {
  agency?: agencies_obj_rel_insert_input | null;
  agencyId?: string | null;
  avatarUrl?: string | null;
  client?: clients_obj_rel_insert_input | null;
  clientId?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  github_organization?: github_organizations_obj_rel_insert_input | null;
  github_repos?: github_repos_arr_rel_insert_input | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  login?: string | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "github_owners"
 */
export interface github_owners_obj_rel_insert_input {
  data: github_owners_insert_input;
  on_conflict?: github_owners_on_conflict | null;
}

/**
 * on conflict condition type for table "github_owners"
 */
export interface github_owners_on_conflict {
  constraint: github_owners_constraint;
  update_columns: github_owners_update_column[];
  where?: github_owners_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_pull_request_assignees"
 */
export interface github_pull_request_assignees_arr_rel_insert_input {
  data: github_pull_request_assignees_insert_input[];
  on_conflict?: github_pull_request_assignees_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table
 * "github_pull_request_assignees". All fields are combined with a logical 'AND'.
 */
export interface github_pull_request_assignees_bool_exp {
  _and?: (github_pull_request_assignees_bool_exp | null)[] | null;
  _not?: github_pull_request_assignees_bool_exp | null;
  _or?: (github_pull_request_assignees_bool_exp | null)[] | null;
  accountLogin?: String_comparison_exp | null;
  github_account?: github_accounts_bool_exp | null;
  github_pull_request?: github_pull_requests_bool_exp | null;
  pullRequestSid?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_pull_request_assignees"
 */
export interface github_pull_request_assignees_insert_input {
  accountLogin?: string | null;
  github_account?: github_accounts_obj_rel_insert_input | null;
  github_pull_request?: github_pull_requests_obj_rel_insert_input | null;
  pullRequestSid?: string | null;
}

/**
 * on conflict condition type for table "github_pull_request_assignees"
 */
export interface github_pull_request_assignees_on_conflict {
  constraint: github_pull_request_assignees_constraint;
  update_columns: github_pull_request_assignees_update_column[];
  where?: github_pull_request_assignees_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_pull_request_comments"
 */
export interface github_pull_request_comments_arr_rel_insert_input {
  data: github_pull_request_comments_insert_input[];
  on_conflict?: github_pull_request_comments_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "github_pull_request_comments".
 * All fields are combined with a logical 'AND'.
 */
export interface github_pull_request_comments_bool_exp {
  _and?: (github_pull_request_comments_bool_exp | null)[] | null;
  _not?: github_pull_request_comments_bool_exp | null;
  _or?: (github_pull_request_comments_bool_exp | null)[] | null;
  authorLogin?: String_comparison_exp | null;
  body?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  git_pull_request_comment?: git_pull_request_comments_bool_exp | null;
  github_account?: github_accounts_bool_exp | null;
  github_comment_reactions?: github_comment_reactions_bool_exp | null;
  github_pull_request?: github_pull_requests_bool_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  pullRequestSid?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_pull_request_comments"
 */
export interface github_pull_request_comments_insert_input {
  authorLogin?: string | null;
  body?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  git_pull_request_comment?: git_pull_request_comments_obj_rel_insert_input | null;
  github_account?: github_accounts_obj_rel_insert_input | null;
  github_comment_reactions?: github_comment_reactions_arr_rel_insert_input | null;
  github_pull_request?: github_pull_requests_obj_rel_insert_input | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  pullRequestSid?: string | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "github_pull_request_comments"
 */
export interface github_pull_request_comments_obj_rel_insert_input {
  data: github_pull_request_comments_insert_input;
  on_conflict?: github_pull_request_comments_on_conflict | null;
}

/**
 * on conflict condition type for table "github_pull_request_comments"
 */
export interface github_pull_request_comments_on_conflict {
  constraint: github_pull_request_comments_constraint;
  update_columns: github_pull_request_comments_update_column[];
  where?: github_pull_request_comments_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table
 * "github_pull_request_review_comment_state". All fields are combined with a logical 'AND'.
 */
export interface github_pull_request_review_comment_state_bool_exp {
  _and?: (github_pull_request_review_comment_state_bool_exp | null)[] | null;
  _not?: github_pull_request_review_comment_state_bool_exp | null;
  _or?: (github_pull_request_review_comment_state_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  github_pull_request_review_comments?: github_pull_request_review_comments_bool_exp | null;
  id?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_pull_request_review_comment_state"
 */
export interface github_pull_request_review_comment_state_insert_input {
  description?: string | null;
  github_pull_request_review_comments?: github_pull_request_review_comments_arr_rel_insert_input | null;
  id?: string | null;
}

/**
 * input type for inserting object relation for remote table "github_pull_request_review_comment_state"
 */
export interface github_pull_request_review_comment_state_obj_rel_insert_input {
  data: github_pull_request_review_comment_state_insert_input;
  on_conflict?: github_pull_request_review_comment_state_on_conflict | null;
}

/**
 * on conflict condition type for table "github_pull_request_review_comment_state"
 */
export interface github_pull_request_review_comment_state_on_conflict {
  constraint: github_pull_request_review_comment_state_constraint;
  update_columns: github_pull_request_review_comment_state_update_column[];
  where?: github_pull_request_review_comment_state_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_pull_request_review_comments"
 */
export interface github_pull_request_review_comments_arr_rel_insert_input {
  data: github_pull_request_review_comments_insert_input[];
  on_conflict?: github_pull_request_review_comments_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table
 * "github_pull_request_review_comments". All fields are combined with a logical 'AND'.
 */
export interface github_pull_request_review_comments_bool_exp {
  _and?: (github_pull_request_review_comments_bool_exp | null)[] | null;
  _not?: github_pull_request_review_comments_bool_exp | null;
  _or?: (github_pull_request_review_comments_bool_exp | null)[] | null;
  authorLogin?: String_comparison_exp | null;
  body?: String_comparison_exp | null;
  commitSid?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  diffHunk?: String_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  github_account?: github_accounts_bool_exp | null;
  github_comment_reactions?: github_comment_reactions_bool_exp | null;
  github_commit?: github_commits_bool_exp | null;
  github_commit_original?: github_commits_bool_exp | null;
  github_pull_request?: github_pull_requests_bool_exp | null;
  github_pull_request_comment_reply_to?: github_pull_request_review_comments_bool_exp | null;
  github_pull_request_review?: github_pull_request_reviews_bool_exp | null;
  github_pull_request_review_comment?: github_pull_request_review_comments_bool_exp | null;
  github_pull_request_review_comment_state?: github_pull_request_review_comment_state_bool_exp | null;
  github_pull_request_review_comments?: github_pull_request_review_comments_bool_exp | null;
  github_pull_request_review_thread?: github_pull_request_review_threads_bool_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  originalCommitSid?: String_comparison_exp | null;
  originalPosition?: Int_comparison_exp | null;
  outdated?: Boolean_comparison_exp | null;
  path?: String_comparison_exp | null;
  position?: Int_comparison_exp | null;
  pullRequestReviewSid?: String_comparison_exp | null;
  pullRequestReviewThreadSid?: String_comparison_exp | null;
  pullRequestSid?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  replyToCommentSid?: String_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  state?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_pull_request_review_comments"
 */
export interface github_pull_request_review_comments_insert_input {
  authorLogin?: string | null;
  body?: string | null;
  commitSid?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  diffHunk?: string | null;
  expiresInType?: job_intervals_enum | null;
  github_account?: github_accounts_obj_rel_insert_input | null;
  github_comment_reactions?: github_comment_reactions_arr_rel_insert_input | null;
  github_commit?: github_commits_obj_rel_insert_input | null;
  github_commit_original?: github_commits_obj_rel_insert_input | null;
  github_pull_request?: github_pull_requests_obj_rel_insert_input | null;
  github_pull_request_comment_reply_to?: github_pull_request_review_comments_obj_rel_insert_input | null;
  github_pull_request_review?: github_pull_request_reviews_obj_rel_insert_input | null;
  github_pull_request_review_comment?: github_pull_request_review_comments_obj_rel_insert_input | null;
  github_pull_request_review_comment_state?: github_pull_request_review_comment_state_obj_rel_insert_input | null;
  github_pull_request_review_comments?: github_pull_request_review_comments_arr_rel_insert_input | null;
  github_pull_request_review_thread?: github_pull_request_review_threads_obj_rel_insert_input | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  originalCommitSid?: string | null;
  originalPosition?: number | null;
  outdated?: boolean | null;
  path?: string | null;
  position?: number | null;
  pullRequestReviewSid?: string | null;
  pullRequestReviewThreadSid?: string | null;
  pullRequestSid?: string | null;
  redundantFields?: hasura_jsonb | null;
  replyToCommentSid?: string | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  state?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "github_pull_request_review_comments"
 */
export interface github_pull_request_review_comments_obj_rel_insert_input {
  data: github_pull_request_review_comments_insert_input;
  on_conflict?: github_pull_request_review_comments_on_conflict | null;
}

/**
 * on conflict condition type for table "github_pull_request_review_comments"
 */
export interface github_pull_request_review_comments_on_conflict {
  constraint: github_pull_request_review_comments_constraint;
  update_columns: github_pull_request_review_comments_update_column[];
  where?: github_pull_request_review_comments_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table
 * "github_pull_request_review_state". All fields are combined with a logical 'AND'.
 */
export interface github_pull_request_review_state_bool_exp {
  _and?: (github_pull_request_review_state_bool_exp | null)[] | null;
  _not?: github_pull_request_review_state_bool_exp | null;
  _or?: (github_pull_request_review_state_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  github_pull_request_reviews?: github_pull_request_reviews_bool_exp | null;
  id?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_pull_request_review_state"
 */
export interface github_pull_request_review_state_insert_input {
  description?: string | null;
  github_pull_request_reviews?: github_pull_request_reviews_arr_rel_insert_input | null;
  id?: string | null;
}

/**
 * input type for inserting object relation for remote table "github_pull_request_review_state"
 */
export interface github_pull_request_review_state_obj_rel_insert_input {
  data: github_pull_request_review_state_insert_input;
  on_conflict?: github_pull_request_review_state_on_conflict | null;
}

/**
 * on conflict condition type for table "github_pull_request_review_state"
 */
export interface github_pull_request_review_state_on_conflict {
  constraint: github_pull_request_review_state_constraint;
  update_columns: github_pull_request_review_state_update_column[];
  where?: github_pull_request_review_state_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_pull_request_review_threads"
 */
export interface github_pull_request_review_threads_arr_rel_insert_input {
  data: github_pull_request_review_threads_insert_input[];
  on_conflict?: github_pull_request_review_threads_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table
 * "github_pull_request_review_threads". All fields are combined with a logical 'AND'.
 */
export interface github_pull_request_review_threads_bool_exp {
  _and?: (github_pull_request_review_threads_bool_exp | null)[] | null;
  _not?: github_pull_request_review_threads_bool_exp | null;
  _or?: (github_pull_request_review_threads_bool_exp | null)[] | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  git_pull_request_review_thread?: git_pull_request_review_threads_bool_exp | null;
  github_pull_request?: github_pull_requests_bool_exp | null;
  github_pull_request_review_comments?: github_pull_request_review_comments_bool_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  isResolved?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  pullRequestSid?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_pull_request_review_threads"
 */
export interface github_pull_request_review_threads_insert_input {
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  git_pull_request_review_thread?: git_pull_request_review_threads_obj_rel_insert_input | null;
  github_pull_request?: github_pull_requests_obj_rel_insert_input | null;
  github_pull_request_review_comments?: github_pull_request_review_comments_arr_rel_insert_input | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  isResolved?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  pullRequestSid?: string | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "github_pull_request_review_threads"
 */
export interface github_pull_request_review_threads_obj_rel_insert_input {
  data: github_pull_request_review_threads_insert_input;
  on_conflict?: github_pull_request_review_threads_on_conflict | null;
}

/**
 * on conflict condition type for table "github_pull_request_review_threads"
 */
export interface github_pull_request_review_threads_on_conflict {
  constraint: github_pull_request_review_threads_constraint;
  update_columns: github_pull_request_review_threads_update_column[];
  where?: github_pull_request_review_threads_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_pull_request_reviewers"
 */
export interface github_pull_request_reviewers_arr_rel_insert_input {
  data: github_pull_request_reviewers_insert_input[];
  on_conflict?: github_pull_request_reviewers_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table
 * "github_pull_request_reviewers". All fields are combined with a logical 'AND'.
 */
export interface github_pull_request_reviewers_bool_exp {
  _and?: (github_pull_request_reviewers_bool_exp | null)[] | null;
  _not?: github_pull_request_reviewers_bool_exp | null;
  _or?: (github_pull_request_reviewers_bool_exp | null)[] | null;
  accountLogin?: String_comparison_exp | null;
  github_account?: github_accounts_bool_exp | null;
  github_pull_request?: github_pull_requests_bool_exp | null;
  pullRequestSid?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_pull_request_reviewers"
 */
export interface github_pull_request_reviewers_insert_input {
  accountLogin?: string | null;
  github_account?: github_accounts_obj_rel_insert_input | null;
  github_pull_request?: github_pull_requests_obj_rel_insert_input | null;
  pullRequestSid?: string | null;
}

/**
 * on conflict condition type for table "github_pull_request_reviewers"
 */
export interface github_pull_request_reviewers_on_conflict {
  constraint: github_pull_request_reviewers_constraint;
  update_columns: github_pull_request_reviewers_update_column[];
  where?: github_pull_request_reviewers_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_pull_request_reviews"
 */
export interface github_pull_request_reviews_arr_rel_insert_input {
  data: github_pull_request_reviews_insert_input[];
  on_conflict?: github_pull_request_reviews_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "github_pull_request_reviews".
 * All fields are combined with a logical 'AND'.
 */
export interface github_pull_request_reviews_bool_exp {
  _and?: (github_pull_request_reviews_bool_exp | null)[] | null;
  _not?: github_pull_request_reviews_bool_exp | null;
  _or?: (github_pull_request_reviews_bool_exp | null)[] | null;
  authorLogin?: String_comparison_exp | null;
  body?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  git_pull_request_review?: git_pull_request_reviews_bool_exp | null;
  github_account?: github_accounts_bool_exp | null;
  github_comment_reactions?: github_comment_reactions_bool_exp | null;
  github_pull_request?: github_pull_requests_bool_exp | null;
  github_pull_request_review_comments?: github_pull_request_review_comments_bool_exp | null;
  github_pull_request_review_state?: github_pull_request_review_state_bool_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  pullRequestSid?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  state?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_pull_request_reviews"
 */
export interface github_pull_request_reviews_insert_input {
  authorLogin?: string | null;
  body?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  git_pull_request_review?: git_pull_request_reviews_obj_rel_insert_input | null;
  github_account?: github_accounts_obj_rel_insert_input | null;
  github_comment_reactions?: github_comment_reactions_arr_rel_insert_input | null;
  github_pull_request?: github_pull_requests_obj_rel_insert_input | null;
  github_pull_request_review_comments?: github_pull_request_review_comments_arr_rel_insert_input | null;
  github_pull_request_review_state?: github_pull_request_review_state_obj_rel_insert_input | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  pullRequestSid?: string | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  state?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "github_pull_request_reviews"
 */
export interface github_pull_request_reviews_obj_rel_insert_input {
  data: github_pull_request_reviews_insert_input;
  on_conflict?: github_pull_request_reviews_on_conflict | null;
}

/**
 * on conflict condition type for table "github_pull_request_reviews"
 */
export interface github_pull_request_reviews_on_conflict {
  constraint: github_pull_request_reviews_constraint;
  update_columns: github_pull_request_reviews_update_column[];
  where?: github_pull_request_reviews_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "github_pull_request_state". All fields are combined with a logical 'AND'.
 */
export interface github_pull_request_state_bool_exp {
  _and?: (github_pull_request_state_bool_exp | null)[] | null;
  _not?: github_pull_request_state_bool_exp | null;
  _or?: (github_pull_request_state_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  github_pull_requests?: github_pull_requests_bool_exp | null;
  id?: String_comparison_exp | null;
}

/**
 * expression to compare columns of type github_pull_request_state_enum. All fields are combined with logical 'AND'.
 */
export interface github_pull_request_state_enum_comparison_exp {
  _eq?: github_pull_request_state_enum | null;
  _in?: github_pull_request_state_enum[] | null;
  _is_null?: boolean | null;
  _neq?: github_pull_request_state_enum | null;
  _nin?: github_pull_request_state_enum[] | null;
}

/**
 * input type for inserting data into table "github_pull_request_state"
 */
export interface github_pull_request_state_insert_input {
  description?: string | null;
  github_pull_requests?: github_pull_requests_arr_rel_insert_input | null;
  id?: string | null;
}

/**
 * input type for inserting object relation for remote table "github_pull_request_state"
 */
export interface github_pull_request_state_obj_rel_insert_input {
  data: github_pull_request_state_insert_input;
  on_conflict?: github_pull_request_state_on_conflict | null;
}

/**
 * on conflict condition type for table "github_pull_request_state"
 */
export interface github_pull_request_state_on_conflict {
  constraint: github_pull_request_state_constraint;
  update_columns: github_pull_request_state_update_column[];
  where?: github_pull_request_state_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_pull_requests"
 */
export interface github_pull_requests_arr_rel_insert_input {
  data: github_pull_requests_insert_input[];
  on_conflict?: github_pull_requests_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "github_pull_requests". All fields are combined with a logical 'AND'.
 */
export interface github_pull_requests_bool_exp {
  _and?: (github_pull_requests_bool_exp | null)[] | null;
  _not?: github_pull_requests_bool_exp | null;
  _or?: (github_pull_requests_bool_exp | null)[] | null;
  authorLogin?: String_comparison_exp | null;
  baseBranchSid?: String_comparison_exp | null;
  body?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  git_pull_request?: git_pull_requests_bool_exp | null;
  githubBranchByBasebranchsid?: github_branches_bool_exp | null;
  github_account?: github_accounts_bool_exp | null;
  github_branch?: github_branches_bool_exp | null;
  github_code_comments?: github_code_comments_bool_exp | null;
  github_comment_reactions?: github_comment_reactions_bool_exp | null;
  github_comments?: github_comments_bool_exp | null;
  github_pull_request_assignees?: github_pull_request_assignees_bool_exp | null;
  github_pull_request_comments?: github_pull_request_comments_bool_exp | null;
  github_pull_request_review_comments?: github_pull_request_review_comments_bool_exp | null;
  github_pull_request_review_threads?: github_pull_request_review_threads_bool_exp | null;
  github_pull_request_reviewers?: github_pull_request_reviewers_bool_exp | null;
  github_pull_request_reviews?: github_pull_request_reviews_bool_exp | null;
  github_pull_request_state?: github_pull_request_state_bool_exp | null;
  github_repo?: github_repos_bool_exp | null;
  id?: Int_comparison_exp | null;
  isDraft?: Boolean_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isMerged?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  mergeable?: Boolean_comparison_exp | null;
  mergedAt?: timestamptz_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  repoSid?: String_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  state?: github_pull_request_state_enum_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  targetBranchSid?: String_comparison_exp | null;
  task_pull_requests?: task_pull_requests_bool_exp | null;
  title?: String_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_pull_requests"
 */
export interface github_pull_requests_insert_input {
  authorLogin?: string | null;
  baseBranchSid?: string | null;
  body?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  git_pull_request?: git_pull_requests_obj_rel_insert_input | null;
  githubBranchByBasebranchsid?: github_branches_obj_rel_insert_input | null;
  github_account?: github_accounts_obj_rel_insert_input | null;
  github_branch?: github_branches_obj_rel_insert_input | null;
  github_code_comments?: github_code_comments_arr_rel_insert_input | null;
  github_comment_reactions?: github_comment_reactions_arr_rel_insert_input | null;
  github_comments?: github_comments_arr_rel_insert_input | null;
  github_pull_request_assignees?: github_pull_request_assignees_arr_rel_insert_input | null;
  github_pull_request_comments?: github_pull_request_comments_arr_rel_insert_input | null;
  github_pull_request_review_comments?: github_pull_request_review_comments_arr_rel_insert_input | null;
  github_pull_request_review_threads?: github_pull_request_review_threads_arr_rel_insert_input | null;
  github_pull_request_reviewers?: github_pull_request_reviewers_arr_rel_insert_input | null;
  github_pull_request_reviews?: github_pull_request_reviews_arr_rel_insert_input | null;
  github_pull_request_state?: github_pull_request_state_obj_rel_insert_input | null;
  github_repo?: github_repos_obj_rel_insert_input | null;
  id?: number | null;
  isDraft?: boolean | null;
  isForked?: boolean | null;
  isMerged?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  mergeable?: boolean | null;
  mergedAt?: hasura_timestamptz | null;
  redundantFields?: hasura_jsonb | null;
  repoSid?: string | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  state?: github_pull_request_state_enum | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  targetBranchSid?: string | null;
  task_pull_requests?: task_pull_requests_arr_rel_insert_input | null;
  title?: string | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "github_pull_requests"
 */
export interface github_pull_requests_obj_rel_insert_input {
  data: github_pull_requests_insert_input;
  on_conflict?: github_pull_requests_on_conflict | null;
}

/**
 * on conflict condition type for table "github_pull_requests"
 */
export interface github_pull_requests_on_conflict {
  constraint: github_pull_requests_constraint;
  update_columns: github_pull_requests_update_column[];
  where?: github_pull_requests_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_repo_users"
 */
export interface github_repo_users_arr_rel_insert_input {
  data: github_repo_users_insert_input[];
  on_conflict?: github_repo_users_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "github_repo_users". All fields are combined with a logical 'AND'.
 */
export interface github_repo_users_bool_exp {
  _and?: (github_repo_users_bool_exp | null)[] | null;
  _not?: github_repo_users_bool_exp | null;
  _or?: (github_repo_users_bool_exp | null)[] | null;
  accountLogin?: String_comparison_exp | null;
  github_account?: github_accounts_bool_exp | null;
  github_repo?: github_repos_bool_exp | null;
  repoSid?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_repo_users"
 */
export interface github_repo_users_insert_input {
  accountLogin?: string | null;
  github_account?: github_accounts_obj_rel_insert_input | null;
  github_repo?: github_repos_obj_rel_insert_input | null;
  repoSid?: string | null;
}

/**
 * on conflict condition type for table "github_repo_users"
 */
export interface github_repo_users_on_conflict {
  constraint: github_repo_users_constraint;
  update_columns: github_repo_users_update_column[];
  where?: github_repo_users_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "github_repos"
 */
export interface github_repos_arr_rel_insert_input {
  data: github_repos_insert_input[];
  on_conflict?: github_repos_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "github_repos". All fields are combined with a logical 'AND'.
 */
export interface github_repos_bool_exp {
  _and?: (github_repos_bool_exp | null)[] | null;
  _not?: github_repos_bool_exp | null;
  _or?: (github_repos_bool_exp | null)[] | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  description?: String_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  git_repo?: git_repos_bool_exp | null;
  github_branches?: github_branches_bool_exp | null;
  github_issues?: github_issues_bool_exp | null;
  github_owner?: github_owners_bool_exp | null;
  github_pull_requests?: github_pull_requests_bool_exp | null;
  github_repo_users?: github_repo_users_bool_exp | null;
  id?: Int_comparison_exp | null;
  isArchived?: Boolean_comparison_exp | null;
  isDisabled?: Boolean_comparison_exp | null;
  isFork?: Boolean_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isLocked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  isPrivate?: Boolean_comparison_exp | null;
  isTemplate?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  name?: String_comparison_exp | null;
  ownerLogin?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_repos"
 */
export interface github_repos_insert_input {
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  description?: string | null;
  expiresInType?: job_intervals_enum | null;
  git_repo?: git_repos_obj_rel_insert_input | null;
  github_branches?: github_branches_arr_rel_insert_input | null;
  github_issues?: github_issues_arr_rel_insert_input | null;
  github_owner?: github_owners_obj_rel_insert_input | null;
  github_pull_requests?: github_pull_requests_arr_rel_insert_input | null;
  github_repo_users?: github_repo_users_arr_rel_insert_input | null;
  id?: number | null;
  isArchived?: boolean | null;
  isDisabled?: boolean | null;
  isFork?: boolean | null;
  isForked?: boolean | null;
  isLocked?: boolean | null;
  isOutdated?: boolean | null;
  isPrivate?: boolean | null;
  isTemplate?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  name?: string | null;
  ownerLogin?: string | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "github_repos"
 */
export interface github_repos_obj_rel_insert_input {
  data: github_repos_insert_input;
  on_conflict?: github_repos_on_conflict | null;
}

/**
 * on conflict condition type for table "github_repos"
 */
export interface github_repos_on_conflict {
  constraint: github_repos_constraint;
  update_columns: github_repos_update_column[];
  where?: github_repos_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "github_tokens". All fields are combined with a logical 'AND'.
 */
export interface github_tokens_bool_exp {
  _and?: (github_tokens_bool_exp | null)[] | null;
  _not?: github_tokens_bool_exp | null;
  _or?: (github_tokens_bool_exp | null)[] | null;
  createdAt?: timestamptz_comparison_exp | null;
  github_account?: github_accounts_bool_exp | null;
  id?: Int_comparison_exp | null;
  limit?: Int_comparison_exp | null;
  remaining?: Int_comparison_exp | null;
  resetAt?: timestamptz_comparison_exp | null;
  token?: String_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "github_tokens"
 */
export interface github_tokens_insert_input {
  createdAt?: hasura_timestamptz | null;
  github_account?: github_accounts_obj_rel_insert_input | null;
  id?: number | null;
  limit?: number | null;
  remaining?: number | null;
  resetAt?: hasura_timestamptz | null;
  token?: string | null;
  updatedAt?: hasura_timestamptz | null;
}

/**
 * input type for inserting object relation for remote table "github_tokens"
 */
export interface github_tokens_obj_rel_insert_input {
  data: github_tokens_insert_input;
  on_conflict?: github_tokens_on_conflict | null;
}

/**
 * on conflict condition type for table "github_tokens"
 */
export interface github_tokens_on_conflict {
  constraint: github_tokens_constraint;
  update_columns: github_tokens_update_column[];
  where?: github_tokens_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "job_intervals". All fields are combined with a logical 'AND'.
 */
export interface job_intervals_bool_exp {
  _and?: (job_intervals_bool_exp | null)[] | null;
  _not?: job_intervals_bool_exp | null;
  _or?: (job_intervals_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  gcp_storage_buckets?: gcp_storage_buckets_bool_exp | null;
  gcp_storage_objects?: gcp_storage_objects_bool_exp | null;
  github_accounts?: github_accounts_bool_exp | null;
  github_app_installations?: github_app_installations_bool_exp | null;
  github_apps?: github_apps_bool_exp | null;
  github_branches?: github_branches_bool_exp | null;
  github_code_comments?: github_code_comments_bool_exp | null;
  github_comment_reactions?: github_comment_reactions_bool_exp | null;
  github_comments?: github_comments_bool_exp | null;
  github_commit_contexts?: github_commit_contexts_bool_exp | null;
  github_commits?: github_commits_bool_exp | null;
  github_issue_comments?: github_issue_comments_bool_exp | null;
  github_issues?: github_issues_bool_exp | null;
  github_organizations?: github_organizations_bool_exp | null;
  github_owners?: github_owners_bool_exp | null;
  github_pull_request_comments?: github_pull_request_comments_bool_exp | null;
  github_pull_request_review_comments?: github_pull_request_review_comments_bool_exp | null;
  github_pull_request_review_threads?: github_pull_request_review_threads_bool_exp | null;
  github_pull_request_reviews?: github_pull_request_reviews_bool_exp | null;
  github_pull_requests?: github_pull_requests_bool_exp | null;
  github_repos?: github_repos_bool_exp | null;
  rippling_companies?: rippling_companies_bool_exp | null;
  rippling_employees?: rippling_employees_bool_exp | null;
  rippling_payroll_earning_types?: rippling_payroll_earning_types_bool_exp | null;
  rippling_payroll_run_details?: rippling_payroll_run_details_bool_exp | null;
  rippling_payroll_run_earnings?: rippling_payroll_run_earnings_bool_exp | null;
  rippling_payroll_runs?: rippling_payroll_runs_bool_exp | null;
  rippling_payroll_schedules?: rippling_payroll_schedules_bool_exp | null;
  timedoctor_bots?: timedoctor_bots_bool_exp | null;
  timedoctor_companies?: timedoctor_companies_bool_exp | null;
  timedoctor_projects?: timedoctor_projects_bool_exp | null;
  timedoctor_task_worklogs?: timedoctor_task_worklogs_bool_exp | null;
  timedoctor_tasks?: timedoctor_tasks_bool_exp | null;
  timedoctor_users?: timedoctor_users_bool_exp | null;
  type?: String_comparison_exp | null;
  zoom_meeting_instances?: zoom_meeting_instances_bool_exp | null;
  zoom_meetings?: zoom_meetings_bool_exp | null;
  zoom_recording_files?: zoom_recording_files_bool_exp | null;
  zoom_recordings?: zoom_recordings_bool_exp | null;
  zoom_users?: zoom_users_bool_exp | null;
}

/**
 * expression to compare columns of type job_intervals_enum. All fields are combined with logical 'AND'.
 */
export interface job_intervals_enum_comparison_exp {
  _eq?: job_intervals_enum | null;
  _in?: job_intervals_enum[] | null;
  _is_null?: boolean | null;
  _neq?: job_intervals_enum | null;
  _nin?: job_intervals_enum[] | null;
}

/**
 * input type for inserting data into table "job_intervals"
 */
export interface job_intervals_insert_input {
  description?: string | null;
  gcp_storage_buckets?: gcp_storage_buckets_arr_rel_insert_input | null;
  gcp_storage_objects?: gcp_storage_objects_arr_rel_insert_input | null;
  github_accounts?: github_accounts_arr_rel_insert_input | null;
  github_app_installations?: github_app_installations_arr_rel_insert_input | null;
  github_apps?: github_apps_arr_rel_insert_input | null;
  github_branches?: github_branches_arr_rel_insert_input | null;
  github_code_comments?: github_code_comments_arr_rel_insert_input | null;
  github_comment_reactions?: github_comment_reactions_arr_rel_insert_input | null;
  github_comments?: github_comments_arr_rel_insert_input | null;
  github_commit_contexts?: github_commit_contexts_arr_rel_insert_input | null;
  github_commits?: github_commits_arr_rel_insert_input | null;
  github_issue_comments?: github_issue_comments_arr_rel_insert_input | null;
  github_issues?: github_issues_arr_rel_insert_input | null;
  github_organizations?: github_organizations_arr_rel_insert_input | null;
  github_owners?: github_owners_arr_rel_insert_input | null;
  github_pull_request_comments?: github_pull_request_comments_arr_rel_insert_input | null;
  github_pull_request_review_comments?: github_pull_request_review_comments_arr_rel_insert_input | null;
  github_pull_request_review_threads?: github_pull_request_review_threads_arr_rel_insert_input | null;
  github_pull_request_reviews?: github_pull_request_reviews_arr_rel_insert_input | null;
  github_pull_requests?: github_pull_requests_arr_rel_insert_input | null;
  github_repos?: github_repos_arr_rel_insert_input | null;
  rippling_companies?: rippling_companies_arr_rel_insert_input | null;
  rippling_employees?: rippling_employees_arr_rel_insert_input | null;
  rippling_payroll_earning_types?: rippling_payroll_earning_types_arr_rel_insert_input | null;
  rippling_payroll_run_details?: rippling_payroll_run_details_arr_rel_insert_input | null;
  rippling_payroll_run_earnings?: rippling_payroll_run_earnings_arr_rel_insert_input | null;
  rippling_payroll_runs?: rippling_payroll_runs_arr_rel_insert_input | null;
  rippling_payroll_schedules?: rippling_payroll_schedules_arr_rel_insert_input | null;
  timedoctor_bots?: timedoctor_bots_arr_rel_insert_input | null;
  timedoctor_companies?: timedoctor_companies_arr_rel_insert_input | null;
  timedoctor_projects?: timedoctor_projects_arr_rel_insert_input | null;
  timedoctor_task_worklogs?: timedoctor_task_worklogs_arr_rel_insert_input | null;
  timedoctor_tasks?: timedoctor_tasks_arr_rel_insert_input | null;
  timedoctor_users?: timedoctor_users_arr_rel_insert_input | null;
  type?: string | null;
  zoom_meeting_instances?: zoom_meeting_instances_arr_rel_insert_input | null;
  zoom_meetings?: zoom_meetings_arr_rel_insert_input | null;
  zoom_recording_files?: zoom_recording_files_arr_rel_insert_input | null;
  zoom_recordings?: zoom_recordings_arr_rel_insert_input | null;
  zoom_users?: zoom_users_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "job_intervals"
 */
export interface job_intervals_obj_rel_insert_input {
  data: job_intervals_insert_input;
  on_conflict?: job_intervals_on_conflict | null;
}

/**
 * on conflict condition type for table "job_intervals"
 */
export interface job_intervals_on_conflict {
  constraint: job_intervals_constraint;
  update_columns: job_intervals_update_column[];
  where?: job_intervals_bool_exp | null;
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
 * input type for inserting array relation for remote table "meeting_user_emails"
 */
export interface meeting_user_emails_arr_rel_insert_input {
  data: meeting_user_emails_insert_input[];
  on_conflict?: meeting_user_emails_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "meeting_user_emails". All fields are combined with a logical 'AND'.
 */
export interface meeting_user_emails_bool_exp {
  _and?: (meeting_user_emails_bool_exp | null)[] | null;
  _not?: meeting_user_emails_bool_exp | null;
  _or?: (meeting_user_emails_bool_exp | null)[] | null;
  email?: String_comparison_exp | null;
  meeting?: meetings_bool_exp | null;
  meetingId?: Int_comparison_exp | null;
  user_email?: user_emails_bool_exp | null;
}

/**
 * input type for inserting data into table "meeting_user_emails"
 */
export interface meeting_user_emails_insert_input {
  email?: string | null;
  meeting?: meetings_obj_rel_insert_input | null;
  meetingId?: number | null;
  user_email?: user_emails_obj_rel_insert_input | null;
}

/**
 * on conflict condition type for table "meeting_user_emails"
 */
export interface meeting_user_emails_on_conflict {
  constraint: meeting_user_emails_constraint;
  update_columns: meeting_user_emails_update_column[];
  where?: meeting_user_emails_bool_exp | null;
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
  meeting_user_emails?: meeting_user_emails_bool_exp | null;
  scheduledAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  zoomMeetingSid?: String_comparison_exp | null;
  zoom_meeting?: zoom_meetings_bool_exp | null;
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
  meeting_user_emails?: meeting_user_emails_arr_rel_insert_input | null;
  scheduledAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  zoomMeetingSid?: string | null;
  zoom_meeting?: zoom_meetings_obj_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "meetings"
 */
export interface meetings_obj_rel_insert_input {
  data: meetings_insert_input;
  on_conflict?: meetings_on_conflict | null;
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
 * input type for inserting array relation for remote table "optional_technologies"
 */
export interface optional_technologies_arr_rel_insert_input {
  data: optional_technologies_insert_input[];
  on_conflict?: optional_technologies_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "optional_technologies". All fields are combined with a logical 'AND'.
 */
export interface optional_technologies_bool_exp {
  _and?: (optional_technologies_bool_exp | null)[] | null;
  _not?: optional_technologies_bool_exp | null;
  _or?: (optional_technologies_bool_exp | null)[] | null;
  clientJobsId?: uuid_comparison_exp | null;
  client_job?: client_jobs_bool_exp | null;
  technologiesId?: Int_comparison_exp | null;
  technology?: technologies_bool_exp | null;
}

/**
 * input type for inserting data into table "optional_technologies"
 */
export interface optional_technologies_insert_input {
  clientJobsId?: hasura_uuid | null;
  client_job?: client_jobs_obj_rel_insert_input | null;
  technologiesId?: number | null;
  technology?: technologies_obj_rel_insert_input | null;
}

/**
 * on conflict condition type for table "optional_technologies"
 */
export interface optional_technologies_on_conflict {
  constraint: optional_technologies_constraint;
  update_columns: optional_technologies_update_column[];
  where?: optional_technologies_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "qualified_agencies"
 */
export interface qualified_agencies_arr_rel_insert_input {
  data: qualified_agencies_insert_input[];
  on_conflict?: qualified_agencies_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "qualified_agencies". All fields are combined with a logical 'AND'.
 */
export interface qualified_agencies_bool_exp {
  _and?: (qualified_agencies_bool_exp | null)[] | null;
  _not?: qualified_agencies_bool_exp | null;
  _or?: (qualified_agencies_bool_exp | null)[] | null;
  agenciesId?: String_comparison_exp | null;
  agency?: agencies_bool_exp | null;
  client?: clients_bool_exp | null;
  clientsId?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "qualified_agencies"
 */
export interface qualified_agencies_insert_input {
  agenciesId?: string | null;
  agency?: agencies_obj_rel_insert_input | null;
  client?: clients_obj_rel_insert_input | null;
  clientsId?: string | null;
}

/**
 * on conflict condition type for table "qualified_agencies"
 */
export interface qualified_agencies_on_conflict {
  constraint: qualified_agencies_constraint;
  update_columns: qualified_agencies_update_column[];
  where?: qualified_agencies_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "qualified_technologies"
 */
export interface qualified_technologies_arr_rel_insert_input {
  data: qualified_technologies_insert_input[];
  on_conflict?: qualified_technologies_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "qualified_technologies". All fields are combined with a logical 'AND'.
 */
export interface qualified_technologies_bool_exp {
  _and?: (qualified_technologies_bool_exp | null)[] | null;
  _not?: qualified_technologies_bool_exp | null;
  _or?: (qualified_technologies_bool_exp | null)[] | null;
  clientJobsId?: uuid_comparison_exp | null;
  client_job?: client_jobs_bool_exp | null;
  technologiesId?: Int_comparison_exp | null;
  technology?: technologies_bool_exp | null;
}

/**
 * input type for inserting data into table "qualified_technologies"
 */
export interface qualified_technologies_insert_input {
  clientJobsId?: hasura_uuid | null;
  client_job?: client_jobs_obj_rel_insert_input | null;
  technologiesId?: number | null;
  technology?: technologies_obj_rel_insert_input | null;
}

/**
 * on conflict condition type for table "qualified_technologies"
 */
export interface qualified_technologies_on_conflict {
  constraint: qualified_technologies_constraint;
  update_columns: qualified_technologies_update_column[];
  where?: qualified_technologies_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "recruiter_agencies"
 */
export interface recruiter_agencies_arr_rel_insert_input {
  data: recruiter_agencies_insert_input[];
  on_conflict?: recruiter_agencies_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "recruiter_agencies". All fields are combined with a logical 'AND'.
 */
export interface recruiter_agencies_bool_exp {
  _and?: (recruiter_agencies_bool_exp | null)[] | null;
  _not?: recruiter_agencies_bool_exp | null;
  _or?: (recruiter_agencies_bool_exp | null)[] | null;
  agency?: agencies_bool_exp | null;
  agencyByRecruiterAgencyId?: agencies_bool_exp | null;
  agency_id?: String_comparison_exp | null;
  recruiter_agency_id?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "recruiter_agencies"
 */
export interface recruiter_agencies_insert_input {
  agency?: agencies_obj_rel_insert_input | null;
  agencyByRecruiterAgencyId?: agencies_obj_rel_insert_input | null;
  agency_id?: string | null;
  recruiter_agency_id?: string | null;
}

/**
 * on conflict condition type for table "recruiter_agencies"
 */
export interface recruiter_agencies_on_conflict {
  constraint: recruiter_agencies_constraint;
  update_columns: recruiter_agencies_update_column[];
  where?: recruiter_agencies_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "rippling_companies"
 */
export interface rippling_companies_arr_rel_insert_input {
  data: rippling_companies_insert_input[];
  on_conflict?: rippling_companies_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "rippling_companies". All fields are combined with a logical 'AND'.
 */
export interface rippling_companies_bool_exp {
  _and?: (rippling_companies_bool_exp | null)[] | null;
  _not?: rippling_companies_bool_exp | null;
  _or?: (rippling_companies_bool_exp | null)[] | null;
  accessToken?: String_comparison_exp | null;
  address?: jsonb_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  ein?: String_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  name?: String_comparison_exp | null;
  payroll_settings?: jsonb_comparison_exp | null;
  phone?: String_comparison_exp | null;
  primaryEmail?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  ripplingCompanyTokenBySid?: rippling_company_tokens_bool_exp | null;
  rippling_company_token?: rippling_company_tokens_bool_exp | null;
  rippling_employees?: rippling_employees_bool_exp | null;
  rippling_payroll_earning_types?: rippling_payroll_earning_types_bool_exp | null;
  rippling_payroll_run_details?: rippling_payroll_run_details_bool_exp | null;
  rippling_payroll_run_earnings?: rippling_payroll_run_earnings_bool_exp | null;
  rippling_payroll_runs?: rippling_payroll_runs_bool_exp | null;
  rippling_payroll_schedules?: rippling_payroll_schedules_bool_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  tax_info?: jsonb_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  user_email?: user_emails_bool_exp | null;
  weight?: float8_comparison_exp | null;
  workLocations?: jsonb_comparison_exp | null;
}

/**
 * input type for inserting data into table "rippling_companies"
 */
export interface rippling_companies_insert_input {
  accessToken?: string | null;
  address?: hasura_jsonb | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  ein?: string | null;
  expiresInType?: job_intervals_enum | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  name?: string | null;
  payroll_settings?: hasura_jsonb | null;
  phone?: string | null;
  primaryEmail?: string | null;
  redundantFields?: hasura_jsonb | null;
  ripplingCompanyTokenBySid?: rippling_company_tokens_obj_rel_insert_input | null;
  rippling_company_token?: rippling_company_tokens_obj_rel_insert_input | null;
  rippling_employees?: rippling_employees_arr_rel_insert_input | null;
  rippling_payroll_earning_types?: rippling_payroll_earning_types_arr_rel_insert_input | null;
  rippling_payroll_run_details?: rippling_payroll_run_details_arr_rel_insert_input | null;
  rippling_payroll_run_earnings?: rippling_payroll_run_earnings_arr_rel_insert_input | null;
  rippling_payroll_runs?: rippling_payroll_runs_arr_rel_insert_input | null;
  rippling_payroll_schedules?: rippling_payroll_schedules_arr_rel_insert_input | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  tax_info?: hasura_jsonb | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  user_email?: user_emails_obj_rel_insert_input | null;
  weight?: hasura_float8 | null;
  workLocations?: hasura_jsonb | null;
}

/**
 * input type for inserting object relation for remote table "rippling_companies"
 */
export interface rippling_companies_obj_rel_insert_input {
  data: rippling_companies_insert_input;
  on_conflict?: rippling_companies_on_conflict | null;
}

/**
 * on conflict condition type for table "rippling_companies"
 */
export interface rippling_companies_on_conflict {
  constraint: rippling_companies_constraint;
  update_columns: rippling_companies_update_column[];
  where?: rippling_companies_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "rippling_company_tokens". All fields are combined with a logical 'AND'.
 */
export interface rippling_company_tokens_bool_exp {
  _and?: (rippling_company_tokens_bool_exp | null)[] | null;
  _not?: rippling_company_tokens_bool_exp | null;
  _or?: (rippling_company_tokens_bool_exp | null)[] | null;
  accessToken?: String_comparison_exp | null;
  companySid?: String_comparison_exp | null;
  ripplingCompanyByAccesstoken?: rippling_companies_bool_exp | null;
  rippling_company?: rippling_companies_bool_exp | null;
}

/**
 * input type for inserting data into table "rippling_company_tokens"
 */
export interface rippling_company_tokens_insert_input {
  accessToken?: string | null;
  companySid?: string | null;
  ripplingCompanyByAccesstoken?: rippling_companies_obj_rel_insert_input | null;
  rippling_company?: rippling_companies_obj_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "rippling_company_tokens"
 */
export interface rippling_company_tokens_obj_rel_insert_input {
  data: rippling_company_tokens_insert_input;
  on_conflict?: rippling_company_tokens_on_conflict | null;
}

/**
 * on conflict condition type for table "rippling_company_tokens"
 */
export interface rippling_company_tokens_on_conflict {
  constraint: rippling_company_tokens_constraint;
  update_columns: rippling_company_tokens_update_column[];
  where?: rippling_company_tokens_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "rippling_employees"
 */
export interface rippling_employees_arr_rel_insert_input {
  data: rippling_employees_insert_input[];
  on_conflict?: rippling_employees_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "rippling_employees". All fields are combined with a logical 'AND'.
 */
export interface rippling_employees_bool_exp {
  _and?: (rippling_employees_bool_exp | null)[] | null;
  _not?: rippling_employees_bool_exp | null;
  _or?: (rippling_employees_bool_exp | null)[] | null;
  address?: jsonb_comparison_exp | null;
  companySid?: String_comparison_exp | null;
  compensationAnnualSalary?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  customFields?: jsonb_comparison_exp | null;
  department?: String_comparison_exp | null;
  dob?: String_comparison_exp | null;
  employmentType?: String_comparison_exp | null;
  endDate?: String_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  filingStatus?: String_comparison_exp | null;
  firstName?: String_comparison_exp | null;
  flsaStatus?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  lastName?: String_comparison_exp | null;
  managerSid?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
  personalEmail?: String_comparison_exp | null;
  phone?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  rippling_company?: rippling_companies_bool_exp | null;
  rippling_employee?: rippling_employees_bool_exp | null;
  rippling_employees?: rippling_employees_bool_exp | null;
  rippling_payroll_run_details?: rippling_payroll_run_details_bool_exp | null;
  rippling_payroll_run_earnings?: rippling_payroll_run_earnings_bool_exp | null;
  roleState?: String_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  ssn?: String_comparison_exp | null;
  startDate?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  title?: String_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
  userEmailByWorkemail?: user_emails_bool_exp | null;
  user_email?: user_emails_bool_exp | null;
  weight?: float8_comparison_exp | null;
  workEmail?: String_comparison_exp | null;
  workLocation?: jsonb_comparison_exp | null;
}

/**
 * input type for inserting data into table "rippling_employees"
 */
export interface rippling_employees_insert_input {
  address?: hasura_jsonb | null;
  companySid?: string | null;
  compensationAnnualSalary?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  customFields?: hasura_jsonb | null;
  department?: string | null;
  dob?: string | null;
  employmentType?: string | null;
  endDate?: string | null;
  expiresInType?: job_intervals_enum | null;
  filingStatus?: string | null;
  firstName?: string | null;
  flsaStatus?: string | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  lastName?: string | null;
  managerSid?: string | null;
  name?: string | null;
  personalEmail?: string | null;
  phone?: string | null;
  redundantFields?: hasura_jsonb | null;
  rippling_company?: rippling_companies_obj_rel_insert_input | null;
  rippling_employee?: rippling_employees_obj_rel_insert_input | null;
  rippling_employees?: rippling_employees_arr_rel_insert_input | null;
  rippling_payroll_run_details?: rippling_payroll_run_details_arr_rel_insert_input | null;
  rippling_payroll_run_earnings?: rippling_payroll_run_earnings_arr_rel_insert_input | null;
  roleState?: string | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  ssn?: string | null;
  startDate?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  title?: string | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  user?: users_obj_rel_insert_input | null;
  userEmailByWorkemail?: user_emails_obj_rel_insert_input | null;
  user_email?: user_emails_obj_rel_insert_input | null;
  weight?: hasura_float8 | null;
  workEmail?: string | null;
  workLocation?: hasura_jsonb | null;
}

/**
 * input type for inserting object relation for remote table "rippling_employees"
 */
export interface rippling_employees_obj_rel_insert_input {
  data: rippling_employees_insert_input;
  on_conflict?: rippling_employees_on_conflict | null;
}

/**
 * on conflict condition type for table "rippling_employees"
 */
export interface rippling_employees_on_conflict {
  constraint: rippling_employees_constraint;
  update_columns: rippling_employees_update_column[];
  where?: rippling_employees_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "rippling_payroll_earning_types"
 */
export interface rippling_payroll_earning_types_arr_rel_insert_input {
  data: rippling_payroll_earning_types_insert_input[];
  on_conflict?: rippling_payroll_earning_types_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table
 * "rippling_payroll_earning_types". All fields are combined with a logical 'AND'.
 */
export interface rippling_payroll_earning_types_bool_exp {
  _and?: (rippling_payroll_earning_types_bool_exp | null)[] | null;
  _not?: rippling_payroll_earning_types_bool_exp | null;
  _or?: (rippling_payroll_earning_types_bool_exp | null)[] | null;
  companySid?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  earningType?: String_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  name?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  rippling_company?: rippling_companies_bool_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "rippling_payroll_earning_types"
 */
export interface rippling_payroll_earning_types_insert_input {
  companySid?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  earningType?: string | null;
  expiresInType?: job_intervals_enum | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  name?: string | null;
  redundantFields?: hasura_jsonb | null;
  rippling_company?: rippling_companies_obj_rel_insert_input | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * on conflict condition type for table "rippling_payroll_earning_types"
 */
export interface rippling_payroll_earning_types_on_conflict {
  constraint: rippling_payroll_earning_types_constraint;
  update_columns: rippling_payroll_earning_types_update_column[];
  where?: rippling_payroll_earning_types_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "rippling_payroll_run_details"
 */
export interface rippling_payroll_run_details_arr_rel_insert_input {
  data: rippling_payroll_run_details_insert_input[];
  on_conflict?: rippling_payroll_run_details_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "rippling_payroll_run_details".
 * All fields are combined with a logical 'AND'.
 */
export interface rippling_payroll_run_details_bool_exp {
  _and?: (rippling_payroll_run_details_bool_exp | null)[] | null;
  _not?: rippling_payroll_run_details_bool_exp | null;
  _or?: (rippling_payroll_run_details_bool_exp | null)[] | null;
  companySid?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  deductions?: jsonb_comparison_exp | null;
  employeeSid?: String_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  garnishments?: jsonb_comparison_exp | null;
  grossPay?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  netPay?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  rippling_company?: rippling_companies_bool_exp | null;
  rippling_employee?: rippling_employees_bool_exp | null;
  rippling_payroll_run?: rippling_payroll_runs_bool_exp | null;
  rippling_payroll_run_earnings?: rippling_payroll_run_earnings_bool_exp | null;
  runSid?: String_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  taxes?: jsonb_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  user_payment?: user_payments_bool_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "rippling_payroll_run_details"
 */
export interface rippling_payroll_run_details_insert_input {
  companySid?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  deductions?: hasura_jsonb | null;
  employeeSid?: string | null;
  expiresInType?: job_intervals_enum | null;
  garnishments?: hasura_jsonb | null;
  grossPay?: string | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  netPay?: string | null;
  redundantFields?: hasura_jsonb | null;
  rippling_company?: rippling_companies_obj_rel_insert_input | null;
  rippling_employee?: rippling_employees_obj_rel_insert_input | null;
  rippling_payroll_run?: rippling_payroll_runs_obj_rel_insert_input | null;
  rippling_payroll_run_earnings?: rippling_payroll_run_earnings_arr_rel_insert_input | null;
  runSid?: string | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  taxes?: hasura_jsonb | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  user_payment?: user_payments_obj_rel_insert_input | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "rippling_payroll_run_details"
 */
export interface rippling_payroll_run_details_obj_rel_insert_input {
  data: rippling_payroll_run_details_insert_input;
  on_conflict?: rippling_payroll_run_details_on_conflict | null;
}

/**
 * on conflict condition type for table "rippling_payroll_run_details"
 */
export interface rippling_payroll_run_details_on_conflict {
  constraint: rippling_payroll_run_details_constraint;
  update_columns: rippling_payroll_run_details_update_column[];
  where?: rippling_payroll_run_details_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "rippling_payroll_run_earnings"
 */
export interface rippling_payroll_run_earnings_arr_rel_insert_input {
  data: rippling_payroll_run_earnings_insert_input[];
  on_conflict?: rippling_payroll_run_earnings_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table
 * "rippling_payroll_run_earnings". All fields are combined with a logical 'AND'.
 */
export interface rippling_payroll_run_earnings_bool_exp {
  _and?: (rippling_payroll_run_earnings_bool_exp | null)[] | null;
  _not?: rippling_payroll_run_earnings_bool_exp | null;
  _or?: (rippling_payroll_run_earnings_bool_exp | null)[] | null;
  amount?: String_comparison_exp | null;
  companySid?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  employeeSid?: String_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  hours?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  name?: String_comparison_exp | null;
  payrollRunDetailsSid?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  rippling_company?: rippling_companies_bool_exp | null;
  rippling_employee?: rippling_employees_bool_exp | null;
  rippling_payroll_run_detail?: rippling_payroll_run_details_bool_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "rippling_payroll_run_earnings"
 */
export interface rippling_payroll_run_earnings_insert_input {
  amount?: string | null;
  companySid?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  employeeSid?: string | null;
  expiresInType?: job_intervals_enum | null;
  hours?: string | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  name?: string | null;
  payrollRunDetailsSid?: string | null;
  redundantFields?: hasura_jsonb | null;
  rippling_company?: rippling_companies_obj_rel_insert_input | null;
  rippling_employee?: rippling_employees_obj_rel_insert_input | null;
  rippling_payroll_run_detail?: rippling_payroll_run_details_obj_rel_insert_input | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * on conflict condition type for table "rippling_payroll_run_earnings"
 */
export interface rippling_payroll_run_earnings_on_conflict {
  constraint: rippling_payroll_run_earnings_constraint;
  update_columns: rippling_payroll_run_earnings_update_column[];
  where?: rippling_payroll_run_earnings_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "rippling_payroll_run_states".
 * All fields are combined with a logical 'AND'.
 */
export interface rippling_payroll_run_states_bool_exp {
  _and?: (rippling_payroll_run_states_bool_exp | null)[] | null;
  _not?: rippling_payroll_run_states_bool_exp | null;
  _or?: (rippling_payroll_run_states_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  id?: String_comparison_exp | null;
  rippling_payroll_runs?: rippling_payroll_runs_bool_exp | null;
}

/**
 * expression to compare columns of type rippling_payroll_run_states_enum. All fields are combined with logical 'AND'.
 */
export interface rippling_payroll_run_states_enum_comparison_exp {
  _eq?: rippling_payroll_run_states_enum | null;
  _in?: rippling_payroll_run_states_enum[] | null;
  _is_null?: boolean | null;
  _neq?: rippling_payroll_run_states_enum | null;
  _nin?: rippling_payroll_run_states_enum[] | null;
}

/**
 * input type for inserting data into table "rippling_payroll_run_states"
 */
export interface rippling_payroll_run_states_insert_input {
  description?: string | null;
  id?: string | null;
  rippling_payroll_runs?: rippling_payroll_runs_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "rippling_payroll_run_states"
 */
export interface rippling_payroll_run_states_obj_rel_insert_input {
  data: rippling_payroll_run_states_insert_input;
  on_conflict?: rippling_payroll_run_states_on_conflict | null;
}

/**
 * on conflict condition type for table "rippling_payroll_run_states"
 */
export interface rippling_payroll_run_states_on_conflict {
  constraint: rippling_payroll_run_states_constraint;
  update_columns: rippling_payroll_run_states_update_column[];
  where?: rippling_payroll_run_states_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "rippling_payroll_runs"
 */
export interface rippling_payroll_runs_arr_rel_insert_input {
  data: rippling_payroll_runs_insert_input[];
  on_conflict?: rippling_payroll_runs_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "rippling_payroll_runs". All fields are combined with a logical 'AND'.
 */
export interface rippling_payroll_runs_bool_exp {
  _and?: (rippling_payroll_runs_bool_exp | null)[] | null;
  _not?: rippling_payroll_runs_bool_exp | null;
  _or?: (rippling_payroll_runs_bool_exp | null)[] | null;
  approvalDeadline?: timestamptz_comparison_exp | null;
  checkDate?: timestamptz_comparison_exp | null;
  companySid?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  name?: String_comparison_exp | null;
  payPeriodEndDate?: timestamptz_comparison_exp | null;
  payPeriodStartDate?: timestamptz_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  rippling_company?: rippling_companies_bool_exp | null;
  rippling_payroll_run_details?: rippling_payroll_run_details_bool_exp | null;
  rippling_payroll_run_state?: rippling_payroll_run_states_bool_exp | null;
  rippling_payroll_schedule?: rippling_payroll_schedules_bool_exp | null;
  runStateId?: rippling_payroll_run_states_enum_comparison_exp | null;
  runType?: String_comparison_exp | null;
  scheduleSid?: String_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "rippling_payroll_runs"
 */
export interface rippling_payroll_runs_insert_input {
  approvalDeadline?: hasura_timestamptz | null;
  checkDate?: hasura_timestamptz | null;
  companySid?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  name?: string | null;
  payPeriodEndDate?: hasura_timestamptz | null;
  payPeriodStartDate?: hasura_timestamptz | null;
  redundantFields?: hasura_jsonb | null;
  rippling_company?: rippling_companies_obj_rel_insert_input | null;
  rippling_payroll_run_details?: rippling_payroll_run_details_arr_rel_insert_input | null;
  rippling_payroll_run_state?: rippling_payroll_run_states_obj_rel_insert_input | null;
  rippling_payroll_schedule?: rippling_payroll_schedules_obj_rel_insert_input | null;
  runStateId?: rippling_payroll_run_states_enum | null;
  runType?: string | null;
  scheduleSid?: string | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "rippling_payroll_runs"
 */
export interface rippling_payroll_runs_obj_rel_insert_input {
  data: rippling_payroll_runs_insert_input;
  on_conflict?: rippling_payroll_runs_on_conflict | null;
}

/**
 * on conflict condition type for table "rippling_payroll_runs"
 */
export interface rippling_payroll_runs_on_conflict {
  constraint: rippling_payroll_runs_constraint;
  update_columns: rippling_payroll_runs_update_column[];
  where?: rippling_payroll_runs_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "rippling_payroll_schedules"
 */
export interface rippling_payroll_schedules_arr_rel_insert_input {
  data: rippling_payroll_schedules_insert_input[];
  on_conflict?: rippling_payroll_schedules_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "rippling_payroll_schedules". All fields are combined with a logical 'AND'.
 */
export interface rippling_payroll_schedules_bool_exp {
  _and?: (rippling_payroll_schedules_bool_exp | null)[] | null;
  _not?: rippling_payroll_schedules_bool_exp | null;
  _or?: (rippling_payroll_schedules_bool_exp | null)[] | null;
  companySid?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  name?: String_comparison_exp | null;
  payFrequency?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  rippling_company?: rippling_companies_bool_exp | null;
  rippling_payroll_runs?: rippling_payroll_runs_bool_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "rippling_payroll_schedules"
 */
export interface rippling_payroll_schedules_insert_input {
  companySid?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  name?: string | null;
  payFrequency?: string | null;
  redundantFields?: hasura_jsonb | null;
  rippling_company?: rippling_companies_obj_rel_insert_input | null;
  rippling_payroll_runs?: rippling_payroll_runs_arr_rel_insert_input | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "rippling_payroll_schedules"
 */
export interface rippling_payroll_schedules_obj_rel_insert_input {
  data: rippling_payroll_schedules_insert_input;
  on_conflict?: rippling_payroll_schedules_on_conflict | null;
}

/**
 * on conflict condition type for table "rippling_payroll_schedules"
 */
export interface rippling_payroll_schedules_on_conflict {
  constraint: rippling_payroll_schedules_constraint;
  update_columns: rippling_payroll_schedules_update_column[];
  where?: rippling_payroll_schedules_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "skilltrack_types". All fields are combined with a logical 'AND'.
 */
export interface skilltrack_types_bool_exp {
  _and?: (skilltrack_types_bool_exp | null)[] | null;
  _not?: skilltrack_types_bool_exp | null;
  _or?: (skilltrack_types_bool_exp | null)[] | null;
  candidates?: candidates_bool_exp | null;
  description?: String_comparison_exp | null;
  type?: String_comparison_exp | null;
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
 * input type for inserting data into table "skilltrack_types"
 */
export interface skilltrack_types_insert_input {
  candidates?: candidates_arr_rel_insert_input | null;
  description?: string | null;
  type?: string | null;
}

/**
 * input type for inserting object relation for remote table "skilltrack_types"
 */
export interface skilltrack_types_obj_rel_insert_input {
  data: skilltrack_types_insert_input;
  on_conflict?: skilltrack_types_on_conflict | null;
}

/**
 * on conflict condition type for table "skilltrack_types"
 */
export interface skilltrack_types_on_conflict {
  constraint: skilltrack_types_constraint;
  update_columns: skilltrack_types_update_column[];
  where?: skilltrack_types_bool_exp | null;
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
 * input type for inserting data into table "task_attributes"
 */
export interface task_attributes_insert_input {
  id?: number | null;
  remainingduplicatelimit?: hasura_bigint | null;
}

/**
 * input type for inserting object relation for remote table "task_attributes"
 */
export interface task_attributes_obj_rel_insert_input {
  data: task_attributes_insert_input;
}

/**
 * input type for inserting array relation for remote table "task_client_blockers"
 */
export interface task_client_blockers_arr_rel_insert_input {
  data: task_client_blockers_insert_input[];
  on_conflict?: task_client_blockers_on_conflict | null;
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
 * input type for inserting data into table "task_client_blockers"
 */
export interface task_client_blockers_insert_input {
  clientBlockersId?: number | null;
  client_blocker?: client_blockers_obj_rel_insert_input | null;
  task?: tasks_obj_rel_insert_input | null;
  tasksId?: number | null;
}

/**
 * on conflict condition type for table "task_client_blockers"
 */
export interface task_client_blockers_on_conflict {
  constraint: task_client_blockers_constraint;
  update_columns: task_client_blockers_update_column[];
  where?: task_client_blockers_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "task_code_comments"
 */
export interface task_code_comments_arr_rel_insert_input {
  data: task_code_comments_insert_input[];
  on_conflict?: task_code_comments_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "task_code_comments". All fields are combined with a logical 'AND'.
 */
export interface task_code_comments_bool_exp {
  _and?: (task_code_comments_bool_exp | null)[] | null;
  _not?: task_code_comments_bool_exp | null;
  _or?: (task_code_comments_bool_exp | null)[] | null;
  authorId?: Int_comparison_exp | null;
  body?: String_comparison_exp | null;
  client_repositories_commit?: client_repositories_commits_bool_exp | null;
  commitId?: uuid_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  diffHunk?: String_comparison_exp | null;
  externalCommentUrl?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  internalCommentUrl?: String_comparison_exp | null;
  lastSync?: timestamptz_comparison_exp | null;
  path?: String_comparison_exp | null;
  shouldPublish?: Boolean_comparison_exp | null;
  shouldSync?: Boolean_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
}

/**
 * input type for inserting data into table "task_code_comments"
 */
export interface task_code_comments_insert_input {
  authorId?: number | null;
  body?: string | null;
  client_repositories_commit?: client_repositories_commits_obj_rel_insert_input | null;
  commitId?: hasura_uuid | null;
  createdAt?: hasura_timestamptz | null;
  diffHunk?: string | null;
  externalCommentUrl?: string | null;
  id?: hasura_uuid | null;
  internalCommentUrl?: string | null;
  lastSync?: hasura_timestamptz | null;
  path?: string | null;
  shouldPublish?: boolean | null;
  shouldSync?: boolean | null;
  updatedAt?: hasura_timestamptz | null;
  user?: users_obj_rel_insert_input | null;
}

/**
 * on conflict condition type for table "task_code_comments"
 */
export interface task_code_comments_on_conflict {
  constraint: task_code_comments_constraint;
  update_columns: task_code_comments_update_column[];
  where?: task_code_comments_bool_exp | null;
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
  summarizedInUserDailyStandupId?: number | null;
  summary?: string | null;
  task?: tasks_obj_rel_insert_input | null;
  taskId?: number | null;
  ticket_daily_standup?: ticket_daily_standups_obj_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
  updatedETA?: hasura_timestamptz | null;
  user?: users_obj_rel_insert_input | null;
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
 * input type for inserting array relation for remote table "task_dependencies"
 */
export interface task_dependencies_arr_rel_insert_input {
  data: task_dependencies_insert_input[];
  on_conflict?: task_dependencies_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "task_dependencies". All fields are combined with a logical 'AND'.
 */
export interface task_dependencies_bool_exp {
  _and?: (task_dependencies_bool_exp | null)[] | null;
  _not?: task_dependencies_bool_exp | null;
  _or?: (task_dependencies_bool_exp | null)[] | null;
  task?: tasks_bool_exp | null;
  taskByTasksid2?: tasks_bool_exp | null;
  tasksId_1?: Int_comparison_exp | null;
  tasksId_2?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "task_dependencies"
 */
export interface task_dependencies_insert_input {
  task?: tasks_obj_rel_insert_input | null;
  taskByTasksid2?: tasks_obj_rel_insert_input | null;
  tasksId_1?: number | null;
  tasksId_2?: number | null;
}

/**
 * on conflict condition type for table "task_dependencies"
 */
export interface task_dependencies_on_conflict {
  constraint: task_dependencies_constraint;
  update_columns: task_dependencies_update_column[];
  where?: task_dependencies_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "task_followers"
 */
export interface task_followers_arr_rel_insert_input {
  data: task_followers_insert_input[];
  on_conflict?: task_followers_on_conflict | null;
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
 * input type for inserting data into table "task_followers"
 */
export interface task_followers_insert_input {
  task?: tasks_obj_rel_insert_input | null;
  taskByTasksid2?: tasks_obj_rel_insert_input | null;
  tasksId_1?: number | null;
  tasksId_2?: number | null;
}

/**
 * on conflict condition type for table "task_followers"
 */
export interface task_followers_on_conflict {
  constraint: task_followers_constraint;
  update_columns: task_followers_update_column[];
  where?: task_followers_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "task_pull_requests"
 */
export interface task_pull_requests_arr_rel_insert_input {
  data: task_pull_requests_insert_input[];
  on_conflict?: task_pull_requests_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "task_pull_requests". All fields are combined with a logical 'AND'.
 */
export interface task_pull_requests_bool_exp {
  _and?: (task_pull_requests_bool_exp | null)[] | null;
  _not?: task_pull_requests_bool_exp | null;
  _or?: (task_pull_requests_bool_exp | null)[] | null;
  github_pull_request?: github_pull_requests_bool_exp | null;
  pullRequestSid?: String_comparison_exp | null;
  task?: tasks_bool_exp | null;
  taskId?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "task_pull_requests"
 */
export interface task_pull_requests_insert_input {
  github_pull_request?: github_pull_requests_obj_rel_insert_input | null;
  pullRequestSid?: string | null;
  task?: tasks_obj_rel_insert_input | null;
  taskId?: number | null;
}

/**
 * on conflict condition type for table "task_pull_requests"
 */
export interface task_pull_requests_on_conflict {
  constraint: task_pull_requests_constraint;
  update_columns: task_pull_requests_update_column[];
  where?: task_pull_requests_bool_exp | null;
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
  further_reviews?: further_reviews_bool_exp | null;
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
  developer?: developers_obj_rel_insert_input | null;
  developerByDeveloperid?: developers_obj_rel_insert_input | null;
  developerId?: string | null;
  further_reviews?: further_reviews_arr_rel_insert_input | null;
  id?: number | null;
  managerId?: string | null;
  managerInvoiceId?: number | null;
  reviewerInvoiceId?: number | null;
  startedAt?: hasura_timestamptz | null;
  status?: task_reviews_status_enum | null;
  task?: tasks_obj_rel_insert_input | null;
  task_reviews_status?: task_reviews_status_obj_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
  userInvoiceByReviewerinvoiceid?: user_invoices_obj_rel_insert_input | null;
  user_invoice?: user_invoices_obj_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "task_reviews"
 */
export interface task_reviews_obj_rel_insert_input {
  data: task_reviews_insert_input;
  on_conflict?: task_reviews_on_conflict | null;
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
 * input type for inserting data into table "task_reviews_status"
 */
export interface task_reviews_status_insert_input {
  description?: string | null;
  task_reviews?: task_reviews_arr_rel_insert_input | null;
  type?: string | null;
}

/**
 * input type for inserting object relation for remote table "task_reviews_status"
 */
export interface task_reviews_status_obj_rel_insert_input {
  data: task_reviews_status_insert_input;
  on_conflict?: task_reviews_status_on_conflict | null;
}

/**
 * on conflict condition type for table "task_reviews_status"
 */
export interface task_reviews_status_on_conflict {
  constraint: task_reviews_status_constraint;
  update_columns: task_reviews_status_update_column[];
  where?: task_reviews_status_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "task_submission"
 */
export interface task_submission_arr_rel_insert_input {
  data: task_submission_insert_input[];
  on_conflict?: task_submission_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "task_submission". All fields are combined with a logical 'AND'.
 */
export interface task_submission_bool_exp {
  _and?: (task_submission_bool_exp | null)[] | null;
  _not?: task_submission_bool_exp | null;
  _or?: (task_submission_bool_exp | null)[] | null;
  createdAt?: timestamptz_comparison_exp | null;
  gcpObjectId?: String_comparison_exp | null;
  gcp_storage_object?: gcp_storage_objects_bool_exp | null;
  id?: Int_comparison_exp | null;
  task?: tasks_bool_exp | null;
  taskId?: Int_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "task_submission"
 */
export interface task_submission_insert_input {
  createdAt?: hasura_timestamptz | null;
  gcpObjectId?: string | null;
  gcp_storage_object?: gcp_storage_objects_obj_rel_insert_input | null;
  id?: number | null;
  task?: tasks_obj_rel_insert_input | null;
  taskId?: number | null;
  updatedAt?: hasura_timestamptz | null;
}

/**
 * on conflict condition type for table "task_submission"
 */
export interface task_submission_on_conflict {
  constraint: task_submission_constraint;
  update_columns: task_submission_update_column[];
  where?: task_submission_bool_exp | null;
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
  technology?: technologies_obj_rel_insert_input | null;
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
  on_conflict?: task_time_logs_on_conflict | null;
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
  timeDoctorTask?: timedoctor_tasks_bool_exp | null;
  timeSpent?: Int_comparison_exp | null;
  timedoctorTaskId?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "task_time_logs"
 */
export interface task_time_logs_insert_input {
  CreatedDateColumn?: hasura_timestamptz | null;
  UpdateDateColumn?: hasura_timestamptz | null;
  developer?: developers_obj_rel_insert_input | null;
  developerId?: string | null;
  finishedAt?: hasura_timestamptz | null;
  id?: number | null;
  startedAt?: hasura_timestamptz | null;
  task?: tasks_obj_rel_insert_input | null;
  taskId?: number | null;
  timeDoctorTask?: timedoctor_tasks_obj_rel_insert_input | null;
  timeSpent?: number | null;
  timedoctorTaskId?: string | null;
}

/**
 * input type for inserting object relation for remote table "task_time_logs"
 */
export interface task_time_logs_obj_rel_insert_input {
  data: task_time_logs_insert_input;
  on_conflict?: task_time_logs_on_conflict | null;
}

/**
 * on conflict condition type for table "task_time_logs"
 */
export interface task_time_logs_on_conflict {
  constraint: task_time_logs_constraint;
  update_columns: task_time_logs_update_column[];
  where?: task_time_logs_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "task_work"
 */
export interface task_work_arr_rel_insert_input {
  data: task_work_insert_input[];
  on_conflict?: task_work_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "task_work". All fields are combined with a logical 'AND'.
 */
export interface task_work_bool_exp {
  _and?: (task_work_bool_exp | null)[] | null;
  _not?: task_work_bool_exp | null;
  _or?: (task_work_bool_exp | null)[] | null;
  completedAt?: timestamptz_comparison_exp | null;
  costInUSD?: Int_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  developer?: developers_bool_exp | null;
  developerByManagerid?: developers_bool_exp | null;
  developerId?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  managerId?: String_comparison_exp | null;
  managerInvoiceId?: Int_comparison_exp | null;
  resourceURL?: String_comparison_exp | null;
  startedAt?: timestamptz_comparison_exp | null;
  status?: task_work_status_enum_comparison_exp | null;
  task_work_status?: task_work_status_bool_exp | null;
  timedoctor_tasks?: timedoctor_tasks_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  userInvoiceByManagerinvoiceid?: user_invoices_bool_exp | null;
  user_invoice?: user_invoices_bool_exp | null;
  user_time_logs?: user_time_logs_bool_exp | null;
  workerInvoiceId?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "task_work"
 */
export interface task_work_insert_input {
  completedAt?: hasura_timestamptz | null;
  costInUSD?: number | null;
  createdAt?: hasura_timestamptz | null;
  developer?: developers_obj_rel_insert_input | null;
  developerByManagerid?: developers_obj_rel_insert_input | null;
  developerId?: string | null;
  id?: number | null;
  managerId?: string | null;
  managerInvoiceId?: number | null;
  resourceURL?: string | null;
  startedAt?: hasura_timestamptz | null;
  status?: task_work_status_enum | null;
  task_work_status?: task_work_status_obj_rel_insert_input | null;
  timedoctor_tasks?: timedoctor_tasks_arr_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
  userInvoiceByManagerinvoiceid?: user_invoices_obj_rel_insert_input | null;
  user_invoice?: user_invoices_obj_rel_insert_input | null;
  user_time_logs?: user_time_logs_arr_rel_insert_input | null;
  workerInvoiceId?: number | null;
}

/**
 * input type for inserting object relation for remote table "task_work"
 */
export interface task_work_obj_rel_insert_input {
  data: task_work_insert_input;
  on_conflict?: task_work_on_conflict | null;
}

/**
 * on conflict condition type for table "task_work"
 */
export interface task_work_on_conflict {
  constraint: task_work_constraint;
  update_columns: task_work_update_column[];
  where?: task_work_bool_exp | null;
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
 * expression to compare columns of type task_work_status_enum. All fields are combined with logical 'AND'.
 */
export interface task_work_status_enum_comparison_exp {
  _eq?: task_work_status_enum | null;
  _in?: task_work_status_enum[] | null;
  _is_null?: boolean | null;
  _neq?: task_work_status_enum | null;
  _nin?: task_work_status_enum[] | null;
}

/**
 * input type for inserting data into table "task_work_status"
 */
export interface task_work_status_insert_input {
  description?: string | null;
  task_works?: task_work_arr_rel_insert_input | null;
  type?: string | null;
}

/**
 * input type for inserting object relation for remote table "task_work_status"
 */
export interface task_work_status_obj_rel_insert_input {
  data: task_work_status_insert_input;
  on_conflict?: task_work_status_on_conflict | null;
}

/**
 * on conflict condition type for table "task_work_status"
 */
export interface task_work_status_on_conflict {
  constraint: task_work_status_constraint;
  update_columns: task_work_status_update_column[];
  where?: task_work_status_bool_exp | null;
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
  baseBranchId?: Int_comparison_exp | null;
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
  further_reviews?: further_reviews_bool_exp | null;
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
  taskDependenciesByTasksid2?: task_dependencies_bool_exp | null;
  taskFollowersByTasksid2?: task_followers_bool_exp | null;
  task_attributes?: task_attributes_bool_exp | null;
  task_client_blockers?: task_client_blockers_bool_exp | null;
  task_daily_standups?: task_daily_standups_bool_exp | null;
  task_dependencies?: task_dependencies_bool_exp | null;
  task_followers?: task_followers_bool_exp | null;
  task_pull_requests?: task_pull_requests_bool_exp | null;
  task_reviews?: task_reviews_bool_exp | null;
  task_status?: tasks_status_bool_exp | null;
  task_submissions?: task_submission_bool_exp | null;
  task_technologies?: task_technologies_bool_exp | null;
  task_time_log?: task_time_logs_bool_exp | null;
  task_time_logs?: task_time_logs_bool_exp | null;
  task_type?: tasks_type_bool_exp | null;
  tasks_status?: tasks_status_bool_exp | null;
  tasks_type?: tasks_type_bool_exp | null;
  ticket?: tickets_bool_exp | null;
  ticketCode?: String_comparison_exp | null;
  timedoctor_tasks?: timedoctor_tasks_bool_exp | null;
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
  baseBranchId?: number | null;
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
  developerByDeveloperid?: developers_obj_rel_insert_input | null;
  developerByManagerid?: developers_obj_rel_insert_input | null;
  developerByReviewerid?: developers_obj_rel_insert_input | null;
  developerId?: string | null;
  developerInvoiceId?: number | null;
  duplicateOfTask?: tasks_obj_rel_insert_input | null;
  duplicateOfTaskId?: number | null;
  further_reviews?: further_reviews_arr_rel_insert_input | null;
  git_branch?: git_branches_obj_rel_insert_input | null;
  git_commits?: git_commits_arr_rel_insert_input | null;
  id?: number | null;
  isBillable?: boolean | null;
  managerId?: string | null;
  managerInvoiceId?: number | null;
  maxDuplicateLimit?: number | null;
  parentTaskId?: tasks_arr_rel_insert_input | null;
  prLink?: string | null;
  reviewerId?: string | null;
  specLink?: string | null;
  startedAt?: hasura_timestamptz | null;
  status?: tasks_status_enum | null;
  taskDependenciesByTasksid2?: task_dependencies_arr_rel_insert_input | null;
  taskFollowersByTasksid2?: task_followers_arr_rel_insert_input | null;
  task_attributes?: task_attributes_obj_rel_insert_input | null;
  task_client_blockers?: task_client_blockers_arr_rel_insert_input | null;
  task_daily_standups?: task_daily_standups_arr_rel_insert_input | null;
  task_dependencies?: task_dependencies_arr_rel_insert_input | null;
  task_followers?: task_followers_arr_rel_insert_input | null;
  task_pull_requests?: task_pull_requests_arr_rel_insert_input | null;
  task_reviews?: task_reviews_arr_rel_insert_input | null;
  task_status?: tasks_status_obj_rel_insert_input | null;
  task_submissions?: task_submission_arr_rel_insert_input | null;
  task_technologies?: task_technologies_arr_rel_insert_input | null;
  task_time_log?: task_time_logs_obj_rel_insert_input | null;
  task_time_logs?: task_time_logs_arr_rel_insert_input | null;
  task_type?: tasks_type_obj_rel_insert_input | null;
  tasks_status?: tasks_status_obj_rel_insert_input | null;
  tasks_type?: tasks_type_obj_rel_insert_input | null;
  ticket?: tickets_obj_rel_insert_input | null;
  ticketCode?: string | null;
  timedoctor_tasks?: timedoctor_tasks_arr_rel_insert_input | null;
  title?: string | null;
  type?: tasks_type_enum | null;
  updatedAt?: hasura_timestamptz | null;
  userInvoiceByDeveloperinvoiceid?: user_invoices_obj_rel_insert_input | null;
  user_invoice?: user_invoices_obj_rel_insert_input | null;
  user_time_logs?: user_time_logs_arr_rel_insert_input | null;
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
 * input type for inserting data into table "tasks_status"
 */
export interface tasks_status_insert_input {
  description?: string | null;
  tasks?: tasks_arr_rel_insert_input | null;
  type?: string | null;
}

/**
 * input type for inserting object relation for remote table "tasks_status"
 */
export interface tasks_status_obj_rel_insert_input {
  data: tasks_status_insert_input;
  on_conflict?: tasks_status_on_conflict | null;
}

/**
 * on conflict condition type for table "tasks_status"
 */
export interface tasks_status_on_conflict {
  constraint: tasks_status_constraint;
  update_columns: tasks_status_update_column[];
  where?: tasks_status_bool_exp | null;
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
 * input type for inserting data into table "tasks_type"
 */
export interface tasks_type_insert_input {
  description?: string | null;
  tasks?: tasks_arr_rel_insert_input | null;
  type?: string | null;
}

/**
 * input type for inserting object relation for remote table "tasks_type"
 */
export interface tasks_type_obj_rel_insert_input {
  data: tasks_type_insert_input;
  on_conflict?: tasks_type_on_conflict | null;
}

/**
 * on conflict condition type for table "tasks_type"
 */
export interface tasks_type_on_conflict {
  constraint: tasks_type_constraint;
  update_columns: tasks_type_update_column[];
  where?: tasks_type_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "technologies". All fields are combined with a logical 'AND'.
 */
export interface technologies_bool_exp {
  _and?: (technologies_bool_exp | null)[] | null;
  _not?: technologies_bool_exp | null;
  _or?: (technologies_bool_exp | null)[] | null;
  candidate_technologies?: candidate_technologies_bool_exp | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  optional_technologies?: optional_technologies_bool_exp | null;
  qualified_technologies?: qualified_technologies_bool_exp | null;
  task_technologies?: task_technologies_bool_exp | null;
}

/**
 * input type for inserting data into table "technologies"
 */
export interface technologies_insert_input {
  candidate_technologies?: candidate_technologies_arr_rel_insert_input | null;
  id?: number | null;
  name?: string | null;
  optional_technologies?: optional_technologies_arr_rel_insert_input | null;
  qualified_technologies?: qualified_technologies_arr_rel_insert_input | null;
  task_technologies?: task_technologies_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "technologies"
 */
export interface technologies_obj_rel_insert_input {
  data: technologies_insert_input;
  on_conflict?: technologies_on_conflict | null;
}

/**
 * on conflict condition type for table "technologies"
 */
export interface technologies_on_conflict {
  constraint: technologies_constraint;
  update_columns: technologies_update_column[];
  where?: technologies_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "ticket_client_blockers"
 */
export interface ticket_client_blockers_arr_rel_insert_input {
  data: ticket_client_blockers_insert_input[];
  on_conflict?: ticket_client_blockers_on_conflict | null;
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
 * input type for inserting data into table "ticket_client_blockers"
 */
export interface ticket_client_blockers_insert_input {
  clientBlockersId?: number | null;
  client_blocker?: client_blockers_obj_rel_insert_input | null;
  ticket?: tickets_obj_rel_insert_input | null;
  ticketsId?: number | null;
}

/**
 * on conflict condition type for table "ticket_client_blockers"
 */
export interface ticket_client_blockers_on_conflict {
  constraint: ticket_client_blockers_constraint;
  update_columns: ticket_client_blockers_update_column[];
  where?: ticket_client_blockers_bool_exp | null;
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
  user?: users_obj_rel_insert_input | null;
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
  timedoctor_tasks?: timedoctor_tasks_bool_exp | null;
  title?: String_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  user_time_logs?: user_time_logs_bool_exp | null;
}

/**
 * input type for inserting data into table "tickets"
 */
export interface tickets_insert_input {
  cancelledAt?: hasura_timestamptz | null;
  client?: clients_obj_rel_insert_input | null;
  clientId?: string | null;
  clientProjectId?: number | null;
  client_invoice?: client_invoices_obj_rel_insert_input | null;
  client_project?: client_projects_obj_rel_insert_input | null;
  code?: string | null;
  completedAt?: hasura_timestamptz | null;
  costInCredits?: number | null;
  createdAt?: hasura_timestamptz | null;
  description?: string | null;
  developer?: developers_obj_rel_insert_input | null;
  discount?: number | null;
  id?: number | null;
  invoiceId?: number | null;
  isFixed?: boolean | null;
  isInternal?: boolean | null;
  isSynced?: boolean | null;
  manager?: users_obj_rel_insert_input | null;
  managerId?: string | null;
  startedAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  tasks?: tasks_arr_rel_insert_input | null;
  ticketLink?: string | null;
  ticket_client_blockers?: ticket_client_blockers_arr_rel_insert_input | null;
  ticket_daily_standups?: ticket_daily_standups_arr_rel_insert_input | null;
  timedoctor_tasks?: timedoctor_tasks_arr_rel_insert_input | null;
  title?: string | null;
  updatedAt?: hasura_timestamptz | null;
  user_time_logs?: user_time_logs_arr_rel_insert_input | null;
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
 * input type for inserting array relation for remote table "timedoctor_bots"
 */
export interface timedoctor_bots_arr_rel_insert_input {
  data: timedoctor_bots_insert_input[];
  on_conflict?: timedoctor_bots_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "timedoctor_bots". All fields are combined with a logical 'AND'.
 */
export interface timedoctor_bots_bool_exp {
  _and?: (timedoctor_bots_bool_exp | null)[] | null;
  _not?: timedoctor_bots_bool_exp | null;
  _or?: (timedoctor_bots_bool_exp | null)[] | null;
  accessToken?: String_comparison_exp | null;
  accessTokenCreatedAt?: timestamptz_comparison_exp | null;
  agency?: agencies_bool_exp | null;
  agencyId?: String_comparison_exp | null;
  clientKey?: String_comparison_exp | null;
  clientSecret?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  refreshToken?: String_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  timedoctor_companies?: timedoctor_companies_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "timedoctor_bots"
 */
export interface timedoctor_bots_insert_input {
  accessToken?: string | null;
  accessTokenCreatedAt?: hasura_timestamptz | null;
  agency?: agencies_obj_rel_insert_input | null;
  agencyId?: string | null;
  clientKey?: string | null;
  clientSecret?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  redundantFields?: hasura_jsonb | null;
  refreshToken?: string | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  timedoctor_companies?: timedoctor_companies_arr_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "timedoctor_bots"
 */
export interface timedoctor_bots_obj_rel_insert_input {
  data: timedoctor_bots_insert_input;
  on_conflict?: timedoctor_bots_on_conflict | null;
}

/**
 * on conflict condition type for table "timedoctor_bots"
 */
export interface timedoctor_bots_on_conflict {
  constraint: timedoctor_bots_constraint;
  update_columns: timedoctor_bots_update_column[];
  where?: timedoctor_bots_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "timedoctor_companies"
 */
export interface timedoctor_companies_arr_rel_insert_input {
  data: timedoctor_companies_insert_input[];
  on_conflict?: timedoctor_companies_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "timedoctor_companies". All fields are combined with a logical 'AND'.
 */
export interface timedoctor_companies_bool_exp {
  _and?: (timedoctor_companies_bool_exp | null)[] | null;
  _not?: timedoctor_companies_bool_exp | null;
  _or?: (timedoctor_companies_bool_exp | null)[] | null;
  botSid?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  name?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  timedoctor_bot?: timedoctor_bots_bool_exp | null;
  timedoctor_projects?: timedoctor_projects_bool_exp | null;
  timedoctor_users?: timedoctor_users_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "timedoctor_companies"
 */
export interface timedoctor_companies_insert_input {
  botSid?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  name?: string | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  timedoctor_bot?: timedoctor_bots_obj_rel_insert_input | null;
  timedoctor_projects?: timedoctor_projects_arr_rel_insert_input | null;
  timedoctor_users?: timedoctor_users_arr_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "timedoctor_companies"
 */
export interface timedoctor_companies_obj_rel_insert_input {
  data: timedoctor_companies_insert_input;
  on_conflict?: timedoctor_companies_on_conflict | null;
}

/**
 * on conflict condition type for table "timedoctor_companies"
 */
export interface timedoctor_companies_on_conflict {
  constraint: timedoctor_companies_constraint;
  update_columns: timedoctor_companies_update_column[];
  where?: timedoctor_companies_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "timedoctor_project_users"
 */
export interface timedoctor_project_users_arr_rel_insert_input {
  data: timedoctor_project_users_insert_input[];
  on_conflict?: timedoctor_project_users_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "timedoctor_project_users". All fields are combined with a logical 'AND'.
 */
export interface timedoctor_project_users_bool_exp {
  _and?: (timedoctor_project_users_bool_exp | null)[] | null;
  _not?: timedoctor_project_users_bool_exp | null;
  _or?: (timedoctor_project_users_bool_exp | null)[] | null;
  projectSid?: String_comparison_exp | null;
  timedoctor_project?: timedoctor_projects_bool_exp | null;
  timedoctor_user?: timedoctor_users_bool_exp | null;
  userSid?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "timedoctor_project_users"
 */
export interface timedoctor_project_users_insert_input {
  projectSid?: string | null;
  timedoctor_project?: timedoctor_projects_obj_rel_insert_input | null;
  timedoctor_user?: timedoctor_users_obj_rel_insert_input | null;
  userSid?: string | null;
}

/**
 * on conflict condition type for table "timedoctor_project_users"
 */
export interface timedoctor_project_users_on_conflict {
  constraint: timedoctor_project_users_constraint;
  update_columns: timedoctor_project_users_update_column[];
  where?: timedoctor_project_users_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "timedoctor_projects"
 */
export interface timedoctor_projects_arr_rel_insert_input {
  data: timedoctor_projects_insert_input[];
  on_conflict?: timedoctor_projects_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "timedoctor_projects". All fields are combined with a logical 'AND'.
 */
export interface timedoctor_projects_bool_exp {
  _and?: (timedoctor_projects_bool_exp | null)[] | null;
  _not?: timedoctor_projects_bool_exp | null;
  _or?: (timedoctor_projects_bool_exp | null)[] | null;
  archived?: Boolean_comparison_exp | null;
  companySid?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  name?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  timedoctor_company?: timedoctor_companies_bool_exp | null;
  timedoctor_project_users?: timedoctor_project_users_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "timedoctor_projects"
 */
export interface timedoctor_projects_insert_input {
  archived?: boolean | null;
  companySid?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  name?: string | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  timedoctor_company?: timedoctor_companies_obj_rel_insert_input | null;
  timedoctor_project_users?: timedoctor_project_users_arr_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "timedoctor_projects"
 */
export interface timedoctor_projects_obj_rel_insert_input {
  data: timedoctor_projects_insert_input;
  on_conflict?: timedoctor_projects_on_conflict | null;
}

/**
 * on conflict condition type for table "timedoctor_projects"
 */
export interface timedoctor_projects_on_conflict {
  constraint: timedoctor_projects_constraint;
  update_columns: timedoctor_projects_update_column[];
  where?: timedoctor_projects_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "timedoctor_task_status". All fields are combined with a logical 'AND'.
 */
export interface timedoctor_task_status_bool_exp {
  _and?: (timedoctor_task_status_bool_exp | null)[] | null;
  _not?: timedoctor_task_status_bool_exp | null;
  _or?: (timedoctor_task_status_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  id?: String_comparison_exp | null;
  timedoctor_tasks?: timedoctor_tasks_bool_exp | null;
}

/**
 * expression to compare columns of type timedoctor_task_status_enum. All fields are combined with logical 'AND'.
 */
export interface timedoctor_task_status_enum_comparison_exp {
  _eq?: timedoctor_task_status_enum | null;
  _in?: timedoctor_task_status_enum[] | null;
  _is_null?: boolean | null;
  _neq?: timedoctor_task_status_enum | null;
  _nin?: timedoctor_task_status_enum[] | null;
}

/**
 * input type for inserting data into table "timedoctor_task_status"
 */
export interface timedoctor_task_status_insert_input {
  description?: string | null;
  id?: string | null;
  timedoctor_tasks?: timedoctor_tasks_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "timedoctor_task_status"
 */
export interface timedoctor_task_status_obj_rel_insert_input {
  data: timedoctor_task_status_insert_input;
  on_conflict?: timedoctor_task_status_on_conflict | null;
}

/**
 * on conflict condition type for table "timedoctor_task_status"
 */
export interface timedoctor_task_status_on_conflict {
  constraint: timedoctor_task_status_constraint;
  update_columns: timedoctor_task_status_update_column[];
  where?: timedoctor_task_status_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "timedoctor_task_worklogs"
 */
export interface timedoctor_task_worklogs_arr_rel_insert_input {
  data: timedoctor_task_worklogs_insert_input[];
  on_conflict?: timedoctor_task_worklogs_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "timedoctor_task_worklogs". All fields are combined with a logical 'AND'.
 */
export interface timedoctor_task_worklogs_bool_exp {
  _and?: (timedoctor_task_worklogs_bool_exp | null)[] | null;
  _not?: timedoctor_task_worklogs_bool_exp | null;
  _or?: (timedoctor_task_worklogs_bool_exp | null)[] | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  edited?: Boolean_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  finishedAt?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  startedAt?: timestamptz_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  taskSid?: String_comparison_exp | null;
  timeSpendInSecs?: Int_comparison_exp | null;
  timedoctor_task?: timedoctor_tasks_bool_exp | null;
  timedoctor_user?: timedoctor_users_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  userSid?: String_comparison_exp | null;
  user_time_log?: user_time_logs_bool_exp | null;
  weight?: float8_comparison_exp | null;
  workMode?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "timedoctor_task_worklogs"
 */
export interface timedoctor_task_worklogs_insert_input {
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  edited?: boolean | null;
  expiresInType?: job_intervals_enum | null;
  finishedAt?: hasura_timestamptz | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  startedAt?: hasura_timestamptz | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  taskSid?: string | null;
  timeSpendInSecs?: number | null;
  timedoctor_task?: timedoctor_tasks_obj_rel_insert_input | null;
  timedoctor_user?: timedoctor_users_obj_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  userSid?: string | null;
  user_time_log?: user_time_logs_obj_rel_insert_input | null;
  weight?: hasura_float8 | null;
  workMode?: number | null;
}

/**
 * input type for inserting object relation for remote table "timedoctor_task_worklogs"
 */
export interface timedoctor_task_worklogs_obj_rel_insert_input {
  data: timedoctor_task_worklogs_insert_input;
  on_conflict?: timedoctor_task_worklogs_on_conflict | null;
}

/**
 * on conflict condition type for table "timedoctor_task_worklogs"
 */
export interface timedoctor_task_worklogs_on_conflict {
  constraint: timedoctor_task_worklogs_constraint;
  update_columns: timedoctor_task_worklogs_update_column[];
  where?: timedoctor_task_worklogs_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "timedoctor_tasks"
 */
export interface timedoctor_tasks_arr_rel_insert_input {
  data: timedoctor_tasks_insert_input[];
  on_conflict?: timedoctor_tasks_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "timedoctor_tasks". All fields are combined with a logical 'AND'.
 */
export interface timedoctor_tasks_bool_exp {
  _and?: (timedoctor_tasks_bool_exp | null)[] | null;
  _not?: timedoctor_tasks_bool_exp | null;
  _or?: (timedoctor_tasks_bool_exp | null)[] | null;
  client?: clients_bool_exp | null;
  clientId?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  statusId?: timedoctor_task_status_enum_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  task?: tasks_bool_exp | null;
  taskId?: Int_comparison_exp | null;
  taskWorkId?: Int_comparison_exp | null;
  task_work?: task_work_bool_exp | null;
  ticket?: tickets_bool_exp | null;
  ticketId?: Int_comparison_exp | null;
  timeSpent?: Int_comparison_exp | null;
  timedoctor_task_status?: timedoctor_task_status_bool_exp | null;
  timedoctor_task_worklogs?: timedoctor_task_worklogs_bool_exp | null;
  timedoctor_user?: timedoctor_users_bool_exp | null;
  title?: String_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  userSid?: String_comparison_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "timedoctor_tasks"
 */
export interface timedoctor_tasks_insert_input {
  client?: clients_obj_rel_insert_input | null;
  clientId?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  statusId?: timedoctor_task_status_enum | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  task?: tasks_obj_rel_insert_input | null;
  taskId?: number | null;
  taskWorkId?: number | null;
  task_work?: task_work_obj_rel_insert_input | null;
  ticket?: tickets_obj_rel_insert_input | null;
  ticketId?: number | null;
  timeSpent?: number | null;
  timedoctor_task_status?: timedoctor_task_status_obj_rel_insert_input | null;
  timedoctor_task_worklogs?: timedoctor_task_worklogs_arr_rel_insert_input | null;
  timedoctor_user?: timedoctor_users_obj_rel_insert_input | null;
  title?: string | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  userSid?: string | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "timedoctor_tasks"
 */
export interface timedoctor_tasks_obj_rel_insert_input {
  data: timedoctor_tasks_insert_input;
  on_conflict?: timedoctor_tasks_on_conflict | null;
}

/**
 * on conflict condition type for table "timedoctor_tasks"
 */
export interface timedoctor_tasks_on_conflict {
  constraint: timedoctor_tasks_constraint;
  update_columns: timedoctor_tasks_update_column[];
  where?: timedoctor_tasks_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "timedoctor_users"
 */
export interface timedoctor_users_arr_rel_insert_input {
  data: timedoctor_users_insert_input[];
  on_conflict?: timedoctor_users_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "timedoctor_users". All fields are combined with a logical 'AND'.
 */
export interface timedoctor_users_bool_exp {
  _and?: (timedoctor_users_bool_exp | null)[] | null;
  _not?: timedoctor_users_bool_exp | null;
  _or?: (timedoctor_users_bool_exp | null)[] | null;
  companySid?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  email?: String_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  timedoctor_company?: timedoctor_companies_bool_exp | null;
  timedoctor_project_users?: timedoctor_project_users_bool_exp | null;
  timedoctor_task_worklogs?: timedoctor_task_worklogs_bool_exp | null;
  timedoctor_tasks?: timedoctor_tasks_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
  user_email?: user_emails_bool_exp | null;
  weight?: float8_comparison_exp | null;
}

/**
 * input type for inserting data into table "timedoctor_users"
 */
export interface timedoctor_users_insert_input {
  companySid?: string | null;
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  email?: string | null;
  expiresInType?: job_intervals_enum | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  timedoctor_company?: timedoctor_companies_obj_rel_insert_input | null;
  timedoctor_project_users?: timedoctor_project_users_arr_rel_insert_input | null;
  timedoctor_task_worklogs?: timedoctor_task_worklogs_arr_rel_insert_input | null;
  timedoctor_tasks?: timedoctor_tasks_arr_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  user?: users_obj_rel_insert_input | null;
  user_email?: user_emails_obj_rel_insert_input | null;
  weight?: hasura_float8 | null;
}

/**
 * input type for inserting object relation for remote table "timedoctor_users"
 */
export interface timedoctor_users_obj_rel_insert_input {
  data: timedoctor_users_insert_input;
  on_conflict?: timedoctor_users_on_conflict | null;
}

/**
 * on conflict condition type for table "timedoctor_users"
 */
export interface timedoctor_users_on_conflict {
  constraint: timedoctor_users_constraint;
  update_columns: timedoctor_users_update_column[];
  where?: timedoctor_users_bool_exp | null;
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
  on_conflict?: user_contracts_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "user_contracts". All fields are combined with a logical 'AND'.
 */
export interface user_contracts_bool_exp {
  _and?: (user_contracts_bool_exp | null)[] | null;
  _not?: user_contracts_bool_exp | null;
  _or?: (user_contracts_bool_exp | null)[] | null;
  amountPerWeek?: Int_comparison_exp | null;
  developer?: developers_bool_exp | null;
  endDate?: timestamptz_comparison_exp | null;
  hoursPerWeek?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  startDate?: timestamptz_comparison_exp | null;
  title?: String_comparison_exp | null;
  url?: String_comparison_exp | null;
  user?: users_bool_exp | null;
  userLogin?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "user_contracts"
 */
export interface user_contracts_insert_input {
  amountPerWeek?: number | null;
  developer?: developers_obj_rel_insert_input | null;
  endDate?: hasura_timestamptz | null;
  hoursPerWeek?: number | null;
  id?: number | null;
  startDate?: hasura_timestamptz | null;
  title?: string | null;
  url?: string | null;
  user?: users_obj_rel_insert_input | null;
  userLogin?: string | null;
}

/**
 * on conflict condition type for table "user_contracts"
 */
export interface user_contracts_on_conflict {
  constraint: user_contracts_constraint;
  update_columns: user_contracts_update_column[];
  where?: user_contracts_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "user_daily_standups"
 */
export interface user_daily_standups_arr_rel_insert_input {
  data: user_daily_standups_insert_input[];
  on_conflict?: user_daily_standups_on_conflict | null;
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
  user?: users_obj_rel_insert_input | null;
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
  meeting_user_emails?: meeting_user_emails_bool_exp | null;
  ripplingEmployeesByWorkemail?: rippling_employees_bool_exp | null;
  rippling_employees?: rippling_employees_bool_exp | null;
  user?: users_bool_exp | null;
  userByEmail?: users_bool_exp | null;
  userId?: Int_comparison_exp | null;
  verified?: Boolean_comparison_exp | null;
}

/**
 * input type for inserting data into table "user_emails"
 */
export interface user_emails_insert_input {
  email?: string | null;
  meeting_user_emails?: meeting_user_emails_arr_rel_insert_input | null;
  ripplingEmployeesByWorkemail?: rippling_employees_arr_rel_insert_input | null;
  rippling_employees?: rippling_employees_arr_rel_insert_input | null;
  user?: users_obj_rel_insert_input | null;
  userByEmail?: users_obj_rel_insert_input | null;
  userId?: number | null;
  verified?: boolean | null;
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
 * input type for inserting array relation for remote table "user_invoice_balances"
 */
export interface user_invoice_balances_arr_rel_insert_input {
  data: user_invoice_balances_insert_input[];
}

/**
 * Boolean expression to filter rows from the table "user_invoice_balances". All fields are combined with a logical 'AND'.
 */
export interface user_invoice_balances_bool_exp {
  _and?: (user_invoice_balances_bool_exp | null)[] | null;
  _not?: user_invoice_balances_bool_exp | null;
  _or?: (user_invoice_balances_bool_exp | null)[] | null;
  adjustedCostInUSD?: Int_comparison_exp | null;
  agency_invoice?: agency_invoices_bool_exp | null;
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
 * input type for inserting data into table "user_invoice_balances"
 */
export interface user_invoice_balances_insert_input {
  adjustedCostInUSD?: number | null;
  agency_invoice?: agency_invoices_obj_rel_insert_input | null;
  costInUSD?: number | null;
  createdAt?: hasura_timestamptz | null;
  current_paid_balance_in_usd?: hasura_float8 | null;
  developer_bonus_earnings?: developer_bonus_earning_arr_rel_insert_input | null;
  dueAt?: hasura_timestamptz | null;
  endAt?: hasura_timestamptz | null;
  hours_logged_in_invoice?: hasura_bigint | null;
  id?: number | null;
  invoiceCode?: string | null;
  paidByAgencyInvoiceId?: number | null;
  previous_invoiced_balance_in_usd?: hasura_bigint | null;
  startAt?: hasura_timestamptz | null;
  status?: string | null;
  task_reviews_as_manager?: task_reviews_arr_rel_insert_input | null;
  task_reviews_as_reviewer?: task_reviews_arr_rel_insert_input | null;
  task_works_as_manager?: task_work_arr_rel_insert_input | null;
  task_works_as_worker?: task_work_arr_rel_insert_input | null;
  tasks_as_developer?: tasks_arr_rel_insert_input | null;
  tasks_as_manager?: tasks_arr_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
  user?: users_obj_rel_insert_input | null;
  userId?: number | null;
  user_invoice?: user_invoices_obj_rel_insert_input | null;
  user_invoice_status?: user_invoice_status_obj_rel_insert_input | null;
  user_time_earnings?: user_time_earnings_arr_rel_insert_input | null;
  user_time_logs?: user_time_logs_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "user_invoice_balances"
 */
export interface user_invoice_balances_obj_rel_insert_input {
  data: user_invoice_balances_insert_input;
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
 * input type for inserting data into table "user_invoice_status"
 */
export interface user_invoice_status_insert_input {
  description?: string | null;
  id?: string | null;
  user_invoices?: user_invoices_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "user_invoice_status"
 */
export interface user_invoice_status_obj_rel_insert_input {
  data: user_invoice_status_insert_input;
  on_conflict?: user_invoice_status_on_conflict | null;
}

/**
 * on conflict condition type for table "user_invoice_status"
 */
export interface user_invoice_status_on_conflict {
  constraint: user_invoice_status_constraint;
  update_columns: user_invoice_status_update_column[];
  where?: user_invoice_status_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "user_invoices"
 */
export interface user_invoices_arr_rel_insert_input {
  data: user_invoices_insert_input[];
  on_conflict?: user_invoices_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "user_invoices". All fields are combined with a logical 'AND'.
 */
export interface user_invoices_bool_exp {
  _and?: (user_invoices_bool_exp | null)[] | null;
  _not?: user_invoices_bool_exp | null;
  _or?: (user_invoices_bool_exp | null)[] | null;
  adjustedCostInUSD?: Int_comparison_exp | null;
  agency_invoice?: agency_invoices_bool_exp | null;
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
 * input type for inserting data into table "user_invoices"
 */
export interface user_invoices_insert_input {
  adjustedCostInUSD?: number | null;
  agency_invoice?: agency_invoices_obj_rel_insert_input | null;
  costInUSD?: number | null;
  createdAt?: hasura_timestamptz | null;
  developer_bonus_earnings?: developer_bonus_earning_arr_rel_insert_input | null;
  dueAt?: hasura_timestamptz | null;
  endAt?: hasura_timestamptz | null;
  id?: number | null;
  invoiceCode?: string | null;
  paidByAgencyInvoiceId?: number | null;
  startAt?: hasura_timestamptz | null;
  status?: user_invoice_status_enum | null;
  taskReviewsByManagerinvoiceid?: task_reviews_arr_rel_insert_input | null;
  taskWorksByManagerinvoiceid?: task_work_arr_rel_insert_input | null;
  task_reviews?: task_reviews_arr_rel_insert_input | null;
  task_works?: task_work_arr_rel_insert_input | null;
  tasks?: tasks_arr_rel_insert_input | null;
  tasksByManagerinvoiceid?: tasks_arr_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
  user?: users_obj_rel_insert_input | null;
  userId?: number | null;
  user_invoice_balance?: user_invoice_balances_obj_rel_insert_input | null;
  user_invoice_status?: user_invoice_status_obj_rel_insert_input | null;
  user_time_earnings?: user_time_earnings_arr_rel_insert_input | null;
  user_time_logs?: user_time_logs_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "user_invoices"
 */
export interface user_invoices_obj_rel_insert_input {
  data: user_invoices_insert_input;
  on_conflict?: user_invoices_on_conflict | null;
}

/**
 * on conflict condition type for table "user_invoices"
 */
export interface user_invoices_on_conflict {
  constraint: user_invoices_constraint;
  update_columns: user_invoices_update_column[];
  where?: user_invoices_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "user_onboarded_repos"
 */
export interface user_onboarded_repos_arr_rel_insert_input {
  data: user_onboarded_repos_insert_input[];
  on_conflict?: user_onboarded_repos_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "user_onboarded_repos". All fields are combined with a logical 'AND'.
 */
export interface user_onboarded_repos_bool_exp {
  _and?: (user_onboarded_repos_bool_exp | null)[] | null;
  _not?: user_onboarded_repos_bool_exp | null;
  _or?: (user_onboarded_repos_bool_exp | null)[] | null;
  createdAt?: timestamptz_comparison_exp | null;
  git_repo?: git_repos_bool_exp | null;
  id?: Int_comparison_exp | null;
  login?: String_comparison_exp | null;
  repoId?: Int_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
}

/**
 * input type for inserting data into table "user_onboarded_repos"
 */
export interface user_onboarded_repos_insert_input {
  createdAt?: hasura_timestamptz | null;
  git_repo?: git_repos_obj_rel_insert_input | null;
  id?: number | null;
  login?: string | null;
  repoId?: number | null;
  updatedAt?: hasura_timestamptz | null;
  user?: users_obj_rel_insert_input | null;
}

/**
 * on conflict condition type for table "user_onboarded_repos"
 */
export interface user_onboarded_repos_on_conflict {
  constraint: user_onboarded_repos_constraint;
  update_columns: user_onboarded_repos_update_column[];
  where?: user_onboarded_repos_bool_exp | null;
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
 * input type for inserting data into table "user_payment_status"
 */
export interface user_payment_status_insert_input {
  description?: string | null;
  id?: string | null;
  user_payments?: user_payments_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "user_payment_status"
 */
export interface user_payment_status_obj_rel_insert_input {
  data: user_payment_status_insert_input;
  on_conflict?: user_payment_status_on_conflict | null;
}

/**
 * on conflict condition type for table "user_payment_status"
 */
export interface user_payment_status_on_conflict {
  constraint: user_payment_status_constraint;
  update_columns: user_payment_status_update_column[];
  where?: user_payment_status_bool_exp | null;
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
 * input type for inserting data into table "user_payment_types"
 */
export interface user_payment_types_insert_input {
  description?: string | null;
  id?: string | null;
  user_payments?: user_payments_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "user_payment_types"
 */
export interface user_payment_types_obj_rel_insert_input {
  data: user_payment_types_insert_input;
  on_conflict?: user_payment_types_on_conflict | null;
}

/**
 * on conflict condition type for table "user_payment_types"
 */
export interface user_payment_types_on_conflict {
  constraint: user_payment_types_constraint;
  update_columns: user_payment_types_update_column[];
  where?: user_payment_types_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "user_payments"
 */
export interface user_payments_arr_rel_insert_input {
  data: user_payments_insert_input[];
  on_conflict?: user_payments_on_conflict | null;
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
  ripplingPayrollRunDetailsSid?: String_comparison_exp | null;
  rippling_payroll_run_detail?: rippling_payroll_run_details_bool_exp | null;
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
  ripplingPayrollRunDetailsSid?: string | null;
  rippling_payroll_run_detail?: rippling_payroll_run_details_obj_rel_insert_input | null;
  status?: user_payment_status_enum | null;
  updatedAt?: hasura_timestamptz | null;
  user?: users_obj_rel_insert_input | null;
  userLogin?: string | null;
  user_payment_status?: user_payment_status_obj_rel_insert_input | null;
  user_payment_type?: user_payment_types_obj_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "user_payments"
 */
export interface user_payments_obj_rel_insert_input {
  data: user_payments_insert_input;
  on_conflict?: user_payments_on_conflict | null;
}

/**
 * on conflict condition type for table "user_payments"
 */
export interface user_payments_on_conflict {
  constraint: user_payments_constraint;
  update_columns: user_payments_update_column[];
  where?: user_payments_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "user_time_earnings"
 */
export interface user_time_earnings_arr_rel_insert_input {
  data: user_time_earnings_insert_input[];
}

/**
 * Boolean expression to filter rows from the table "user_time_earnings". All fields are combined with a logical 'AND'.
 */
export interface user_time_earnings_bool_exp {
  _and?: (user_time_earnings_bool_exp | null)[] | null;
  _not?: user_time_earnings_bool_exp | null;
  _or?: (user_time_earnings_bool_exp | null)[] | null;
  createdAt?: timestamptz_comparison_exp | null;
  earningsinusd?: numeric_comparison_exp | null;
  finishedAt?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  startedAt?: timestamptz_comparison_exp | null;
  taskId?: Int_comparison_exp | null;
  taskWorkId?: Int_comparison_exp | null;
  timeDoctorTaskLogSid?: String_comparison_exp | null;
  timeSpentInHours?: Int_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
  userInvoiceId?: Int_comparison_exp | null;
  userLogin?: String_comparison_exp | null;
  user_invoice?: user_invoices_bool_exp | null;
}

/**
 * input type for inserting data into table "user_time_earnings"
 */
export interface user_time_earnings_insert_input {
  createdAt?: hasura_timestamptz | null;
  earningsinusd?: hasura_numeric | null;
  finishedAt?: hasura_timestamptz | null;
  id?: number | null;
  startedAt?: hasura_timestamptz | null;
  taskId?: number | null;
  taskWorkId?: number | null;
  timeDoctorTaskLogSid?: string | null;
  timeSpentInHours?: number | null;
  updatedAt?: hasura_timestamptz | null;
  user?: users_obj_rel_insert_input | null;
  userInvoiceId?: number | null;
  userLogin?: string | null;
  user_invoice?: user_invoices_obj_rel_insert_input | null;
}

/**
 * input type for inserting array relation for remote table "user_time_logs"
 */
export interface user_time_logs_arr_rel_insert_input {
  data: user_time_logs_insert_input[];
  on_conflict?: user_time_logs_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "user_time_logs". All fields are combined with a logical 'AND'.
 */
export interface user_time_logs_bool_exp {
  _and?: (user_time_logs_bool_exp | null)[] | null;
  _not?: user_time_logs_bool_exp | null;
  _or?: (user_time_logs_bool_exp | null)[] | null;
  client?: clients_bool_exp | null;
  clientId?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  finishedAt?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  startedAt?: timestamptz_comparison_exp | null;
  task?: tasks_bool_exp | null;
  taskId?: Int_comparison_exp | null;
  taskWorkId?: Int_comparison_exp | null;
  task_work?: task_work_bool_exp | null;
  ticket?: tickets_bool_exp | null;
  ticketId?: Int_comparison_exp | null;
  timeDoctorTaskLogSid?: String_comparison_exp | null;
  timeSpentInHours?: Int_comparison_exp | null;
  timeSpentInSecs?: Int_comparison_exp | null;
  timedoctor_task_worklog?: timedoctor_task_worklogs_bool_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
  userInvoiceId?: Int_comparison_exp | null;
  userLogin?: String_comparison_exp | null;
  user_invoice?: user_invoices_bool_exp | null;
}

/**
 * input type for inserting data into table "user_time_logs"
 */
export interface user_time_logs_insert_input {
  client?: clients_obj_rel_insert_input | null;
  clientId?: string | null;
  createdAt?: hasura_timestamptz | null;
  finishedAt?: hasura_timestamptz | null;
  id?: number | null;
  startedAt?: hasura_timestamptz | null;
  task?: tasks_obj_rel_insert_input | null;
  taskId?: number | null;
  taskWorkId?: number | null;
  task_work?: task_work_obj_rel_insert_input | null;
  ticket?: tickets_obj_rel_insert_input | null;
  ticketId?: number | null;
  timeDoctorTaskLogSid?: string | null;
  timeSpentInHours?: number | null;
  timeSpentInSecs?: number | null;
  timedoctor_task_worklog?: timedoctor_task_worklogs_obj_rel_insert_input | null;
  updatedAt?: hasura_timestamptz | null;
  user?: users_obj_rel_insert_input | null;
  userInvoiceId?: number | null;
  userLogin?: string | null;
  user_invoice?: user_invoices_obj_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "user_time_logs"
 */
export interface user_time_logs_obj_rel_insert_input {
  data: user_time_logs_insert_input;
  on_conflict?: user_time_logs_on_conflict | null;
}

/**
 * on conflict condition type for table "user_time_logs"
 */
export interface user_time_logs_on_conflict {
  constraint: user_time_logs_constraint;
  update_columns: user_time_logs_update_column[];
  where?: user_time_logs_bool_exp | null;
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
  auth0Sid?: String_comparison_exp | null;
  avatarUrl?: String_comparison_exp | null;
  candidate?: candidates_bool_exp | null;
  client_daily_standups?: client_daily_standups_bool_exp | null;
  client_user?: client_users_bool_exp | null;
  client_users?: client_users_bool_exp | null;
  defaultEmail?: String_comparison_exp | null;
  developer?: developers_bool_exp | null;
  developer_bonus_earnings?: developer_bonus_earning_bool_exp | null;
  developer_weekly_earnings?: developer_weekly_earning_bool_exp | null;
  firstName?: String_comparison_exp | null;
  git_users?: git_users_bool_exp | null;
  githubLogin?: String_comparison_exp | null;
  github_account?: github_accounts_bool_exp | null;
  id?: Int_comparison_exp | null;
  lastName?: String_comparison_exp | null;
  login?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
  nickname?: String_comparison_exp | null;
  passwordHash?: String_comparison_exp | null;
  ripplingEmployeeId?: Int_comparison_exp | null;
  rippling_employee?: rippling_employees_bool_exp | null;
  task_code_comments?: task_code_comments_bool_exp | null;
  task_daily_standups?: task_daily_standups_bool_exp | null;
  telephone?: String_comparison_exp | null;
  ticket_daily_standups?: ticket_daily_standups_bool_exp | null;
  timeDoctorUserId?: Int_comparison_exp | null;
  timedoctor_user?: timedoctor_users_bool_exp | null;
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
 * input type for inserting data into table "users"
 */
export interface users_insert_input {
  admin?: admin_obj_rel_insert_input | null;
  admins?: admin_arr_rel_insert_input | null;
  agency_user?: agency_users_obj_rel_insert_input | null;
  agency_users?: agency_users_arr_rel_insert_input | null;
  auth0Sid?: string | null;
  avatarUrl?: string | null;
  candidate?: candidates_obj_rel_insert_input | null;
  client_daily_standups?: client_daily_standups_arr_rel_insert_input | null;
  client_user?: client_users_obj_rel_insert_input | null;
  client_users?: client_users_arr_rel_insert_input | null;
  defaultEmail?: string | null;
  developer?: developers_obj_rel_insert_input | null;
  developer_bonus_earnings?: developer_bonus_earning_arr_rel_insert_input | null;
  developer_weekly_earnings?: developer_weekly_earning_arr_rel_insert_input | null;
  firstName?: string | null;
  git_users?: git_users_arr_rel_insert_input | null;
  githubLogin?: string | null;
  github_account?: github_accounts_obj_rel_insert_input | null;
  id?: number | null;
  lastName?: string | null;
  login?: string | null;
  name?: string | null;
  nickname?: string | null;
  passwordHash?: string | null;
  ripplingEmployeeId?: number | null;
  rippling_employee?: rippling_employees_obj_rel_insert_input | null;
  task_code_comments?: task_code_comments_arr_rel_insert_input | null;
  task_daily_standups?: task_daily_standups_arr_rel_insert_input | null;
  telephone?: string | null;
  ticket_daily_standups?: ticket_daily_standups_arr_rel_insert_input | null;
  timeDoctorUserId?: number | null;
  timedoctor_user?: timedoctor_users_obj_rel_insert_input | null;
  unverifiedEmail?: string | null;
  userEmailByUnverifiedemail?: user_emails_obj_rel_insert_input | null;
  user_contracts?: user_contracts_arr_rel_insert_input | null;
  user_daily_standups?: user_daily_standups_arr_rel_insert_input | null;
  user_email?: user_emails_obj_rel_insert_input | null;
  user_emails?: user_emails_arr_rel_insert_input | null;
  user_invoice_balances?: user_invoice_balances_arr_rel_insert_input | null;
  user_invoices?: user_invoices_arr_rel_insert_input | null;
  user_payments?: user_payments_arr_rel_insert_input | null;
  user_time_earnings?: user_time_earnings_arr_rel_insert_input | null;
  user_time_logs?: user_time_logs_arr_rel_insert_input | null;
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

/**
 * input type for inserting array relation for remote table "zoom_meeting_instance_participants"
 */
export interface zoom_meeting_instance_participants_arr_rel_insert_input {
  data: zoom_meeting_instance_participants_insert_input[];
  on_conflict?: zoom_meeting_instance_participants_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table
 * "zoom_meeting_instance_participants". All fields are combined with a logical 'AND'.
 */
export interface zoom_meeting_instance_participants_bool_exp {
  _and?: (zoom_meeting_instance_participants_bool_exp | null)[] | null;
  _not?: zoom_meeting_instance_participants_bool_exp | null;
  _or?: (zoom_meeting_instance_participants_bool_exp | null)[] | null;
  zoomMeetingInstanceSid?: String_comparison_exp | null;
  zoomUserSid?: String_comparison_exp | null;
  zoom_meeting_instance?: zoom_meeting_instances_bool_exp | null;
  zoom_user?: zoom_users_bool_exp | null;
}

/**
 * input type for inserting data into table "zoom_meeting_instance_participants"
 */
export interface zoom_meeting_instance_participants_insert_input {
  zoomMeetingInstanceSid?: string | null;
  zoomUserSid?: string | null;
  zoom_meeting_instance?: zoom_meeting_instances_obj_rel_insert_input | null;
  zoom_user?: zoom_users_obj_rel_insert_input | null;
}

/**
 * on conflict condition type for table "zoom_meeting_instance_participants"
 */
export interface zoom_meeting_instance_participants_on_conflict {
  constraint: zoom_meeting_instance_participants_constraint;
  update_columns: zoom_meeting_instance_participants_update_column[];
  where?: zoom_meeting_instance_participants_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "zoom_meeting_instances"
 */
export interface zoom_meeting_instances_arr_rel_insert_input {
  data: zoom_meeting_instances_insert_input[];
  on_conflict?: zoom_meeting_instances_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "zoom_meeting_instances". All fields are combined with a logical 'AND'.
 */
export interface zoom_meeting_instances_bool_exp {
  _and?: (zoom_meeting_instances_bool_exp | null)[] | null;
  _not?: zoom_meeting_instances_bool_exp | null;
  _or?: (zoom_meeting_instances_bool_exp | null)[] | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
  zoomMeetingSid?: String_comparison_exp | null;
  zoom_meeting?: zoom_meetings_bool_exp | null;
  zoom_meeting_instance_participants?: zoom_meeting_instance_participants_bool_exp | null;
  zoom_recordings?: zoom_recordings_bool_exp | null;
}

/**
 * input type for inserting data into table "zoom_meeting_instances"
 */
export interface zoom_meeting_instances_insert_input {
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
  zoomMeetingSid?: string | null;
  zoom_meeting?: zoom_meetings_obj_rel_insert_input | null;
  zoom_meeting_instance_participants?: zoom_meeting_instance_participants_arr_rel_insert_input | null;
  zoom_recordings?: zoom_recordings_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "zoom_meeting_instances"
 */
export interface zoom_meeting_instances_obj_rel_insert_input {
  data: zoom_meeting_instances_insert_input;
  on_conflict?: zoom_meeting_instances_on_conflict | null;
}

/**
 * on conflict condition type for table "zoom_meeting_instances"
 */
export interface zoom_meeting_instances_on_conflict {
  constraint: zoom_meeting_instances_constraint;
  update_columns: zoom_meeting_instances_update_column[];
  where?: zoom_meeting_instances_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "zoom_meetings"
 */
export interface zoom_meetings_arr_rel_insert_input {
  data: zoom_meetings_insert_input[];
  on_conflict?: zoom_meetings_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "zoom_meetings". All fields are combined with a logical 'AND'.
 */
export interface zoom_meetings_bool_exp {
  _and?: (zoom_meetings_bool_exp | null)[] | null;
  _not?: zoom_meetings_bool_exp | null;
  _or?: (zoom_meetings_bool_exp | null)[] | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  duration?: Int_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  joinUrl?: String_comparison_exp | null;
  meetings?: meetings_bool_exp | null;
  password?: String_comparison_exp | null;
  pmi?: Int_comparison_exp | null;
  recurrenceEndDateTime?: timestamptz_comparison_exp | null;
  recurrenceEndTimes?: Int_comparison_exp | null;
  recurrenceMonthlyDay?: Int_comparison_exp | null;
  recurrenceMonthlyWeek?: Int_comparison_exp | null;
  recurrenceMonthlyWeekDay?: Int_comparison_exp | null;
  recurrenceRepeatInterval?: Int_comparison_exp | null;
  recurrenceType?: Int_comparison_exp | null;
  recurrenceWeeklyDays?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  startTime?: timestamptz_comparison_exp | null;
  startUrl?: String_comparison_exp | null;
  status?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  type?: Int_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
  zoomHostSid?: String_comparison_exp | null;
  zoom_meeting_instances?: zoom_meeting_instances_bool_exp | null;
  zoom_recording_files?: zoom_recording_files_bool_exp | null;
  zoom_recordings?: zoom_recordings_bool_exp | null;
  zoom_user?: zoom_users_bool_exp | null;
}

/**
 * input type for inserting data into table "zoom_meetings"
 */
export interface zoom_meetings_insert_input {
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  duration?: number | null;
  expiresInType?: job_intervals_enum | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  joinUrl?: string | null;
  meetings?: meetings_arr_rel_insert_input | null;
  password?: string | null;
  pmi?: number | null;
  recurrenceEndDateTime?: hasura_timestamptz | null;
  recurrenceEndTimes?: number | null;
  recurrenceMonthlyDay?: number | null;
  recurrenceMonthlyWeek?: number | null;
  recurrenceMonthlyWeekDay?: number | null;
  recurrenceRepeatInterval?: number | null;
  recurrenceType?: number | null;
  recurrenceWeeklyDays?: string | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  startTime?: hasura_timestamptz | null;
  startUrl?: string | null;
  status?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  type?: number | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
  zoomHostSid?: string | null;
  zoom_meeting_instances?: zoom_meeting_instances_arr_rel_insert_input | null;
  zoom_recording_files?: zoom_recording_files_arr_rel_insert_input | null;
  zoom_recordings?: zoom_recordings_arr_rel_insert_input | null;
  zoom_user?: zoom_users_obj_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "zoom_meetings"
 */
export interface zoom_meetings_obj_rel_insert_input {
  data: zoom_meetings_insert_input;
  on_conflict?: zoom_meetings_on_conflict | null;
}

/**
 * on conflict condition type for table "zoom_meetings"
 */
export interface zoom_meetings_on_conflict {
  constraint: zoom_meetings_constraint;
  update_columns: zoom_meetings_update_column[];
  where?: zoom_meetings_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "zoom_recording_files"
 */
export interface zoom_recording_files_arr_rel_insert_input {
  data: zoom_recording_files_insert_input[];
  on_conflict?: zoom_recording_files_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "zoom_recording_files". All fields are combined with a logical 'AND'.
 */
export interface zoom_recording_files_bool_exp {
  _and?: (zoom_recording_files_bool_exp | null)[] | null;
  _not?: zoom_recording_files_bool_exp | null;
  _or?: (zoom_recording_files_bool_exp | null)[] | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  downloadUrl?: String_comparison_exp | null;
  endTime?: timestamptz_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  fileSize?: String_comparison_exp | null;
  fileType?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  playUrl?: String_comparison_exp | null;
  recordingType?: String_comparison_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  startTime?: timestamptz_comparison_exp | null;
  status?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
  zoomMeetingSid?: String_comparison_exp | null;
  zoomRecordingSid?: String_comparison_exp | null;
  zoom_meeting?: zoom_meetings_bool_exp | null;
  zoom_recording?: zoom_recordings_bool_exp | null;
}

/**
 * input type for inserting data into table "zoom_recording_files"
 */
export interface zoom_recording_files_insert_input {
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  downloadUrl?: string | null;
  endTime?: hasura_timestamptz | null;
  expiresInType?: job_intervals_enum | null;
  fileSize?: string | null;
  fileType?: string | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  playUrl?: string | null;
  recordingType?: string | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  startTime?: hasura_timestamptz | null;
  status?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
  zoomMeetingSid?: string | null;
  zoomRecordingSid?: string | null;
  zoom_meeting?: zoom_meetings_obj_rel_insert_input | null;
  zoom_recording?: zoom_recordings_obj_rel_insert_input | null;
}

/**
 * on conflict condition type for table "zoom_recording_files"
 */
export interface zoom_recording_files_on_conflict {
  constraint: zoom_recording_files_constraint;
  update_columns: zoom_recording_files_update_column[];
  where?: zoom_recording_files_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "zoom_recordings"
 */
export interface zoom_recordings_arr_rel_insert_input {
  data: zoom_recordings_insert_input[];
  on_conflict?: zoom_recordings_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "zoom_recordings". All fields are combined with a logical 'AND'.
 */
export interface zoom_recordings_bool_exp {
  _and?: (zoom_recordings_bool_exp | null)[] | null;
  _not?: zoom_recordings_bool_exp | null;
  _or?: (zoom_recordings_bool_exp | null)[] | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  duration?: Int_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  startTime?: timestamptz_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  weight?: float8_comparison_exp | null;
  zoomMeetingInstanceSid?: String_comparison_exp | null;
  zoomMeetingSid?: String_comparison_exp | null;
  zoom_meeting?: zoom_meetings_bool_exp | null;
  zoom_meeting_instance?: zoom_meeting_instances_bool_exp | null;
  zoom_recording_files?: zoom_recording_files_bool_exp | null;
}

/**
 * input type for inserting data into table "zoom_recordings"
 */
export interface zoom_recordings_insert_input {
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  duration?: number | null;
  expiresInType?: job_intervals_enum | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  startTime?: hasura_timestamptz | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  weight?: hasura_float8 | null;
  zoomMeetingInstanceSid?: string | null;
  zoomMeetingSid?: string | null;
  zoom_meeting?: zoom_meetings_obj_rel_insert_input | null;
  zoom_meeting_instance?: zoom_meeting_instances_obj_rel_insert_input | null;
  zoom_recording_files?: zoom_recording_files_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "zoom_recordings"
 */
export interface zoom_recordings_obj_rel_insert_input {
  data: zoom_recordings_insert_input;
  on_conflict?: zoom_recordings_on_conflict | null;
}

/**
 * on conflict condition type for table "zoom_recordings"
 */
export interface zoom_recordings_on_conflict {
  constraint: zoom_recordings_constraint;
  update_columns: zoom_recordings_update_column[];
  where?: zoom_recordings_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "zoom_users"
 */
export interface zoom_users_arr_rel_insert_input {
  data: zoom_users_insert_input[];
  on_conflict?: zoom_users_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "zoom_users". All fields are combined with a logical 'AND'.
 */
export interface zoom_users_bool_exp {
  _and?: (zoom_users_bool_exp | null)[] | null;
  _not?: zoom_users_bool_exp | null;
  _or?: (zoom_users_bool_exp | null)[] | null;
  createdAt?: timestamptz_comparison_exp | null;
  createdAtSource?: timestamptz_comparison_exp | null;
  email?: String_comparison_exp | null;
  expiresInType?: job_intervals_enum_comparison_exp | null;
  id?: Int_comparison_exp | null;
  isForked?: Boolean_comparison_exp | null;
  isOutdated?: Boolean_comparison_exp | null;
  job_interval?: job_intervals_bool_exp | null;
  redundantFields?: jsonb_comparison_exp | null;
  shallow?: Boolean_comparison_exp | null;
  shouldStartSyncAt?: timestamptz_comparison_exp | null;
  sid?: String_comparison_exp | null;
  sourceUrl?: String_comparison_exp | null;
  syncError?: jsonb_comparison_exp | null;
  syncStartedAt?: timestamptz_comparison_exp | null;
  syncTriggeredAt?: timestamptz_comparison_exp | null;
  syncedAt?: timestamptz_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  updatedAtSource?: timestamptz_comparison_exp | null;
  user_email?: user_emails_bool_exp | null;
  weight?: float8_comparison_exp | null;
  zoom_meeting_instance_participants?: zoom_meeting_instance_participants_bool_exp | null;
  zoom_meetings?: zoom_meetings_bool_exp | null;
}

/**
 * input type for inserting data into table "zoom_users"
 */
export interface zoom_users_insert_input {
  createdAt?: hasura_timestamptz | null;
  createdAtSource?: hasura_timestamptz | null;
  email?: string | null;
  expiresInType?: job_intervals_enum | null;
  id?: number | null;
  isForked?: boolean | null;
  isOutdated?: boolean | null;
  job_interval?: job_intervals_obj_rel_insert_input | null;
  redundantFields?: hasura_jsonb | null;
  shallow?: boolean | null;
  shouldStartSyncAt?: hasura_timestamptz | null;
  sid?: string | null;
  sourceUrl?: string | null;
  syncError?: hasura_jsonb | null;
  syncStartedAt?: hasura_timestamptz | null;
  syncTriggeredAt?: hasura_timestamptz | null;
  syncedAt?: hasura_timestamptz | null;
  updatedAt?: hasura_timestamptz | null;
  updatedAtSource?: hasura_timestamptz | null;
  user_email?: user_emails_obj_rel_insert_input | null;
  weight?: hasura_float8 | null;
  zoom_meeting_instance_participants?: zoom_meeting_instance_participants_arr_rel_insert_input | null;
  zoom_meetings?: zoom_meetings_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "zoom_users"
 */
export interface zoom_users_obj_rel_insert_input {
  data: zoom_users_insert_input;
  on_conflict?: zoom_users_on_conflict | null;
}

/**
 * on conflict condition type for table "zoom_users"
 */
export interface zoom_users_on_conflict {
  constraint: zoom_users_constraint;
  update_columns: zoom_users_update_column[];
  where?: zoom_users_bool_exp | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
