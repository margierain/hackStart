/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchAllDevelopersAndContractsAndWeeklyEarnings
// ====================================================

export interface fetchAllDevelopersAndContractsAndWeeklyEarnings_developers_developer_contracts {
  __typename: 'user_contracts';
  id: number;
  startDate: hasura_timestamptz;
  endDate: hasura_timestamptz | null;
  userLogin: string;
  amountPerWeek: number | null;
  hoursPerWeek: number | null;
}

export interface fetchAllDevelopersAndContractsAndWeeklyEarnings_developers_developer_weekly_earnings {
  __typename: 'developer_weekly_earning';
  id: number;
  amountEarnedWithTasks: hasura_float8 | null;
  minimumAmountEarned: hasura_float8 | null;
  userLogin: string;
  startDate: hasura_timestamptz;
  endDate: hasura_timestamptz;
}

export interface fetchAllDevelopersAndContractsAndWeeklyEarnings_developers {
  __typename: 'developers';
  id: string;
  login: string;
  /**
   * An array relationship
   */
  developer_contracts: fetchAllDevelopersAndContractsAndWeeklyEarnings_developers_developer_contracts[];
  /**
   * An array relationship
   */
  developer_weekly_earnings: fetchAllDevelopersAndContractsAndWeeklyEarnings_developers_developer_weekly_earnings[];
}

export interface fetchAllDevelopersAndContractsAndWeeklyEarnings {
  /**
   * fetch data from the table: "developers"
   */
  developers: fetchAllDevelopersAndContractsAndWeeklyEarnings_developers[];
}
