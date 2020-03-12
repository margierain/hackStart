import gql from 'graphql-tag';

export const UPDATE_CLIENT_TRANSACTION_STATUS = gql`
  mutation updateClientTransactionStatus(
    $transactionId: Int!
    $status: client_transaction_status_enum!
  ) {
    update_client_transactions(
      where: { id: { _eq: $transactionId } }
      _set: { status: $status }
    ) {
      affected_rows
    }
  }
`;

export const INITIATE_STRIPE_PAYMENT = gql`
  mutation createStripePayment(
    $clientId: String!
    $costInUSD: Float!
    $costInCredits: Float!
    $paymentBody: String!
    $invoiceIds: [Float!]!
  ) {
    initiateStripePayment(
      invoiceIds: $invoiceIds
      clientId: $clientId
      costInUSD: $costInUSD
      costInCredits: $costInCredits
      paymentBody: $paymentBody
    ) {
      paymentBody
    }
  }
`;

export const UNBLOCK_CLIENT_BLOCKER = gql`
  mutation unblockClientBlockers($id: Int!, $unblockDetails: String!) {
    update_client_blockers(
      where: { id: { _eq: $id } }
      _set: { unblockDetails: $unblockDetails, status: review }
    ) {
      returning {
        id
        createdAt
        summary
        updatedAt
        status
      }
    }
  }
`;

export const INSERT_MEETING_AND_UPDATE_CLIENT_ON_BOARDED_AT = gql`
  mutation insertClientMeeting(
    $meeting: meetings_insert_input!
    $clientId: String!
    $onBoardedAt: timestamptz!
  ) {
    insert_meetings(objects: [$meeting]) {
      returning {
        id
      }
    }
    update_clients(
      where: { id: { _eq: $clientId } }
      _set: { onBoardedAt: $onBoardedAt }
    ) {
      returning {
        id
      }
    }
  }
`;

export const INSERT_NEW_CLIENT_TRANSACTION = gql`
  mutation insertNewClientTransaction(
    $transactions: [client_transactions_insert_input!]!
  ) {
    insert_client_transactions(objects: $transactions) {
      affected_rows
    }
  }
`;
