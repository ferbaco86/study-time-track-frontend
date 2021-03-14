import { fetchUserDataPending, fetchUserDataSuccess, fetchUserDataError } from '../actions/index';
import store from '../reducers/store';

const token = localStorage.getItem('token');

const config = {
  mode: 'cors',
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const fetchUserData = () => dispatch => {
  const { id } = store.getState().user.user;
  console.log(id);
  const apiUrl = `http://localhost:3000/users/${id}`;
  dispatch(fetchUserDataPending());
  fetch(apiUrl, config)
    .then(response => response.json())
    .then(response => {
      dispatch(fetchUserDataSuccess(response));
      console.log('user data from fetch', response);
      if (response.code !== 200) {
        throw (response.status);
      }
    })
    .catch(error => {
      dispatch(fetchUserDataError(error));
    });
};

export default fetchUserData;
