import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserMenu from 'components/userMenu/UserMenu';
import { selectAuthenticated } from 'auth/auth.selectors';

const Navigation = () => {
  const isAuthenticated = useSelector(selectAuthenticated);

  return (
    <nav>
      <ul>
        {!isAuthenticated ? (
          <>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        )}
        <UserMenu />
      </ul>
    </nav>
  );
};

export default Navigation;
