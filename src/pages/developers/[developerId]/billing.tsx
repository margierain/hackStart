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
  Hidden,
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

import { Label } from 'template/components';
import { useAuth } from 'components/auth';
import {
  client_transaction_status_enum as TS,
  client_invoice_status_enum as IS,
} from 'lib/graphql/roles/client/generated/globalTypes';
import { FETCH_DEVELOPERS_PAYMENTS_AND_INVOICES } from 'lib/graphql/roles/developer/queries';
import {
  fetchDevelopersPaymentsAndInvoices,
  fetchDevelopersPaymentsAndInvoicesVariables,
  fetchDevelopersPaymentsAndInvoices_user_invoices,
} from 'lib/graphql/roles/developer/generated/fetchDevelopersPaymentsAndInvoices';
import { useQuery } from 'lib/client/utils';

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
    padding: '20px 0',
  },
  cardSpacing: {
    '@media (max-width: 480px)': {
      padding: 0,
    },
  },
  labelStyle: {
    '@media (max-width: 480px)': {
      paddingRight: 0,
    },
  },
}));

type Props = {
  developerId: string;
};

const tabs = [
  { label: 'Invoices', value: 'invoices' },
  { label: 'Transactions', value: 'payments' },
];

enum DeveloperInvoiceStatusEnum {
  needs_payment = 'needs_payment',
  partially_paid = 'partially_paid',
  paid = 'paid',
}

const DeveloperBillingPage = ({ developerId }: Props) => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  const auth = useAuth('developer', true);
  const { error, data } = useQuery<
    fetchDevelopersPaymentsAndInvoices,
    fetchDevelopersPaymentsAndInvoicesVariables
  >({
    ctx: auth,
    role: 'developer',

    query: FETCH_DEVELOPERS_PAYMENTS_AND_INVOICES,
    variables: {
      developerId,
    },
  });

  if (error) {
    return (
      <Dashboard
        loading={false}
        selected={{
          type: 'developer',
          developerId,
        }}
      >
        <Error500 error={error} />
      </Dashboard>
    );
  }

  if (!data || !data.user_invoices) {
    return (
      <Dashboard loading developerId={developerId}>
        <Page className={classes.root}> </Page>
      </Dashboard>
    );
  }

  const payments = data.user_payments;
  const invoices = data.user_invoices;

  if (!payments) {
    return (
      <Dashboard
        loading
        selected={{
          type: 'developer',
          developerId,
        }}
      >
        <Page className={classes.root}> </Page>
      </Dashboard>
    );
  }

  if (!invoices) {
    return (
      <Dashboard
        loading={false}
        selected={{
          type: 'developer',
          developerId,
        }}
      >
        <Page className={classes.root}> </Page>
      </Dashboard>
    );
  }

  const statusColors = {
    [TS.pending]: colors.orange[600],
    [TS.in_progress]: colors.green[600],
    [TS.successful]: colors.green[600],
    [TS.failed]: colors.red[600],
    [IS.complete]: colors.green[600],
    [IS.draft]: colors.yellow[600],
  };

  const invoiceStatusColor = {
    [DeveloperInvoiceStatusEnum.partially_paid]: colors.orange[600],
    [DeveloperInvoiceStatusEnum.paid]: colors.green[600],
    [DeveloperInvoiceStatusEnum.needs_payment]: colors.red[600],
  };

  const statusName = {
    [TS.pending]: 'Needs Payment',
    [TS.in_progress]: 'Payment In Progress',
    [TS.successful]: 'Successful',
    [TS.failed]: 'Failed',
  };

  const invoiceStatusName = {
    [DeveloperInvoiceStatusEnum.needs_payment]: 'NEEDS PAYMENT',
    [DeveloperInvoiceStatusEnum.partially_paid]: 'PARTIALLY PAID',
    [DeveloperInvoiceStatusEnum.paid]: 'PAID',
  };

  const handleTabChange = (event: any, newValue: any) => {
    console.log(event);
    setActiveTab(newValue);
  };

  const returnStatus = (
    invoice: fetchDevelopersPaymentsAndInvoices_user_invoices
  ) => {
    let currentPreviousBalanceDiff =
      (invoice.user_invoice_balance?.current_paid_balance_in_usd || 0) -
      +(invoice.user_invoice_balance?.previous_invoiced_balance_in_usd || 0);
    let statusType = DeveloperInvoiceStatusEnum.needs_payment;

    if (currentPreviousBalanceDiff >= invoice.costInUSD) {
      statusType = DeveloperInvoiceStatusEnum.paid;
    }
    if (
      currentPreviousBalanceDiff > 0 &&
      currentPreviousBalanceDiff < invoice.costInUSD
    ) {
      statusType = DeveloperInvoiceStatusEnum.partially_paid;
    }
    if (currentPreviousBalanceDiff <= 0) {
      statusType = DeveloperInvoiceStatusEnum.needs_payment;
    }

    return (
      <TableCell className={classes.labelStyle}>
        <Label color={invoiceStatusColor[statusType]} variant="outlined">
          {invoiceStatusName[statusType]}
        </Label>
      </TableCell>
    );
  };

  const renderTabContent: any = (activeTab: any) => {
    if (activeTab === 'payments') {
      return (
        <Card className={classes.content}>
          <CardHeader title="Payments" />
          <Divider />
          <CardContent className={classes.cardSpacing}>
            <PerfectScrollbar>
              <div className={classes.inner}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell size="small">Date</TableCell>
                      <Hidden xsDown>
                        <TableCell size="small">Payment Type</TableCell>
                      </Hidden>
                      <TableCell size="small">Amount</TableCell>
                      <TableCell size="small">Status</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {payments.map(pay => (
                      <TableRow key={pay.id}>
                        <TableCell>
                          {moment(pay.finishedAt || undefined)
                            .subtract(12, 'hours')
                            .format('DD MMM YY')}
                        </TableCell>
                        <TableCell>{pay.paymentType} </TableCell>
                        <TableCell>$ {pay.amountInUSD} USD</TableCell>
                        <TableCell>
                          <Label
                            color={statusColors[pay.status]}
                            variant="outlined"
                          >
                            {statusName[pay.status]}
                          </Label>
                        </TableCell>
                        <TableCell>
                          <NextLink
                            href={`/developers/${developerId}/payments/${pay.id}`}
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
    } else {
      return (
        <Card className={classes.content}>
          <CardHeader title="Invoices" />
          <Divider />
          <CardContent className={classes.cardSpacing}>
            <PerfectScrollbar>
              <div className={classes.inner}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell size="small" className={classes.labelStyle}>
                        Date
                      </TableCell>
                      <TableCell className={classes.labelStyle}>Cost</TableCell>
                      <Hidden xsDown>
                        <TableCell size="small">Hours Logged</TableCell>
                      </Hidden>
                      <TableCell size="small">Status</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {invoices.map(invoice => (
                      <TableRow key={invoice.id}>
                        <Hidden xsDown>
                          <TableCell>
                            {/* Make sure that the dates on the edge are considered a day before */}
                            {moment(invoice.dueAt || undefined)
                              .subtract(12, 'hours')
                              .format('DD MMM YY')}
                          </TableCell>
                        </Hidden>
                        <Hidden smUp>
                          <TableCell>
                            {/* Make sure that the dates on the edge are considered a day before */}
                            {moment(invoice.dueAt || undefined)
                              .subtract(12, 'hours')
                              .format('MMM')}
                          </TableCell>
                        </Hidden>
                        <Hidden xsDown>
                          <TableCell>
                            $ {invoice.adjustedCostInUSD || invoice.costInUSD}{' '}
                            USD
                          </TableCell>
                        </Hidden>
                        <Hidden smUp>
                          <TableCell>
                            ${invoice.adjustedCostInUSD || invoice.costInUSD}
                          </TableCell>
                        </Hidden>
                        <Hidden xsDown>
                          <TableCell>
                            {invoice.user_invoice_balance
                              ?.hours_logged_in_invoice || 0}
                          </TableCell>
                        </Hidden>
                        {returnStatus(invoice)}
                        <TableCell>
                          <NextLink
                            href={`/developers/${developerId}/invoices/${invoice.id}`}
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
      loading={false}
      selected={{
        type: 'developer',
        developerId,
      }}
    >
      <Page className={classes.root}>
        <div>
          <Typography className={classes.title} component="h1" variant="h3">
            Billing
          </Typography>
        </div>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label="payments and invoices tabs"
        >
          {tabs.map(tab => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </Tabs>

        {renderTabContent(activeTab)}
      </Page>
    </Dashboard>
  );
};

DeveloperBillingPage.getInitialProps = async function(ctx: NextPageContext) {
  const { query } = ctx;
  const { developerId } = query;

  return { developerId };
};

export default DeveloperBillingPage;
