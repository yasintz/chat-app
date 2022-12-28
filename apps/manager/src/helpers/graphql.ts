import { GraphQLScalarType } from 'graphql';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as z from 'zod';
import * as jwt from 'jsonwebtoken';
import { hasuraJwtTokenPayloadSchema, jwtTokenSchema } from './zod';

function validateUuid(uuid: unknown): string | never {
  try {
    return z.string().uuid().parse(uuid);
  } catch (error) {
    throw new Error('Invalid UUID');
  }
}

export const UUIDScalar = new GraphQLScalarType({
  name: 'uuid',
  description: 'A simple uuid parser',
  serialize: (value) => validateUuid(value),
  parseValue: (value) => validateUuid(value),
  parseLiteral: (ast) => validateUuid((ast as { value: string }).value),
});

export type HasuraUser = {
  id: string;
  appId: string;
};
export const HasuraUser = createParamDecorator(
  async (data: unknown, context: ExecutionContext) => {
    try {
      const ctx = GqlExecutionContext.create(context);
      const arg = ctx.getArgByIndex(2);
      const authorization = arg?.req?.headers?.authorization;
      if (!authorization) {
        return;
      }

      const { hasuraClaim } = hasuraJwtTokenPayloadSchema.parse(
        jwt.decode(jwtTokenSchema.bearer.parse(authorization))
      );

      return { id: hasuraClaim.userId, appId: hasuraClaim.appId };
    } catch (error) {
      return;
    }
  }
);
