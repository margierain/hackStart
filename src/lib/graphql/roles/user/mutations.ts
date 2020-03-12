import gql from 'graphql-tag';

export const CREATE_CLIENT = gql`
  mutation insertClient($client: clients_insert_input!, $userId: Int!) {
    insert_clients(objects: [$client]) {
      affected_rows
      returning {
        id
        client_users(where: { userId: { _eq: $userId } }) {
          id
        }
      }
    }
  }
`;

export const CREATE_AGENCY = gql`
  mutation insertAgency($agency: agencies_insert_input!, $userId: Int!) {
    insert_agencies(objects: [$agency]) {
      affected_rows
      returning {
        id
        agency_users(where: { userId: { _eq: $userId } }) {
          id
        }
      }
    }
  }
`;

export const CREATE_DEVELOPER = gql`
  mutation updateUser(
    $login: String!
    $id: Int!
    $candidate: candidates_insert_input!
    $developer: developers_insert_input!
  ) {
    update_users(_set: { login: $login }, where: { id: { _eq: $id } }) {
      affected_rows
      returning {
        id
      }
    }
    insert_candidates(objects: [$candidate]) {
      affected_rows
      returning {
        id
        userId
      }
    }

    insert_developers(objects: [$developer]) {
      affected_rows
      returning {
        id
        login
      }
    }
  }
`;
