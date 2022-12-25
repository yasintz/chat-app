//#region Import
import React from 'react';
import styled from 'styled-components';
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

const StyledChatInput = styled.textarea`
  border: none;
  margin-bottom: 8px;
  resize: none;
  height: 80px;
  &:focus {
    outline: none;
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
};

export const ChatInput = ({
  value,
  onChange,
  onPreview,
  onSend,
}: PropsType) => {
  const onMarkdownItemClick = (text: string) => {
    onChange(`${value}${text}`);
  };

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
      <StyledChatInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Message..."
      />
      <StyledChatInputFooterContainer>
        <StyledChatInputFooterLeftContainer>
          <button onClick={onPreview}>Toggle Preview</button>
        </StyledChatInputFooterLeftContainer>
        <button onClick={onSend}>Send</button>
      </StyledChatInputFooterContainer>
    </StyledChatInputContainer>
  );
};
