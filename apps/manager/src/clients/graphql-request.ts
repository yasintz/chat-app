import { GraphQLClient } from 'graphql-request';
import { environment } from '../environments/environment';

const hasura = new GraphQLClient(environment.hasura.endpoint, {
  headers: {
    'x-hasura-admin-secret': environment.hasura.secret,
  },
});

export default hasura;
