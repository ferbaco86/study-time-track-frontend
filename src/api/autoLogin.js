import { setDataSuccess } from '../actions';

const autoLogin = () => dispatch => {
  const token = localStorage.getItem('token');
  const url = 'https://fbc-study-track-api/auto_login';
  // const url = 'http://localhost:3000/auto_login';
  if (token) {
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch(setDataSuccess(data));
      });
  }
};

export default autoLogin;
