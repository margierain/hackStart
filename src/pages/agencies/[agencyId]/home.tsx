import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'template/theme';
import { NextPageContext } from 'next';

import Error500 from 'template/views/Error500';
import Error404 from 'template/views/Error404';
import Page from 'components/Page';

import { Dashboard } from 'components/layouts/Dashboard';
import { useAuth } from 'components/auth';
import { FETCH_AGENCY_PROFILE } from 'lib/graphql/roles/agency/queries';

import { useQuery } from 'lib/client/utils';
import { Typography } from '@material-ui/core';
import {
  fetchAgencyProfile,
  fetchAgencyProfileVariables,
} from 'lib/graphql/roles/agency/generated/fetchAgencyProfile';

type Props = { agencyId: string };

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  infoBar: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  info: {
    marginBottom: theme.spacing(1),
  },
}));

const AgencyHomePage = function({ agencyId }: Props) {
  const ctx = useAuth('agency', true);
  const classes = useStyles();

  const { data, error } = useQuery<
    fetchAgencyProfile,
    fetchAgencyProfileVariables
  >({
    ctx,

    role: 'agency',
    query: FETCH_AGENCY_PROFILE,
    variables: {
      agencyId: agencyId,
    },
  });

  if (error) {
    return (
      <Dashboard
        loading={false}
        selected={{
          type: 'agency',
          agencyId,
        }}
      >
        <Error500 error={error} />
      </Dashboard>
    );
  }

  if (!data) {
    return (
      <Dashboard
        loading
        selected={{
          type: 'agency',
          agencyId,
        }}
      >
        <Page className={classes.root}> </Page>
      </Dashboard>
    );
  }

  if (data.agencies.length === 0) {
    return (
      <Dashboard
        loading={false}
        selected={{
          type: 'agency',
          agencyId,
        }}
      >
        <Error404 />
      </Dashboard>
    );
  }

  const greetingText = () => {
    const now = moment();
    const currentHour = now.local().hour();
    if (currentHour >= 12 && currentHour <= 17) return 'Good Afternoon';
    else if (currentHour <= 18) return 'Good Evening';
    else return 'Good Morning';
  };

  const agencyName = data.agencies[0].name;

  return (
    <Dashboard
      loading={false}
      selected={{
        type: 'agency',
        agencyId,
      }}
    >
      <Page className={classes.root}>
        <Typography component="h1" variant="h3" className={classes.info}>
          {greetingText()}, {agencyName}
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
      </Page>
    </Dashboard>
  );
};

AgencyHomePage.getInitialProps = async function(ctx: NextPageContext) {
  const { query } = ctx;
  const { agencyId } = query;

  return { agencyId };
};

export default AgencyHomePage;
