import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Divider } from '@material-ui/core';
import Page from 'components/Page';
import { Theme } from 'template/theme';
import Header from './Header/Header';
import Details from './Details/Details';
import { NextPageContext } from 'next';
import { useAuth } from 'components/auth';
import Error500 from 'template/views/Error500';
import { FETCH_DEVELOPERS_PAYMENTS as query } from 'lib/graphql/roles/developer/queries';
import Error404 from 'template/views/Error404';
import {
  fetchDevelopersPayments as Payments,
  fetchDevelopersPaymentsVariables as PaymentsVariables,
} from 'lib/graphql/roles/developer/generated/fetchDevelopersPayments';
import { Dashboard } from 'components/layouts/Dashboard';
import { useQuery } from 'lib/client/utils';

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
  developerId: string;
  paymentId: string;
};

const ClientTransactionPage = ({ developerId, paymentId }: Props) => {
  const classes = useStyles();
  const auth = useAuth('developer', true);

  const { error, data } = useQuery<Payments, PaymentsVariables>({
    ctx: auth,
    role: 'developer',
    query,
    variables: { developerId },
  });

  if (error) {
    return (
      <Dashboard loading={false} developerId={developerId}>
        <Error500 error={error} />
      </Dashboard>
    );
  }

  if (!data || data.user_payments.length === 0) {
    return (
      <Dashboard developerId={developerId} loading>
        <Page className={classes.root}> </Page>
      </Dashboard>
    );
  }
  const user_payments = data.user_payments;
  const payment = user_payments.find(
    payment => payment.id.toString() === paymentId
  );

  if (!payment) {
    return (
      <Dashboard loading={false} developerId={developerId}>
        <Error404 />
      </Dashboard>
    );
  }

  return (
    <Dashboard loading={false} developerId={developerId}>
      <Page className={classes.root}>
        <Header payment={payment.channelTransactionId} />
        <Divider className={classes.divider} />
        <Details payment={payment} />
      </Page>
    </Dashboard>
  );
};

ClientTransactionPage.getInitialProps = async function(ctx: NextPageContext) {
  const { query } = ctx;
  const { developerId, paymentId } = query;

  return { developerId, paymentId };
};

export default ClientTransactionPage;
