import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../styles/CSSPlayground2.scss';

const loremIpsum = require('lorem-ipsum');

class CssPlayground extends Component {
  render() {
    return (
      <Wrapper>
        <h1>CSS</h1>
        <Link to={'/home'}>Go Home</Link>
        <hr/>
        <Button>Hide Content!</Button>
        <Content id={'content_id'}>
          {loremIpsum({ count: 10 })}
        </Content>
        <h1 id='text'>Text</h1>
        <Block1/>
        <Block2/>
      </Wrapper>
    );
  }
}

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const Button = styled.button`
`

const Block = styled.div`
  border: 1px black solid;
`

const Block1 = styled(Block)`
  position: relative;
  height: 100px;
  width: 100px;
  background: red;
  color: lime;
  padding: 5px;
  margin: 10px;
  transition: ease 0.5s;
  &:hover {
    transform: scale(1.5);
  }
`

const Block2 = styled(Block)`
  height: 100px;
  width: 200px;
  background: green;
  margin: 10px auto;
  transition: ease-in-out 4s;
  &:hover {
    transform: rotate(960deg);
  }
`

const Wrapper = styled.div`
  margin: 1vh;
  // works only if button is BEFORE the content. Not ideal.
  & ${Button}:active ~ #content_id {
    display: none;
  }
  .b1 {
    height: 100px;
    width: 100px;
    border: 1px black solid;
 
  }
`

export default CssPlayground;
