export const environment = {
  production: false,
  jwtConstants: {
    secret: 'secret',
    expiresIn: '90 day',
  },
  bcrypt: {
    saltRounds: 10,
  },
};

export type Environment = typeof environment;
