import type { Environment } from './environment';

export const environment: Environment = {
  production: true,
  jwtConstants: {
    secret: 'secret',
    expiresIn: '90 day',
  },
  bcrypt: {
    saltRounds: 10,
  },
};
