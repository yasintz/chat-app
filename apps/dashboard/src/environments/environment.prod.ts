import type { Environment } from './environment';

export const environment: Environment = {
  production: true,
  USE_LOCAL_HASURA: false,
  HASURA_PROD_ENDPOINT: 'https://embedded-chat-app-12.hasura.app/v1/graphql',
  HASURA_LOCAL_ENDPOINT: 'http://localhost:8080/v1/graphql',
};
