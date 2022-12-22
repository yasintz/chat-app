import { Injectable } from '@nestjs/common';
import hasura from '../../clients/graphql-request';
import {
  jwtSecretTypeKeySchema,
  memberTokenPayloadSchema,
} from './app-auth.schema';
import * as jwt from 'jsonwebtoken';
import { getAppByIdQuery, createMemberMutation } from './app-auth.gql';

@Injectable()
export class AppAuthService {
  safeJwtVerify(...params: Parameters<typeof jwt['verify']>) {
    try {
      jwt.verify(...params);
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }
  async validateMemberToken(appId: string, rawToken: string) {
    const token = rawToken.replace('Bearer ', '');

    const parsedPayload = memberTokenPayloadSchema.safeParse(jwt.decode(token));

    if (!parsedPayload.success) {
      throw new Error('Invalid token');
    }

    const payload = parsedPayload.data;
    const data = await hasura.request(getAppByIdQuery, {
      appId,
      externalMemberId: payload.claim.externalMemberId,
    });
    const { app } = data;
    let member = data.member?.[0];

    if (!app) {
      throw new Error("App doesn't exists");
    }

    if (!member) {
      if (!payload.claim.externalMember) {
        throw new Error("Member doesn't exists");
      }

      const newMemberData = await hasura.request(createMemberMutation, {
        data: {
          appId,
          name: payload.claim.externalMember.name,
          externalId: payload.claim.externalMemberId,
        },
      });
      const newMember = newMemberData.member;
      if (!newMember) {
        throw new Error("Member couldn't created");
      }

      member = newMember;
    }

    if (!app.jwtSecrets) {
      throw new Error('Invalid secrets');
    }

    const parsedJwtSecrets = jwtSecretTypeKeySchema.safeParse(app.jwtSecrets);

    if (!parsedJwtSecrets.success) {
      throw new Error('Invalid secrets');
    }

    const jwtSecrets = parsedJwtSecrets.data;

    const jwtSecret = jwtSecrets.find(
      (secret) => secret.issuer === payload.issuer
    );

    if (!jwtSecret) {
      throw new Error("Issuer secret doesn't exists");
    }

    const jwtVerified = this.safeJwtVerify(token, jwtSecret.key, {
      algorithms: [jwtSecret.algorithm],
      issuer: jwtSecret.issuer,
      audience: jwtSecret.algorithm,
    });

    if (!jwtVerified.success) {
      throw new Error('Invalid JWT');
    }

    return member;
  }
}
