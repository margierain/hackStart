/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  candidates_insert_input,
  candidate_stage_enum,
  skilltrack_types_enum,
} from './globalTypes';

// ====================================================
// GraphQL mutation operation: insertNewCandidate
// ====================================================

export interface insertNewCandidate_insert_candidates_returning_user_user_emails {
  __typename: 'user_emails';
  email: string;
}

export interface insertNewCandidate_insert_candidates_returning_user {
  __typename: 'users';
  id: number;
  /**
   * An array relationship
   */
  user_emails: insertNewCandidate_insert_candidates_returning_user_user_emails[];
}

export interface insertNewCandidate_insert_candidates_returning {
  __typename: 'candidates';
  id: hasura_uuid;
  /**
   * An object relationship
   */
  user: insertNewCandidate_insert_candidates_returning_user;
  githubId: string;
  userId: number;
  minAnnualSalary: number;
  city: string;
  country: string;
  noticePeriod: number;
  culture_screen_feedback: string | null;
  tech_screen_feedback: string | null;
  stage: candidate_stage_enum;
  earliestStartDate: hasura_timestamptz | null;
  timezone: number;
  yearsOfExperience: number;
  source: string;
  skillTrack: skilltrack_types_enum;
  agencyId: string;
}

export interface insertNewCandidate_insert_candidates {
  __typename: 'candidates_mutation_response';
  /**
   * data of the affected rows by the mutation
   */
  returning: insertNewCandidate_insert_candidates_returning[];
}

export interface insertNewCandidate {
  /**
   * insert data into the table: "candidates"
   */
  insert_candidates: insertNewCandidate_insert_candidates | null;
}

export interface insertNewCandidateVariables {
  objects: candidates_insert_input[];
}
