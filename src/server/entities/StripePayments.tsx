import 'reflect-metadata';
import {
  ObjectType,
  Field,
  Resolver,
  ID,
  Arg,
  Ctx,
  Mutation,
} from 'type-graphql';
import { Context, HasuraClient } from 'server/entities/types';
import { NonFunctionProperties } from 'server/utils';
import _ from 'lodash';
import Stripe from 'stripe';
import {
  updateClientInvoicesStatus,
  updateClientInvoicesStatusVariables,
} from 'lib/graphql/roles/admin/generated/updateClientInvoicesStatus';
import {
  UPDATE_CLIENT_INVOICES_STATUS,
  INSERT_NEW_CLIENT_TRANSACTION,
} from 'lib/graphql/roles/admin/mutations';
import {
  client_invoice_status_enum,
  client_transaction_types_enum,
  client_transaction_status_enum,
} from 'lib/graphql/roles/admin/generated/globalTypes';
import {
  insertNewClientTransaction,
  insertNewClientTransactionVariables,
} from 'lib/graphql/roles/admin/generated/insertNewClientTransaction';

const { STRIPE_API_KEY = '' } = process.env;

const stripe = new Stripe(STRIPE_API_KEY);

@ObjectType()
class StripePayment {
  constructor({
    costInUSD,
    costInCredits,
    paymentBody,
    clientId,
    invoiceIds,
  }: NonFunctionProperties<StripePayment>) {
    this.clientId = clientId;
    this.costInCredits = costInCredits;
    this.costInUSD = costInUSD;
    this.invoiceIds = invoiceIds;
    this.paymentBody = paymentBody;
  }

  @Field(() => String)
  clientId: string;

  @Field(() => Number)
  costInUSD: number;

  @Field(() => Number)
  costInCredits: number;

  @Field(() => [Number])
  invoiceIds: number[];

  @Field(() => String)
  paymentBody: string;

  @Field(() => ID, { nullable: true })
  id?: number;

  static async createStripePayment(
    graphqlClient: HasuraClient,
    costInUSD: number,
    costInCredits: number,
    paymentBody: string,
    clientId: string,
    invoiceIds: number[]
  ) {
    const { status, id } = await stripe.charges.create({
      amount: costInUSD,
      currency: 'usd',
      description: 'Gitstart payment charge',
      source: paymentBody,
    });

    if (status !== 'succeeded') return null;

    const paymentDetails = {
      channelType: client_transaction_types_enum.stripe,
      channelTransactionId: id,
      status: client_transaction_status_enum.in_progress,
      costInUSD,
      costInCredits,
      clientId,
    };

    await graphqlClient.mutate<
      insertNewClientTransaction,
      insertNewClientTransactionVariables
    >({
      mutation: INSERT_NEW_CLIENT_TRANSACTION,
      variables: {
        transactions: [paymentDetails],
      },
    });

    await graphqlClient.mutate<
      updateClientInvoicesStatus,
      updateClientInvoicesStatusVariables
    >({
      mutation: UPDATE_CLIENT_INVOICES_STATUS,
      variables: {
        invoiceIds,
        status: client_invoice_status_enum.complete,
      },
    });

    return new StripePayment({
      costInUSD,
      costInCredits,
      paymentBody,
      clientId,
      invoiceIds,
    });
  }
}

@Resolver(() => StripePayment)
export class StripePaymentResolver {
  @Mutation(() => StripePayment)
  async initiateStripePayment(
    @Arg('costInUSD') costInUSD: number,
    @Arg('costInCredits') costInCredits: number,
    @Arg('paymentBody') paymentBody: string,
    @Arg('clientId') clientId: string,
    @Arg('invoiceIds', () => [Number]) invoiceIds: number[],
    @Ctx() ctx: Context
  ): Promise<StripePayment | null> {
    return StripePayment.createStripePayment(
      ctx.hasuraClient,
      costInUSD,
      costInCredits,
      paymentBody,
      clientId,
      invoiceIds
    );
  }
}
