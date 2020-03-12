import gql from 'graphql-tag';

export const UPSERT_USER_BY_EMAIL = gql`
  mutation upsertUserByEmail(
    $userEmail: user_emails_insert_input!
    $onConflict: user_emails_on_conflict!
  ) {
    insert_user_emails(objects: [$userEmail], on_conflict: $onConflict) {
      returning {
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
  }
`;

export const SIGNUP_WITH_USER = gql`
  mutation signUpUserWithEmailAndPassword(
    $defaultEmail: String!
    $passwordHash: String!
    $firstName: String
    $lastName: String
  ) {
    insert_user_emails(
      objects: {
        email: $defaultEmail
        user: {
          data: {
            passwordHash: $passwordHash
            defaultEmail: $defaultEmail
            firstName: $firstName
            lastName: $lastName
          }
        }
      }
    ) {
      returning {
        user {
          defaultEmail
          passwordHash
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
  }
`;

export const UPDATE_CANDIDATE_STAGE = gql`
  mutation updateCandidateStage(
    $candidateId: uuid!
    $stage: candidate_stage_enum!
    $updatedAt: timestamptz!
  ) {
    update_candidates(
      where: { id: { _eq: $candidateId } }
      _set: { stage: $stage, updatedAt: $updatedAt }
    ) {
      affected_rows
    }
  }
`;

export const INSERT_NEW_USER = gql`
  mutation insertNewUser($objects: [users_insert_input!]!) {
    insert_users(objects: $objects) {
      returning {
        id
      }
    }
  }
`;

export const INSERT_NEW_CANDIDATE = gql`
  mutation insertNewCandidate($objects: [candidates_insert_input!]!) {
    insert_candidates(objects: $objects) {
      returning {
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
        earliestStartDate
        timezone
        yearsOfExperience
        source
        skillTrack
        agencyId
      }
    }
  }
`;

export const INSERT_CLIENT_PENDING_INVOICES = gql`
  mutation insertClientInvoices(
    $invoices: [client_invoices_insert_input!]!
    $onConflict: client_invoices_on_conflict!
  ) {
    insert_client_invoices(objects: $invoices, on_conflict: $onConflict) {
      affected_rows
      returning {
        id
        clientId
        costInCredits
        costInUSD
        dueAt
        status
        maxBudgetInCredits
        consumedCredits: client_tickets_aggregate {
          aggregate {
            sum {
              discountedCostInCredits
            }
          }
        }
      }
    }
  }
`;

export const UPSERT_DEVELOPER_PENDING_INVOICE = gql`
  mutation insertUserInvoices(
    $invoices: [user_invoices_insert_input!]!
    $onConflict: user_invoices_on_conflict!
  ) {
    insert_user_invoices(objects: $invoices, on_conflict: $onConflict) {
      affected_rows
      returning {
        id
        userId
        adjustedCostInUSD
        costInUSD
        dueAt
        status
        developer_bonus_earnings {
          id
          amountInUSD
        }
        task_reviews {
          id
          costInUSD
        }
        taskReviewsByManagerinvoiceid {
          id
          costInUSD
        }
        tasks {
          id
          costInUSD
        }
        tasksByManagerinvoiceid {
          id
          costInUSD
        }
        task_works {
          id
          costInUSD
        }
        taskWorksByManagerinvoiceid {
          id
          costInUSD
        }
        user_time_earnings {
          id
          earningsinusd
        }
        user {
          login
        }
      }
    }
  }
`;

export const INSERT_NEW_WEEKLY_EARNINGS = gql`
  mutation insertNewWeeklyEarnings(
    $values: [developer_weekly_earning_insert_input!]!
  ) {
    insert_developer_weekly_earning(objects: $values) {
      returning {
        id
      }
    }
  }
`;

export const UPDATE_CLIENT_INVOICES_STATUS = gql`
  mutation updateClientInvoicesStatus(
    $invoiceIds: [Int!]!
    $status: client_invoice_status_enum!
  ) {
    update_client_invoices(
      where: { id: { _in: $invoiceIds } }
      _set: { status: $status }
    ) {
      affected_rows
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

export const UPDATE_TASK_REVIEW_STATE_FINISHED = gql`
  mutation updateTaskReviewStateToFinished(
    $taskId: Int!
    $taskReviewId: Int!
    $taskReviewStatus: task_reviews_status_enum!
    $taskStatus: tasks_status_enum!
    $updatedAt: timestamptz!
  ) {
    update_task_reviews(
      where: { id: { _eq: $taskReviewId } }
      _set: { status: $taskReviewStatus, updatedAt: $updatedAt }
    ) {
      returning {
        id
        status
        costInUSD
        developerId
        managerId
        approvesTaskId
      }
    }

    update_tasks(
      where: { id: { _eq: $taskId } }
      _set: { status: $taskStatus, updatedAt: $updatedAt }
    ) {
      returning {
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
      }
    }
  }
`;

export const UPDATE_TASK_REVIEW_STATE = gql`
  mutation updateTaskReviewState(
    $taskReviewId: Int!
    $status: task_reviews_status_enum!
    $updatedAt: timestamptz!
  ) {
    update_task_reviews(
      where: { id: { _eq: $taskReviewId } }
      _set: { status: $status, updatedAt: $updatedAt }
    ) {
      returning {
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
        }
      }
    }
  }
`;

export const UPDATE_TASK_TIME_LOGS = gql`
  mutation updateTaskTimeLogs(
    $id: Int
    $timeDocterTaskId: String
    $timeSpent: Int
    $finishedAt: timestamptz
  ) {
    update_task_time_logs(
      where: {
        _and: [
          { taskId: { _eq: $id } }
          { timedoctorTaskId: { _eq: $timeDocterTaskId } }
        ]
      }
      _set: { timeSpent: $timeSpent, finishedAt: $finishedAt }
    ) {
      returning {
        id
      }
    }
  }
`;

export const INSERT_TIME_LOGS = gql`
  mutation insertTaskTimeLogs(
    $id: Int
    $timeDocterTaskId: String
    $developerId: String
    $startedAt: timestamptz
    $createdDateColumn: timestamptz
    $updatedDateColumn: timestamptz
  ) {
    insert_task_time_logs(
      objects: [
        {
          taskId: $id
          timedoctorTaskId: $timeDocterTaskId
          developerId: $developerId
          startedAt: $startedAt
          CreatedDateColumn: $createdDateColumn
          UpdateDateColumn: $updatedDateColumn
        }
      ]
    ) {
      returning {
        id
        taskId
      }
    }
  }
`;

export const UPDATE_TASK_STATE_FOR_REVIEW = gql`
  mutation updateTaskStateForReview(
    $taskId: Int!
    $reviewCost: Int!
    $managerId: String
    $reviewStatus: task_reviews_status_enum!
    $reviewerId: String
    $updatedAt: timestamptz!
  ) {
    update_tasks(
      where: { id: { _eq: $taskId } }
      _set: { status: internal_review, updatedAt: $updatedAt }
    ) {
      returning {
        id
        status
        title
        prLink
        description
        costInUSD
        clientId
        developerByDeveloperid {
          id
          user {
            id
            user_emails {
              email
            }
          }
        }
        reviewerId
        managerId
      }
    }
    insert_task_reviews(
      objects: [
        {
          approvesTaskId: $taskId
          costInUSD: $reviewCost
          status: $reviewStatus
          developerId: $reviewerId
          managerId: $managerId
        }
      ]
    ) {
      returning {
        id
      }
    }
  }
`;

export const UPDATE_TASK_STATE_TO_COMPLETE = gql`
  mutation updateTaskStateToComplete(
    $taskId: Int!
    $taskStatus: tasks_status_enum!
    $completedAt: timestamptz!
  ) {
    update_tasks(
      where: { id: { _eq: $taskId } }
      _set: {
        status: $taskStatus
        completedAt: $completedAt
        updatedAt: $completedAt
      }
    ) {
      returning {
        id
        status
        title
        prLink
        description
        costInUSD
        clientId
        developerByDeveloperid {
          id
          user {
            id
            user_emails {
              email
            }
          }
        }
        reviewerId
        managerId
      }
    }
    update_task_reviews(
      where: {
        _and: [
          { approvesTaskId: { _eq: $taskId } }
          { status: { _nin: [passed, failed] } }
        ]
      }
      _set: { status: cancelled }
    ) {
      returning {
        id
        costInUSD
        status
        developerId
        managerId
      }
    }
  }
`;
export const UPDATE_TASK_STATE = gql`
  mutation updateTaskState(
    $taskId: Int!
    $status: tasks_status_enum!
    $updatedAt: timestamptz!
  ) {
    update_tasks(
      where: { id: { _eq: $taskId } }
      _set: { status: $status, updatedAt: $updatedAt }
    ) {
      returning {
        id
        status
        title
        prLink
        description
        costInUSD
        clientId
        developerByDeveloperid {
          id
          user {
            id
            user_emails {
              email
            }
          }
        }
        reviewerId
        managerId
      }
    }
  }
`;

export const UPDATE_TIMEDOCTOR_REFRESH_TOKEN = gql`
  mutation updateAuthSettings($id: Int!, $authValues: auth_settings_set_input) {
    update_auth_settings(where: { id: { _eq: $id } }, _set: $authValues) {
      affected_rows
    }
  }
`;
