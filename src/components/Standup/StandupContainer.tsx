import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Alert from 'components/Alert';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  content: {
    marginTop: theme.spacing(3),
  },
  alert: {},
  progress: {
    marginTop: -1,
  },
  progressColorPrimary: {
    backgroundColor: '#2979ff',
  },
  heading: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  root: {
    marginBottom: theme.spacing(3),
  },
  show: {
    display: 'block',
  },
  hide: {
    display: 'none',
  },
}));

type Props = {
  children?: ReactNode;
  error?: Error | null;
  setError: (error: Error | null) => void;
  display: boolean;
};

type ContainerProps = {
  children: ReactNode;
  title: string;
  subtitle: string;
  hide?: boolean;
};

export const getETAMessage = (futureTime: string | null) => {
  if (!futureTime) return '';

  const eta = moment(futureTime)
    .endOf('day')
    .diff(moment().endOf('day'), 'days');

  return eta < 0 ? 'ETA Elapsed' : `${eta} days remaining`;
};

export const StandupSectionContainer = (props: ContainerProps) => {
  const classes = useStyles();

  const { title, subtitle, children, hide } = props;
  return (
    <>
      {!hide && (
        <div className={classes.root}>
          <div className={classes.heading}>
            <Typography component="h1" variant="h4">
              {title}
            </Typography>
            <Typography variant="subtitle2">{subtitle}</Typography>
          </div>
          {children}
        </div>
      )}
    </>
  );
};

export const StandupContext = React.createContext<{
  refresh: number;
  setRefresh: () => void;
  setLoading: (loading: boolean) => void;
  userAvatar: string | null;
}>({
  setRefresh: () => {},
  refresh: 0,
  setLoading: () => {},
  userAvatar: null,
});

const StandupContainer = (props: Props) => {
  const classes = useStyles();

  const { children, error, setError, display } = props;

  return (
    <div className={display ? classes.show : classes.hide}>
      {error && (
        <Alert
          className={classes.alert}
          variant="error"
          message={error.message}
          onClose={() => {
            setError(null);
          }}
        />
      )}
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default StandupContainer;
