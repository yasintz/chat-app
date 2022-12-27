import { Injectable } from '@nestjs/common';
import {
  TrackedHasuraEventHandler,
  HasuraInsertEvent,
} from '@golevelup/nestjs-hasura';
import { App } from '@gql/schema';
import hasura from '../../clients/graphql-request';
import { createDefaultChannelMutation } from './hasura-events.gql';

@Injectable()
export class HasuraEventsService {
  @TrackedHasuraEventHandler({
    triggerName: 'app-created',
    tableName: 'app',
    definition: { type: 'insert' },
  })
  handleUserCreated(event: HasuraInsertEvent<App>) {
    return hasura.request(createDefaultChannelMutation, {
      appId: event.event.data.new.id,
      name: 'Default',
    });
  }
}
