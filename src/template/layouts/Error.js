import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
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
  },
}));

function Error({ route }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {/*<Suspense fallback={<LinearProgress />}>*/}
        {children}
        {/*</Suspense>*/}
      </div>
    </div>
  );
}

Error.propTypes = {
  route: PropTypes.object,
};

export default Error;
