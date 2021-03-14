import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUser from '../containers/SignUser';
import UserDetail from './UserDetail';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignUser} />
      <Route exact path="/character/:id" component={UserDetail} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
