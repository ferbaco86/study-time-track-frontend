import {
  setDataPending, setDataSuccess, setDataError,
  setSessionDataPending, setSessionDataSuccess, setSessionDataError,
  setSubjectDataPending, setSubjectDataSuccess, setSubjectDataError, resetCredentials,
  setSessionRedirect,
} from '../actions';
import store from '../reducers/store';

export const setUserData = signAction => dispatch => {
  const { username, password } = store.getState().credentials;
  let apiUrl = '';
  switch (signAction) {
    case 'sign up':
      apiUrl = 'http://localhost:3000/users';
      break;
    case 'log in':
      apiUrl = 'http://localhost:3000/login';
      break;
    default:
      break;
  }
  const config = {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  };
  dispatch(setDataPending());
  fetch(apiUrl, config)
    .then(response => response.json())
    .then(data => {
      if (data.errors || data.failure) {
        const errorMessage = data.errors ? data.errors : data.failure;
        throw (errorMessage);
      }

      localStorage.setItem('token', data.jwt);
      dispatch(setDataSuccess(data.user));
    })
    .catch(error => {
      dispatch(setDataError(error));
    });

  dispatch(resetCredentials());
};

export const setSessionData = () => dispatch => {
  const { title } = store.getState().sessionTitle;
  const token = localStorage.getItem('token');

  const apiUrl = 'http://localhost:3000/sessions';
  const config = {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
    }),
  };
  dispatch(setSessionDataPending());
  fetch(apiUrl, config)
    .then(response => response.json())
    .then(data => {
      if (data.error || data.failure) {
        const errorMessage = data.error ? data.error : data.failure;
        throw (errorMessage);
      }
      dispatch(setSessionDataSuccess(data));
      dispatch(setSessionRedirect(true));
    })
    .catch(error => {
      dispatch(setSessionDataError(error));
    });
};

export const setSubjectData = () => dispatch => {
  const token = localStorage.getItem('token');

  const { id } = store.getState().session.session;
  const { name, time } = store.getState().subjectParams;
  const apiUrl = 'http://localhost:3000/subjects';
  const config = {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      id,
      name,
      time,
    }),
  };
  dispatch(setSubjectDataPending());
  fetch(apiUrl, config)
    .then(response => response.json())
    .then(data => {
      if (data.error || data.failure) {
        const errorMessage = data.error ? data.error : data.failure;
        throw (errorMessage);
      }
      dispatch(setSubjectDataSuccess(data));
    })
    .catch(error => {
      dispatch(setSubjectDataError(error));
    });
};
