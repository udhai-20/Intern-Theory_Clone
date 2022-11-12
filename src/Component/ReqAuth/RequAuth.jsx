import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function RequAuth({ children }) {
  const check = useSelector((state) => state.AuthReducer.isAuth);
  const location = useLocation();
  //   console.log("location:", location);
  if (!check) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  return children;
}

export default RequAuth;
