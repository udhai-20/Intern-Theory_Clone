import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function RequAuth({ children }) {
  const LoginUser = JSON.parse(localStorage.getItem("Login_id")) || "";
  const location = useLocation();
  //   console.log("location:", location);
  if (!LoginUser) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  return children;
}

export default RequAuth;
