import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddSession from '../containers/AddSession';
import SignUser from '../containers/SignUser';
import UserDetail from './UserDetail';
import SessionDetail from '../containers/SessionDetail';
import NavFooter from './NavFooter';
import TopBar from './TopBar';

const Routes = () => (
  <>

    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route exact path="/" render={() => <SignUser buttonText="Log In" />} />
        <Route exact path="/signup" render={() => <SignUser buttonText="Sign Up" />} />
        <Route exact path="/user" component={UserDetail} />
        <Route exact path="/session" component={AddSession} />
        <Route exact path="/sessionDetail/:id" component={SessionDetail} />
      </Switch>
      <NavFooter />
    </BrowserRouter>
  </>
);

export default Routes;
