import React from 'react';
import ProjectList from 'template/views/ProjectList';
import Dashboard from 'template/layouts/Dashboard';

export default function Page() {
  return (
    <Dashboard>
      <ProjectList />
    </Dashboard>
  );
}
