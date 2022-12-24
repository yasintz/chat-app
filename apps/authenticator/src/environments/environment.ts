export const environment = {
  port: 4301,
  production: false,
  jwtConstants: {
    expiresIn: '90 day',
  },
  bcrypt: {
    saltRounds: 10,
  },
};

export type Environment = typeof environment;
