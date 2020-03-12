import React from 'react';
import ProjectDetails from 'template/views/ProjectDetails';
import Dashboard from 'template/layouts/Dashboard';
import { NextPageContext } from 'next';

export default function Page({ id, tab }: { id: string; tab: string }) {
  return (
    <Dashboard>
      <ProjectDetails params={{ id, tab }} />
    </Dashboard>
  );
}

Page.getInitialProps = async function(ctx: NextPageContext) {
  const { query } = ctx;
  const { id, tab } = query;

  return { id, tab };
};
