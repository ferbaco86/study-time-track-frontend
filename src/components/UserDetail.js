import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { resetSubjectData, setActiveTab } from '../actions';
import autoLogin from '../api/autoLogin';
import { fetchUserData } from '../api/fetchData';
import AddSession from '../containers/AddSession';
import ErrorMessage from './ErrorMessage';
import LoaderSpinner from './LoaderSpinner';

const UserDetail = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const { user } = useSelector(state => state);

  useEffect(() => {
    dispatch(setActiveTab('Check Sessions'));
    dispatch(autoLogin());
    dispatch(fetchUserData());
  }, []);

  const resetSubjectStore = () => {
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
      <div>
        {user.error && (
        <ErrorMessage message={errorText} />
        )}
        {!token && <Redirect to="/" />}
        <h1>User</h1>
        <h2>{user.user.username}</h2>
        <h1>Sessions</h1>
        { user.user.sessions
        && user.user.sessions.map(session => <Link key={session.id} onClick={resetSubjectStore} to={`sessionDetail/${session.id}`}>{session.title}</Link>)}
      </div>
      <AddSession />
    </>
  );
};

export default UserDetail;
