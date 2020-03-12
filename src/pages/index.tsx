import React, { useState } from 'react';
import { useAuth } from 'components/auth';
import {
  fetchUserRoles,
  fetchUserRolesVariables,
  fetchUserRoles_users,
} from 'lib/graphql/roles/user/generated/fetchUserRoles';

import { Dashboard } from 'components/layouts/Dashboard';
import { useRouter } from 'next/router';
import Error500 from 'template/views/Error500';
import { UserGettingStartedModal } from 'components/modals/UserGettingStarted';
import { CandidateGettingStartedModal } from 'components/modals/CandidateGettingStarted';
import { ClientGettingStartedModal } from 'components/modals/ClientGettingStarted';
import { AgencyGettingStartedModal } from 'components/modals/AgencyGettingStarted';
import { useQuery } from 'lib/client/utils';
import { FETCH_USER_ROLES } from 'lib/graphql/roles/user/queries';

export default () => {
  const ctx = useAuth('user', true);
  const router = useRouter();

  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<fetchUserRoles_users | null>(null);
  const { loading } = useQuery<fetchUserRoles, fetchUserRolesVariables>(
    {
      ctx,
      role: 'user',
      query: FETCH_USER_ROLES,
      variables: ctx.user ? { id: ctx.user.id } : null,
      setData: data => {
        const userProfile = data?.users[0];
        if (!userProfile) {
          return;
        }
        setData(userProfile);

        if (userProfile.developer) {
          router.replace(
            '/developers/[developerId]/home',
            `/developers/${userProfile.developer.id}/home`
          );
          return;
        }

        if (userProfile.agency_user) {
          router.replace(
            '/agencies/[agencyId]/home',
            `/agencies/${userProfile.agency_user.agencyId}/home`
          );
          return;
        }

        if (userProfile.client_user) {
          router.replace(
            '/clients/[clientId]/home',
            `/clients/${userProfile.client_user.client.id}/home`
          );
          return;
        }
      },
      setError,
    },
    [!!ctx.user]
  );

  const [profileState, profileStateSelected] = useState('default');

  const openNextDailouge = (profile: string) => {
    profileStateSelected(profile);
  };

  const openPreviousDailouge = () => {
    profileStateSelected('default');
  };

  if (error) {
    return (
      <Dashboard>
        <Error500 error={error} />
      </Dashboard>
    );
  }

  const { user } = ctx;

  if (
    loading ||
    // Hack: Currently Auth Context can set the user but NOT properly set isLoading = false, causing infinite loading
    // isLoading ||
    !data ||
    !user ||
    data.candidate ||
    data.client_user ||
    data.developer ||
    data.agency_user
  ) {
    return (
      <Dashboard loading>
        <pre />
      </Dashboard>
    );
  }

  return (
    <Dashboard>
      {(() => {
        switch (profileState) {
          case 'candidate':
            return (
              <CandidateGettingStartedModal
                open={true}
                onBack={openPreviousDailouge}
                userId={user.id}
                onFinish={({ developerId }) =>
                  router.replace(
                    `/developers/[developerId]/home`,
                    `/developers/${developerId}/home`
                  )
                }
              />
            );
          case 'agency':
            return (
              <AgencyGettingStartedModal
                open={true}
                onBack={openPreviousDailouge}
                userId={user.id}
                onFinish={({ agencyId }) =>
                  router.replace(
                    `/agencies/[agencyId]/home`,
                    `/agencies/${agencyId}/home`
                  )
                }
              />
            );
          case 'company':
            return (
              <ClientGettingStartedModal
                open={true}
                onBack={openPreviousDailouge}
                userId={user.id}
                onFinish={({ clientId }) =>
                  router.replace(
                    `/clients/[clientId]/home`,
                    `/clients/${clientId}/home`
                  )
                }
              />
            );
          default:
            return (
              <UserGettingStartedModal open={true} onClose={openNextDailouge} />
            );
        }
      })()}
    </Dashboard>
  );
};
