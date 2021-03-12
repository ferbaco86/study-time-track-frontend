import { SET_USER, RESET_USER } from '../actions/constants';

const initialState = {
  username: '',
  password: '',
};

const setUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        username: action.data.username,
        password: action.data.password,
      };

    case RESET_USER:
      return {
        ...state,
        username: '',
        password: '',
      };

    default: return state;
  }
};

export default setUserReducer;
