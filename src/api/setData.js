import {
  setDataPending, setDataSuccess, setDataError, resetCredentials,
} from '../actions';
import store from '../reducers/store';

const setData = () => dispatch => {
  const { username, password } = store.getState().credentials;
  console.log(username, password);
  const apiUrl = 'http://localhost:3000/users';
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
    .then(response => {
      if (response.code !== 200) {
        throw (response.status);
      }
      localStorage.setItem('token', response.jwt);
      dispatch(setDataSuccess(response.user));
    })
    .catch(error => {
      dispatch(setDataError(error));
    });

  dispatch(resetCredentials());
};

export default setData;
