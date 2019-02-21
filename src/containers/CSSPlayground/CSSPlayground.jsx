import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CssPlayground extends Component {
  render() {
    return (
      <div>
        <h1>CSS</h1>
        <Link to={'/home'}>Go Home</Link>
      </div>
    );
  }
}

export default CssPlayground;
