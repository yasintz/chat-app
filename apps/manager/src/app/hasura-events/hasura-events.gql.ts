import { gql } from '../../gql';

export const createDefaultChannelMutation = gql(/* GraphQL */ `
  mutation HasuraEventsCreateDefaultChannelMutation(
    $appId: uuid!
    $name: String!
  ) {
    insert_channel_one(object: { appId: $appId, name: $name }) {
      id
    }
  }
`);
