import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/main/Home';
import NotFound from './containers/NotFound';
import { Redirect } from 'react-router';
import CSSPlayground from './containers/CSSPlayground/CSSPlayground';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  height: 80vh;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  background: #cfcfcf;
  vertical-align: center;
  border: 1px solid black;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Switch>
          <Redirect exact from='/' to='/home'/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/css' component={CSSPlayground}/>
          <Route component={NotFound}/>
        </Switch>
      </AppWrapper>
    );
  }
}

export default App;
