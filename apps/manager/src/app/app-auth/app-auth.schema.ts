import * as z from 'zod';

const claimKey = 'https://chat.app/jwt/claim';

const jwtTokenSchema = z
  .string()
  //eslint-disable-next-line no-useless-escape
  .regex(/^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-+\/=]*)/g);

export const jwtSecretTypeKeySchema = z.array(
  z.object({
    algorithm: z.enum(['RS256']),
    issuer: z.string(),
    audience: z.string().optional(),
    key: jwtTokenSchema,
  })
);

export const memberTokenPayloadSchema = z
  .object({
    iss: z.string(),
    [claimKey]: z.object({
      'user-id': z.string().uuid(),
      user: z
        .object({
          name: z.string(),
          // avatar: z.string().url()
        })
        .optional(),
    }),
  })
  .transform((payload) => ({
    claim: {
      externalMemberId: payload[claimKey]['user-id'],
      externalMember: payload[claimKey].user,
    },
    issuer: payload.iss,
  }));
