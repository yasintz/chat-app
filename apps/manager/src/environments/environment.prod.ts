import type { Environment } from './environment';
import { JWT_TOKEN_PRIVATE_KEY } from './jwt-token.key';

export const environment: Environment = {
  production: true,
  hasuraEnv: 'prod',
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
    privateKey: JWT_TOKEN_PRIVATE_KEY,
    expiresIn: '90 day',
  },
  bcrypt: {
    saltRounds: 10,
  },
};