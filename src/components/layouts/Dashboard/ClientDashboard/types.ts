import { ReactNode } from 'react';

export type UserData = {
  name: string;
  email: string;
  customAnswers?: {
    a1?: string;
    a2?: string;
    a3?: string;
  };
};

export type OnBoardingScreenProps = {
  className?: string;
  displayButton: boolean;
  displayMessage: boolean;
  children?: ReactNode;
  clientId?: string;
  userData?: UserData;
};

type Client = {
  id: string;
  name: string;
  onBoardedAt: hasura_timestamptz | null;
};

type User = {
  firstName: string | null;
  lastName: string | null;
  defaultEmail: string | null;
};

export type ClientDashboardProps = {
  children: ReactNode;
  client: Client;
  user: User;
  clientName?: string;
  loading?: boolean;
  openPayment?: boolean;
  setOpenPayment?: (open: boolean) => void;
  paymentType?: string;
  onPaymentComplete?: () => void;
};
