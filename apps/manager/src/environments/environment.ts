import { JWT_TOKEN_PRIVATE_KEY } from './jwt-token.key';

export const environment = {
  port: 4203,
  production: false,
  hasura: {
    endpoint: 'http://localhost:8080/v1/graphql',
    secret: 'chat',
    webhookSecretFactory: 'secret1',
    actionSecretFactory: 'secret1',
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

export type Environment = typeof environment;
