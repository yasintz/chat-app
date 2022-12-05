import { JWT_TOKEN_PRIVATE_KEY } from './jwt-token.key';

export const environment = {
  production: false,
  jwtConstants: {
    privateKey: JWT_TOKEN_PRIVATE_KEY,
    expiresIn: '90 day',
  },
  bcrypt: {
    saltRounds: 10,
  },
};

export type Environment = typeof environment;
