import React, { ReactNode } from 'react';

export const AdminDashboard = (props: {
  children?: ReactNode;
  adminId: string;
}) => <>{props.children}</>;
