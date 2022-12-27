import { gql } from '../../gql';

export const channelPageMessageFragment = gql(/* GraphQL */ `
  fragment ChannelPageMessage on message {
    id
    createdAt
  }
`);

export const getChannelMessagesSubscription = gql(/* GraphQL */ `
  subscription getChannelNewMessages($channelId: uuid!) {
    message(
      where: { channelId: { _eq: $channelId } }
      order_by: { createdAt: desc }
      limit: 1
    ) {
      ...ChannelPageMessage
      ...MessageItemMessage
    }
  }
`);

export const getChannelMessagesQuery = gql(/* GraphQL */ `
  query getChannelMessages($channelId: uuid!, $limit: Int!, $offset: Int!) {
    message(
      where: { channelId: { _eq: $channelId } }
      limit: $limit
      offset: $offset
      order_by: { createdAt: desc }
    ) {
      ...ChannelPageMessage
      ...MessageItemMessage
    }
  }
`);

export const getChannelMembers = gql(/* GraphQL */ `
  query getChannelMembers($channelId: uuid!) {
    channel: channel_by_pk(id: $channelId) {
      id
      members {
        id
        lastSeenAt
        member {
          name
          id
        }
      }
    }
  }
`);

export const addNewMessage = gql(/* GraphQL */ `
  mutation insertNewMessage(
    $body: String!
    $channelId: uuid!
    $senderId: uuid!
  ) {
    insert_message_one(
      object: { body: $body, channelId: $channelId, senderId: $senderId }
    ) {
      ...ChannelPageMessage
      ...MessageItemMessage
    }
  }
`);
