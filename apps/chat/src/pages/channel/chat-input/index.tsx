//#region Import
import { useEvent, useState } from 'react';
import styled from 'styled-components';
import martData from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { MentionsInput, Mention } from 'react-mentions';
import { ChatInputHeader } from './header';
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

type PropsType = {
  value: string;
  onChange: (value: string) => void;
  onPreview: () => void;
  onSend: () => void;
  userList: { id: string; display: string }[];
};

export const ChatInput = ({
  value,
  onChange,
  onPreview,
  onSend,
  userList,
}: PropsType) => {
  const [isEmojiModalOpen, setEmojiModalOpen] = useState(false);

  const onEmojiModalOpened = useEvent(() => {
    setEmojiModalOpen(true);
  });
  const addEmoji = useEvent((emoji: { native: string | number }) => {
    onChange(`${value}${emoji.native}`);
    setEmojiModalOpen(false);
  });

  return (
    <StyledChatInputContainer>
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
      <StyledChatInputFooterContainer>
        <StyledChatInputFooterLeftContainer>
          <button onClick={onPreview}>Toggle Preview</button>
          <button onClick={onEmojiModalOpened}>Add Emoji</button>
        </StyledChatInputFooterLeftContainer>
        <button onClick={onSend}>Send</button>
      </StyledChatInputFooterContainer>
      {isEmojiModalOpen && (
        <Picker
          theme={'auto'}
          skin={3}
          data={martData}
          onEmojiSelect={addEmoji}
        />
      )}
    </StyledChatInputContainer>
  );
};
