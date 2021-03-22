/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {
  setSessionTitle,
} from '../actions/index';
import autoLogin from '../api/autoLogin';
import { setSessionData } from '../api/setData';
import ErrorMessage from '../components/ErrorMessage';
import LoaderSpinner from '../components/LoaderSpinner';
import LogOut from './LogOut';

const AddSession = () => {
  const token = localStorage.getItem('token');
  const { user } = useSelector(state => state);
  const dispatch = useDispatch();

  const setTitle = e => {
    const input = e.target.value;
    dispatch(setSessionTitle(input));
  };

  useEffect(() => {
    dispatch(autoLogin());
  }, []);

  const setSession = () => {
    dispatch(setSessionData());
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
      <form>
        <label htmlFor="title">Title</label>
        <input onChange={setTitle} id="title" type="text" placeholder="Session Title" />
        <Link onClick={setSession} to="/sessionDetail">Add</Link>
      </form>
      <LogOut />
    </>
  );
};

export default AddSession;
