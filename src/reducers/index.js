import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import user from './user';
import app from './app';

const rootReducer = combineReducers({
  routing,
  user,
  app,
});

export default rootReducer;
