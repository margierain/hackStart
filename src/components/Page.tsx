import { Theme } from 'template/theme';
import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    padding: theme.spacing(3, 3, 6, 3),
  },
}));

const Page: React.FC<{ children?: ReactNode; className?: string }> = props => {
  const classes = useStyles();
  const { children, className = undefined, ...rest } = props;

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      {children}
    </div>
  );
};

export default Page;
