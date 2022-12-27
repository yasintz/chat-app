// #region Imports
import React from 'react';
import styled from 'styled-components';
import {
  ToastContainer as ReactToastifyToastContainer,
  toast as toastify,
  ToastOptions,
} from 'react-toastify';
import { ReactComponent as SuccessIcon } from './assets/toast-success-check-mark';
import { ReactComponent as ErrorIcon } from './assets/toast-error-cross';
import { ReactComponent as InfoIcon } from './assets/toast-info';

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

type CustomToastContentPropsType = {
  type: 'success' | 'error' | 'info';
  title: string;
  message?: string | React.ReactNode;
};

type ToastFunction = (
  title: CustomToastContentPropsType['title'],
  message?: CustomToastContentPropsType['message'],
  options?: ToastOptions
) => void;

const CustomToastContentIcons: Record<
  CustomToastContentPropsType['type'],
  JSX.Element | null
> = {
  success: <SuccessIcon />,
  error: <ErrorIcon />,
  info: <InfoIcon />,
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

const toastSuccess: ToastFunction = (title, message, options): void => {
  toastify.success(
    <CustomToastContent type="success" title={title} message={message} />,
    options
  );
};

const toastError: ToastFunction = (title, message, options): void => {
  toastify.error(
    <CustomToastContent type="error" title={title} message={message} />,
    options
  );
};

const toastInfo: ToastFunction = (title, message, options) => {
  toastify.info(
    <CustomToastContent type="info" title={title} message={message} />,
    options
  );
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
