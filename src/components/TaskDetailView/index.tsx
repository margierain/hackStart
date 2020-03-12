import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'template/theme';
import Page from 'components/Page';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';
import { NextPageContext } from 'next';
import Header from './Header';
import Overview from './Overview/Overview';
import { useAuth } from 'components/auth';
import Error500 from 'template/views/Error500';
import Error404 from 'template/views/Error404';
import { FETCH_TASK_DETAILS } from 'lib/graphql/roles/developer/queries';
import {
  fetchTaskDetails,
  fetchTaskDetailsVariables,
} from 'lib/graphql/roles/developer/generated/fetchTaskDetails';
import { Dashboard } from 'components/layouts/Dashboard';
import { useQuery } from 'lib/client/utils';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3),
  },
  tabs: {
    marginTop: theme.spacing(3),
  },
  divider: {
    backgroundColor: colors.grey[300],
  },
  alert: {
    marginTop: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(3),
  },
}));

type Props = {
  taskId: string;
  role: 'developer' | 'client' | 'user';
};

export default function TaskDetailsPage({ taskId, role }: Props) {
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<fetchTaskDetails | null>(null);
  const classes = useStyles();
  const ctx = useAuth(role, true);

  const { fetchQuery } = useQuery<fetchTaskDetails, fetchTaskDetailsVariables>({
    ctx,
    role,
    query: FETCH_TASK_DETAILS,
    setError,
    setData,
    variables: {
      taskId: +taskId,
    },
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    fetchQuery();
  }, [+taskId]);

  if (error) {
    return (
      <Dashboard loading={false}>
        <Error500 error={error} />
      </Dashboard>
    );
  }

  if (!data || !data.tasks) {
    return (
      <Dashboard loading>
        <Page className={classes.root}> </Page>
      </Dashboard>
    );
  }

  const tasks = data.tasks;
  if (tasks.length === 0) {
    return (
      <Dashboard loading={false}>
        <Error404 />
      </Dashboard>
    );
  }

  const task = tasks[0];

  const handleTabsChange = (event: any, value: string) => {
    console.log(event, value);
  };

  const tabs = [{ value: 'overview', label: 'Overview' }];
  let tab = 'overview';

  return (
    <Dashboard loading={false}>
      <Page className={classes.root}>
        <Header
          task={task}
          setError={setError}
          onRefresh={() => fetchQuery()}
        />
        <Tabs
          className={classes.tabs}
          onChange={handleTabsChange}
          scrollButtons="auto"
          value={tab}
          variant="scrollable"
        >
          {tabs.map(tab => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
        <Divider className={classes.divider} />
        <div className={classes.content}>
          {tab === 'overview' && <Overview task={task} />}
        </div>
      </Page>
    </Dashboard>
  );
}

TaskDetailsPage.getInitialProps = async function(ctx: NextPageContext) {
  const { query } = ctx;
  const { taskId } = query;
  return { taskId };
};
