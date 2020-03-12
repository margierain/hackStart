import React from 'react';
import OrderManagementDetails from 'template/views/OrderManagementDetails';
import Dashboard from 'template/layouts/Dashboard';
import { NextPageContext } from 'next';

export default function Page() {
  return (
    <Dashboard>
      <OrderManagementDetails />
    </Dashboard>
  );
}

Page.getInitialProps = async function(ctx: NextPageContext) {
  const { query } = ctx;
  const { id } = query;

  return { id };
};
