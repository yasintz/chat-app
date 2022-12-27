import { useEvent } from 'react';
import styled from 'styled-components';

// #region Styled
const StyledChatInputHeaderContainer = styled.div`
  display: flex;
`;

const StyledChatInputHeaderMarkdownItem = styled.div`
  margin: 0 4px;
  padding: 4px;
  cursor: pointer;
`;
// #endregion

type ChatInputHeaderProps = {
  value: string;
  onChange: (value: string) => void;
};

export const ChatInputHeader = ({ value, onChange }: ChatInputHeaderProps) => {
  const onMarkdownItemClick = useEvent((text: string) => {
    onChange(`${value}${text}`);
  });

  return (
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
  );
};
