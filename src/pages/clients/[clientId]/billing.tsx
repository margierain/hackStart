import React, { useState } from 'react';
import NextLink from 'next/link';
import { NextPageContext } from 'next';
import Error500 from 'template/views/Error500';
import moment from 'moment';
import { Theme } from 'template/theme';
import { Dashboard } from 'components/layouts/Dashboard';
import Page from 'components/Page';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  Typography,
  TableHead,
  TableRow,
  colors,
  Tabs,
  Tab,
} from '@material-ui/core';

import { Label, GenericMoreButton } from 'template/components';
import { useAuth } from 'components/auth';
import {
  client_transaction_status_enum as TS,
  client_transaction_types_enum as TT,
} from 'lib/graphql/roles/client/generated/globalTypes';
import { FETCH_CLIENT_INVOICES_WITH_BALANCES_AND_TRANSACTIONS } from 'lib/graphql/roles/client/queries';
import {
  fetchClientInvoicesWithBalanceAndTransactions,
  fetchClientInvoicesWithBalanceAndTransactionsVariables,
  fetchClientInvoicesWithBalanceAndTransactions_client_invoices_with_balance,
} from 'lib/graphql/roles/client/generated/fetchClientInvoicesWithBalanceAndTransactions';
import { useQuery, renderInvoiceStatusAndColor } from 'lib/client/utils';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(3),
    padding: 0,
  },
  inner: {},
  title: {
    marginBottom: theme.spacing(3),
  },
}));

const tabs = [
  { label: 'Invoices', value: 'invoices' },
  { label: 'Transactions', value: 'transactions' },
];

type Props = {
  clientId: string;
};

const ClientBillingPage = ({ clientId }: Props) => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState<string>(tabs[0].value);
  const [loading, setLoading] = useState(false);
  const [
    data,
    setData,
  ] = useState<fetchClientInvoicesWithBalanceAndTransactions | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const auth = useAuth('client', true);
  const { fetchQuery } = useQuery<
    fetchClientInvoicesWithBalanceAndTransactions,
    fetchClientInvoicesWithBalanceAndTransactionsVariables
  >({
    ctx: auth,
    role: 'client',
    setLoading,
    setError,
    setData,
    query: FETCH_CLIENT_INVOICES_WITH_BALANCES_AND_TRANSACTIONS,
    variables: {
      clientId,
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

  if (!data) {
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

  const invoices = data.client_invoices_with_balance;
  const transactions = data.client_transactions;

  const statusColors = {
    [TS.cancelled]: colors.grey[600],
    [TS.pending]: colors.orange[600],
    [TS.in_progress]: colors.green[600],
    [TS.successful]: colors.green[600],
    [TS.failed]: colors.red[600],
  };

  const statusName = {
    [TS.cancelled]: 'Cancelled',
    [TS.pending]: 'Needs Payment',
    [TS.in_progress]: 'Payment In Progress',
    [TS.successful]: 'Successful',
    [TS.failed]: 'Failed',
  };

  const transactionTypeName = {
    [TT.stripe]: 'Stripe',
    [TT.hk_bank]: 'Bank Transfer (HK)',
    [TT.gb_bank]: 'Bank Transfer (GB)',
    [TT.us_bank]: 'Bank Transfer (US)',
    [TT.eu_bank]: 'Bank Transfer (EU)',
    [TT.transferwise]: 'Transferwise',
    [TT.paypal]: 'PayPal',
  };

  if (!transactions || !invoices) {
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

  const getInvoiceStatusAndColor = (
    invoice: fetchClientInvoicesWithBalanceAndTransactions_client_invoices_with_balance
  ) => {
    const invoiceStatusObj = renderInvoiceStatusAndColor({
      currrent_paid_balance_in_usd: +(
        invoice.currrent_paid_balance_in_usd || 0
      ),
      previous_balance_in_usd: +(invoice.previous_balance_in_usd || 0),
      dueDate: invoice.dueAt,
      costInUSD: invoice.costInUSD,
    });

    return (
      <Label color={invoiceStatusObj.color} variant="outlined">
        {invoiceStatusObj.status}
      </Label>
    );
  };

  const renderTabContent = () => {
    if (activeTab === 'transactions') {
      return (
        <Card className={classes.content}>
          <CardHeader
            action={null && <GenericMoreButton />}
            title="Past Transactions"
          />
          <Divider />
          <CardContent>
            <PerfectScrollbar>
              <div className={classes.inner}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell size="small">Transaction Date</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell size="small">Payment Method</TableCell>
                      <TableCell size="small">Total</TableCell>
                      <TableCell size="small">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {transactions.map(tr => (
                      <TableRow key={tr.id}>
                        <TableCell>
                          {moment(tr.transactedAt).format('MMM YY')}
                        </TableCell>
                        <TableCell>
                          {tr.costInCredits} Credits under GitStart Growth Plan
                        </TableCell>
                        <TableCell>
                          {transactionTypeName[tr.channelType]}
                        </TableCell>
                        <TableCell>${tr.costInUSD} USD</TableCell>
                        <TableCell>
                          <Label
                            color={statusColors[tr.status]}
                            variant="outlined"
                          >
                            {statusName[tr.status]}
                          </Label>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </PerfectScrollbar>
          </CardContent>
        </Card>
      );
    } else {
      return (
        <Card className={classes.content}>
          <CardHeader action={null && <GenericMoreButton />} title="Invoices" />
          <Divider />
          <CardContent>
            <PerfectScrollbar>
              <div className={classes.inner}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell size="small">Invoice Date</TableCell>
                      <TableCell>Cost</TableCell>
                      <TableCell>Credits Purchased</TableCell>
                      <TableCell>Credits Consumed</TableCell>
                      <TableCell size="small">Status</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {invoices.map(invoice => (
                      <TableRow key={invoice.id || 0}>
                        <TableCell>
                          {moment(invoice.dueAt || undefined).format('MMM YY')}
                        </TableCell>
                        <TableCell>$ {invoice.costInUSD} USD</TableCell>
                        <TableCell>{invoice.costInCredits}</TableCell>
                        <TableCell>
                          {invoice.consumed_balance_in_credits || 0}
                        </TableCell>
                        <TableCell>
                          {getInvoiceStatusAndColor(invoice)}
                        </TableCell>
                        <TableCell>
                          <NextLink
                            as={`/clients/${clientId}/invoices/${invoice.id}`}
                            href="/clients/[clientId]/invoices/[invoicesId]"
                          >
                            <Button
                              color="primary"
                              size="small"
                              variant="outlined"
                            >
                              View
                            </Button>
                          </NextLink>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </PerfectScrollbar>
          </CardContent>
        </Card>
      );
    }
  };

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
        <div>
          <Typography component="h1" variant="h3" className={classes.title}>
            Billing
          </Typography>
        </div>
        <Tabs
          value={activeTab}
          onChange={(_event, newValue) => setActiveTab(newValue)}
          aria-label="transactions and invoices tabs"
        >
          {tabs.map(tab => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
        {renderTabContent()}
      </Page>
    </Dashboard>
  );
};

ClientBillingPage.getInitialProps = async function(ctx: NextPageContext) {
  const { query } = ctx;
  const { clientId } = query;
  return { clientId };
};

export default ClientBillingPage;
