import {
  SET_SUBJECTDATA_PENDING, SET_SUBJECTDATA_SUCCESS, SET_SUBJECTDATA_ERROR, RESET_SUBJECTDATA,
} from '../../actions/constants';

import subjectDataReducer from '../../reducers/subjectData';

describe('Subject Data Reducer', () => {
  it('Return the default state', () => {
    const mockState = {
      pending: false,
      subject: [],
      error: null,
    };
    const mockAction = { type: null };
    const state = subjectDataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      subject: [],
      error: null,
    });
  });

  it('Set error in the state', () => {
    const mockState = {
      pending: false,
      subject: [],
      error: null,
    };
    const mockAction = { type: SET_SUBJECTDATA_ERROR, error: 'Test error' };
    const state = subjectDataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      subject: [],
      error: 'Test error',
    });
  });

  it('Set subject data in the state', () => {
    const mockState = {
      pending: false,
      subject: [],
      error: null,
    };
    const mockAction = {
      type: SET_SUBJECTDATA_SUCCESS,
      subject:
        { name: 'test-title' },
    };
    const state = subjectDataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      subject: [
        { name: 'test-title' },
      ],
      error: null,
    });
  });

  it('Set pending true in the state', () => {
    const mockState = {
      pending: false,
      subject: [],
      error: null,
    };
    const mockAction = { type: SET_SUBJECTDATA_PENDING };
    const state = subjectDataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: true,
      subject: [],
      error: null,
    });
  });

  it('Reset data in state', () => {
    const mockState = {
      pending: false,
      subject: [
        { name: 'test-title' },
      ],
      error: null,
    };
    const mockAction = { type: RESET_SUBJECTDATA };
    const state = subjectDataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      subject: [],
      error: null,
    });
  });
});
