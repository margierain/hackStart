/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: checkExistingCandidates
// ====================================================

export interface checkExistingCandidates_candidates {
  __typename: 'candidates';
  id: hasura_uuid;
}

export interface checkExistingCandidates {
  /**
   * fetch data from the table: "candidates"
   */
  candidates: checkExistingCandidates_candidates[];
}

export interface checkExistingCandidatesVariables {
  email: string;
  githubId: string;
}
