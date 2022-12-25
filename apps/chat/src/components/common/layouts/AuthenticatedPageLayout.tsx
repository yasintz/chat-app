//#region Import
import useAuthStore from '../../../store/auth';
import React from 'react';
import { Link } from 'react-router-dom';
//#endregion

//#region Props
interface AuthenticatedPageLayoutProps {
  channels: Array<{
    id: string;
    name: string;
  }>;
  children: React.ReactNode;
}
//#endregion

export const AuthenticatedPageLayout = ({
  channels,
  children,
}: AuthenticatedPageLayoutProps) => {
  const [logout] = useAuthStore((s) => [s.logout]);

  return (
    <>
      <button onClick={logout}>Logout</button>
      <ul>
        {channels.map((channel) => (
          <li key={`channel-${channel.id}`}>
            <Link to={`/channel/${channel.id}`}>{channel.name}</Link>
          </li>
        ))}
      </ul>
      {children}
    </>
  );
};
