/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { tasks_status_enum, tasks_type_enum } from './globalTypes';

// ====================================================
// GraphQL query operation: fetchTaskDetails
// ====================================================

export interface fetchTaskDetails_tasks_task_attributes {
  __typename: 'task_attributes';
  remainingduplicatelimit: hasura_bigint | null;
}

export interface fetchTaskDetails_tasks_git_branch_git_branch_commits_git_commit {
  __typename: 'git_commits';
  authorUsername: string | null;
  taskId: number | null;
  status: string | null;
}

export interface fetchTaskDetails_tasks_git_branch_git_branch_commits {
  __typename: 'git_branch_commits';
  branchId: number;
  commitId: number;
  /**
   * An object relationship
   */
  git_commit: fetchTaskDetails_tasks_git_branch_git_branch_commits_git_commit;
}

export interface fetchTaskDetails_tasks_git_branch_git_pull_requests_git_pull_request_reviewers {
  __typename: 'git_pull_request_reviewers';
  accountUsername: string;
  pullRequestId: number;
}

export interface fetchTaskDetails_tasks_git_branch_git_pull_requests_git_pull_request_state {
  __typename: 'git_pull_request_state';
  id: string;
  description: string | null;
}

export interface fetchTaskDetails_tasks_git_branch_git_pull_requests {
  __typename: 'git_pull_requests';
  id: number;
  title: string;
  body: string;
  authorUsername: string | null;
  isDraft: boolean;
  isMerged: boolean;
  mergedAt: hasura_timestamptz | null;
  mergeable: boolean;
  /**
   * An array relationship
   */
  git_pull_request_reviewers: fetchTaskDetails_tasks_git_branch_git_pull_requests_git_pull_request_reviewers[];
  /**
   * An object relationship
   */
  git_pull_request_state: fetchTaskDetails_tasks_git_branch_git_pull_requests_git_pull_request_state;
}

export interface fetchTaskDetails_tasks_git_branch {
  __typename: 'git_branches';
  name: string;
  id: number;
  repoId: number | null;
  createdAt: hasura_timestamptz;
  /**
   * An array relationship
   */
  git_branch_commits: fetchTaskDetails_tasks_git_branch_git_branch_commits[];
  /**
   * An array relationship
   */
  git_pull_requests: fetchTaskDetails_tasks_git_branch_git_pull_requests[];
}

export interface fetchTaskDetails_tasks_task_daily_standups {
  __typename: 'task_daily_standups';
  id: number;
  taskId: number;
  summary: string;
  submittedAt: string;
}

export interface fetchTaskDetails_tasks_task_technologies_technology {
  __typename: 'technologies';
  name: string;
}

export interface fetchTaskDetails_tasks_task_technologies {
  __typename: 'task_technologies';
  /**
   * An object relationship
   */
  technology: fetchTaskDetails_tasks_task_technologies_technology;
}

export interface fetchTaskDetails_tasks_task_reviews_developer {
  __typename: 'developers';
  firstName: string | null;
  lastName: string | null;
}

export interface fetchTaskDetails_tasks_task_reviews {
  __typename: 'task_reviews';
  id: number;
  approvesTaskId: number;
  /**
   * An object relationship
   */
  developer: fetchTaskDetails_tasks_task_reviews_developer | null;
}

export interface fetchTaskDetails_tasks_developerByDeveloperid_user {
  __typename: 'users';
  id: number;
}

export interface fetchTaskDetails_tasks_developerByDeveloperid {
  __typename: 'developers';
  id: string;
  login: string;
  /**
   * An object relationship
   */
  user: fetchTaskDetails_tasks_developerByDeveloperid_user;
  firstName: string | null;
  lastName: string | null;
}

export interface fetchTaskDetails_tasks_developerByManagerid_user {
  __typename: 'users';
  id: number;
}

export interface fetchTaskDetails_tasks_developerByManagerid {
  __typename: 'developers';
  id: string;
  login: string;
  /**
   * An object relationship
   */
  user: fetchTaskDetails_tasks_developerByManagerid_user;
  firstName: string | null;
  lastName: string | null;
}

export interface fetchTaskDetails_tasks_developerByReviewerid_user {
  __typename: 'users';
  id: number;
}

export interface fetchTaskDetails_tasks_developerByReviewerid {
  __typename: 'developers';
  id: string;
  login: string;
  /**
   * An object relationship
   */
  user: fetchTaskDetails_tasks_developerByReviewerid_user;
  firstName: string | null;
  lastName: string | null;
}

export interface fetchTaskDetails_tasks {
  __typename: 'tasks';
  id: number;
  description: string;
  createdAt: hasura_timestamptz;
  branchName: string | null;
  costInUSD: number;
  prLink: string | null;
  status: tasks_status_enum;
  title: string;
  updatedAt: hasura_timestamptz;
  completedAt: hasura_timestamptz | null;
  ticketCode: string;
  type: tasks_type_enum;
  clientId: string;
  clientRepositoryId: hasura_uuid;
  managerId: string | null;
  reviewerId: string | null;
  developerId: string | null;
  isBillable: boolean;
  duplicateOfTaskId: number | null;
  /**
   * An object relationship
   */
  task_attributes: fetchTaskDetails_tasks_task_attributes | null;
  /**
   * An object relationship
   */
  git_branch: fetchTaskDetails_tasks_git_branch | null;
  /**
   * An array relationship
   */
  task_daily_standups: fetchTaskDetails_tasks_task_daily_standups[];
  /**
   * An array relationship
   */
  task_technologies: fetchTaskDetails_tasks_task_technologies[];
  /**
   * An array relationship
   */
  task_reviews: fetchTaskDetails_tasks_task_reviews[];
  /**
   * An object relationship
   */
  developerByDeveloperid: fetchTaskDetails_tasks_developerByDeveloperid | null;
  /**
   * An object relationship
   */
  developerByManagerid: fetchTaskDetails_tasks_developerByManagerid | null;
  /**
   * An object relationship
   */
  developerByReviewerid: fetchTaskDetails_tasks_developerByReviewerid | null;
}

export interface fetchTaskDetails {
  /**
   * fetch data from the table: "tasks"
   */
  tasks: fetchTaskDetails_tasks[];
}

export interface fetchTaskDetailsVariables {
  taskId: number;
}
