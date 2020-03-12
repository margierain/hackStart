/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { TaskStateType } from './globalTypes';

// ====================================================
// GraphQL query operation: fetchTaskStates
// ====================================================

export interface fetchTaskStates_taskState_possibleStates {
  __typename: 'PossibleTaskState';
  error: string | null;
  state: TaskStateType;
}

export interface fetchTaskStates_taskState {
  __typename: 'TaskState';
  possibleStates: fetchTaskStates_taskState_possibleStates[];
  taskId: string;
  state: TaskStateType;
}

export interface fetchTaskStates {
  taskState: fetchTaskStates_taskState;
}

export interface fetchTaskStatesVariables {
  taskId: number;
}
