import React from 'react';

export const DeveloperDashboard: React.FC<{
  developerId: string | null;
}> = React.memo(props => <>{props.children}</>);
