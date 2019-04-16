import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
  margin-left: auto;
`;

function NotificationsDropdown(props) {
  return (
    <Wrapper>
      <FontAwesomeIcon icon="bell"/>
    </Wrapper>
  );
}

export default NotificationsDropdown;
