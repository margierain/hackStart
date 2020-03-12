import React from 'react';
import OrderManagementList from 'template/views/OrderManagementList';
import Dashboard from 'template/layouts/Dashboard';

export default function Page() {
  return (
    <Dashboard>
      <OrderManagementList />
    </Dashboard>
  );
}
