import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUser from '../containers/SignUser';
import UserDetail from './UserDetail';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <SignUser buttonText="Sign Up" />} />
      <Route exact path="/user" component={UserDetail} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
