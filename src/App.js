import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { Redirect } from 'react-router';
import { hot } from 'react-hot-loader/root';
import Todo from './pages/Todo';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Redirect exact from='/' to='/todo'/>
          <Route exact path='/todo' component={Todo}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default hot(App)
