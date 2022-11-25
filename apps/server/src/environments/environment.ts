export const environment = {
  production: false,
  hasuraEnv: 'prod' as 'prod' | 'local',
  hasura: {
    prod: {
      endpoint: 'https://embedded-chat-app-12.hasura.app/v1/graphql',
      secret:
        'Oeh1m5lyFvFTMBBelE1zpFBkhfqfxjpcmeWKzXUPPRHQ9qgn2DEDpYxhyLMJfMeJ',
    },
    local: {
      endpoint: 'http://localhost:8080/v1/graphql',
      secret: 'chat',
    },
  },
};

export type Environment = typeof environment;
