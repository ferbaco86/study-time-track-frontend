import {
  SET_SUBJECTDATA_PENDING, SET_SUBJECTDATA_SUCCESS, SET_SUBJECTDATA_ERROR, RESET_SUBJECTDATA,
} from '../actions/constants';

const initialState = {
  pending: false,
  subject: [],
  error: null,
};

const subjectDataReducer = (state = initialState, action) => {
  const subjects = state.subject;
  switch (action.type) {
    case SET_SUBJECTDATA_PENDING:
      return {
        ...state,
        pending: true,
      };
    case SET_SUBJECTDATA_SUCCESS:
      subjects.push(action.subject);
      return {
        ...state,
        pending: false,
        subject: subjects,
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
        subject: [],
      };
    default:
      return state;
  }
};

export default subjectDataReducer;
