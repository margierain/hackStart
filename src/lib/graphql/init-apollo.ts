// inspired from: https://github.com/hasura/graphql-engine/blob/master/community/sample-apps/nextjs-8-serverless/with-apollo-jwt/app/lib/init-apollo.js
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import { ApolloLink, concat } from 'apollo-link';
import fetch from 'isomorphic-unfetch';

export interface Global {
  fetch: typeof fetch;
}

declare var global: Global;

// Polyfill fetch() on the server (used by apollo-client)
if (typeof window !== 'undefined') {
  global.fetch = fetch;
}

export default function create<T>(
  {
    token,
    secret,
    role,
    host,
  }: { token?: string; secret?: string; role?: string; host: string },
  initialState?: T
) {
  const authMiddleware = new ApolloLink((operation, forward) => {
    const ctx = operation.getContext();
    let authRole = ctx.role || role;
    operation.setContext({
      headers: {
        ...(token
          ? { authorization: `Bearer ${token}` }
          : { 'x-hasura-admin-secret': secret }),
        ...(authRole ? { 'x-hasura-role': authRole } : {}),
      },
    });

    return forward!(operation);
  });

  const httpLink = new HttpLink({
    uri: `${
      host.indexOf('localhost') !== -1 ? 'http' : 'https'
    }://${host}/v1/graphql`,
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  });

  return new ApolloClient({
    connectToDevTools: typeof window !== 'undefined',
    ssrMode: typeof window === 'undefined', // Disables forceFetch on the server (so queries are only run once)
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}
