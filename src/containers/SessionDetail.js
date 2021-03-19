/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {
  setSubjectName,
  setSubjectTime,
} from '../actions/index';
import autoLogin from '../api/autoLogin';
import { setSubjectData } from '../api/setData';
import ErrorMessage from '../components/ErrorMessage';
import LoaderSpinner from '../components/LoaderSpinner';
import LogOut from './LogOut';

const SessionDetail = () => {
  const token = localStorage.getItem('token');
  const { session, subject } = useSelector(state => state);
  const dispatch = useDispatch();
  const setName = e => {
    const input = e.target.value;
    dispatch(setSubjectName(input));
  };

  const setTime = e => {
    const input = e.target.value;
    dispatch(setSubjectTime(input));
  };

  useEffect(() => {
    dispatch(autoLogin());
  }, []);

  const setSubject = () => {
    dispatch(setSubjectData());
  };

  const shouldComponentRender = () => {
    let isPending = false;
    if (subject.pending === false || subject.error !== null) {
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
      {subject.error && (
      <ErrorMessage message={errorText} />
      )}
      {!token && <Redirect to="/" />}
      <h1>{session.session.title}</h1>
      <h2>Subjects</h2>
      {session.session.subjects
      && session.session.subjects.map(subject => <h3 key={subject.id}>{subject.name}</h3>)}
      <form>
        <label htmlFor="title">Subject Title</label>
        <input onChange={setName} id="title" type="text" placeholder="Subject Title" />
        <label htmlFor="time">Subject Time Studied</label>
        <input onChange={setTime} id="time" type="text" placeholder="Time spent studying" />
        <Link onClick={setSubject} type="button" to="/sessionDetail">Add</Link>
      </form>
      <LogOut />
    </>
  );
};

export default SessionDetail;
