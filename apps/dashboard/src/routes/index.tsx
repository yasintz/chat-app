import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../app/app';
import { AuthPage, authAction } from '../pages/auth';
import { ProtectedRoute } from './protected-route';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
  },
  {
    path: '/auth',
    element: <AuthPage />,
    action: authAction,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
