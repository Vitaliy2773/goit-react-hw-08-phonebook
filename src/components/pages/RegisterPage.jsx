import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'auth/auth.reducer';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (password.length < 7) {
      alert('Password must be at least 7 characters long.');
      return;
    }

    dispatch(registerThunk({ name, email, password }));
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="userName">
        <p>Name:</p>
        <input
          type="text"
          placeholder="Name"
          required
          id="userName"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
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
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default RegisterPage;
