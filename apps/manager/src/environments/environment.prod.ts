import type { Environment } from './environment';
import { JWT_TOKEN_PRIVATE_KEY } from './jwt-token.key';

export const environment: Environment = {
  port: parseInt(process.env.PORT || '3333'),
  production: true,
  hasura: {
    endpoint: 'https://embedded-chat-app-12.hasura.app/v1/graphql',
    secret: 'Oeh1m5lyFvFTMBBelE1zpFBkhfqfxjpcmeWKzXUPPRHQ9qgn2DEDpYxhyLMJfMeJ',
    webhookSecretFactory: 'jIZPMFvBdMkixLh',
  },
  jwtConstants: {
    privateKey: JWT_TOKEN_PRIVATE_KEY,
    expiresIn: '90 day',
  },
  bcrypt: {
    saltRounds: 10,
  },
};
