// ProtectedRoute.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useSelector } from "react-redux"; // Import useSelector from Redux

const ProtectedRoute = ({ children }) => {
  // Get the token from the Redux store
  const token = useSelector((state) => state.auth.token);
  
  // Initialize navigate
  const navigate = useNavigate();

  // If there's no token, navigate to the login page
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  // If token exists, render children (protected route content)
  if (token) {
    return children;
  }

  // Otherwise, don't render anything until redirect occurs
  return null;
};

export default ProtectedRoute;
