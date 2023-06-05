import { createBrowserRouter } from "react-router-dom";
import Login from "../views/layouts/Login";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Menu from "../components/menu/Menu";
import Dashboard from "../views/dashboard/Dashboard";
import Error from "../views/error/Error";
import User from "../views/user/User";
import UserCreate from "../views/user/UserCreate";
import DetailUser from "../views/user/DetailUser";
import EditUser from "../views/user/EditUser";
import Cliente from "../views/cliente/Cliente";
import ClienteCreate from "../views/cliente/ClienteCreate";
import EditCliente from "../views/cliente/EditCliente";
import DetailCliente from "../views/cliente/DetailCliente";
import Catalogo from "../views/catalogo/Catalogo";
import CatalogoCreate from "../views/catalogo/CatalogoCreate";
import EditCatalogo from "../views/catalogo/EditCatalogo";
import DetailCatalogo from "../views/catalogo/DetailCatalogo";

export const indexRoute = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <Menu />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
            errorElement: <Error />,
          },

          /*users*/
          {
            path: "/users",
            element: <User />,
            errorElement: <Error />,
          },
          {
            path: "/userCreate",
            element: <UserCreate />,
            errorElement: <Error />,
          },
          {
            path: "/user/:id/Details",
            element: <DetailUser />,
            errorElement: <Error />,
          },
          {
            path: "/user/:id/edit",
            element: <EditUser />,
            errorElement: <Error />,
          },

          /*clientes*/
          {
            path: "/clientes",
            element: <Cliente />,
            errorElement: <Error />,
          },
          {
            path: "/clienteCreate",
            element: <ClienteCreate />,
            errorElement: <Error />,
          },
          {
            path: "/cliente/:id/edit",
            element: <EditCliente />,
            errorElement: <Error />,
          },
          {
            path: "/cliente/:id/details",
            element: <DetailCliente />,
            errorElement: <Error />,
          },

          /*catalogo*/
          {
            path: "/catalogo",
            element: <Catalogo />,
            errorElement: <Error />,
          },
          {
            path: "/catalogoCreate",
            element: <CatalogoCreate />,
            errorElement: <Error />,
          },
          {
            path: "/catalogo/:id/edit",
            element: <EditCatalogo />,
            errorElement: <Error />,
          },
          {
            path: "/catalogo/:id/details",
            element: <DetailCatalogo />,
            errorElement: <Error />,
          },

          {
            path: "*",
            element: <p>Not found</p>,
          },
        ],
      },
    ],
  },
]);
