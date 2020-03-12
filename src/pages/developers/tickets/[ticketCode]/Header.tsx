import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, colors } from '@material-ui/core';
import { Theme } from 'template/theme';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  label: {
    marginTop: theme.spacing(1),
  },
  actionButton: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  primaryButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
  redButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
}));

type Props = {
  ticketCode: string;
  ticketTitle: string;
  ticketStatus: string;
  changeStatus: any;
};

const Header: React.FC<Props> = (props: Props) => {
  const { ticketCode, ticketTitle, ticketStatus, changeStatus } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid alignItems="flex-end" container spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            {ticketCode}
          </Typography>
          <Typography component="h1" gutterBottom variant="h3">
            {ticketTitle}
          </Typography>
        </Grid>
        <Grid item xs={8} />
        <Grid item>
          <Button
            onClick={changeStatus}
            disabled={ticketStatus === 'completed'}
            className={`${classes.actionButton} ${classes.primaryButton}`}
            variant="contained"
          >
            {ticketStatus === 'pending' ? 'Start' : 'Complete'}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
