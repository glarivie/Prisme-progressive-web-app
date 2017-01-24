import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './containers/App';
import SignIn from './containers/SignIn';
import HomePage from './containers/HomePage';
import Page404 from './containers/Page404';
import SignUp from './containers/SignUp'
import FavSelect from './containers/FavSelect'


export default (
  <Route path="/" component={App}>
    <IndexRoute component={SignIn} />
    <Route path="sign-in" component={SignIn} />
    <Route path="sign-up" component={SignUp} />
    <Route path="fav-select" component={FavSelect} />
    <Route path="home" component={HomePage} />
    <Route path="404" component={Page404} />
    <Redirect from="*" to="404" />
  </Route>
);
