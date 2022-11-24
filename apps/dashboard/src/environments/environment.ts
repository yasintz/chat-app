export const environment = {
  production: false,
  USE_LOCAL_HASURA: false,
  HASURA_PROD_ENDPOINT: 'https://embedded-chat-app-12.hasura.app/v1/graphql',
  HASURA_LOCAL_ENDPOINT: 'http://localhost:8080/v1/graphql',
};

export type Environment = typeof environment;
