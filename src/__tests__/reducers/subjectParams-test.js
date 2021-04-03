import { SET_SUBJECT_NAME, SET_SUBJECT_TIME } from '../../actions/constants';

import subjectParamsReducer from '../../reducers/subjectParams';

describe('Subject Params Reducer', () => {
  it('Return the default state', () => {
    const mockState = {
      name: '',
      time: '',
    };
    const mockAction = { type: null };
    const state = subjectParamsReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      name: '',
      time: '',
    });
  });

  it('Set name in the state', () => {
    const mockState = {
      name: '',
      time: '',
    };
    const mockAction = { type: SET_SUBJECT_NAME, name: 'Test Title' };
    const state = subjectParamsReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      name: 'Test Title',
      time: '',
    });
  });

  it('Set time in the state', () => {
    const mockState = {
      name: '',
      time: '',
    };
    const mockAction = { type: SET_SUBJECT_TIME, time: 10 };
    const state = subjectParamsReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      name: '',
      time: 10,
    });
  });
});
