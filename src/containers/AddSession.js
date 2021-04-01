/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  resetSubjectData,
  setActiveTab,
  setDataError,
  setSessionTitle,
} from '../actions/index';
import autoLogin from '../api/autoLogin';
import { setSessionData } from '../api/setData';
import ErrorMessage from '../components/ErrorMessage';
import LoaderSpinner from '../components/LoaderSpinner';
import FormButton from '../components/FormButton';

const TitleInput = styled.input`
width: 100%;
border-radius: 0;
border: none;
outline: none;
padding: 1rem 2rem;`;

const TitleForm = styled.form`
display: flex`;

const AddSession = () => {
  const token = localStorage.getItem('token');
  const { user, session } = useSelector(state => state);
  const dispatch = useDispatch();

  const setTitle = e => {
    const input = e.target.value;
    dispatch(setSessionTitle(input));
  };

  useEffect(() => {
    if (token) { dispatch(setDataError(null)); }
    dispatch(autoLogin());
    dispatch(setActiveTab('Add Session'));
  }, []);

  const setSession = e => {
    e.preventDefault();
    dispatch(setSessionData());
    dispatch(resetSubjectData());
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
      {!token && <Redirect to="/" />}
      {session.redirect && <Redirect to={`/sessionDetail/${session.session.id}`} />}
      <TitleForm>
        <TitleInput onChange={setTitle} id="title" type="text" placeholder="Session title here..." />
        <FormButton type="submit" onClick={setSession}>Add</FormButton>
      </TitleForm>
    </>
  );
};

export default AddSession;
