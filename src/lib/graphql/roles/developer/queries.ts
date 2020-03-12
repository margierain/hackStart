import gql from 'graphql-tag';

export const FETCH_TASK_STATES = gql`
  query fetchTaskStates($taskId: Float!) {
    taskState(taskId: $taskId) {
      possibleStates {
        error
        state
      }
      taskId
      state
    }
  }
`;

export const FETCH_TASK_DETAILS = gql`
  query fetchTaskDetails($taskId: Int!) {
    tasks(where: { id: { _eq: $taskId } }) {
      id
      description
      createdAt
      branchName
      costInUSD
      prLink
      status
      title
      updatedAt
      completedAt
      ticketCode
      branchName
      type
      clientId
      clientRepositoryId
      managerId
      reviewerId
      developerId
      isBillable
      duplicateOfTaskId
      task_attributes {
        remainingduplicatelimit
      }
      git_branch {
        name
        id
        repoId
        createdAt
        git_branch_commits {
          branchId
          commitId
          git_commit {
            authorUsername
            taskId
            status
          }
        }
        git_pull_requests {
          id
          title
          body
          authorUsername
          isDraft
          isMerged
          mergedAt
          mergeable
          git_pull_request_reviewers {
            accountUsername
            pullRequestId
          }
          git_pull_request_state {
            id
            description
          }
        }
      }
      task_daily_standups {
        id
        taskId
        summary
        submittedAt
      }
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
        }
      }
      developerByDeveloperid {
        id
        login
        user {
          id
        }
        firstName
        lastName
      }

      developerByManagerid {
        id
        login
        user {
          id
        }
        firstName
        lastName
      }

      developerByReviewerid {
        id
        login
        user {
          id
        }
        firstName
        lastName
      }
    }
  }
`;

export const FETCH_DEVELOPERS_PAYMENTS = gql`
  query fetchDevelopersPayments($developerId: String!) {
    user_payments(
      where: { user: { developer: { id: { _eq: $developerId } } } }
    ) {
      id
      createdAt
      finishedAt
      amountInUSD
      channelTransactionId
      paymentType
      status
      updatedAt
    }
  }
`;

export const FETCH_DEVELOPERS_INVOICES = gql`
  query fetchDevelopersInvoices($developerId: String!) {
    user_invoice_balances(
      where: { user: { developer: { id: { _eq: $developerId } } } }
    ) {
      id
      invoiceCode
      costInUSD
      paidByAgencyInvoiceId
      status
      current_paid_balance_in_usd
      previous_invoiced_balance_in_usd
      startAt
      endAt
      totalBonus: developer_bonus_earnings_aggregate {
        aggregate {
          sum {
            amountInUSD
          }
        }
      }
    }
  }
`;

export const FETCH_USER_INVOICES = gql`
  query fetchUserInvoice($id: Int!) {
    tasks(
      where: {
        _or: [
          { user_time_logs: { userInvoiceId: { _eq: $id } } }
          { developerInvoiceId: { _eq: $id } }
          { managerInvoiceId: { _eq: $id } }
          {
            task_reviews: {
              _or: [
                { reviewerInvoiceId: { _eq: $id } }
                { managerInvoiceId: { _eq: $id } }
              ]
            }
          }
        ]
      }
    ) {
      user_time_logs_aggregate(where: { userInvoiceId: { _eq: $id } }) {
        aggregate {
          sum {
            timeSpentInHours
          }
        }
      }
      id
      costInUSD
      ticketCode
      title
      managerId
      reviewerId
      developerId
      managerInvoiceId
      developerInvoiceId
      task_reviews {
        managerId
        developerId
        managerInvoiceId
        reviewerInvoiceId
        costInUSD
      }
    }

    task_work(
      where: {
        _or: [
          { user_time_logs: { userInvoiceId: { _eq: $id } } }
          { workerInvoiceId: { _eq: $id } }
          { managerInvoiceId: { _eq: $id } }
        ]
      }
    ) {
      user_time_logs_aggregate(where: { userInvoiceId: { _eq: $id } }) {
        aggregate {
          sum {
            timeSpentInHours
          }
        }
      }
      id
      managerId
      developerId
      managerInvoiceId
      workerInvoiceId
      costInUSD
    }

    user_invoice_balances(where: { id: { _eq: $id } }) {
      id
      invoiceCode
      costInUSD
      paidByAgencyInvoiceId
      status
      current_paid_balance_in_usd
      previous_invoiced_balance_in_usd
      startAt
      endAt

      totalBonus: developer_bonus_earnings_aggregate {
        aggregate {
          sum {
            amountInUSD
          }
        }
      }
      totalUncategorizedTimeLogged: user_time_logs_aggregate(
        where: {
          _and: [{ taskId: { _eq: null } }, { taskWorkId: { _eq: null } }]
        }
      ) {
        aggregate {
          sum {
            timeSpentInHours
          }
        }
      }
      totalUncategorizedTimeEarning: user_time_earnings_aggregate(
        where: {
          _and: [{ taskId: { _eq: null } }, { taskWorkId: { _eq: null } }]
        }
      ) {
        aggregate {
          sum {
            earningsinusd
          }
        }
      }
      totalTimeEarning: user_time_earnings_aggregate {
        aggregate {
          sum {
            earningsinusd
          }
        }
      }
    }
  }
`;

export const FETCH_DEVELOPERS_PAYMENTS_AND_INVOICES = gql`
  query fetchDevelopersPaymentsAndInvoices($developerId: String!) {
    user_payments(
      where: { user: { developer: { id: { _eq: $developerId } } } }
      order_by: { createdAt: desc }
    ) {
      id
      createdAt
      finishedAt
      amountInUSD
      channelTransactionId
      paymentType
      status
      updatedAt
    }
    user_invoices(
      where: { user: { developer: { id: { _eq: $developerId } } } }
      order_by: { dueAt: desc }
    ) {
      id
      invoiceCode
      costInUSD
      dueAt
      createdAt
      adjustedCostInUSD
      paidByAgencyInvoiceId
      status
      user_invoice_balance {
        current_paid_balance_in_usd
        hours_logged_in_invoice
        previous_invoiced_balance_in_usd
      }
    }
  }
`;

export const FETCH_AVAILABLE_TASKS = gql`
  query fetchAvailableTasks {
    tasks(
      where: { status: { _eq: available } }
      order_by: { updatedAt: desc }
    ) {
      id
      title
      description
      updatedAt
      costInUSD
      type
      status
      ticketCode
      ticket {
        ticketLink
        code
      }
      developerByManagerid {
        id
        firstName
      }
      task_technologies {
        technology {
          id
          name
        }
      }
      client {
        id
        name
      }
      task_attributes {
        id
        remainingduplicatelimit
      }
    }
  }
`;

export const FETCH_CLIENTS_TECHNOLOGIES_TICKETS_REPOSITORIES_STATUS_TASKS = gql`
  query fetchClientTechnologiesTicketsReposStatusTasks($taskId: Int) {
    clients {
      name
      id
    }
    technologies {
      id
      name
    }
    tickets(where: { isFixed: { _eq: false } }) {
      code
      clientId
    }
    client_repositories {
      id
      clientRepoUrl
      clientId
    }
    tasks_type {
      type
    }
    tasks_status {
      type
    }
    developers {
      id
    }
    tasks(where: { id: { _eq: $taskId } }) {
      type
      description
      title
      ticketCode
      prLink
      costInUSD
      clientId
      managerId
      reviewerId
      developerId
      branchName
      clientRepositoryId
      isBillable
      status
      task_technologies {
        technologiesId
      }
    }
  }
`;

export const FETCH_ALL_UN_COMPLETED_TASKS_AND_TASK_WORK = gql`
  query fetchAllUncompletedTasksAndTaskWork(
    $createdAt: timestamptz
    $developerId: String!
    $nextDay: timestamptz
  ) {
    developers(where: { id: { _eq: $developerId } }) {
      login
      user {
        id
      }
    }
    tasks(
      where: {
        _or: [
          {
            _and: [
              { developerId: { _eq: $developerId } }
              { status: { _in: [assigned, in_progress, needs_changes] } }
            ]
          }
          {
            _and: [
              { managerId: { _eq: $developerId } }
              { status: { _in: [internal_review, passed_internal_review] } }
            ]
          }
        ]
      }
    ) {
      id
      ticketCode
      title
      developerId
      costInUSD
      managerId
      status
      task_daily_standups(
        where: {
          _and: [
            { createdAt: { _lt: $nextDay } }
            { createdAt: { _gt: $createdAt } }
          ]
        }
      ) {
        id
        userId
        summary
        updatedETA
      }
    }

    task_reviews(
      where: {
        _and: [
          { _or: [{ developerId: { _eq: $developerId } }] }
          { status: { _in: [assigned, in_progress] } }
        ]
      }
    ) {
      id
      managerId
      developerId
      costInUSD
      task {
        id
        title
        ticketCode
        status
        task_daily_standups(
          where: {
            _and: [
              { createdAt: { _lt: $nextDay } }
              { createdAt: { _gt: $createdAt } }
            ]
          }
        ) {
          id
          userId
          summary
          updatedETA
        }
      }
    }
    user_daily_standups(
      where: {
        _and: [
          { createdAt: { _lt: $nextDay } }
          { createdAt: { _gt: $createdAt } }
          { user: { developer: { id: { _eq: $developerId } } } }
        ]
      }
    ) {
      id
      summary
      userId
      user {
        developer {
          id
        }
      }
    }
  }
`;

export const FETCH_TICKET_BY_TICKETCODE = gql`
  query fetchTicketByTicketCode($ticketId: Int!) {
    tickets(where: { id: { _eq: $ticketId } }) {
      id
      title
      code
      description
      clientId
      managerId
      ticketLink
      costInCredits
      completedAt
      createdAt
      discount
      costInCredits
      isInternal
    }
  }
`;

export const FETCH_DEVELOPERS_CLIENTS_AND_TICKET_DETAILS = gql`
  query fetchDevelopersClientsAndTicketDetails($ticketId: Int) {
    developers {
      id
      firstName
      lastName
    }

    clients {
      id
      name
    }

    tickets(where: { id: { _eq: $ticketId } }) {
      id
      code
      title
      discount
      clientId
      createdAt
      managerId
      isInternal
      ticketLink
      description
      completedAt
      costInCredits
    }
  }
`;

export const FETCH_CLIENT_TICKETS_BY_TICKETCODE = gql`
  query fetchTicketsByTicketCode($ticketCode: String!) {
    tickets(where: { code: { _eq: $ticketCode } }) {
      code
      completedAt
      createdAt
      costInCredits
      description
      id
      startedAt
      managerId
      title
      updatedAt
      ticketLink
      tasks {
        id
        description
        title
        createdAt
        completedAt
        branchName
        prLink
        costInUSD
        status
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
          }
        }
        developerByDeveloperid {
          id
          firstName
          lastName
        }
        developerByManagerid {
          id
          firstName
          lastName
        }
        developerByReviewerid {
          id
          firstName
          lastName
        }
      }
    }
  }
`;

export const FETCH_TASKS_STANDUPS_BY_DEVELOPER_ID = gql`
  query fetchTasksStandupsByDeveloperId($developerId: String!) {
    tasks(
      where: {
        _or: [
          {
            _and: [
              { developerId: { _eq: $developerId } }
              {
                status: {
                  _nin: [
                    backlog
                    finished
                    cancelled
                    internal_review
                    passed_internal_review
                    client_review
                  ]
                }
              }
            ]
          }
          {
            _and: [
              { managerId: { _eq: $developerId } }
              { status: { _nin: [backlog, finished, cancelled] } }
            ]
          }
        ]
      }
    ) {
      developerId
      description
      startedAt
      status
      createdAt
      title
      id
      task_daily_standups(order_by: { createdAt: desc }, limit: 4) {
        id
        submittedAt
        createdAt
        summary
        updatedETA
        taskId
        user {
          avatarUrl
        }
        task {
          id
          ticketCode
        }
      }
    }
  }
`;

export const FETCH_TICKETS_DAILY_STANDUPS_BY_DEVELOPER_ID = gql`
  query fetchTicketsDailyStandupsByDeveloperId($developerId: String!) {
    tickets(
      where: {
        _and: [
          {
            _or: [
              {
                _and: [
                  { completedAt: { _is_null: true } }
                  { cancelledAt: { _is_null: true } }
                ]
              }
              { tasks: { completedAt: { _is_null: true } } }
            ]
          }
          {
            _or: [
              { managerId: { _eq: $developerId } }
              { tasks: { developerId: { _eq: $developerId } } }
            ]
          }
        ]
      }
    ) {
      startedAt
      id
      code
      completedAt
      createdAt
      managerId
      title
      ticket_daily_standups(order_by: { createdAt: desc }, limit: 1) {
        id
        submittedAt
        createdAt
        message
        updatedETA
        updatedAt
        ticketId
        user {
          id
          avatarUrl
        }
        ticket {
          id
          code
        }
      }
      tasks(
        where: {
          task_daily_standups: {
            summarizedInTicketDailyStandupId: { _is_null: true }
            id: { _is_null: false }
          }
        }
      ) {
        task_daily_standups(order_by: { createdAt: desc }, limit: 1) {
          id
          submittedAt
          createdAt
          summary
          updatedETA
          taskId
          user {
            id
            avatarUrl
          }
          task {
            id
            ticketCode
          }
        }
        clientId
        status
        startedAt
        prLink
        completedAt
        id
        ticket {
          id
        }
      }
    }
  }
`;

export const FETCH_CLIENTS_STANDUPS_BY_DEVELOPER_ID = gql`
  query fetchClientsStandupByDeveloperId($developerId: String!) {
    clients(
      order_by: { id: asc }
      where: {
        _and: [
          { tickets: { managerId: { _eq: $developerId } } }
          { tickets: { completedAt: { _is_null: true } } }
          { tickets: { cancelledAt: { _is_null: true } } }
          { tickets: { tasks: { status: { _neq: finished } } } }
        ]
      }
    ) {
      name
      id
      tickets(where: { ticket_daily_standups: { id: { _is_null: false } } }) {
        code
        title
        clientId
        id
        ticket_daily_standups(
          order_by: { createdAt: desc }
          where: { summarizedInClientDailyStandupId: { _is_null: true } }
        ) {
          id
          submittedAt
          createdAt
          message
          updatedETA
          updatedAt
          ticketId
          user {
            id
            avatarUrl
          }
          ticket {
            id
            code
          }
        }
      }
      client_daily_standups(order_by: { createdAt: desc }) {
        summary
        createdAt
        clientId
        id
        submittedAt
        user {
          id
          avatarUrl
        }
        ticket_daily_standups(order_by: { createdAt: desc }) {
          id
          submittedAt
          createdAt
          message
          updatedETA
          updatedAt
          ticketId
          user {
            id
            avatarUrl
          }
          ticket {
            code
            title
            clientId
            id
          }
        }
      }
    }
  }
`;

export const FETCH_USER_STANDUPS_OVERVIEW = gql`
  query fetchUserStandupOverview($userId: Int!) {
    users(where: { id: { _eq: $userId } }) {
      id
      user_daily_standups(order_by: { createdAt: desc }) {
        id
        summary
        submittedAt
        createdAt
        user {
          id
          avatarUrl
        }
        ticket_daily_standups(order_by: { createdAt: desc }) {
          id
          message
          submittedAt
          createdAt
          updatedETA
          user {
            avatarUrl
          }
          ticket {
            id
            code
          }
        }
        task_daily_standups(order_by: { createdAt: desc }) {
          id
          submittedAt
          createdAt
          summary
          updatedETA
          user {
            id
            avatarUrl
          }
          task {
            id
            ticketCode
          }
        }
        client_daily_standups(
          order_by: { createdAt: desc }
          where: { summarizedInUserDailyStandupId: { _is_null: false } }
        ) {
          id
          submittedAt
          createdAt
          summary
          user {
            id
            avatarUrl
          }
          client {
            id
          }
        }
      }
      unlinked_ticket_daily_standups: ticket_daily_standups(
        order_by: { createdAt: desc }
        where: { summarizedInUserDailyStandupId: { _is_null: true } }
      ) {
        id
        message
        submittedAt
        createdAt
        updatedETA
        user {
          id
          avatarUrl
        }
        ticket {
          id
          code
        }
      }
      unlinked_task_daily_standups: task_daily_standups(
        order_by: { createdAt: desc }
        where: { summarizedInUserDailyStandupId: { _is_null: true } }
      ) {
        id
        submittedAt
        createdAt
        summary
        updatedETA
        user {
          id
          avatarUrl
        }
        task {
          id
          ticketCode
        }
      }
      unlinked_client_daily_standups: client_daily_standups(
        order_by: { createdAt: desc }
        where: { summarizedInUserDailyStandupId: { _is_null: true } }
      ) {
        id
        submittedAt
        createdAt
        summary
        user {
          id
          avatarUrl
        }
        client {
          id
        }
      }
    }
  }
`;

export const FETCH_DEVELOPER_STANDUP_OVERVIEW = gql`
  query fetchDeveloperStandupOverview($userId: Int!) {
    users(where: { id: { _eq: $userId } }) {
      firstName
      avatarUrl
      lastName
    }
  }
`;

export const FETCH_DEVELOPER_OVERVIEW = gql`
  query fetchDeveloperOverview($developerId: String!) {
    developers(where: { _and: [{ id: { _eq: $developerId } }] }) {
      id
      githubId
      firstName
      developer_bonus_earnings {
        amountInUSD
        startDate
        endDate
        bonusType
      }
      developer_contracts(where: { _and: [{ endDate: { _is_null: true } }] }) {
        id
        startDate
        endDate
      }

      developer_weekly_earnings {
        amountEarnedWithTasks
        minimumAmountEarned
        startDate
        endDate
      }

      user {
        user_payments(
          where: {
            _and: [{ status: { _in: [successful, in_progress, pending] } }]
          }
        ) {
          status
          amountInUSD
          finishedAt
        }
      }

      tasks(
        where: {
          _and: [
            { status: { _nin: [cancelled, finished] } }
            {
              _or: [
                { developerId: { _eq: $developerId } }
                { managerId: { _eq: $developerId } }
                { reviewerId: { _eq: $developerId } }
              ]
            }
          ]
        }
        order_by: { createdAt: asc }
      ) {
        id
        ticketCode
        title
        clientId
        status
        costInUSD
        developerId
        managerId
        reviewerId
        startedAt
        updatedAt
        createdAt
        completedAt
        ticket {
          ticketLink
          code
        }

        task_time_logs(order_by: { startedAt: asc }) {
          startedAt
          task {
            ticketCode
          }
          finishedAt
          timeSpent
        }
      }
    }
  }
`;
