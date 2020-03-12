import React from 'react';
import clsx from 'clsx';
import { Theme } from 'template/theme';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardContent,
  Link,
  Typography,
  colors,
} from '@material-ui/core';

import { tasks_status_enum } from 'lib/graphql/roles/developer/generated/globalTypes';

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
    maxWidth: '115px',
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

export type Task = {
  id: number;
  title: string;
  status: tasks_status_enum;
  costInUSD: number;
  completedAt: any | null;
  clientId?: string;
  ticket: {
    ticketLink: string | null;
    code: string;
  } | null;
};

type Props = {
  task: Task;
  handleViewTask: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  className?: string;
};

const TicketStat = (props: { title: string; value: string }) => {
  const classes = useStyles();

  return (
    <div className={classes.stats}>
      <Typography variant="h6" align="center">
        {props.value}
      </Typography>
      <Typography variant="body2" align="center">
        {props.title}
      </Typography>
    </div>
  );
};

const TaskCard: React.FC<Props> = props => {
  const { task, className, handleViewTask, ...rest } = props;

  const classes = useStyles();

  return (
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
              {task.title}
            </Link>

            {task.ticket ? (
              <Typography variant="body2">
                Ticket Code:{' '}
                <Link
                  href={task.ticket.ticketLink || '#'}
                  target="_blank"
                  color="textPrimary"
                  component={'a'}
                  variant="h6"
                >
                  {task.ticket.code}
                </Link>
              </Typography>
            ) : null}
          </div>
        </div>
        <TicketStat
          title="Cost In USD"
          value={task.costInUSD ? task.costInUSD.toString() : 'N/A'}
        />
        <div className={classes.stats}>
          <Typography
            style={{
              color: colors.orange[600],
            }}
            align="center"
          >
            {task.status.replace(/_/g, ' ')}
          </Typography>
          <Typography variant="body2" align="center">
            Task status
          </Typography>
        </div>
        <div className={classes.actions}>
          <Button
            onClick={handleViewTask}
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

export default TaskCard;
