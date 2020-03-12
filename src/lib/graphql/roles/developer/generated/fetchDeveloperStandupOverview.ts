/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchDeveloperStandupOverview
// ====================================================

export interface fetchDeveloperStandupOverview_users {
  __typename: 'users';
  firstName: string | null;
  avatarUrl: string | null;
  lastName: string | null;
}

export interface fetchDeveloperStandupOverview {
  /**
   * fetch data from the table: "users"
   */
  users: fetchDeveloperStandupOverview_users[];
}

export interface fetchDeveloperStandupOverviewVariables {
  userId: number;
}
