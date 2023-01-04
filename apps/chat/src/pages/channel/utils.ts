import { getFragment } from '@libs/graphql';
import dayjs from 'dayjs';
import { channelPageMessageFragment, getChannelMessagesQuery } from './gql';
import { DocumentType } from '../../gql';

function getShowDateDivider(
  message: DocumentType<typeof channelPageMessageFragment>,
  previousMessage: DocumentType<typeof channelPageMessageFragment>
) {
  return (
    !previousMessage ||
    dayjs(message.createdAt).format('DD/MM/YYYY') !==
      dayjs(previousMessage.createdAt).format('DD/MM/YYYY')
  );
}

function getShowNewMessageDivider(
  message: DocumentType<typeof channelPageMessageFragment>,
  previousMessage: DocumentType<typeof channelPageMessageFragment>,
  lastSeenAt: string
) {
  return (
    dayjs(message.createdAt).diff(lastSeenAt) > 0 &&
    (!previousMessage || dayjs(previousMessage.createdAt).diff(lastSeenAt) <= 0)
  );
}

export function transformMessages(
  messages:
    | DocumentType<
        typeof getChannelMessagesQuery
      >['message_connection']['edges']
    | undefined
    | null,
  lastSeenAt: string
) {
  if (!messages) {
    return [];
  }

  return messages.map((message, index) => {
    const messageData = getFragment(channelPageMessageFragment, message.node);
    const previousMessage = getFragment(
      channelPageMessageFragment,
      messages?.[index + 1]?.node
    );

    const showDateDivider = getShowDateDivider(messageData, previousMessage);
    const showNewMessageDivider = getShowNewMessageDivider(
      messageData,
      previousMessage,
      lastSeenAt
    );

    return {
      id: messageData.id,
      ...message,
      showDateDivider,
      showNewMessageDivider,
    };
  });
}
