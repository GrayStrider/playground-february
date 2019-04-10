/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import styled from 'styled-components';
import theme from '../../themes/default';

import App from '../App';

const loremIpsum = require('lorem-ipsum');


function TodoWithFrameworkComponents() {
  return (
    <AppWrapper>
      <ColumnLeft>
        {loremIpsum({count: 5})}
      </ColumnLeft>
      <ColumnCenter>
        {loremIpsum({count: 5})}
      </ColumnCenter>
      <ColumnRight>
        {loremIpsum({count: 5})}
      </ColumnRight>
    </AppWrapper>

  );
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${theme.spacing} 0 ${theme.spacing};
  flex: 1;
  border: 1px solid #000000;

`;
const ColumnLeft = styled(Column)`
  min-width: 30%;
  max-width: 40%;

`;
const ColumnCenter = styled(Column)`

`;
const ColumnRight = styled(Column)`

`;
const AppWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-items: stretch;
  background: #cbcbcb;
  position: absolute;
  height: 100%;
  width: 100%;
  padding: ${theme.spacing};
  overflow: auto;
  @media(max-width: 800px) {
    & ${ColumnLeft} {
      display: none;
    }
  }
  @media(max-width: 700px) {
    & ${ColumnRight} {
      display: none;
    }
    
    padding: 0;
  }
`;

export default TodoWithFrameworkComponents;
