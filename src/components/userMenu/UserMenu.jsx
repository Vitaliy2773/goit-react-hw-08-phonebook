import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutThunk } from 'auth/auth.reducer';
import { selectAuthenticated, selectUserData } from 'auth/auth.selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectAuthenticated);
  const userData = useSelector(selectUserData);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

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
