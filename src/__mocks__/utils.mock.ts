import { tasks_status_enum as TS } from 'lib/graphql/roles/admin/generated/globalTypes';

export const fetchUnCompletedTasksAndTaskReviews = {
  data: {
    task_reviews: [
      {
        __typename: 'task_reviews',
        id: 228,
        managerId: 'test.manager',
        developerId: 'hamza.zia',
        costInUSD: 48,
        task: {
          __typename: 'tasks',
          status: TS.in_progress,
          id: 28,
          title: 'test',
          ticketCode: 'TEST-123-123-123',
          task_daily_standups: [
            {
              __typename: 'task_daily_standups',
              id: 1,
              summary: 'Test',
              updatedETA: '12/06/1996',
            },
          ],
        },
      },
    ],
    tasks: [
      {
        __typename: 'tasks',
        id: 198,
        developerId: 'test.developer',
        title: 'Tests branch',
        ticketCode: 'GSE-213',
        status: TS.assigned,
        managerId: 'test.developer',
        costInUSD: 120,
        task_daily_standups: [
          {
            __typename: 'task_daily_standups',
            id: 1,
            summary: 'test',
            updatedETA: '11/09/1996',
          },
        ],
      },
      {
        __typename: 'tasks',
        developerId: 'test',
        id: 171,
        title: 'test',
        managerId: 'test',
        ticketCode: 'TEST-123-123-123',
        status: TS.finished,
        costInUSD: 240,
        task_daily_standups: [
          {
            __typename: 'task_daily_standups',
            updatedETA: '12/12/1996',
            id: 1,
            summary: 'test',
          },
        ],
      },
    ],
    user_daily_standups: [
      {
        __typename: 'user_daily_standups',
        summary: 'test',
      },
    ],
  },
};
