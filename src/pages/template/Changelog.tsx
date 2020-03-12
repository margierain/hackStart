import React from 'react';
import Changelog from 'template/views/Changelog';
import Dashboard from 'template/layouts/Dashboard';

export default function Page() {
  return (
    <Dashboard>
      <Changelog />
    </Dashboard>
  );
}
