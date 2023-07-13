import { createBrowserRouter } from 'react-router-dom';
import Login from '../views/login';
import Dashboard from '../views/dashboard';
import Error from '../views/error';

import { PrincipalMenuLayout } from '../components/common/layouts';
import { Navigate, Outlet } from 'react-router-dom';
import { getCookie } from '../lib/cookies';

import user from './users';
import clients from './clients';
import projects from './projects';
import acquisitions from './acquisitions';

const ProtectedRoutes = () => {
  const token = getCookie('token');
  if (!token) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export const indexRoute = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <PrincipalMenuLayout />,
        children: [
          {
            path: '/dashboard',
            element: <Dashboard />,
            errorElement: <Error />,
          },
          ...user,
          ...clients,
          ...projects,
          ...acquisitions,
          {
            path: '*',
            element: <p>Not found</p>,
          },
        ],
      },
    ],
  },
]);
