/* eslint-disable react-hooks/rules-of-hooks */
//#region Import
import { useQuery } from '@apollo/client';
import React from 'react';
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

export const useAuthenticated = () => {
  const [memberId] = useAuthStore((s) => [s.memberId]);
  const {
    data,
    loading: isLoading,
    error,
  } = useQuery(getMemberChannels, {
    variables: { memberId },
  });

  const channels = React.useMemo(() => {
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
