import React from 'react';
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';
import { Alert } from 'react-bootstrap';

const Wrapper = styled.div`
  display: flex;
`;

function Board(props) {
  return (
    <Wrapper>
      <Dropdown>
        <Dropdown.Toggle id='dropdown-basic'>
          Dropdown Button
        </Dropdown.Toggle>
      </Dropdown>

      <Alert variant='primary'>Test</Alert>
    </Wrapper>
  );
}

export default Board;
