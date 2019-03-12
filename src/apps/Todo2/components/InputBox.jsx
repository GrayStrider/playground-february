import React, { Component } from 'react';
import styled from 'styled-components';


class InputBox extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

  }

  render() {
    return (
      <Form onSubmit={(event) => this.handleSubmit(event)}>
          <input type='text' placeholder='Add new task here'/>
          <input type='submit' value='Add'/>
      </Form>
    );
  }
}


const Form = styled.form`

  display: flex;
  
  max-width: 20em;

  background: #f9feff;
  padding: 1em;
  border: solid thin #aeaeae;
  border-radius: 4px;
  box-shadow: 0 0 30px #bbb;
  
  & input[type='text'] {
    border: solid thin #d1d1d1;
    padding: 0.5em;
    box-shadow: 3px 3px 30px #e2e2e2;
    flex: auto;
  }
  
  & input[type='submit'] {
    margin-left: 0.5em;
  }
`;
export default InputBox;
