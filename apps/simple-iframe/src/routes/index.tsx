// #region Import
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { HomePage } from '../pages/home';
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
  },
];

// #region Router
const router = createBrowserRouter(
  routes.map((route) => ({
    ...route,
  }))
);
// #endregion

export const Routes = () => <RouterProvider router={router} />;
