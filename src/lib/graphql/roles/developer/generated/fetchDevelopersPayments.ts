/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  user_payment_types_enum,
  user_payment_status_enum,
} from './globalTypes';

// ====================================================
// GraphQL query operation: fetchDevelopersPayments
// ====================================================

export interface fetchDevelopersPayments_user_payments {
  __typename: 'user_payments';
  id: number;
  createdAt: hasura_timestamptz;
  finishedAt: hasura_timestamptz;
  amountInUSD: hasura_float8;
  channelTransactionId: string;
  paymentType: user_payment_types_enum;
  status: user_payment_status_enum;
  updatedAt: hasura_timestamptz;
}

export interface fetchDevelopersPayments {
  /**
   * fetch data from the table: "user_payments"
   */
  user_payments: fetchDevelopersPayments_user_payments[];
}

export interface fetchDevelopersPaymentsVariables {
  developerId: string;
}
