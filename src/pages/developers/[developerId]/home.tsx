import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'template/theme';
import { Typography } from '@material-ui/core';
import { NextPageContext } from 'next';
import { size } from 'lodash';
import Error500 from 'template/views/Error500';
import InfoBar from 'components/InfoBar';
import Page from 'components/Page';
import { Dashboard } from 'components/layouts/Dashboard';
import { useAuth } from 'components/auth';

import { useQuery } from 'lib/client/utils';
import TaskCategory from './TaskCategory';
import { FETCH_DEVELOPER_OVERVIEW } from 'lib/graphql/roles/developer/queries';
import {
  fetchDeveloperOverview,
  fetchDeveloperOverviewVariables,
} from 'lib/graphql/roles/developer/generated/fetchDeveloperOverview';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  results: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  infoBar: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  info: {
    marginBottom: theme.spacing(1),
  },
}));

type Props = { developerId: string };
const DeveloperHomePage = function({ developerId }: Props) {
  const ctx = useAuth('developer', true);
  const classes = useStyles();

  const { data, error } = useQuery<
    fetchDeveloperOverview,
    fetchDeveloperOverviewVariables
  >({
    ctx,

    role: 'developer',
    query: FETCH_DEVELOPER_OVERVIEW,
    variables: {
      developerId,
    },
  });

  if (error) {
    return (
      <Dashboard loading={false} selected={{ type: 'developer', developerId }}>
        <Error500 error={error} />
      </Dashboard>
    );
  }
  if (!data || !data.developers.length) {
    return (
      <Dashboard loading selected={{ type: 'developer', developerId }}>
        <Page className={classes.root}> </Page>
      </Dashboard>
    );
  }
  const developer = data.developers[0];
  // const numberOfTasks = developer.tasks.length;
  const hasContract = size(developer.developer_contracts) > 0;

  const greetingText = () => {
    const now = moment();
    const currentHour = now.local().hour();
    if (currentHour >= 12 && currentHour <= 17) return 'Good Afternoon';
    else if (currentHour <= 18) return 'Good Evening';
    else return 'Good Morning';
  };

  const candidateGrettings = (firstName: string) => {
    return (
      <>
        <Typography component="h1" variant="h3" className={classes.info}>
          {greetingText()}, {firstName}
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="subtitle2"
          className={classes.info}
        >
          Your account is currently under review. GitStart will reach out over
          email shortly.
        </Typography>
        <InfoBar
          className={classes.infoBar}
          statistics={[
            {
              title: 'Current Stage',
              value: 'Setup',
            },
            {
              title: 'Tasks Assigned',
              value: '0',
            },
            {
              title: 'Total Earnings',
              value: '$0',
            },
            {
              title: 'Positions Qualified',
              value: '0',
            },
          ]}
        />
      </>
    );
  };

  return (
    <Dashboard loading={false} selected={{ type: 'developer', developerId }}>
      <Page className={classes.root}>
        {!hasContract ? candidateGrettings(developer.firstName || '') : null}
        {size(developer.tasks) > 0 ? (
          <>
            <div className={classes.results}>
              <Typography component="h1" variant="h3">
                Tasks
              </Typography>
            </div>
            <TaskCategory tasks={developer.tasks} />
          </>
        ) : null}
      </Page>
    </Dashboard>
  );
};

DeveloperHomePage.getInitialProps = async function(ctx: NextPageContext) {
  const { query } = ctx;
  const { developerId } = query;

  return { developerId };
};

export default DeveloperHomePage;
