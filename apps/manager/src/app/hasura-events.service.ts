import { Injectable } from '@nestjs/common';
import {
  TrackedHasuraEventHandler,
  HasuraInsertEvent,
} from '@golevelup/nestjs-hasura';
import { App } from '@gql/schema';

@Injectable()
export class HasuraEventsService {
  @TrackedHasuraEventHandler({
    triggerName: 'app-created',
    tableName: 'app',
    definition: { type: 'insert' },
  })
  handleUserCreated(event: HasuraInsertEvent<App>) {
    console.log(event.event.data.new);
  }
}
