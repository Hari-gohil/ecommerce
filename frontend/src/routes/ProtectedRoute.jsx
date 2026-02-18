import React from "react";
import { Navigate } from "react-router-dom";

// Only accessible if user is logged in
const ProtectedRoute = ({ children }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const isAuth = userInfo?.token;

  return isAuth ? children : <Navigate to="/auth/signin" />;
};

export default ProtectedRoute;
