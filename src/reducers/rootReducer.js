import { combineReducers } from 'redux';
import setUserReducer from './user';

const rootReducer = combineReducers({
  setUser: setUserReducer,
});

export default rootReducer;
