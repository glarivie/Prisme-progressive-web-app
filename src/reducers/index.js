import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import app from './app';
import user from './user';

const rootReducer = combineReducers({
  routing,
  app,
  user,
});

export default rootReducer;
