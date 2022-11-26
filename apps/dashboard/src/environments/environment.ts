const dataEnv: 'prod' | 'local' = 'local';
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
      endpoint: 'http://localhost:3333/api',
    },
  },
};

export type Environment = typeof environment;
