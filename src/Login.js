/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Login = () => (
  <form>
    <label htmlFor="username">Username</label>
    <input id="username" type="text" />
    <label htmlFor="password">Password</label>
    <input id="password" type="password" />
    <button type="button">Sign Up</button>
  </form>
);

export default Login;
