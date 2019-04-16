import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
   display: flex;

  & button span {
    margin-left: 4px;
  }
  
`;


function Button(props) {
  return (
    <Wrapper>
      <button className='btn-small'>
        <FontAwesomeIcon icon={'bars'}/>
        <span>Boards</span>
      </button>
    </Wrapper>
  );
}

export default Button;
