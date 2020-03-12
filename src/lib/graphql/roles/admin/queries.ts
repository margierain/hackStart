import gql from 'graphql-tag';

export const FETCH_USER_BY_EMAIL = gql`
  query fetchUserByEmail($email: String!) {
    user_emails(where: { email: { _ilike: $email } }) {
      email
      user {
        id
        firstName
        lastName
        passwordHash
        agency_user {
          id
          agencyId
        }

        client_user {
          id
          clientId
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
          githubId
          agencyId
        }
      }
    }
  }
`;

export const FETCH_CANDIDATE_BY_ID = gql`
  query fetchCandidateById($id: uuid!) {
    candidates(where: { id: { _eq: $id } }) {
      id
      user {
        id
        user_emails {
          email
        }
      }
      githubId
      userId
      minAnnualSalary
      city
      country
      noticePeriod
      culture_screen_feedback
      tech_screen_feedback
      stage
      timezone
      yearsOfExperience
      source
      skillTrack
      agencyId
      earliestStartDate
    }
  }
`;

export const CHECK_EXISTING_CANDIDATE = gql`
  query checkExistingCandidates($email: String!, $githubId: String!) {
    candidates(
      where: {
        _or: [
          { user: { user_emails: { email: { _ilike: $email } } } }
          { githubId: { _eq: $githubId } }
        ]
      }
    ) {
      id
    }
  }
`;

export const FETCH_PENDING_CLIENT_USAGE = gql`
  query fetchPendingClientUsage($clientId: String!) {
    clients(where: { id: { _eq: $clientId } }) {
      id
      name
      creditBatchSize
      client_transactions(order_by: { transactedAt: asc }) {
        id
        invoiceCode
        status
        channelType
        channelTransactionId
        costInUSD
        costInCredits
        transactedAt
        dueAt
      }

      client_invoices(order_by: { dueAt: asc }) {
        id
        costInUSD
        costInCredits
        dueAt
        maxBudgetInCredits
        consumedCredits: client_tickets_aggregate {
          aggregate {
            sum {
              discountedCostInCredits
            }
          }
        }
        status
      }

      tickets(
        where: {
          _and: [
            { isInternal: { _eq: false } }
            { invoiceId: { _is_null: true } }
            { completedAt: { _is_null: false } }
          ]
        }
        order_by: { completedAt: asc }
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

export const FETCH_ALL_PENDING_CLIENT_USAGE = gql`
  query fetchAllPendingClientUsage {
    clients {
      id
      name
      creditBatchSize
      client_transactions(order_by: { transactedAt: asc }) {
        id
        invoiceCode
        status
        channelType
        channelTransactionId
        costInUSD
        costInCredits
        transactedAt
        dueAt
      }

      client_invoices(order_by: { dueAt: asc }) {
        id
        costInUSD
        costInCredits
        dueAt
        maxBudgetInCredits
        consumedCredits: client_tickets_aggregate {
          aggregate {
            sum {
              discountedCostInCredits
            }
          }
        }
        status
      }

      tickets(
        where: {
          _and: [
            { isInternal: { _eq: false } }
            { invoiceId: { _is_null: true } }
            { completedAt: { _is_null: false } }
          ]
        }
        order_by: { completedAt: asc }
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

export const FETCH_ALL_PENDING_DEVELOPER_EARNINGS = gql`
  query fetchAllPendingDeveloperEarnings {
    developers {
      id
      user {
        id
        user_time_earnings(where: { userInvoiceId: { _is_null: true } }) {
          id
          earningsinusd
          timeSpentInHours
          finishedAt
        }

        user_invoices {
          id
          costInUSD
          dueAt
          status
          createdAt
          startAt
          endAt
          adjustedCostInUSD
          developer_bonus_earnings: developer_bonus_earnings_aggregate {
            nodes {
              amountInUSD
              id
            }
            aggregate {
              sum {
                amountInUSD
              }
            }
          }
          user_time_earnings: user_time_earnings_aggregate {
            aggregate {
              sum {
                earningsinusd
              }
            }
            nodes {
              id
              startedAt
              finishedAt
              earningsinusd
            }
          }
          task_works: task_works_aggregate {
            nodes {
              id
              costInUSD
            }
            aggregate {
              sum {
                costInUSD
              }
            }
          }
          taskWorksByManagerinvoiceid: taskWorksByManagerinvoiceid_aggregate {
            nodes {
              id
              costInUSD
            }
            aggregate {
              sum {
                costInUSD
              }
            }
          }
          tasksDeveloper: tasks_aggregate {
            nodes {
              id
              costInUSD
            }
            aggregate {
              sum {
                costInUSD
              }
            }
          }
          tasksManager: tasksByManagerinvoiceid_aggregate {
            nodes {
              id
              costInUSD
            }
            aggregate {
              sum {
                costInUSD
              }
            }
          }
          taskReviewerDeveloper: task_reviews_aggregate {
            nodes {
              id
              costInUSD
            }
            aggregate {
              sum {
                costInUSD
              }
            }
          }
          taskReviewerManager: taskReviewsByManagerinvoiceid_aggregate {
            nodes {
              id
              costInUSD
            }
            aggregate {
              sum {
                costInUSD
              }
            }
          }
        }
      }
      developer_bonus_earnings(where: { userInvoiceId: { _is_null: true } }) {
        id
        amountInUSD
        startDate
        endDate
      }
      task_reviews(
        where: {
          _and: [
            { status: { _in: [passed] } }
            { reviewerInvoiceId: { _is_null: true } }
            { completedAt: { _is_null: false } }
          ]
        }
      ) {
        id
        costInUSD
        completedAt
      }
      taskReviewsByDeveloperid(
        where: {
          _and: [
            { status: { _in: [passed] } }
            { reviewerInvoiceId: { _is_null: true } }
            { completedAt: { _is_null: false } }
          ]
        }
      ) {
        id
        costInUSD
        completedAt
      }
      tasksByDeveloperid(
        where: {
          _and: [
            {
              status: {
                _in: [finished, passed_internal_review, internal_review]
              }
            }
            { developerInvoiceId: { _is_null: true } }
            { completedAt: { _is_null: false } }
          ]
        }
      ) {
        id
        costInUSD
        completedAt
      }
      tasksByManagerid(
        where: {
          _and: [
            {
              status: {
                _in: [finished, passed_internal_review, internal_review]
              }
            }
            { managerInvoiceId: { _is_null: true } }
            { completedAt: { _is_null: false } }
          ]
        }
      ) {
        id
        costInUSD
        completedAt
      }
      task_works(
        where: {
          _and: [
            { status: { _eq: finished } }
            { managerInvoiceId: { _is_null: true } }
            { completedAt: { _is_null: false } }
          ]
        }
      ) {
        id
        costInUSD
        completedAt
      }
      taskWorksByDeveloperid(
        where: {
          _and: [
            { status: { _eq: finished } }
            { workerInvoiceId: { _is_null: true } }
            { completedAt: { _is_null: false } }
          ]
        }
      ) {
        id
        costInUSD
        completedAt
      }
    }
  }
`;

export const FETCH_PENDING_DEVELOPER_EARNINGS = gql`
  query fetchPendingDeveloperEarnings($developerId: String!) {
    developers(where: { id: { _eq: $developerId } }) {
      id
      user {
        id
        user_time_earnings(where: { userInvoiceId: { _is_null: true } }) {
          id
          earningsinusd
          timeSpentInHours
          finishedAt
        }
        user_invoices {
          id
          costInUSD
          dueAt
          status
          createdAt
          startAt
          endAt
          adjustedCostInUSD
          developer_bonus_earnings: developer_bonus_earnings_aggregate {
            nodes {
              amountInUSD
              id
            }
            aggregate {
              sum {
                amountInUSD
              }
            }
          }
          user_time_earnings: user_time_earnings_aggregate {
            aggregate {
              sum {
                earningsinusd
              }
            }
            nodes {
              id
              startedAt
              finishedAt
              earningsinusd
            }
          }
          task_works: task_works_aggregate {
            nodes {
              id
              costInUSD
            }
            aggregate {
              sum {
                costInUSD
              }
            }
          }
          taskWorksByManagerinvoiceid: taskWorksByManagerinvoiceid_aggregate {
            nodes {
              id
              costInUSD
            }
            aggregate {
              sum {
                costInUSD
              }
            }
          }
          tasksDeveloper: tasks_aggregate {
            nodes {
              id
              costInUSD
            }
            aggregate {
              sum {
                costInUSD
              }
            }
          }
          tasksManager: tasksByManagerinvoiceid_aggregate {
            nodes {
              id
              costInUSD
            }
            aggregate {
              sum {
                costInUSD
              }
            }
          }
          taskReviewerDeveloper: task_reviews_aggregate {
            nodes {
              id
              costInUSD
            }
            aggregate {
              sum {
                costInUSD
              }
            }
          }
          taskReviewerManager: taskReviewsByManagerinvoiceid_aggregate {
            nodes {
              id
              costInUSD
            }
            aggregate {
              sum {
                costInUSD
              }
            }
          }
        }
      }
      developer_bonus_earnings(where: { userInvoiceId: { _is_null: true } }) {
        id
        amountInUSD
        startDate
        endDate
      }
      task_reviews(
        where: {
          _and: [
            { status: { _in: [passed] } }
            { managerInvoiceId: { _is_null: true } }
            { completedAt: { _is_null: false } }
          ]
        }
      ) {
        id
        costInUSD
        completedAt
      }
      taskReviewsByDeveloperid(
        where: {
          _and: [
            { status: { _in: [passed] } }
            { reviewerInvoiceId: { _is_null: true } }
            { completedAt: { _is_null: false } }
          ]
        }
      ) {
        id
        costInUSD
        completedAt
      }
      tasksByDeveloperid(
        where: {
          _and: [
            {
              status: {
                _in: [finished, passed_internal_review, internal_review]
              }
            }
            { developerInvoiceId: { _is_null: true } }
            { completedAt: { _is_null: false } }
          ]
        }
      ) {
        id
        costInUSD
        completedAt
      }
      tasksByManagerid(
        where: {
          _and: [
            {
              status: {
                _in: [finished, passed_internal_review, internal_review]
              }
            }
            { managerInvoiceId: { _is_null: true } }
            { completedAt: { _is_null: false } }
          ]
        }
      ) {
        id
        costInUSD
        completedAt
      }
      task_works(
        where: {
          _and: [
            { status: { _eq: finished } }
            { managerInvoiceId: { _is_null: true } }
            { completedAt: { _is_null: false } }
          ]
        }
      ) {
        id
        costInUSD
        completedAt
      }
      taskWorksByDeveloperid(
        where: {
          _and: [
            { status: { _eq: finished } }
            { workerInvoiceId: { _is_null: true } }
            { completedAt: { _is_null: false } }
          ]
        }
      ) {
        id
        costInUSD
        completedAt
      }
    }
  }
`;

export const FETCH_ALL_DEVELOPERS_CONTRACTS_WEEKLY_EARNINGS = gql`
  query fetchAllDevelopersAndContractsAndWeeklyEarnings {
    developers(order_by: { id: asc }) {
      id

      login
      developer_contracts {
        id
        startDate
        endDate
        userLogin
        amountPerWeek
        hoursPerWeek
      }

      developer_weekly_earnings {
        id
        amountEarnedWithTasks
        minimumAmountEarned
        userLogin
        startDate
        endDate
      }
    }
  }
`;

export const FETCH_ALL_COMPLETED_TASKS = gql`
  query fetchAllCompletedTasks($completedAt: timestamptz!) {
    tasks(
      where: { _and: [{ completedAt: { _gte: $completedAt } }] }
      order_by: { completedAt: asc }
    ) {
      id
      developerByDeveloperid {
        login
      }
      developerByManagerid {
        login
      }
      developerByReviewerid {
        login
      }
      managerId
      reviewerId
      completedAt
      costInUSD
      status
    }
  }
`;

export const FETCH_TASK_REVIEWS = gql`
  query fetchTaskReviews($id: Int!) {
    task_reviews(where: { id: { _eq: $id } }) {
      id
      status
      costInUSD
      developerId
      managerId
      approvesTaskId
      task {
        id
        status
        title
        prLink
        description
        costInUSD
        clientId
        reviewerId
        developerId
        managerId
        task_reviews(where: { id: { _neq: $id } }) {
          id
          status
          costInUSD
          developerId
          managerId
          approvesTaskId
        }
      }
    }
  }
`;

export const FETCH_TASK = gql`
  query fetchTask($id: Int!) {
    tasks(where: { id: { _eq: $id } }) {
      id
      status
      title
      prLink
      description
      costInUSD
      clientId
      reviewerId
      developerByDeveloperid {
        id
        user {
          id
          user_emails {
            email
          }
        }
      }
      managerId
    }
  }
`;

export const FETCH_TASK_AND_REVIEWS = gql`
  query fetchTaskAndReviews($id: Int!) {
    tasks(where: { id: { _eq: $id } }) {
      id
      status
      title
      prLink
      description
      costInUSD
      clientId
      reviewerId
      developerByDeveloperid {
        user {
          id
          user_emails {
            email
          }

          timedoctor_user {
            sid
          }
        }
        id
      }
      managerId
      ticketCode

      task_reviews(where: { approvesTaskId: { _eq: $id } }) {
        id
        costInUSD
        status
        developerId
        managerId
      }

      task_time_logs(where: { taskId: { _eq: $id } }) {
        id
        timeSpent
        timedoctorTaskId
        startedAt
        finishedAt
        developer {
          id
          user {
            id
            user_emails {
              email
            }

            timedoctor_user {
              sid
            }
          }
        }
      }
    }
  }
`;

export const FETCH_TIMEDOCTOR_REFRESH_TOKEN = gql`
  query fetchTimeDoctorRefreshToken {
    auth_settings(
      where: {
        _and: [
          { provider: { _eq: "timeDoctor" } }
          { name: { _eq: "refreshToken" } }
        ]
      }
      limit: 1
      order_by: { id: desc }
    ) {
      value
      id
    }
  }
`;

export const INSERT_UPDATE_DELETE_WEEKLY_EARNINGS = gql`
  mutation insertUpdateAndDeleteWeeklyEarnings(
    $values: [developer_weekly_earning_insert_input!]!
  ) {
    insert: insert_developer_weekly_earning(objects: $values) {
      returning {
        id
      }
    }
  }
`;
