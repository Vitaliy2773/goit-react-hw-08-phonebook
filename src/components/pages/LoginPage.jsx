import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'auth/auth.reducer';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    dispatch(loginThunk(formData));
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <p>Email:</p>
        <input
          type="email"
          placeholder="best@mail.com"
          required
          name="userEmail"
        />
      </label>
      <label>
        <p>Password:</p>
        <input
          type="password"
          placeholder="*******"
          required
          name="userPassword"
          minLength={7}
        />
      </label>
      <br />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default LoginPage;
