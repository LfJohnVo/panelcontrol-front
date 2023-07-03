import { createBrowserRouter } from 'react-router-dom';
import Login from '../views/login';
import Dashboard from '../views/dashboard';
import Error from '../views/error/Error';
import User from '../views/user';
import UserCreate from '../views/user/create';
import ShowUser from '../views/user/show';
import UpdateUser from '../views/user/update';

import Client from '../views/clients';
import CreateClient from '../views/clients/create';
import UpdateClient from '../views/clients/update';
import ShowClient from '../views/clients/show';

import Catalog from '../views/catalogs';
import CreateCatalog from '../views/catalogs/create';
import UpdateCatalog from '../views/catalogs/update';
import ShowCatalog from '../views/catalogs/show';

import Acquisition from '../views/acquisition';
import AcquisitionCreate from '../views/acquisition/create';
import UpdateAcquisition from '../views/acquisition/update';
import ShowAcquisition from '../views/acquisition/show';

import { PrincipalMenuLayout } from '../components/common/layouts';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/login/loginSlice';
import { Navigate, Outlet } from 'react-router-dom';
import { getCookie } from '../lib/cookies';

const ProtectedRoutes = () => {
  const token = getCookie('token');
  const dispatch = useDispatch();
  dispatch(addUser({ token }));
  if (!token) {
    return <Navigate to="/"></Navigate>;
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

          /*users*/
          {
            path: '/users',
            element: <User />,
            errorElement: <Error />,
          },
          {
            path: '/userCreate',
            element: <UserCreate />,
            errorElement: <Error />,
          },
          {
            path: '/user/:id/Details',
            element: <ShowUser />,
            errorElement: <Error />,
          },
          {
            path: '/user/:id/edit',
            element: <UpdateUser />,
            errorElement: <Error />,
          },

          /*clientes*/
          {
            path: '/clientes',
            element: <Client />,
            errorElement: <Error />,
          },
          {
            path: '/clienteCreate',
            element: <CreateClient />,
            errorElement: <Error />,
          },
          {
            path: '/cliente/:id/edit',
            element: <UpdateClient />,
            errorElement: <Error />,
          },
          {
            path: '/cliente/:id/details',
            element: <ShowClient />,
            errorElement: <Error />,
          },

          /*catalogo*/
          {
            path: '/catalogo',
            element: <Catalog />,
            errorElement: <Error />,
          },
          {
            path: '/catalogoCreate',
            element: <CreateCatalog />,
            errorElement: <Error />,
          },
          {
            path: '/catalogo/:id/edit',
            element: <UpdateCatalog />,
            errorElement: <Error />,
          },
          {
            path: '/catalogo/:id/details',
            element: <ShowCatalog />,
            errorElement: <Error />,
          },

          /*adquisicion servicio*/
          {
            path: '/adquisiciones',
            element: <Acquisition />,
            errorElement: <Error />,
          },
          {
            path: '/adquisicionCreate',
            element: <AcquisitionCreate />,
            errorElement: <Error />,
          },
          {
            path: '/adquisicion/:id/edit',
            element: <UpdateAcquisition />,
            errorElement: <Error />,
          },
          {
            path: '/adquisicion/:id/details',
            element: <ShowAcquisition />,
            errorElement: <Error />,
          },

          {
            path: '*',
            element: <p>Not found</p>,
          },
        ],
      },
    ],
  },
]);
