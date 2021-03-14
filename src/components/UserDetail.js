import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import autoLogin from '../api/autoLogin';
import fetchData from '../api/fetchData';

const UserDetail = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
    dispatch(fetchData());
  }, []);
  const { user } = useSelector(state => state);
  console.log(user);
  return (
    <>
      <div>
        <h1>User</h1>
        <h2>{user.user.username}</h2>
        <h1>Sessions</h1>
        {/* {user.user.sessions.map(session => <h2 key={session.id}>{session.title}</h2>)} */}
      </div>
    </>
  );
};

export default UserDetail;
