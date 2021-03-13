import { combineReducers } from 'redux';
import setCredentialsReducer from './credentials';
import dataReducer from './data';

const rootReducer = combineReducers({
  credentials: setCredentialsReducer,
  user: dataReducer,
});

export default rootReducer;
