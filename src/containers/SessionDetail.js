/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {
  fetchSessionID,
  setSubjectName,
  setSubjectTime,
  setSessionRedirect,
} from '../actions/index';
import autoLogin from '../api/autoLogin';
import { setSubjectData } from '../api/setData';
import { fetchSessionData } from '../api/fetchData';
import ErrorMessage from '../components/ErrorMessage';
import LoaderSpinner from '../components/LoaderSpinner';
import LogOut from './LogOut';

const SessionDetail = props => {
  const { match } = props;
  const token = localStorage.getItem('token');
  const { session, subject } = useSelector(state => state);
  const dispatch = useDispatch();

  const setName = e => {
    const input = e.target.value;
    dispatch(setSubjectName(input));
  };

  const getSessionID = () => {
    dispatch(fetchSessionID(match.params.id));
  };

  const setTime = e => {
    const input = e.target.value;
    dispatch(setSubjectTime(input));
  };

  useEffect(() => {
    dispatch(autoLogin());
    dispatch(setSessionRedirect(false));
    getSessionID();
    dispatch(fetchSessionData());
  }, []);

  const setSubject = () => {
    dispatch(setSubjectData());
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
      {session.error && (
      <ErrorMessage message={errorText} />
      )}
      {!token && <Redirect to="/" />}
      <h1>{session.session.title}</h1>
      <h2>Subjects</h2>
      {session.session.subjects
      && session.session.subjects.map(subject => <h3 key={subject.id}>{subject.name}</h3>)}
      {subject.subject && subject.subject.map(subject => <h3 key={subject.id}>{subject.name}</h3>)}
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
SessionDetail.propTypes = {
  match: PropTypes.shape(
    { params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired },
  ).isRequired,
};
export default SessionDetail;
