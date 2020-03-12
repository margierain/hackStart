import HomeIcon from '@material-ui/icons/HomeOutlined';

export default (agencyId: string, agencyName?: string) => ({
  subheader: `${agencyName || agencyId} Agency Portal`,
  items: [
    {
      title: 'Home',
      as: `/agencies/${agencyId}/home`,
      href: `/agencies/[agencyId]/home`,
      icon: HomeIcon,
    },
  ],
});
