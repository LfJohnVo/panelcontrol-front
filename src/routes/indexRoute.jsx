import { createBrowserRouter } from "react-router-dom";
import Login from "../views/layouts/Login";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Menu from "../components/menu/Menu";

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
            element: <p>hola</p>,
            errorElement: <Error />,
          },
        ],
      },
    ],
  },
]);
