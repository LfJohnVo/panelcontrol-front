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
          {
            path: "*",
            element: <p>Not found</p>,
          },
        ],
      },
    ],
  },
]);
