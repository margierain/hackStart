import React, { forwardRef, ReactNode } from 'react';
import moment from 'moment';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Paper, IconButton, colors } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutlined';
import CloseIcon from '@material-ui/icons/CloseOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutlined';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import WarningIcon from '@material-ui/icons/WarningOutlined';
import { Theme } from 'template/theme';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '6px 16px',
    borderRadius: theme.shape.borderRadius,
  },
  default: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  updates: {
    backgroundColor: theme.palette.white,
    color: colors.grey[600],
  },
  success: {
    backgroundColor: colors.green[600],
    color: theme.palette.white,
  },
  info: {
    backgroundColor: colors.lightBlue[600],
    color: theme.palette.white,
  },
  warning: {
    backgroundColor: colors.orange[900],
    color: theme.palette.white,
  },
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  message: {
    flexGrow: 1,
    display: 'flex',
    fontWeight: 'bolder',
    fontSize: 14,
    alignItems: 'center',
    padding: '8px 0',
  },
  icon: {
    fontSize: 20,
    marginRight: theme.spacing(1),
  },
  timeAgo: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    paddingLeft: 16,
    marginRight: -8,
  },

  action: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    paddingLeft: 16,
    marginRight: -8,
  },
}));

const icons: { [key: string]: ReactNode } = {
  default: <InfoIcon />,
  success: <CheckCircleIcon />,
  info: <InfoIcon />,
  warning: <WarningIcon />,
  error: <ErrorIcon />,
  updates: <InfoIcon />,
};

type Props = {
  className?: string;
  message: string;
  onClose?: () => void;
  variant?: any;
  updatedAt?: any;
};

const Alert: React.FC<Props> = forwardRef((props, ref) => {
  const {
    className = undefined,
    variant,
    message,
    onClose,
    updatedAt,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <Paper
      {...rest}
      className={clsx(classes.root, classes[variant], className)}
      elevation={1}
      ref={ref}
    >
      <span className={classes.icon}>{icons[variant]}</span>
      <div className={classes.message}>{`Update: ${message}`}</div>
      {updatedAt && (
        <div className={classes.timeAgo}>{moment(updatedAt).fromNow()}</div>
      )}
      {onClose && (
        <IconButton
          className={classes.action}
          color="inherit"
          key="close"
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      )}
    </Paper>
  );
});

Alert.displayName = 'Alert';

Alert.defaultProps = {
  variant: 'default',
};

export default Alert;
