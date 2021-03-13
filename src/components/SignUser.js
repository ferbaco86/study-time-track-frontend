/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setCredentialUsername, setCredentialPassword } from '../actions/index';
import setData from '../api/setData';
import ErrorMessage from './ErrorMessage';
import LoaderSpinner from './LoaderSpinner';

const SignUser = props => {
  const { buttonText } = props;
  const dispatch = useDispatch();
  const { user } = useSelector(state => state);
  const setCredentialName = e => {
    const input = e.target.value;
    dispatch(setCredentialUsername(input));
  };

  const setUser = e => {
    const signAction = e.target.textContent.toLowerCase();
    dispatch(setData(signAction));
  };

  const setCredentialPass = e => {
    const input = e.target.value;
    dispatch(setCredentialPassword(input));
  };

  const shouldComponentRender = () => {
    let isPending = false;
    if (user.pending === false || user.error !== null) {
      isPending = false;
    } else {
      isPending = true;
    }
    return isPending;
  };
  if (shouldComponentRender()) return <LoaderSpinner />;
  const errorText = `API Error: ${user.error}`;
  return (
    <>
      {user.error && (
      <ErrorMessage message={errorText} />
      )}
      <form>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={setCredentialName} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={setCredentialPass} />
        <button type="button" onClick={setUser}>{buttonText}</button>
      </form>
    </>
  );
};

SignUser.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default SignUser;