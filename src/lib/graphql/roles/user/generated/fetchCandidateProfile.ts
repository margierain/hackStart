/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchCandidateProfile
// ====================================================

export interface fetchCandidateProfile_candidates_user {
  __typename: 'users';
  id: number;
  firstName: string | null;
}

export interface fetchCandidateProfile_candidates {
  __typename: 'candidates';
  /**
   * An object relationship
   */
  user: fetchCandidateProfile_candidates_user;
}

export interface fetchCandidateProfile {
  /**
   * fetch data from the table: "candidates"
   */
  candidates: fetchCandidateProfile_candidates[];
}

export interface fetchCandidateProfileVariables {
  candidateId: hasura_uuid;
}
