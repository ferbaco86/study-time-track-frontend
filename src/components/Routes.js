import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddSession from '../containers/AddSession';
import SignUser from '../containers/SignUser';
import UserDetail from './UserDetail';
import SessionDetail from '../containers/SessionDetail';
import NavFooter from './NavFooter';
import TopBar from './TopBar';

const Container = styled.div`
background-color: #f3f4f6;
height: 100vh;`;

const Routes = () => (
  <>
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Container>
          <Route exact path="/" render={() => <SignUser buttonText="Log In" />} />
          <Route exact path="/signup" render={() => <SignUser buttonText="Sign Up" />} />
          <Route exact path="/user" component={UserDetail} />
          <Route exact path="/session" component={AddSession} />
          <Route exact path="/sessionDetail/:id" component={SessionDetail} />
        </Container>
      </Switch>
      <NavFooter />
    </BrowserRouter>
  </>
);

export default Routes;
