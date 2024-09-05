import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export const PrivateRoutes = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <p>user info loading........</p>;

  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};
