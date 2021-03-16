import {
  setDataPending, setDataSuccess, setDataError, resetCredentials,
  setSessionDataPending, setSessionDataSuccess, setSessionDataError,
} from '../actions';
import store from '../reducers/store';

const token = localStorage.getItem('token');

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
    })
    .catch(error => {
      dispatch(setSessionDataError(error));
    });
};
