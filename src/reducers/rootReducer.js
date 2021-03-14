import { combineReducers } from 'redux';
import setCredentialsReducer from './credentials';
import dataReducer from './data';
import userDataReducer from './userData';

const rootReducer = combineReducers({
  credentials: setCredentialsReducer,
  user: dataReducer,
  userData: userDataReducer,
});

export default rootReducer;
