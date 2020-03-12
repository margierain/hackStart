import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'template/theme';
import Page from 'components/Page';
import { Dashboard } from 'components/layouts/Dashboard';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';
import { NextPageContext } from 'next';
import Header from './Header';
import Overview from './Overview/Overview';
import { FETCH_CLIENT_TICKETS_BY_TICKETCODE } from 'lib/graphql/roles/client/queries';
import { useAuth } from 'components/auth';
import {
  fetchTicketDetailsByTicketCode,
  fetchTicketDetailsByTicketCodeVariables,
} from 'lib/graphql/roles/client/generated/fetchTicketDetailsByTicketCode';
import Error500 from 'template/views/Error500';
import Error404 from 'template/views/Error404';
import { useQuery } from 'lib/client/utils';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3),
  },
  tabs: {
    marginTop: theme.spacing(3),
  },
  divider: {
    backgroundColor: colors.grey[300],
  },
  alert: {
    marginTop: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(3),
  },
}));

type Props = {
  ticketCode: string;
  tab: string;
  clientId: string;
};

export default function TicketDetailsPage({
  ticketCode,
  tab,
  clientId,
}: Props) {
  const classes = useStyles();

  const ctx = useAuth('client', true);
  const { data, error } = useQuery<
    fetchTicketDetailsByTicketCode,
    fetchTicketDetailsByTicketCodeVariables
  >({
    ctx,
    role: 'client',
    query: FETCH_CLIENT_TICKETS_BY_TICKETCODE,
    variables: {
      ticketCode,
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

  if (!data || !data.tickets) {
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

  if (!data || data.tickets!.length === 0) {
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

  const ticket = data.tickets[0];

  const handleTabsChange = (event: any, value: string) => {
    // router.push(value);
    console.log(event, value);
  };

  const tabs = [
    { value: 'overview', label: 'Overview' },
    // { value: 'tasks', label: 'Tasks' },
  ];

  if (!tab || !tabs.find(t => t.value === tab)) {
    tab = 'overview';
  }

  const brief = ticket.description ? ticket.description : '';

  return (
    <Dashboard
      selected={{
        type: 'client',
        clientId,
      }}
    >
      <Page className={classes.root}>
        <Header ticket={ticket} />
        <Tabs
          className={classes.tabs}
          onChange={handleTabsChange}
          scrollButtons="auto"
          value={tab}
          variant="scrollable"
        >
          {tabs.map(tab => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
        <Divider className={classes.divider} />
        <div className={classes.content}>
          {tab === 'overview' && (
            <Overview brief={brief} ticket={ticket} clientId={clientId} />
          )}
        </div>
      </Page>
    </Dashboard>
  );
}

TicketDetailsPage.getInitialProps = async function(ctx: NextPageContext) {
  const { query } = ctx;
  const { ticketCode, clientId } = query;
  return { ticketCode, clientId };
};
