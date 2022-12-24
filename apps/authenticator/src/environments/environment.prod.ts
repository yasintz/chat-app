import type { Environment } from './environment';

export const environment: Environment = {
  port: parseInt(process.env.PORT || '3333'),
  production: true,
  jwtConstants: {
    expiresIn: '90 day',
  },
  bcrypt: {
    saltRounds: 10,
  },
};
