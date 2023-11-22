import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userValidate } from 'redux/users/userSelectors';

const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const validate = useSelector(userValidate);

  return validate ? children : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
