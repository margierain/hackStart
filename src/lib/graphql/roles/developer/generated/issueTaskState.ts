/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { TaskStateType } from './globalTypes';

// ====================================================
// GraphQL mutation operation: issueTaskState
// ====================================================

export interface issueTaskState_updateTaskState_possibleStates {
  __typename: 'PossibleTaskState';
  error: string | null;
  state: TaskStateType;
}

export interface issueTaskState_updateTaskState {
  __typename: 'TaskState';
  possibleStates: issueTaskState_updateTaskState_possibleStates[];
  taskId: string;
  state: TaskStateType;
}

export interface issueTaskState {
  updateTaskState: issueTaskState_updateTaskState;
}

export interface issueTaskStateVariables {
  taskId: number;
  updatedTaskState: TaskStateType;
}
