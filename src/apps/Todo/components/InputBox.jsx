import React, { Component } from 'react';
import styled from 'styled-components';


class InputBox extends Component {
  render() {
    return (
      <form>
        <Wrapper>
          <input type='text'/>
          <input type='submit'/>
        </Wrapper>
      </form>
    );
  }
}


const Wrapper = styled.div`
  margin: 10px;
  display: flex;
  & input[type="text"] {
    flex: 1 1 auto;
    margin-right: 10px;
  }
`;
export default InputBox;
