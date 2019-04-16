import React from 'react';
import styled from 'styled-components';
import Button from './BoardSelector/Button';
import NotificationsDropdown from './NotificationsDropdown/NotificationsDropdown';

const Wrapper = styled.div`
  display: flex;
  
  
  height: 35px;
  padding: 4px 10px;
  
  
  background-color: blanchedalmond;
  align-items: center;
`;

function Header(props) {
  return (
    <Wrapper>
      <Button/>
      <NotificationsDropdown/>
    </Wrapper>
  );
}

export default Header;
