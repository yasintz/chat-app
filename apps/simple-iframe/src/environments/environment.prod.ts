import type { Environment } from './environment';
export const environment: Environment = {
  production: false,
  dataEnv: 'prod',
  hasura: {
    prod: {
      endpoint: 'embedded-chat-app-12.hasura.app',
    },
    local: {
      endpoint: 'localhost:8080',
    },
  },
  manager: {
    prod: {
      endpoint: 'https://ychat-manager.up.railway.app/api',
    },
    local: {
      endpoint: 'http://localhost:3333/api',
    },
  },
};
