import type { Environment } from './environment';
import { JWT_TOKEN_PRIVATE_KEY } from './jwt-token.key';

export const environment: Environment = {
  port: parseInt(process.env.PORT || '3333'),
  production: true,
  hasura: {
    endpoint: 'https://embedded-chat-app-12.hasura.app/v1/graphql',
    secret: 'Oeh1m5lyFvFTMBBelE1zpFBkhfqfxjpcmeWKzXUPPRHQ9qgn2DEDpYxhyLMJfMeJ',
    webhookSecretFactory: 'jIZPMFvBdMkixLh',
    actionSecretFactory: 'hLxikMdBvFMPZIj',
  },
  jwtConstants: {
    privateKey: JWT_TOKEN_PRIVATE_KEY,
    expiresIn: '90 day',
  },
  bcrypt: {
    saltRounds: 10,
  },
  agora: {
    appId: '8c6d7ddd9f9445bba88713c13a115467',
    appCertificate: '65f5053e-47e9-4b8d-9916-f7dedfb47dcc',
  },
};
