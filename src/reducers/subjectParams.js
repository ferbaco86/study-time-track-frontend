import { SET_SUBJECT_TITLE, SET_SUBJECT_TIME } from '../actions/constants';

const initialState = {
  title: '',
  time: '',
};

const setSubjectParamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUBJECT_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case SET_SUBJECT_TIME:
      return {
        ...state,
        time: action.time,
      };

    default: return state;
  }
};

export default setSubjectParamsReducer;
