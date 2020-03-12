import gql from 'graphql-tag';

export const LINK_STANDUPS_TO_USER = gql`
  mutation linkStandupsToUser(
    $ticketIds: [Int!]
    $taskIds: [Int!]
    $clientIds: [Int!]
    $standupId: Int!
  ) {
    update_ticket_daily_standups(
      _set: { summarizedInUserDailyStandupId: $standupId }
      where: { id: { _in: $ticketIds } }
    ) {
      returning {
        id
      }
    }
    update_task_daily_standups(
      where: { id: { _in: $taskIds } }
      _set: { summarizedInUserDailyStandupId: $standupId }
    ) {
      affected_rows
      returning {
        id
      }
    }
    update_client_daily_standups(
      where: { id: { _in: $clientIds } }
      _set: { summarizedInUserDailyStandupId: $standupId }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export const ISSUE_TASK_STATE = gql`
  mutation issueTaskState($taskId: Float!, $updatedTaskState: TaskStateType!) {
    updateTaskState(taskId: $taskId, updatedTaskState: $updatedTaskState) {
      possibleStates {
        error
        state
      }
      taskId
      state
    }
  }
`;

export const UPSERT_TASKS = gql`
  mutation upsertTasks(
    $tasks: [tasks_insert_input!]!
    $onTaskConflict: tasks_on_conflict!
  ) {
    insert_tasks(objects: $tasks, on_conflict: $onTaskConflict) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export const UPSERT_TICKET = gql`
  mutation upsertTicket(
    $ticket: [tickets_insert_input!]!
    $onConflict: tickets_on_conflict
  ) {
    insert_tickets(objects: $ticket, on_conflict: $onConflict) {
      affected_rows
      returning {
        id
        code
        title
        description
        clientId
        managerId
        ticketLink
        createdAt
      }
    }
  }
`;

// task/taskwork/user daily standup
export const SUBMIT_TASK_AND_USER_DAILY_STANDUP = gql`
  mutation insertTaskAndUserStandup(
    $taskStandUps: [task_daily_standups_insert_input!]!
    $onTaskStandUpConflict: task_daily_standups_on_conflict!
    $userDailyStandUp: user_daily_standups_insert_input!
    $onUserDailyStandupConflict: user_daily_standups_on_conflict!
  ) {
    insert_task_daily_standups(
      objects: $taskStandUps
      on_conflict: $onTaskStandUpConflict
    ) {
      affected_rows
    }
    insert_user_daily_standups(
      objects: [$userDailyStandUp]
      on_conflict: $onUserDailyStandupConflict
    ) {
      affected_rows
      returning {
        summary
      }
    }
  }
`;

export const START_TICKET_BY_TICKETCODE = gql`
  mutation startTicketByTicketCode(
    $ticketCode: String!
    $startedAt: timestamptz!
  ) {
    update_tickets(
      where: { code: { _eq: $ticketCode } }
      _set: { startedAt: $startedAt }
    ) {
      affected_rows
      returning {
        code
        startedAt
      }
    }
  }
`;

export const INSERT_NEW_TASK = gql`
  mutation insertNewTask($task: [tasks_insert_input!]!) {
    insert_tasks(objects: $task) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export const UPDATE_TASK_DEVELOPERID = gql`
  mutation updateTaskDeveloperId(
    $taskId: Int!
    $developerId: String
    $updatedTaskState: tasks_status_enum!
  ) {
    update_tasks(
      _set: { developerId: $developerId, status: $updatedTaskState }
      where: { id: { _eq: $taskId } }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export const INSERT_NEW_TASK_STANDUP = gql`
  mutation insertTaskStandup(
    $taskId: Int!
    $updatedETA: timestamptz!
    $summary: String!
    $userId: Int!
  ) {
    insert_task_daily_standups(
      objects: {
        taskId: $taskId
        updatedETA: $updatedETA
        summary: $summary
        userId: $userId
      }
    ) {
      affected_rows
      returning {
        summary
        id
      }
    }
  }
`;

export const INSERT_NEW_TICKET_STANDUP = gql`
  mutation insertTicketStandup(
    $ticketId: Int!
    $updatedETA: timestamptz!
    $message: String!
    $userId: Int!
  ) {
    insert_ticket_daily_standups(
      objects: {
        updatedETA: $updatedETA
        userId: $userId
        ticketId: $ticketId
        message: $message
      }
    ) {
      affected_rows
      returning {
        id
        ticketId
      }
    }
  }
`;

export const LINK_TASK_STANDUP_TO_TICKET = gql`
  mutation linkTaskStandupToTicket($ticketId: Int!, $standupId: Int!) {
    update_task_daily_standups(
      where: {
        task: { ticket: { id: { _eq: $ticketId } } }
        summarizedInTicketDailyStandupId: { _is_null: true }
      }
      _set: { summarizedInTicketDailyStandupId: $standupId }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export const INSERT_NEW_CLIENT_STANDUP = gql`
  mutation insertClientStandup(
    $clientId: String!
    $summary: String!
    $userId: Int!
  ) {
    insert_client_daily_standups(
      objects: { clientId: $clientId, summary: $summary, userId: $userId }
    ) {
      affected_rows
      returning {
        id
        clientId
      }
    }
  }
`;

export const LINK_TICKET_STANDUP_TO_CLIENT = gql`
  mutation linkTicketStandupToClient($clientId: String!, $standupId: Int!) {
    update_ticket_daily_standups(
      where: {
        ticket: { client: { id: { _eq: $clientId } } }
        summarizedInClientDailyStandupId: { _is_null: true }
      }
      _set: { summarizedInClientDailyStandupId: $standupId }
    ) {
      returning {
        id
      }
    }
  }
`;

export const INSERT_NEW_USER_STANDUP = gql`
  mutation insertNewUserStandup($summary: String!, $userId: Int!) {
    insert_user_daily_standups(
      objects: { summary: $summary, userId: $userId }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;
