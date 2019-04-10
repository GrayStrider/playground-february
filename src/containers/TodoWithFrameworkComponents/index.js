import React from 'react';
import styled from 'styled-components';
import theme from '../../themes/default';
import { AppBar, Toolbar } from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';

const loremIpsum = require('lorem-ipsum');


class TodoWithFrameworkComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    console.log(this.state.height);
    // Additionally I could have just used an arrow function for the binding `this` to the component...
    window.addEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  render() {
    return (
      <AppWrapper>
        <ColumnLeft>
          {loremIpsum({ count: 5 })}
        </ColumnLeft>
        <ColumnCenter>
          {/*<AppBar position='sticky'>*/}
            {/*<Toolbar>*/}

            {/*</Toolbar>*/}
          {/*</AppBar>*/}
          <Scrollbars autoHeight={true} autoHeightMax={this.state.height}>
            {loremIpsum({ count: 50 })}
          </Scrollbars>
        </ColumnCenter>
        <ColumnRight>
          {loremIpsum({ count: 5 })}
        </ColumnRight>
      </AppWrapper>
    );
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${theme.spacing} 0 ${theme.spacing};
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
  background: #cbcbcb;
  position: absolute;
  height: 100%;
  width: 100%;
  padding: ${theme.spacing};
  overflow: hidden;
  @media(max-width: 800px) {
    & ${ColumnLeft} {
      display: none;
    }
  }
  @media(max-width: 700px) {
    & ${ColumnRight} {
      display: none;
    }
    
    & ${ColumnCenter}{
      padding: 0;
    }
    padding: 0;
  }
`;

export default TodoWithFrameworkComponents;
