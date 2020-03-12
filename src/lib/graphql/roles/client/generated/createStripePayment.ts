/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createStripePayment
// ====================================================

export interface createStripePayment_initiateStripePayment {
  __typename: 'StripePayment';
  paymentBody: string;
}

export interface createStripePayment {
  initiateStripePayment: createStripePayment_initiateStripePayment;
}

export interface createStripePaymentVariables {
  clientId: string;
  costInUSD: number;
  costInCredits: number;
  paymentBody: string;
  invoiceIds: number[];
}
