// src/components/ProtectedRoute.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const auth = useSelector((state) => state.auth);

  if (!auth.token) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && auth.user.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
