import {
  SET_SUBJECTDATA_PENDING, SET_SUBJECTDATA_SUCCESS, SET_SUBJECTDATA_ERROR, RESET_SUBJECTDATA,
} from '../actions/constants';

const initialState = {
  pending: false,
  subject: {},
  error: null,
};

const subjectDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUBJECTDATA_PENDING:
      return {
        ...state,
        pending: true,
      };
    case SET_SUBJECTDATA_SUCCESS:
      return {
        ...state,
        pending: false,
        subject: action.subject,
      };
    case SET_SUBJECTDATA_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case RESET_SUBJECTDATA:
      return {
        ...state,
        pending: false,
        subject: {},
      };
    default:
      return state;
  }
};

export default subjectDataReducer;
