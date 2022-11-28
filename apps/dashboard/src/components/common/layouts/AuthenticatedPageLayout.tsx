//#region Import
import useAuthStore from '../../../store/auth';
import React from 'react';
import { Link } from 'react-router-dom';
//#endregion

//#region Props
interface AuthenticatedPageLayoutProps {
  children: React.ReactNode;
}
//#endregion

export const AuthenticatedPageLayout = ({
  children,
}: AuthenticatedPageLayoutProps) => {
  const [logout] = useAuthStore((s) => [s.logout]);

  return (
    <>
      <button onClick={logout}>Logout</button>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/channels'}>Channels</Link>
        </li>
        <li>
          <Link to={'/moderators'}>Moderators</Link>
        </li>
      </ul>
      {children}
    </>
  );
};
