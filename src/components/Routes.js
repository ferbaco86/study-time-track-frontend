import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddSession from '../containers/AddSession';
import SignUser from '../containers/SignUser';
import UserDetail from './UserDetail';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <SignUser buttonText="Log In" />} />
      <Route exact path="/user" component={UserDetail} />
      <Route exact path="/session" component={AddSession} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
