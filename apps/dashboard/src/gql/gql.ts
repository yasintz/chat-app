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
    "\n  query home_getCurrentCustomerWithApp($customerId: uuid!) {\n    customer(where: { id: { _eq: $customerId } }) {\n      id\n      firstName\n      lastName\n      app {\n        id\n        name\n        customers {\n          id\n          email\n          firstName\n          lastName\n          role\n        }\n      }\n    }\n  }\n": types.Home_GetCurrentCustomerWithAppDocument,
    "\n  query channels_getChannelsByApp($appId: uuid!) {\n    channel(where: { appId: { _eq: $appId } }) {\n      id\n      appId\n      name\n      members_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n": types.Channels_GetChannelsByAppDocument,
    "\n  mutation updateChannelNameMutation($channelId: uuid!, $name: String!) {\n  update_channel_by_pk(pk_columns: {id: $channelId}, _set: {name: $name}) {\n    id\n    appId\n    name\n    members_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n}\n": types.UpdateChannelNameMutationDocument,
    "\n  mutation createChannelNameMutation($name: String!, $appId: uuid!) {\n  insert_channel_one(object: {name: $name, appId: $appId}) {\n    id\n    appId\n    name\n    members_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n}\n": types.CreateChannelNameMutationDocument,
    "\n  mutation home_updateAppName($appId: uuid!, $name: String!) {\n    update_app_by_pk(pk_columns: { id: $appId }, _set: { name: $name }) {\n      id\n      name\n    }\n  }\n": types.Home_UpdateAppNameDocument,
    "\n  mutation home_createNewCustomer($email: String!) {\n    insert_customer_one(\n      object: { email: $email, firstName: \"f\", lastName: \"l\", role: admin }\n    ) {\n      id\n      firstName\n      lastName\n      appId\n    }\n  }\n": types.Home_CreateNewCustomerDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query home_getCurrentCustomerWithApp($customerId: uuid!) {\n    customer(where: { id: { _eq: $customerId } }) {\n      id\n      firstName\n      lastName\n      app {\n        id\n        name\n        customers {\n          id\n          email\n          firstName\n          lastName\n          role\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query home_getCurrentCustomerWithApp($customerId: uuid!) {\n    customer(where: { id: { _eq: $customerId } }) {\n      id\n      firstName\n      lastName\n      app {\n        id\n        name\n        customers {\n          id\n          email\n          firstName\n          lastName\n          role\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query channels_getChannelsByApp($appId: uuid!) {\n    channel(where: { appId: { _eq: $appId } }) {\n      id\n      appId\n      name\n      members_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query channels_getChannelsByApp($appId: uuid!) {\n    channel(where: { appId: { _eq: $appId } }) {\n      id\n      appId\n      name\n      members_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateChannelNameMutation($channelId: uuid!, $name: String!) {\n  update_channel_by_pk(pk_columns: {id: $channelId}, _set: {name: $name}) {\n    id\n    appId\n    name\n    members_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n}\n"): (typeof documents)["\n  mutation updateChannelNameMutation($channelId: uuid!, $name: String!) {\n  update_channel_by_pk(pk_columns: {id: $channelId}, _set: {name: $name}) {\n    id\n    appId\n    name\n    members_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createChannelNameMutation($name: String!, $appId: uuid!) {\n  insert_channel_one(object: {name: $name, appId: $appId}) {\n    id\n    appId\n    name\n    members_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n}\n"): (typeof documents)["\n  mutation createChannelNameMutation($name: String!, $appId: uuid!) {\n  insert_channel_one(object: {name: $name, appId: $appId}) {\n    id\n    appId\n    name\n    members_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation home_updateAppName($appId: uuid!, $name: String!) {\n    update_app_by_pk(pk_columns: { id: $appId }, _set: { name: $name }) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation home_updateAppName($appId: uuid!, $name: String!) {\n    update_app_by_pk(pk_columns: { id: $appId }, _set: { name: $name }) {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation home_createNewCustomer($email: String!) {\n    insert_customer_one(\n      object: { email: $email, firstName: \"f\", lastName: \"l\", role: admin }\n    ) {\n      id\n      firstName\n      lastName\n      appId\n    }\n  }\n"): (typeof documents)["\n  mutation home_createNewCustomer($email: String!) {\n    insert_customer_one(\n      object: { email: $email, firstName: \"f\", lastName: \"l\", role: admin }\n    ) {\n      id\n      firstName\n      lastName\n      appId\n    }\n  }\n"];

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