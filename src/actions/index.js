import {
  SET_CREDENTIAL_USERNAME, SET_CREDENTIAL_PASSWORD, RESET_CREDENTIALS,
  SET_DATA_PENDING, SET_DATA_SUCCESS, SET_DATA_ERROR, RESET_DATA,
  FETCH_USERDATA_PENDING, FETCH_USERDATA_SUCCESS, FETCH_USERDATA_ERROR,
  SET_SESSIONDATA_PENDING, SET_SESSIONDATA_SUCCESS, SET_SESSIONDATA_ERROR, RESET_SESSIONDATA,
} from './constants';

export const setCredentialUsername = username => ({
  type: SET_CREDENTIAL_USERNAME,
  username,
});

export const setCredentialPassword = password => ({
  type: SET_CREDENTIAL_PASSWORD,
  password,
});

export const resetCredentials = () => ({
  type: RESET_CREDENTIALS,
});

export const setDataPending = () => ({
  type: SET_DATA_PENDING,
});

export const setDataSuccess = user => ({
  type: SET_DATA_SUCCESS,
  user,
});

export const setDataError = error => ({
  type: SET_DATA_ERROR,
  error,
});

export const resetData = () => ({
  type: RESET_DATA,
});

export const fetchUserDataPending = () => ({
  type: FETCH_USERDATA_PENDING,
});

export const fetchUserDataSuccess = data => ({
  type: FETCH_USERDATA_SUCCESS,
  data,
});

export const fetchUserDataError = error => ({
  type: FETCH_USERDATA_ERROR,
  error,
});

export const setSessionDataPending = () => ({
  type: SET_SESSIONDATA_PENDING,
});

export const setSessionDataSuccess = session => ({
  type: SET_SESSIONDATA_SUCCESS,
  session,
});

export const setSessionDataError = error => ({
  type: SET_SESSIONDATA_ERROR,
  error,
});

export const resetSessionData = () => ({
  type: RESET_SESSIONDATA,
});
