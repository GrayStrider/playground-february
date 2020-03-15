import React, { Component } from 'react';
import InputBox from '../../components/InputBox';
import { connect } from 'react-redux';
import TaskDetails from '../../components/TaskDetails';
import {
  AppWrapper,
  Block,
  ColumnCenter,
  ColumnLeft,
  ColumnRight,
} from '../../styles';
import Users from '../Users';
import { Link } from 'react-router-dom';
import TaskList from '../TaskList';

// const loremIpsum = require('lorem-ipsum');

const mapStateToProps = state => ({
  tasks: state.tasks,
});

class App extends Component {
  render() {
    return (
      <AppWrapper>

        <ColumnLeft>
          <Block>
            <Link to={'/TodoWithFrameworkComponents'}>
              TodoWithFrameworkComponents
            </Link>
          </Block>
          <Block>
            <Link to={'/kanban'}>
              Kanban
            </Link>
          </Block>

          <Users/>
        </ColumnLeft>

        <ColumnCenter>
          <InputBox/>
          <TaskList/>
        </ColumnCenter>

        <ColumnRight>
          <TaskDetails/>
        </ColumnRight>

      </AppWrapper>
    );
  }
}

export default connect(mapStateToProps, null)(App);
