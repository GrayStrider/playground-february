import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundWrapper = styled.div`
  background: red;
  
`;

class NotFound extends Component {
  render() {
    return (
      <NotFoundWrapper>
        <p>404</p>
        <div>
          <Link to='/'>Go Home</Link>
          <Link to='/feature'>Feature</Link>
        </div>
      </NotFoundWrapper>
    );
  }
}

export default NotFound;
