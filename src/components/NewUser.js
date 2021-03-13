/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import { setCredentialUsername, setCredentialPassword } from '../actions/index';

const NewUser = () => {
  const dispatch = useDispatch();
  // const { credentials } = useSelector(state => state);
  const setCredentialName = e => {
    const input = e.target.value;
    dispatch(setCredentialUsername(input));
  };

  const setCredentialPass = e => {
    const input = e.target.value;
    dispatch(setCredentialPassword(input));
  };
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" onChange={setCredentialName} />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" onChange={setCredentialPass} />
      <button type="button">Sign Up</button>
    </form>
  );
};

export default NewUser;
