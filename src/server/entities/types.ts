import { initApolloClient } from 'server/utils';
import { Request, Response } from 'express';

export type HasuraClient = ReturnType<typeof initApolloClient>;
export type Context = {
  hasuraClient: HasuraClient;
  req: Request;
  res: Response;
};
