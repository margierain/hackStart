import gql from 'graphql-tag';

export const FETCH_USER_PROFILE = gql`
  query fetchUserProfile($userId: Int!) {
    users(where: { id: { _eq: $userId } }) {
      id
      firstName
    }
  }
`;

export const FETCH_CLIENT_BLOCKERS_BY_CLIENTID = gql`
  query fetchClientBlockers($clientId: String!) {
    client_blockers(
      where: { clientId: { _eq: $clientId }, status: { _neq: resolved } }
      order_by: { status: asc }
    ) {
      id
      details
      summary
      createdAt
      updatedAt
      status
    }
  }
`;

export const FETCH_CLIENT_OVERVIEW = gql`
  query fetchClientOverview(
    $clientId: String!
    $warmUpStart: timestamptz!
    $warmUpEnd: timestamptz!
  ) {
    clients(where: { id: { _eq: $clientId } }) {
      id
      name
      onBoardedAt
      meetings(order_by: { scheduledAt: desc }) {
        scheduledAt
      }
      tickets {
        code
        id
        completedAt
        discount
        costInCredits
      }

      client_invoices(
        where: { status: { _neq: draft }, dueAt: { _lte: "now()" } }
      ) {
        costInUSD
        status
        dueAt
        costInCredits
        id
        clientId
        client_invoice_balance {
          id
          currrent_paid_balance_in_usd
          previous_balance_in_usd
          previous_balance_in_credits
          previous_consumed_balance_in_credits
        }
      }

      client_transactions(
        where: { status: { _neq: cancelled }, transactedAt: { _lte: "now()" } }
      ) {
        status
        costInUSD
        costInCredits
        transactedAt
        dueAt
        id
        clientId
      }
      pending_transactions: client_transactions(
        where: { status: { _nin: [in_progress, successful, cancelled] } }
      ) {
        id
        costInUSD
        costInCredits
        transactedAt
        clientId
      }

      tasks(where: { status: { _nin: [cancelled, finished, backlog] } }) {
        ticketCode
        id
      }

      draftInvoices: client_invoices(where: { status: { _eq: draft } }) {
        id
        costInCredits
        costInUSD
      }

      distinctDevs: tasks(
        where: {
          _and: [
            { startedAt: { _gt: $warmUpStart } }
            { startedAt: { _lt: $warmUpEnd } }
          ]
        }
        distinct_on: [developerId]
        order_by: [{ developerId: asc }]
      ) {
        developerId
      }
    }

    client_daily_standups(where: { clientId: { _eq: $clientId } }) {
      ticket_daily_standups {
        updatedETA
        message
        ticket {
          code
          ticketLink
          completedAt
        }
      }
    }
  }
`;

export const FETCH_CLIENT_INVOICES = gql`
  query fetchClientInvoices($clientId: String!) {
    client_invoices(
      where: { clientId: { _eq: $clientId } }
      order_by: { dueAt: desc }
    ) {
      id
      dueAt
      costInUSD
      costInCredits
      status
    }
  }
`;

export const FETCH_CLIENT_INVOICES_AND_TICKETS = gql`
  query fetchClientInvoicesAndTickets($clientId: String!) {
    client_invoices(
      where: { clientId: { _eq: $clientId } }
      order_by: { dueAt: desc }
    ) {
      id
      dueAt
      costInUSD
      costInCredits
      maxBudgetInCredits
      status
      tickets {
        id
        code
        completedAt
        costInCredits
        createdAt
        description
        discount
      }
    }
  }
`;

export const FETCH_CLIENT_TRANSACTIONS = gql`
  query fetchClientTransactions($clientId: String!) {
    client_transactions(where: { clientId: { _eq: $clientId } }) {
      id
      invoiceCode
      costInCredits
      costInUSD
      dueAt
      status
      transactedAt
      channelType
      channelTransactionId
    }
  }
`;

export const FETCH_CLIENT_INVOICES_AND_TRANSACTIONS = gql`
  query fetchClientInvoicesAndTransactions($clientId: String!) {
    client_invoices(
      where: { clientId: { _eq: $clientId } }
      order_by: { dueAt: desc }
    ) {
      id
      dueAt
      costInUSD
      costInCredits
      status
    }
    client_transactions(
      where: { clientId: { _eq: $clientId } }
      order_by: { transactedAt: asc }
    ) {
      id
      invoiceCode
      costInCredits
      costInUSD
      dueAt
      status
      transactedAt
      channelType
      channelTransactionId
    }
  }
`;

export const FETCH_INVOICE_AND_USAGE = gql`
  query fetchInvoiceAndUsage($clientId: String!) {
    clients(where: { id: { _eq: $clientId } }) {
      name
      client_transactions(order_by: { transactedAt: asc }) {
        id
        invoiceCode
        status
        channelType
        channelTransactionId
        costInUSD
        costInCredits
        transactedAt
      }
      tickets(
        where: { isInternal: { _eq: false } }
        order_by: { completedAt: desc }
      ) {
        id
        code
        costInCredits
        discount
        completedAt
      }
    }
  }
`;

export const FETCH_CLIENT_TICKETS_BY_TICKETCODE = gql`
  query fetchTicketDetailsByTicketCode($ticketCode: String!) {
    tickets(where: { code: { _eq: $ticketCode } }) {
      code
      completedAt
      clientId
      cancelledAt
      createdAt
      costInCredits
      description
      id
      invoiceId
      startedAt
      managerId
      syncedAt
      title
      updatedAt
      ticketLink
      ticket_daily_standups {
        message
        updatedAt
        updatedETA
      }
      tasks {
        id
        title
        description
        createdAt
        branchName
        prLink
        status
        type
        ticketCode
        task_technologies {
          technology {
            name
          }
        }
        task_reviews {
          id
          approvesTaskId
          developer {
            firstName
            lastName
            githubId
          }
          developerByDeveloperid {
            firstName
            lastName
            githubId
          }
        }
        developerByDeveloperid {
          firstName
          lastName
          githubId
        }
        developerByManagerid {
          id
          lastName
          firstName
          githubId
        }
        developerByReviewerid {
          id
          lastName
          firstName
          githubId
          __typename
        }
        task_daily_standups {
          summary
          updatedAt
          updatedETA
        }
      }
    }
  }
`;

export const FETCH_CLIENT_TICKET_FILTER_GQL = gql`
  query fetchClientTickets(
    $clientId: String!
    $keywordFilter: tickets_bool_exp
    $statusFilter: tickets_bool_exp
    $repositoryFilter: tickets_bool_exp
  ) {
    tickets(
      where: {
        _and: [
          { clientId: { _eq: $clientId } }
          { isInternal: { _eq: false } }
          $keywordFilter
          $statusFilter
          $repositoryFilter
        ]
      }
      order_by: [{ createdAt: desc }]
    ) {
      id
      ticketLink
      code
      completedAt
      createdAt
      discount
      costInCredits
      title
      tasks {
        id
        status
        client_repository {
          id
          clientRepoUrl
        }
      }
    }
  }
`;

export const FETCH_CLIENT_DUE_INVOICES = gql`
  query fetchClientDueInvoices($clientId: String!) {
    client_invoices(
      where: { dueAt: { _lte: "now()" }, clientId: { _eq: $clientId } }
    ) {
      clientId
      dueAt
      costInUSD
      costInCredits
      id
    }
  }
`;

export const FETCH_CLIENT_INVOICES_OVERVIEW = gql`
  query fetchClientInvoicesOverview($clientId: String!) {
    client_invoices(where: { clientId: { _eq: $clientId } }) {
      costInUSD
      status
      dueAt
      costInCredits
      clientId
      id
      client_invoice_balance {
        id
        currrent_paid_balance_in_usd
        previous_balance_in_usd
        previous_balance_in_credits
        previous_consumed_balance_in_credits
      }
    }

    pending_transactions: client_transactions(
      where: { status: { _nin: [in_progress, successful, cancelled] } }
    ) {
      id
      costInUSD
      costInCredits
      transactedAt
      clientId
    }
  }
`;

export const FETCH_CLIENT_DUE_INVOICES_AGGREGATE = gql`
  query fetchClientDueInvoicesAggregate($clientId: String!) {
    client_transactions_aggregate(
      where: { clientId: { _eq: $clientId }, status: { _neq: cancelled } }
    ) {
      aggregate {
        sum {
          costInUSD
          costInCredits
        }
      }
    }
    client_invoices_aggregate(
      where: { dueAt: { _lte: "now()" }, clientId: { _eq: $clientId } }
    ) {
      aggregate {
        sum {
          costInUSD
          costInCredits
        }
      }
    }
  }
`;

export const FETCH_CLIENT_ON_BOARDING_AT_AND_MEETINGS = gql`
  query fetchClientOnBoardingAtAndMeetings($userId: Int!) {
    users(where: { id: { _eq: $userId } }) {
      firstName
      lastName
      defaultEmail
      client_users {
        client {
          id
          name
          onBoardedAt
          meetings {
            scheduledAt
          }
        }
      }
    }
  }
`;

export const FETCH_CLIENT_INVOICES_WITH_BALANCES_AND_TRANSACTIONS = gql`
  query fetchClientInvoicesWithBalanceAndTransactions($clientId: String!) {
    client_invoices_with_balance(
      where: { clientId: { _eq: $clientId } }
      order_by: { dueAt: desc }
    ) {
      id
      dueAt
      costInUSD
      costInCredits
      status
      currrent_paid_balance_in_usd
      previous_balance_in_usd
      previous_consumed_balance_in_credits
      consumed_balance_in_credits
      createdAt
    }
    client_transactions(
      where: { clientId: { _eq: $clientId } }
      order_by: { transactedAt: desc }
    ) {
      id
      invoiceCode
      costInCredits
      costInUSD
      dueAt
      status
      transactedAt
      channelType
      channelTransactionId
    }
  }
`;

export const FETCH_CLIENT_INVOICES_AND_BALANCES_AND_TICKETS = gql`
  query fetchClientInvoicesAndBalances($clientId: String!, $invoicesId: Int!) {
    client_invoices_with_balance(
      where: { clientId: { _eq: $clientId }, id: { _eq: $invoicesId } }
      order_by: { dueAt: desc }
    ) {
      id
      clientId
      dueAt
      costInUSD
      costInCredits
      status
      currrent_paid_balance_in_usd
      previous_balance_in_usd
      previous_balance_in_credits
      previous_consumed_balance_in_credits
      createdAt
      tickets {
        id
        title
        code
        completedAt
        ticketLink
        costInCredits
        createdAt
        description
        discount
      }
    }
  }
`;

export const FETCH_TICKET_BLOCKERS_BY_TICKETID = gql`
  query fetchTicketBlockers($ticketId: Int!) {
    client_blockers(
      where: {
        _and: {
          status: { _neq: resolved }
          ticket_client_blockers: { ticket: { id: { _eq: $ticketId } } }
        }
      }
      order_by: { status: asc }
    ) {
      id
      details
      summary
      createdAt
      updatedAt
      status
    }
  }
`;
