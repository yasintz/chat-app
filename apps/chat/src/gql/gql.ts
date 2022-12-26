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
    "\n  query getMemberChannels($memberId: uuid!) {\n    member_channel(where: { memberId: { _eq: $memberId } }) {\n      channel {\n        id\n        name\n      }\n    }\n  }\n": types.GetMemberChannelsDocument,
    "\n  subscription getChannelNewMessages($channelId: uuid!) {\n    message(\n      where: { channelId: { _eq: $channelId } }\n      order_by: { createdAt: desc }\n      limit: 1\n    ) {\n      id\n      ...Message\n    }\n  }\n": types.GetChannelNewMessagesDocument,
    "\n  query getChannelMessages($channelId: uuid!, $limit: Int!, $offset: Int!) {\n    message(\n      where: { channelId: { _eq: $channelId } }\n      limit: $limit\n      offset: $offset\n      order_by: { createdAt: desc }\n    ) {\n      id\n      ...Message\n    }\n  }\n": types.GetChannelMessagesDocument,
    "\n  query getChannelMembers($channelId: uuid!) {\n    channel_by_pk(id: $channelId) {\n      id\n      members {\n        member {\n          name\n          id\n        }\n      }\n    }\n  }\n": types.GetChannelMembersDocument,
    "\n  mutation insertNewMessage(\n    $body: String!\n    $channelId: uuid!\n    $senderId: uuid!\n  ) {\n    insert_message_one(\n      object: { body: $body, channelId: $channelId, senderId: $senderId }\n    ) {\n      ...Message\n    }\n  }\n": types.InsertNewMessageDocument,
    "\n  fragment Message on message {\n    id\n    createdAt\n    updatedAt\n    body\n    parentId\n    replyToId\n    sender {\n      id\n      name\n      avatarFile {\n        id\n        path\n        service\n        type\n      }\n    }\n  }\n": types.MessageFragmentDoc,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getMemberChannels($memberId: uuid!) {\n    member_channel(where: { memberId: { _eq: $memberId } }) {\n      channel {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query getMemberChannels($memberId: uuid!) {\n    member_channel(where: { memberId: { _eq: $memberId } }) {\n      channel {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription getChannelNewMessages($channelId: uuid!) {\n    message(\n      where: { channelId: { _eq: $channelId } }\n      order_by: { createdAt: desc }\n      limit: 1\n    ) {\n      id\n      ...Message\n    }\n  }\n"): (typeof documents)["\n  subscription getChannelNewMessages($channelId: uuid!) {\n    message(\n      where: { channelId: { _eq: $channelId } }\n      order_by: { createdAt: desc }\n      limit: 1\n    ) {\n      id\n      ...Message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getChannelMessages($channelId: uuid!, $limit: Int!, $offset: Int!) {\n    message(\n      where: { channelId: { _eq: $channelId } }\n      limit: $limit\n      offset: $offset\n      order_by: { createdAt: desc }\n    ) {\n      id\n      ...Message\n    }\n  }\n"): (typeof documents)["\n  query getChannelMessages($channelId: uuid!, $limit: Int!, $offset: Int!) {\n    message(\n      where: { channelId: { _eq: $channelId } }\n      limit: $limit\n      offset: $offset\n      order_by: { createdAt: desc }\n    ) {\n      id\n      ...Message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getChannelMembers($channelId: uuid!) {\n    channel_by_pk(id: $channelId) {\n      id\n      members {\n        member {\n          name\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getChannelMembers($channelId: uuid!) {\n    channel_by_pk(id: $channelId) {\n      id\n      members {\n        member {\n          name\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation insertNewMessage(\n    $body: String!\n    $channelId: uuid!\n    $senderId: uuid!\n  ) {\n    insert_message_one(\n      object: { body: $body, channelId: $channelId, senderId: $senderId }\n    ) {\n      ...Message\n    }\n  }\n"): (typeof documents)["\n  mutation insertNewMessage(\n    $body: String!\n    $channelId: uuid!\n    $senderId: uuid!\n  ) {\n    insert_message_one(\n      object: { body: $body, channelId: $channelId, senderId: $senderId }\n    ) {\n      ...Message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Message on message {\n    id\n    createdAt\n    updatedAt\n    body\n    parentId\n    replyToId\n    sender {\n      id\n      name\n      avatarFile {\n        id\n        path\n        service\n        type\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment Message on message {\n    id\n    createdAt\n    updatedAt\n    body\n    parentId\n    replyToId\n    sender {\n      id\n      name\n      avatarFile {\n        id\n        path\n        service\n        type\n      }\n    }\n  }\n"];

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