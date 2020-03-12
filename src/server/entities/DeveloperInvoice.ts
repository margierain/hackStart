import 'reflect-metadata';
import moment from 'moment';
import {
  ObjectType,
  Field,
  ID,
  Resolver,
  Query,
  Arg,
  Ctx,
  Mutation,
} from 'type-graphql';
import { NonFunctionProperties } from 'server/utils';
import { HasuraClient, Context } from './types';
import {
  fetchPendingDeveloperEarnings_developers_user_user_invoices,
  fetchPendingDeveloperEarnings_developers,
  fetchPendingDeveloperEarnings,
  fetchPendingDeveloperEarningsVariables,
} from 'lib/graphql/roles/admin/generated/fetchPendingDeveloperEarnings';
import { fetchAllPendingDeveloperEarnings } from 'lib/graphql/roles/admin/generated/fetchAllPendingDeveloperEarnings';
import {
  FETCH_ALL_PENDING_DEVELOPER_EARNINGS,
  FETCH_PENDING_DEVELOPER_EARNINGS,
} from 'lib/graphql/roles/admin/queries';
import { MANAGER_COST, DEVELOPER_COST } from 'lib/constants';
import {
  user_invoice_status_enum,
  user_invoices_insert_input,
  user_invoices_constraint,
  user_invoices_update_column,
  task_reviews_constraint,
  developer_bonus_earning_constraint,
  developer_bonus_earning_update_column,
  task_reviews_update_column,
  tasks_constraint,
  tasks_update_column,
  task_work_constraint,
  task_work_update_column,
  user_time_logs_constraint,
  user_time_logs_update_column,
  bonus_types_enum,
  task_reviews_status_enum,
  tasks_type_enum,
  tasks_status_enum,
  task_work_status_enum,
} from 'lib/graphql/roles/admin/generated/globalTypes';
import {
  insertUserInvoices,
  insertUserInvoicesVariables,
} from 'lib/graphql/roles/admin/generated/insertUserInvoices';
import { UPSERT_DEVELOPER_PENDING_INVOICE } from 'lib/graphql/roles/admin/mutations';

@ObjectType()
class DeveloperInvoice {
  constructor({
    id,
    developerId,
    userId,
    costInUSD,
    bonusEarning,
    userTimeBaseEarning,
    taskDeveloper,
    taskManager,
    taskReviewDeveloper,
    taskReviewerManager,
    taskWorkDeveloper,
    taskWorkManager,
    dueAt,
    startAt,
    endAt,
    status,
    originalStatus,
    orginalCostInUSD,
    totalTaskBasedEarnings,
    totalTimeBasedEarnings,
    adjustedCostInUSD,
    totalBonusEarnings,
  }: NonFunctionProperties<DeveloperInvoice>) {
    this.id = id;
    this.developerId = developerId;
    this.userId = userId;
    this.costInUSD = costInUSD;
    this.startAt = startAt;
    this.endAt = endAt;
    this.bonusEarning = bonusEarning;
    this.userTimeBaseEarning = userTimeBaseEarning;
    this.taskDeveloper = taskDeveloper;
    this.adjustedCostInUSD = adjustedCostInUSD;
    this.taskManager = taskManager;
    this.taskReviewDeveloper = taskReviewDeveloper;
    this.taskReviewerManager = taskReviewerManager;
    this.taskWorkDeveloper = taskWorkDeveloper;
    this.taskWorkManager = taskWorkManager;
    this.dueAt = dueAt;
    this.status = status;
    this.originalStatus = originalStatus;
    this.orginalCostInUSD = orginalCostInUSD;
    this.totalTaskBasedEarnings = totalTaskBasedEarnings;
    this.totalTimeBasedEarnings = totalTimeBasedEarnings;
    this.totalBonusEarnings = totalBonusEarnings;

    if (
      this.status === user_invoice_status_enum.draft &&
      moment(this.dueAt || undefined).isBefore(moment())
    ) {
      this.status = 'complete';
    }
  }

  @Field(() => ID, { nullable: true })
  id: number | null;

  @Field(() => String)
  developerId: string;

  @Field(() => Number)
  userId: number;

  @Field(() => Number)
  costInUSD: number;

  @Field(() => Number, { nullable: true })
  adjustedCostInUSD!: number | null;

  @Field(() => Number, { nullable: true })
  orginalCostInUSD?: number | null = null;

  @Field(() => Number)
  totalTimeBasedEarnings: number;

  @Field(() => Number)
  totalTaskBasedEarnings: number;

  @Field(() => Number)
  totalBonusEarnings: number;

  @Field(() => [ID])
  bonusEarning: number[];

  @Field(() => [ID])
  taskDeveloper: number[];

  @Field(() => [ID])
  taskManager: number[];

  @Field(() => [ID])
  taskReviewDeveloper: number[];

  @Field(() => [ID])
  taskReviewerManager: number[];

  @Field(() => [ID])
  taskWorkDeveloper: number[];

  @Field(() => [ID])
  taskWorkManager: number[];

  @Field(() => [ID])
  userTimeBaseEarning: number[];

  @Field(() => Date, { nullable: true })
  dueAt: Date | null;

  @Field(() => Date, { nullable: true })
  startAt?: Date | null;

  @Field(() => Date, { nullable: true })
  endAt?: Date | null;

  @Field(() => String)
  status: 'complete' | 'draft';

  @Field(() => String, { nullable: true })
  originalStatus: 'complete' | 'draft' | null;

  static getInvoiceByTime(
    userId: number,
    developerId: string,
    invoiceBucket: DeveloperInvoice[],
    completedAt: string | null
  ) {
    let invoice = invoiceBucket.find(
      b =>
        moment(b.startAt || undefined).isSameOrBefore(
          moment(completedAt || undefined)
        ) &&
        moment(b.endAt || undefined).isAfter(moment(completedAt || undefined))
    );
    if (!invoice) {
      if (
        moment(completedAt || undefined).isSameOrAfter(moment('2019-12-01'))
      ) {
        const invoice = new DeveloperInvoice({
          id: null,
          adjustedCostInUSD: null,
          developerId,
          userId,
          costInUSD: 0,
          orginalCostInUSD: 0,
          totalTaskBasedEarnings: 0,
          totalTimeBasedEarnings: 0,
          totalBonusEarnings: 0,
          bonusEarning: [],
          userTimeBaseEarning: [],
          taskDeveloper: [],
          taskManager: [],
          taskReviewDeveloper: [],
          taskReviewerManager: [],
          taskWorkDeveloper: [],
          taskWorkManager: [],
          dueAt: moment(completedAt || undefined)
            .endOf('month')
            .toDate(),
          startAt: moment(completedAt || undefined)
            .startOf('month')
            .toDate(),
          endAt: moment(completedAt || undefined)
            .endOf('month')
            .toDate(),
          status: moment(completedAt || undefined)
            .endOf('month')
            .isSameOrBefore(moment())
            ? 'complete'
            : 'draft',
          originalStatus: null,
        });
        invoiceBucket.push(invoice);
        return invoice;
      } else {
        const daysBeforeCompletedAt = moment(completedAt || undefined).diff(
          moment('2019-07-01'),
          'days'
        );
        const invoice = new DeveloperInvoice({
          id: null,
          adjustedCostInUSD: null,
          developerId,
          userId,
          costInUSD: 0,
          orginalCostInUSD: 0,
          totalTaskBasedEarnings: 0,
          totalTimeBasedEarnings: 0,
          totalBonusEarnings: 0,
          bonusEarning: [],
          userTimeBaseEarning: [],
          taskDeveloper: [],
          taskManager: [],
          taskReviewDeveloper: [],
          taskReviewerManager: [],
          taskWorkDeveloper: [],
          taskWorkManager: [],
          dueAt: moment('2019-07-01')
            .add(
              daysBeforeCompletedAt + 7 - ((daysBeforeCompletedAt + 7) % 7),
              'days'
            )
            .toDate(),
          startAt: moment('2019-07-01')
            .add(daysBeforeCompletedAt - (daysBeforeCompletedAt % 7), 'days')
            .toDate(),
          endAt: moment('2019-07-01')
            .add(
              daysBeforeCompletedAt + 7 - ((daysBeforeCompletedAt + 7) % 7),
              'days'
            )
            .toDate(),
          status: moment(completedAt || undefined)
            .endOf('month')
            .isSameOrBefore(moment())
            ? 'complete'
            : 'draft',
          originalStatus: null,
        });
        invoiceBucket.push(invoice);
        return invoice;
      }
    }
    return invoice;
  }

  static fromDeveloperInvoice(
    developer: fetchPendingDeveloperEarnings_developers,
    invoice: fetchPendingDeveloperEarnings_developers_user_user_invoices
  ) {
    const {
      tasksDeveloper,
      user_time_earnings,
      tasksManager,
      taskReviewerDeveloper,
      taskReviewerManager,
      task_works,
      taskWorksByManagerinvoiceid,
    } = invoice;

    const timeBasedEarning =
      user_time_earnings.aggregate?.sum?.earningsinusd || 0;

    const totalEarningFromTasks =
      (tasksDeveloper.aggregate?.sum?.costInUSD || 0) * DEVELOPER_COST +
      (tasksManager.aggregate?.sum?.costInUSD || 0) * MANAGER_COST +
      (taskReviewerDeveloper.aggregate?.sum?.costInUSD || 0) * DEVELOPER_COST +
      (taskReviewerManager.aggregate?.sum?.costInUSD || 0) * DEVELOPER_COST +
      (task_works.aggregate?.sum?.costInUSD || 0) +
      (taskWorksByManagerinvoiceid.aggregate?.sum?.costInUSD || 0);

    const daysBeforeCompletedAt = moment(invoice.dueAt || undefined).diff(
      moment('2019-07-01'),
      'days'
    );

    const startAt = invoice.startAt
      ? moment(invoice.startAt).toDate()
      : moment(invoice.dueAt || undefined).isAfter(moment('2019-12-01'))
      ? moment(invoice.dueAt || undefined)
          .startOf('month')
          .toDate()
      : moment('2019-07-01')
          .add(daysBeforeCompletedAt - (daysBeforeCompletedAt % 7), 'days')
          .toDate();

    const endAt = invoice.endAt
      ? moment(invoice.endAt).toDate()
      : moment(invoice.dueAt || undefined).isAfter(moment('2019-12-01'))
      ? moment(invoice.dueAt || undefined)
          .endOf('month')
          .toDate()
      : moment('2019-07-01')
          .add(
            daysBeforeCompletedAt + 7 - ((daysBeforeCompletedAt + 7) % 7),
            'days'
          )
          .toDate();
    return new DeveloperInvoice({
      id: invoice.id,
      adjustedCostInUSD: invoice.adjustedCostInUSD,
      developerId: developer.id,
      userId: developer.user.id,
      orginalCostInUSD: invoice.costInUSD,
      totalTaskBasedEarnings: totalEarningFromTasks,
      totalTimeBasedEarnings: timeBasedEarning,
      totalBonusEarnings:
        invoice.developer_bonus_earnings.aggregate?.sum?.amountInUSD || 0,
      costInUSD: 0,
      bonusEarning: [],
      taskWorkDeveloper: [],
      taskWorkManager: [],
      taskDeveloper: [],
      taskManager: [],
      taskReviewDeveloper: [],
      taskReviewerManager: [],
      userTimeBaseEarning: [],
      dueAt: moment(invoice.dueAt || undefined).toDate(),
      startAt,
      endAt,
      status: invoice.status,
      originalStatus: invoice.status,
    });
  }
}

@ObjectType()
export class DeveloperInvoices {
  constructor({
    developerId,
    pendingInvoices,
  }: NonFunctionProperties<DeveloperInvoices>) {
    this.developerId = developerId;
    this.pendingInvoices = pendingInvoices;
  }

  @Field(() => String)
  developerId: string;

  @Field(() => [DeveloperInvoice])
  pendingInvoices: DeveloperInvoice[];

  static addTasksIntoInvoices(
    invoiceBuckets: DeveloperInvoice[],
    developerEarnings: fetchPendingDeveloperEarnings_developers
  ) {
    developerEarnings.developer_bonus_earnings.forEach(
      ({ id, amountInUSD, endDate }) => {
        const invoice = DeveloperInvoice.getInvoiceByTime(
          developerEarnings.user.id,
          developerEarnings.id,
          invoiceBuckets,
          endDate
        );
        invoice.totalBonusEarnings += amountInUSD;
        invoice.bonusEarning.push(id);
      }
    );

    developerEarnings.task_reviews.forEach(({ id, completedAt, costInUSD }) => {
      const invoice = DeveloperInvoice.getInvoiceByTime(
        developerEarnings.user.id,
        developerEarnings.id,
        invoiceBuckets,
        completedAt
      );
      invoice.totalTaskBasedEarnings += costInUSD * DEVELOPER_COST;
      invoice.taskReviewerManager.push(id);
    });

    developerEarnings.taskReviewsByDeveloperid.forEach(
      ({ id, completedAt, costInUSD }) => {
        const invoice = DeveloperInvoice.getInvoiceByTime(
          developerEarnings.user.id,
          developerEarnings.id,
          invoiceBuckets,
          completedAt
        );
        invoice.totalTaskBasedEarnings += costInUSD * DEVELOPER_COST;
        invoice.taskReviewDeveloper.push(id);
      }
    );

    developerEarnings.tasksByDeveloperid.forEach(
      ({ id, completedAt, costInUSD }) => {
        const invoice = DeveloperInvoice.getInvoiceByTime(
          developerEarnings.user.id,
          developerEarnings.id,
          invoiceBuckets,
          completedAt
        );
        invoice.totalTaskBasedEarnings += costInUSD * DEVELOPER_COST;
        invoice.taskDeveloper.push(id);
      }
    );

    developerEarnings.tasksByManagerid.forEach(
      ({ id, completedAt, costInUSD }) => {
        const invoice = DeveloperInvoice.getInvoiceByTime(
          developerEarnings.user.id,
          developerEarnings.id,
          invoiceBuckets,
          completedAt
        );
        invoice.totalTaskBasedEarnings += costInUSD * MANAGER_COST;
        invoice.taskManager.push(id);
      }
    );

    developerEarnings.task_works.forEach(({ id, completedAt, costInUSD }) => {
      const invoice = DeveloperInvoice.getInvoiceByTime(
        developerEarnings.user.id,
        developerEarnings.id,
        invoiceBuckets,
        completedAt
      );
      invoice.totalTaskBasedEarnings += costInUSD * MANAGER_COST;
      invoice.taskWorkManager.push(id);
    });

    developerEarnings.taskWorksByDeveloperid.forEach(
      ({ id, completedAt, costInUSD }) => {
        const invoice = DeveloperInvoice.getInvoiceByTime(
          developerEarnings.user.id,
          developerEarnings.id,
          invoiceBuckets,
          completedAt
        );
        invoice.totalTaskBasedEarnings += costInUSD * DEVELOPER_COST;
        invoice.taskWorkDeveloper.push(id);
      }
    );

    developerEarnings.user.user_time_earnings.forEach(
      ({ id, finishedAt, earningsinusd }) => {
        const invoice = DeveloperInvoice.getInvoiceByTime(
          developerEarnings.user.id,
          developerEarnings.id,
          invoiceBuckets,
          finishedAt
        );
        invoice.totalTimeBasedEarnings += earningsinusd || 0;
        id && invoice.userTimeBaseEarning.push(id);
      }
    );

    invoiceBuckets.forEach(invoice => {
      const {
        totalBonusEarnings,
        totalTaskBasedEarnings,
        totalTimeBasedEarnings,
      } = invoice;
      const totalEarning =
        totalTaskBasedEarnings > totalTimeBasedEarnings
          ? totalTaskBasedEarnings
          : totalTimeBasedEarnings;
      invoice.costInUSD += Math.round(totalEarning + totalBonusEarnings);
    });

    return invoiceBuckets;
  }

  static filterInvoices(invoices: DeveloperInvoice[]) {
    invoices.filter(invoice => {
      return invoice.costInUSD !== invoice.orginalCostInUSD;
    });
  }

  static async getAllPendingInvoices(graphqlClient: HasuraClient) {
    const resp = await graphqlClient.query<fetchAllPendingDeveloperEarnings>({
      query: FETCH_ALL_PENDING_DEVELOPER_EARNINGS,
    });

    if (resp.errors) {
      throw resp.errors[0];
    }

    return resp.data.developers.map(developer => {
      const existingInvoices = developer.user.user_invoices.map(invoice => {
        return DeveloperInvoice.fromDeveloperInvoice(developer, invoice);
      });

      return new DeveloperInvoices({
        developerId: developer.id,
        pendingInvoices: DeveloperInvoices.addTasksIntoInvoices(
          existingInvoices,
          developer
        ),
      });
    });
  }

  static async getPendingInvoices(
    graphqlClient: HasuraClient,
    developerId: string
  ) {
    const resp = await graphqlClient.query<
      fetchPendingDeveloperEarnings,
      fetchPendingDeveloperEarningsVariables
    >({
      query: FETCH_PENDING_DEVELOPER_EARNINGS,
      variables: {
        developerId,
      },
    });

    if (resp.errors) {
      throw resp.errors[0];
    }
    const developer = resp.data.developers[0];
    if (!developer) {
      throw new Error(`Can not find developer: ${developerId}`);
    }

    const existingInvoices = developer.user.user_invoices.map(invoice => {
      return DeveloperInvoice.fromDeveloperInvoice(developer, invoice);
    });

    return new DeveloperInvoices({
      developerId,
      pendingInvoices: DeveloperInvoices.addTasksIntoInvoices(
        existingInvoices,
        developer
      ),
    });
  }

  static async insertDeveloperInvoices(
    graphqlClient: HasuraClient,
    invoices: DeveloperInvoice[],
    safe: boolean
  ) {
    const updateColumns: user_invoices_update_column[] = [];
    if (!safe) {
      updateColumns.push(user_invoices_update_column.costInUSD);
    }
    const resp = await graphqlClient.mutate<
      insertUserInvoices,
      insertUserInvoicesVariables
    >({
      mutation: UPSERT_DEVELOPER_PENDING_INVOICE,
      variables: {
        invoices: invoices.map<user_invoices_insert_input>(inv => ({
          userId: inv.userId,
          costInUSD: inv.costInUSD,
          dueAt: inv.dueAt && inv.dueAt.toJSON(),
          startAt: inv.startAt?.toJSON(),
          endAt: inv.endAt?.toJSON(),
          status:
            inv.originalStatus === 'draft'
              ? user_invoice_status_enum.draft
              : user_invoice_status_enum.complete,
          ...(inv.id
            ? {
                id: Number(inv.id),
              }
            : {}),
          // Dummy data to triger upsert
          developer_bonus_earnings: {
            data: inv.bonusEarning.map(id => ({
              id,
              amountInUSD: 0,
              bonusType: bonus_types_enum.holiday_bonus,
              startDate: new Date().toJSON(),
              endDate: new Date().toJSON(),
              userLogin: '',
            })),
            on_conflict: {
              constraint:
                developer_bonus_earning_constraint.PK_c48f5e0409fe7f51ca64525b721,
              update_columns: [
                developer_bonus_earning_update_column.userInvoiceId,
              ],
            },
          },
          task_reviews: {
            data: inv.taskReviewDeveloper.map(id => ({
              id,
              costInUSD: 0,
              approvesTaskId: 1,
              status: task_reviews_status_enum.assigned,
            })),
            on_conflict: {
              constraint:
                task_reviews_constraint.PK_0e1b45486945f89aee4136b318f,
              update_columns: [task_reviews_update_column.reviewerInvoiceId],
            },
          },
          taskReviewsByManagerinvoiceid: {
            data: inv.taskReviewerManager.map(id => ({
              id,
              costInUSD: 0,
              approvesTaskId: 1,
              status: task_reviews_status_enum.assigned,
            })),
            on_conflict: {
              constraint:
                task_reviews_constraint.PK_0e1b45486945f89aee4136b318f,
              update_columns: [task_reviews_update_column.managerInvoiceId],
            },
          },
          tasks: {
            data: inv.taskDeveloper.map(id => ({
              id,
              type: tasks_type_enum.admin,
              description: '',
              title: '',
              ticketCode: '',
              costInUSD: 1,
              clientId: '',
              status: tasks_status_enum.assigned,
              clientRepositoryId: '1816c908-e3fc-4879-94d4-1dd2514f74eb',
              isBillable: false,
            })),
            on_conflict: {
              constraint: tasks_constraint.PK_8d12ff38fcc62aaba2cab748772,
              update_columns: [tasks_update_column.developerInvoiceId],
            },
          },
          tasksByManagerinvoiceid: {
            data: inv.taskManager.map(id => ({
              id,
              type: tasks_type_enum.admin,
              description: '',
              title: '',
              ticketCode: '',
              costInUSD: 1,
              clientId: '',
              status: tasks_status_enum.assigned,
              clientRepositoryId: '1816c908-e3fc-4879-94d4-1dd2514f74eb',
              isBillable: false,
            })),
            on_conflict: {
              constraint: tasks_constraint.PK_8d12ff38fcc62aaba2cab748772,
              update_columns: [tasks_update_column.managerInvoiceId],
            },
          },
          task_works: {
            data: inv.taskWorkDeveloper.map(id => ({
              id,
              costInUSD: 1,
              resourceURL: '',
              status: task_work_status_enum.assigned,
            })),
            on_conflict: {
              constraint: task_work_constraint.PK_e91316aba5c0fa394f53cd94bf4,
              update_columns: [task_work_update_column.workerInvoiceId],
            },
          },
          taskWorksByManagerinvoiceid: {
            data: inv.taskWorkManager.map(id => ({
              id,
              costInUSD: 1,
              resourceURL: '',
              status: task_work_status_enum.assigned,
            })),
            on_conflict: {
              constraint: task_work_constraint.PK_e91316aba5c0fa394f53cd94bf4,
              update_columns: [task_work_update_column.managerInvoiceId],
            },
          },
          user_time_logs: {
            data: inv.userTimeBaseEarning.map(id => ({
              id,
              startedAt: new Date().toJSON(),
              timeSpentInHours: 1,
              userLogin: inv.developerId,
            })),
            on_conflict: {
              constraint:
                user_time_logs_constraint.PK_112b9e271f3eb39a9e347db07bb,
              update_columns: [user_time_logs_update_column.userInvoiceId],
            },
          },
        })),
        onConflict: {
          constraint: user_invoices_constraint.PK_cedd26761ec7d6a0772be9f8289,
          update_columns: updateColumns,
        },
      },
    });

    if (resp.errors) {
      throw resp.errors[0];
    }
    const updatedInvoices =
      resp.data && resp.data.insert_user_invoices
        ? resp.data.insert_user_invoices.returning
        : null;
    if (!updatedInvoices) {
      throw new Error('No invoices were updated');
    }

    return updatedInvoices.map(
      ({
        id,
        user,
        userId,
        costInUSD,
        dueAt,
        status,
        developer_bonus_earnings,
        task_reviews,
        taskReviewsByManagerinvoiceid,
        tasks,
        tasksByManagerinvoiceid,
        adjustedCostInUSD,
        task_works,
        taskWorksByManagerinvoiceid,
        user_time_earnings,
      }) => {
        return new DeveloperInvoice({
          id,
          developerId: user.login ? user.login : '',
          adjustedCostInUSD,
          userId,
          costInUSD,
          dueAt: dueAt ? new Date(dueAt) : null,
          totalBonusEarnings: 0,
          totalTaskBasedEarnings: 0,
          totalTimeBasedEarnings: 0,
          status,
          bonusEarning: developer_bonus_earnings.map(({ id }) => {
            return id;
          }),
          taskReviewDeveloper: task_reviews.map(({ id }) => {
            return id;
          }),
          taskReviewerManager: taskReviewsByManagerinvoiceid.map(({ id }) => {
            return id;
          }),
          taskDeveloper: tasks.map(({ id }) => {
            return id;
          }),
          taskManager: tasksByManagerinvoiceid.map(({ id }) => {
            return id;
          }),
          taskWorkDeveloper: task_works.map(({ id }) => {
            return id;
          }),
          taskWorkManager: taskWorksByManagerinvoiceid.map(({ id }) => {
            return id;
          }),
          userTimeBaseEarning: user_time_earnings.map(({ id }) => {
            return id || 0;
          }),
          originalStatus: null,
        });
      }
    );
  }

  static async generateAllPendingDeveloperInvoices(
    graphqlClient: HasuraClient,
    safe: boolean
  ) {
    const allDeveloperInvoices = await this.getAllPendingInvoices(
      graphqlClient
    );
    const totalInvoices = allDeveloperInvoices
      .map(inv => inv.filterInvoices())
      .filter(inv => !!inv.pendingInvoices.length)
      .reduce(
        (invoices, DeveloperInvoice) => [
          ...invoices,
          ...DeveloperInvoice.pendingInvoices,
        ],
        [] as DeveloperInvoice[]
      );
    const updatedInvoices = await DeveloperInvoices.insertDeveloperInvoices(
      graphqlClient,
      totalInvoices,
      safe
    );
    return allDeveloperInvoices
      .map(
        inv =>
          new DeveloperInvoices({
            developerId: inv.developerId,
            pendingInvoices: updatedInvoices.filter(
              i => i.developerId === inv.developerId
            ),
          })
      )
      .filter(inv => !!inv.pendingInvoices.length);
  }

  filterInvoices() {
    this.pendingInvoices = this.pendingInvoices.filter(
      inv =>
        inv.costInUSD !== inv.orginalCostInUSD ||
        inv.status !== inv.originalStatus ||
        inv.taskDeveloper.length ||
        inv.taskManager.length ||
        inv.taskReviewDeveloper.length ||
        inv.taskReviewerManager.length ||
        inv.taskWorkDeveloper.length ||
        inv.taskWorkManager.length ||
        inv.userTimeBaseEarning.length ||
        inv.bonusEarning.length
    );

    return this;
  }

  static async generatePendingDeveloperInvoices(
    graphqlClient: HasuraClient,
    developerId: string,
    safe: boolean
  ) {
    const developerInvoices = await DeveloperInvoices.getPendingInvoices(
      graphqlClient,
      developerId
    );

    if (!developerInvoices.pendingInvoices.length) {
      return developerInvoices;
    }
    return new DeveloperInvoices({
      developerId,
      pendingInvoices: await DeveloperInvoices.insertDeveloperInvoices(
        graphqlClient,
        developerInvoices.filterInvoices().pendingInvoices,
        safe
      ),
    });
  }
}

@Resolver(() => DeveloperInvoices)
export class DeveloperInvoiceResolver {
  @Query(() => DeveloperInvoices)
  async getPendingInvoiceForDeveloper(
    @Arg('developerId') developerId: string,
    @Ctx() ctx: Context
  ): Promise<DeveloperInvoices> {
    const invs = await DeveloperInvoices.getPendingInvoices(
      ctx.hasuraClient,
      developerId
    );

    return invs.filterInvoices();
  }

  @Query(() => [DeveloperInvoices])
  async getPendingInvoiceForAllDeveloper(
    @Ctx() ctx: Context
  ): Promise<DeveloperInvoices[]> {
    const allInvs = await DeveloperInvoices.getAllPendingInvoices(
      ctx.hasuraClient
    );

    return allInvs
      .map(inv => inv.filterInvoices())
      .filter(inv => !!inv.pendingInvoices.length);
  }

  @Mutation(() => DeveloperInvoices)
  async generatePendingInvoicesForDeveloper(
    @Arg('developerId') developerId: string,
    @Arg('safe') safe: boolean,
    @Ctx() ctx: Context
  ): Promise<DeveloperInvoices> {
    const invs = await DeveloperInvoices.generatePendingDeveloperInvoices(
      ctx.hasuraClient,
      developerId,
      safe
    );

    return invs;
  }

  @Mutation(() => [DeveloperInvoices])
  async generatePendingInvoicesForAllDeveloper(
    @Arg('safe') safe: boolean,
    @Ctx() ctx: Context
  ): Promise<DeveloperInvoices[]> {
    return DeveloperInvoices.generateAllPendingDeveloperInvoices(
      ctx.hasuraClient,
      safe
    );
  }
}
