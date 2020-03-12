import React from 'react';
import clsx from 'clsx';
import { Theme } from 'template/theme';
import { makeStyles } from '@material-ui/styles';
import { Button, Card, CardContent, Link, Typography } from '@material-ui/core';
import { fetchTicketDetailsByTicketCode_tickets } from 'lib/graphql/roles/client/generated/fetchTicketDetailsByTicketCode';

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
    maxWidth: '100%',
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
    minWidth: '115px',
    whiteSpace: 'nowrap',
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%',
    },
  },
  actions: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%',
    },
  },
}));

type Props = {
  className: string;
  ticket: fetchTicketDetailsByTicketCode_tickets;
};

const Deliverables: React.FC<Props> = props => {
  const { ticket, className = undefined, ...rest } = props;
  const classes = useStyles();

  return (
    <div>
      {ticket.tasks.map(data => (
        <Card {...rest} className={clsx(classes.root, className)}>
          <CardContent className={classes.content}>
            <div className={classes.header}>
              <div>
                <Link
                  color="textPrimary"
                  component={'a'}
                  className={classes.title}
                  noWrap
                  variant="h5"
                  href="#"
                >
                  {data.prLink}
                </Link>
                <Typography variant="body2">
                  branch Name:{' '}
                  <Link
                    href={ticket.ticketLink || '#'}
                    target="_blank"
                    color="textPrimary"
                    component={'a'}
                    variant="h6"
                  >
                    {data.branchName}
                  </Link>
                </Typography>
              </div>
            </div>

            <div className={classes.actions}>
              <Button color="primary" size="small" variant="outlined">
                View
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Deliverables;
