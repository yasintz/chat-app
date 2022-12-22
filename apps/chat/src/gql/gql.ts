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
    "\n  subscription getChannelMessages($channelId: uuid!) {\n    message(where: { channelId: { _eq: $channelId } }) {\n      id\n      body\n      parentId\n      replyToId\n      sender {\n        id\n        name\n      }\n    }\n  }\n": types.GetChannelMessagesDocument,
    "\n  mutation insertNewMessage(\n    $body: String!\n    $channelId: uuid!\n    $senderId: uuid!\n  ) {\n    insert_message_one(\n      object: { body: $body, channelId: $channelId, senderId: $senderId }\n    ) {\n      body\n      parentId\n      replyToId\n      sender {\n        id\n        name\n      }\n    }\n  }\n": types.InsertNewMessageDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getMemberChannels($memberId: uuid!) {\n    member_channel(where: { memberId: { _eq: $memberId } }) {\n      channel {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query getMemberChannels($memberId: uuid!) {\n    member_channel(where: { memberId: { _eq: $memberId } }) {\n      channel {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription getChannelMessages($channelId: uuid!) {\n    message(where: { channelId: { _eq: $channelId } }) {\n      id\n      body\n      parentId\n      replyToId\n      sender {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  subscription getChannelMessages($channelId: uuid!) {\n    message(where: { channelId: { _eq: $channelId } }) {\n      id\n      body\n      parentId\n      replyToId\n      sender {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation insertNewMessage(\n    $body: String!\n    $channelId: uuid!\n    $senderId: uuid!\n  ) {\n    insert_message_one(\n      object: { body: $body, channelId: $channelId, senderId: $senderId }\n    ) {\n      body\n      parentId\n      replyToId\n      sender {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation insertNewMessage(\n    $body: String!\n    $channelId: uuid!\n    $senderId: uuid!\n  ) {\n    insert_message_one(\n      object: { body: $body, channelId: $channelId, senderId: $senderId }\n    ) {\n      body\n      parentId\n      replyToId\n      sender {\n        id\n        name\n      }\n    }\n  }\n"];

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