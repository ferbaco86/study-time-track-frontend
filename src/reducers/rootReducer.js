import { combineReducers } from 'redux';
import setCredentialsReducer from './credentials';
import dataReducer from './data';
import sessionDataReducer from './sessionData';
import setSessionTitleReducer from './sessionParams';
import subjectDataReducer from './subjectData';
import setSubjectParamsReducer from './subjectParams';
import userDataReducer from './userData';

const rootReducer = combineReducers({
  credentials: setCredentialsReducer,
  user: dataReducer,
  userData: userDataReducer,
  sessionTitle: setSessionTitleReducer,
  session: sessionDataReducer,
  subjectParams: setSubjectParamsReducer,
  subject: subjectDataReducer,
});

export default rootReducer;
