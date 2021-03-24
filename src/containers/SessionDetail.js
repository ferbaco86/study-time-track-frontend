/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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
import Card from '../components/Card';

const SessionName = styled.h1`
width: 100%;
background-color: white;
text-align: center;`;

const InputField = styled.input`
border: none;
border-bottom: 3px solid #8ed3f1;
border-radius: 0;
width: 100%;
outline: none;
background-color: white;
margin-bottom: 1.2rem;
padding: 0.5rem;`;

const SubjectForm = styled.form`
display: flex;
margin-top: 2rem;
background-color: white;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1rem;`;

const AddLink = styled(Link)`
padding: 0.8rem 3rem;
background-color: #addc91;
color: white;
border: none;
text-decoration: none;`;

const SubjectsContainer = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
background-color: #f3f4f6`;

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
      <SessionName>{session.session.title}</SessionName>
      <SubjectForm>
        <InputField onChange={setName} id="title" type="text" placeholder="What subject did you study?..." />
        <InputField onChange={setTime} id="time" type="number" step="0.1" min="0" placeholder="How long(in hours) did you spend studying?..." />
        <AddLink onClick={setSubject} type="button" to={`/sessionDetail/${session.id}`}>Add</AddLink>
      </SubjectForm>
      <SubjectsContainer>
        {session.session.subjects
      && session.session.subjects.map(subject => (
        <Card
          key={subject.id}
          title={subject.name}
          time={subject.time}
        />
      ))}
        {subject.subject && subject.subject.map(subject => (
          <Card
            key={subject.id}
            title={subject.name}
            time={subject.time}
          />
        ))}
      </SubjectsContainer>
    </>
  );
};
SessionDetail.propTypes = {
  match: PropTypes.shape(
    { params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired },
  ).isRequired,
};
export default SessionDetail;
