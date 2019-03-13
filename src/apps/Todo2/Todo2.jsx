import React, { Component } from 'react';
import styled from 'styled-components';
import InputBox from './components/InputBox';
import DefaultWrapper from './components/DefaultWrapper';
const loremIpsum = require('lorem-ipsum');

class Todo2 extends Component {
  render() {
    return (
      <Wrapper>

        <ColumnLeft>
          <Block2>{loremIpsum({count: 5})}</Block2>
        </ColumnLeft>

        <ColumnCenter>
          <InputBox/>
        </ColumnCenter>

        <ColumnRight>
          <Block1>{loremIpsum({count: 5})}</Block1>
        </ColumnRight>

      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;

  background: #ddd;
  height: 100vh;
  padding: 0.5em;
`

const Block1 = styled(DefaultWrapper)`

`

const Block2 = styled(DefaultWrapper)`

`

const ColumnLeft = styled.div`

`

const ColumnCenter = styled.div`

`

const ColumnRight = styled.div`

`

export default Todo2;
