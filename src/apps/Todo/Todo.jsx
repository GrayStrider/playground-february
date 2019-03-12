import React, { Component } from 'react';
import styled from 'styled-components';
import InputBox from './components/InputBox';

class Todo extends Component {
  render() {
    return (
      <Wrapper>
        <InputBox/>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  & > * {
    border: 1px black solid;
  }

  margin: 0 auto;
  max-width: 600px;
  background-color: antiquewhite;
  overflow: auto; //otherwise margins will collapse
`

export default Todo;
