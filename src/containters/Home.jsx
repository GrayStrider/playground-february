import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <p>home</p>
        <Link to='/404'>440</Link>
      </div>
    );
  }
}

export default Home;
