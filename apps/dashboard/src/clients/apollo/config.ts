import { environment } from '../../environments/environment';

const httpSchemes: Record<typeof environment.hasuraEnv, string> = {
  prod: 'https',
  local: 'http',
};
const wsSchemes: Record<typeof environment.hasuraEnv, string> = {
  prod: 'wss',
  local: 'ws',
};

const endpoint = environment.hasura[environment.hasuraEnv].endpoint;
const httpScheme = httpSchemes[environment.hasuraEnv];
const wsScheme = wsSchemes[environment.hasuraEnv];

export const httpURI = `${httpScheme}://${endpoint}/v1/graphql`;
export const wsURI = `${wsScheme}://${endpoint}/v1/graphql`;
