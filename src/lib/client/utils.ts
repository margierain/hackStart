import {
  fetchInvoiceAndUsage_clients_client_transactions as Transaction,
  fetchInvoiceAndUsage_clients_tickets as Ticket,
  fetchInvoiceAndUsage_clients as Client,
} from 'lib/graphql/roles/client/generated/fetchInvoiceAndUsage';
import Hash from 'object-hash';
import { Context } from 'components/auth';
import { DocumentNode } from 'graphql';
import { useState, useEffect, DependencyList } from 'react';
import { colors } from '@material-ui/core';
import moment from 'moment';
import { FetchResult } from 'apollo-boost';

type GroupedClientTransaction = {
  tickets: Ticket[];
  transaction: Transaction;
  startingBalance: number;
};

type FetchPolicy =
  | 'no-cache'
  | 'cache-first'
  | 'network-only'
  | 'cache-only'
  | 'standby'
  | undefined;
export function useQuery<T, U>(
  opts: {
    ctx: Context;
    query: DocumentNode;
    variables?: U | null;
    role?:
      | 'user'
      | 'client'
      | 'developer'
      | 'recruiter'
      | 'worker'
      | 'agency'
      | 'candidate';
    setError?: (error: Error | null) => any;
    setLoading?: (val: boolean) => any;
    setData?: (data: T | null) => any;
    fetchPolicy?: FetchPolicy;
  },
  deps: DependencyList = []
) {
  const {
    ctx,
    query,
    variables,
    setLoading,
    role,
    setError,
    setData,
    fetchPolicy,
  } = opts;
  const [data, setStateData] = useState<T>();
  const [error, setStateError] = useState<Error | null>(null);
  const [loading, setStateLoading] = useState<boolean>(false);

  async function fetchQuery(
    vars?: U,
    argsFetchPolicy: FetchPolicy = fetchPolicy
  ) {
    const { graphqlClient } = ctx;
    if (!graphqlClient) {
      return;
    }

    try {
      setStateLoading(true);
      if (setLoading) {
        setLoading(true);
      }

      if (variables === null) {
        // this means that variables are defined, but not yet available
        // in which case it should continue to load and run again when they
        // change into something not null
        return;
      }

      const queryVariables = variables || undefined;

      const { data, errors } = await graphqlClient.query<T, U>({
        query,
        variables: vars || queryVariables,
        context: { role: role || ctx.role },
        fetchPolicy: argsFetchPolicy || 'cache-first',
      });

      if (errors && errors[0]) {
        throw errors[0];
      }

      setStateLoading(false);
      if (setLoading) {
        setLoading(false);
      }

      if (setData) {
        setData(data);
      }

      setStateData(data);

      return data;
    } catch (ex) {
      setStateLoading(false);
      if (setLoading) {
        setLoading(false);
      }

      if (setError) {
        setError(ex);
      }
      setStateError(ex);
    }
  }

  useEffect(() => {
    fetchQuery();
  }, [!!ctx.graphqlClient, Hash(variables), ...deps]);

  return {
    error,
    data,
    fetchQuery,
    loading,
  };
}

export function useMutation<T, U, R = U>(opts: {
  ctx: Context;
  mutation: DocumentNode;
  defaultVariables?: U;
  role:
    | 'user'
    | 'client'
    | 'developer'
    | 'recruiter'
    | 'worker'
    | 'agency'
    | 'candidate';
  setError?: (error: Error) => any;
  setLoading?: (val: boolean) => any;
  setData?: (data: T | null) => any;
  awaitRefetchQueries?: boolean;
  refetchQueries?:
    | Array<
        | string
        | {
            query: DocumentNode;
            variables?: R;
            context: { [key: string]: string };
          }
      >
    | ((
        mutationResult: FetchResult
      ) => Array<string | { query: DocumentNode; variables?: R }>);
}) {
  const {
    ctx,
    mutation,
    defaultVariables,
    role,
    setError,
    setData,
    setLoading,
    refetchQueries,
    awaitRefetchQueries,
  } = opts;
  const [data, setStateData] = useState<T>();
  const [error, setStateError] = useState<Error | null>(null);
  const [loading, setStateLoading] = useState<boolean>(false);
  async function issueMutation(vars?: U) {
    const { graphqlClient } = ctx;
    if (!graphqlClient) {
      throw new Error('GraphqlClient not ready');
    }

    try {
      const variables = vars || defaultVariables;
      if (!variables) {
        throw new Error(
          'Please pass either defaultVariables or variables to issueMutation'
        );
      }
      setStateLoading(true);
      if (setLoading) {
        setLoading(true);
      }

      const { data, errors } = await graphqlClient.mutate<T, U>({
        mutation,
        variables,
        context: { role },
        refetchQueries,
        awaitRefetchQueries,
      });

      if (errors && errors[0]) {
        throw errors[0];
      }

      setStateLoading(false);
      if (setLoading) {
        setLoading(false);
      }

      if (!data) {
        return;
      }

      if (setData) {
        setData(data);
      }

      setStateData(data);

      return data;
    } catch (ex) {
      setStateLoading(false);
      if (setLoading) {
        setLoading(false);
      }
      if (setError) {
        setError(ex);
      }
      setStateError(ex);
      throw ex;
    }
  }

  return {
    error,
    data,
    loading,
    issueMutation,
  };
}

export const getTicketCreditCost = (ticket: {
  costInCredits: number | null;
  discount: number | null;
}) =>
  Math.round(
    ((100 - (ticket.discount || 0)) * (ticket.costInCredits || 0)) / 100
  );

export const groupClientTransactions = (client: Client) => {
  return client.client_transactions.reduce(
    ({ pendingTickets, groupedClientTransactions, balance }, tr) => {
      let currentBalance = balance,
        index = 0;
      for (index = 0; index < pendingTickets.length; index++) {
        const ticket = pendingTickets[index];
        const ticketCost = getTicketCreditCost(ticket);

        currentBalance -= ticketCost;

        if (currentBalance - ticketCost + tr.costInCredits < 0) {
          break;
        }
      }

      return {
        balance: currentBalance + tr.costInCredits,
        pendingTickets: pendingTickets.slice(index + 1),
        groupedClientTransactions: [
          ...groupedClientTransactions,
          {
            tickets: pendingTickets.slice(0, index + 1),
            startingBalance: balance,
            transaction: tr,
          },
        ],
      };
    },
    {
      pendingTickets: client.tickets.filter(t => !!t.completedAt),
      groupedClientTransactions: [] as GroupedClientTransaction[],
      balance: 0,
    }
  );
};

export const getClientInvoiceStatus = (opts: {
  currrent_paid_balance_in_usd: number | null;
  previous_balance_in_usd: number | null;
  dueDate: string | null;
  costInUSD: number | null;
}) => {
  const {
    currrent_paid_balance_in_usd: currentPaidBalance,
    previous_balance_in_usd: previousBalance,
    dueDate,
    costInUSD,
  } = opts;
  const invoiceBalance = (currentPaidBalance || 0) - (previousBalance || 0);
  if (costInUSD) {
    switch (true) {
      case invoiceBalance >= costInUSD:
        return 'paid';
      case invoiceBalance > 0 && invoiceBalance < costInUSD:
        return 'partially-paid';
      case dueDate && moment().isBefore(dueDate) && invoiceBalance <= 0:
        return 'needs-payment-soon';
      case dueDate && moment().isAfter(dueDate) && invoiceBalance <= 0:
        return 'needs-payment';
      default:
        return 'needs-payment-soon';
    }
  }
  return 'needs-payment-soon';
};

export const renderInvoiceStatusAndColor = (opts: {
  currrent_paid_balance_in_usd: number | null;
  previous_balance_in_usd: number | null;
  dueDate: string | null;
  costInUSD: number | null;
}) => {
  const status = getClientInvoiceStatus(opts);

  switch (status) {
    case 'paid':
      return { color: colors.green[600], status: 'Paid' };
    case 'partially-paid':
      return { color: colors.orange[600], status: 'Partially Paid' };
    case 'needs-payment-soon':
      return { color: colors.grey[600], status: 'Needs Payment' };
    case 'needs-payment':
      return { color: colors.red[600], status: 'Needs Payment' };
    default:
      return { color: colors.grey[600], status: 'Needs Payment' };
  }
};

export const incoporateDollarSign = (value: number) => {
  if (value === 0) {
    return 0;
  }
  if (value > 0) {
    return '$' + value.toFixed(2);
  } else {
    return '-$' + (value / -1).toFixed(2);
  }
};
