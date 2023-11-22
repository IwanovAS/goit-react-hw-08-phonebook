import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userValidate } from 'redux/users/userSelectors';

const RestrictedRoute = ({ children, redirectTo = '/contacts' }) => {
  const validate = useSelector(userValidate);
  return validate ? <Navigate to={redirectTo} replace /> : children;
};

export default RestrictedRoute;
