/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { candidate_stage_enum, skilltrack_types_enum } from './globalTypes';

// ====================================================
// GraphQL query operation: fetchCandidateById
// ====================================================

export interface fetchCandidateById_candidates_user_user_emails {
  __typename: 'user_emails';
  email: string;
}

export interface fetchCandidateById_candidates_user {
  __typename: 'users';
  id: number;
  /**
   * An array relationship
   */
  user_emails: fetchCandidateById_candidates_user_user_emails[];
}

export interface fetchCandidateById_candidates {
  __typename: 'candidates';
  id: hasura_uuid;
  /**
   * An object relationship
   */
  user: fetchCandidateById_candidates_user;
  githubId: string;
  userId: number;
  minAnnualSalary: number;
  city: string;
  country: string;
  noticePeriod: number;
  culture_screen_feedback: string | null;
  tech_screen_feedback: string | null;
  stage: candidate_stage_enum;
  timezone: number;
  yearsOfExperience: number;
  source: string;
  skillTrack: skilltrack_types_enum;
  agencyId: string;
  earliestStartDate: hasura_timestamptz | null;
}

export interface fetchCandidateById {
  /**
   * fetch data from the table: "candidates"
   */
  candidates: fetchCandidateById_candidates[];
}

export interface fetchCandidateByIdVariables {
  id: hasura_uuid;
}
