// #region Import
import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { gql } from '../../../gql';
import { Markdown } from '../../../components/common/markdown';
// #endregion

// #region GQL
const getLinkPreviewQuery = gql(/* GraphQL */ `
  query MessageItemGetLinkPreview($url: String!) {
    linkPreview: get_link_preview(url: $url) {
      description
      images
      favicons
      title
    }
  }
`);
// #endregion

// #region Styled
const StyledContainer = styled.div<{ $isLoaded: boolean }>(({ $isLoaded }) => ({
  ...(!$isLoaded && {
    position: 'absolute',
    width: 0,
    height: 0,
  }),
  overflow: 'hidden',
  display: 'flex',
}));

const StyledBorder = styled.div`
  margin-right: 10px;
  background-color: #7d7d7d;
  border-radius: 8px;
  flex-shrink: 0;
  width: 4px;
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledLink = styled.a`
  margin-bottom: 8px;
  display: block;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
// #endregion

type PropsType = {
  className?: string;
  url: string;
  hideCloseButton?: boolean;
};

const LinkPreview: React.FC<PropsType> = ({
  className,
  url,
  hideCloseButton,
}) => {
  const [isClosed, setIsClosed] = React.useState<boolean>(false);
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);
  const { data } = useQuery(getLinkPreviewQuery, {
    variables: { url },
    skip: !url,
  });
  const [isSquare, setIsSquare] = useState(false);

  const onClose: React.MouseEventHandler<HTMLDivElement> | undefined = (e) => {
    e.stopPropagation();
    setIsClosed(true);
  };

  const onLoad: React.ReactEventHandler<HTMLImageElement> = (event) => {
    const el = event.target as HTMLImageElement;
    setIsSquare(el.naturalWidth === el.naturalHeight || el.naturalWidth < 400);
    setIsLoaded(true);
  };

  const onError = () => {
    setIsError(true);
  };

  if (
    !data?.linkPreview ||
    !data?.linkPreview.images?.length ||
    isError ||
    isClosed
  ) {
    return null;
  }

  const linkBody = data.linkPreview;

  const domain = new URL(url).hostname || url;

  return (
    <StyledContainer className={className} $isLoaded={isLoaded}>
      <StyledBorder />
      <StyledWrapper>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {linkBody.favicons.length > 0 && (
            <img
              style={{ width: 16, height: 16, marginRight: 8, borderRadius: 2 }}
              src={linkBody.favicons[0]}
              alt={linkBody.title || ''}
            />
          )}
          <span>
            <b>{domain}</b>
          </span>
        </div>
        <div style={{ marginTop: 8, display: isSquare ? 'flex' : 'block' }}>
          <div>
            <StyledLink href={url} target="_blank" rel="noreferrer" >
              {linkBody.title}
            </StyledLink>
            <Markdown text={linkBody.description || ''} />
          </div>
          <img
            src={linkBody.images?.[0]}
            alt="any"
            style={{
              maxWidth: isSquare ? 64 : 220,
              objectFit: 'contain',
              marginTop: isSquare ? 0 : 12,
              borderRadius: 8,
              marginLeft: isSquare ? 24 : 0,
              objectPosition: isSquare ? 'top' : undefined,
            }}
            onLoad={onLoad}
            onError={onError}
          />
        </div>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default LinkPreview;
