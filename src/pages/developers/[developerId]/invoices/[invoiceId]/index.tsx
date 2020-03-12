import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Divider } from '@material-ui/core';
import Page from 'components/Page';
import { Theme } from 'template/theme';
import Header from './Header/Header';
import Details from './Details/Details';
import { NextPageContext } from 'next';
import { useAuth } from 'components/auth';
//import moment from 'moment';
import Error500 from 'template/views/Error500';
import Error404 from 'template/views/Error404';
import { FETCH_USER_INVOICES } from 'lib/graphql/roles/developer/queries';
import {
  fetchUserInvoice,
  fetchUserInvoiceVariables,
} from 'lib/graphql/roles/developer/generated/fetchUserInvoice';
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
    margin: theme.spacing(1, 0, 2, 0),
  },
}));

type Props = {
  developerId: string;
  invoiceId: number;
};

const DeveloperInvoicePage = ({ developerId, invoiceId }: Props) => {
  const classes = useStyles();

  const ctx = useAuth('developer', true);

  const { error, loading, data: invoiceDetails } = useQuery<
    fetchUserInvoice,
    fetchUserInvoiceVariables
  >({
    query: FETCH_USER_INVOICES,
    variables: { id: invoiceId },
    role: 'developer',
    ctx,
  });

  if (error) {
    return (
      <Dashboard loading={false} developerId={developerId}>
        <Error500 error={error} />
      </Dashboard>
    );
  }

  if (loading || !invoiceDetails) {
    return (
      <Dashboard loading={true} developerId={developerId}>
        <Page className={classes.root} />
      </Dashboard>
    );
  }

  const invoices = invoiceDetails.user_invoice_balances;
  const invoice = invoices[0];
  if (!invoice) {
    return (
      <Dashboard loading={false} developerId={developerId}>
        <Error404 />
      </Dashboard>
    );
  }

  return (
    <Dashboard loading={false} developerId={developerId}>
      <Page className={classes.root}>
        <Header
          invoiceCode={
            invoice.invoiceCode ? invoice.invoiceCode : invoice.id?.toString()
          }
        />
        <Divider className={classes.divider} />
        <Details
          invoice={invoiceDetails}
          invoiceBalance={invoice}
          developerId={developerId}
        />
      </Page>
    </Dashboard>
  );
};

DeveloperInvoicePage.getInitialProps = async function(ctx: NextPageContext) {
  const { query } = ctx;
  const { developerId, invoiceId } = query;

  return { developerId, invoiceId };
};

export default DeveloperInvoicePage;
