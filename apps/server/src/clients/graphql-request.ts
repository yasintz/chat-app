import { GraphQLClient } from 'graphql-request';
import { environment } from '../environments/environment';

const hasura = new GraphQLClient(
  environment.hasura[environment.hasuraEnv].endpoint,
  {
    headers: {
      'x-hasura-admin-secret': environment.hasura[environment.hasuraEnv].secret,
    },
  }
);

export default hasura;
