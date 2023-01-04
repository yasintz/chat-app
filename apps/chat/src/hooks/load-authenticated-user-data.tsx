//#region Import
import { useQuery } from '@apollo/client';
import { useMemo } from 'react';
import { gql } from '../gql';
import useAuthStore from '../store/auth';
//#endregion

//#region GQL
const getMemberChannels = gql(/* GraphQL */ `
  query getMemberChannels($memberId: uuid!) {
    member_channel_connection(where: { memberId: { _eq: $memberId } }) {
      edges {
        node {
          channel {
            name
          }
          channelId
        }
      }
    }
  }
`);
//#endregion

export const useAuthenticatedUserData = () => {
  const [memberId] = useAuthStore((s) => [s.memberId]);
  const {
    data,
    loading: isLoading,
    error,
  } = useQuery(getMemberChannels, {
    variables: { memberId },
  });

  const channels = useMemo(() => {
    if (data && !isLoading && !error) {
      return data?.member_channel_connection.edges.map(
        (item: { node: { channel: { name: string }; channelId: string } }) => {
          return {
            id: item.node.channelId,
            name: item.node.channel.name,
          };
        }
      );
    }

    return [];
  }, [data, error, isLoading]);

  return {
    channels,
    isLoading,
    memberId,
    error,
  };
};
