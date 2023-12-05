import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOutThunk } from 'auth/auth.reducer';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.auth.userData);

  const handleLogout = () => {
    dispatch(logOutThunk());
  };

  if (!userData) {
    return null;
  }

  return (
    <div>
      <p>{userData.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
