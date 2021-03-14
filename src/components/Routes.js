import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUser from '../containers/SignUser';
import ProtectedWrapper from './ProtectedWrapper';
import UserDetail from './UserDetail';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" render={() => <SignUser buttonText="Log In" />} />
      <Route exact path="/user" component={UserDetail} />
      <Route path="/" component={ProtectedWrapper} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
