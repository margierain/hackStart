import {
  tasks_status_enum as TS,
  task_reviews_status_enum as TRS,
} from 'lib/graphql/roles/developer/generated/globalTypes';

export const taskStateChanges = {
  [TS.backlog]: [TS.assigned, TS.available, TS.cancelled],
  [TS.assigned]: [TS.in_progress, TS.cancelled, TS.available],
  [TS.available]: [TS.assigned, TS.in_progress, TS.cancelled],
  [TS.in_progress]: [
    TS.internal_review,
    TS.available,
    TS.cancelled,
    TS.client_review,
  ],
  [TS.internal_review]: [
    TS.passed_internal_review,
    TS.needs_changes,
    TS.available,
    TS.cancelled,
    TS.client_review,
  ],
  [TS.passed_internal_review]: [
    TS.client_review,
    TS.needs_changes,
    TS.cancelled,
    TS.finished,
  ],
  [TS.client_review]: [TS.finished, TS.needs_changes, TS.cancelled],
  [TS.cancelled]: [TS.available],
  [TS.needs_changes]: [TS.in_progress, TS.cancelled],
  [TS.finished]: [TS.cancelled, TS.needs_changes],
};

export const taskReviewStateChanges = {
  [TRS.available]: [TRS.assigned, TRS.in_progress, TRS.cancelled],
  [TRS.assigned]: [TRS.in_progress, TRS.cancelled, TRS.available],
  [TRS.in_progress]: [TRS.passed, TRS.failed, TRS.cancelled],
  [TRS.passed]: [TRS.cancelled],
  [TRS.failed]: [TRS.cancelled],
  [TRS.cancelled]: [TRS.available],
};
