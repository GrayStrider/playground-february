import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/main/Home';
import NotFound from './containers/NotFound';
import { Redirect } from 'react-router';
import CSSPlayground from './containers/CSSPlayground/CSSPlayground';
import CSSPlayground2 from './containers/CSSPlayground/CSSPlayground2';
import BoxModel from './containers/CSSPlayground/BoxModel';
import FlexBox from './containers/CSSPlayground/FlexBox';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Redirect exact from='/' to='/home'/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/css' component={CSSPlayground}/>
          <Route exact path='/css2' component={CSSPlayground2}/>
          <Route exact path='/css3' component={BoxModel}/>
          <Route exact path='/flex' component={FlexBox}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
