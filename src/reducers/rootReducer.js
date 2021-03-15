import { combineReducers } from 'redux';
import setCredentialsReducer from './credentials';
import dataReducer from './data';
import sessionDataReducer from './sessionData';
import userDataReducer from './userData';

const rootReducer = combineReducers({
  credentials: setCredentialsReducer,
  user: dataReducer,
  userData: userDataReducer,
  session: sessionDataReducer,
});

export default rootReducer;
