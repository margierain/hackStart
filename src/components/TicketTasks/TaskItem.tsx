import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { Theme } from 'template/theme';
import { Label } from 'template/components';
import { makeStyles } from '@material-ui/styles';
import { tasks_status_enum as TS } from 'lib/graphql/roles/client/generated/globalTypes';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  colors,
} from '@material-ui/core';
import StackInitials from 'components/StackInitials';
import {
  fetchTicketDetailsByTicketCode_tickets_tasks,
  fetchTicketDetailsByTicketCode_tickets_tasks_task_reviews_developer,
} from 'lib/graphql/roles/client/generated/fetchTicketDetailsByTicketCode';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  critical: {
    '& $red': {
      borderColor: colors.red[600],
    },
    '& $green': {
      borderColor: colors.green[600],
    },
    '& $grey': {
      borderColor: colors.grey[600],
    },
  },
  red: {
    height: 12,
    width: 12,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: colors.grey[100],
    borderRadius: '50%',
  },
  green: {
    height: 12,
    width: 12,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: colors.grey[100],
    borderRadius: '50%',
  },
  grey: {
    height: 12,
    width: 12,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: colors.grey[100],
    borderRadius: '50%',
  },
  label: {
    marginRight: theme.spacing(2),
  },
  viewButton: {
    marginLeft: theme.spacing(2),
  },
}));

const getTicketStatus = (
  task: fetchTicketDetailsByTicketCode_tickets_tasks
) => {
  const classes = useStyles();
  if (
    [
      TS.assigned,
      TS.in_progress,
      TS.needs_changes,
      TS.internal_review,
      TS.passed_internal_review,
    ].indexOf(task.status) !== -1
  ) {
    return {
      status: 'IN PROGRESS',
      color: classes.red,
      labelColor: colors.red[600],
    };
  }
  if ([TS.client_review].indexOf(task.status) !== -1) {
    return {
      status: 'NEEDS REVIEW',
      color: classes.green,
      labelColor: colors.green[600],
    };
  }
  if ([TS.finished].indexOf(task.status) !== -1) {
    return {
      status: 'COMPLETED',
      color: classes.green,
      labelColor: colors.green[600],
    };
  }

  if ([TS.available].indexOf(task.status) !== -1) {
    return {
      status: 'Needs Triage',
      color: classes.grey,
      labelColor: colors.grey[600],
    };
  }

  if ([TS.cancelled].indexOf(task.status) !== -1) {
    return {
      status: 'CANCELLED',
      color: classes.grey,
      labelColor: colors.grey[600],
    };
  }
  return {
    status: 'IN PROGRESS',
    color: classes.red,
    labelColor: colors.red[600],
  };
};

type Props = {
  task: fetchTicketDetailsByTicketCode_tickets_tasks;
  className?: string;
  divider?: boolean;
  developers: fetchTicketDetailsByTicketCode_tickets_tasks_task_reviews_developer[];
};

const TaskItem: React.FC<Props> = props => {
  const { task, className, developers } = props;
  const classes = useStyles();
  let deadline = null;
  let critical = true;

  if (task.task_daily_standups.length > 0) {
    const now = moment();
    const deadlineMoment = moment(task.task_daily_standups[0].updatedETA);
    if (deadlineMoment.isAfter(now) && deadlineMoment.diff(now, 'day') < 3) {
      deadline = `${deadlineMoment.diff(now, 'day')} days remaining`;
    }
  }
  const taskStatus = getTicketStatus(task);
  return (
    <ListItem
      className={clsx(
        classes.root,
        { [classes.critical]: critical },
        className
      )}
    >
      <ListItemIcon>
        <span className={taskStatus.color} />
      </ListItemIcon>
      <ListItemText
        className={classes.listItemText}
        primary={task.title}
        primaryTypographyProps={{ variant: 'h6', noWrap: false }}
        secondary={deadline}
      />

      <Label
        className={classes.label}
        color={taskStatus.labelColor}
        variant="outlined"
      >
        {taskStatus.status}
      </Label>

      <StackInitials avatars={developers} limit={3} />
      {/* <Tooltip title="View task">
      <IconButton className={classes.viewButton} edge="end" size="small">
        <OpenInNewIcon />
      </IconButton>
    </Tooltip> */}
    </ListItem>
  );
};

export default TaskItem;
