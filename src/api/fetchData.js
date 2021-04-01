import {
  fetchUserDataPending, fetchUserDataSuccess, fetchUserDataError,
  setSessionDataSuccess, setSessionDataPending, setSessionDataError,
  fetchProgressPending, fetchProgressError,
  fetchLongestProgressSuccess, fetchLatestProgressSuccess, fetchTop5ProgressSuccess,
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
  let sessionID = 0;
  if (store.getState().session.id) { sessionID = store.getState().session.id; }
  const token = localStorage.getItem('token');
  const config = {
    mode: 'cors',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const apiUrl = `http://localhost:3000/sessions/${sessionID}`;
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

export const fetchLongestSession = userID => dispatch => {
  const token = localStorage.getItem('token');
  const config = {
    mode: 'cors',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const apiUrl = `http://localhost:3000/longest/${userID}`;
  dispatch(fetchProgressPending());
  fetch(apiUrl, config)
    .then(response => response.json())
    .then(response => {
      dispatch(fetchLongestProgressSuccess(response));
      if (response.code !== 200) {
        throw (response.status);
      }
    })
    .catch(error => {
      dispatch(fetchProgressError(error));
    });
};

export const fetchLatestSession = userID => dispatch => {
  const token = localStorage.getItem('token');
  const config = {
    mode: 'cors',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const apiUrl = `http://localhost:3000/latest/${userID}`;
  dispatch(fetchProgressPending());
  fetch(apiUrl, config)
    .then(response => response.json())
    .then(response => {
      dispatch(fetchLatestProgressSuccess(response));
      if (response.code !== 200) {
        throw (response.status);
      }
    })
    .catch(error => {
      dispatch(fetchProgressError(error));
    });
};

export const fetchTop5Subjects = userID => dispatch => {
  const token = localStorage.getItem('token');
  const config = {
    mode: 'cors',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const apiUrl = `http://localhost:3000/top/${userID}`;
  dispatch(fetchProgressPending());
  fetch(apiUrl, config)
    .then(response => response.json())
    .then(response => {
      dispatch(fetchTop5ProgressSuccess(response));
      if (response.code !== 200) {
        throw (response.status);
      }
    })
    .catch(error => {
      dispatch(fetchProgressError(error));
    });
};
