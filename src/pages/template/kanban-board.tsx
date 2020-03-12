import React from 'react';
import KanbanBoard from 'template/views/KanbanBoard';
import Dashboard from 'template/layouts/Dashboard';

export default function Page() {
  return (
    <Dashboard>
      <KanbanBoard />
    </Dashboard>
  );
}
