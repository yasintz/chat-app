import { Module } from '@nestjs/common';
import { HasuraEventsService } from './hasura-events.service';

@Module({
  providers: [HasuraEventsService],
})
export class HasuraEventsModule {}
