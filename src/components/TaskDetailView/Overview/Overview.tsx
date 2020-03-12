import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Theme } from 'template/theme';
import Holder from './Holder';
import Reviews from './Reviews';
import PRView from './PRView';
import TaskRecentStandUp from './TaskRecentStandUp';
import Brief from 'template/views/ProjectDetails/Overview/Brief';
import { fetchTaskDetails_tasks } from 'lib/graphql/roles/developer/generated/fetchTaskDetails';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  deliverables: {
    marginTop: theme.spacing(3),
  },
  members: {
    marginTop: theme.spacing(3),
  },
}));

type Props = {
  task: fetchTaskDetails_tasks;
};

const Overview: React.FC<Props> = props => {
  const { task } = props;

  const classes = useStyles();
  const taskReview = task.task_reviews;
  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid item lg={8} xl={9} xs={12}>
        <TaskRecentStandUp taskStandUpDetail={task.task_daily_standups} />
        <PRView task={task} />
        <Brief brief={task.description} isHTML={true} />
      </Grid>
      <Grid item lg={4} xl={3} xs={12}>
        <Holder task={task} />
        <Reviews className={classes.members} taskReviews={taskReview} />
      </Grid>
    </Grid>
  );
};

export default Overview;
