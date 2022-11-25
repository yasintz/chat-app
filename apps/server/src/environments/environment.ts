export const environment = {
  production: false,
  hasuraEnv: 'local' as 'prod' | 'local',
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
  jwtConstants: {
    secret: 'secret',
    expiresIn: '90 day',
  },
  bcrypt: {
    saltRounds: 10,
  },
};

export type Environment = typeof environment;
