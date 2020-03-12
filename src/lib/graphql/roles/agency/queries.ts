import gql from 'graphql-tag';

export const FETCH_AGENCY_PROFILE = gql`
  query fetchAgencyProfile($agencyId: String!) {
    agencies(where: { id: { _eq: $agencyId } }) {
      id
      name
    }
  }
`;
