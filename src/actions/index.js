import { SET_USER, RESET_USER, SET_USER_ERROR } from './constants';

export const setUser = data => ({
  type: SET_USER,
  data,
});

export const setUserError = error => ({
  type: SET_USER_ERROR,
  error,
});

export const resetUser = () => ({
  type: RESET_USER,
});
