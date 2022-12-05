import type { Environment } from './environment';
import { JWT_TOKEN_PRIVATE_KEY } from './jwt-token.key';

export const environment: Environment = {
  production: true,
  jwtConstants: {
    privateKey: JWT_TOKEN_PRIVATE_KEY,
    expiresIn: '90 day',
  },
  bcrypt: {
    saltRounds: 10,
  },
};
