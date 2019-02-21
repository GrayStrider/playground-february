import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class AppHeader extends Component {
  render() {
    return (
        <Wrapper>
          <p>Header</p>
          <Link to={'/home'}>Home</Link>
          <Link to={'/home/404'}>Embedded home 404?</Link>
        </Wrapper>
    );
  }
}

const Wrapper = styled.header`
  height: 100px;
  border: 1px solid black;
`;

export default AppHeader;
