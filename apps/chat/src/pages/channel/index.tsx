//#region Import
import React from 'react';
import { useMutation, useSubscription } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { AuthenticatedPageLayout } from '../../components/common/layouts/AuthenticatedPageLayout';
import { useAuthenticated } from '../../hooks/authenticated';
import { gql } from '../../gql';
import { MessageList } from '../../components/page/channel/message-list';
//#endregion

//#region GQL
const getChannelMessages = gql(/* GraphQL */ `
  subscription getChannelMessages($channelId: uuid!) {
    message(where: { channelId: { _eq: $channelId } }) {
      id
      body
      parentId
      replyToId
      sender {
        firstName
        lastName
        id
      }
    }
  }
`);

const addNewMessage = gql(`
  mutation insertNewMessage($body: String!, $channelId: uuid!, $senderId: uuid!) {
    insert_message_one(object: {body: $body, channelId: $channelId, senderId: $senderId}) {
    body
    parentId
    replyToId
    sender {
      firstName
      lastName
      id
    }
  }
}
`);
//#endregion

export const ChannelPage = () => {
  const { channels, memberId, isLoading, error } = useAuthenticated();
  const { channelId } = useParams();
  const [newMessage, setNewMessage] = React.useState<string>();

  const {
    data,
    loading,
    error: messageError,
  } = useSubscription(getChannelMessages, {
    variables: { channelId },
  });

  const [createNewCustomer] = useMutation(addNewMessage, {
    variables: { channelId, body: newMessage, senderId: memberId },
  });

  const onMessageSent = React.useCallback(() => {
    createNewCustomer();
    setNewMessage('');
  }, [createNewCustomer]);

  if (isLoading || loading) {
    return <div>Loading...</div>;
  }

  if (error || messageError) {
    return <div>Error...</div>;
  }

  return (
    <AuthenticatedPageLayout channels={channels}>
      <MessageList messageList={data?.message} />

      <input
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={onMessageSent}>Send Message</button>
    </AuthenticatedPageLayout>
  );
};
