import * as z from 'zod';
import { createZodDto } from '@anatine/zod-nestjs';

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
    key: z.string(),
  })
);

export const memberTokenPayloadSchema = z
  .object({
    iss: z.string(),
    [claimKey]: z.object({
      'app-id': z.string(),
      'user-id': z.string(),
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
      appId: payload[claimKey]['app-id'],
    },
    issuer: payload.iss,
  }));

const postMemberHeadersSchema = z.object({
  authorization: jwtTokenSchema,
});

export class PostMemberHeadersDto extends createZodDto(
  postMemberHeadersSchema
) {}
