import React, { useState } from 'react';
import clsx from 'clsx';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useRouter } from 'next/router';
import { Theme } from 'template/theme';
import Error500 from 'template/views/Error500';
import AvailableTaskCard from 'components/TaskList/AvailableTaskCard';
import { useAuth } from 'components/auth';
import { Dashboard } from 'components/layouts/Dashboard';
import Page from 'components/Page';
import Filter from 'components/TaskFilter';
import {
  fetchAvailableTasks_tasks as Task,
  fetchAvailableTasks as Tasks,
} from 'lib/graphql/roles/developer/generated/fetchAvailableTasks';
import { FETCH_AVAILABLE_TASKS } from 'lib/graphql/roles/developer/queries';
import { useQuery } from 'lib/client/utils';
import { TaskChipsFilterType, TasksFilterMultiSelectType } from 'lib/types';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingTop: 0,
  },
  headerContainer: {
    position: 'fixed',
    display: 'flex',
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    flexDirection: 'column',
    zIndex: theme.zIndex.speedDial,
    backgroundColor: '#F4F6F8',
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  title: {
    position: 'relative',
    '&:after': {
      position: 'absolute',
      bottom: -8,
      left: 0,
      content: '" "',
      height: 2,
      width: 60,
      backgroundColor: theme.palette.primary.main,
    },
    marginBottom: theme.spacing(4),
  },
  tasksLists: {
    paddingTop: theme.spacing(12),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  tasksSection: {
    paddingTop: theme.spacing(5),
  },
}));

const AvailableTaskList = (props: { className?: string }) => {
  const ctx = useAuth('developer', true);
  const router = useRouter();

  const [filter, setFilter] = useState<string[]>([]);
  const [filterSelects, setFilterSelects] = useState<
    TasksFilterMultiSelectType[]
  >([]);

  const classes = useStyles();

  const { data, error, loading } = useQuery<Tasks, object>({
    ctx,
    role: 'developer',
    variables: {},
    query: FETCH_AVAILABLE_TASKS,
    setData: data => onTasksDataReceived(data),
  });

  const onTasksDataReceived = (data: Tasks | null) => {
    console.log(data);
    let technologiesNames = new Set<string>();
    data?.tasks.forEach(task =>
      task.task_technologies.forEach(tech => {
        technologiesNames.add(tech.technology.name);
      })
    );

    const technologySelects: TasksFilterMultiSelectType[] = [
      { label: 'technology', options: Array.from(technologiesNames) },
    ];
    setFilterSelects(technologySelects);
  };

  const { className = undefined, ...rest } = props;

  if (loading) {
    return <Dashboard loading={true}></Dashboard>;
  }

  if (error) {
    return (
      <Dashboard loading={false}>
        <Error500 error={error} />
      </Dashboard>
    );
  }

  if (!data?.tasks || data?.tasks.length === 0) {
    return <Dashboard></Dashboard>;
  }

  const handleFilter = (filterData: TaskChipsFilterType) => {
    let keywords: string[] = [];
    // @ts-ignore
    Object.entries(filterData).map(([key, value]) => {
      if (value) {
        keywords.push(...value);
      }
    });
    setFilter(keywords);
  };

  const renderTaskSection = (tasks: Task[] | undefined, challenge: boolean) => {
    const filteredTasks: Task[] = [];
    tasks &&
      tasks.forEach(task => {
        if (filter.length !== 0) {
          task.task_technologies.forEach(task_technology => {
            if (filter.includes(task_technology.technology.name)) {
              filteredTasks.push(task);
            }
          });
        } else {
          filteredTasks.push(task);
        }
      });

    const sectionTasks =
      filteredTasks &&
      (challenge
        ? filteredTasks.filter(task => task.type === 'challenge')
        : filteredTasks.filter(task => task.type !== 'challenge'));

    return renderTasks(sectionTasks, challenge ? 'challenges' : 'tasks');
  };

  const renderTasks = (
    tasks: Task[] | undefined,
    tasksType: 'tasks' | 'challenges'
  ) => {
    if (tasks && tasks.length !== 0) {
      return (
        <div className={classes.tasksSection}>
          <Typography className={classes.title} variant="h5">
            {`Showing ${tasks.length} ${tasksType}`}
          </Typography>
          <Grid container spacing={3}>
            {tasks &&
              tasks.map(task => (
                <Grid item key={task.id} md={4} sm={6} xs={12}>
                  <AvailableTaskCard
                    task={task}
                    handleViewTask={() => router.push(`/tasks/${task.id}`)}
                  />
                </Grid>
              ))}
          </Grid>
        </div>
      );
    }
  };

  return (
    <Dashboard loading={false}>
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.headerContainer}>
          <Grid item>
            <Typography component="h1" variant="h3">
              Available Tasks
            </Typography>
          </Grid>
          <Grid item>
            <Filter onFilter={handleFilter} selects={filterSelects} />
          </Grid>
        </Grid>
      </div>

      <Page className={classes.root}>
        <div {...rest} className={clsx(classes.root, className)}>
          <div className={classes.tasksLists}>
            {renderTaskSection(data?.tasks, false)}
            {renderTaskSection(data?.tasks, true)}
          </div>
        </div>
      </Page>
    </Dashboard>
  );
};

export default AvailableTaskList;
