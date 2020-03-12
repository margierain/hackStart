import 'reflect-metadata';
import {
  ID,
  Ctx,
  Query,
  Field,
  Resolver,
  Mutation,
  ObjectType,
  Arg,
  registerEnumType,
  ArgsType,
  Args,
  InputType,
} from 'type-graphql';
import { Context, HasuraClient } from './types';
import { NonFunctionProperties } from 'server/utils';
import {
  candidate_stage_enum as CS,
  skilltrack_types_enum as ST,
} from 'lib/graphql/roles/admin/generated/globalTypes';
import {
  updateCandidateStage,
  updateCandidateStageVariables,
} from 'lib/graphql/roles/admin/generated/updateCandidateStage';
import {
  checkExistingCandidates,
  checkExistingCandidatesVariables,
} from 'lib/graphql/roles/admin/generated/checkExistingCandidates';
import {
  fetchCandidateById,
  fetchCandidateByIdVariables,
} from 'lib/graphql/roles/admin/generated/fetchCandidateById';
import {
  insertNewUser,
  insertNewUserVariables,
} from 'lib/graphql/roles/admin/generated/insertNewUser';
import {
  insertNewCandidate,
  insertNewCandidateVariables,
} from 'lib/graphql/roles/admin/generated/insertNewCandidate';
import {
  UPDATE_CANDIDATE_STAGE,
  INSERT_NEW_USER,
  INSERT_NEW_CANDIDATE,
} from 'lib/graphql/roles/admin/mutations';
import {
  FETCH_CANDIDATE_BY_ID,
  CHECK_EXISTING_CANDIDATE,
} from 'lib/graphql/roles/admin/queries';

registerEnumType(ST, {
  name: 'SkillTrackType',
});

registerEnumType(CS, {
  name: 'CandidateStageType',
});

const stageChanges = {
  [CS.unqualified]: [CS.qualified, CS.needs_culture_screen],
  [CS.qualified]: [CS.unqualified, CS.needs_culture_screen],
  [CS.on_hold]: [
    CS.invited_for_culture_screen,
    CS.invited_for_tech_screen,
    CS.invited_for_hack_week,
    CS.unqualified,
  ],
  [CS.missed_culture_screen]: [
    CS.invited_for_culture_screen,
    CS.rejected_culture,
    CS.unqualified,
  ],
  [CS.missed_tech_screen]: [
    CS.invited_for_tech_screen,
    CS.rejected_culture,
    CS.unqualified,
  ],
  [CS.needs_culture_screen]: [
    CS.unqualified,
    CS.rejected_culture,
    CS.needs_tech_screen,
  ],
  [CS.needs_tech_screen]: [
    CS.unqualified,
    CS.rejected_tech,
    CS.needs_culture_screen,
    CS.invited_for_hack_week,
  ],
  [CS.rejected_tech]: [
    CS.unqualified,
    CS.needs_tech_screen,
    CS.needs_culture_screen,
  ],
  [CS.rejected_culture]: [
    CS.unqualified,
    CS.unqualified,
    CS.failed_culture_screen,
  ],
  [CS.invited_for_culture_screen]: [
    CS.invited_for_tech_screen,
    CS.unqualified,
    CS.rejected_culture,
  ],
  [CS.invited_for_tech_screen]: [
    CS.invited_for_hack_week,
    CS.rejected_tech,
    CS.unqualified,
  ],
  [CS.failed_culture_screen]: [CS.unqualified, CS.needs_culture_screen],
  [CS.passed_tech_screen]: [CS.invited_for_hack_week, CS.on_hold],
  [CS.invited_for_hack_week]: [CS.undergoing_hack_week, CS.failed_hack_week],
  [CS.undergoing_hack_week]: [
    CS.unqualified,
    CS.hired_part_time,
    CS.hired_part_time,
    CS.hired_full_time,
  ],
  [CS.failed_hack_week]: [
    CS.unqualified,
    CS.needs_culture_screen,
    CS.needs_tech_screen,
  ],
  [CS.hired_full_time]: [
    CS.unqualified,
    CS.hired_part_time,
    CS.hired_part_time,
  ],
  [CS.hired_part_time]: [
    CS.unqualified,
    CS.hired_part_time,
    CS.hired_full_time,
  ],
  [CS.hired_full_time]: [CS.unqualified, CS.hired_part_time],
};

const stageErrors: {
  name: string;
  condition: (c: Candidate) => boolean;
  appliesTo?: CS[];
  appliesToNot?: CS[];
}[] = [
  {
    name: 'Fill in errors here later, candidate has no id placeholder',
    condition: c => !!c.id,
    appliesTo: [
      CS.hired_full_time,
      CS.invited_for_hack_week,
      CS.needs_culture_screen,
      CS.needs_tech_screen,
      CS.hired_part_time,
      CS.qualified,
      CS.rejected_culture,
      CS.rejected_tech,
      CS.undergoing_hack_week,
      CS.unqualified,
      // CS.failed_hack_week
    ],
    appliesToNot: [],
  },
];

@ObjectType()
class PossibleCandidateStage {
  constructor({ stage, error }: NonFunctionProperties<PossibleCandidateStage>) {
    this.stage = stage;
    this.error = error;
  }

  @Field(() => CS)
  stage: CS;

  @Field({ nullable: true })
  error?: string;
}

const getPossibleCandidateStages = (
  candidate: Candidate
): PossibleCandidateStage[] =>
  stageChanges[candidate.stage].map(
    st =>
      new PossibleCandidateStage({
        stage: st,
        error: stageErrors
          .filter(({ condition, appliesTo, appliesToNot }) => {
            if (appliesTo && appliesTo.indexOf(st) === -1) {
              return false;
            }

            if (appliesToNot && appliesToNot.indexOf(st) !== -1) {
              return false;
            }

            if (condition(candidate)) {
              return false;
            }

            return true;
          })
          .map(st_err => st_err.name)[0],
      })
  );

@ObjectType()
export class CandidateStage {
  constructor({
    candidateId,
    possibleStages,
    stage,
  }: NonFunctionProperties<CandidateStage>) {
    this.candidateId = candidateId;
    this.possibleStages = possibleStages;
    this.stage = stage;
  }

  @Field(() => ID)
  candidateId: string;

  @Field(() => [PossibleCandidateStage])
  possibleStages: PossibleCandidateStage[] = [];

  @Field(() => CS)
  stage: CS;

  static async getCandidateStage(
    client: HasuraClient,
    candidateId: string
  ): Promise<CandidateStage> {
    const candidate = await Candidate.fetchCandidateById(client, candidateId);

    const possibleStages = getPossibleCandidateStages(candidate);

    return new CandidateStage({
      candidateId,
      possibleStages,
      stage: candidate.stage,
    });
  }

  static async updateCandidateStage(
    client: HasuraClient,
    candidateId: string,
    updatedStage: CS
  ): Promise<CandidateStage> {
    const candidate = await Candidate.fetchCandidateById(client, candidateId);

    const possibleStages = getPossibleCandidateStages(candidate);
    const st = updatedStage;
    if (!st) {
      throw new Error(`Invalid Stage: ${st}`);
    }

    const stageChange = possibleStages.find(st => st.stage === updatedStage);
    if (!stageChange) {
      throw new Error(`Stage change not allowed: ${updatedStage}`);
    }

    if (stageChange.error) {
      throw new Error(`Stage change failed: ${stageChange.error}`);
    }

    const result = await client.mutate<
      updateCandidateStage,
      updateCandidateStageVariables
    >({
      mutation: UPDATE_CANDIDATE_STAGE,
      variables: {
        candidateId: candidate.id,
        stage: stageChange.stage,
        updatedAt: new Date().toJSON(),
      },
    });

    if (result.data!.update_candidates!.affected_rows <= 0) {
      throw new Error('No candidate was updated.');
    }

    const updatedCandidate = await Candidate.fetchCandidateById(
      client,
      candidateId
    );
    return new CandidateStage({
      possibleStages: getPossibleCandidateStages(updatedCandidate),
      stage: updatedCandidate.stage,
      candidateId,
    });
  }
}

@ObjectType()
class User {
  constructor({
    id,
    firstName,
    lastName,
    email,
    passwordHash,
    telephone,
  }: NonFunctionProperties<User>) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.passwordHash = passwordHash;
    this.telephone = telephone;
  }

  @Field(() => ID)
  id: number;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => String, { nullable: true })
  telephone: string;

  @Field(() => String, { nullable: true })
  passwordHash?: string;
}

@ObjectType()
class Candidate {
  constructor({
    id,
    email,
    githubId,
    userId,
    minAnnualSalary,
    city,
    country,
    noticePeriod,
    culture_screen_feedback,
    tech_screen_feedback,
    stage,
    timezone,
    yearsOfExperience,
    source,
    skillTrack,
    agencyId,
    earliestStartDate,
  }: NonFunctionProperties<Candidate>) {
    this.id = id;
    this.email = email;
    this.githubId = githubId;
    this.userId = userId;
    this.minAnnualSalary = minAnnualSalary;
    this.city = city;
    this.country = country;
    this.noticePeriod = noticePeriod;
    this.culture_screen_feedback = culture_screen_feedback;
    this.tech_screen_feedback = tech_screen_feedback;
    this.stage = stage;
    this.timezone = timezone;
    this.yearsOfExperience = yearsOfExperience;
    this.source = source;
    this.skillTrack = skillTrack;
    this.agencyId = agencyId;
    this.skillTrack = skillTrack;
    this.earliestStartDate = earliestStartDate;
  }

  @Field(() => ID)
  id: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  githubId: string;

  @Field(() => Number)
  userId: number;

  @Field(() => Number)
  minAnnualSalary: number;

  @Field(() => String)
  city: string;

  @Field(() => String)
  country: string;

  @Field(() => Number)
  noticePeriod: number;

  @Field(() => Date, { nullable: true })
  earliestStartDate: Date | null;

  @Field(() => Number)
  timezone: number;

  @Field(() => Number)
  yearsOfExperience: number;

  @Field(() => String)
  source: string;

  @Field(() => ST)
  skillTrack: ST;

  @Field(() => String, { nullable: true })
  agencyId: string | null;

  @Field(() => CS)
  stage: CS;

  @Field(() => String, { nullable: true })
  culture_screen_feedback: string | null;

  @Field(() => String, { nullable: true })
  tech_screen_feedback: string | null;

  static async fetchCandidateById(
    client: HasuraClient,
    candidateId: string
  ): Promise<Candidate> {
    const result = await client.query<
      fetchCandidateById,
      fetchCandidateByIdVariables
    >({
      query: FETCH_CANDIDATE_BY_ID,
      variables: { id: candidateId },
    });
    const { candidates } = result.data;

    if (!candidates.length) {
      throw new Error('Candidate was not found');
    }
    const candidate = candidates[0];

    return new Candidate({
      ...candidate,
      earliestStartDate: candidate.earliestStartDate
        ? new Date(candidate.earliestStartDate)
        : null,
      email: candidate.user.user_emails[0].email,
    });
  }

  static async createNewCandidateAndUser(
    client: HasuraClient,
    data: insertUserAndCandidateObjects
  ): Promise<Candidate> {
    const existingCandidatesCheck = await client.query<
      checkExistingCandidates,
      checkExistingCandidatesVariables
    >({
      query: CHECK_EXISTING_CANDIDATE,
      variables: {
        email: data.objects[0].email,
        githubId: data.objects[0].candidates[0].githubId,
      },
    });

    if (existingCandidatesCheck.data.candidates.length > 0) {
      throw new Error('Uniqueness conflicts in candidate data.');
    }

    const newUserData = {
      objects: [
        {
          firstName: data.objects[0].firstName,
          lastName: data.objects[0].lastName,
          email: data.objects[0].email,
          telephone: data.objects[0].telephone,
        },
      ],
    };
    const result = await client.mutate<insertNewUser, insertNewUserVariables>({
      mutation: INSERT_NEW_USER,
      variables: newUserData,
    });

    const userId = result.data!.insert_users!.returning[0].id;

    const candidateShortcut = data.objects[0].candidates[0];

    const newCandidateData = {
      objects: [
        {
          ...candidateShortcut,
          earliestStartDate: candidateShortcut.earliestStartDate.toJSON(),
          email: data.objects[0].email,
          agencyId: 'gitstart-community',
          userId: userId,
        },
      ],
    };
    const candidateResult = await client.mutate<
      insertNewCandidate,
      insertNewCandidateVariables
    >({
      mutation: INSERT_NEW_CANDIDATE,
      variables: newCandidateData,
    });
    const candidate = candidateResult.data!.insert_candidates!.returning[0];
    return new Candidate({
      ...candidate,
      earliestStartDate: candidate.earliestStartDate
        ? new Date(candidate.earliestStartDate)
        : null,
      email: candidate.user.user_emails[0].email,
    });
  }
}

@Resolver(() => User)
export class UsersResolver {}

@Resolver(() => CandidateStage)
export class CandidateStageResolver {
  @Query(() => CandidateStage)
  async candidateStage(
    @Arg('candidateId') candidateId: string,
    @Ctx() ctx: Context
  ): Promise<CandidateStage | undefined> {
    return await CandidateStage.getCandidateStage(
      ctx.hasuraClient,
      candidateId
    );
  }

  @Mutation(() => CandidateStage)
  async updateCandidateStage(
    @Arg('candidateId') candidateId: string,
    @Arg('updatedCandidateStage', () => CS) updatedCandidateStage: CS,
    @Ctx() ctx: Context
  ): Promise<CandidateStage> {
    return await CandidateStage.updateCandidateStage(
      ctx.hasuraClient,
      candidateId,
      updatedCandidateStage
    );
  }
}

@InputType()
class InsertCandidate {
  @Field(() => String)
  githubId!: string;

  @Field(() => Number)
  minAnnualSalary!: number;

  @Field(() => String)
  city!: string;

  @Field(() => String)
  country!: string;

  @Field(() => Number)
  noticePeriod!: number;

  @Field(() => CS)
  stage!: CS;

  @Field(() => Number)
  timezone!: number;

  @Field(() => Number)
  yearsOfExperience!: number;

  @Field(() => String)
  source!: string;

  @Field(() => ST)
  skillTrack!: ST;

  @Field(() => Date)
  earliestStartDate!: Date;
}

@InputType()
class InsertUser {
  @Field(() => String)
  firstName!: string;

  @Field(() => String)
  lastName!: string;

  @Field(() => String)
  email!: string;

  @Field(() => String)
  telephone!: string;

  @Field(() => [InsertCandidate])
  candidates!: InsertCandidate[];
}

@ArgsType()
class insertUserAndCandidateObjects {
  @Field(() => [InsertUser])
  objects!: InsertUser[];
}

@Resolver(() => Candidate)
export class CandidatesResolver {
  @Query(() => Candidate)
  async fetchCandidateById(
    @Ctx() ctx: Context,
    @Arg('candidateId') candidateId: string
  ): Promise<Candidate> {
    return await Candidate.fetchCandidateById(ctx.hasuraClient, candidateId);
  }

  @Mutation(() => Candidate)
  async insertUserAndCandidate(
    @Ctx() ctx: Context,
    @Args() args: insertUserAndCandidateObjects
  ): Promise<Candidate> {
    return await Candidate.createNewCandidateAndUser(ctx.hasuraClient, args);
  }
}
