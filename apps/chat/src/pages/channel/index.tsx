//#region Import
import React from 'react';
import { useMutation, useSubscription } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { AuthenticatedPageLayout } from '../../components/common/layouts/AuthenticatedPageLayout';
import { useAuthenticatedUserData } from '../../hooks/load-authenticated-user-data';
import { gql } from '../../gql';
import { MessageList } from '../../components/page/channel/message-list';
import martData from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
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
        id
        name
      }
    }
  }
`);

const addNewMessage = gql(/* GraphQL */ `
  mutation insertNewMessage(
    $body: String!
    $channelId: uuid!
    $senderId: uuid!
  ) {
    insert_message_one(
      object: { body: $body, channelId: $channelId, senderId: $senderId }
    ) {
      body
      parentId
      replyToId
      sender {
        id
        name
      }
    }
  }
`);
//#endregion

export const ChannelPage = () => {
  const { channels, memberId, isLoading, error } = useAuthenticatedUserData();
  const { channelId } = useParams();
  const [newMessage, setNewMessage] = React.useState<string>('');
  const [isEmojiModalOpen, setEmojiModalOpen] = React.useState<boolean>(false);

  const {
    data,
    loading,
    error: messageError,
  } = useSubscription(getChannelMessages, {
    variables: { channelId },
  });

  const [createNewCustomer] = useMutation(addNewMessage, {
    variables: { channelId, body: newMessage || '', senderId: memberId },
  });

  const onMessageSent = React.useCallback(() => {
    createNewCustomer();
    setNewMessage('');
  }, [createNewCustomer]);

  const addEmoji = React.useCallback((emoji: { native: string | number }) => {
    setNewMessage((prev) => (prev ? prev + emoji.native : emoji.native));
    setEmojiModalOpen(false);
  }, []);

  const onEmojiModalOpened = React.useCallback(() => {
    setEmojiModalOpen(true);
  }, []);

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
      {isEmojiModalOpen && (
        <Picker
          theme={'auto'}
          skin={3}
          data={martData}
          onEmojiSelect={addEmoji}
        />
      )}
      <button onClick={onEmojiModalOpened}>Add Emoji</button>
    </AuthenticatedPageLayout>
  );
};
