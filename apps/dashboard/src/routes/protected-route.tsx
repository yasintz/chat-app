import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/auth';

type ProtectedRouteProps = {
  children?: React.ReactNode;
  redirect?: string;
};

export const ProtectedRoute = ({
  children,
  redirect = '/auth',
}: ProtectedRouteProps) => {
  const authenticated = useAuthStore((s) => s.authenticated);
  if (!authenticated) {
    return <Navigate to={redirect} replace />;
  }

  return children as JSX.Element;
};
