import React, { useState, useEffect, useContext } from 'react';
import jwt from 'jsonwebtoken';
import Auth0Lock from 'auth0-lock';
import { RedirectCallbackParam } from 'lib/types';
import { NormalizedCacheObject } from 'apollo-boost';
import initApollo from 'lib/graphql/init-apollo';
import cookie from 'js-cookie';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const { HASURA_GRAPHQL_ENGINE_DOMAIN } = publicRuntimeConfig;

const initGraphqlClient = (
  token: string,
  initialState: NormalizedCacheObject,
  role: string | undefined
) =>
  initApollo({ token, host: HASURA_GRAPHQL_ENGINE_DOMAIN, role }, initialState);

type AuthProviderProps = {
  children: React.ReactNode;
  onRedirectCallback: (arg0: RedirectCallbackParam) => void;
  domain: string;
  client_id: string;
  redirect_uri: string;
  initialState: NormalizedCacheObject;
};

type User = {
  id: number;
  clientId?: string | null;
  agencyId?: string | null;
  developerId?: string | null;
  candidateId?: string | null;
  roles: Context['role'][];
  defaultRole: Context['role'];
};

type Token = {
  aud: string;
  email_verified: boolean;
  exp: number;
  ['https://hasura.io/jwt/claims']: {
    'x-hasura-agency-id': null | string;
    'x-hasura-candidate-id': null | string;
    'x-hasura-client-id': string | string;
    'x-hasura-allowed-roles': Context['role'][];
    'x-hasura-default-role': Context['role'];
    'x-hasura-developer-id': null | string;
    'x-hasura-user-id': string;
  };
  iat: number;
  iss: string;
  nonce: string;
  sub: string;
  updated_at: string;
};

export type Context = {
  user: User | null;
  authClient: Auth0LockStatic | null;
  graphqlClient: ReturnType<typeof initGraphqlClient> | null;
  isLoading: boolean;
  role:
    | 'user'
    | 'client'
    | 'developer'
    | 'agency'
    | 'worker'
    | 'candidate'
    | 'admin';
  setRole: (role: Context['role']) => void;
  initAuth: (role: Context['role']) => void;
  logout: Function;
  loginWithPopup: Function;
};

const initContext: Context = {
  user: null,
  authClient: null,
  graphqlClient: null,
  role: 'user',
  setRole: _ => {},
  isLoading: false,
  initAuth: () => {},
  logout: () => {},
  loginWithPopup: () => Promise,
};

const options = {
  theme: {
    logo: '/images/icons/gitstart-icon.png',
    primaryColor: '#0059d6',
  },
  auth: {
    redirect: false,
    responseType: 'token id_token',
  },
  languageDictionary: {
    title: 'GitStart',
    emailInputPlaceholder: 'yours@example.com',
  },
  configurationBaseUrl: 'https://cdn.auth0.com',
  closable: false,
};

export const AuthContext = React.createContext(initContext);
export const useAuthContext = () => useContext(AuthContext);
export const useAuth = (role: Context['role'] | null, autoLogin: boolean) => {
  const ctx = useContext(AuthContext);

  useEffect(() => {
    if (role) {
      ctx.initAuth(role);
    }
  }, []);

  useEffect(() => {
    if (ctx.user === null && ctx.authClient && autoLogin) {
      ctx.loginWithPopup();
    }
  }, [ctx.isLoading, !!ctx.user, !!ctx.authClient, !!autoLogin]);
  return ctx;
};

export const AuthProvider = ({
  children,
  onRedirectCallback,
  initialState,
  ...initOptions
}: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [authClient, setAuthClient] = useState<Auth0LockStatic | null>(null);
  const [role, setRoleValue] = useState<Context['role']>('user');
  const [graphqlClient, setGraphqlClient] = useState<ReturnType<
    typeof initGraphqlClient
  > | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const setRole = (role: Context['role']) => {
    cookie.set('role', role);
    setRoleValue(role);
  };

  const getUserFromToken = (token?: string) => {
    if (!token) {
      return null;
    }

    const decoded = jwt.decode(token, {
      json: true,
    }) as null | Token;
    try {
      if (
        !decoded ||
        !decoded.exp ||
        !decoded['https://hasura.io/jwt/claims'] ||
        Date.now() >= decoded.exp * 1000
      ) {
        console.log('bad token: ', JSON.stringify(decoded, null, 4));
        return null;
      }

      console.log('got back decoded token', decoded);

      return {
        id: +decoded['https://hasura.io/jwt/claims']['x-hasura-user-id'],
        clientId: decoded['https://hasura.io/jwt/claims']['x-hasura-client-id'],
        agencyId: decoded['https://hasura.io/jwt/claims']['x-hasura-agency-id'],
        developerId:
          decoded['https://hasura.io/jwt/claims']['x-hasura-developer-id'],
        candidateId:
          decoded['https://hasura.io/jwt/claims']['x-hasura-candidate-id'],
        roles:
          decoded['https://hasura.io/jwt/claims']['x-hasura-allowed-roles'],
        defaultRole:
          decoded['https://hasura.io/jwt/claims']['x-hasura-default-role'],
      };
    } catch (ex) {}
    return null;
  };

  const setJWTToken = (jwtToken: string, initRole?: Context['role']) => {
    const initialRole =
      initRole || (cookie.get('role') as Context['role']) || role;
    try {
      const user = getUserFromToken(jwtToken);
      if (!user) {
        throw new Error('Token Expired!');
      }
      setUser(user);
      setGraphqlClient(initGraphqlClient(jwtToken, initialState, role));
      setRoleValue(initialRole);
      cookie.set('jwtToken', jwtToken);
      cookie.set('role', initialRole);
    } catch (ex) {
      console.log('Bad Token!! nuking JWT entirely', jwtToken, ex);
      cookie.remove('jwtToken');
    }
  };

  const loginWithPopup = async () => {
    return new Promise(resolve => {
      if (authClient) {
        setIsLoading(true);
        authClient.show();
        authClient.on('authenticated', authResult => {
          setJWTToken(authResult.idToken);
          authClient.hide();
          setIsLoading(false);
          resolve();
        });
      }
    });
  };

  const initAuth = async () => {
    console.log('initiating initial login');
    const auth0FromHook = new Auth0Lock(
      initOptions.client_id,
      initOptions.domain,
      options
    );
    setAuthClient(auth0FromHook);
    let jwtToken = cookie.get('jwtToken');
    if (jwtToken && getUserFromToken(jwtToken)) {
      setJWTToken(jwtToken);
    } else if (jwtToken) {
      cookie.remove('jwtToken');
    }
  };

  const logout = () => {
    console.log('logging out ...');
    cookie.remove('jwtToken');
    authClient?.logout({
      returnTo: window.location.origin,
    });

    setAuthClient(null);
    setGraphqlClient(null);
    setIsLoading(false);
  };

  console.log(
    'rendering context with: ',
    authClient,
    user,
    isLoading,
    graphqlClient
  );

  return (
    <AuthContext.Provider
      value={{
        loginWithPopup,
        authClient,
        user,
        graphqlClient,
        role,
        setRole,
        initAuth,
        isLoading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
