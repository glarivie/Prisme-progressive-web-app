import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import Page404 from './containers/Page404';
import Register from './containers/Register';
import Watch from './containers/Watch';
import Feedback from './containers/Feedback';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="404" component={Page404} />
    <Route path="register" component={Register} />
    <Route path="watch" component={Watch} />
    <Route path="feedback" component={Feedback} />
    <Redirect from="*" to="404" />
  </Route>
);
