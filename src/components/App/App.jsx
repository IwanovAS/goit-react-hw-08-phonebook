import './App.module.css';
import { useDispatch } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { refreshThunk } from 'redux/users/userSlice';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';
import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('pages/homePage'));
const RegisterPage = lazy(() => import('pages/registerPage'));
const LoginPage = lazy(() => import('pages/loginPage'));
const ContactsPage = lazy(() => import('pages/contactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <>
      <Navigation />
      <>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute>
                  <RegisterPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute>
                  <LoginPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </>
    </>
  );
};

export default App;
