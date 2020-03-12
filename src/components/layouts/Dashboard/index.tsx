import React, { useState, ReactNode, useEffect } from 'react';
import { LinearProgress } from '@material-ui/core';
const UseIntercom = require('use-intercom-hook');

import { useStyles as useDashboardStyles } from 'template/layouts/Dashboard';
import { TopBar } from './TopBar';
import NavBar from 'template/layouts/Dashboard/NavBar';

import { size } from 'lodash';

import clientNavigationConfig from 'components/layouts/Dashboard/ClientDashboard/navigationConfig';
import agencyNavigationConfig from 'components/layouts/Dashboard/AgencyDashboard/navigationConfig';
import adminNavigationConfig from 'components/layouts/Dashboard/AdminDashboard/navigationConfig';
import developerNavigationConfig from 'components/layouts/Dashboard/DeveloperDashboard/navigationConfig';

import { NavigationConfig } from './types';
import { useAuthContext } from 'components/auth';
import { FETCH_USER_PROFILE } from 'lib/graphql/roles/user/queries';
import {
  fetchUserProfile,
  fetchUserProfileVariables,
} from 'lib/graphql/roles/user/generated/fetchUserProfile';
import { useQuery } from 'lib/client/utils';
import { ClientDashboard } from './ClientDashboard';
import { DeveloperDashboard } from './DeveloperDashboard';
import { AdminDashboard } from './AdminDashboard';
import { AgencyDashboard } from './AgencyDashboard';
import { Router } from 'next/router';

type SelectedClient = {
  type: 'client';
  clientId: string;
  openPayment?: boolean;
  setOpenPayment?: (open: boolean) => void;
  paymentType?: string;
  onPaymentComplete?: () => void;
};

type SelectedDeveloper = {
  type: 'developer';
  developerId: string;
};

type SelectedAdmin = {
  type: 'admin';
  adminId: string;
};

type SelectedAgency = {
  type: 'agency';
  agencyId: string;
};

type SelectedCandidate = {
  type: 'candidate';
  candidateId: string;
};

export const Dashboard = (props: {
  children?: ReactNode;
  navigationConfig?: NavigationConfig;
  fullscreen?: boolean;
  loading?: boolean;

  selected?:
    | SelectedClient
    | SelectedDeveloper
    | SelectedAdmin
    | SelectedCandidate
    | SelectedAgency;

  clientId?: string;
  developerId?: string;
  candidateId?: string;
  agencyId?: string;
  adminId?: string;
}) => {
  const authCtx = useAuthContext();
  const INTERCOM_APP_ID = process.env.INTERCOM_APP_ID;

  const { data } = useQuery<fetchUserProfile, fetchUserProfileVariables>(
    {
      ctx: authCtx,
      query: FETCH_USER_PROFILE,
      variables: authCtx.user ? { userId: authCtx.user.id } : null,
      setError: err => console.log('Error' + JSON.stringify(err)),
    },
    [!!authCtx.user]
  );

  const userProfile = data?.users[0];
  const hasContract = size(userProfile?.developer?.developer_contracts) > 0;

  const classes = useDashboardStyles();
  const [openNavBarMobile, setOpenNavBarMobile] = useState(false);
  const [isRouteTransitioning, setRouteTransitioning] = useState(false);
  const {
    children,
    navigationConfig = [],
    loading,
    clientId,
    selected,
  } = props;

  const user = userProfile
    ? {
        userId: userProfile.id.toString(),
        name:
          userProfile.firstName && userProfile.lastName
            ? `${userProfile.firstName} ${userProfile.lastName}`
            : userProfile.nickname,
        email: userProfile.defaultEmail || userProfile.user_emails[0]?.email,
        avatarUrl:
          userProfile.avatarUrl ||
          'https://www.gravatar.com/avatar/8388807B8315F6414F56B957235C1013',
        isClient: !!authCtx.user?.clientId,
      }
    : null;
  const selectedClient = userProfile?.client_users.find(
    cu => selected?.type === 'client' && cu.client.id === selected?.clientId
  )?.client;

  UseIntercom(INTERCOM_APP_ID, {
    ...(user && user.email
      ? {
          user_id: user.userId,
          email: user.email,
          client_id: selectedClient?.id,
          on_boarded_at: selectedClient?.onBoardedAt,
          client_name: selectedClient?.name,
          client_meeting: selectedClient?.meetings[0]?.scheduledAt,
          developer_id:
            selected?.type === 'developer' ? selected.developerId : undefined,
          candidate_id:
            selected?.type === 'candidate' ? selected.candidateId : undefined,
        }
      : {}),
  });

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setRouteTransitioning(true);
    };

    const handleRouteChangeEnd = () => {
      setRouteTransitioning(false);
    };

    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeEnd', handleRouteChangeEnd);
    Router.events.on('routeChangeError', handleRouteChangeEnd);
    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart);
      Router.events.off('routeChangeEnd', handleRouteChangeEnd);
      Router.events.off('routeChangeError', handleRouteChangeEnd);
    };
  }, []);

  if (!userProfile || !user) {
    return (
      <>
        <TopBar
          className=""
          onOpenNavBarMobile={() => setOpenNavBarMobile(true)}
          fullscreen={props.fullscreen}
          isClient={false}
        />
        <div className={classes.container}>
          <div className={classes.content}>
            {loading || isRouteTransitioning ? <LinearProgress /> : null}
          </div>
        </div>
      </>
    );
  }

  let childElems: ReactNode | null = null;

  const consolidatedNavigationConfigs = [
    ...(navigationConfig || []),
    ...(userProfile.admin ? [adminNavigationConfig(userProfile.admin.id)] : []),
    ...(userProfile.developer
      ? [
          developerNavigationConfig(
            userProfile.developer.id,
            hasContract,
            userProfile.firstName || userProfile.nickname
          ),
        ]
      : []),
    ...(userProfile.agency_user
      ? [
          agencyNavigationConfig(
            userProfile.agency_user.agency.id,
            userProfile.agency_user.agency.name
          ),
        ]
      : []),
    ...userProfile.client_users.map(cl =>
      clientNavigationConfig(cl.client.id, cl.client.name)
    ),
  ];

  const navElems = (
    <>
      <TopBar
        className=""
        onOpenNavBarMobile={() => setOpenNavBarMobile(true)}
        fullscreen={props.fullscreen}
        isClient={user?.isClient}
        clientId={selected?.type === 'client' ? selected.clientId : clientId}
      />
      <NavBar
        className=""
        onMobileClose={() => setOpenNavBarMobile(false)}
        openMobile={openNavBarMobile}
        navigationConfig={consolidatedNavigationConfigs}
        user={user}
        fullscreen={props.fullscreen}
      />
    </>
  );

  if (selected?.type === 'client' && selectedClient) {
    const { id, name, onBoardedAt } = selectedClient;
    const {
      clientId,
      openPayment,
      setOpenPayment,
      paymentType,
      onPaymentComplete,
    } = selected;
    childElems = (
      <ClientDashboard
        {...{
          client: {
            id: id || clientId,
            name,
            onBoardedAt,
          },
          user: {
            defaultEmail: userProfile.defaultEmail,
            firstName: userProfile.firstName,
            lastName: userProfile.lastName,
          },
          openPayment,
          setOpenPayment,
          paymentType,
          onPaymentComplete,
        }}
      >
        {navElems}
        {children}
      </ClientDashboard>
    );
  } else if (selected?.type === 'developer') {
    childElems = (
      <DeveloperDashboard developerId={selected.developerId}>
        {navElems}
        {children}
      </DeveloperDashboard>
    );
  } else if (selected?.type === 'admin') {
    childElems = (
      <AdminDashboard adminId={selected.adminId}>
        {navElems}
        {children}
      </AdminDashboard>
    );
  } else if (selected?.type === 'agency') {
    childElems = (
      <AgencyDashboard agencyId={selected.agencyId}>
        {navElems}
        {children}
      </AgencyDashboard>
    );
  } else {
    childElems = (
      <>
        {navElems}
        {children}
      </>
    );
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          {loading ? <LinearProgress /> : null}
          {childElems}
        </div>
      </div>
    </>
  );
};
