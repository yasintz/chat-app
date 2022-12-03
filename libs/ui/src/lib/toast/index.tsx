// #region Imports
import React from 'react';
import styled from 'styled-components';
import {
  ToastContainer as ReactToastifyToastContainer,
  toast as toastify,
  Zoom,
  ToastOptions,
} from 'react-toastify';
import { ReactComponent as SuccessIcon } from './assets/toast-success-check-mark';
import { ReactComponent as ErrorIcon } from './assets/toast-error-cross';

import 'react-toastify/dist/ReactToastify.css';
import './style.css';
// #endregion

// #region Styled
const StyledToastContent = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 30px',
});

const StyledTitle = styled.p({
  fontSize: 14,
  margin: 0,
  // fontFamily: fontFamilies.circular,
  color: '#fff',
  fontWeight: 800,
});

const StyledMessage = styled.p({
  fontSize: 14,
  margin: 0,
  marginTop: 4,
  color: '#fff',
  // fontFamily: fontFamilies.circular,
});

const StyledIconWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
});
// #endregion

const TOAST_DEFAULT_LIFE = 8000;

type CustomToastContentPropsType = {
  type: 'success' | 'error';
  title: string;
  message?: string;
};

const CustomToastContentIcons: Record<
  CustomToastContentPropsType['type'],
  JSX.Element | null
> = {
  success: <SuccessIcon />,
  error: <ErrorIcon />,
};

const CustomToastContent: React.FunctionComponent<
  CustomToastContentPropsType
> = ({ type, title, message }) => {
  return (
    <StyledToastContent>
      <div>
        <StyledTitle>{title}</StyledTitle>
        {message && <StyledMessage>{message}</StyledMessage>}
      </div>
      <StyledIconWrapper>{CustomToastContentIcons[type]}</StyledIconWrapper>
    </StyledToastContent>
  );
};

const toastSuccess = (
  title: string,
  message?: string,
  options?: ToastOptions
): void => {
  toastify.success(
    <CustomToastContent type="success" title={title} message={message} />,
    options
  );
};

const toastError = (
  title: string,
  message?: string,
  options?: ToastOptions
): void => {
  toastify.error(
    <CustomToastContent type="error" title={title} message={message} />,
    options
  );
};

type ToastNotificationInputType = {
  title: string;
  options?: ToastOptions;
};

const toastInfo = ({
  title,
  options,
}: ToastNotificationInputType): React.ReactText => {
  return toastify.info(title, {
    autoClose: TOAST_DEFAULT_LIFE,
    closeOnClick: true,
    draggable: true,
    hideProgressBar: false,
    pauseOnHover: false,
    pauseOnFocusLoss: false,
    closeButton: true,
    transition: Zoom,
    onClick: (e) => {
      if (options?.onClick) options.onClick(e);
    },
    ...(options || {}),
  });
};

export function ToastContainer(): JSX.Element {
  return (
    <ReactToastifyToastContainer
      style={{ zIndex: 2147483006 }}
      closeButton={false}
      position="bottom-right"
      hideProgressBar
    />
  );
}

export const toast = {
  success: toastSuccess,
  info: toastInfo,
  error: toastError,
};
