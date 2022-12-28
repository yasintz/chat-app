import * as z from 'zod';
import { createZodDto } from '@anatine/zod-nestjs';
import { jwtTokenSchema } from '../../helpers/zod';

const claimKey = 'https://chat.app/jwt/claim';

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
  authorization: jwtTokenSchema.bearer,
});

export class PostMemberHeadersDto extends createZodDto(
  postMemberHeadersSchema
) {}
