/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import {
  setSessionTitle,
} from '../actions/index';
import autoLogin from '../api/autoLogin';
import { setSessionData } from '../api/setData';
import ErrorMessage from '../components/ErrorMessage';
import LoaderSpinner from '../components/LoaderSpinner';

const AddSession = () => {
  const { session } = useSelector(state => state);
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
    if (session.pending === false || session.error !== null) {
      isPending = false;
    } else {
      isPending = true;
    }
    return isPending;
  };
  if (shouldComponentRender()) return <LoaderSpinner />;
  const errorText = `Error: ${session.error}`;
  return (
    <>
      {/* {token && <Redirect to="/user" />} */}
      {session.error && (
      <ErrorMessage message={errorText} />
      )}
      <form>
        <label htmlFor="title">Title</label>
        <input onChange={setTitle} id="title" type="text" placeholder="Session Title" />
        <button type="button" onClick={setSession}>Add</button>
      </form>
    </>
  );
};

export default AddSession;
