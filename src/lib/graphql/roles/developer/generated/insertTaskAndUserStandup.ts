/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  task_daily_standups_insert_input,
  task_daily_standups_on_conflict,
  user_daily_standups_insert_input,
  user_daily_standups_on_conflict,
} from './globalTypes';

// ====================================================
// GraphQL mutation operation: insertTaskAndUserStandup
// ====================================================

export interface insertTaskAndUserStandup_insert_task_daily_standups {
  __typename: 'task_daily_standups_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface insertTaskAndUserStandup_insert_user_daily_standups_returning {
  __typename: 'user_daily_standups';
  summary: string;
}

export interface insertTaskAndUserStandup_insert_user_daily_standups {
  __typename: 'user_daily_standups_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: insertTaskAndUserStandup_insert_user_daily_standups_returning[];
}

export interface insertTaskAndUserStandup {
  /**
   * insert data into the table: "task_daily_standups"
   */
  insert_task_daily_standups: insertTaskAndUserStandup_insert_task_daily_standups | null;
  /**
   * insert data into the table: "user_daily_standups"
   */
  insert_user_daily_standups: insertTaskAndUserStandup_insert_user_daily_standups | null;
}

export interface insertTaskAndUserStandupVariables {
  taskStandUps: task_daily_standups_insert_input[];
  onTaskStandUpConflict: task_daily_standups_on_conflict;
  userDailyStandUp: user_daily_standups_insert_input;
  onUserDailyStandupConflict: user_daily_standups_on_conflict;
}
