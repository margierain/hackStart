import {
  tickets_bool_exp,
  client_repositories_bool_exp,
  tasks_status_enum,
} from 'lib/graphql/roles/client/generated/globalTypes';
import {
  fetchClientTickets_tickets,
  fetchClientTickets_tickets_tasks,
} from 'lib/graphql/roles/client/generated/fetchClientTickets';
import _ from 'lodash';
import { TicketStatus, TicketSequence } from 'lib/types';

const getMultipleKeywordsQuery = (
  keywords: string | string[]
): tickets_bool_exp[] => {
  if (!Array.isArray(keywords))
    return [
      {
        _or: [
          { title: { _ilike: `%${keywords}%` } },
          { code: { _ilike: `%${keywords}%` } },
        ],
      },
    ];

  return keywords.reduce(
    (
      acc: tickets_bool_exp[],
      keyword: string[] | string
    ): tickets_bool_exp[] => [...acc, ...getMultipleKeywordsQuery(keyword)],
    []
  );
};

const getMultipleRepoQuery = (
  repos: string | string[]
): client_repositories_bool_exp[] => {
  if (!Array.isArray(repos))
    return [{ clientRepoUrl: { _ilike: `%${repos}%` } }];

  return repos.reduce(
    (
      acc: client_repositories_bool_exp[],
      repo: string[] | string
    ): client_repositories_bool_exp[] => [
      ...acc,
      ...getMultipleRepoQuery(repo),
    ],
    []
  );
};

export const getRepoSearchFilter = (repo: string[]): tickets_bool_exp => {
  return {
    tasks: {
      client_repository: {
        _or: getMultipleRepoQuery(repo),
      },
    },
  };
};

export const getKeywordSearchQuery = (keyword: string[]): tickets_bool_exp => {
  return {
    _and: getMultipleKeywordsQuery(keyword),
  };
};

const ticketsNotStartedFilter: tickets_bool_exp = {
  _and: [
    { completedAt: { _is_null: true } },
    {
      _or: [
        { _not: { tasks: { id: { _is_null: false } } } },
        {
          tasks: {
            status: {
              _in: [tasks_status_enum.available, tasks_status_enum.backlog],
            },
          },
        },
      ],
    },
  ],
};

const ticketInProgressFilter: tickets_bool_exp = {
  tasks: {
    status: {
      _in: [tasks_status_enum.in_progress, tasks_status_enum.assigned],
    },
  },
};

const ticketInternalReviewFilter: tickets_bool_exp = {
  tasks: {
    status: {
      _eq: tasks_status_enum.internal_review,
    },
  },
};

const ticketCompletedFilter: tickets_bool_exp = {
  _and: [
    { completedAt: { _is_null: false } },
    {
      _or: [
        { _not: { tasks: { id: { _is_null: false } } } },
        { tasks: { status: { _eq: tasks_status_enum.finished } } },
      ],
    },
  ],
};

const ticketCancelledFilter: tickets_bool_exp = {
  tasks: {
    status: {
      _eq: tasks_status_enum.cancelled,
    },
  },
};

const ticketUnderReviewFilter: tickets_bool_exp = {
  tasks: {
    status: {
      _in: [
        tasks_status_enum.passed_internal_review,
        tasks_status_enum.client_review,
        tasks_status_enum.internal_review,
        tasks_status_enum.needs_changes,
      ],
    },
  },
};

export const statusFilterHandlers: { [key: string]: tickets_bool_exp } = {
  'Not started': ticketsNotStartedFilter,
  'In progress': ticketInProgressFilter,
  'Internal review': ticketInternalReviewFilter,
  'Under review': ticketUnderReviewFilter,
  Completed: ticketCompletedFilter,
  Cancelled: ticketCancelledFilter,
};
const ticketStatusSequence = {
  'Not started': 1,
  'In progress': 2,
  'Internal review': 3,
  'Under review': 4,
  Completed: 5,
  Cancelled: 6,
};

export const getStatusFilter = (status: Array<string>): tickets_bool_exp => {
  return {
    _or: getStatusEnumValue(status),
  };
};

export const getTicketStatus = (ticket: fetchClientTickets_tickets) => {
  if (!ticket.completedAt && !ticket.tasks.length) return 'Not started';
  if (!ticket.completedAt) {
    const notStarted = ticket.tasks.some(task =>
      [tasks_status_enum.available, tasks_status_enum.backlog].includes(
        task.status
      )
    );

    if (notStarted) return 'Not started';
  }

  if (ticket.tasks && ticket.tasks.length) {
    const inProgress = ticket.tasks.some(task =>
      [tasks_status_enum.in_progress, tasks_status_enum.assigned].includes(
        task.status
      )
    );

    if (inProgress) return 'In progress';
  }

  if (ticket.completedAt) {
    const isCompleted = ticket.tasks.some(
      task => task.status === tasks_status_enum.finished
    );

    if (isCompleted || !ticket.tasks.length) return 'Completed';
  }

  if (ticket.tasks && ticket.tasks.length) {
    const isCancelled = ticket.tasks.some(
      task => task.status === tasks_status_enum.cancelled
    );

    if (isCancelled) return 'Cancelled';
  }

  if (ticket.tasks.length) {
    const internalReview = ticket.tasks.some(task =>
      [
        tasks_status_enum.internal_review,
        tasks_status_enum.needs_changes,
      ].includes(task.status)
    );

    if (internalReview) return 'Internal review';
  }

  if (ticket.tasks.length) {
    const underReview = ticket.tasks.some(task =>
      [
        tasks_status_enum.passed_internal_review,
        tasks_status_enum.client_review,
      ].includes(task.status)
    );

    if (underReview) return 'Under review';
  }

  return 'In progress';
};

const getStatusEnumValue = (status: Array<string>): tickets_bool_exp[] =>
  status.map((s: string) => statusFilterHandlers[s]).filter(s => !!s);

export const getClientRepository = (tickets: fetchClientTickets_tickets[]) => {
  const repositories: string[] = [];

  const getClientRepoFromTask = (tasks: fetchClientTickets_tickets_tasks[]) =>
    tasks.map((task: fetchClientTickets_tickets_tasks) => {
      const { client_repository } = task;
      if (!client_repository) return;

      const { clientRepoUrl } = client_repository;

      if (clientRepoUrl.length) {
        const repoName = clientRepoUrl.split('/').pop();
        if (repoName && !repositories.includes(repoName))
          repositories.push(repoName);
      }
    });

  tickets.map(({ tasks }) => tasks.length && getClientRepoFromTask(tasks));

  return repositories;
};

export const getSortedTicketStatus = (
  tickets: fetchClientTickets_tickets[]
) => {
  const taskStatusList: TicketStatus[] = [];
  tickets.map(ticket => {
    const status = getTicketStatus(ticket);
    taskStatusList.push({
      status,
      sequence: ticketStatusSequence[status],
    });
  });

  return _.sortBy(_.uniqBy(taskStatusList, 'status'), 'sequence');
};

export const getSortedTickets = (tickets: fetchClientTickets_tickets[]) => {
  const sortedTickets: TicketSequence[] = [];
  tickets.map(ticket => {
    const status = getTicketStatus(ticket);
    sortedTickets.push({
      ...ticket,
      sequence: ticketStatusSequence[status],
    });
  });
  return _.sortBy(sortedTickets, 'sequence');
};
