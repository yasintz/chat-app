//#region Import
import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { AuthenticatedPageLayout } from '../../components/common/layouts/AuthenticatedPageLayout';
import { gql } from '../../gql';
import { AuthenticatedHOC } from '../../hocs/AuthenticatedHOC';
import useAuthStore from '../../store/auth';
//#endregion

//#region GQL
const getChannels = gql(/* GraphQL */ `
  query channels_getChannelsByApp($appId: uuid!) {
    channel(where: { appId: { _eq: $appId } }) {
      name
      members_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`);
//#endregion

export const ChannelsPage = AuthenticatedHOC(({ customer, app }) => {
  const { data, loading, error } = useQuery(getChannels, {
    variables: { appId: app?.id as string },
  });

  return (
    <>
      <h1>App: {app?.name}</h1>
      <h1>App: {customer?.firstName}</h1>
    </>
  );
});
