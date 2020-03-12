import React, { useState, useEffect } from 'react';
import Script from 'react-load-script';
import { StripeProvider, Elements } from 'react-stripe-elements';
import StripePaymentCheckout from './StripePaymentCheckout';
import getConfig from 'next/config';
import { useMutation } from 'lib/client/utils';
import {
  createStripePayment,
  createStripePaymentVariables,
} from 'lib/graphql/roles/client/generated/createStripePayment';
import { INITIATE_STRIPE_PAYMENT } from 'lib/graphql/roles/client/mutations';
import { useAuth } from 'components/auth';

const { publicRuntimeConfig } = getConfig();

type Props = {
  costInUSD: number;
  costInCredits: number;
  invoiceIds: number[];
  clientId: string;
  onSuccessful: () => void;
  setError: (error: Error | null) => void;
  setLoading: (loading: boolean) => void;
};

const StripePayment: React.FC<Props> = (props: Props) => {
  const ctx = useAuth('client', true);
  const [loaded, isLoaded] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);

  const {
    costInUSD,
    costInCredits,
    invoiceIds,
    onSuccessful,
    setError,
    setLoading,
    clientId,
  } = props;

  const { issueMutation } = useMutation<
    createStripePayment,
    createStripePaymentVariables
  >({
    ctx,
    role: 'client',
    mutation: INITIATE_STRIPE_PAYMENT,
    setError: error => {
      setDisableBtn(false);
      setError(error);
    },
    setData: () => {
      setDisableBtn(false);
      onSuccessful();
    },
    setLoading,
    defaultVariables: {
      clientId,
      costInUSD,
      costInCredits,
      paymentBody: '',
      invoiceIds: [],
    },
  });

  const handlePayment = (paymentBody: string) => {
    if (!clientId) return;

    setDisableBtn(true);
    setError(null);

    issueMutation({
      clientId,
      costInUSD,
      costInCredits,
      paymentBody,
      invoiceIds,
    });
  };

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      <Script url="https://js.stripe.com/v3/" onLoad={() => isLoaded(true)} />
      {loaded && (
        <StripeProvider apiKey={publicRuntimeConfig.STRIPE_PK_KEY}>
          <Elements>
            <StripePaymentCheckout
              handlePayment={handlePayment}
              diablePayment={disableBtn}
              formReady={() => setLoading(false)}
            />
          </Elements>
        </StripeProvider>
      )}
    </>
  );
};

export default StripePayment;
