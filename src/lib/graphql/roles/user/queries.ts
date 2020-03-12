import gql from 'graphql-tag';

export const FETCH_USER_PROFILE = gql`
  query fetchUserProfile($userId: Int!) {
    users(where: { id: { _eq: $userId } }) {
      id
      firstName
      avatarUrl
      lastName
      defaultEmail
      nickname

      user_emails {
        email
      }

      client_users {
        id

        client {
          id
          name
          onBoardedAt
          meetings {
            scheduledAt
          }
        }
      }

      admin {
        id
      }

      candidate {
        id
      }

      agency_user {
        id
        agency {
          id
          name
        }
      }

      developer {
        id
        developer_contracts {
          user {
            id
          }
        }
      }
    }
  }
`;

export const FETCH_USER_ROLES = gql`
  query fetchUserRoles($id: Int!) {
    users(where: { id: { _eq: $id } }) {
      client_user {
        id
        client {
          id
          name
        }
      }

      admin {
        id
      }

      developer {
        id
        githubId
      }

      candidate {
        id
      }

      agency_user {
        id
        agencyId
      }
    }
  }
`;

export const FETCH_CANDIDATE_PROFILE = gql`
  query fetchCandidateProfile($candidateId: uuid!) {
    candidates(where: { id: { _eq: $candidateId } }) {
      user {
        id
        firstName
      }
    }
  }
`;
