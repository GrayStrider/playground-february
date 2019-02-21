import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FeaturePage extends Component {
  render() {
    return (
      <div>
        <p>Feature</p>
        <Link to={'/home'}>Go Home</Link>
      </div>
    );
  }
}

export default FeaturePage;
