import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ children }) {
  const { currentUid } = useAuth();

  return currentUid ? children : <Navigate to="/signin" />;
}
