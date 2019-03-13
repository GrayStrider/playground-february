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
          <Block>{loremIpsum({count: 5})}</Block>
          <Block>{loremIpsum({count: 10})}</Block>
        </ColumnLeft>

        <ColumnCenter>
          <InputBox/>
          <Block>{loremIpsum({count: 5})}</Block>
        </ColumnCenter>

        <ColumnRight>
          <Block>{loremIpsum({count: 5})}</Block>
          <Block>{loremIpsum({count: 15})}</Block>
        </ColumnRight>

      </Wrapper>
    );
  }
}


const Block = styled(DefaultWrapper)`

`

const Column = styled.div`
  min-width: 30%;
  padding: 0 0.5em 0 0.5em;

`
const ColumnLeft = styled(Column)`

`

const ColumnCenter = styled(Column)`

`

const ColumnRight = styled(Column)`

`
const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;

  background: #ddd;
  height: 100vh;
  padding: 0 0.5em 0 0.5em;
  
  @media(max-width: 1000px) {
    & ${ColumnLeft} {
      display: none;
    }
  }
  
  @media(max-width: 730px) {
    & ${ColumnRight} {
      display: none;
    }
  }
`

export default Todo2;
