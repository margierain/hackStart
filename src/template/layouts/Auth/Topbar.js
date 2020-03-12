import React from 'react';
import RouterLink from 'template/utils/link';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none',
  },
}));

function Topbar({ className = undefined, ...rest }) {
  const classes = useStyles();

  return (
    <AppBar {...rest} className={clsx(classes.root, className)} color="primary">
      <Toolbar>
        <RouterLink href="/">
          <img
            alt="Logo"
            src="/images/logos/logo-white-small.png"
            height="40"
          />
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
}

Topbar.propTypes = {
  className: PropTypes.string,
};

export default Topbar;
