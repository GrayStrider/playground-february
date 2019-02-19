import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './containters/Home';
import NotFound from './containters/NotFound';
import FeaturePage from './containters/FeaturePage';
import { Redirect } from 'react-router';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  background: black;
  color: white;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Switch>
          <Redirect exact from='/' to='/home'/>
          <Route exact path='/home' component={Home}/>
          <Route path='/feature' component={FeaturePage}/>
          <Route component={NotFound}/>
        </Switch>
      </AppWrapper>
    );
  }
}

export default App;
