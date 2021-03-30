import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setActiveTab } from '../actions';
import autoLogin from '../api/autoLogin';
import { fetchUserData } from '../api/fetchData';
import ErrorMessage from '../components/ErrorMessage';
import LoaderSpinner from '../components/LoaderSpinner';
import TitleName from '../components/TitleName';
// import SessionCard from '../components/SessionCard';
import ProgressCard from '../components/ProgressCard';

// const StyledLink = styled(Link)`
// text-decoration: none;
// color: inherit;`;

const ProgressTitle = styled.h4`
const text-align: left;
font-weight: 300;
padding: 1rem;`;

const Progress = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const { user } = useSelector(state => state);

  useEffect(() => {
    dispatch(setActiveTab('Your Progress'));
    dispatch(autoLogin());
    dispatch(fetchUserData());
  }, []);

  // const resetSubjectStore = () => {
  //   dispatch(resetSubjectData());
  // };

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
        <ProgressTitle>Latest Session</ProgressTitle>
        <ProgressCard name="Pelusa" date="12/12/21" time="5" />
        <ProgressTitle>Longest Session</ProgressTitle>
        <ProgressCard name="Pelusa" date="12/12/21" time="5" />
        <ProgressTitle>Top 5 Most Studied Subjects</ProgressTitle>
        <ProgressCard name="Pelusa" date="12/12/21" time="5" />
        <ProgressCard name="Pelusa" date="12/12/21" time="5" />
        <ProgressCard name="Pelusa" date="12/12/21" time="5" />
        <ProgressCard name="Pelusa" date="12/12/21" time="5" />
        <ProgressCard name="Pelusa" date="12/12/21" time="5" />

        {/* { user.user.sessions
        && user.user.sessions.map(session => (
          <StyledLink key={session.id}
          onClick={resetSubjectStore} to={`sessionDetail/${session.id}`}>
            <SessionCard
              date={new Date(session.created_at).toLocaleDateString()}
              title={session.title}
            />
          </StyledLink>
        ))} */}
      </div>
    </>
  );
};

export default Progress;
