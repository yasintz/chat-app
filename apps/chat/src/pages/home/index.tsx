//#region Import
import { AuthenticatedPageLayout } from '../../components/common/layouts/AuthenticatedPageLayout';
import { useAuthenticated } from '../../hooks/authenticated';
//#endregion

//#region GQL

//#endregion

export const HomePage = () => {
  const { channels, isLoading, error } = useAuthenticated();

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
