import {
  SET_SESSIONDATA_PENDING, SET_SESSIONDATA_SUCCESS, SET_SESSIONDATA_ERROR, RESET_SESSIONDATA,
} from '../actions/constants';

const initialState = {
  pending: false,
  session: {},
  error: null,
};

const sessionDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SESSIONDATA_PENDING:
      return {
        ...state,
        pending: true,
      };
    case SET_SESSIONDATA_SUCCESS:
      return {
        ...state,
        pending: false,
        session: action.session,
      };
    case SET_SESSIONDATA_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case RESET_SESSIONDATA:
      return {
        ...state,
        pending: false,
        session: {},
      };
    default:
      return state;
  }
};

export default sessionDataReducer;
