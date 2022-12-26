//#region Import
import { useEvent, useState } from 'react';
import styled from 'styled-components';
import martData from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { MentionsInput, Mention } from 'react-mentions';
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
        backgroundcolor: 'white';
        border: 1px solid rgba(0, 0, 0, 0.15);
        fontsize: 14;
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
        background-color: #cee4e5;
      }
    }
  }
`;

const StyledChatInputHeaderContainer = styled.div`
  display: flex;
`;
const StyledChatInputHeaderMarkdownItem = styled.div`
  margin: 0 4px;
  padding: 4px;
  cursor: pointer;
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
  const onMarkdownItemClick = useEvent((text: string) => {
    onChange(`${value}${text}`);
  });
  const onEmojiModalOpened = useEvent(() => {
    setEmojiModalOpen(true);
  });
  const addEmoji = useEvent((emoji: { native: string | number }) => {
    onChange(`${value}${emoji.native}`);
    setEmojiModalOpen(false);
  });

  return (
    <StyledChatInputContainer>
      <StyledChatInputHeaderContainer>
        <StyledChatInputHeaderMarkdownItem
          onClick={() => onMarkdownItemClick('### Title')}
        >
          H
        </StyledChatInputHeaderMarkdownItem>
        <StyledChatInputHeaderMarkdownItem
          onClick={() => onMarkdownItemClick('**Bold Message**')}
        >
          <b>B</b>
        </StyledChatInputHeaderMarkdownItem>
        <StyledChatInputHeaderMarkdownItem
          onClick={() => onMarkdownItemClick('_Italic Message_')}
        >
          <i>I</i>
        </StyledChatInputHeaderMarkdownItem>
        <StyledChatInputHeaderMarkdownItem
          onClick={() => onMarkdownItemClick('~~Strikethrough~~')}
        >
          <s>S</s>
        </StyledChatInputHeaderMarkdownItem>
      </StyledChatInputHeaderContainer>
      <StyledChatInputWrapper>
        <MentionsInput
          value={value}
          className="chat-input"
          onChange={(e) => onChange(e.target.value)}
          placeholder="Message..."
        >
          <Mention
            trigger="@"
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
