const dataEnv = 'local' as 'prod' | 'local';
export const environment = {
  production: false,
  dataEnv,
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
      endpoint: 'https://ychat-manager.vercel.app/api',
    },
    local: {
      endpoint: 'http://localhost:3333/api',
    },
  },
};

export type Environment = typeof environment;
