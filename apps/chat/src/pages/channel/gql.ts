import { gql } from '../../gql';

export const channelPageMessageFragment = gql(/* GraphQL */ `
  fragment ChannelPageMessage on message {
    id
    createdAt
  }
`);

export const getChannelMessagesSubscription = gql(/* GraphQL */ `
  subscription getChannelNewMessages($channelId: uuid!) {
    message_connection(where: { channelId: { _eq: $channelId } }, last: 1) {
      edges {
        cursor
        node {
          ...ChannelPageMessage
          ...MessageItemMessage
        }
      }
    }
  }
`);

// export const getChannelMessagesQuery = gql(/* GraphQL */ `
//   query getChannelMessages($channelId: uuid!, $limit: Int!, $offset: Int!) {
//     message(
//       where: { channelId: { _eq: $channelId } }
//       limit: $limit
//       offset: $offset
//       order_by: { createdAt: desc }
//     ) {
//       ...ChannelPageMessage
//       ...MessageItemMessage
//     }
//   }
// `);

export const getChannelMessagesQuery = gql(/* GraphQL */ `
  query getChannelMessages(
    $channelId: uuid!
    $first: Int
    $last: Int
    $before: String
    $after: String
  ) {
    message_connection(
      order_by: { createdAt: desc }
      where: { channelId: { _eq: $channelId } }
      first: $first
      last: $last
      before: $before
      after: $after
    ) {
      edges {
        cursor
        node {
          ...ChannelPageMessage
          ...MessageItemMessage
        }
      }
      pageInfo {
        endCursor
        startCursor
        hasPreviousPage
        hasNextPage
      }
    }
  }
`);

export const getChannelMembersQuery = gql(/* GraphQL */ `
  query getChannelMembers($channelId: uuid!) {
    channel: channel_connection(where: { id: { _eq: $channelId } }, first: 1) {
      edges {
        node {
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
    }
  }
`);

export const addNewMessageMutation = gql(/* GraphQL */ `
  mutation insertNewMessage(
    $body: String!
    $channelId: uuid!
    $senderId: uuid!
    $files: [message_file_insert_input!]!
  ) {
    insert_message_one(
      object: {
        body: $body
        channelId: $channelId
        senderId: $senderId
        files: { data: $files }
      }
    ) {
      ...ChannelPageMessage
      ...MessageItemMessage
    }
  }
`);

// export const insertFileMutation = gql(/* GraphQL */ `
//   mutation ChannelPageInsertFile($file: file_insert_input!) {
//     file: insert_file_one(object: $file) {
//       id
//       name
//       path
//       type
//       service
//     }
//   }
// `);

// export const getAgoraRtcTokenMutation = gql(/* GraphQL */ `
//   mutation ChannelPageGetAgoraToken($channelId: uuid!) {
//     get_agora_rtc_token(channelId: $channelId) {
//       token
//     }
//   }
// `);
