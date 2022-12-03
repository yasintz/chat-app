//#region Import
import { AuthenticatedPageLayout } from '../../components/common/layouts/AuthenticatedPageLayout';
import { useAuthenticatedUserData } from '../../hooks/load-authenticated-user-data';
//#endregion

//#region GQL

//#endregion

export const HomePage = () => {
  const { channels, isLoading, error } = useAuthenticatedUserData();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <AuthenticatedPageLayout channels={channels}>
      <p>Welcome to Chat</p>
    </AuthenticatedPageLayout>
  );
};
