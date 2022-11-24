import { environment } from '@dashboard/environments/environment';

const devLocal = environment.USE_LOCAL_HASURA;

const httpScheme = devLocal ? 'http' : 'https';
const wsScheme = devLocal ? 'ws' : 'wss';
const endpoint = devLocal
  ? environment.HASURA_LOCAL_ENDPOINT
  : environment.HASURA_PROD_ENDPOINT;

export const httpURI = `${httpScheme}://${endpoint}/v1/graphql`;
export const wsURI = `${wsScheme}://${endpoint}/v1/graphql`;

export const HASURA_LOCAL_SECRET = 'localhost';
