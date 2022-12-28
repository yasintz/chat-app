// #region Import
import styled from 'styled-components';
import { FragmentType, useFragment } from '../../../gql';
import dayjs from 'dayjs';
import _ from 'lodash';
import { getFileConfigByServiceAndTypes } from '@libs/react';
import { Markdown } from '../../../components/common/markdown';
import { ChatInputFiles } from '../chat-input/files';
import { useLayoutEffect, useRef, useState } from 'react';
import LinkPreview from './link-preview';
import { gql } from '../../../gql';
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
    files {
      id
      file {
        id
        name
        path
        service
        type
      }
    }
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
  showDateDivider: boolean;
  showNewMessageDivider: boolean;
}

export const Message = ({
  message,
  showDateDivider,
  showNewMessageDivider,
}: MessageItemProps) => {
  const { body, sender, createdAt, updatedAt, files } = useFragment(
    messageFragment,
    message
  );

  const [links, setLinks] = useState<string[]>([]);

  const messageContentRef = useRef<HTMLDivElement>(null);
  const { url } = getFileConfigByServiceAndTypes(sender.avatarFile);

  const createdAtInstance = dayjs(createdAt);
  const createdTime = createdAtInstance.format('h:mm A');

  useLayoutEffect(() => {
    if (messageContentRef.current) {
      const linkElements =
        messageContentRef.current.querySelectorAll('a.out-link');

      setLinks(
        _.uniq(
          (Array.from(linkElements) as HTMLAnchorElement[]).map((el) => el.href)
        )
      );
    }
  }, []);

  return (
    <div>
      {showNewMessageDivider && (
        <div style={{ textAlign: 'center', color: 'red' }}>New Messages</div>
      )}
      {showDateDivider && (
        <div style={{ textAlign: 'center' }}>
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
            <StyledGrayText>
              -- {createdAtInstance.format('MM/DD/YYYY')}
            </StyledGrayText>
          </StyledAuthorContainer>
          <div>
            <Markdown text={body} ref={messageContentRef} />

            {updatedAt && <StyledGrayText>(edited)</StyledGrayText>}
            {files.length > 0 && (
              <ChatInputFiles
                files={files.map((file) => file.file)}
                size="lg"
              />
            )}
            {links.length > 0 && (
              <div style={{ maxWidth: 600 }}>
                {links.map((link) => (
                  <LinkPreview key={link} url={link} />
                ))}
              </div>
            )}
          </div>
        </StyledMessageRightContainer>
      </StyledContainer>
    </div>
  );
};
