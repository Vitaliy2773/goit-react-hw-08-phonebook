import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'auth/auth.reducer';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk({ email, password }));
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="userEmail">
        <p>Email:</p>
        <input
          type="email"
          placeholder="best@mail.com"
          required
          id="userEmail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="userPassword">
        <p>Password:</p>
        <input
          type="password"
          placeholder="*******"
          required
          id="userPassword"
          minLength={7}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default LoginPage;
