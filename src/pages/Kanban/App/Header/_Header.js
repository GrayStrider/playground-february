import React from 'react';
import styled from 'styled-components';
import BoardsDropdown from './BoardsDropdown';

const Wrapper = styled.div`
  display: flex;
  height: 35px;
  padding: 4px 10px;
  background-color: #f4f8f9;
  align-items: center;
  box-shadow: 2px 2px 2px #c2c2c2;
`;

function Header(props) {

  return (
    <Wrapper>
      <BoardsDropdown/>
    </Wrapper>
  );
}

export default Header;
