import { SET_SUBJECT_NAME, SET_SUBJECT_TIME } from '../actions/constants';

const initialState = {
  name: '',
  time: '',
};

const setSubjectParamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUBJECT_NAME:
      return {
        ...state,
        name: action.name,
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
