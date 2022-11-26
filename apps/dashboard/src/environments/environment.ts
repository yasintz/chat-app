export const environment = {
  production: false,
  hasuraEnv: 'local' as 'prod' | 'local',
  hasura: {
    prod: {
      endpoint: 'embedded-chat-app-12.hasura.app',
    },
    local: {
      endpoint: 'localhost:8080',
    },
  },
};

export type Environment = typeof environment;
