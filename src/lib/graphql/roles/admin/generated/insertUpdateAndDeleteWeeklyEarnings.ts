/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { developer_weekly_earning_insert_input } from './globalTypes';

// ====================================================
// GraphQL mutation operation: insertUpdateAndDeleteWeeklyEarnings
// ====================================================

export interface insertUpdateAndDeleteWeeklyEarnings_insert_returning {
  __typename: 'developer_weekly_earning';
  id: number;
}

export interface insertUpdateAndDeleteWeeklyEarnings_insert {
  __typename: 'developer_weekly_earning_mutation_response';
  /**
   * data of the affected rows by the mutation
   */
  returning: insertUpdateAndDeleteWeeklyEarnings_insert_returning[];
}

export interface insertUpdateAndDeleteWeeklyEarnings {
  /**
   * insert data into the table: "developer_weekly_earning"
   */
  insert: insertUpdateAndDeleteWeeklyEarnings_insert | null;
}

export interface insertUpdateAndDeleteWeeklyEarningsVariables {
  values: developer_weekly_earning_insert_input[];
}
