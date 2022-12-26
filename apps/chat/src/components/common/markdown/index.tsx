// #region Import
import React, { ReactNode, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
// #endregion

// #region Styled

const StyledContainer = styled.div`
  .mention-user {
    background-color: #ffe505;
    color: #000;
    text-decoration: none;
    font-weight: bold;
  }
`;

// #endregion

export interface MarkdownProps {
  message: string;
}

export const Markdown = ({ message }: MarkdownProps) => {
  const renderLink = (data: {
    href?: string;
    children: (ReactNode & ReactNode[]) | (string & string[]);
  }) => {
    return (
      <a
        href={data.href}
        className={
          typeof data.children[0] === 'string' &&
          data.children[0].startsWith('@')
            ? 'mention-user'
            : 'out-link'
        }
      >
        {data.children[0]}
      </a>
    );
  };

  const messageBody = useMemo(() => {
    const messageWithMentions = message.replace(
      /@\[(.*?)\]\((.*?)\)/g,
      (_, name, id) => {
        return `[@${name}](${id})`;
      }
    );

    return messageWithMentions;
  }, [message]);

  return (
    <StyledContainer>
      <ReactMarkdown
        components={{
          a: renderLink,
        }}
        remarkPlugins={[remarkGfm]}
      >
        {messageBody}
      </ReactMarkdown>
    </StyledContainer>
  );
};
