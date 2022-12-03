//#region Import
import React from 'react';
//#endregion

//#region Props
interface MessageItemSender {
  email: string;
  firstName: string;
  lastName: string;
  id: string;
}

export interface MessageItemProps {
  id: string;
  body: string;
  parentId?: string;
  replyToId?: string;
  sender: MessageItemSender;
}
//#endregion

export const MessageItem = ({
  body,
  parentId,
  replyToId,
  sender,
}: MessageItemProps) => {
  return (
    <>
      <p>
        {sender.firstName} {sender.lastName}
      </p>
      <p>{body}</p>
      <hr />
    </>
  );
};
