import HomeIcon from '@material-ui/icons/HomeOutlined';
export type User = {
  userId?: string;
  email?: string | null;
  name?: string | null;
  nickname?: string;
  avatarUrl: string;
  bio?: string;
  isClient?: boolean;
};

export type NavigationConfig = {
  subheader: string;
  items: {
    title: string;
    href: string;
    icon: typeof HomeIcon;
    children?: {
      title: string;
      href: string;
    }[];
  }[];
}[];
