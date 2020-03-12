import React from 'react';
import ClientPayments, {
  useClientPayment,
} from 'components/InvoicePayment/ClientPayments';
import OnBoardingScreen from './onBoardingScreen';
import { Typography } from '@material-ui/core';
import { UserData, ClientDashboardProps } from './types';
import { PaymentContext } from 'components/InvoicePayment';

export const ClientDashboard: React.FC<ClientDashboardProps> = props => {
  const { openPayment, setOpenPayment, onPaymentComplete, paymentType } = props;

  const {
    contextValue,
    paymentComplete,
    clientPaymentType,
    paymentModalOpen,
    closeAction,
  } = useClientPayment({
    paymentType,
    onPaymentComplete,
    setOpenPayment,
    openPayment,
  });

  const { onBoardedAt, id } = props.client;
  const { firstName, lastName, defaultEmail } = props.user;
  const userData: UserData = {
    name: `${firstName} ${lastName}`,
    email: defaultEmail || '',
    customAnswers: {
      a1: id,
    },
  };

  return (
    <PaymentContext.Provider value={contextValue}>
      <div>
        {onBoardedAt ? (
          <div>
            {props.children}
            {clientPaymentType && (
              <ClientPayments
                clientId={id}
                paymentType={clientPaymentType}
                open={paymentModalOpen}
                onClose={() => closeAction(false)}
                onPaymentComplete={paymentComplete}
              />
            )}
          </div>
        ) : (
          <OnBoardingScreen
            className="root"
            displayButton={true}
            displayMessage={true}
            userData={userData}
            clientId={props.client.id}
          >
            <Typography>
              Your account is not yet activated. Please schedule an on-boarding
              session to setup your GitStart account.
            </Typography>
          </OnBoardingScreen>
        )}
      </div>
    </PaymentContext.Provider>
  );
};
