import React from 'react';

export const AgencyDashboard: React.FC<{
  agencyId: string | null;
}> = React.memo(props => <>{props.children}</>);
