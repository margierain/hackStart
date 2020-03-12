/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { client_blocker_status_enum } from './globalTypes';

// ====================================================
// GraphQL mutation operation: unblockClientBlockers
// ====================================================

export interface unblockClientBlockers_update_client_blockers_returning {
  __typename: 'client_blockers';
  id: number;
  createdAt: hasura_timestamptz;
  summary: string;
  updatedAt: hasura_timestamptz;
  status: client_blocker_status_enum;
}

export interface unblockClientBlockers_update_client_blockers {
  __typename: 'client_blockers_mutation_response';
  /**
   * data of the affected rows by the mutation
   */
  returning: unblockClientBlockers_update_client_blockers_returning[];
}

export interface unblockClientBlockers {
  /**
   * update data of the table: "client_blockers"
   */
  update_client_blockers: unblockClientBlockers_update_client_blockers | null;
}

export interface unblockClientBlockersVariables {
  id: number;
  unblockDetails: string;
}
