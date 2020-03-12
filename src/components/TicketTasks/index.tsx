import React from 'react';
import _ from 'lodash';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'template/theme';
import {
  Card,
  CardHeader,
  CardContent,
  List,
  Divider,
} from '@material-ui/core';
import {
  fetchTicketDetailsByTicketCode_tickets_tasks,
  fetchTicketDetailsByTicketCode_tickets_tasks_task_reviews_developer,
} from 'lib/graphql/roles/client/generated/fetchTicketDetailsByTicketCode';
import TaskItem from './TaskItem';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 400,
  },
  actions: {
    justifyContent: 'flex-end',
  },
  arrowForwardIcon: {
    marginLeft: theme.spacing(1),
  },
}));

const getallDevelopers = (
  tasks: fetchTicketDetailsByTicketCode_tickets_tasks[]
) => {
  let developers: fetchTicketDetailsByTicketCode_tickets_tasks_task_reviews_developer[] = [];
  if (tasks.length) {
    tasks.forEach(task => {
      if (task.developerByDeveloperid) {
        developers.push(task.developerByDeveloperid);
      }
      if (task.developerByManagerid) {
        developers.push(task.developerByManagerid);
      }
      if (task.developerByReviewerid) {
        developers.push(task.developerByReviewerid);
      }
      task.task_reviews.forEach(reviews => {
        if (reviews.developer) {
          developers.push(reviews.developer);
        }
        if (reviews.developerByDeveloperid) {
          developers.push(reviews.developerByDeveloperid);
        }
      });
    });
  }
  developers = _.uniqBy(developers, o => o.githubId);
  return developers;
};

type Props = {
  tasks: fetchTicketDetailsByTicketCode_tickets_tasks[];
  className?: string;
};

const TeamTasks: React.FC<Props> = props => {
  const { className, tasks } = props;
  const classes = useStyles();
  const developers = tasks.length > 0 ? getallDevelopers(tasks) : [];
  return (
    <Card className={clsx(classes.root, className)}>
      <CardHeader title="Coding Tasks" />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <List>
              {tasks.map((task, i) => (
                <TaskItem
                  divider={i < tasks.length - 1}
                  key={task.id}
                  task={task}
                  developers={developers}
                />
              ))}
            </List>
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

export default TeamTasks;
