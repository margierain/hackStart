import HomeIcon from '@material-ui/icons/HomeOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import BarChartIcon from '@material-ui/icons/BarChart';

export default (clientId: string, clientName?: string) => ({
  subheader: `${clientName || clientId} Development Portal`,
  items: [
    {
      title: 'Home',
      as: `/clients/${clientId}/home`,
      href: `/clients/[clientId]/home`,
      icon: HomeIcon,
    },
    {
      title: 'Tickets',
      href: `/clients/[clientId]/tickets`,
      as: `/clients/${clientId}/tickets`,
      icon: ListAltIcon,
    },
    {
      title: 'Billing',
      href: `/clients/[clientId]/billing`,
      as: `/clients/${clientId}/billing`,
      icon: BarChartIcon,
    },
  ],
});
