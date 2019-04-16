import styled from 'styled-components';
import theme from '../themes/default';
const spacing = theme.spacing;

const DefaultWrapper = styled.div`
  margin: ${spacing} 0 ${spacing} 0;
  display: flex;
  background: #f9feff;
  padding: 1em;
  border: solid thin #aeaeae;
  border-radius: 4px;
  box-shadow: 0 0 30px #bbb;
  
  &:empty {
    display: none;
  }

`;

const Content = styled(DefaultWrapper)`
`;

const Description = styled(DefaultWrapper)`
  
`;

const InputBoxWrapper = styled(DefaultWrapper)`
  * {
     height: 30px;
  }

  & input[type='text'] {
    border: solid thin #d1d1d1;
    padding: ${theme.spacing};
    box-shadow: 3px 3px 30px #e2e2e2;
    flex: auto;
  }
  
  & input[type='submit'] {
    margin-left: ${theme.spacing};
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${spacing} 0 ${spacing};
  flex: 1;

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

  background: #ddd;
  position: absolute;
  height: 100%;
  width: 100%;
  padding: ${spacing};
  
  @media(max-width: 800px) {
    & ${ColumnLeft} {
      display: none;
    }
  }
  
  @media(max-width: 700px) {
    & ${ColumnRight} {
      display: none;
    }
    
  }
`;

const Block = styled(DefaultWrapper)`

`;


const TaskWrapper = styled.div`
 
`;

export {
  AppWrapper,
  Block,
  InputBoxWrapper,

  TaskWrapper,
  DefaultWrapper,

  ColumnLeft,
  ColumnCenter,
  ColumnRight,

  Content,
  Description
}
