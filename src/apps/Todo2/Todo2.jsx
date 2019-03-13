import React, { Component } from 'react';
import styled from 'styled-components';
import InputBox from './components/InputBox';
import DefaultWrapper from './components/DefaultWrapper';
const loremIpsum = require('lorem-ipsum');

class Todo2 extends Component {
  render() {
    return (
      <Wrapper>
        <InputBox/>
        <Block1>
          {loremIpsum({count: 5})}
        </Block1>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background: #ddd;
  height: 100vh;
  overflow: auto;
`

const Block1 = styled(DefaultWrapper)`

`

export default Todo2;
