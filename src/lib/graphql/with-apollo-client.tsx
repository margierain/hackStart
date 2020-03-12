import initApollo from './init-apollo';
import withApollo from 'next-with-apollo';
import { NormalizedCacheObject } from 'apollo-boost';
import cookie from 'js-cookie';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const { HASURA_GRAPHQL_ENGINE_DOMAIN } = publicRuntimeConfig;

const getToken = () => {
  if (typeof document !== 'undefined') {
    return cookie.get('token') || '';
  }

  return '';
};

export default withApollo<NormalizedCacheObject>(
  ({ /*ctx, headers,*/ initialState }) =>
    initApollo<NormalizedCacheObject>(
      { token: getToken(), host: HASURA_GRAPHQL_ENGINE_DOMAIN },
      initialState
    )
);
