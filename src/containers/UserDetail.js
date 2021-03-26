import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { resetSubjectData, setActiveTab } from '../actions';
import autoLogin from '../api/autoLogin';
import { fetchUserData } from '../api/fetchData';
import AddSession from './AddSession';
import ErrorMessage from '../components/ErrorMessage';
import LoaderSpinner from '../components/LoaderSpinner';
import TitleName from '../components/TitleName';

const UserDetail = () => {
  const dispatch = useDispatch();
  // const [subjects, setSubjects] = useState([]);
  const token = localStorage.getItem('token');
  const { user } = useSelector(state => state);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const config = {
      mode: 'cors',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    if (user.user.sessions) {
      user.user.sessions.forEach(element => {
        fetch(`http://localhost:3000/total_time/${element.id}`, config)
          .then(res => res.json())
          .then(data => console.log(data));
      });
    }
  }, []);

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
        <TitleName>{user.user.username}</TitleName>
        <h1>Sessions</h1>
        { user.user.sessions
        && user.user.sessions.map(session => <Link key={session.id} onClick={resetSubjectStore} to={`sessionDetail/${session.id}`}>{session.title}</Link>)}
      </div>
      <AddSession />
    </>
  );
};

export default UserDetail;
