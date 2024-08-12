import React from "react";
import { Navigate } from "react-router-dom";
import { getUserRole } from "../utils/auth";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const role = getUserRole();

  return allowedRoles.includes(role) ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
