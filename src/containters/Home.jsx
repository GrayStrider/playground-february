import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <p>home</p>
        <p>Link - <Link to='/404'>440</Link> - Link</p>
      </div>
    );
  }
}

export default Home;
