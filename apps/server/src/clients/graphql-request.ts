import { GraphQLClient } from 'graphql-request';
import { environment } from '../environments/environment';

const graphqlClient = new GraphQLClient(
  environment.hasura[environment.hasuraEnv].endpoint,
  {
    headers: {
      'x-hasura-admin-secret': environment.hasura[environment.hasuraEnv].secret,
    },
  }
);

export default graphqlClient;
