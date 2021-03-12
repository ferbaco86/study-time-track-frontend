import { SET_USER_PENDING, SET_USER_SUCCESS, SET_USER_ERROR } from './constants';

export const setUserPending = () => ({
  type: SET_USER_PENDING,
});

export const setUserSuccess = data => ({
  type: SET_USER_SUCCESS,
  data,
});

export const setUserError = error => ({
  typer: SET_USER_ERROR,
  error,
});
