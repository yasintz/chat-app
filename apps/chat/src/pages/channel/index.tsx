//#region Import
import React, { useState } from 'react';
import { useMutation, useSubscription } from '@apollo/client';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { AuthenticatedPageLayout } from '../../components/common/layouts/AuthenticatedPageLayout';
import { useAuthenticatedUserData } from '../../hooks/load-authenticated-user-data';
import { gql } from '../../gql';

import { ChatInput } from './chat-input';
import { MessageItem } from './message-item';
//#endregion

//#region GQL
const getChannelMessages = gql(/* GraphQL */ `
  subscription getChannelMessages($channelId: uuid!) {
    message(where: { channelId: { _eq: $channelId } }) {
      id
      ...Message
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
      ...Message
    }
  }
`);
//#endregion

// #region Styled
const StyledMessageListContainer = styled.div`
  overflow-y: scroll;
  height: 600px;
`;

// #endregion

export const ChannelPage = () => {
  const { channels, memberId, isLoading, error } = useAuthenticatedUserData();
  const { channelId } = useParams();
  const [showPreview, setShowPreview] = useState(false);
  const [newMessage, setNewMessage] = React.useState<string>('');

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

  const onPreviewClick = () => {
    setShowPreview((prev) => !prev);
  };

  if (isLoading || loading) {
    return <div>Loading...</div>;
  }

  if (error || messageError) {
    return <div>Error...</div>;
  }

  return (
    <AuthenticatedPageLayout channels={channels}>
      <StyledMessageListContainer>
        {data?.message.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}
        {/* <MessageList messageList={data?.message} /> */}
      </StyledMessageListContainer>

      <ChatInput
        value={newMessage}
        onChange={setNewMessage}
        onPreview={onPreviewClick}
        onSend={onMessageSent}
      />
      {showPreview && (
        <>
          <b>Preview</b>
          <hr />
          <ReactMarkdown>{newMessage}</ReactMarkdown>
          <hr />
        </>
      )}
    </AuthenticatedPageLayout>
  );
};
