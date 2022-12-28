import * as z from 'zod';

//eslint-disable-next-line no-useless-escape
const jwtRegex = /^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-+\/=]*)/g;

export const jwtTokenSchema = {
  raw: z.string().regex(jwtRegex),
  bearer: z
    .string()
    .regex(new RegExp(`^Bearer ${jwtRegex.source.substring(1)}`))
    .transform((token) => token.replace('Bearer ', '')),
};

const claimKey = 'https://hasura.io/jwt/claims';
export const hasuraJwtTokenPayloadSchema = z
  .object({
    [claimKey]: z.object({
      'x-hasura-allowed-roles': z.string().array(),
      'x-hasura-default-role': z.string(),
      'x-hasura-user-id': z.string().uuid(),
      'x-hasura-app-id': z.string().uuid(),
    }),
  })
  .transform((payload) => ({
    hasuraClaim: {
      userId: payload[claimKey]['x-hasura-user-id'],
      appId: payload[claimKey]['x-hasura-app-id'],
    },
  }));
