// #region Import
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
// #endregion

// #region Styled

const StyledContainer = styled.div`
  display: flex;
  border-top: 1px solid #ddd;
  padding: 12px 24px;
`;

const StyledMessageRightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledAuthorName = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const StyledAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  margin-right: 12px;
`;
// #endregion

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

export const MessageItem = ({ body, sender }: MessageItemProps) => {
  return (
    <StyledContainer>
      <StyledAvatar
        src={`https://i.pravatar.cc/150?u=${sender.id}`}
        alt="Avatar"
      />
      <StyledMessageRightContainer>
        <StyledAuthorName>{sender.name}</StyledAuthorName>
        <div>
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
      </StyledMessageRightContainer>
    </StyledContainer>
  );
};
