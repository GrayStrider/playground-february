import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppHeader from '../../components/AppHeader';
import CssPlayground from '../CSSPlayground/CSSPlayground';
import { Route } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div>
        <AppHeader/>
        <p>home</p>
        <p>Link - <Link to='/404'>440</Link> - Link</p>
        <Link to={'/css'}>CSS Playground</Link>
        <Link to={'home/css'}>Embedded render</Link>
        <div>
          <Route path='/home/css' component={CssPlayground}/>
        </div>
      </div>
    );
  }
}

export default Home;
