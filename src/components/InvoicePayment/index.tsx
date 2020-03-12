import React, { useState, createContext, useEffect } from 'react';
import PendingInvoicesPaymentsModal from '../modals/PendingInvoicesPaymentModal';

import MakePayment from '../modals/MakePayment';

import { fetchClientOverview_clients_client_invoices } from 'lib/graphql/roles/client/generated/fetchClientOverview';
import { getClientInvoiceStatus } from 'lib/client/utils';

type InvoiceAnalytics = {
  unpaid: fetchClientOverview_clients_client_invoices[];
  paid: fetchClientOverview_clients_client_invoices[];
  partiallyPaid: fetchClientOverview_clients_client_invoices[];
};

const invoicesBreakDown = (
  invoices: fetchClientOverview_clients_client_invoices[],
  initialBreakdown: InvoiceAnalytics
) =>
  invoices.reduce(
    (
      acc: InvoiceAnalytics,
      inv: fetchClientOverview_clients_client_invoices
    ) => {
      const { costInUSD, dueAt } = inv;
      const { unpaid, partiallyPaid, paid } = acc;

      const status = getClientInvoiceStatus({
        costInUSD,
        dueDate: dueAt,
        currrent_paid_balance_in_usd: +(
          inv.client_invoice_balance?.currrent_paid_balance_in_usd || 0
        ),
        previous_balance_in_usd: +(
          inv.client_invoice_balance?.previous_balance_in_usd || 0
        ),
      });

      switch (status) {
        case 'paid':
          return { ...acc, paid: [...paid, inv] };
        case 'partially-paid':
          return { ...acc, partiallyPaid: [...partiallyPaid, inv] };
        default:
          return { ...acc, unpaid: [...unpaid, inv] };
      }
    },
    initialBreakdown
  );

type PaymentContextType = {
  control: number;
  activate: (paymentType: string) => void;
};

export const PaymentContext = createContext<PaymentContextType | null>(null);

export const getInvoicesAnalytics = (
  invoices: fetchClientOverview_clients_client_invoices[]
) => {
  const initialAnalytic: InvoiceAnalytics = {
    unpaid: [],
    partiallyPaid: [],
    paid: [],
  };

  const { unpaid, partiallyPaid, ...aggregates } = invoicesBreakDown(
    invoices,
    initialAnalytic
  );

  return {
    ...aggregates,
    unPaidInvoices: unpaid.concat(partiallyPaid),
    unpaid,
    partiallyPaid,
  };
};

type SelectedInvoiceDetails = {
  costInUSD: number;
  costInCredit: number;
  selectedInvoices: number[];
};

type Props = {
  clientId: string;
  open: boolean;
  close: () => void;
  onPaymentComplete: () => void;
  BlockingTransactions: React.ReactNode | null;
  unpaidInvoices: fetchClientOverview_clients_client_invoices[];
};

const InvoicePayment: React.FC<Props> = (props: Props) => {
  const [selectedInvoicesDetails, setSelectedInvoicesDetails] = useState<
    SelectedInvoiceDetails
  >({ costInUSD: 0, costInCredit: 0, selectedInvoices: [] });
  const [makePaymentModalOpen, setmakePaymentModalOpen] = useState(false);

  const {
    open,
    close,
    clientId,
    onPaymentComplete,
    BlockingTransactions,
    unpaidInvoices,
  } = props;

  useEffect(() => {
    if (selectedInvoicesDetails.costInUSD > 0) {
      setmakePaymentModalOpen(true);
      close();
    }
  }, [selectedInvoicesDetails]);

  useEffect(() => {
    if (makePaymentModalOpen) close();
  }, [makePaymentModalOpen]);

  const onPaymentSucessful = async () => {
    await onPaymentComplete();
    setmakePaymentModalOpen(false);
  };

  const onStartPayment = (
    costInCredit: number,
    costInUSD: number,
    invoices: number[]
  ) => {
    setSelectedInvoicesDetails({
      costInUSD,
      costInCredit,
      selectedInvoices: invoices,
    });
  };

  if (BlockingTransactions) return <>{BlockingTransactions}</>;

  const { costInUSD, costInCredit, selectedInvoices } = selectedInvoicesDetails;

  return (
    <>
      {!!unpaidInvoices.length && (
        <PendingInvoicesPaymentsModal
          onCancel={close}
          onStartPayment={onStartPayment}
          open={open}
          clientId={clientId}
          invoices={unpaidInvoices}
          selectedInvoiceIds={[unpaidInvoices[0].id]}
        />
      )}
      <MakePayment
        open={makePaymentModalOpen}
        costInUSD={costInUSD}
        costInCredits={costInCredit}
        clientId={clientId}
        invoices={selectedInvoices}
        onCancel={() => setmakePaymentModalOpen(false)}
        onSuccessful={onPaymentSucessful}
      />
    </>
  );
};

export default InvoicePayment;
