import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { environment } from '../../environments/environment';

@Injectable()
export class HasuraActionsGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const {
      req: { headers },
    } = ctx.getArgByIndex(2);

    return (
      headers.hasura_manager_graphql_secret_header_value ===
      environment.hasura.actionSecretFactory
    );
  }
}
