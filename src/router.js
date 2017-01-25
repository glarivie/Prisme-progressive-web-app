import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './containers/App';
import Splash from './containers/Splash';
import SignIn from './containers/SignIn';
import Prismes from './containers/Prismes';
import Prisme from './containers/Prisme';
import Single from './containers/Single';
import Page404 from './containers/Page404';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Splash} />
    <Route path="sign-in" component={SignIn} />
    <Route path="prismes" component={Prismes} />
    <Route path="prisme/:id" component={Prisme} />
    <Route path="single" component={Single} />
    <Route path="404" component={Page404} />
    <Redirect from="*" to="404" />
  </Route>
);
