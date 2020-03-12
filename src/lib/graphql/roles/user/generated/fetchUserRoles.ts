/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchUserRoles
// ====================================================

export interface fetchUserRoles_users_client_user_client {
  __typename: 'clients';
  id: string;
  name: string;
}

export interface fetchUserRoles_users_client_user {
  __typename: 'client_users';
  id: hasura_uuid;
  /**
   * An object relationship
   */
  client: fetchUserRoles_users_client_user_client;
}

export interface fetchUserRoles_users_admin {
  __typename: 'admin';
  id: string;
}

export interface fetchUserRoles_users_developer {
  __typename: 'developers';
  id: string;
  githubId: string | null;
}

export interface fetchUserRoles_users_candidate {
  __typename: 'candidates';
  id: hasura_uuid;
}

export interface fetchUserRoles_users_agency_user {
  __typename: 'agency_users';
  id: string;
  agencyId: string;
}

export interface fetchUserRoles_users {
  __typename: 'users';
  /**
   * An object relationship
   */
  client_user: fetchUserRoles_users_client_user | null;
  /**
   * An object relationship
   */
  admin: fetchUserRoles_users_admin | null;
  /**
   * An object relationship
   */
  developer: fetchUserRoles_users_developer | null;
  /**
   * An object relationship
   */
  candidate: fetchUserRoles_users_candidate | null;
  /**
   * An object relationship
   */
  agency_user: fetchUserRoles_users_agency_user | null;
}

export interface fetchUserRoles {
  /**
   * fetch data from the table: "users"
   */
  users: fetchUserRoles_users[];
}

export interface fetchUserRolesVariables {
  id: number;
}
