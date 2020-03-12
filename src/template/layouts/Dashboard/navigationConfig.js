/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { colors } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ViewConfigIcon from '@material-ui/icons/ViewComfy';
import ListIcon from '@material-ui/icons/List';
import Label from 'template/components/Label';

export default [
  {
    subheader: 'Pages',
    items: [
      {
        title: 'Overview',
        href: '/template/overview',
        icon: HomeIcon,
      },
      {
        title: 'Dashboards',
        href: '/template/dashboards',
        icon: DashboardIcon,
        items: [
          {
            title: 'Default',
            href: '/template/dashboards/default',
          },
          {
            title: 'Analytics',
            href: '/template/dashboards/analytics',
          },
        ],
      },
      {
        title: 'Management',
        href: '/template/management',
        icon: BarChartIcon,
        items: [
          {
            title: 'Customers',
            href: '/template/management/customers',
          },
          {
            title: 'Customer Details',
            href: '/template/management/customers/1/summary',
          },
          {
            title: 'Projects',
            href: '/template/management/projects',
          },
          {
            title: 'Orders',
            href: '/template/management/orders',
          },
          {
            title: 'Order Details',
            href: '/template/management/orders/1',
          },
        ],
      },
      {
        title: 'Social Feed',
        href: '/template/social-feed',
        icon: PeopleIcon,
      },
      {
        title: 'Profile',
        href: '/template/profile',
        icon: PersonIcon,
        items: [
          {
            title: 'Timeline',
            href: '/template/profile/1/timeline',
          },
          {
            title: 'Connections',
            href: '/template/profile/1/connections',
          },
          {
            title: 'Projects',
            href: '/template/profile/1/projects',
          },
          {
            title: 'Reviews',
            href: '/template/profile/1/reviews',
          },
        ],
      },
      {
        title: 'Project',
        href: '/template/projects',
        icon: FolderIcon,
        items: [
          {
            title: 'Browse',
            href: '/template/projects',
          },
          {
            title: 'Create',
            href: '/template/projects/create',
          },
          {
            title: 'Overview',
            href: '/template/projects/1/overview',
          },
          {
            title: 'Files',
            href: '/template/projects/1/files',
          },
          {
            title: 'Activity',
            href: '/template/projects/1/activity',
          },
          {
            title: 'Subscribers',
            href: '/template/projects/1/subscribers',
          },
        ],
      },
      {
        title: 'Invoice',
        href: '/template/invoices/1',
        icon: ReceiptIcon,
      },
      {
        title: 'Kanban Board',
        href: '/template/kanban-board',
        icon: ListAltIcon,
      },
      {
        title: 'Mail',
        href: '/template/mail',
        icon: MailIcon,
        label: () => (
          <Label color={colors.red[500]} shape="rounded">
            2
          </Label>
        ),
      },
      {
        title: 'Chat',
        href: '/template/chat',
        icon: ChatIcon,
        label: () => (
          <Label color={colors.red[500]} shape="rounded">
            4
          </Label>
        ),
      },
      {
        title: 'Calendar',
        href: '/template/calendar',
        icon: CalendarTodayIcon,
        label: () => <Label color={colors.green[500]}>New</Label>,
      },
      {
        title: 'Settings',
        href: '/template/settings',
        icon: SettingsIcon,
        items: [
          {
            title: 'General',
            href: '/template/settings/general',
          },
          {
            title: 'Subscription',
            href: '/template/settings/subscription',
          },
          {
            title: 'Notifications',
            href: '/template/settings/notifications',
          },
          {
            title: 'Security',
            href: '/template/settings/security',
          },
        ],
      },
      {
        title: 'Authentication',
        href: '/template/auth',
        icon: LockOpenIcon,
        items: [
          {
            title: 'Login',
            href: '/template/auth/login',
          },
          {
            title: 'Register',
            href: '/template/auth/register',
          },
        ],
      },
      {
        title: 'Errors',
        href: '/template/errors',
        icon: ErrorIcon,
        items: [
          {
            title: 'Error 401',
            href: '/template/errors/error-401',
          },
          {
            title: 'Error 404',
            href: '/template/errors/error-404',
          },
          {
            title: 'Error 500',
            href: '/template/errors/error-500',
          },
        ],
      },
    ],
  },
  {
    subheader: 'Support',
    items: [
      {
        title: 'Components',
        href: '/template/components',
        icon: ViewConfigIcon,
        items: [
          {
            title: 'Buttons',
            href: '/template/components/buttons',
          },
          {
            title: 'Cards',
            href: '/template/components/cards',
          },
          {
            title: 'Chips',
            href: '/template/components/chips',
          },
          {
            title: 'Lists',
            href: '/template/components/lists',
          },
          {
            title: 'Forms',
            href: '/template/components/forms',
          },
          {
            title: 'Modals',
            href: '/template/components/modals',
          },
          {
            title: 'Typography',
            href: '/template/components/typography',
          },
        ],
      },
      {
        title: 'Presentation',
        href: '/template/presentation',
        icon: PresentToAllIcon,
      },
      {
        title: 'Getting started',
        href: '/template/getting-started',
        icon: CodeIcon,
      },
      {
        title: 'Changelog',
        href: '/template/changelog',
        icon: ListIcon,
        label: () => <Label color={colors.blue['500']}>v1.3.0</Label>,
      },
    ],
  },
];
