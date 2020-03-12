/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { candidate_stage_enum } from './globalTypes';

// ====================================================
// GraphQL mutation operation: updateCandidateStage
// ====================================================

export interface updateCandidateStage_update_candidates {
  __typename: 'candidates_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface updateCandidateStage {
  /**
   * update data of the table: "candidates"
   */
  update_candidates: updateCandidateStage_update_candidates | null;
}

export interface updateCandidateStageVariables {
  candidateId: hasura_uuid;
  stage: candidate_stage_enum;
  updatedAt: hasura_timestamptz;
}
