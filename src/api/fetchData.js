import {
  fetchUserDataPending, fetchUserDataSuccess, fetchUserDataError,
  setSessionDataSuccess, setSessionDataPending, setSessionDataError,
} from '../actions/index';
import store from '../reducers/store';

export const fetchUserData = () => dispatch => {
  const token = localStorage.getItem('token');
  const config = {
    mode: 'cors',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { id } = store.getState().user.user;
  const apiUrl = `http://localhost:3000/users/${id}`;
  dispatch(fetchUserDataPending());
  fetch(apiUrl, config)
    .then(response => response.json())
    .then(response => {
      dispatch(fetchUserDataSuccess(response));
      if (response.code !== 200) {
        throw (response.status);
      }
    })
    .catch(error => {
      dispatch(fetchUserDataError(error));
    });
};

export const fetchSessionData = () => dispatch => {
  const token = localStorage.getItem('token');
  const config = {
    mode: 'cors',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { id } = store.getState().session.session;
  console.log(store.getState().session);
  const apiUrl = `http://localhost:3000/sessions/${id}`;
  dispatch(setSessionDataPending());
  fetch(apiUrl, config)
    .then(response => response.json())
    .then(response => {
      dispatch(setSessionDataSuccess(response));
      if (response.code !== 200) {
        throw (response.status);
      }
    })
    .catch(error => {
      dispatch(setSessionDataError(error));
    });
};
