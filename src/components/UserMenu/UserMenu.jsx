import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userEmail } from 'redux/users/userSelectors';
import { logoutThunk } from 'redux/users/userSlice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLoguot = () => {
    dispatch(logoutThunk());
  };
  const { email } = useSelector(userEmail);

  return (
    <div>
      <p>{email}</p>
      <button onClick={handleLoguot} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
