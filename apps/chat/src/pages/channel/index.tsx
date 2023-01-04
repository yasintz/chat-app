//#region Import
import immer from 'immer';
import _ from 'lodash';
import { useState, useEvent, useMemo, useId, useEffect } from 'react';
import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { AuthenticatedPageLayout } from '../../components/common/layouts/AuthenticatedPageLayout';
import { useAuthenticatedUserData } from '../../hooks/load-authenticated-user-data';
import { ChatInput, FileType } from './chat-input';
import { Message } from './message';
import { Markdown } from '../../components/common/markdown';
import { transformMessages } from './utils';
import { cloudinary, getHasuraFileType } from '@libs/react';
import {
  getChannelMessagesQuery,
  addNewMessageMutation,
  getChannelMembersQuery,
  getChannelMessagesSubscription,
} from './gql';
import { File_Service_Enum, File_Type_Enum } from '@gql/schema';
import Agora from '../../agora/App';
import AgoraRTC from 'agora-rtc-sdk-ng';

//#endregion

// #region Styled
const StyledMessageListContainer = styled.div`
  overflow-y: auto;
  height: 500px;
  display: flex;
  flex-direction: column-reverse;
`;

const StyledScroll = styled(InfiniteScroll)`
  display: flex;
  flex-direction: column-reverse;
`;
// #endregion

const camerasPromise = AgoraRTC.getCameras();
const micsPromise = AgoraRTC.getMicrophones();

const LIMIT = 5;
export const ChannelPage = () => {
  const { channels, memberId, isLoading, error } = useAuthenticatedUserData();
  const { channelId } = useParams();
  const [searchParams] = useSearchParams();
  const [showPreview, setShowPreview] = useState(false);
  const [videoCallToken, setVideoCallToken] = useState<string>();
  const [newMessage, setNewMessage] = useState<string>('');
  const scrollContainerId = useId();
  const [files, setFiles] = useState<FileType[]>([]);
  const isFileLoading = files.some((f) => f.isLoading);
  const [cameras, setCameras] = useState<MediaDeviceInfo[]>([]);
  const [mics, setMics] = useState<MediaDeviceInfo[]>([]);
  const [activeCamera, setActiveCamera] = useState<string>();
  const [activeMic, setActiveMic] = useState<string>();

  useEffect(() => {
    camerasPromise.then((c) => {
      setCameras(c);
      setActiveCamera(c[0].deviceId);
    });
    micsPromise.then((m) => {
      setMics(m);
      setActiveMic(m[0].deviceId);
    });
  }, []);

  const {
    data,
    fetchMore,
    loading,
    updateQuery,
    error: messageError,
  } = useQuery(getChannelMessagesQuery, {
    variables: {
      channelId,
      first: searchParams.get('beforeCursor') ? null : LIMIT,
      last: searchParams.get('beforeCursor') ? LIMIT : null,
      before: searchParams.get('beforeCursor') ?? null,
      after: null,
    },
  });

  const {
    data: memberData,
    loading: isMembersLoading,
    error: memberError,
  } = useQuery(getChannelMembersQuery, { variables: { channelId } });

  useSubscription(getChannelMessagesSubscription, {
    variables: { channelId },
    skip: !data?.message_connection,
    onData: ({ data: subData }) => {
      updateQuery((prev) =>
        immer(prev, (draft) => {
          draft.message_connection.edges = _.unionBy(
            subData.data?.message_connection.edges,
            draft.message_connection.edges || [],
            'node.id'
          );
        })
      );
    },
  });

  // const [insertHasuraFile] = useMutation(insertFileMutation);
  const [insertMessage] = useMutation(addNewMessageMutation);
  // const [getAgoraRtcToken] = useMutation(getAgoraRtcTokenMutation);

  const lastSeenAt = memberData?.channel?.edges[0]?.node.members.find(
    (m) => m.id === memberId
  )?.lastSeenAt;

  const messages = useMemo(
    () => transformMessages(data?.message_connection.edges, lastSeenAt),
    [data?.message_connection.edges, lastSeenAt]
  );

  const mentionUsers = useMemo(() => {
    if (!memberData?.channel?.edges[0]?.node.members) {
      return [];
    }

    return memberData?.channel?.edges[0]?.node.members
      ?.filter((member) => member.member.id !== memberId)
      .map((member) => {
        return { id: member.member.id, display: member.member.name };
      });
  }, [memberData?.channel?.edges, memberId]);

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
  const onVideoCallClick = async () => {
    if (videoCallToken) {
      setVideoCallToken(undefined);
      return;
    }

    // const token = await getAgoraRtcToken({ variables: { channelId } });

    if (!token.data) {
      alert('Mutation failed');
      return;
    }
    setVideoCallToken(token.data?.get_agora_rtc_token?.token);
  };

  // const onFileUpload = useEvent(async (files: File[]) => {
  //   const filesData = files.map((file) => {
  //     const randomId = Math.random().toString();
  //     const url = URL.createObjectURL(file);

  //     const preview: FileType = {
  //       id: randomId,
  //       name: file.name,
  //       path: url,
  //       service: File_Service_Enum.Url,
  //       type: getHasuraFileType(file) as File_Type_Enum,
  //       isLoading: true,
  //       isFailed: false,
  //     };

  //     return { preview, file };
  //   });
  //   setFiles((prev) => prev.concat(filesData.map((f) => f.preview)));

  //   await Promise.all(
  //     filesData.map(async ({ file, preview }) => {
  //       const uploadedFile = await cloudinary.upload(file);
  //       const insertHasuraFileResponse = await insertHasuraFile({
  //         variables: {
  //           file: {
  //             path: uploadedFile?.public_id,
  //             service: File_Service_Enum.Cloudinary,
  //             type: preview.type,
  //             name: file.name,
  //           },
  //         },
  //       });
  //       const hasuraFile = insertHasuraFileResponse.data?.file;
  //       if (!hasuraFile) {
  //         return;
  //       }
  //       setFiles((prev) =>
  //         immer(prev, (draft) => {
  //           const stateFile = draft.find((f) => f.id === preview.id);
  //           if (stateFile) {
  //             if (!uploadedFile) {
  //               stateFile.isFailed = true;
  //               stateFile.isLoading = false;
  //               return;
  //             }

  //             const newFile: FileType = {
  //               ...hasuraFile,
  //               isFailed: false,
  //               isLoading: false,
  //             };

  //             Object.assign(stateFile, newFile);
  //           }
  //         })
  //       );
  //     })
  //   );
  // });
  const onFileRemove = useEvent((file: FileType) =>
    setFiles((prev) => prev.filter((f) => f.id !== file.id))
  );

  const onNext = useEvent(async () => {
    const response = await fetchMore({
      variables: {
        first: LIMIT,
        last: null,
        before: null,
        after: data?.message_connection.pageInfo.endCursor,
      },
    });
    const newMessages = response.data.message_connection.edges;
    updateQuery((prev) =>
      immer(prev, (draft) => {
        draft.message_connection.pageInfo = {
          ...draft.message_connection.pageInfo,
          hasNextPage: response.data.message_connection.pageInfo.hasNextPage,
          endCursor: response.data.message_connection.pageInfo.endCursor,
        };
        draft.message_connection.pageInfo =
          response.data.message_connection.pageInfo;
        draft.message_connection.edges = _.unionBy(
          draft.message_connection.edges,
          newMessages,
          'node.id'
        );
      })
    );
  });

  const onScroll = useEvent(async (e) => {
    if (
      e.target.scrollTop > -5 &&
      data?.message_connection.pageInfo.hasPreviousPage
    ) {
      const response = await fetchMore({
        variables: {
          first: null,
          last: LIMIT,
          before: data?.message_connection.pageInfo.startCursor,
          after: null,
        },
      });
      const newMessages = response.data.message_connection.edges;
      updateQuery((prev) =>
        immer(prev, (draft) => {
          draft.message_connection.pageInfo = {
            ...draft.message_connection.pageInfo,
            hasPreviousPage:
              response.data.message_connection.pageInfo.hasPreviousPage,
            startCursor: response.data.message_connection.pageInfo.startCursor,
          };
          draft.message_connection.edges = _.unionBy(
            newMessages,
            draft.message_connection.edges,
            'node.id'
          );
        })
      );
    }
  });

  const haasMore = useMemo(() => {
    return data?.message_connection.pageInfo.hasNextPage || false;
  }, [data?.message_connection.pageInfo]);

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
          hasMore={haasMore}
          loader={null}
          scrollableTarget={scrollContainerId}
          onScroll={onScroll}
          inverse
        >
          {messages.map((message, index) => (
            <Message
              key={message.id}
              beforeCursor={
                messages[index !== messages.length - 1 ? index + 1 : index]
                  .cursor
              }
              messageCursor={message.cursor}
              scrollTo={message.cursor === searchParams.get('messageId')}
              message={message.node}
              showDateDivider={message.showDateDivider}
              showNewMessageDivider={message.showNewMessageDivider}
            />
          ))}
          {haasMore && <h1>Loading...</h1>}
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
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onFileUpload={() => {}}
        disabled={
          isFileLoading || (newMessage.length === 0 && files.length === 0)
        }
        loading={isFileLoading}
      />
      <button onClick={onVideoCallClick}>Video Call</button>
      {showPreview && (
        <>
          <b>Preview</b>
          <hr />
          <Markdown text={newMessage} />
          <hr />
        </>
      )}
      <ul>
        <li>
          Camera
          <ul>
            {cameras.map((c) => (
              <li
                key={c.deviceId}
                style={{
                  fontWeight: activeCamera === c.deviceId ? 'bold' : undefined,
                }}
                onClick={() => setActiveCamera(c.deviceId)}
              >
                {c.label}
              </li>
            ))}
          </ul>
        </li>
        <li>
          Microphone
          <ul>
            {mics.map((c) => (
              <li
                key={c.deviceId}
                onClick={() => setActiveMic(c.deviceId)}
                style={{
                  fontWeight: activeMic === c.deviceId ? 'bold' : undefined,
                }}
              >
                {c.label}
              </li>
            ))}
          </ul>
        </li>
      </ul>
      {videoCallToken && channelId && memberId && activeCamera && activeMic && (
        <Agora
          onClose={() => {
            setVideoCallToken(undefined);
          }}
          channelId={channelId}
          memberId={memberId}
          token={videoCallToken}
          cameraId={activeCamera}
          microphoneId={activeMic}
        />
      )}
    </AuthenticatedPageLayout>
  );
};
