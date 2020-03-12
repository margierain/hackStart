import 'reflect-metadata';
import {
  ObjectType,
  Field,
  Resolver,
  ID,
  Query,
  Arg,
  Ctx,
  Mutation,
} from 'type-graphql';
import { Context, HasuraClient } from 'server/entities/types';
import { NonFunctionProperties } from 'server/utils';

import {
  client_invoices_constraint,
  client_invoices_update_column,
  client_invoices_insert_input,
  tickets_constraint,
  tickets_update_column,
  client_invoice_status_enum,
} from 'lib/graphql/roles/admin/generated/globalTypes';
import {
  fetchPendingClientUsage,
  fetchPendingClientUsageVariables,
  fetchPendingClientUsage_clients_client_invoices,
  fetchPendingClientUsage_clients_tickets,
} from 'lib/graphql/roles/admin/generated/fetchPendingClientUsage';
import {
  FETCH_PENDING_CLIENT_USAGE,
  FETCH_ALL_PENDING_CLIENT_USAGE,
} from 'lib/graphql/roles/admin/queries';
import {
  insertClientInvoices,
  insertClientInvoicesVariables,
} from 'lib/graphql/roles/admin/generated/insertClientInvoices';
import { INSERT_CLIENT_PENDING_INVOICES } from 'lib/graphql/roles/admin/mutations';
import { getTicketCreditCost } from 'lib/client/utils';
import moment from 'moment';
import _ from 'lodash';
import { fetchAllPendingClientUsage } from 'lib/graphql/roles/admin/generated/fetchAllPendingClientUsage';

@ObjectType()
class ClientInvoice {
  constructor({
    costInUSD,
    costInCredits,
    dueAt,
    id,
    clientId,
    newTicketIds: ticketIds,
    status,
    maxBudgetInCredits,
    consumedCredits,
    originalInvoice,
  }: NonFunctionProperties<ClientInvoice>) {
    this.clientId = clientId;
    this.id = id;
    this.costInCredits = costInCredits;
    this.costInUSD = costInUSD;
    this.dueAt = dueAt;
    this.newTicketIds = ticketIds;
    this.status = status;
    this.maxBudgetInCredits = maxBudgetInCredits;
    this.originalInvoice = originalInvoice;
    this.consumedCredits = consumedCredits;

    if (originalInvoice) {
      this.id = originalInvoice.id;
    }
  }

  originalInvoice?: fetchPendingClientUsage_clients_client_invoices;

  @Field(() => [ID])
  newTicketIds: number[];

  @Field(() => Number, { nullable: true })
  maxBudgetInCredits?: number;

  @Field(() => String)
  status: 'complete' | 'draft';

  @Field(() => String)
  clientId: string;

  @Field(() => Number)
  costInUSD: number;

  @Field(() => Number)
  consumedCredits: number;

  @Field(() => Number)
  costInCredits: number;

  @Field(() => String, { nullable: true })
  dueAt?: string | null;

  @Field(() => ID, { nullable: true })
  id?: number;

  associateTicket(ticket: fetchPendingClientUsage_clients_tickets) {
    this.consumedCredits += getTicketCreditCost(ticket);
    if (this.costInCredits === 0) {
      this.costInCredits = this.consumedCredits;
      this.costInUSD = this.costInCredits * 4;
    } else if (this.consumedCredits > this.costInCredits) {
      this.costInUSD +=
        (this.consumedCredits - this.costInCredits) *
        (this.costInUSD / this.costInCredits);
      this.costInCredits = this.consumedCredits;
    }

    this.newTicketIds = [...this.newTicketIds, ticket.id];

    return this;
  }

  static fromClientInvoice(
    clientId: string,
    inv: fetchPendingClientUsage_clients_client_invoices
  ) {
    return new ClientInvoice({
      originalInvoice: inv,
      consumedCredits:
        inv.consumedCredits.aggregate?.sum?.discountedCostInCredits || 0,
      clientId,
      costInCredits: inv.costInCredits,
      costInUSD: inv.costInUSD,
      maxBudgetInCredits: inv.maxBudgetInCredits || undefined,
      newTicketIds: [],
      dueAt: inv.dueAt,
      status: inv.status,
    });
  }
}

@ObjectType()
export class ClientInvoices {
  constructor({
    clientId,
    pendingInvoices,
  }: NonFunctionProperties<ClientInvoices>) {
    this.clientId = clientId;
    this.pendingInvoices = pendingInvoices;
  }

  @Field(() => String)
  clientId: string;

  @Field(() => [ClientInvoice])
  pendingInvoices: ClientInvoice[];

  addClientInvoice(
    clientInvoice: fetchPendingClientUsage_clients_client_invoices
  ) {
    return this.createClientInvoice(
      ClientInvoice.fromClientInvoice(this.clientId, clientInvoice)
    );
  }

  finalize() {
    this.pendingInvoices = this.pendingInvoices.filter(
      inv =>
        (!inv.originalInvoice
          ? !!inv.costInUSD
          : inv.originalInvoice.costInUSD !== inv.costInUSD ||
            inv.originalInvoice.costInCredits !== inv.costInCredits) ||
        !!inv.newTicketIds.length
    );

    return this;
  }

  createClientInvoice(opts: NonFunctionProperties<ClientInvoice>) {
    const inv = new ClientInvoice(opts);
    this.pendingInvoices.push(inv);

    return inv;
  }

  getDraftInvoice(creditBatchSize: number) {
    let draftInvoice: ClientInvoice | null = this.pendingInvoices.filter(
      inv => inv.status === client_invoice_status_enum.draft
    )[0];

    if (draftInvoice) {
      if (
        moment(draftInvoice.dueAt || undefined).isBefore(moment()) ||
        (draftInvoice.maxBudgetInCredits &&
          draftInvoice.consumedCredits > draftInvoice.maxBudgetInCredits)
      ) {
        draftInvoice.status = 'complete';
        draftInvoice = null;
      }
    }

    if (!draftInvoice) {
      draftInvoice = this.createClientInvoice({
        clientId: this.clientId,
        costInCredits: 0,
        consumedCredits: 0,
        maxBudgetInCredits: creditBatchSize,
        costInUSD: 0,
        newTicketIds: [],
        dueAt: moment()
          .endOf('month')
          .toJSON(),
        status: 'draft',
      });
    }

    return draftInvoice;
  }

  addPendingTickets(
    pendingTickets: fetchPendingClientUsage_clients_tickets[],
    creditBatchSize: number
  ) {
    pendingTickets.forEach(ticket => {
      if (!ticket.completedAt) {
        return;
      }

      let draftInvoice = this.getDraftInvoice(creditBatchSize);
      if (
        moment()
          .endOf('month')
          .isSame(moment(ticket.completedAt).endOf('month'))
      ) {
        draftInvoice.associateTicket(ticket);
        return;
      }

      this.pendingInvoices.sort(
        (inv1, inv2) =>
          moment(inv1.dueAt || undefined)
            .toDate()
            .getTime() -
          moment(inv2.dueAt || undefined)
            .toDate()
            .getTime()
      );

      const invoices = this.pendingInvoices.filter(
        inv => inv.status === 'complete'
      );

      let invoice: ClientInvoice | undefined = invoices.find(
        inv =>
          (inv.maxBudgetInCredits || 5000) >=
            inv.consumedCredits + getTicketCreditCost(ticket) &&
          (inv.costInCredits - inv.consumedCredits >=
            getTicketCreditCost(ticket) ||
            moment(ticket.completedAt || undefined).isSameOrBefore(
              inv.dueAt || undefined
            ))
      );

      if (!invoice) {
        invoice = this.createClientInvoice({
          clientId: this.clientId,
          costInCredits: 0,
          consumedCredits: 0,
          maxBudgetInCredits: creditBatchSize,
          costInUSD: 0,
          newTicketIds: [],
          dueAt: moment(ticket.completedAt)
            .endOf('month')
            .toJSON(),
          status: 'complete',
        });
      }

      invoice.associateTicket(ticket);
    });
  }

  static async getAllPendingInvoices(graphqlClient: HasuraClient) {
    const resp = await graphqlClient.query<fetchAllPendingClientUsage>({
      query: FETCH_ALL_PENDING_CLIENT_USAGE,
    });

    if (resp.errors) {
      throw resp.errors[0];
    }

    return resp.data.clients.map(client => {
      const clientInvoices = new ClientInvoices({
        clientId: client.id,
        pendingInvoices: client.client_invoices.map(inv =>
          ClientInvoice.fromClientInvoice(client.id, inv)
        ),
      });

      clientInvoices.addPendingTickets(client.tickets, client.creditBatchSize);
      return clientInvoices.finalize();
    });
  }

  static async getPendingInvoices(
    graphqlClient: HasuraClient,
    clientId: string
  ) {
    const resp = await graphqlClient.query<
      fetchPendingClientUsage,
      fetchPendingClientUsageVariables
    >({
      query: FETCH_PENDING_CLIENT_USAGE,
      variables: {
        clientId,
      },
    });

    if (resp.errors) {
      throw resp.errors[0];
    }

    const client = resp.data.clients[0];
    if (!client) {
      throw new Error('Can not find client: ' + clientId);
    }

    const clientInvoices = new ClientInvoices({
      clientId,
      pendingInvoices: client.client_invoices.map(inv =>
        ClientInvoice.fromClientInvoice(clientId, inv)
      ),
    });

    clientInvoices.addPendingTickets(client.tickets, client.creditBatchSize);
    return clientInvoices.finalize();
  }

  static async insertClientInvoices(
    graphqlClient: HasuraClient,
    invoices: ClientInvoice[]
  ) {
    const resp = await graphqlClient.mutate<
      insertClientInvoices,
      insertClientInvoicesVariables
    >({
      mutation: INSERT_CLIENT_PENDING_INVOICES,
      variables: {
        invoices: invoices.map<client_invoices_insert_input>(inv => ({
          id: inv.id,
          clientId: inv.clientId,
          costInCredits: inv.costInCredits,
          costInUSD: inv.costInUSD,
          dueAt: inv.dueAt,
          status:
            inv.status === 'draft'
              ? client_invoice_status_enum.draft
              : client_invoice_status_enum.complete,
          tickets: {
            data: inv.newTicketIds.map(id => ({
              id,

              isFixed: inv.status === 'draft' ? false : true,

              // dummy fields to help with up-sert. Will break as both conditions have DB constraints:
              // - the code is not unique
              clientId: '',
              code: 'duplicate',
              title: '',
              costInCredits: 0,
              isInternal: false,
              discount: 0,
            })),
            on_conflict: {
              constraint: tickets_constraint.PK_343bc942ae261cf7a1377f48fd0,
              update_columns: [
                tickets_update_column.id,
                tickets_update_column.invoiceId,
                tickets_update_column.isFixed,
              ],
            },
          },
        })),
        onConflict: {
          constraint: client_invoices_constraint.PK_e710ecb019ac03ca2d3f3905024,
          update_columns: [
            client_invoices_update_column.dueAt,
            client_invoices_update_column.costInCredits,
            client_invoices_update_column.costInUSD,
            client_invoices_update_column.status,
          ],
        },
      },
    });

    if (resp.errors) {
      console.error('got back error from Hasura: ', resp.errors);
      throw resp.errors[0];
    }

    const updatedInvoices =
      resp.data && resp.data.insert_client_invoices
        ? resp.data.insert_client_invoices.returning
        : null;

    if (!updatedInvoices) {
      throw new Error('No client invoices were updated!');
    }
    return updatedInvoices.map(({ clientId, ...inv }) =>
      ClientInvoice.fromClientInvoice(clientId, inv)
    );
  }

  static async generateAllPendingClientInvoices(graphqlClient: HasuraClient) {
    const allClientInvoices = await ClientInvoices.getAllPendingInvoices(
      graphqlClient
    );

    const totalInvoices = allClientInvoices.reduce(
      (invoices, clientInvoices) => [
        ...invoices,
        ...clientInvoices.pendingInvoices,
      ],
      [] as ClientInvoice[]
    );

    const updatedInvoices = await ClientInvoices.insertClientInvoices(
      graphqlClient,
      totalInvoices
    );

    return allClientInvoices.map(
      inv =>
        new ClientInvoices({
          clientId: inv.clientId,
          pendingInvoices: updatedInvoices.filter(
            inv => inv.clientId === inv.clientId
          ),
        })
    );
  }

  static async generatePendingClientInvoices(
    graphqlClient: HasuraClient,
    clientId: string
  ) {
    const clientInvoices = await ClientInvoices.getPendingInvoices(
      graphqlClient,
      clientId
    );

    if (!clientInvoices.pendingInvoices.length) {
      return clientInvoices;
    }

    return new ClientInvoices({
      clientId,
      pendingInvoices: await ClientInvoices.insertClientInvoices(
        graphqlClient,
        clientInvoices.pendingInvoices
      ),
    });
  }
}

@Resolver(() => ClientInvoices)
export class ClientInvoiceResolver {
  @Query(() => ClientInvoices)
  async getPendingInvoicesForClient(
    @Arg('clientId') clientId: string,
    @Ctx() ctx: Context
  ): Promise<ClientInvoices> {
    return ClientInvoices.getPendingInvoices(ctx.hasuraClient, clientId);
  }

  @Query(() => [ClientInvoices])
  async getPendingInvoicesForAllClients(
    @Ctx() ctx: Context
  ): Promise<ClientInvoices[]> {
    return ClientInvoices.getAllPendingInvoices(ctx.hasuraClient);
  }

  @Mutation(() => ClientInvoices)
  async generatePendingInvoicesForClient(
    @Arg('clientId') clientId: string,
    @Ctx() ctx: Context
  ): Promise<ClientInvoices> {
    return ClientInvoices.generatePendingClientInvoices(
      ctx.hasuraClient,
      clientId
    );
  }

  @Mutation(() => [ClientInvoices])
  async generatePendingInvoicesForAllClients(
    @Ctx() ctx: Context
  ): Promise<ClientInvoices[]> {
    return ClientInvoices.generateAllPendingClientInvoices(ctx.hasuraClient);
  }
}
