import React, { useState, ChangeEvent } from 'react';
import { NextPageContext } from 'next';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'template/theme';
import Page from 'components/Page';
import {
  Tabs,
  Tab,
  Divider,
  colors,
  Typography,
  Grid,
  LinearProgress,
} from '@material-ui/core';

import { useAuth } from 'components/auth';
import { Dashboard } from 'components/layouts/Dashboard';
import { useQuery } from 'lib/client/utils';

import { StandupContext } from 'components/Standup/StandupContainer';
import TasksStandup from 'components/Standup/Tasks';
import TicketsCard from 'components/Standup/Tickets';
import ClientsCard from 'components/Standup/Clients';
import UsersCard from 'components/Standup/Users';
import {
  fetchDeveloperStandupOverview,
  fetchDeveloperStandupOverviewVariables,
} from 'lib/graphql/roles/developer/generated/fetchDeveloperStandupOverview';
import { FETCH_DEVELOPER_STANDUP_OVERVIEW } from 'lib/graphql/roles/developer/queries';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(2),
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
    marginTop: theme.spacing(0),
  },
}));

type Props = {
  developerId: string;
};

const tabs = [
  {
    value: 'tasks',
    label: 'Tasks',
  },
  {
    value: 'tickets',
    label: 'Tickets',
  },
  {
    value: 'clients',
    label: 'Clients',
  },
  {
    value: 'user',
    label: 'User',
  },
];

const StandupPage = (props: Props) => {
  const developerId = props.developerId;
  const classes = useStyles();
  const ctx = useAuth('developer', true);

  const [tab, setTab] = useState('tasks');
  const [refresh, setRefresh] = useState(0);
  const [loading, setLoading] = useState(false);
  const [userAvatar, setUserAvatar] = useState<string | null>(null);

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string) => {
    if (value !== tab) setTab(value);
  };

  useQuery<
    fetchDeveloperStandupOverview,
    fetchDeveloperStandupOverviewVariables
  >(
    {
      ctx,
      query: FETCH_DEVELOPER_STANDUP_OVERVIEW,
      role: 'developer',
      variables: ctx.user
        ? {
            userId: ctx.user.id,
          }
        : null,
      setData: data => {
        if (!data || !data.users.length) return;

        const user = data.users[0];
        setUserAvatar(user?.avatarUrl || '');
      },
    },
    [!!ctx.user]
  );

  if (!ctx.user || !ctx.user.developerId || !ctx.user.id)
    return <Dashboard loading selected={{ type: 'developer', developerId }} />;

  const { id: userId } = ctx.user;

  return (
    <StandupContext.Provider
      value={{
        refresh,
        setRefresh: () => setRefresh(prev => prev + 1),
        setLoading,
        userAvatar,
      }}
    >
      <Dashboard loading={false} selected={{ type: 'developer', developerId }}>
        {loading && <LinearProgress />}
        <Grid container>
          <Grid item xs={12} lg={11}>
            <Page className={classes.root}>
              <Typography component="h1" variant="h3">
                Standup
              </Typography>
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
                <TasksStandup
                  developerId={developerId}
                  userId={userId}
                  active={tab === 'tasks'}
                />
                <TicketsCard
                  developerId={developerId}
                  userId={userId}
                  active={tab === 'tickets'}
                />
                <ClientsCard
                  developerId={developerId}
                  userId={userId}
                  active={tab === 'clients'}
                />

                <UsersCard
                  developerId={developerId}
                  userId={userId}
                  active={tab === 'user'}
                />
              </div>
            </Page>
          </Grid>
        </Grid>
      </Dashboard>
    </StandupContext.Provider>
  );
};

StandupPage.getInitialProps = async function(ctx: NextPageContext) {
  const { query } = ctx;
  const { developerId } = query;

  return { developerId };
};

export default StandupPage;
