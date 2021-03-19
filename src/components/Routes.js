import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddSession from '../containers/AddSession';
import SignUser from '../containers/SignUser';
import UserDetail from './UserDetail';
import SessionDetail from '../containers/SessionDetail';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <SignUser buttonText="Log In" />} />
      <Route exact path="/user" component={UserDetail} />
      <Route exact path="/session" component={AddSession} />
      <Route exact path="/sessionDetail" component={SessionDetail} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
