//#region Import
import React from 'react';
import { MessageItem, MessageItemProps } from './MessageItem';
//#endregion

//#region Props
export interface MessageListProps {
  messageList?: Array<MessageItemProps>;
}
//#endregion

export const MessageList = ({ messageList }: MessageListProps) => {
  return (
    <>
      {messageList &&
        messageList.map((item) => (
          <MessageItem
            key={`message-${item.id}`}
            sender={item.sender}
            body={item.body}
            parentId={item.parentId}
            replyToId={item.replyToId}
            id={item.id}
          />
        ))}
      {!messageList && <p>There is no message</p>}
    </>
  );
};
