import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';
import Topbar from './Topbar';

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
    '@media all and (-ms-high-contrast:none)': {
      height: 0, // IE11 fix
    },
  },
  content: {
    flexGrow: 1,
    maxWidth: '100%',
    overflowX: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.down('xs')]: {
      paddingTop: 56,
    },
  },
}));

function Auth({ route, children }) {
  const classes = useStyles();

  return (
    <>
      <Topbar />
      <div className={classes.container}>
        <div className={classes.content}>
          {/*<Suspense fallback={<LinearProgress />}>*/}
          {children}
          {/*</Suspense>*/}
        </div>
      </div>
    </>
  );
}

Auth.propTypes = {
  route: PropTypes.object,
};

export default Auth;
