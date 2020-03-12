import 'reflect-metadata';
import moment from 'moment';
import gql from 'graphql-tag';
import lodash from 'lodash';
import {
  ID,
  Ctx,
  Arg,
  Query,
  Float,
  Field,
  Resolver,
  Mutation,
  ObjectType,
} from 'type-graphql';

import { Context, HasuraClient } from 'server/entities/types';
import { enumerateDaysBetweenDates, NonFunctionProperties } from 'server/utils';
import { HolidaysResponse } from 'lib/types';
import {
  fetchHolidays,
  groupUserHolidaysByWeek,
  enumerateWeeks,
} from 'server/utils';
import {
  WEEKDAYS,
  DATE_FORMAT,
  MANAGER_COST,
  DEVELOPER_COST,
  REVIEWER_COST,
  INITIAL_START_DATE,
} from 'lib/constants';
import {
  fetchAllCompletedTasks,
  fetchAllCompletedTasks_tasks as Task,
} from 'lib/graphql/roles/admin/generated/fetchAllCompletedTasks';
import {
  fetchAllDevelopersAndContractsAndWeeklyEarnings,
  fetchAllDevelopersAndContractsAndWeeklyEarnings_developers_developer_contracts as DeveloperContract,
  fetchAllDevelopersAndContractsAndWeeklyEarnings_developers_developer_weekly_earnings as DeveloperWeeklyEarning,
} from 'lib/graphql/roles/admin/generated/fetchAllDevelopersAndContractsAndWeeklyEarnings';
import {
  insertUpdateAndDeleteWeeklyEarnings,
  insertUpdateAndDeleteWeeklyEarningsVariables,
} from 'lib/graphql/roles/admin/generated/insertUpdateAndDeleteWeeklyEarnings';
import { insertNewWeeklyEarnings } from 'lib/graphql/roles/admin/generated/insertNewWeeklyEarnings';
import { tasks_status_enum as TS } from 'lib/graphql/roles/admin/generated/globalTypes';
import {
  FETCH_ALL_DEVELOPERS_CONTRACTS_WEEKLY_EARNINGS,
  FETCH_ALL_COMPLETED_TASKS,
} from 'lib/graphql/roles/admin/queries';
import { INSERT_NEW_WEEKLY_EARNINGS } from 'lib/graphql/roles/admin/mutations';

type WeeklyEarningWithId = Omit<DeveloperWeeklyEarning, '__typename'>;
type WeeklyEarning = Omit<WeeklyEarningWithId, 'id'>;

export const computeBasePayForTheWeek = (
  contracts: DeveloperContract[],
  developerWeekHolidays: string[],
  week: { start: string; end: string }
) => {
  const daysRange = enumerateDaysBetweenDates(
    moment(week.start),
    moment(week.end)
  );

  return daysRange.slice(0, WEEKDAYS).reduce((acc, t) => {
    const contract = contracts.find(
      i =>
        moment(t).isSameOrAfter(moment(i.startDate)) &&
        (!i.endDate || moment(t).isSameOrBefore(moment(i.endDate)))
    );
    if (
      contract &&
      (!developerWeekHolidays || !developerWeekHolidays.includes(t))
    ) {
      acc += (contract.amountPerWeek || 0) / WEEKDAYS;
    }
    return acc;
  }, 0);
};

export const groupTasksByWeekOfCompletion = (tasks: Task[]) => {
  const weekRanges = enumerateWeeks();
  return lodash
    .chain(tasks)
    .groupBy((task: Task) =>
      weekRanges.findIndex(
        (t: { start: string; end: string }) =>
          moment(task.completedAt || undefined).isSameOrAfter(t.start) &&
          moment(task.completedAt || undefined).isBefore(t.end) &&
          task.status === TS.finished
      )
    )
    .value();
};

function computeTaskCost(task: Task, userLogin: string) {
  let total = 0;
  if (task.developerByManagerid?.login === userLogin) {
    total += MANAGER_COST * task.costInUSD;
  }
  if (task.developerByDeveloperid?.login === userLogin) {
    total += DEVELOPER_COST * task.costInUSD;
  }

  if (task.developerByReviewerid?.login === userLogin) {
    total += REVIEWER_COST * task.costInUSD;
  }

  return total;
}

function calculateDeveloperEarningsFromTasks(userLogin: string, tasks: Task[]) {
  if (!tasks || tasks.length === 0) return 0;

  return tasks
    .filter(
      ({
        developerByDeveloperid,
        developerByManagerid,
        developerByReviewerid,
      }) =>
        [
          developerByDeveloperid?.login,
          developerByManagerid?.login,
          developerByReviewerid?.login,
        ].includes(userLogin)
    )
    .reduce((acc, task) => acc + computeTaskCost(task, userLogin), 0);
}

const calculateDiff = (
  earnings: {
    oldData: WeeklyEarningWithId[];
    newData: WeeklyEarning[];
  },
  userLogin: string
) => {
  const changed_earnings: {
    oldData: WeeklyEarningWithId;
    newData: WeeklyEarning;
  }[] = [];
  const new_earnings: WeeklyEarning[] = [];
  const oldData = earnings.oldData.slice();

  earnings.newData.forEach(earning => {
    // filter out all possible duplicates
    const result = oldData.filter(
      e =>
        moment(e.startDate).isSameOrAfter(earning.startDate) &&
        moment(e.startDate).isBefore(earning.endDate)
    );

    if (result.length) {
      result.forEach(old => {
        const oldEarningIndex = oldData.findIndex(i => i.id === old.id);

        if (
          !(
            moment(old.startDate).isSame(earning.startDate) &&
            moment(old.endDate).isSame(earning.endDate) &&
            earning.minimumAmountEarned === old.minimumAmountEarned &&
            earning.amountEarnedWithTasks === old.amountEarnedWithTasks
          )
        ) {
          changed_earnings.push(
            new ChangedEarning({
              oldData: old,
              newData: earning,
            })
          );
          oldData.splice(oldEarningIndex, 1);
        } else {
          oldData.splice(oldEarningIndex, 1);
        }
      });
    } else {
      new_earnings.push(earning);
    }
  });

  return new EarningsDiff({
    new_earnings:
      oldData.length && oldData.length === earnings.newData.length
        ? []
        : new_earnings,
    nuked_earnings: oldData,
    userLogin,
    changed_earnings,
  });
};

export const computeDeveloperEarnings = (
  developerId: string,
  userLogin: string,
  completedTasksMap: { [key: string]: Task[] },
  developerContracts: DeveloperContract[],
  holidays: HolidaysResponse[],
  previousEarnings: DeveloperWeeklyEarning[]
) => {
  const developerHolidays = groupUserHolidaysByWeek(developerId, holidays);

  const earnings: {
    newData: WeeklyEarning[];
    oldData: WeeklyEarningWithId[];
  } = {
    oldData: previousEarnings,
    newData: enumerateWeeks().map((week, idx) => {
      const minimumAmountEarned = computeBasePayForTheWeek(
        developerContracts,
        developerHolidays[idx],
        week
      );

      const amountEarnedWithTasks = calculateDeveloperEarningsFromTasks(
        userLogin,
        completedTasksMap[idx]
      );

      // TODO: Integrate timeDoctor in V2
      return {
        userLogin,
        amountEarnedWithTasks,
        minimumAmountEarned,
        startDate: week.start,
        endDate: week.end,
      };
    }),
  };

  return calculateDiff(earnings, userLogin);
};

@ObjectType()
class NewEarning {
  constructor({
    userLogin,
    endDate,
    startDate,
    minimumAmountEarned,
    amountEarnedWithTasks,
  }: WeeklyEarning) {
    this.userLogin = userLogin!;
    this.endDate = endDate;
    this.startDate = startDate;
    this.minimumAmountEarned = minimumAmountEarned;
    this.amountEarnedWithTasks = amountEarnedWithTasks;
  }
  @Field(() => Float, { nullable: true })
  amountEarnedWithTasks: number | null;

  @Field(() => String)
  userLogin: string;

  @Field(() => Float, { nullable: true })
  minimumAmountEarned: number | null;

  @Field(() => String)
  startDate: string;

  @Field(() => String)
  endDate: string;
}

@ObjectType()
class OldEarning {
  constructor({
    id,
    userLogin,
    endDate,
    startDate,
    minimumAmountEarned,
    amountEarnedWithTasks,
  }: WeeklyEarningWithId) {
    this.id = id;
    this.userLogin = userLogin;
    this.endDate = endDate;
    this.startDate = startDate;
    this.minimumAmountEarned = minimumAmountEarned;
    this.amountEarnedWithTasks = amountEarnedWithTasks;
  }

  @Field(() => ID)
  id: number;

  @Field(() => Float, { nullable: true })
  amountEarnedWithTasks: number | null;

  @Field(() => String)
  userLogin: string;

  @Field(() => Float, { nullable: true })
  minimumAmountEarned: number | null;

  @Field(() => String)
  startDate: string;

  @Field(() => String)
  endDate: string;
}

@ObjectType()
class ChangedEarning {
  constructor({ newData, oldData }: NonFunctionProperties<ChangedEarning>) {
    this.oldData = oldData;
    this.newData = newData;
  }

  @Field(() => OldEarning)
  oldData: OldEarning;

  @Field(() => NewEarning)
  newData: NewEarning;
}

@ObjectType()
class EarningsDiff {
  constructor({
    changed_earnings,
    new_earnings,
    nuked_earnings,
    userLogin,
  }: NonFunctionProperties<EarningsDiff>) {
    this.changed_earnings = changed_earnings;
    this.new_earnings = new_earnings;
    this.nuked_earnings = nuked_earnings;
    this.userLogin = userLogin;
  }
  @Field(() => [ChangedEarning])
  changed_earnings: ChangedEarning[] = [];

  @Field(() => NewEarning)
  new_earnings: NewEarning[] = [];

  @Field(() => OldEarning)
  nuked_earnings: OldEarning[] = [];

  @Field(() => String)
  userLogin: string;
}

@ObjectType()
export class Earnings {
  constructor({
    earningsDiff,
    state,
    message,
  }: {
    state?: string;
    message?: string;
    earningsDiff: EarningsDiff[];
  }) {
    this.earningsDiff = earningsDiff;
    this.state = state;
    this.message = message;
  }

  @Field(() => String, { nullable: true })
  state?: string;

  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => [EarningsDiff])
  earningsDiff: EarningsDiff[] = [];

  static async fetchWeeklyEarnings(client: HasuraClient): Promise<Earnings> {
    const [developerData, tasksData, holidays] = await Promise.all([
      client.query<fetchAllDevelopersAndContractsAndWeeklyEarnings>({
        query: FETCH_ALL_DEVELOPERS_CONTRACTS_WEEKLY_EARNINGS,
      }),
      client.query<fetchAllCompletedTasks>({
        query: FETCH_ALL_COMPLETED_TASKS,
        variables: { completedAt: INITIAL_START_DATE },
      }),
      fetchHolidays(INITIAL_START_DATE, moment().format(DATE_FORMAT)),
    ]);
    const {
      data: { developers },
    } = developerData;
    const allCompletedTasks = tasksData.data.tasks;
    const completedTaskMap = groupTasksByWeekOfCompletion(allCompletedTasks);

    const results = [];
    for (const developer of developers) {
      const {
        login,
        developer_contracts,
        developer_weekly_earnings,
      } = developer;
      if (developer_contracts.length === 0) {
        console.log(`${login} does not have any associated contract`);
        continue;
      } else {
        results.push(
          computeDeveloperEarnings(
            developer.id,
            login,
            completedTaskMap,
            developer_contracts,
            holidays,
            developer_weekly_earnings
          )
        );
      }
    }
    return new Earnings({
      earningsDiff: results,
    });
  }

  // insert can only happen in safe mode
  static async insertEarnings(
    client: HasuraClient,
    state: string
  ): Promise<Earnings> {
    const { earningsDiff } = await Earnings.fetchWeeklyEarnings(client);

    const newWeeklyEarningsDataToInsert: WeeklyEarning[] = [];
    const changedWeeklyEarningsdDataToUpdate: WeeklyEarningWithId[] = [];
    const nukedWeeklyEarningsDataToDelete: WeeklyEarningWithId[] = [];

    earningsDiff.forEach(result => {
      newWeeklyEarningsDataToInsert.push(...result.new_earnings);
      nukedWeeklyEarningsDataToDelete.push(...result.nuked_earnings);
      changedWeeklyEarningsdDataToUpdate.push(
        ...result.changed_earnings.map(earning => ({
          id: earning.oldData.id,
          ...earning.newData,
        }))
      );
    });

    if (
      state === 'safe' &&
      changedWeeklyEarningsdDataToUpdate.length &&
      nukedWeeklyEarningsDataToDelete.length
    ) {
      throw new Error('Operation is not safe. Address conflicts in the table');
    }

    if (state === 'safe') {
      await client.mutate<insertNewWeeklyEarnings>({
        mutation: INSERT_NEW_WEEKLY_EARNINGS,
        variables: { values: newWeeklyEarningsDataToInsert },
      });

      return new Earnings({
        message: 'Successfully updated!',
        earningsDiff,
      });
    }
    return new Earnings({
      message: `${state} is not supported. Please, provide appropriate state. E.G 'safe'`,
      earningsDiff,
    });
  }

  // bulk upsert(delete and update)
  static async upsertWeeklyEarnings(client: HasuraClient): Promise<Earnings> {
    const { earningsDiff } = await Earnings.fetchWeeklyEarnings(client);

    const newWeeklyEarningsDataToInsert: WeeklyEarning[] = [];
    const changedWeeklyEarningsdDataToUpdate: WeeklyEarningWithId[] = [];
    const nukedWeeklyEarningsDataToDelete: WeeklyEarningWithId[] = [];

    earningsDiff.forEach(result => {
      newWeeklyEarningsDataToInsert.push(...result.new_earnings);
      nukedWeeklyEarningsDataToDelete.push(...result.nuked_earnings);
      changedWeeklyEarningsdDataToUpdate.push(
        ...result.changed_earnings.map(earning => ({
          id: earning.oldData.id,
          ...earning.newData,
        }))
      );
    });

    const weeklyEarningsBulkUpdateMutation = changedWeeklyEarningsdDataToUpdate
      .map(
        ({ id, ...earning }) => `
            update${id}: update_developer_weekly_earning (
              where: {
                id: {
                   _eq: ${id} 
                }
              },
              _set: {
                startDate:  "${earning.startDate}",
                endDate:  "${earning.endDate}",
                userLogin:  "${earning.userLogin}",
                minimumAmountEarned: ${earning.minimumAmountEarned},
                amountEarnedWithTasks: ${earning.amountEarnedWithTasks}
              }
            ) {
              affected_rows
            }`
      )
      .join('\n');

    const weeklyEarningsBulkDeleteMutation = nukedWeeklyEarningsDataToDelete
      .map(
        ({ id }) => `
            delete${id}: delete_developer_weekly_earning (
              where: {
                id: {
                  _eq: ${id} 
                }
              }
            ) {
              affected_rows
            }`
      )
      .join('\n');

    await client.mutate<
      insertUpdateAndDeleteWeeklyEarnings,
      insertUpdateAndDeleteWeeklyEarningsVariables
    >({
      mutation: gql`
        mutation insertUpdateAndDeleteWeeklyEarnings(            
          $values: [developer_weekly_earning_insert_input!]!
        ) {
          insert: insert_developer_weekly_earning(
            objects: $values
          ) {
            returning {
              id
            }
          }
          ${weeklyEarningsBulkUpdateMutation}
          ${weeklyEarningsBulkDeleteMutation}
        }
        `,
      variables: { values: newWeeklyEarningsDataToInsert },
    });

    return new Earnings({
      message: 'Successfully updated weekly earnings!',
      earningsDiff: [],
    });
  }
}

@Resolver(() => Earnings)
export class EarningsResolver {
  @Query(() => Earnings)
  async earnings(@Ctx() ctx: Context): Promise<Earnings> {
    return Earnings.fetchWeeklyEarnings(ctx.hasuraClient);
  }

  @Mutation(() => Earnings)
  async insertEarnings(
    @Ctx() ctx: Context,
    @Arg('state') state: string
  ): Promise<Earnings> {
    return await Earnings.insertEarnings(ctx.hasuraClient, state);
  }

  @Mutation(() => Earnings)
  async updateEarnings(@Ctx() ctx: Context): Promise<Earnings> {
    return await Earnings.upsertWeeklyEarnings(ctx.hasuraClient);
  }
}
