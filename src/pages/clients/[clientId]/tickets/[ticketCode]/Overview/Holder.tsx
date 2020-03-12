import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  List,
  Link,
  ListItem,
  Typography,
  colors,
} from '@material-ui/core';
import { Theme } from 'template/theme';
import RouterLink from 'template/utils/link';
import getInitials from 'template/utils/getInitials';
import {
  fetchTicketDetailsByTicketCode_tickets_tasks,
  fetchTicketDetailsByTicketCode_tickets,
} from 'lib/graphql/roles/client/generated/fetchTicketDetailsByTicketCode';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  header: {
    paddingBottom: 0,
  },
  content: {
    paddingTop: 0,
  },
  listItem: {
    padding: theme.spacing(2, 0),
    justifyContent: 'space-between',
  },
  technology: {
    color: '#3f51b5',
  },
  avatar: {
    backgroundColor: colors.red[600],
  },
}));

type Props = {
  ticket: fetchTicketDetailsByTicketCode_tickets;
  task: fetchTicketDetailsByTicketCode_tickets_tasks;
};

const getETA = (ticket: fetchTicketDetailsByTicketCode_tickets) => {
  if (ticket.completedAt) {
    return {
      title: 'Completed At',
      updatedAt: ticket.completedAt,
    };
  }
  if (ticket.completedAt) {
    return {
      title: 'Cancelled At',
      updatedAt: ticket.cancelledAt,
    };
  }

  if (ticket.ticket_daily_standups.length > 0) {
    return {
      title: 'ETA',
      updatedAt: ticket.ticket_daily_standups[0].updatedETA,
    };
  }
  return {};
};

const getLatestUpdate = (ticket: fetchTicketDetailsByTicketCode_tickets) => {
  let updateTime;
  if (ticket.ticket_daily_standups.length > 0) {
    updateTime = moment(ticket.ticket_daily_standups[0].updatedAt).format(
      'DD MMM YYYY'
    );
  } else {
    updateTime = moment(ticket.updatedAt).format('DD MMM YYYY');
  }
  return updateTime;
};

const Holder: React.FC<Props> = props => {
  const { ticket, task } = props;
  const classes = useStyles();
  let user: any;
  if (task) {
    if (ticket.managerId) {
      user = task.developerByManagerid;
    } else {
      user = task.developerByDeveloperid;
    }
  }

  const eta = getETA(ticket);
  return (
    <Card className={clsx(classes.root)}>
      {task && (
        <CardHeader
          avatar={
            <Avatar
              alt="Author"
              className={classes.avatar}
              // src={ticket.author.avatar}
            >
              {getInitials(user.firstName ? user.firstName : '')}
            </Avatar>
          }
          className={classes.header}
          disableTypography
          subheader={
            <Typography>
              {user.firstName ? user.firstName : ''}{' '}
              {user.lastName ? user.lastName : ''}
            </Typography>
          }
          title={
            <Typography display="block" variant="overline">
              {ticket.managerId ? 'PROJECT MANAGER' : 'PRIMARY DEVELOPER'}
            </Typography>
          }
        />
      )}
      <CardContent className={classes.content}>
        <List>
          {Object.keys(eta).length > 0 && (
            <ListItem className={classes.listItem} disableGutters divider>
              <Typography variant="subtitle2">{eta.title}</Typography>
              <Typography variant="h6">
                {eta.updatedAt
                  ? moment(eta.updatedAt).format('DD MMM YYYY')
                  : 'N/A'}
              </Typography>
            </ListItem>
          )}
          <ListItem className={classes.listItem} disableGutters divider>
            <Typography variant="subtitle2">Cost in Credits</Typography>
            <Typography variant="h6">
              {ticket.costInCredits ? ticket.costInCredits : 'N/A'}
            </Typography>
          </ListItem>

          {ticket.startedAt && (
            <ListItem className={classes.listItem} disableGutters divider>
              <Typography variant="subtitle2">Started At</Typography>
              <Typography variant="h6">
                {moment(ticket.startedAt).format('DD MMM YYYY')}
              </Typography>
            </ListItem>
          )}
          {ticket.invoiceId && (
            <ListItem className={classes.listItem} disableGutters divider>
              <Typography variant="subtitle2">Billed In</Typography>
              <Typography variant="h6">
                <Link
                  color="inherit"
                  component={RouterLink}
                  href="/clients/[clientId]/invoices/[invoicesId]"
                  as={`/clients/${ticket.clientId}/invoices/${ticket.invoiceId}`}
                  variant="h6"
                >
                  Invoice #{ticket.invoiceId}
                </Link>
              </Typography>
            </ListItem>
          )}
          <ListItem className={classes.listItem} disableGutters>
            <Typography variant="subtitle2">Latest Update</Typography>
            <Typography variant="h6">{getLatestUpdate(ticket)}</Typography>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default Holder;
