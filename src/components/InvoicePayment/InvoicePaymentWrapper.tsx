import React, { useState, useEffect } from 'react';
import { useQuery } from 'lib/client/utils';
import { useAuthContext } from 'components/auth';
import { FETCH_CLIENT_DUE_INVOICES_AGGREGATE } from 'lib/graphql/roles/client/queries';
import {
  fetchClientDueInvoicesAggregate,
  fetchClientDueInvoicesAggregateVariables,
  fetchClientDueInvoicesAggregate_client_transactions_aggregate,
  fetchClientDueInvoicesAggregate_client_invoices_aggregate,
} from 'lib/graphql/roles/client/generated/fetchClientDueInvoicesAggregate';

type Props = {
  children: React.ReactNode;
  clientId?: string;
  verify?: number;
};

type AggregatesType =
  | fetchClientDueInvoicesAggregate_client_invoices_aggregate
  | fetchClientDueInvoicesAggregate_client_transactions_aggregate;

const sumAggregate = (aggregates: AggregatesType) => {
  const { aggregate } = aggregates;

  const { sum } = aggregate || { sum: { costInUSD: 0 } };

  return sum?.costInUSD || 0;
};

const isClientOwing = (aggregates?: fetchClientDueInvoicesAggregate | null) => {
  if (!aggregates) return false;

  const {
    client_transactions_aggregate,
    client_invoices_aggregate,
  } = aggregates;

  return (
    sumAggregate(client_transactions_aggregate) -
      sumAggregate(client_invoices_aggregate) <
    0
  );
};

const InvoicePaymentWrapper: React.FC<Props> = (props: Props) => {
  const ctx = useAuthContext();
  const [oweMoney, setOweMoney] = useState(false);

  const { children, clientId, verify } = props;

  const { fetchQuery } = useQuery<
    fetchClientDueInvoicesAggregate,
    fetchClientDueInvoicesAggregateVariables
  >(
    {
      ctx,
      role: 'client',
      query: FETCH_CLIENT_DUE_INVOICES_AGGREGATE,
      variables: clientId ? { clientId } : null,
      setData: data => {
        setOweMoney(isClientOwing(data));
      },
      setError: error => console.log(error),
    },
    [clientId]
  );

  useEffect(() => {
    fetchQuery();
  }, [verify]);

  return <>{oweMoney && children}</>;
};

export default InvoicePaymentWrapper;
