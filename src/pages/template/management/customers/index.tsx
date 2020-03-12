import React from 'react';
import CustomerManagementList from 'template/views/CustomerManagementList';
import Dashboard from 'template/layouts/Dashboard';

export default function Page() {
  return (
    <Dashboard>
      <CustomerManagementList />
    </Dashboard>
  );
}
