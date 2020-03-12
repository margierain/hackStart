/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchAgencyProfile
// ====================================================

export interface fetchAgencyProfile_agencies {
  __typename: 'agencies';
  id: string;
  name: string;
}

export interface fetchAgencyProfile {
  /**
   * fetch data from the table: "agencies"
   */
  agencies: fetchAgencyProfile_agencies[];
}

export interface fetchAgencyProfileVariables {
  agencyId: string;
}
