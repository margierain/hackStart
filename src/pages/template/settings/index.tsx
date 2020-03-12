import React from 'react';
import Settings from 'template/views/Settings';
import Dashboard from 'template/layouts/Dashboard';

export default function Page() {
  return (
    <Dashboard>
      <Settings params={{ tab: null }} />
    </Dashboard>
  );
}
