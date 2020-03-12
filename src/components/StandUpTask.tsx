import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import { useFormik } from 'formik';
import {
  Card,
  Grid,
  CardContent,
  Typography,
  Divider,
  Input,
  Paper,
  colors,
} from '@material-ui/core';
import {
  KeyboardDatePicker,
  MaterialUiPickersDate,
} from '@material-ui/pickers';
import { Theme } from 'template/theme';
import { StandUpTaskType } from 'lib/types';
import { tasks_status_enum as TS } from 'lib/graphql/roles/developer/generated/globalTypes';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(0.5),
  },
  paper: {
    flexGrow: 1,
    padding: theme.spacing(0.5, 2),
    marginTop: theme.spacing(2),
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 3),
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  input: {
    width: '80%',
  },
  taskDetail: {
    padding: theme.spacing(1.5, 4),
  },
  taskETA: {
    margin: theme.spacing(0, 2),
  },
}));

type Props = {
  task: StandUpTaskType;
  className?: string;
  name: string;
  updateStandupStore: (payload: {
    taskId: number;
    updatedETA?: MaterialUiPickersDate;
    summary?: string;
    taskUserStandupId?: number;
  }) => void;
};

export const taskStateColorMap: { [key: string]: string | undefined } = {
  [TS.assigned]: colors.grey[600],
  [TS.in_progress]: colors.yellow[500],
  [TS.internal_review]: colors.amber[700],
  [TS.passed_internal_review]: colors.green[400],
  [TS.needs_changes]: colors.red[500],
};

const Standup = ({
  task,
  className = undefined,
  name,
  updateStandupStore,
  ...rest
}: Props) => {
  const classes = useStyles();

  const form = useFormik({
    initialValues: {
      selectedDate: null,
      summary: '',
    },
    onSubmit: () => {},
  });

  const onETAChange = (date: MaterialUiPickersDate) => {
    updateStandupStore({
      ...task,
      updatedETA: date,
    });
    form.setFieldValue('selectedDate', date);
  };

  const onSummaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateStandupStore({
      ...task,
      summary: e.target.value,
    });
    form.setFieldValue('summary', e.target.value);
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <Grid
        alignItems="center"
        container
        justify="space-between"
        className={classes.taskDetail}
      >
        <Grid item>
          <Typography variant="h5">{task.title}</Typography>
          <Typography variant="body2">Title</Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h5"
            style={{
              color: taskStateColorMap[task.status],
            }}
          >
            {task.status.replace(/_/g, ' ')}
          </Typography>
          <Typography variant="body2">Task status</Typography>
        </Grid>
      </Grid>
      <CardContent className={classes.content}>
        <Paper className={classes.paper} elevation={1}>
          <Input
            className={classes.input}
            defaultValue={task.summary}
            multiline
            name={name}
            disableUnderline
            onChange={onSummaryChange}
            onBlur={form.handleBlur}
            placeholder={`What's the update for the task`}
            required
          />
        </Paper>
        <Grid className={classes.taskETA}>
          <KeyboardDatePicker
            margin="normal"
            minDate={moment()}
            disablePast
            id="date-picker-dialog"
            label="ETA"
            format="MM/DD/YYYY"
            onChange={onETAChange}
            required
            value={
              form.values.selectedDate ||
              (task.updatedETA ? moment(task.updatedETA) : null)
            }
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
        <Divider className={classes.divider} />
      </CardContent>
    </Card>
  );
};

export default Standup;
