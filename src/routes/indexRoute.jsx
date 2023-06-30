import { createBrowserRouter } from 'react-router-dom';
import Login from '../views/login';
//import ProtectedRoutes from '../components/ProtectedRoutes';
import Dashboard from '../views/dashboard';
import Error from '../views/error/Error';
import User from '../views/user';
import UserCreate from '../views/user/create';
import DetailUser from '../views/user/show';
import EditUser from '../views/user/edit';
import Cliente from '../views/cliente/Cliente';
import ClienteCreate from '../views/cliente/ClienteCreate';
import EditCliente from '../views/cliente/EditCliente';
import DetailCliente from '../views/cliente/DetailCliente';
import Catalogo from '../views/catalogo/Catalogo';
import CatalogoCreate from '../views/catalogo/CatalogoCreate';
import EditCatalogo from '../views/catalogo/EditCatalogo';
import DetailCatalogo from '../views/catalogo/DetailCatalogo';
import AdquisicionServicio from '../views/adquisicion-servicio/AdquisicionServicio';
import AdquisicionServicioCreate from '../views/adquisicion-servicio/AdquisicionServicioCreate';
import EditAdquisicionServicio from '../views/adquisicion-servicio/EditAdquisicionServicio';
import DetailAdquisicionServicio from '../views/adquisicion-servicio/DetailAdquisicionServicio';
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
            element: <DetailUser />,
            errorElement: <Error />,
          },
          {
            path: '/user/:id/edit',
            element: <EditUser />,
            errorElement: <Error />,
          },

          /*clientes*/
          {
            path: '/clientes',
            element: <Cliente />,
            errorElement: <Error />,
          },
          {
            path: '/clienteCreate',
            element: <ClienteCreate />,
            errorElement: <Error />,
          },
          {
            path: '/cliente/:id/edit',
            element: <EditCliente />,
            errorElement: <Error />,
          },
          {
            path: '/cliente/:id/details',
            element: <DetailCliente />,
            errorElement: <Error />,
          },

          /*catalogo*/
          {
            path: '/catalogo',
            element: <Catalogo />,
            errorElement: <Error />,
          },
          {
            path: '/catalogoCreate',
            element: <CatalogoCreate />,
            errorElement: <Error />,
          },
          {
            path: '/catalogo/:id/edit',
            element: <EditCatalogo />,
            errorElement: <Error />,
          },
          {
            path: '/catalogo/:id/details',
            element: <DetailCatalogo />,
            errorElement: <Error />,
          },

          /*adquisicion servicio*/
          {
            path: '/adquisiciones',
            element: <AdquisicionServicio />,
            errorElement: <Error />,
          },
          {
            path: '/adquisicionCreate',
            element: <AdquisicionServicioCreate />,
            errorElement: <Error />,
          },
          {
            path: '/adquisicion/:id/edit',
            element: <EditAdquisicionServicio />,
            errorElement: <Error />,
          },
          {
            path: '/adquisicion/:id/details',
            element: <DetailAdquisicionServicio />,
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
