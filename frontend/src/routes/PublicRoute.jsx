import React from "react";
import { Navigate } from "react-router-dom";

// Only accessible if user is NOT logged in
const PublicRoute = ({ children }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const isAuth = userInfo?.token;

  return !isAuth ? children : <Navigate to="/home" />;
};

export default PublicRoute;
