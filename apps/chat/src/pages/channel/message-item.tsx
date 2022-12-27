// #region Import
import styled from 'styled-components';
import { gql, FragmentType, useFragment } from '../../gql';
import dayjs from 'dayjs';
import { getFileConfigByServiceAndTypes } from '@libs/react';
import { Markdown } from '../../components/common/markdown';
// #endregion

// #region GQL
export const messageFragment = gql(/* GraphQL */ `
  fragment MessageItemMessage on message {
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
  showMessageDivider: boolean;
}

export const MessageItem = ({
  message,
  showMessageDivider,
}: MessageItemProps) => {
  const { body, sender, createdAt, updatedAt } = useFragment(
    messageFragment,
    message
  );

  const { url } = getFileConfigByServiceAndTypes(sender.avatarFile);

  const createdAtInstance = dayjs(createdAt);
  const createdTime = createdAtInstance.format('h:mm A');
  return (
    <>
      {showMessageDivider && (
        <div style={{ margin: '0 auto' }}>
          {createdAtInstance.format('MM/DD/YYYY')}
        </div>
      )}
      <StyledContainer>
        <StyledAvatar
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
    </>
  );
};
