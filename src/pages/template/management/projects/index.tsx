import React from 'react';
import ProjectManagementList from 'template/views/ProjectManagementList';
import Dashboard from 'template/layouts/Dashboard';

export default function Page() {
  return (
    <Dashboard>
      <ProjectManagementList />
    </Dashboard>
  );
}
