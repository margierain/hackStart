import bcrypt from 'bcrypt';
import 'reflect-metadata';
import lodash from 'lodash';
import {
  ObjectType,
  Field,
  ID,
  Mutation,
  Resolver,
  Arg,
  Ctx,
  Query,
} from 'type-graphql';
import { Context } from 'server/entities/types';
import { NonFunctionProperties } from 'server/utils';
import {
  upsertUserByEmail,
  upsertUserByEmailVariables,
} from 'lib/graphql/roles/admin/generated/upsertUserByEmail';
import {
  UPSERT_USER_BY_EMAIL,
  SIGNUP_WITH_USER,
} from 'lib/graphql/roles/admin/mutations';
import {
  user_emails_constraint,
  users_constraint,
  users_update_column,
  user_emails_update_column,
} from 'lib/graphql/roles/admin/generated/globalTypes';
import { FETCH_USER_BY_EMAIL } from 'lib/graphql/roles/admin/queries';
import {
  fetchUserByEmail,
  fetchUserByEmailVariables,
  fetchUserByEmail_user_emails_user,
} from 'lib/graphql/roles/admin/generated/fetchUserByEmail';
import {
  signUpUserWithEmailAndPassword,
  signUpUserWithEmailAndPasswordVariables,
} from 'lib/graphql/roles/admin/generated/signUpUserWithEmailAndPassword';

interface Auth0User {
  // TODO: Add support for identities to auto create profiles (like GitHub Account)
  // see: https://auth0.com/docs/rules/references/user-object
  email: string;
  email_verified?: boolean;
  family_name?: string;
  given_name?: string;
  name?: string;
  nickname?: string;
  picture?: string;
  user_id?: string;
  username?: string;
}

@ObjectType('AuthUser')
export class AuthUser {
  constructor({
    userId,
    claims,
    firstName,
    lastName,
  }: NonFunctionProperties<AuthUser>) {
    this.userId = userId;
    this.claims = claims;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  @Field(() => ID)
  userId: number;

  @Field(() => String)
  claims: string;

  @Field(() => String)
  firstName: string | null;

  @Field(() => String)
  lastName: string | null;

  static async loginWithEmail({ hasuraClient }: Context, auth0RawUser: string) {
    const auth0User: Auth0User = JSON.parse(auth0RawUser);

    let resp = await hasuraClient.query<
      fetchUserByEmail,
      fetchUserByEmailVariables
    >({
      query: FETCH_USER_BY_EMAIL,
      variables: {
        email: auth0User.email,
      },
    });

    if (resp.errors) {
      throw resp.errors[0];
    }

    let baseUser = resp.data?.user_emails[0]?.user || null;

    if (!baseUser) {
      console.log(
        'user not found, creating a new one ',
        auth0User.email,
        resp.data
      );

      // TODO: there is a bug in the upsert below where it will return the correct
      // user but always create a new user hanging user alongside with it when the auth0Sid
      // is missing in the first one
      const upsertResp = await hasuraClient.mutate<
        upsertUserByEmail,
        upsertUserByEmailVariables
      >({
        mutation: UPSERT_USER_BY_EMAIL,
        variables: {
          userEmail: {
            email: auth0User.email,
            user: {
              data: {
                avatarUrl: auth0User.picture,
                firstName: auth0User.given_name,
                lastName: auth0User.family_name,
                defaultEmail: auth0User.email,
                login: auth0User.username,
                name: auth0User.name,
                nickname: auth0User.nickname,
                auth0Sid: auth0User.user_id,
              },
              on_conflict: {
                constraint: users_constraint.UQ_53a495e5b24279804db49702cc1,
                update_columns: [
                  users_update_column.avatarUrl,
                  users_update_column.auth0Sid,
                ],
              },
            },
          },
          onConflict: {
            constraint: user_emails_constraint.PK_6594597afde633cfeab9a806e4f,
            update_columns: [
              user_emails_update_column.email,
              user_emails_update_column.userId,
            ],
          },
        },
      });

      if (upsertResp.errors) {
        throw upsertResp.errors[0];
      }

      baseUser =
        upsertResp.data?.insert_user_emails?.returning[0]?.user || null;

      if (!baseUser) {
        console.log(
          'user not found after upsert, trying direct fetch: ',
          auth0User.email,
          upsertResp.data
        );

        resp = await hasuraClient.query<
          fetchUserByEmail,
          fetchUserByEmailVariables
        >({
          query: FETCH_USER_BY_EMAIL,
          variables: {
            email: auth0User.email,
          },
        });

        if (resp.errors) {
          throw resp.errors[0];
        }

        if (!resp.data) {
          console.log(
            'user not found afetr trying twice: ',
            auth0User.email,
            resp.data
          );
          throw new Error('Users Not Found!');
        }

        baseUser = resp.data.user_emails[0]?.user;

        if (!baseUser) {
          console.log('user not found: ', auth0User.email, resp.data);
          throw new Error('User not found!');
        }
      }
    }
    return AuthUser.getAuthUserFromDB(baseUser);
  }

  static async loginWithEmailAndPassword(
    { hasuraClient }: Context,
    email: string,
    password: string
  ): Promise<AuthUser | undefined> {
    let resp = await hasuraClient.query<
      fetchUserByEmail,
      fetchUserByEmailVariables
    >({
      query: FETCH_USER_BY_EMAIL,
      variables: {
        email: email,
      },
    });

    if (resp.errors) {
      throw resp.errors[0];
    }

    const baseUser = resp.data?.user_emails[0]?.user || null;

    if (baseUser) {
      const { passwordHash = null } = baseUser;

      if (!passwordHash) {
        throw new Error('Users Not Found!');
      }

      const isSame = await bcrypt.compare(password, passwordHash);

      if (!isSame) {
        throw new Error(`password is incorrect!`);
      }

      return AuthUser.getAuthUserFromDB(baseUser);
    }

    throw new Error('Users Not Found!');
  }

  static getAuthUserFromDB(baseUser: fetchUserByEmail_user_emails_user) {
    const user = {
      id: baseUser.id,
      firstName: baseUser.firstName,
      lastName: baseUser.lastName,
      passwordHash: baseUser.passwordHash,
      clientId: undefined as string | undefined,
      adminId: undefined as string | undefined,
      agencyId: undefined as string | undefined,
      candidateId: undefined as string | undefined,
      developerId: undefined as string | undefined,
      defaultRole: 'user',
      // Hack: All users have all roles set except admin. This still keeps us secure as each check
      // only works based on the user id and if it has access to a resource
      roles: [
        'user',
        'client',
        'candidate',
        'agency',
        'developer',
        'recruiter',
      ],
    };

    if (baseUser.candidate) {
      // user.roles = ['candidate', ...user.roles];
      user.candidateId = baseUser.candidate.id.toString();
      user.defaultRole = 'candidate';
      user.agencyId = user.agencyId || baseUser.candidate.agencyId;
    }

    if (baseUser.agency_user) {
      // user.roles = ['agency', ...user.roles];
      user.agencyId = baseUser.agency_user.agencyId.toString();
      user.defaultRole = 'agency';
    }

    if (baseUser.client_user) {
      user.clientId = baseUser.client_user.clientId.toString();
      user.defaultRole = 'client';
      // user.roles = ['client', ...user.roles];
    }

    if (baseUser.developer) {
      user.developerId = baseUser.developer.id.toString();
      user.defaultRole = 'developer';
      // user.roles = ['developer', ...user.roles];
    }

    if (baseUser.admin) {
      user.roles = ['admin', ...user.roles];
      user.defaultRole = 'admin';
      user.adminId = baseUser.admin.id.toString();
    }

    user.roles = lodash.uniq(user.roles);

    return new AuthUser({
      userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      claims: JSON.stringify({
        ['https://hasura.io/jwt/claims']: {
          'x-hasura-default-role': user.defaultRole,
          'x-hasura-allowed-roles': user.roles,
          'x-hasura-user-id': user.id.toString(),
          // Note: nuke the following in the long run
          'x-hasura-admin-id': user.adminId,
          'x-hasura-developer-id': user.developerId,
          'x-hasura-client-id': user.clientId,
          'x-hasura-agency-id': user.agencyId,
          'x-hasura-candidate-id': user.candidateId,
        },
      }),
    });
  }

  static async signUpWithUser(
    { hasuraClient }: Context,
    email: string,
    password: string,
    firstName: string | null,
    lastName: string | null
  ): Promise<AuthUser> {
    let resp = await hasuraClient.query<
      fetchUserByEmail,
      fetchUserByEmailVariables
    >({
      query: FETCH_USER_BY_EMAIL,
      variables: {
        email: email,
      },
    });

    if (resp.errors) {
      throw resp.errors[0];
    }

    let baseUser = resp.data?.user_emails[0]?.user || null;

    if (baseUser) {
      throw new Error('User Already Exists');
    }

    const salt = await bcrypt.genSalt(10);
    let signupResp = await hasuraClient.mutate<
      signUpUserWithEmailAndPassword,
      signUpUserWithEmailAndPasswordVariables
    >({
      mutation: SIGNUP_WITH_USER,
      variables: {
        defaultEmail: email,
        passwordHash: await bcrypt.hash(password, salt),
        firstName: firstName,
        lastName: lastName,
      },
    });

    if (signupResp.errors) {
      throw signupResp.errors[0];
    }

    const baseSignupUser =
      signupResp.data?.insert_user_emails?.returning[0]?.user || null;

    if (baseSignupUser) {
      return AuthUser.getAuthUserFromDB(baseSignupUser);
    }

    throw new Error('User Already Exists');
  }
}

@Resolver(() => AuthUser)
export class AuthResolver {
  @Mutation(() => AuthUser)
  async loginWithEmail(
    @Arg('user') user: string,
    @Ctx() ctx: Context
  ): Promise<AuthUser> {
    return await AuthUser.loginWithEmail(ctx, user);
  }
  @Mutation(() => AuthUser)
  async signUpWithUser(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Arg('firstName') firstName: string | null,
    @Arg('lastName') lastName: string | null,
    @Ctx() ctx: Context
  ): Promise<AuthUser> {
    return await AuthUser.signUpWithUser(
      ctx,
      email,
      password,
      firstName,
      lastName
    );
  }
  @Query(() => AuthUser)
  async loginWithEmailAndPassword(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() ctx: Context
  ): Promise<AuthUser | undefined> {
    return await AuthUser.loginWithEmailAndPassword(ctx, email, password);
  }
}
