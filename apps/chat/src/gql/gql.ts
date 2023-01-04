/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query getMemberChannels($memberId: uuid!) {\n    member_channel_connection(where: { memberId: { _eq: $memberId } }) {\n      edges {\n        node {\n          channel {\n            name\n          }\n          channelId\n        }\n      }\n    }\n  }\n": types.GetMemberChannelsDocument,
    "\n  fragment ChannelPageMessage on message {\n    id\n    createdAt\n  }\n": types.ChannelPageMessageFragmentDoc,
    "\n  subscription getChannelNewMessages($channelId: uuid!) {\n    message_connection(where: { channelId: { _eq: $channelId } }, last: 1) {\n      edges {\n        cursor\n        node {\n          ...ChannelPageMessage\n          ...MessageItemMessage\n        }\n      }\n    }\n  }\n": types.GetChannelNewMessagesDocument,
    "\n  query getChannelMessages(\n    $channelId: uuid!\n    $first: Int\n    $last: Int\n    $before: String\n    $after: String\n  ) {\n    message_connection(\n      order_by: { createdAt: desc }\n      where: { channelId: { _eq: $channelId } }\n      first: $first\n      last: $last\n      before: $before\n      after: $after\n    ) {\n      edges {\n        cursor\n        node {\n          ...ChannelPageMessage\n          ...MessageItemMessage\n        }\n      }\n      pageInfo {\n        endCursor\n        startCursor\n        hasPreviousPage\n        hasNextPage\n      }\n    }\n  }\n": types.GetChannelMessagesDocument,
    "\n  query getChannelMembers($channelId: uuid!) {\n    channel: channel_connection(where: { id: { _eq: $channelId } }, first: 1) {\n      edges {\n        node {\n          id\n          members {\n            id\n            lastSeenAt\n            member {\n              name\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetChannelMembersDocument,
    "\n  mutation insertNewMessage(\n    $body: String!\n    $channelId: uuid!\n    $senderId: uuid!\n    $files: [message_file_insert_input!]!\n  ) {\n    insert_message_one(\n      object: {\n        body: $body\n        channelId: $channelId\n        senderId: $senderId\n        files: { data: $files }\n      }\n    ) {\n      ...ChannelPageMessage\n      ...MessageItemMessage\n    }\n  }\n": types.InsertNewMessageDocument,
    "\n  fragment MessageItemMessage on message {\n    id\n    createdAt\n    updatedAt\n    body\n    parentId\n    replyToId\n    files {\n      id\n      file {\n        id\n        name\n        path\n        service\n        type\n      }\n    }\n    sender {\n      id\n      name\n      avatarFile {\n        id\n        path\n        service\n        type\n      }\n    }\n  }\n": types.MessageItemMessageFragmentDoc,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getMemberChannels($memberId: uuid!) {\n    member_channel_connection(where: { memberId: { _eq: $memberId } }) {\n      edges {\n        node {\n          channel {\n            name\n          }\n          channelId\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getMemberChannels($memberId: uuid!) {\n    member_channel_connection(where: { memberId: { _eq: $memberId } }) {\n      edges {\n        node {\n          channel {\n            name\n          }\n          channelId\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment ChannelPageMessage on message {\n    id\n    createdAt\n  }\n"): (typeof documents)["\n  fragment ChannelPageMessage on message {\n    id\n    createdAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription getChannelNewMessages($channelId: uuid!) {\n    message_connection(where: { channelId: { _eq: $channelId } }, last: 1) {\n      edges {\n        cursor\n        node {\n          ...ChannelPageMessage\n          ...MessageItemMessage\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  subscription getChannelNewMessages($channelId: uuid!) {\n    message_connection(where: { channelId: { _eq: $channelId } }, last: 1) {\n      edges {\n        cursor\n        node {\n          ...ChannelPageMessage\n          ...MessageItemMessage\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getChannelMessages(\n    $channelId: uuid!\n    $first: Int\n    $last: Int\n    $before: String\n    $after: String\n  ) {\n    message_connection(\n      order_by: { createdAt: desc }\n      where: { channelId: { _eq: $channelId } }\n      first: $first\n      last: $last\n      before: $before\n      after: $after\n    ) {\n      edges {\n        cursor\n        node {\n          ...ChannelPageMessage\n          ...MessageItemMessage\n        }\n      }\n      pageInfo {\n        endCursor\n        startCursor\n        hasPreviousPage\n        hasNextPage\n      }\n    }\n  }\n"): (typeof documents)["\n  query getChannelMessages(\n    $channelId: uuid!\n    $first: Int\n    $last: Int\n    $before: String\n    $after: String\n  ) {\n    message_connection(\n      order_by: { createdAt: desc }\n      where: { channelId: { _eq: $channelId } }\n      first: $first\n      last: $last\n      before: $before\n      after: $after\n    ) {\n      edges {\n        cursor\n        node {\n          ...ChannelPageMessage\n          ...MessageItemMessage\n        }\n      }\n      pageInfo {\n        endCursor\n        startCursor\n        hasPreviousPage\n        hasNextPage\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getChannelMembers($channelId: uuid!) {\n    channel: channel_connection(where: { id: { _eq: $channelId } }, first: 1) {\n      edges {\n        node {\n          id\n          members {\n            id\n            lastSeenAt\n            member {\n              name\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getChannelMembers($channelId: uuid!) {\n    channel: channel_connection(where: { id: { _eq: $channelId } }, first: 1) {\n      edges {\n        node {\n          id\n          members {\n            id\n            lastSeenAt\n            member {\n              name\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation insertNewMessage(\n    $body: String!\n    $channelId: uuid!\n    $senderId: uuid!\n    $files: [message_file_insert_input!]!\n  ) {\n    insert_message_one(\n      object: {\n        body: $body\n        channelId: $channelId\n        senderId: $senderId\n        files: { data: $files }\n      }\n    ) {\n      ...ChannelPageMessage\n      ...MessageItemMessage\n    }\n  }\n"): (typeof documents)["\n  mutation insertNewMessage(\n    $body: String!\n    $channelId: uuid!\n    $senderId: uuid!\n    $files: [message_file_insert_input!]!\n  ) {\n    insert_message_one(\n      object: {\n        body: $body\n        channelId: $channelId\n        senderId: $senderId\n        files: { data: $files }\n      }\n    ) {\n      ...ChannelPageMessage\n      ...MessageItemMessage\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment MessageItemMessage on message {\n    id\n    createdAt\n    updatedAt\n    body\n    parentId\n    replyToId\n    files {\n      id\n      file {\n        id\n        name\n        path\n        service\n        type\n      }\n    }\n    sender {\n      id\n      name\n      avatarFile {\n        id\n        path\n        service\n        type\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment MessageItemMessage on message {\n    id\n    createdAt\n    updatedAt\n    body\n    parentId\n    replyToId\n    files {\n      id\n      file {\n        id\n        name\n        path\n        service\n        type\n      }\n    }\n    sender {\n      id\n      name\n      avatarFile {\n        id\n        path\n        service\n        type\n      }\n    }\n  }\n"];

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function gql(source: string): unknown;

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;