import { gql } from '../../gql';

export const appAuthMemberFragment = gql(/* GraphQL */ `
  fragment AppAuthMember on member {
    id
    appId
  }
`);

export const getAppByIdQuery = gql(/* GraphQL */ `
  query AppAuthServiceGetAppById($appId: uuid!, $externalMemberId: String!) {
    app: app_by_pk(id: $appId) {
      id
      jwtSecrets
    }

    member(
      where: { appId: { _eq: $appId }, externalId: { _eq: $externalMemberId } }
    ) {
      ...AppAuthMember
    }
  }
`);

export const createMemberMutation = gql(/* GraphQL */ `
  mutation CreateMember($data: member_insert_input!) {
    member: insert_member_one(
      object: $data
      on_conflict: {
        constraint: member_app_id_external_id_key
        update_columns: [name]
      }
    ) {
      ...AppAuthMember
    }
  }
`);
