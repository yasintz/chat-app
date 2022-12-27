//#region Import
import { useEvent, useState } from 'react';
import styled from 'styled-components';
import martData from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { MentionsInput, Mention } from 'react-mentions';
import { useDropzone, DropzoneOptions } from 'react-dropzone';
import { ChatInputHeader } from './header';
import { FileType } from './helpers';
import { ChatInputFiles } from './files';
import { toast } from '@ui';
//#endregion

// #region Styled
const StyledChatInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 4px;
`;

const StyledChatInputFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledChatInputFooterLeftContainer = styled.div`
  display: flex;
`;

const StyledChatInputWrapper = styled.div`
  .chat-input {
    border: none;
    margin-bottom: 8px;
    resize: none;
    height: 80px;
    &:focus {
      outline: none;
    }
    .chat-input__suggestions {
      position: absolute;
      left: 1rem;
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.16);
      border-radius: 0.5rem;
      .chat-input__suggestions__list {
        background-color: 'white';
        border: 1px solid rgba(0, 0, 0, 0.15);
        font-size: 14;
      }
      .chat-input__suggestions__item {
        padding: 0.5rem 1rem;
      }
      .chat-input__suggestions__item--focused {
        background-color: lightblue;
      }
    }
    .chat-input__highlighter {
      .user-mention {
        background-color: #dfed44;
        border-radius: 4px;
      }
    }
  }
`;
// #endregion

const FILE_MAX_SIZE_BYTE = 100000;

type PropsType = {
  value: string;
  disabled?: boolean;
  loading?: boolean;
  onChange: (value: string) => void;
  onPreview: () => void;
  onSend: () => void;
  onFileUpload: (files: File[]) => void;
  onFileRemove: (file: FileType) => void;
  userList: { id: string; display: string }[];
  files: FileType[];
};

export const ChatInput = ({
  value,
  userList,
  files,
  disabled,
  loading,
  onChange,
  onPreview,
  onSend,
  onFileUpload,
  onFileRemove,
}: PropsType) => {
  const [isEmojiModalOpen, setEmojiModalOpen] = useState(false);

  const onEmojiModalOpened = useEvent(() => {
    setEmojiModalOpen(true);
  });
  const addEmoji = useEvent((emoji: { native: string | number }) => {
    onChange(`${value}${emoji.native}`);
    setEmojiModalOpen(false);
  });
  const onDrop = useEvent<NonNullable<DropzoneOptions['onDrop']>>(
    (acceptedFiles, fileRejections) => {
      if (fileRejections.length > 0) {
        fileRejections.forEach((file) => {
          toast.error(
            `Upload Failed (${file.file.name})`,
            file.errors.length > 1 ? (
              <ul>
                {file.errors.map((e) => (
                  <li key={e.code}>{e.message}</li>
                ))}
              </ul>
            ) : (
              file.errors[0].message
            ),
            {
              autoClose: 25000,
            }
          );
        });
        return;
      }
      onFileUpload(acceptedFiles);
    }
  );

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    noClick: true,
    maxFiles: 5 - files.length,
    maxSize: FILE_MAX_SIZE_BYTE,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg', '.jpg'],
      'video/mp4': ['.mp4'],
    },
  });

  return (
    <StyledChatInputContainer {...getRootProps()}>
      <ChatInputHeader value={value} onChange={onChange} />
      <StyledChatInputWrapper>
        <MentionsInput
          value={value}
          className="chat-input"
          onChange={(e) => onChange(e.target.value)}
          placeholder="Message..."
        >
          <Mention
            trigger="@"
            displayTransform={(id, display) => `@${display}`}
            data={userList}
            className="user-mention"
            markup="[@__display__](__id__)"
            style={{ backgroundcolor: '#cee4e5' }}
          />
        </MentionsInput>
      </StyledChatInputWrapper>
      <ChatInputFiles files={files} onRemove={onFileRemove} />
      <StyledChatInputFooterContainer>
        <StyledChatInputFooterLeftContainer>
          <button onClick={open}>+ Upload</button>
          <button onClick={onPreview}>Toggle Preview</button>
          <button onClick={onEmojiModalOpened}>Add Emoji</button>
        </StyledChatInputFooterLeftContainer>
        <button onClick={onSend} disabled={disabled}>
          {loading ? 'Loading...' : 'Send'}
        </button>
      </StyledChatInputFooterContainer>
      {isEmojiModalOpen && (
        <Picker
          theme={'auto'}
          skin={3}
          data={martData}
          onEmojiSelect={addEmoji}
        />
      )}
      <input {...getInputProps()} />
    </StyledChatInputContainer>
  );
};

export type { FileType };
