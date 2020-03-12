import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, colors } from '@material-ui/core';
import { Theme } from 'template/theme';
import { fetchDevelopersPayments_user_payments as Payment } from 'lib/graphql/roles/developer/generated/fetchDevelopersPayments';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  content: {
    padding: theme.spacing(6),
  },
  marginTop: {
    marginTop: theme.spacing(4),
  },
  dates: {
    padding: theme.spacing(2),
    backgroundColor: colors.grey[100],
  },
}));

type Props = {
  className?: string;
  payment: Payment;
};

const Details: React.FC<Props> = props => {
  const { payment, className = undefined } = props;
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <Grid container justify="space-between">
          <Grid item>
            <img
              alt="Brand"
              src="/images/logos/logo-white-small.png"
              height="40"
            />
          </Grid>
          <Grid item>
            <Typography align="right" component="h3" variant="h1">
              {payment.status.toUpperCase()}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          alignItems="center"
          className={classes.marginTop}
          container
          justify="space-between"
        >
          <Grid item>
            <Typography variant="h5">https://www.gitstart.com</Typography>
          </Grid>
          <Grid item>
            <Typography align="right">
              Payment #{payment.channelTransactionId}
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.marginTop} container justify="space-between">
          <Grid item>
            <Typography>
              340 S Lemon Ave <br />
              Walnut, CA, 91789 <br />
              USA
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              Email: billing@gitstart.com <br />
              Tel: (+1) 628 666 7041 <br />
            </Typography>
          </Grid>
        </Grid>
        <Grid
          className={clsx(classes.marginTop, classes.dates)}
          container
          justify="space-between"
        >
          <Grid item>
            <Typography component="h4" gutterBottom variant="overline">
              Created At
            </Typography>
            <Typography>
              {moment(payment.createdAt).format('DD MMM YYYY')}
            </Typography>
          </Grid>
          <Grid item>
            <Typography component="h4" gutterBottom variant="overline">
              Finished At
            </Typography>
            <Typography>
              {moment(payment.finishedAt).format('DD MMM YYYY')}
            </Typography>
          </Grid>
          <Grid item>
            <Typography component="h4" gutterBottom variant="overline">
              Amount
            </Typography>
            <Typography>$ {payment.amountInUSD} USD</Typography>
          </Grid>
          <Grid item>
            <Typography component="h4" gutterBottom variant="overline">
              Type
            </Typography>
            <Typography>{payment.paymentType}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Details;
