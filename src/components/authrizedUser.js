// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element, ...rest }) => {
  const { currentUser } = useAuth();

  return currentUser ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
