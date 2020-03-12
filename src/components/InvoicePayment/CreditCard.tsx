import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import StripePayment from './StripePayment';

const useStyles = makeStyles<Theme>(theme => ({
  content: {
    padding: theme.spacing(2),
    maxWidth: 700,
    margin: '0 auto',
    marginTop: theme.spacing(2),
    width: '90%',
  },
}));

type Props = {
  clientId: string;
  costInUSD: number;
  costInCredits: number;
  invoices: number[];
  onSuccessful: () => void;
  setError: (error: Error | null) => void;
  setLoading: (loading: boolean) => void;
};

const CreditCard: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  const {
    costInUSD,
    costInCredits,
    invoices,
    clientId,
    onSuccessful,
    setError,
    setLoading,
  } = props;

  return (
    <div className={classes.content}>
      <StripePayment
        clientId={clientId}
        costInUSD={costInUSD}
        costInCredits={costInCredits}
        invoiceIds={invoices}
        onSuccessful={onSuccessful}
        setError={setError}
        setLoading={setLoading}
      />
    </div>
  );
};

export default CreditCard;
