import React, { useState } from 'react';

import { Tabs, Tab, colors, Typography, Box, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'template/theme';
import Header from './Header';
import Details from './Details';

import { TicketPropsType, TicketDetails } from 'lib/types';
import { useAuthContext } from 'components/auth';
import { useMutation } from 'lib/client/utils';
import { START_TICKET_BY_TICKETCODE } from 'lib/graphql/roles/developer/mutations';
import {
  startTicketByTicketCodeVariables,
  startTicketByTicketCode,
} from 'lib/graphql/roles/developer/generated/startTicketByTicketCode';

const useStyles = makeStyles<Theme>(() => ({
  divider: {
    backgroundColor: colors.grey[300],
  },
}));

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

const getTicketStatus = (ticket: TicketDetails) =>
  ticket.startedAt !== null && ticket.completedAt !== null
    ? 'completed'
    : ticket.startedAt !== null
    ? 'started'
    : 'pending';
const getNextStatus = (status: string) =>
  status === 'started' || status === 'completed' ? 'completed' : 'started';

const TicketDetail: React.FC<TicketPropsType> = (props: TicketPropsType) => {
  const { ticket } = props;

  const classes = useStyles();
  const [tab, switchTab] = useState(0);
  const [ticketStatus, changeTicketStatus] = useState(getTicketStatus(ticket));
  const ctx = useAuthContext();

  const handleChange = (_e: any, value: any) => switchTab(value);

  const { issueMutation: startTicket } = useMutation<
    startTicketByTicketCode,
    startTicketByTicketCodeVariables
  >({
    ctx,
    role: 'developer',
    mutation: START_TICKET_BY_TICKETCODE,
    setData: (data: any) =>
      data?.update_tickets?.affected_rows &&
      changeTicketStatus(getNextStatus(ticketStatus)),
    defaultVariables: {
      ticketCode: ticket.code,
      startedAt: new Date().toJSON(),
    },
  });

  const changeStatus = () => startTicket();

  return (
    <>
      <Header
        changeStatus={changeStatus}
        ticketCode={ticket.code}
        ticketTitle={ticket.title}
        ticketStatus={ticketStatus}
      />
      <Tabs value={tab} onChange={handleChange} aria-label="Ticket">
        <Tab label="Overview" />
      </Tabs>
      <Divider className={classes.divider} />
      <TabPanel value={tab} index={0}>
        <Details ticket={ticket} />
      </TabPanel>
    </>
  );
};

export default TicketDetail;
