//#region Import
import { useQuery } from '@apollo/client';
import {useMemo} from 'react';
import { gql } from '../gql';
import useAuthStore from '../store/auth';
//#endregion

//#region GQL
const getMemberChannels = gql(/* GraphQL */ `
  query getMemberChannels($memberId: uuid!) {
    member_channel(where: { memberId: { _eq: $memberId } }) {
      channel {
        id
        name
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
      return data?.member_channel.map((item: { channel: any }) => {
        return {
          ...item.channel,
        };
      });
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
