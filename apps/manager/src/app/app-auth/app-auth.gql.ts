import { gql } from '../../gql';

export const getAppByIdQuery = gql(/* GraphQL */ `
  query AppAuthServiceGetAppById($appId: uuid!, $memberId: uuid!) {
    app: app_by_pk(id: $appId) {
      id
      jwtSecrets
    }
    member: member_by_pk(id: $memberId) {
      id
      appId
    }
  }
`);
