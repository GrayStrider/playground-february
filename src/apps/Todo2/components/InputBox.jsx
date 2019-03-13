import React, { Component } from 'react';
import styled from 'styled-components';
import DefaultWrapper from './DefaultWrapper';
import theme from '../themes/default';
const spacing = theme.spacing;

class InputBox extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

  }

  render() {
    return (
      <Wrapper as='form' onSubmit={(event) => this.handleSubmit(event)}>
          <input type='text' placeholder='Add new task here'/>
          <input type='submit' value='Add'/>
      </Wrapper>
    );
  }
}


const Wrapper = styled(DefaultWrapper)`

  * {
     height: 30px;
  }

  & input[type='text'] {
    border: solid thin #d1d1d1;
    padding: ${spacing};
    box-shadow: 3px 3px 30px #e2e2e2;
    flex: auto;
  }
  
  & input[type='submit'] {
    margin-left: ${spacing};
  }
`;
export default InputBox;
