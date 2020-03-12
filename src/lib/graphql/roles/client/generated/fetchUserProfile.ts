/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchUserProfile
// ====================================================

export interface fetchUserProfile_users {
  __typename: 'users';
  id: number;
  firstName: string | null;
}

export interface fetchUserProfile {
  /**
   * fetch data from the table: "users"
   */
  users: fetchUserProfile_users[];
}

export interface fetchUserProfileVariables {
  userId: number;
}
