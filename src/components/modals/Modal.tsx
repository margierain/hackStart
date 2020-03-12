import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Dialog,
  Theme,
  IconButton,
  LinearProgress,
  Typography,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Alert from 'components/Alert';
import clsx from 'clsx';

const useStyles = makeStyles<Theme>(theme => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  alert: {
    padding: theme.spacing(1),
    maxWidth: 930,
    margin: '0 auto',
  },
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    margin: '0 auto',
    top: 0,
    zIndex: 100,
    backgroundColor: 'white',
    position: 'sticky',
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  heading: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  subHeading: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 10,
    },
  },
}));

type Props = {
  onClose?: (ev: any, reason?: any) => void;
  children?: ReactNode;
  header?: ReactNode;
  heading?: string;
  subHeading?: string;
  open: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  loading?: boolean;
  error?: Error | boolean | null;
  className?: string;
  setError?: (error: Error | null) => void;
  onEntered?: () => void;
};

const Modal: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const {
    onClose,
    open,
    children,
    loading,
    error,
    header,
    className,
    setError,
    heading,
    subHeading,
    maxWidth,
    onEntered,
  } = props;

  return (
    <>
      <Dialog
        fullScreen={useMediaQuery(theme.breakpoints.down('sm'))}
        maxWidth={maxWidth ? maxWidth : 'lg'}
        onClose={onClose}
        open={open}
        onEntered={onEntered}
      >
        {onClose && (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        )}
        {loading && <LinearProgress />}
        <div className={classes.root}>
          <div className={classes.header}>
            {heading && (
              <Typography
                align="center"
                gutterBottom
                variant="h3"
                className={classes.heading}
              >
                {heading}
              </Typography>
            )}
            {subHeading && (
              <Typography
                align="center"
                className={clsx(classes.subtitle, classes.subHeading)}
                variant="subtitle2"
              >
                {subHeading}
              </Typography>
            )}
            {header}
          </div>
          {error && (
            <Alert
              variant="error"
              className={clsx(classes.alert, className)}
              message={error.toString()}
              onClose={() => {
                setError && setError(null);
              }}
            />
          )}
          {children}
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
