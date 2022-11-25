export { graphql as gql } from './generated';
export { useFragment } from './generated';
export type { FragmentType } from './generated';

import { GraphQLClient } from 'graphql-request';
import { environment } from '../environments/environment';

const client = new GraphQLClient(
  environment.hasura[environment.hasuraEnv].endpoint,
  {
    headers: {
      'x-hasura-admin-secret': environment.hasura[environment.hasuraEnv].secret,
    },
  }
);

export const { request: gqlRequest } = client;
