import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
  colors,
} from '@material-ui/core';
import { Theme } from 'template/theme';
import Label from 'template/components/Label';
import Truncate from 'react-truncate';
import {
  fetchAvailableTasks_tasks as Task,
  fetchAvailableTasks_tasks_developerByManagerid as Manager,
  fetchAvailableTasks_tasks_task_technologies as Technology,
} from 'lib/graphql/roles/developer/generated/fetchAvailableTasks';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    marginBottom: theme.spacing(1),
  },
  header: {
    paddingBottom: 0,
  },
  title: {
    fontWeight: 'bold',
  },
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  description: {
    padding: theme.spacing(2, 3, 1, 3),
    height: theme.spacing(14),
  },
  tags: {
    padding: theme.spacing(0, 3, 1, 3),
    '& > * + *': {
      marginLeft: theme.spacing(1),
    },
    height: theme.spacing(4),
  },
  details: {
    padding: theme.spacing(1, 3),
  },
}));

type Props = {
  task: Task;
  handleViewTask: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  className?: string;
};

const Colors: { [key: string]: string } = {
  react: colors.blue[800],
  nodejs: colors.green[900],
  node: colors.green[900],
  disabled: colors.grey[600],
};

const renderTechnologyTag = (tag: Technology) => {
  const { name, id } = tag.technology;
  const index = name && name.toLowerCase();
  return (
    <Label
      color={Colors[index || 'disabled']}
      key={id}
      style={{ fontSize: 10, padding: 4 }}
    >
      {tag.technology.name}
    </Label>
  );
};

const renderManagerInfo = (developerByManagerid: Manager | null) => {
  const manager = developerByManagerid && developerByManagerid.firstName;

  return (
    <Grid item>
      <Typography color={'textPrimary'} variant="h5">
        {manager ? manager : 'N/A'}
      </Typography>
      <Typography variant="body2">Manager</Typography>
    </Grid>
  );
};

const renderCardDetails = (task: Task) => {
  if (task.type != 'challenge') {
    return (
      <Grid
        alignItems="center"
        container
        justify="space-between"
        spacing={3}
        style={{ marginBottom: '16px' }}
      >
        <Grid item>
          <Typography variant="h5" color={'textPrimary'}>
            {task.costInUSD ? `\u0024${task.costInUSD.toString()}` : 'N/A'}
          </Typography>
          <Typography variant="body2">Cost</Typography>
        </Grid>
        {renderManagerInfo(task?.developerByManagerid)}
        <Grid item>
          <Typography variant="h5" color={'textPrimary'}>
            {task.client.name}
          </Typography>
          <Typography variant="body2">Client</Typography>
        </Grid>
      </Grid>
    );
  }
};

const TaskCard: React.FC<Props> = props => {
  const { task, className = undefined, handleViewTask, ...rest } = props;

  const classes = useStyles();

  const status =
    task.type == 'challenge' &&
    task.task_attributes?.remainingduplicatelimit != null &&
    parseInt(task.task_attributes?.remainingduplicatelimit) < 1;

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        className={classes.header}
        disableTypography
        subheader={
          <Typography component="p" variant="body2">
            Updated: {moment(task.updatedAt).fromNow()}
          </Typography>
        }
        title={
          <Typography
            color={status ? 'textSecondary' : 'textPrimary'}
            component="p"
            variant="subtitle1"
            className={classes.title}
          >
            {task.title}
          </Typography>
        }
      />
      <CardContent className={classes.content}>
        <div className={classes.description}>
          <Typography
            color={status ? 'textSecondary' : 'textPrimary'}
            variant="subtitle2"
          >
            <Truncate lines={4} ellipsis={<span>...</span>}>
              <div dangerouslySetInnerHTML={{ __html: task.description }} />
            </Truncate>
          </Typography>
        </div>
        <div className={classes.tags}>
          {task &&
            task.task_technologies &&
            task.task_technologies.map(tech => renderTechnologyTag(tech))}
        </div>
        <Divider />
        <div className={classes.details}>
          {renderCardDetails(task)}
          <Grid alignItems="center" justify="center" container>
            <Grid item>
              <Button
                onClick={handleViewTask}
                size="medium"
                disabled={status}
                variant="text"
                color="default"
              >
                Learn More
              </Button>
            </Grid>
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
