import React from 'react';
import Profile from 'template/views/Profile';
import Dashboard from 'template/layouts/Dashboard';
import { NextPageContext } from 'next';

export default function Page({ id }: { id: string }) {
  return (
    <Dashboard>
      <Profile params={{ id }} />
    </Dashboard>
  );
}

Page.getInitialProps = async function(ctx: NextPageContext) {
  const { query } = ctx;
  const { id } = query;

  return { id };
};
