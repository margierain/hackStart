import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, colors, Button } from '@material-ui/core';
import { useRouter } from 'next/router';
import { Theme } from 'template/theme';
import { Label } from 'template/components';
import {
  tasks_status_enum as TS,
  tasks_insert_input,
  tasks_type_enum,
} from 'lib/graphql/roles/developer/generated/globalTypes';
import { fetchTaskDetails_tasks } from 'lib/graphql/roles/developer/generated/fetchTaskDetails';
import { useAuthContext } from 'components/auth';
import { useMutation } from 'lib/client/utils';
import {
  INSERT_NEW_TASK,
  UPDATE_TASK_DEVELOPERID,
} from 'lib/graphql/roles/developer/mutations';
import {
  updateTaskDeveloperId,
  updateTaskDeveloperIdVariables,
} from 'lib/graphql/roles/developer/generated/updateTaskDeveloperId';
import {
  insertNewTask,
  insertNewTaskVariables,
} from 'lib/graphql/roles/developer/generated/insertNewTask';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  label: {
    marginTop: theme.spacing(1),
  },
  actionButton: {
    backgroundColor: colors.green[600],
    color: 'white',
    marginRight: 5,
  },
  primaryButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
}));

const getTaskStatus = (task: fetchTaskDetails_tasks) => {
  if ([TS.internal_review, TS.needs_changes].indexOf(task.status) !== -1) {
    return 'Under internal review';
  }

  if (TS.needs_changes === task.status) {
    return 'Needs further changes';
  }

  if ([TS.passed_internal_review].indexOf(task.status) !== -1) {
    return 'Ready for client review';
  }

  if (task.status === TS.client_review) {
    return 'Under client review';
  }

  if (TS.cancelled === task.status) {
    return 'Cancelled';
  }

  if (TS.finished === task.status) {
    return 'Finished';
  }

  if (TS.assigned === task.status) {
    return 'Ready to start';
  }

  if (TS.available === task.status) {
    return 'Available';
  }

  if (TS.backlog === task.status) {
    return 'Backlog';
  }

  return 'In progress';
};

type Props = {
  task: fetchTaskDetails_tasks;
  onRefresh: () => any;
  setError: (err: Error | null) => any;
};

const Header: React.FC<Props> = props => {
  const { task } = props;
  const classes = useStyles();
  const router = useRouter();
  const ctx = useAuthContext();

  const currentDeveloperId = ctx.user?.developerId
    ? ctx.user?.developerId
    : null;
  const routeToTask = (taskId: number) => {
    router.replace('/tasks/[taskId]', `/tasks/${taskId}`);
  };
  let newTask: tasks_insert_input = {};

  const updateDeveloper = useMutation<
    updateTaskDeveloperId,
    updateTaskDeveloperIdVariables
  >({
    ctx,
    role: 'developer',
    mutation: UPDATE_TASK_DEVELOPERID,
    defaultVariables: {
      taskId: +task.id,
      developerId: currentDeveloperId,
      updatedTaskState: TS.assigned,
    },
    setError: props.setError,
  });

  const addNewTask = useMutation<insertNewTask, insertNewTaskVariables>({
    ctx,
    role: 'developer',
    mutation: INSERT_NEW_TASK,
    defaultVariables: {
      task: [newTask],
    },
    setError: props.setError,
  });

  const onPickUpTask = async (task: fetchTaskDetails_tasks) => {
    if (task.type !== 'challenge') {
      await updateDeveloper.issueMutation({
        taskId: task.id,
        developerId: currentDeveloperId,
        updatedTaskState: TS.assigned,
      });
      props.onRefresh();
    } else {
      newTask.type = tasks_type_enum.challenge;
      newTask.description = task.description;
      newTask.title = task.title;
      newTask.ticketCode = task.ticketCode;
      newTask.costInUSD = task.costInUSD;
      newTask.clientId = task.clientId;
      newTask.managerId = task.managerId;
      newTask.reviewerId = task.reviewerId;
      newTask.developerId = currentDeveloperId;
      newTask.status = TS.assigned;
      newTask.clientRepositoryId = task.clientRepositoryId;
      newTask.isBillable = task.isBillable;
      newTask.duplicateOfTaskId = task.id;

      const response = await addNewTask.issueMutation({
        task: [newTask],
      });
      if (response?.insert_tasks) {
        routeToTask(response?.insert_tasks?.returning[0].id);
      }
    }
  };

  const statusColors = {
    [TS.client_review]: colors.orange[600],
    [TS.internal_review]: colors.orange[600],
    [TS.in_progress]: colors.orange[600],
    [TS.needs_changes]: colors.orange[600],
    [TS.cancelled]: colors.grey[600],
    [TS.finished]: colors.green[600],
    [TS.passed_internal_review]: colors.green[600],
    [TS.backlog]: colors.grey[600],
    [TS.available]: colors.grey[600],
    [TS.assigned]: colors.grey[600],
  };

  const showPickupButton =
    task.status === TS.available &&
    (task.type !== 'challenge' ||
      (task.task_attributes?.remainingduplicatelimit || 0) > 0);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography component="h2" gutterBottom variant="overline">
            {task.ticketCode}
          </Typography>
          <Typography component="h1" gutterBottom variant="h3">
            {task.title}
          </Typography>
          <Label
            className={classes.label}
            color={statusColors[task.status]}
            variant="outlined"
          >
            {getTaskStatus(task)}
          </Label>
        </Grid>
        {showPickupButton && (
          <Grid container item xs={6} justify="flex-end" alignItems="flex-end">
            <div>
              <Button
                disabled={false}
                className={classes.actionButton}
                variant="contained"
                onClick={() => {
                  onPickUpTask(task);
                }}
              >
                Pick Up Task
              </Button>
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Header;
