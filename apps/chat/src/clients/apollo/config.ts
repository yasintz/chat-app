import { environment } from '../../environments/environment';

const httpSchemes: Record<typeof environment.dataEnv, string> = {
  prod: 'https',
  local: 'http',
};
const wsSchemes: Record<typeof environment.dataEnv, string> = {
  prod: 'wss',
  local: 'ws',
};

const endpoint = environment.hasura[environment.dataEnv].endpoint;
const httpScheme = httpSchemes[environment.dataEnv];
const wsScheme = wsSchemes[environment.dataEnv];

export const httpURI = `${httpScheme}://${endpoint}/v1/graphql`;
export const wsURI = `${wsScheme}://${endpoint}/v1/graphql`;
export const httpRelayURI = `${httpScheme}://${endpoint}/v1beta1/relay`;
export const wsRelayURI = `${wsScheme}://${endpoint}/v1beta1/relay`;
