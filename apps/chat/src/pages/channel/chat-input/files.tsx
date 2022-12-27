import { getFileConfigByServiceAndTypes } from '@libs/react';
import { useMemo } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { FileType } from './helpers';

type FilePreviewSizeType = 'sm' | 'md' | 'lg';

// #region Styled
const StyledContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const StyledCloseButton = styled.div`
  opacity: 0;
  position: absolute;
  width: 18px;
  height: 18px;
  top: -6px;
  right: -6px;
  border-radius: 50%;
  background-color: #8d8d8d;
  color: #e3e3e3;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity ease-in 130ms;
`;
const styleBySize: Record<FilePreviewSizeType, FlattenSimpleInterpolation> = {
  sm: css`
    width: 58px;
    height: 58px;
    border-radius: 10px;
  `,
  md: css`
    width: 80px;
    height: 80px;
    border-radius: 10px;
  `,
  lg: css`
    width: 120px;
    height: 120px;
    border-radius: 12px;
  `,
};

const StyledMediaContainer = styled.div<{
  $loading?: boolean;
  $size: FilePreviewSizeType;
}>`
  background-color: #6d6d6d;
  margin-right: 8px;
  position: relative;
  cursor: pointer;
  img,
  video {
    border-radius: 10px;
    --size: 100%;
    width: var(--size);
    height: var(--size);
    object-fit: cover;
    opacity: ${(props) => (props.$loading ? 0.5 : 1)};
  }

  &:hover {
    ${StyledCloseButton} {
      opacity: 1;
    }
  }

  ${(props) => styleBySize[props.$size]}
`;

const StyledLoading = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  background-color: white;
  padding: 4px;
  border-radius: 4px;
  font-size: 12px;
`;

// #endregion

type ChatInputFilesProps = {
  files: FileType[];
  onRemove?: (file: FileType) => void;
  size?: FilePreviewSizeType;
};

export const ChatInputFiles = ({
  files: filesData,
  onRemove,
  size = 'sm',
}: ChatInputFilesProps) => {
  const files = useMemo(
    () =>
      filesData.map((file) => ({
        ...file,
        config: getFileConfigByServiceAndTypes(file),
      })),
    [filesData]
  );

  return (
    <StyledContainer>
      {files.map((file) => (
        <StyledMediaContainer
          key={file.id}
          $loading={file.isLoading}
          $size={size}
        >
          {file.config.type === 'image' ? (
            <img src={file.config.url} alt={file.name} />
          ) : (
            <video src={file.config.url} />
          )}
          {onRemove && (
            <StyledCloseButton onClick={() => onRemove(file)}>
              ✖
            </StyledCloseButton>
          )}
          {file.isLoading && <StyledLoading>Loading...</StyledLoading>}
        </StyledMediaContainer>
      ))}
    </StyledContainer>
  );
};
