import {
  setDataPending, setDataSuccess, setDataError, resetCredentials,
} from '../actions';
import store from '../reducers/store';

const setData = signAction => dispatch => {
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
      if (!data) {
        const errorMessage = 'No Data';
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

export default setData;
