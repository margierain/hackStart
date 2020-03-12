import React, { useState } from 'react';
import { Button, colors, Theme, Grid, makeStyles } from '@material-ui/core';
import { CardElement, injectStripe } from 'react-stripe-elements';

const useStyles = makeStyles<Theme>(theme => ({
  actions: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
  startButton: {
    color: theme.palette.common.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
}));

type Props = {
  stripe?: any;
  formReady: () => void;
  handlePayment: (token: string) => void;
  diablePayment: boolean;
};

const StripePaymentCheckout: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const [infoValid, setInfoValidity] = useState(false);

  const { stripe, handlePayment, formReady, diablePayment } = props;

  const makePayment = async () => {
    const { token } = await stripe.createToken({ name: 'gitstart' });
    handlePayment(token.id);
  };

  const cardOnChange = (event: any) =>
    setInfoValidity(!event.error && event.complete);

  return (
    <>
      <CardElement onChange={cardOnChange} onReady={formReady} />
      <div className={classes.actions}>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <Button
              disabled={!infoValid || diablePayment}
              className={classes.startButton}
              onClick={makePayment}
              variant="contained"
            >
              pay
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default injectStripe(StripePaymentCheckout);
