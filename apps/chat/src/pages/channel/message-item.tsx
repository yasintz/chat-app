// #region Import
import React from 'react';
import styled from 'styled-components';
import { gql, FragmentType, useFragment } from '../../gql';
import dayjs from 'dayjs';
import { getFileConfigByServiceAndTypes } from '@helpers/client';
import { Markdown } from '../../components/common/markdown';
// #endregion

// #region GQL
export const messageFragment = gql(/* GraphQL */ `
  fragment Message on message {
    id
    createdAt
    updatedAt
    body
    parentId
    replyToId
    sender {
      id
      name
      avatarFile {
        id
        path
        service
        type
      }
    }
  }
`);
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
  margin-right: 8px;
`;

const StyledAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  margin-right: 12px;
`;

const StyledGrayText = styled.span`
  color: gray;
  font-size: 15px;
`;

const StyledAuthorContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

// #endregion

export interface MessageItemProps {
  message: FragmentType<typeof messageFragment>;
}

export const MessageItem = ({ message: messageData }: MessageItemProps) => {
  const { body, sender, createdAt, updatedAt } = useFragment(
    messageFragment,
    messageData
  );

  const { url } = getFileConfigByServiceAndTypes(sender.avatarFile);

  const createdTime = dayjs(createdAt).format('h:mm A');

  return (
    <StyledContainer>
      <StyledAvatar
        // src={`https://i.pravatar.cc/150?u=${sender.id}`}
        src={
          url ||
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'
        }
        alt="Avatar"
      />
      <StyledMessageRightContainer>
        <StyledAuthorContainer>
          <StyledAuthorName>{sender.name}</StyledAuthorName>
          <StyledGrayText>{createdTime}</StyledGrayText>
        </StyledAuthorContainer>
        <div>
          <Markdown message={body} />

          {updatedAt && <StyledGrayText>(edited)</StyledGrayText>}
        </div>
      </StyledMessageRightContainer>
    </StyledContainer>
  );
};
