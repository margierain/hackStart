import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Divider } from '@material-ui/core';
import Page from 'components/Page';
import { Theme } from 'template/theme';
import Header from './Header/Header';
import Details from './Details/Details';
import { Dashboard } from 'components/layouts/Dashboard';
import { NextPageContext } from 'next';
import { useAuth } from 'components/auth';
import { useQuery } from 'lib/client/utils';
import Error500 from 'template/views/Error500';
import {
  fetchClientInvoicesAndBalances,
  fetchClientInvoicesAndBalancesVariables,
} from 'lib/graphql/roles/client/generated/fetchClientInvoicesAndBalances';
import { FETCH_CLIENT_INVOICES_AND_BALANCES_AND_TICKETS } from 'lib/graphql/roles/client/queries';
import Error404 from 'template/views/Error404';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

type Props = {
  clientId: string;
  invoicesId: number;
};

const ClientTransactionPage = ({ clientId, invoicesId }: Props) => {
  const classes = useStyles();
  const auth = useAuth('client', true);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<fetchClientInvoicesAndBalances | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const { fetchQuery } = useQuery<
    fetchClientInvoicesAndBalances,
    fetchClientInvoicesAndBalancesVariables
  >({
    ctx: auth,
    role: 'client',
    setError,
    setData,
    setLoading,
    query: FETCH_CLIENT_INVOICES_AND_BALANCES_AND_TICKETS,
    variables: {
      clientId,
      invoicesId,
    },
  });

  if (error) {
    return (
      <Dashboard
        selected={{
          type: 'client',
          clientId,
        }}
      >
        <Error500 error={error} />
      </Dashboard>
    );
  }

  if (!data || !data.client_invoices_with_balance) {
    return (
      <Dashboard
        selected={{
          type: 'client',
          clientId,
        }}
        loading
      >
        <Page className={classes.root}> </Page>
      </Dashboard>
    );
  }
  const invoice = data.client_invoices_with_balance[0];

  if (!invoice) {
    return (
      <Dashboard
        selected={{
          type: 'client',
          clientId,
        }}
      >
        <Error404 />
      </Dashboard>
    );
  }

  return (
    <Dashboard
      selected={{
        type: 'client',
        clientId,
        onPaymentComplete: fetchQuery,
      }}
      loading={loading}
    >
      <Page className={classes.root}>
        <Header invoice={invoice} />
        <Divider className={classes.divider} />
        <Details invoice={invoice} />
      </Page>
    </Dashboard>
  );
};

ClientTransactionPage.getInitialProps = async function(ctx: NextPageContext) {
  const { query } = ctx;
  const { invoicesId, clientId } = query;

  return { clientId, invoicesId };
};

export default ClientTransactionPage;
