import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOutThunk } from 'auth/auth.reducer';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.userData.email);

  const handleLogout = () => {
    dispatch(logOutThunk());
  };

  return (
    <div>
      <p>{email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
