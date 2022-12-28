import { gql } from '../../gql';

export const getMemberAndChannelQuery = gql(/* GraphQL */ `
  query HasuraActionsGetMemberAndChannel($memberId: uuid!, $channelId: uuid!) {
    member: member_by_pk(id: $memberId) {
      id
      channels(where: { channelId: { _eq: $channelId } }) {
        id
      }
    }
  }
`);
