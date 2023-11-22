import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { userValidate } from 'redux/users/userSelectors';
import css from './Navigation.module.css';

const Navigation = () => {
  const validate = useSelector(userValidate);

  const linkClassActive = ({ isActive }) =>
    `${css.navLink} ${isActive ? css.active : ''}`;

  return (
    <header className={css.header}>
      <nav>
        <ul className={css.list}>
          <li>
            <NavLink className={linkClassActive} to="/">
              Home
            </NavLink>
          </li>
          {validate ? (
            <li>
              <NavLink className={linkClassActive} to="/contacts">
                Contacts
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink className={linkClassActive} to="/register">
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink className={linkClassActive} to="/login">
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
      {validate && <UserMenu />}
    </header>
  );
};

export default Navigation;
