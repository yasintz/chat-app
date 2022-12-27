// #region Import
import React, { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
// #endregion

// #region Styled

const StyledContainer = styled.div`
  .mention-user {
    background-color: rgba(29, 155, 209, 0.1);
    color: rgb(29, 155, 209);
    border-radius: 5px;
    padding: 2px;
    text-decoration: none;
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

  return (
    <StyledContainer>
      <ReactMarkdown
        components={{
          a: renderLink,
        }}
        remarkPlugins={[remarkGfm]}
      >
        {message}
      </ReactMarkdown>
    </StyledContainer>
  );
};
