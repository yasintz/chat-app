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
import { ChatInput, FileType } from './chat-input';
import { MessageItem } from './message-item';
import { Markdown } from '../../components/common/markdown';
import { transformMessages } from './utils';
import { cloudinary, getHasuraFileType } from '@libs/react';
import {
  getChannelMessagesQuery,
  addNewMessageMutation,
  getChannelMembersQuery,
  getChannelMessagesSubscription,
  insertFileMutation,
} from './gql';
import { File_Service_Enum, File_Type_Enum } from '@gql/schema';
import { boolean } from 'zod';
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
  const [files, setFiles] = useState<FileType[]>([]);
  const isFileLoading = files.some((f) => f.isLoading);
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
  } = useQuery(getChannelMembersQuery, { variables: { channelId } });

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

  const [insertHasuraFile] = useMutation(insertFileMutation);
  const [insertMessage] = useMutation(addNewMessageMutation);

  const lastSeenAt = memberData?.channel?.members?.find(
    (m) => m.member.id === memberId
  )?.lastSeenAt;

  const messages = useMemo(
    () => transformMessages(data?.message, lastSeenAt),
    [data?.message, lastSeenAt]
  );

  const mentionUsers = useMemo(() => {
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
    insertMessage({
      variables: {
        channelId,
        body: newMessage || '',
        senderId: memberId,
        files: files.map((file) => ({
          fileId: file.id,
        })),
      },
    });
    setNewMessage('');
    setFiles([]);
  });

  const onPreviewClick = () => {
    setShowPreview((prev) => !prev);
  };

  const onFileUpload = useEvent(async (files: File[]) => {
    const filesData = files.map((file) => {
      const randomId = Math.random().toString();
      const url = URL.createObjectURL(file);

      const preview: FileType = {
        id: randomId,
        name: file.name,
        path: url,
        service: File_Service_Enum.Url,
        type: getHasuraFileType(file) as File_Type_Enum,
        isLoading: true,
        isFailed: false,
      };

      return { preview, file };
    });
    setFiles((prev) => prev.concat(filesData.map((f) => f.preview)));

    await Promise.all(
      filesData.map(async ({ file, preview }) => {
        const uploadedFile = await cloudinary.upload(file);
        const insertHasuraFileResponse = await insertHasuraFile({
          variables: {
            file: {
              path: uploadedFile?.public_id,
              service: File_Service_Enum.Cloudinary,
              type: preview.type,
              name: file.name,
            },
          },
        });
        const hasuraFile = insertHasuraFileResponse.data?.file;
        if (!hasuraFile) {
          return;
        }
        setFiles((prev) =>
          immer(prev, (draft) => {
            const stateFile = draft.find((f) => f.id === preview.id);
            if (stateFile) {
              if (!uploadedFile) {
                stateFile.isFailed = true;
                stateFile.isLoading = false;
                return;
              }

              const newFile: FileType = {
                ...hasuraFile,
                isFailed: false,
                isLoading: false,
              };

              Object.assign(stateFile, newFile);
            }
          })
        );
      })
    );
  });
  const onFileRemove = useEvent((file: FileType) =>
    setFiles((prev) => prev.filter((f) => f.id !== file.id))
  );

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
              showDateDivider={message.showDateDivider}
              showNewMessageDivider={message.showNewMessageDivider}
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
        userList={mentionUsers}
        files={files}
        onFileRemove={onFileRemove}
        onFileUpload={onFileUpload}
        disabled={
          isFileLoading || (newMessage.length === 0 && files.length === 0)
        }
        loading={isFileLoading}
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
