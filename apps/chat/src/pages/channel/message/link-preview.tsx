// #region Import
import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { gql } from '../../../gql';
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
  width: 10px;
  border-radius: 10px;
  background-color: gray;
  margin-right: 10px;
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

  const onClose: React.MouseEventHandler<HTMLDivElement> | undefined = (e) => {
    e.stopPropagation();
    setIsClosed(true);
  };

  const onLoad = () => {
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

  console.log(linkBody);
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
        <div style={{ marginTop: 8 }}>
          <div>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              style={{ marginBottom: 8, display: 'block' }}
            >
              {linkBody.title}
            </a>
            <div>{linkBody.description}</div>
          </div>
          <img
            src={linkBody.images?.[0]}
            alt="any"
            style={{
              maxWidth: 220,
              objectFit: 'cover',
              marginTop: 12,
              borderRadius: 8,
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
