import React, { Component } from 'react';
import styled from 'styled-components';
import InputBox from './components/InputBox';

class Todo2 extends Component {
  render() {
    return (
      <Wrapper>
        <InputBox/>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background: #ddd;
  height: 100vh;
  
  padding: 1em;
  
  overflow: auto;
`

export default Todo2;
