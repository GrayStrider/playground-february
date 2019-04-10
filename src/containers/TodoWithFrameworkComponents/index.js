import React from 'react';
import styled from 'styled-components';
import theme from '../../themes/default';
import { AppBar, InputBase, Toolbar } from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';

const loremIpsum = require('lorem-ipsum');
const lorem50 = `Velit anim id ut sint incididunt enim. Aliqua reprehenderit excepteur cupidatat aute culpa sint proident reprehenderit sunt adipisicing ex. Sunt labore eiusmod sit magna non fugiat consectetur veniam laborum Lorem do non cillum dolore. Qui nulla labore cillum laboris. Dolor quis eiusmod ex amet. Adipisicing deserunt sint officia irure. Exercitation amet dolor commodo reprehenderit esse duis irure quis Lorem enim reprehenderit mollit dolor duis. Incididunt ea magna eu nisi dolore veniam laboris enim non quis. Reprehenderit reprehenderit reprehenderit exercitation excepteur. Pariatur deserunt est tempor consequat. Consectetur consectetur sint pariatur deserunt voluptate. Aliqua sunt magna ipsum aliqua ex exercitation. Enim aute non dolor eiusmod tempor ut. Qui sunt reprehenderit nostrud veniam minim adipisicing sit aute sit. Ut officia aliqua sit anim eu ea sint tempor Lorem. Occaecat labore laboris exercitation labore enim irure in dolore adipisicing id pariatur. Esse aliquip enim voluptate incididunt magna. Proident anim magna aliquip anim sit labore laboris minim consectetur minim aliqua pariatur ea. Quis anim laborum laborum non aliqua aliquip quis non velit. Reprehenderit proident aute dolore ut consectetur. Id proident non sit sit et et culpa. Aute sunt deserunt voluptate consequat labore dolor cupidatat deserunt deserunt incididunt. Anim labore proident aliqua pariatur. Non duis aliqua proident esse reprehenderit non fugiat magna labore Lorem veniam ut. Commodo magna commodo consectetur pariatur consectetur cupidatat incididunt irure proident mollit aliquip fugiat cupidatat. Consequat quis exercitation tempor nisi irure veniam. Exercitation deserunt aliquip minim consectetur eiusmod dolor sint veniam in reprehenderit. Velit anim duis velit enim duis ipsum tempor deserunt anim minim voluptate. Laboris eu anim nostrud consectetur do dolor ut commodo Lorem aliquip labore. Dolore qui adipisicing ad sunt culpa ad et voluptate qui. Anim non officia eu dolor voluptate quis. Lorem exercitation consequat cupidatat aliqua quis enim. Incididunt nisi labore exercitation excepteur consequat elit nulla adipisicing consectetur ipsum nulla ea. Ut labore dolore voluptate aliquip enim deserunt esse cupidatat sint. Eu ad consectetur mollit voluptate consequat aliquip ullamco ad ad pariatur ipsum voluptate. Minim dolore minim amet in ut aliquip deserunt qui in aute exercitation ullamco. Sunt pariatur veniam exercitation laborum ut minim do exercitation elit eu aliqua exercitation qui. Sunt tempor fugiat proident laboris nisi veniam. Aute officia ut voluptate sint. Aliquip commodo deserunt incididunt anim nulla. Magna eiusmod proident commodo exercitation adipisicing ex. Pariatur nulla id nulla veniam ea ad pariatur deserunt voluptate proident elit voluptate. Id irure sunt reprehenderit quis irure dolore anim excepteur pariatur. Minim veniam tempor Lorem aliqua officia. Ad cupidatat velit commodo enim pariatur et sit eu culpa anim pariatur nisi nostrud. Anim non aute non duis labore enim fugiat incididunt. Exercitation esse dolore pariatur eu ullamco mollit ad veniam ex eiusmod ut. Ut eu adipisicing laborum aute. Culpa est anim dolore eiusmod ipsum do elit aliqua officia nostrud dolor est. Velit fugiat anim eu duis voluptate et tempor adipisicing exercitation aute elit sint minim.\n';`
const lorem10 = `Sit voluptate incididunt aliquip in nisi commodo proident sit. Dolor voluptate veniam aliquip sit commodo adipisicing consequat laboris labore tempor officia anim amet. Dolor non amet sint duis officia sint deserunt in. Minim proident ut sit non irure. Elit eiusmod ea minim id eu Lorem consequat ea dolore voluptate. Sunt nostrud incididunt sit nulla labore. Ad magna ut exercitation incididunt Lorem. Aliqua sunt cupidatat Lorem irure. Officia magna cupidatat nostrud ex enim laboris commodo proident magna. Laboris duis irure sunt tempor nisi irure ex reprehenderit est id. Id in mollit tempor ea commodo voluptate irure eu sint proident proident minim. Consectetur dolor nisi consequat aliqua nulla labore ipsum cupidatat ullamco aliqua minim qui. Aute dolore eu enim qui mollit minim ex. Id qui incididunt nostrud nostrud officia amet eiusmod deserunt consectetur. Ea ipsum duis aliquip occaecat et laboris. Sunt aliqua amet labore sunt laborum. Sint sint ea et cupidatat enim qui sit non cillum. Ea occaecat mollit fugiat aliqua culpa minim sunt adipisicing nulla adipisicing. Nostrud id nostrud anim nostrud aliqua nulla excepteur culpa quis ipsum aute reprehenderit. Ex cupidatat ipsum ea dolore cillum est reprehenderit irure ut sint ipsum elit minim.
`

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
          <S_AppBar position='sticky'>
            <Toolbar>
              <S_InputBase placeholder='Add task here' classes={{
                root: {
                  color: 'white'
                },
                input: {
                  color: 'white'
                }
              }}/>

            </Toolbar>
          </S_AppBar>
          <Scrollbars autoHeight autoHeightMax={this.state.height - 56} autoHide>
            {lorem10}
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

const S_InputBase = styled(InputBase)`
    color: white;
`

const S_AppBar = styled(AppBar)`
    min-height: 56px;
`

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
