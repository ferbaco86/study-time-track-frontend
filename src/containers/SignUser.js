/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { setCredentialUsername, setCredentialPassword, setActiveTab } from '../actions/index';
import { setUserData } from '../api/setData';
import ErrorMessage from '../components/ErrorMessage';
import LoaderSpinner from '../components/LoaderSpinner';
import autoLogin from '../api/autoLogin';
import FormButton from '../components/FormButton';

const InputField = styled.input`
border: 3px solid white;
border-radius: 0;
outline: none;
background-color: white;
margin-bottom: 1.2rem;
padding: 0.5rem;`;

const SignForm = styled.form`
display: flex;
height: 50vh;
flex-direction: column;
justify-content: center;
align-items: center;`;

const SignUser = props => {
  const token = localStorage.getItem('token');
  const { buttonText } = props;
  const dispatch = useDispatch();
  const { user } = useSelector(state => state);

  const setCredentialName = e => {
    const input = e.target.value;
    dispatch(setCredentialUsername(input));
  };

  const setUser = e => {
    e.preventDefault();
    const signAction = e.target.textContent.toLowerCase();
    dispatch(setUserData(signAction));
  };

  useEffect(() => {
    dispatch(autoLogin());
    dispatch(setActiveTab(buttonText));
  }, []);

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
  const errorText = `Error: ${user.error}`;
  return (
    <>
      {user.error && (
      <ErrorMessage message={errorText} />
      )}
      <SignForm>
        <InputField id="username" type="text" onChange={setCredentialName} placeholder="Username" />
        <InputField id="password" type="password" onChange={setCredentialPass} placeholder="Password" />
        <FormButton type="submit" onClick={setUser}>{buttonText}</FormButton>
      </SignForm>
      { token && <Redirect to="/session" />}
    </>
  );
};

SignUser.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default SignUser;
