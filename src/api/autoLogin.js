import { setDataSuccess } from '../actions';

const autoLogin = () => dispatch => {
  const token = localStorage.getItem('token');
  if (token) {
    fetch('http://localhost:3000/auto_login', {
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
