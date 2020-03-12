import React from 'react';
import InvoiceDetails from 'template/views/InvoiceDetails';
import Dashboard from 'template/layouts/Dashboard';
import { NextPageContext } from 'next';

export default function Page() {
  return (
    <Dashboard>
      <InvoiceDetails />
    </Dashboard>
  );
}

Page.getInitialProps = async function(ctx: NextPageContext) {
  const { query } = ctx;
  const { id } = query;

  return { id };
};
