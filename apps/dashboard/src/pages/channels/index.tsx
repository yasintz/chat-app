//#region Import
import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { AuthenticatedPageLayout } from '../../components/common/layouts/AuthenticatedPageLayout';
import { ChannelList } from '../../components/page/channels-page/channel-list';
import { gql } from '../../gql';
import { useAuthenticatedUserData } from '../../hooks/load-authenticated-user-data';
//#endregion

//#region GQL
const getChannels = gql(/* GraphQL */ `
  query channels_getChannelsByApp($appId: uuid!) {
    channel(where: { appId: { _eq: $appId } }) {
      id
      appId
      name
      members_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`);

const updateChannelNameMutation = gql(`
  mutation updateChannelNameMutation($channelId: uuid!, $name: String!) {
  update_channel_by_pk(pk_columns: {id: $channelId}, _set: {name: $name}) {
    id
    appId
    name
    members_aggregate {
      aggregate {
        count
      }
    }
  }
}
`);

const addChannelMutation = gql(`
  mutation createChannelNameMutation($name: String!, $appId: uuid!) {
  insert_channel_one(object: {name: $name, appId: $appId}) {
    id
    appId
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

export const ChannelsPage = () => {
  const {
    customer,
    app,
    isLoading: isAppLoading,
    error: appError,
  } = useAuthenticatedUserData();

  const [newChannelName, setNewChannelName] = React.useState('');

  const { data, loading, error } = useQuery(getChannels, {
    variables: { appId: app?.id as string },
  });

  const [updateChannelName] = useMutation(updateChannelNameMutation);

  const [createNewChannel] = useMutation(addChannelMutation, {
    variables: { name: newChannelName, appId: app?.id },
    refetchQueries(result) {
      return [
        {
          query: getChannels,
          variables: { appId: result.data?.insert_channel_one?.appId },
        },
      ];
    },
  });

  const channelList = React.useMemo(() => {
    if (!loading && !error && data?.channel) {
      return data?.channel.map((item) => {
        return {
          id: item.id as string,
          name: item.name,
          count: item.members_aggregate.aggregate?.count,
        };
      });
    }

    return undefined;
  }, [data?.channel, error, loading]);

  if (isAppLoading || loading) {
    return <div>Loading...</div>;
  }
  if (appError || !customer || error) {
    return <div>Error</div>;
  }

  return (
    <AuthenticatedPageLayout>
      <h1>App: {app?.name}</h1>
      <input
        value={newChannelName}
        onChange={(e) => setNewChannelName(e.target.value)}
      />
      <button onClick={() => createNewChannel()}>Add New Channel</button>

      <ChannelList
        itemList={channelList}
        onChange={(id: string, name: string) =>
          updateChannelName({ variables: { channelId: id, name } })
        }
      />
    </AuthenticatedPageLayout>
  );
};
