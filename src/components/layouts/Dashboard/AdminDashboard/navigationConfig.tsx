import HomeIcon from '@material-ui/icons/HomeOutlined';

export default (adminId: string) => ({
  subheader: `${adminId} admin portal`,
  items: [
    {
      title: 'Overview',
      href: `/admins/${adminId}/home`,
      icon: HomeIcon,
    },
  ],
});
