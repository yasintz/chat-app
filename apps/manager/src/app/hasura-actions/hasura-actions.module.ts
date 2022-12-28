import { Module } from '@nestjs/common';
import { HasuraActionsResolver } from './hasura-actions.resolver';
import { HasuraActionsService } from './hasura-actions.service';

@Module({
  providers: [HasuraActionsResolver, HasuraActionsService],
})
export class HasuraActionsModule {}
