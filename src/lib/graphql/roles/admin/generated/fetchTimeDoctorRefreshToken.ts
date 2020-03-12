/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchTimeDoctorRefreshToken
// ====================================================

export interface fetchTimeDoctorRefreshToken_auth_settings {
  __typename: 'auth_settings';
  value: string;
  id: number;
}

export interface fetchTimeDoctorRefreshToken {
  /**
   * fetch data from the table: "auth_settings"
   */
  auth_settings: fetchTimeDoctorRefreshToken_auth_settings[];
}
