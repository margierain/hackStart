import './setup';
import {
  buildSchema,
  MiddlewareInterface,
  ResolverData,
  NextFn,
} from 'type-graphql';
import { ApolloServer } from 'apollo-server-micro';

import { TaskStateResolver } from 'server/entities/TaskState';
import { TaskReviewStateResolver } from 'server/entities/TaskReviewState';
import { EarningsResolver } from 'server/entities/Earnings';
import {
  CandidatesResolver,
  CandidateStageResolver,
  UsersResolver,
} from 'server/entities/Candidate';
import { initApolloClient } from 'server/utils';
import { Context } from 'server/entities/types';
import { captureException } from 'lib/sentry';
import { GraphQLFormattedError } from 'graphql';

import { GraphQLExtension, GraphQLResponse } from 'graphql-extensions';
import { ClientInvoiceResolver } from 'server/entities/ClientInvoice';
import { DeveloperInvoiceResolver } from 'server/entities/DeveloperInvoice';
import { NextApiRequest, NextApiResponse } from 'next';
import { AuthResolver } from 'server/entities/Auth';
import { StripePaymentResolver } from 'server/entities/StripePayments';

type FormatError = (
  error: GraphQLFormattedError,
  ctx: Context
) => GraphQLFormattedError;

// Inspired from: https://github.com/BigMaster/graphql-format-error-context-extension/blob/master/src/lib/FormatErrorWithContextExtension.js
class FormatErrorWithContextExtension extends GraphQLExtension<Context> {
  formatError: FormatError;

  constructor(formatError: FormatError) {
    super();
    this.formatError = formatError;
  }

  willSendResponse(o: { graphqlResponse: GraphQLResponse; context: Context }) {
    const { context, graphqlResponse } = o;
    if (graphqlResponse.errors) {
      graphqlResponse.errors = graphqlResponse.errors.map(err =>
        this.formatError(err, context)
      );
    }
    return o;
  }
}

class ErrorLoggerMiddleware implements MiddlewareInterface<Context> {
  async use({ context }: ResolverData<Context>, next: NextFn) {
    try {
      return await next();
    } catch (err) {
      console.error('got back error running resolvers', err);
      // TODO filter out user errors
      captureException(err, { req: context.req, res: context.res });
      throw err;
    }
  }
}

export async function createApolloServer() {
  // Note: NextJS hot reload messes up with TypeGraphQL's global cache. So it is
  // disabled for now. Restart the server after updating schema
  (global as any).schema =
    (global as any).schema ||
    (await buildSchema({
      resolvers: [
        TaskStateResolver,
        TaskReviewStateResolver,
        EarningsResolver,
        CandidatesResolver,
        CandidateStageResolver,
        UsersResolver,
        ClientInvoiceResolver,
        DeveloperInvoiceResolver,
        AuthResolver,
        StripePaymentResolver,
      ],
      globalMiddlewares: [ErrorLoggerMiddleware],
    }));

  const schema = (global as any).schema;

  const formatError: FormatError = (error, ctx) => {
    captureException(error, { req: ctx.req, res: ctx.res });
    console.error('got back GraphQL exception: ', error);
    return error;
  };

  return new ApolloServer({
    schema,
    playground: true,
    introspection: true,
    extensions: [() => new FormatErrorWithContextExtension(formatError)],
    context: ({ req, res }): Context => ({
      hasuraClient: initApolloClient(req),
      req,
      res,
    }),
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const apolloServer = await createApolloServer();
    return apolloServer.createHandler({ path: '/api/graphql' })(req, res);
  } catch (ex) {
    res
      .status(500)
      .json({ error: true, message: ex.message, stack: ex.stack, details: ex });
  }
};
