//#region Import
import immer from 'immer';
import _ from 'lodash';
import { useState, useEvent, useMemo, useId } from 'react';
import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { AuthenticatedPageLayout } from '../../components/common/layouts/AuthenticatedPageLayout';
import { useAuthenticatedUserData } from '../../hooks/load-authenticated-user-data';
import { getFragment, gql } from '../../gql';
import { ChatInput } from './chat-input';
import { MessageItem } from './message-item';
import dayjs from 'dayjs';
import { Markdown } from '../../components/common/markdown';
//#endregion

//#region GQL

const channelPageMessageFragment = gql(/* GraphQL */ `
  fragment ChannelPageMessage on message {
    id
    createdAt
  }
`);

const getChannelMessagesSubscription = gql(/* GraphQL */ `
  subscription getChannelNewMessages($channelId: uuid!) {
    message(
      where: { channelId: { _eq: $channelId } }
      order_by: { createdAt: desc }
      limit: 1
    ) {
      ...ChannelPageMessage
      ...MessageItemMessage
    }
  }
`);
const getChannelMessagesQuery = gql(/* GraphQL */ `
  query getChannelMessages($channelId: uuid!, $limit: Int!, $offset: Int!) {
    message(
      where: { channelId: { _eq: $channelId } }
      limit: $limit
      offset: $offset
      order_by: { createdAt: desc }
    ) {
      ...ChannelPageMessage
      ...MessageItemMessage
    }
  }
`);

const getChannelMembers = gql(/* GraphQL */ `
  query getChannelMembers($channelId: uuid!) {
    channel: channel_by_pk(id: $channelId) {
      id
      members {
        id
        member {
          name
          id
        }
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
      ...ChannelPageMessage
      ...MessageItemMessage
    }
  }
`);
//#endregion

// #region Styled
const StyledMessageListContainer = styled.div`
  overflow-y: auto;
  height: 400px;
  display: flex;
  flex-direction: column-reverse;
`;

const StyledScroll = styled(InfiniteScroll)`
  display: flex;
  flex-direction: column-reverse;
`;
// #endregion

const LIMIT = 5;
export const ChannelPage = () => {
  const { channels, memberId, isLoading, error } = useAuthenticatedUserData();
  const { channelId } = useParams();
  const [showPreview, setShowPreview] = useState(false);
  const [newMessage, setNewMessage] = useState<string>('');
  const scrollContainerId = useId();
  const [hasMore, setHasMore] = useState(true);

  const {
    data,
    fetchMore,
    loading,
    updateQuery,
    error: messageError,
  } = useQuery(getChannelMessagesQuery, {
    variables: { channelId, limit: LIMIT, offset: 0 },
  });

  const {
    data: memberData,
    loading: isMembersLoading,
    error: memberError,
  } = useQuery(getChannelMembers, { variables: { channelId } });

  useSubscription(getChannelMessagesSubscription, {
    variables: { channelId },
    onData: ({ data }) => {
      updateQuery((prev) =>
        immer(prev, (draft) => {
          draft.message = _.unionBy(
            data?.data?.message || [],
            draft.message,
            'id'
          );
        })
      );
    },
  });

  const messages = useMemo(() => {
    if (!data?.message) {
      return [];
    }

    return data.message.map((message, index) => {
      const prevMessage = getFragment(
        channelPageMessageFragment,
        data.message?.[index - 1]
      );

      const messageData = getFragment(channelPageMessageFragment, message);

      const showDateDivider =
        !prevMessage ||
        dayjs(prevMessage.createdAt).diff(messageData.createdAt, 'day') > 0;

      return {
        id: messageData.id,
        ...message,
        showDateDivider,
      };
    });
  }, [data?.message]);

  const [createNewCustomer] = useMutation(addNewMessage, {
    variables: { channelId, body: newMessage || '', senderId: memberId },
  });

  const messages = useMemo(() => data?.message || [], [data?.message]);

  const members = useMemo(() => {
    if (!memberData?.channel?.members) {
      return [];
    }

    return memberData?.channel?.members
      ?.filter((member) => member.member.id !== memberId)
      .map((member) => {
        return { id: member.member.id, display: member.member.name };
      });
  }, [memberData?.channel?.members, memberId]);

  const onMessageSent = useEvent(() => {
    createNewCustomer();
    setNewMessage('');
  });

  const onPreviewClick = () => {
    setShowPreview((prev) => !prev);
  };

  const onNext = useEvent(async () => {
    const response = await fetchMore({
      variables: {
        offset: messages.length || 0,
      },
    });
    const newMessages = response.data.message;
    setHasMore(newMessages.length === LIMIT);
    updateQuery((prev) =>
      immer(prev, (draft) => {
        draft.message = _.unionBy(draft.message, newMessages, 'id');
      })
    );
  });

  if (isLoading || loading || isMembersLoading) {
    return <div>Loading...</div>;
  }

  if (error || messageError || memberError) {
    return <div>Error...</div>;
  }

  return (
    <AuthenticatedPageLayout channels={channels}>
      <StyledMessageListContainer id={scrollContainerId}>
        <StyledScroll
          dataLength={messages.length}
          next={onNext}
          hasMore={hasMore}
          loader={null}
          scrollableTarget={scrollContainerId}
          inverse
        >
          {messages.map((message) => (
            <MessageItem
              key={message.id}
              message={message}
              showMessageDivider={message.showDateDivider}
            />
          ))}
          {hasMore && <h1>Loading...</h1>}
        </StyledScroll>
      </StyledMessageListContainer>

      <ChatInput
        value={newMessage}
        onChange={setNewMessage}
        onPreview={onPreviewClick}
        onSend={onMessageSent}
        userList={members}
      />
      {showPreview && (
        <>
          <b>Preview</b>
          <hr />
          <Markdown message={newMessage} />
          <hr />
        </>
      )}
    </AuthenticatedPageLayout>
  );
};
