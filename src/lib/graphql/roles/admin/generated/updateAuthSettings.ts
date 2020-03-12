/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { auth_settings_set_input } from './globalTypes';

// ====================================================
// GraphQL mutation operation: updateAuthSettings
// ====================================================

export interface updateAuthSettings_update_auth_settings {
  __typename: 'auth_settings_mutation_response';
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface updateAuthSettings {
  /**
   * update data of the table: "auth_settings"
   */
  update_auth_settings: updateAuthSettings_update_auth_settings | null;
}

export interface updateAuthSettingsVariables {
  id: number;
  authValues?: auth_settings_set_input | null;
}
