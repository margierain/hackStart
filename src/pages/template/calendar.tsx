import React from 'react';
import Calendar from 'template/views/Calendar';
import Dashboard from 'template/layouts/Dashboard';

export default function Page() {
  return (
    <Dashboard>
      <Calendar />
    </Dashboard>
  );
}
