import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setActiveTab } from '../actions';
import autoLogin from '../api/autoLogin';
import { fetchLongestSession } from '../api/fetchData';
import ErrorMessage from '../components/ErrorMessage';
import LoaderSpinner from '../components/LoaderSpinner';
import TitleName from '../components/TitleName';
import ProgressCard from '../components/ProgressCard';

const ProgressTitle = styled.h4`
const text-align: left;
font-weight: 300;
padding: 1rem;`;

const Progress = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const { user, progress } = useSelector(state => state);

  useEffect(() => {
    dispatch(autoLogin());
    dispatch(setActiveTab('Your Progress'));
    dispatch(fetchLongestSession(user.user.id));
  }, []);

  useEffect(() => {
    if (user.user.id) {
      dispatch(fetchLongestSession(user.user.id));
    }
  }, [user]);

  // const resetSubjectStore = () => {
  //   dispatch(resetSubjectData());
  // };

  const shouldComponentRender = () => {
    let isPending = false;
    if (progress.pending === false || progress.error !== null) {
      isPending = false;
    } else {
      isPending = true;
    }
    return isPending;
  };

  if (shouldComponentRender()) return <LoaderSpinner />;
  const errorText = `Error: ${progress.error}`;
  return (
    <>
      <div>
        {progress.error && (
        <ErrorMessage message={errorText} />
        )}
        {!token && <Redirect to="/" />}
        <TitleName>{user.user.username}</TitleName>
        <ProgressTitle>Latest Session</ProgressTitle>
        <ProgressCard name="Pelusa" date="12/12/21" time="5" />
        <ProgressTitle>Longest Session</ProgressTitle>
        {progress.longest.title && (
        <ProgressCard
          name={progress.longest.title}
          date={new Date(progress.longest.created_at).toLocaleDateString()}
          time={progress.longest.total_time}
        />
        )}
        <ProgressTitle>Top 5 Most Studied Subjects</ProgressTitle>
        <ProgressCard name="Pelusa" date="12/12/21" time="5" />
        <ProgressCard name="Pelusa" date="12/12/21" time="5" />
        <ProgressCard name="Pelusa" date="12/12/21" time="5" />
        <ProgressCard name="Pelusa" date="12/12/21" time="5" />
        <ProgressCard name="Pelusa" date="12/12/21" time="5" />
      </div>
    </>
  );
};

export default Progress;
