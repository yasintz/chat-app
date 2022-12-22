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
    "\n  fragment AuthServiceMember on member {\n    id\n  }\n": types.AuthServiceMemberFragmentDoc,
    "\n  query AppAuthServiceGetAppById($appId: uuid!, $externalMemberId: String!) {\n    app: app_by_pk(id: $appId) {\n      id\n      jwtSecrets\n    }\n    member(\n      where: { appId: { _eq: $appId }, externalId: { _eq: $externalMemberId } }\n    ) {\n      ...AuthServiceMember\n    }\n  }\n": types.AppAuthServiceGetAppByIdDocument,
    "\n  mutation CreateMember($data: member_insert_input!) {\n    member: insert_member_one(\n      object: $data\n      on_conflict: {\n        constraint: member_app_id_external_id_key\n        update_columns: [name]\n      }\n    ) {\n      ...AuthServiceMember\n    }\n  }\n": types.CreateMemberDocument,
    "\n  query AuthServiceGetCustomerByEmail($email: String!) {\n    customer(where: { email: { _eq: $email } }) {\n      id\n      encryptedPassword\n      appId\n    }\n  }\n": types.AuthServiceGetCustomerByEmailDocument,
    "\n  query AuthServiceGetMemberByEmail($email: String!) {\n    member(where: { externalId: { _eq: $email } }) {\n      id\n      encryptedPassword\n      appId\n    }\n  }\n": types.AuthServiceGetMemberByEmailDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AuthServiceMember on member {\n    id\n  }\n"): (typeof documents)["\n  fragment AuthServiceMember on member {\n    id\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AppAuthServiceGetAppById($appId: uuid!, $externalMemberId: String!) {\n    app: app_by_pk(id: $appId) {\n      id\n      jwtSecrets\n    }\n    member(\n      where: { appId: { _eq: $appId }, externalId: { _eq: $externalMemberId } }\n    ) {\n      ...AuthServiceMember\n    }\n  }\n"): (typeof documents)["\n  query AppAuthServiceGetAppById($appId: uuid!, $externalMemberId: String!) {\n    app: app_by_pk(id: $appId) {\n      id\n      jwtSecrets\n    }\n    member(\n      where: { appId: { _eq: $appId }, externalId: { _eq: $externalMemberId } }\n    ) {\n      ...AuthServiceMember\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateMember($data: member_insert_input!) {\n    member: insert_member_one(\n      object: $data\n      on_conflict: {\n        constraint: member_app_id_external_id_key\n        update_columns: [name]\n      }\n    ) {\n      ...AuthServiceMember\n    }\n  }\n"): (typeof documents)["\n  mutation CreateMember($data: member_insert_input!) {\n    member: insert_member_one(\n      object: $data\n      on_conflict: {\n        constraint: member_app_id_external_id_key\n        update_columns: [name]\n      }\n    ) {\n      ...AuthServiceMember\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AuthServiceGetCustomerByEmail($email: String!) {\n    customer(where: { email: { _eq: $email } }) {\n      id\n      encryptedPassword\n      appId\n    }\n  }\n"): (typeof documents)["\n  query AuthServiceGetCustomerByEmail($email: String!) {\n    customer(where: { email: { _eq: $email } }) {\n      id\n      encryptedPassword\n      appId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AuthServiceGetMemberByEmail($email: String!) {\n    member(where: { externalId: { _eq: $email } }) {\n      id\n      encryptedPassword\n      appId\n    }\n  }\n"): (typeof documents)["\n  query AuthServiceGetMemberByEmail($email: String!) {\n    member(where: { externalId: { _eq: $email } }) {\n      id\n      encryptedPassword\n      appId\n    }\n  }\n"];

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