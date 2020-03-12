import React from 'react';
import clsx from 'clsx';
import RouterLink from 'template/utils/link';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
  colors,
} from '@material-ui/core';

import getInitials from 'template/utils/getInitials';
import { Theme } from 'template/theme';
import { Label } from 'template/components';
import { fetchClientTickets_tickets } from 'lib/graphql/roles/client/generated/fetchClientTickets';
import { getTicketStatus } from 'lib/client/filters';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(2),
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexWrap: 'wrap',
    },
    '&:last-child': {
      paddingBottom: theme.spacing(2),
    },
  },
  header: {
    width: '90%',
    display: 'flex',
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
      flexBasis: '100%',
    },
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  title: {
    whiteSpace: 'pre-wrap',
  },
  stats: {
    maxWidth: '130px',
    whiteSpace: 'nowrap',
    padding: theme.spacing(2, 4),
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%',
    },
  },
  credits: {
    fontWeight: 'bold',
  },
  actions: {
    maxWidth: '130px',
    padding: theme.spacing(2, 4),
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%',
    },
  },
  info: {
    marginTop: theme.spacing(1),
  },
}));

type Props = {
  ticket: fetchClientTickets_tickets;
  handleViewTicket: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  className?: string;
  clientId: string;
};

const TicketStat = (props: { value: string }) => {
  const classes = useStyles();

  return (
    <div className={classes.stats}>
      <Typography
        className={classes.credits}
        variant="h6"
      >{`${props.value} Credits`}</Typography>
    </div>
  );
};

const TicketCard: React.FC<Props> = props => {
  const {
    ticket,
    clientId,
    className = undefined,
    handleViewTicket,
    ...rest
  } = props;
  const classes = useStyles();

  const statusColors = {
    'Not started': colors.red[600],
    'Internal review': colors.orange[600],
    'Under review': colors.orange[600],
    'In progress': colors.orange[600],
    Cancelled: colors.grey[600],
    Completed: colors.green[600],
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <div className={classes.header}>
          {false && (
            <Avatar
              alt="Author"
              className={classes.avatar}
              src={'ticket.author.avatar'}
            >
              {getInitials('ticket.author.name')}
            </Avatar>
          )}
          <div>
            <Link
              color="textPrimary"
              component={RouterLink}
              className={classes.title}
              noWrap
              variant="h5"
              href="/clients/[clientId]/tickets/[ticketCode]"
              as={`/clients/${clientId}/tickets/${ticket.code}`}
            >
              {ticket.title}
            </Link>
            <Typography variant="body2" className={classes.info}>
              Ticket Code:{' '}
              <Link
                href={ticket.ticketLink || '#'}
                target="_blank"
                color="textPrimary"
                component={'a'}
                variant="h6"
              >
                {ticket.code}
              </Link>
            </Typography>
          </div>
        </div>
        {ticket.costInCredits !== null && (
          <TicketStat value={ticket.costInCredits.toString()} />
        )}
        <div className={classes.stats}>
          <Label
            className={classes.label}
            color={statusColors[getTicketStatus(ticket)]}
            variant="outlined"
          >
            {getTicketStatus(ticket)}
          </Label>
        </div>
        <div className={classes.actions}>
          <Button
            onClick={handleViewTicket}
            color="primary"
            size="small"
            variant="outlined"
          >
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TicketCard;
