import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { hot } from 'react-hot-loader/root';
import Todo from './components/Main/Todo';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Todo}/>
          <Redirect from='*' to='/'/>
        </Switch>
      </div>
    );
  }
}

export default hot(App)
