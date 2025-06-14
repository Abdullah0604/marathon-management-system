import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loader/Loading";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={pathname} />;
  }

  return children;
}

export default PrivateRoute;
