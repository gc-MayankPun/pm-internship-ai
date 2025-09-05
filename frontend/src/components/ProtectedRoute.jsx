// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Check for token or auth flag (customize this logic for your app)
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
