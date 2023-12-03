import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ children }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        {/* <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li> */}
      </ul>
      <main>{children}</main>
    </nav>
  );
};

export default Navigation;
