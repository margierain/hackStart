/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { developer_weekly_earning_insert_input } from './globalTypes';

// ====================================================
// GraphQL mutation operation: insertNewWeeklyEarnings
// ====================================================

export interface insertNewWeeklyEarnings_insert_developer_weekly_earning_returning {
  __typename: 'developer_weekly_earning';
  id: number;
}

export interface insertNewWeeklyEarnings_insert_developer_weekly_earning {
  __typename: 'developer_weekly_earning_mutation_response';
  /**
   * data of the affected rows by the mutation
   */
  returning: insertNewWeeklyEarnings_insert_developer_weekly_earning_returning[];
}

export interface insertNewWeeklyEarnings {
  /**
   * insert data into the table: "developer_weekly_earning"
   */
  insert_developer_weekly_earning: insertNewWeeklyEarnings_insert_developer_weekly_earning | null;
}

export interface insertNewWeeklyEarningsVariables {
  values: developer_weekly_earning_insert_input[];
}
