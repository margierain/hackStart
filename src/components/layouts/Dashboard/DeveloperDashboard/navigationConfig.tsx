import HomeIcon from '@material-ui/icons/HomeOutlined';
import EventAvailableOutlined from '@material-ui/icons/EventAvailableOutlined';
import BarChartIcon from '@material-ui/icons/BarChart';

export default (
  developerId: string,
  hasContract: boolean,
  developerName?: string | null
) => ({
  subheader: `${developerName || developerId} Developer Portal`,
  items: hasContract
    ? [
        {
          title: 'Home',
          as: `/developers/${developerId}/home`,
          href: `/developers/[developerId]/home`,
          icon: HomeIcon,
        },
        {
          title: 'Standup',
          as: `/developers/${developerId}/standup`,
          href: `/developers/[developerId]/standup`,
          icon: HomeIcon,
        },
        {
          title: 'Available Tasks',
          href: `/tasks/available`,
          icon: EventAvailableOutlined,
          //   items: [
          //     {
          //       title: 'Create',
          //       href: `/developers/${developerId}/tasks/edit`,
          //     },
          //   ],
          // },
          // {
          //   title: 'Tickets',
          //   href: `/developers/tickets/create-edit`,
          //   icon: EventAvailableOutlined,
        },
        {
          title: 'Billing',
          as: `/developers/${developerId}/billing`,
          href: `/developers/[developerId]/billing`,
          icon: BarChartIcon,
        },
      ]
    : [
        {
          title: 'Home',
          as: `/developers/${developerId}/home`,
          href: `/developers/[developerId]/home`,
          icon: HomeIcon,
        },
        {
          title: 'Available Tasks',
          href: `/tasks/available`,
          icon: EventAvailableOutlined,
        },
      ],
});
