import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import RouterLink from 'template/utils/link';
import {
  Card,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  Tooltip,
  Theme,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardOutlined';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  value: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  type: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

type NotificationType = {
  id: string;
  icon: any;
  href?: string;
  onClick?: () => void;
  component?: any;
  as?: string;
  title: string;
  message: string;
  value: string | number;
};

type Props = {
  className: string;
  notifications: NotificationType[];
};

const Notifications: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const { className, notifications, ...rest } = props;

  return (
    <>
      {!!notifications.length && (
        <Card {...rest} className={clsx(classes.root, className)}>
          <List>
            {notifications.map((notification, i) => (
              <ListItem
                divider={i < notifications.length - 1}
                key={notification.id}
              >
                <ListItemIcon>{notification.icon}</ListItemIcon>
                <ListItemText>
                  <Typography variant="body1">
                    <span className={classes.value}>{notification.value}</span>{' '}
                    <span className={classes.type}>{notification.title}</span>{' '}
                    {notification.message}
                  </Typography>
                </ListItemText>
                <ListItemSecondaryAction>
                  <Tooltip title="View">
                    <IconButton
                      edge="end"
                      size="small"
                      component={notification.component || RouterLink}
                      href={notification.href}
                      as={notification.as}
                      onClick={notification.onClick}
                    >
                      <ArrowForwardIcon />
                    </IconButton>
                  </Tooltip>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Card>
      )}
    </>
  );
};

export default Notifications;
