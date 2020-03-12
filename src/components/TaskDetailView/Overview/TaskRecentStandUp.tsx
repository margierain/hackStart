import React from 'react';
import { NextPageContext } from 'next';
import { Theme } from 'template/theme';
import { makeStyles } from '@material-ui/styles';
import { Card, List, ListItem, Typography, colors } from '@material-ui/core';
import { fetchTaskDetails_tasks_task_daily_standups } from 'lib/graphql/roles/developer/generated/fetchTaskDetails';
import { size } from 'lodash';
import moment from 'moment';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  timeAgo: {
    color: colors.grey[600],
  },
  listItem: {
    justifyContent: 'space-between',
  },
}));

type Props = {
  taskStandUpDetail: fetchTaskDetails_tasks_task_daily_standups[];
};

const TaskRecentStandUp = ({ taskStandUpDetail }: Props) => {
  const classes = useStyles();

  if (size(taskStandUpDetail) === 0) {
    return null;
  }
  const lastIndex = size(taskStandUpDetail) - 1;
  return (
    <Card className={classes.content}>
      <List>
        <ListItem className={classes.listItem} disableGutters>
          <Typography variant="subtitle2">
            {taskStandUpDetail[lastIndex].summary}
          </Typography>
          <Typography className={classes.timeAgo}>
            {moment(taskStandUpDetail[lastIndex].submittedAt).fromNow()}
          </Typography>
        </ListItem>
      </List>
    </Card>
  );
};

TaskRecentStandUp.getInitialProps = async function(ctx: NextPageContext) {
  const { query } = ctx;
  const { taskStandUpDetail } = query;

  return { taskStandUpDetail };
};

export default TaskRecentStandUp;
