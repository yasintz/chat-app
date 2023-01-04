import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  split,
  HttpLink,
  HttpOptions,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { BatchHttpLink } from '@apollo/client/link/batch-http';
import { createClient } from 'graphql-ws';
import unfetch from 'unfetch';
import { httpRelayURI, httpURI, wsRelayURI, wsURI } from './config';
import useAuthStore from '../../store/auth';

const errorLink = onError(({ operation, graphQLErrors, networkError }) => {
  //
});

const { tokens, authenticated } = useAuthStore.getState();
const idToken = tokens?.idToken;

const authLink = setContext(() => {
  if (!authenticated) {
    return null;
  }

  return { headers: { Authorization: idToken } };
});

const httpLinkOptions: HttpOptions = {
  uri: httpRelayURI,
  fetch: unfetch as unknown as HttpOptions['fetch'],
};
const httpLink = new HttpLink(httpLinkOptions);

const wsLink = new GraphQLWsLink(
  createClient({
    url: wsRelayURI,
    connectionParams: {
      headers: {
        Authorization: idToken,
      },
    },
  })
);

// Batch link
const batchLink = new BatchHttpLink({
  ...httpLinkOptions,
  batchInterval: 10,
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },

  wsLink,
  split(
    (operation) => operation.getContext().important === true,
    httpLink,
    batchLink
  )
);

const cache = new InMemoryCache();

export default new ApolloClient({
  cache,
  link: ApolloLink.from([authLink, errorLink, splitLink]),
});
