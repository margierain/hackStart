import React, { useState, useEffect } from 'react';
import { NextPageContext } from 'next';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'template/theme';
import { useAuth } from 'components/auth';
import { Dashboard } from 'components/layouts/Dashboard';
import { fetchTicketsByTicketCodeVariables } from 'lib/graphql/roles/developer/generated/fetchTicketsByTicketCode';
import { FETCH_CLIENT_TICKETS_BY_TICKETCODE } from 'lib/graphql/roles/developer/queries';
import { useQuery } from 'lib/client/utils';
import Page from 'components/Page';

import TicketDetails from './Ticket';
import { TicketPropsType } from 'lib/types';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3),
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2),
  },
  title: {
    position: 'relative',
    '&:after': {
      position: 'absolute',
      bottom: -8,
      left: 0,
      content: '" "',
      height: 3,
      width: 48,
      backgroundColor: theme.palette.primary.main,
    },
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
  },
}));

interface Props {
  className?: string;
  ticketCode: string;
}

const TaskOverviewPage = (props: Props) => {
  const { ticketCode } = props;
  const ctx = useAuth('developer', true);
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);

  const { data, error } = useQuery<
    TicketPropsType,
    fetchTicketsByTicketCodeVariables
  >({
    ctx,
    role: 'developer',
    variables: {
      ticketCode,
    },
    query: FETCH_CLIENT_TICKETS_BY_TICKETCODE,
  });

  useEffect(() => {
    if (data || error) setIsLoading(false);
  }, [data, error]);

  const ticket = data && data.tickets && data.tickets.length && data.tickets[0];

  return (
    <Dashboard loading={isLoading}>
      <Page className={classes.root}>
        {ticket && <TicketDetails ticket={ticket} />}
      </Page>
    </Dashboard>
  );
};

TaskOverviewPage.getInitialProps = async function(ctx: NextPageContext) {
  const { query } = ctx;
  const { ticketCode } = query;

  return { ticketCode };
};

export default TaskOverviewPage;
