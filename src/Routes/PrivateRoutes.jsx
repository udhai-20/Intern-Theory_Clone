import React from "react";
import { getData } from "../Component/Utils/localStorage";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const token = getData("user_Token");
  if (token == "" || !token) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRoutes;
