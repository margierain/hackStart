import React from 'react';
import Settings from 'template/views/Settings';
import Dashboard from 'template/layouts/Dashboard';
import { NextPageContext } from 'next';

export default function Page({ tab }: { tab: string }) {
  return (
    <Dashboard>
      <Settings params={{ tab }} />
    </Dashboard>
  );
}

Page.getInitialProps = async function(ctx: NextPageContext) {
  const { query } = ctx;
  const { tab } = query;

  return { tab };
};
