import React, { useState, useEffect } from 'react';
import { useQuery } from 'lib/client/utils';
import { useAuth } from '../auth';

import { FETCH_CLIENT_INVOICES_OVERVIEW } from 'lib/graphql/roles/client/queries';
import {
  fetchClientInvoicesOverview,
  fetchClientInvoicesOverviewVariables,
  fetchClientInvoicesOverview_pending_transactions,
} from 'lib/graphql/roles/client/generated/fetchClientInvoicesOverview';
import { fetchClientOverview_clients_client_invoices } from 'lib/graphql/roles/client/generated/fetchClientOverview';
import { getInvoicesAnalytics } from '.';
import PendingBankTransaction from 'components/modals/PendingBankTransaction';
import InvoicePayment from 'components/InvoicePayment';
import Modal from 'components/modals/Modal';

type Props = {
  clientId: string;
  paymentType: string;
  open: boolean;
  onClose: () => void;
  onPaymentComplete: () => void;
};

type BillingDetails = {
  unpaidInvoices: fetchClientOverview_clients_client_invoices[];
  pendingTransactions: fetchClientInvoicesOverview_pending_transactions[];
};

type useClientPaymentType = {
  paymentType?: string;
  openPayment?: boolean;
  onPaymentComplete?: () => void;
  setOpenPayment?: (open: boolean) => void;
};

export const useClientPayment = ({
  paymentType,
  openPayment,
  onPaymentComplete,
  setOpenPayment,
}: useClientPaymentType) => {
  const [paymentModalOpen, setPaymentModalOpen] = useState(!!openPayment);
  const [contextControl, setContext] = useState(0);
  const [clientPaymentType, setclientPaymentType] = useState(paymentType);

  const paymentComplete = () => {
    (async () => {
      if (onPaymentComplete) await onPaymentComplete();
      setContext(prev => prev + 1);
    })();
  };
  setContext;
  useEffect(() => {
    setPaymentModalOpen(!!openPayment);
  }, [openPayment]);
  useEffect(() => {
    setclientPaymentType(paymentType);
  }, [paymentType]);

  const closeAction = setOpenPayment || setPaymentModalOpen;

  const contextValue = {
    control: contextControl,
    activate: (value: string) => {
      closeAction(true);
      setclientPaymentType(value);
    },
  };

  return {
    contextValue,
    paymentComplete,
    clientPaymentType,
    paymentModalOpen,
    closeAction,
  };
};

const ClientPayments: React.FC<Props> = (props: Props) => {
  const ctx = useAuth('client', true);
  const clientId = props.clientId;

  const [billingDetails, setBillingDetails] = useState<BillingDetails>({
    unpaidInvoices: [],
    pendingTransactions: [],
  });
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [dataReady, setDataReady] = useState(false);

  const { open, paymentType, onClose, onPaymentComplete } = props;

  const { fetchQuery } = useQuery<
    fetchClientInvoicesOverview,
    fetchClientInvoicesOverviewVariables
  >({
    ctx,
    role: 'client',
    query: FETCH_CLIENT_INVOICES_OVERVIEW,
    setError,
    setLoading: (value: boolean) => {
      setDataReady(false);
      setLoading(value);
    },
    setData: data => {
      if (!data) return;

      const { pending_transactions, client_invoices } = data;

      const { unPaidInvoices: unpaidInvoices } = getInvoicesAnalytics(
        client_invoices
      );

      setBillingDetails({
        pendingTransactions: [...pending_transactions],
        unpaidInvoices,
      });
    },
    variables: { clientId },
  });

  const paymentComplete = async () => {
    await onPaymentComplete();
    onClose();
  };

  const onPendingInvoicePayment = async () => {
    await fetchQuery();
  };

  useEffect(() => {
    setDataReady(true);
  }, [billingDetails]);

  if (error || !clientId)
    return (
      <Modal
        maxWidth="lg"
        onClose={onClose}
        open={open}
        error={error}
        loading={!clientId}
      />
    );
  if (loading || !dataReady)
    return (
      <Modal
        maxWidth="lg"
        onClose={onClose}
        open={open}
        error={error}
        loading
      />
    );

  const { pendingTransactions, unpaidInvoices } = billingDetails;

  return (
    <>
      {paymentType === 'invoice' && (
        <>
          <InvoicePayment
            clientId={clientId}
            open={open}
            close={onClose}
            onPaymentComplete={paymentComplete}
            BlockingTransactions={
              pendingTransactions.length && (
                <PendingBankTransaction
                  onCancel={close}
                  open={open}
                  clientId={clientId}
                  transactions={pendingTransactions}
                  onSuccessful={onPendingInvoicePayment}
                />
              )
            }
            unpaidInvoices={unpaidInvoices}
          />
        </>
      )}
      {paymentType === 'transaction' && (
        <>
          <PendingBankTransaction
            onCancel={onClose}
            open={open}
            clientId={clientId}
            transactions={pendingTransactions}
            onSuccessful={paymentComplete}
          />
        </>
      )}
    </>
  );
};

export default ClientPayments;
