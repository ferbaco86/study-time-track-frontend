import { combineReducers } from 'redux';
import setCredentialsReducer from './credentials';

const rootReducer = combineReducers({
  credentials: setCredentialsReducer,
});

export default rootReducer;
