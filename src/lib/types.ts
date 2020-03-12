import { Moment } from 'moment';
import {
  tasks_status_enum,
  tasks_type_enum,
  tickets_bool_exp,
} from './graphql/roles/developer/generated/globalTypes';
import { fetchTicketsByTicketCode_tickets } from 'lib/graphql/roles/developer/generated/fetchTicketsByTicketCode';

import { fetchTaskDetails_tasks } from 'lib/graphql/roles/developer/generated/fetchTaskDetails';
import {
  fetchClientTickets,
  fetchClientTickets_tickets,
} from './graphql/roles/client/generated/fetchClientTickets';

export type RedirectCallbackParam = {
  targetUrl: string;
};

export interface HolidaysResponse {
  developerId: string | undefined;
  userId: number;
  startDate?: string;
  endDate?: string;

  [key: string]: string | number | undefined;
}

export type TimeDoctorAuthCredentials = {
  createdAt?: Moment;
  access_token?: string;
  [key: string]: string | Moment | undefined;
};

type NullAble<T> = T | null;
export type DeepOptional<T> = {
  [P in keyof T]?: T[P] extends NullAble<object>
    ? DeepOptional<T[P]>
    : T[P] extends string
    ? string
    : T[P];
};

export type StandUpTaskType = {
  taskId: number;
  title: string;
  status: tasks_status_enum;
  summary?: string;
  updatedETA?: Moment;
  taskUserStandupId?: number;
};

export type TaskTechnologies = {
  task_technologies: {
    data: [
      {
        technologiesId: number;
        name: string;
      }
    ];
  };
};
export type CustomFormikProps = {
  type: string | tasks_type_enum | null;
  description: string | null;
  title: string;
  clientId: string | null;
  ticketCode: string | null;
  branchName: string | null;
  clientRepositoryId: string | null;
  prLink: string | null;
  developerId: string | null;
  managerId: string | null;
  reviewerId: string | null;
  costInUSD: number | null;
  task_technologies: number | null;
  isBillable: false;
  status: tasks_status_enum;
};
export interface TicketDetails extends fetchTicketsByTicketCode_tickets {
  tasks: Array<fetchTaskDetails_tasks>;
}

export interface TicketPropsType {
  ticket: TicketDetails;
  tickets?: Array<TicketDetails>;
}

export type ParticipantsDetails = {
  firstName?: string;
  lastName?: string;
  participantType?: string;
};

export type TicketFilterMultiSelectType = {
  label: string;
  options: Array<string>;
  name?: string;
};

export type TasksFilterMultiSelectType = {
  label: string;
  options: Array<string> | null;
  name?: string;
};

export type TicketFilterType = {
  keywordFilter?: tickets_bool_exp | null;
  statusFilter?: tickets_bool_exp | null;
  repositoryFilter?: tickets_bool_exp | null;
};

export type FilterDataType = {
  keyword: string[];
  status: string[];
  repo: string[];
};

export type ClienTicketStateType = {
  clientTickets?: fetchClientTickets | null;
  error?: Error | null;
};

export type ClientDueInvoiceType = {
  clientId: string;
  dueAt: any | null;
  costInUSD: number;
  costInCredits: number;
  id: number;
};

export type ClientTransactionType = {
  id: number;
  costInUSD: number;
  costInCredits: number;
  transactedAt: string;
};

export type TicketStatus = {
  status: string;
  sequence: number;
};

export interface TicketSequence extends fetchClientTickets_tickets {
  sequence: number;
}

export type TaskChipsFilterType = {
  technology?: string[];
};
