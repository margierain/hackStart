/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { agencies_insert_input } from './globalTypes';

// ====================================================
// GraphQL mutation operation: insertAgency
// ====================================================

export interface insertAgency_insert_agencies_returning_agency_users {
  __typename: 'agency_users';
  id: string;
}

export interface insertAgency_insert_agencies_returning {
  __typename: 'agencies';
  id: string;
  /**
   * An array relationship
   */
  agency_users: insertAgency_insert_agencies_returning_agency_users[];
}

export interface insertAgency_insert_agencies {
  __typename: 'agencies_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: insertAgency_insert_agencies_returning[];
}

export interface insertAgency {
  /**
   * insert data into the table: "agencies"
   */
  insert_agencies: insertAgency_insert_agencies | null;
}

export interface insertAgencyVariables {
  agency: agencies_insert_input;
  userId: number;
}
