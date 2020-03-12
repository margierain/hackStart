import React from 'react';
import Overview from 'template/views/Overview';
import Dashboard from 'template/layouts/Dashboard';

export default function Page() {
  return (
    <Dashboard>
      <Overview />
    </Dashboard>
  );
}
