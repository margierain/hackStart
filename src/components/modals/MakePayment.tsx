import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, colors, Theme, Radio } from '@material-ui/core';
import BankTransfer from 'components/InvoicePayment/BankTransfer';
import CreditCard from 'components/InvoicePayment/CreditCard';
import Modal from './Modal';

const useStyles = makeStyles<Theme>(theme => ({
  selectedOption: {
    backgroundColor: colors.grey[50],
  },
  option: {
    border: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    alignItems: 'flex-start',
    padding: theme.spacing(2),
    '& + &': {
      marginTop: theme.spacing(2),
    },
  },
  optionRadio: {
    margin: -10,
  },
  optionDetails: {
    marginLeft: theme.spacing(2),
  },
  header: {
    maxWidth: 600,
    margin: '0 auto',
    padding: theme.spacing(3),
  },
  content: {
    padding: theme.spacing(1),
    maxWidth: 700,
    margin: '0 auto',
  },
  divider: {
    backgroundColor: colors.grey[300],
  },
}));

type Props = {
  onCancel: () => void;
  open: boolean;
  costInUSD: number;
  costInCredits: number;
  invoices: number[];
  clientId: string;
  onSuccessful: () => void;
};

export enum PaymentMethods {
  credit_card = 'credit_card',
  bank_transfer = 'bank_transfer',
}

const paymentOptions = [
  {
    title: 'CREDIT CARD',
    method: PaymentMethods.credit_card,
    description: 'Master Card / AMEX / VISA /Union Pay',
  },
  {
    title: 'BANK TRANSFER',
    method: PaymentMethods.bank_transfer,
    description: 'UK, HK, USA & EU',
  },
];

const MakePayment: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const [paymentMethod, setpaymentMethod] = useState(
    PaymentMethods.credit_card
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const {
    onCancel,
    open,
    costInUSD,
    costInCredits,
    invoices,
    onSuccessful,
    clientId,
  } = props;

  const cancelModal = () => {
    setError(null);
    onCancel();
  };

  const requestComplete = () => {
    setLoading(false);
    onSuccessful();
    cancelModal();
  };

  const getPaymentMethodContent = (method: string) => {
    if (method === PaymentMethods.credit_card)
      return (
        <CreditCard
          clientId={clientId}
          costInUSD={costInUSD}
          costInCredits={costInCredits}
          invoices={invoices}
          onSuccessful={requestComplete}
          setError={setError}
          setLoading={setLoading}
        />
      );
    if (method === PaymentMethods.bank_transfer)
      return (
        <BankTransfer
          clientId={clientId}
          costInUSD={costInUSD}
          costInCredits={costInCredits}
          onSuccessful={requestComplete}
          setError={setError}
          setLoading={setLoading}
        />
      );
  };

  return (
    <Modal
      maxWidth="lg"
      onClose={cancelModal}
      open={open}
      loading={loading}
      className={classes.content}
      error={error}
      setError={setError}
      header={
        <Typography align="center" gutterBottom variant="h3">
          Make Payment: ${costInUSD}USD
        </Typography>
      }
    >
      <div className={classes.content}>
        {paymentOptions.map(option => (
          <div
            key={option.method}
            className={clsx(classes.option, {
              [classes.selectedOption]: option.method === paymentMethod,
            })}
          >
            <Radio
              checked={option.method === paymentMethod}
              className={classes.optionRadio}
              color="primary"
              onClick={() => setpaymentMethod(option.method)}
            />
            <div className={classes.optionDetails}>
              <Typography gutterBottom variant="h5">
                {option.title}
              </Typography>
              <Typography variant="body1">{option.description}</Typography>
            </div>
          </div>
        ))}
      </div>
      {getPaymentMethodContent(paymentMethod)}
    </Modal>
  );
};

export default MakePayment;
