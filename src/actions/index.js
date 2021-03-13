import {
  SET_CREDENTIAL_USERNAME, SET_CREDENTIAL_PASSWORD, RESET_CREDENTIALS,
  SET_DATA_PENDING, SET_DATA_SUCCESS, SET_DATA_ERROR, RESET_DATA,
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
