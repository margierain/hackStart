import React from 'react';
import Chat from 'template/views/Chat';
import Dashboard from 'template/layouts/Dashboard';
import { NextPageContext } from 'next';

export default function Page({ id }: { id: string }) {
  return (
    <Dashboard>
      <Chat params={{ id }} />
    </Dashboard>
  );
}

Page.getInitialProps = async function(ctx: NextPageContext) {
  const { query } = ctx;
  const { id } = query;

  return { id };
};
