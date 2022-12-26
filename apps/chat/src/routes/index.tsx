// #region Import
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { HomePage } from '../pages/home';
import { AuthPage, authAction } from '../pages/auth';
import { ProtectedRoute } from './protected-route';
import { ChannelPage } from '../pages/channel';
import { EmbeddedChatApp } from '../pages/embedded';
// #endregion

// #region Types
type RouteType = RouteObject & {
  protected?:
    | boolean
    | {
        redirect: string;
      };
};
// #endregion

const routes: RouteType[] = [
  {
    path: '/',
    element: <HomePage />,
    protected: true,
  },
  {
    path: 'channel/:channelId',
    element: <ChannelPage />,
    protected: true,
  },
  {
    path: 'auth',
    element: <AuthPage />,
    action: authAction,
  },
  {
    path: '/embedded/:channelId',
    element: <EmbeddedChatApp />,
  },
];

// #region Router
const router = createBrowserRouter(
  routes.map((route) => ({
    ...route,
    element: route.protected ? (
      <ProtectedRoute
        redirect={
          typeof route.protected === 'object'
            ? route.protected.redirect
            : undefined
        }
      >
        {route.element}
      </ProtectedRoute>
    ) : (
      route.element
    ),
  }))
);
// #endregion

export const Routes = () => <RouterProvider router={router} />;
