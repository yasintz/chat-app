import { JWT_TOKEN_PRIVATE_KEY } from './jwt-token.key';

export const environment = {
  port: 4203,
  production: false,
  hasura: {
    endpoint: 'http://localhost:8080/v1/graphql',
    secret: 'chat',
    webhookSecretFactory: 'secret1',
  },
  jwtConstants: {
    privateKey: JWT_TOKEN_PRIVATE_KEY,
    expiresIn: '90 day',
  },
  bcrypt: {
    saltRounds: 10,
  },
};

export type Environment = typeof environment;
