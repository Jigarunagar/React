import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Safely access auth state with default values
  const authState = useSelector((state) => state.auth || {});
  const { isAuthenticated = false } = authState;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;