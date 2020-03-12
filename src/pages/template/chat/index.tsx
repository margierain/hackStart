import React from 'react';
import Chat from 'template/views/Chat';
import Dashboard from 'template/layouts/Dashboard';

export default function Page() {
  return (
    <Dashboard>
      <Chat params={{ id: null }} />
    </Dashboard>
  );
}
