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
  server: {
    prod: {
      endpoint: 'https://ychat-server.vercel.app/api',
    },
    local: {
      endpoint: 'http://localhost:4203/api',
    },
  },
};

export type Environment = typeof environment;
