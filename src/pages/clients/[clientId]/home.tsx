import * as React from 'react';
import { NextPageContext } from 'next';
import { useAuth } from 'components/auth';
import { Dashboard } from 'components/layouts/Dashboard';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import PaymentIcon from '@material-ui/icons/PaymentOutlined';
import {
  fetchClientOverview,
  fetchClientOverviewVariables,
  fetchClientOverview_clients_client_invoices,
} from 'lib/graphql/roles/client/generated/fetchClientOverview';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'template/theme';
import Page from 'components/Page';
import InfoBar from 'components/InfoBar';
import StandUpCard from 'components/StandUpCard';

import BlockersCard from 'components/BlockersCard';
import moment from 'moment';
import { DATE_FORMAT } from 'lib/constants';
import Error500 from 'template/views/Error500';
import { useQuery } from 'lib/client/utils';
import Error404 from 'template/views/Error404';
import { Button, Typography } from '@material-ui/core';
import Notifications from 'components/Notifications';
import { getInvoicesAnalytics } from 'components/InvoicePayment';
import { useState } from 'react';
import {
  FETCH_CLIENT_OVERVIEW,
  FETCH_CLIENT_BLOCKERS_BY_CLIENTID,
} from 'lib/graphql/roles/client/queries';
import OnBoardingScreen from 'components/layouts/Dashboard/ClientDashboard/onBoardingScreen';
import {
  fetchClientBlockers,
  fetchClientBlockersVariables,
} from 'lib/graphql/roles/client/generated/fetchClientBlockers';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3),
  },
  statistics: {
    marginTop: theme.spacing(3),
  },
  notifications: {
    marginTop: theme.spacing(6),
  },
  todos: {
    marginTop: theme.spacing(6),
  },
  projects: {},
}));

type Props = { clientId: string };
type PaymentType = {
  open?: boolean;
  paymentType?: string;
};

const ClientHomePage = function({ clientId }: Props) {
  const classes = useStyles();
  const ctx = useAuth('client', true);

  const [paymentType, setPaymentType] = useState<PaymentType>({});
  const [loading, setLoading] = useState(false);

  const { data, error, fetchQuery } = useQuery<
    fetchClientOverview,
    fetchClientOverviewVariables
  >({
    ctx,
    role: 'client',
    query: FETCH_CLIENT_OVERVIEW,
    setLoading,
    setData: () => {
      setPaymentType({});
    },
    variables: {
      clientId,
      warmUpStart: moment()
        .subtract(14, 'days')
        .format(DATE_FORMAT),
      warmUpEnd: moment()
        .subtract(3, 'days')
        .format(DATE_FORMAT),
    },
  });

  const {
    data: clientBlockersData,
    error: clientBlockersError,
    fetchQuery: fetchClientBlockers,
  } = useQuery<fetchClientBlockers, fetchClientBlockersVariables>({
    ctx,
    role: 'client',
    query: FETCH_CLIENT_BLOCKERS_BY_CLIENTID,
    variables: { clientId },
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

  if (!data || !data.clients) {
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

  const client = data.clients[0];
  const current = moment().startOf('day');

  if (!client) {
    return (
      <Dashboard>
        <Page className={classes.root}>
          <Error404 />
        </Page>
      </Dashboard>
    );
  }

  const standUptickets = data.client_daily_standups[0]?.ticket_daily_standups?.map(
    ticketDailyStandUps => {
      return {
        eta: `ETA ${moment
          .duration(
            moment(ticketDailyStandUps.updatedETA, 'YYYY-MM-DD').diff(current)
          )
          .asDays()}D`,
        resourceLink: ticketDailyStandUps.ticket.ticketLink,
        updateText: ticketDailyStandUps.message,
        resourceCode: ticketDailyStandUps.ticket.code,
        done: ticketDailyStandUps.ticket.completedAt === null ? false : true,
      };
    }
  );

  const creditsBalance =
    client.client_transactions.reduce((sum, t) => sum + t.costInCredits, 0) -
    client.tickets
      .filter(t => !!t.completedAt)
      .reduce(
        (sum, t) => sum + ((100 - t.discount) * (t.costInCredits || 0)) / 100,
        0
      );

  const {
    tasks: tasksInProgress,
    distinctDevs,
    pending_transactions,
    client_invoices,
    meetings,
    onBoardedAt,
  } = client;

  const { unPaidInvoices } = getInvoicesAnalytics(client_invoices);

  const lastScheduledMeeting =
    meetings && meetings[0] && meetings[0].scheduledAt;

  const isPastMeeting = lastScheduledMeeting
    ? moment(lastScheduledMeeting).isBefore(moment.now())
    : false;

  const lastScheduledMeetingDate = lastScheduledMeeting
    ? moment(lastScheduledMeeting).format('Do MMM')
    : undefined;

  const isAlreadyOnBoarded = onBoardedAt
    ? moment(onBoardedAt).isBefore(moment.now())
    : false;
  const onBoardingMeetingDate = onBoardedAt
    ? moment(onBoardedAt).format('Do MMM')
    : null;
  const onBoardingMeetingTime = onBoardedAt
    ? moment(onBoardedAt).format('HH:mma')
    : null;

  return (
    <Dashboard
      selected={{
        type: 'client',
        clientId,
        openPayment: paymentType.open,
        paymentType: paymentType.paymentType,
        setOpenPayment: (value: boolean) =>
          setPaymentType(prev => ({ ...prev, open: value })),
        onPaymentComplete: fetchQuery,
      }}
      loading={loading}
    >
      <Page className={classes.root}>
        <OnBoardingScreen
          displayButton={!onBoardedAt}
          displayMessage={isAlreadyOnBoarded}
        >
          <Typography variant="body1" component="p">
            Your account is not yet activated. An onboarding session is
            scheduled to setup your account on{' '}
            <span style={{ fontWeight: 'bold' }}>{onBoardingMeetingDate}</span>{' '}
            at{' '}
            <span style={{ fontWeight: 'bold' }}>{onBoardingMeetingTime}</span>
          </Typography>
        </OnBoardingScreen>
        <InfoBar
          className={classes.statistics}
          statistics={[
            {
              title: 'Upcoming Meeting',
              value: isPastMeeting ? 'N/A' : lastScheduledMeetingDate || 'N/A',
            },
            { title: 'Credit Balance', value: creditsBalance.toString() },
            {
              title: 'Tasks In Progress',
              value: tasksInProgress.length.toString(),
            },
            {
              title: 'Onboarded Developers',
              value: distinctDevs.length.toString(),
            },
          ]}
        />
        <Notifications
          className={classes.notifications}
          notifications={[
            ...(pending_transactions.length
              ? [
                  {
                    id: 'bank_transfer',
                    icon: <SyncAltIcon />,
                    value: pending_transactions.length,
                    as: 'transfer',
                    onClick: () =>
                      setPaymentType({
                        paymentType: 'transaction',
                        open: true,
                      }),
                    component: Button,
                    title: 'Bank Transfer',
                    message: 'Needs confirmation',
                  },
                ]
              : []),
            ...(unPaidInvoices.length
              ? [
                  {
                    id: 'invoice',
                    icon: <PaymentIcon />,
                    value: unPaidInvoices.length,
                    as: 'invoice',
                    onClick: () =>
                      setPaymentType({ paymentType: 'invoice', open: true }),
                    component: Button,
                    title: 'invoices',
                    message: `totalling ${unPaidInvoices.reduce(
                      (
                        sum: number,
                        inv: fetchClientOverview_clients_client_invoices
                      ) => sum + inv.costInUSD,
                      0
                    )} USD credits need payment`,
                  },
                ]
              : []),
          ]}
        />
        {standUptickets ? (
          <StandUpCard
            className={classes.todos}
            headerText={`Latest Update: ${moment().format('LL')}`}
            updates={standUptickets}
          />
        ) : null}
        <BlockersCard
          clientId={clientId}
          className={classes.todos}
          headerText="Pending Blockers"
          error={clientBlockersError}
          fetchQuery={fetchClientBlockers}
          blockers={clientBlockersData?.client_blockers}
        />
      </Page>
    </Dashboard>
  );
};

ClientHomePage.getInitialProps = async function(ctx: NextPageContext) {
  const { query } = ctx;
  const { clientId } = query;

  return { clientId };
};

export default ClientHomePage;
