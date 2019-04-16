import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Button = styled.div`
  cursor: pointer;
  background: cadetblue;
  color: white;
  padding: 1px 6px 3px 6px;
  border-radius: 4px;
  
  &:hover {
    background: #7ABCBE;
  }

`

const Menu = styled.div`
  display: ${props => props.isOpen ? 'initial' : 'none'};
  position: absolute;
  top: 40px;
  background: whitesmoke;
  
  & ul {
  list-style: none;
  margin: 0;
  padding: 0;
  
    & li {
      border-bottom: 1px solid #a2a2a2;
      
      & a {
        padding: 15px;
      }
    }
  }
`

function BoardsDropdown(props) {

  const [isOpen, flipState] = useState(false);

  return (
    <Wrapper>
      <Button onClick={() => flipState(!isOpen)}>
        Boards {isOpen? '⏶' : '⏷'}</Button>

      <Menu isOpen={isOpen}>
        <ul>
          <li><a>Board 1</a></li>
          <li><a>Board 2</a></li>
          <li><a>Board 3</a></li>
      </ul>
      </Menu>
    </Wrapper>
  );
}

export default BoardsDropdown;
