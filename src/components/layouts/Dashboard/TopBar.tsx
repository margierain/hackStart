import React, {
  useState,
  useRef,
  useEffect,
  MouseEventHandler,
  useContext,
} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { FeatureFlag } from 'components/FeatureFlag';
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Hidden,
  Input,
  colors,
  Popper,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ClickAwayListener,
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Theme } from 'template/theme';
import NotificationsPopover from 'template/components/NotificationsPopover';
import { useAuthContext } from 'components/auth';
import { Moment } from 'moment';
import InvoicePaymentWrapper from 'components/InvoicePayment/InvoicePaymentWrapper';
import { PaymentContext } from 'components/InvoicePayment/index';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    boxShadow: 'none',
  },
  flexGrow: {
    flexGrow: 1,
  },
  menuIcon: {
    position: 'fixed',
    left: '5px',
  },
  logo: {
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(4),
    },
  },
  search: {
    backgroundColor: 'rgba(255,255,255, 0.1)',
    borderRadius: 4,
    flexBasis: 300,
    height: 36,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: 'inherit',
  },
  searchInput: {
    flexGrow: 1,
    color: 'inherit',
    '& input::placeholder': {
      opacity: 1,
      color: 'inherit',
    },
  },
  searchPopper: {
    zIndex: theme.zIndex.appBar + 100,
  },
  searchPopperContent: {
    marginTop: theme.spacing(1),
  },
  trialButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
  trialIcon: {
    marginRight: theme.spacing(1),
  },
  notificationsButton: {
    marginLeft: theme.spacing(1),
  },
  notificationsBadge: {
    backgroundColor: colors.orange[600],
  },
  logoutButton: {
    marginLeft: theme.spacing(1),
  },
  logoutIcon: {
    marginRight: theme.spacing(1),
  },
}));

type Props = {
  className?: string;
  onOpenNavBarMobile: MouseEventHandler;
  fullscreen?: boolean;
  isClient?: boolean;
  clientId?: string;
};

type Notification = {
  title: string;
  type: string;
  created_at: Moment;
};

export const TopBar = (props: Props) => {
  const {
    onOpenNavBarMobile,
    className,
    fullscreen,
    isClient,
    clientId,
    ...rest
  } = props;

  const classes = useStyles();
  const searchRef = useRef(null);
  const notificationsRef = useRef(null);
  const [openSearchPopover, setOpenSearchPopover] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [openNotifications, setOpenNotifications] = useState(false);

  const paymentContextValue = useContext(PaymentContext);

  useEffect(() => {
    let mounted = true;

    const fetchNotifications = () => {
      if (mounted) {
        setNotifications([]);
      }
    };

    fetchNotifications();

    return () => {
      mounted = false;
    };
  }, []);

  const { logout } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  const handleNotificationsOpen = () => {
    setOpenNotifications(true);
  };

  const handleNotificationsClose = () => {
    setOpenNotifications(false);
  };

  const handleSearchChange = (event: any) => {
    setSearchValue((event.target && event.target.value) || '');

    if (event.target && event.target.value) {
      if (!openSearchPopover) {
        setOpenSearchPopover(true);
      }
    } else {
      setOpenSearchPopover(false);
    }
  };

  const handleSearchPopverClose = () => {
    setOpenSearchPopover(false);
  };

  const popularSearches = ['Settings', 'Candidates', 'Ticktes'];

  return (
    <>
      <AppBar
        {...rest}
        className={clsx(classes.root, className)}
        color="primary"
      >
        <Toolbar>
          <a href="/" className={classes.logo}>
            <img
              alt="Logo"
              src="/images/logos/logo-white-small.png"
              height="40"
            />
          </a>
          <div className={classes.flexGrow} />
          <Hidden smDown>
            <FeatureFlag flag="search">
              <div className={classes.search} ref={searchRef}>
                <SearchIcon className={classes.searchIcon} />
                <Input
                  className={classes.searchInput}
                  disableUnderline
                  onChange={handleSearchChange}
                  placeholder="Search tasks &amp; hires"
                  value={searchValue}
                />
              </div>
            </FeatureFlag>
            <Popper
              anchorEl={searchRef.current}
              className={classes.searchPopper}
              open={openSearchPopover}
              transition
            >
              <ClickAwayListener onClickAway={handleSearchPopverClose}>
                <Paper className={classes.searchPopperContent} elevation={3}>
                  <List>
                    {popularSearches.map(search => (
                      <ListItem
                        button
                        key={search}
                        onClick={handleSearchPopverClose}
                      >
                        <ListItemIcon>
                          <SearchIcon />
                        </ListItemIcon>
                        <ListItemText primary={search} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </ClickAwayListener>
            </Popper>
          </Hidden>
          <Hidden mdDown>
            {clientId && paymentContextValue ? (
              <InvoicePaymentWrapper
                verify={paymentContextValue.control}
                clientId={clientId}
              >
                <Button
                  className={classes.trialButton}
                  onClick={() => {
                    paymentContextValue.activate('invoice');
                  }}
                  variant="contained"
                >
                  <AttachMoneyIcon />
                  Buy Credits
                </Button>
              </InvoicePaymentWrapper>
            ) : null}
            <IconButton
              className={classes.notificationsButton}
              color="inherit"
              onClick={handleNotificationsOpen}
              ref={notificationsRef}
            >
              <Badge
                badgeContent={notifications.length}
                classes={{ badge: classes.notificationsBadge }}
                variant="dot"
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Button
              className={classes.logoutButton}
              color="inherit"
              onClick={handleLogout}
            >
              <InputIcon className={classes.logoutIcon} />
              Sign out
            </Button>
          </Hidden>
          <Hidden lgUp={!fullscreen}>
            <IconButton
              color="inherit"
              onClick={onOpenNavBarMobile}
              className={classes.menuIcon}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
        <NotificationsPopover
          anchorEl={notificationsRef.current}
          notifications={notifications}
          onClose={handleNotificationsClose}
          open={openNotifications}
        />
      </AppBar>
    </>
  );
};
