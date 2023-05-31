import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/login/loginSlice";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const isAuth = useSelector(selectUser);
  if (!isAuth) {
    return <Navigate to="/"></Navigate>;
  }
  return <Outlet />;
}

export default ProtectedRoutes;
