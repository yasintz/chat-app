//#region Import
import React from 'react';
//#endregion

interface MessageItemSender {
  name: string;
  id: string;
}

export interface MessageItemProps {
  id: string;
  body: string;
  parentId?: string;
  replyToId?: string;
  sender: MessageItemSender;
}

export const MessageItem = ({
  body,
  parentId,
  replyToId,
  sender,
}: MessageItemProps) => {
  return (
    <>
      <p>{sender.name}</p>
      <p>{body}</p>
      <hr />
    </>
  );
};
