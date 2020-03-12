import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import { Theme } from 'template/theme';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  getAppIcon: {
    marginRight: theme.spacing(1),
  },
}));

type Props = {
  className?: string;
  invoiceCode?: string;
};

const Header: React.FC<Props> = props => {
  const { invoiceCode: invoice, className = undefined, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Back
          </Typography>
          <Typography component="h1" variant="h3">
            Invoice #{invoice}
          </Typography>
        </Grid>
        {/* <Grid item>
          <Button color="primary" variant="contained">
            <GetAppIcon className={classes.getAppIcon} />
            Download PDF
          </Button>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Header;
