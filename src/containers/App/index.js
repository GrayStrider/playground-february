import React, { Component } from 'react';
import InputBox from '../../components/InputBox';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Task from '../../components/Task';
import TaskDetails from '../../components/TaskDetails';
import {
  AppWrapper,
  Block,
  ColumnCenter,
  ColumnLeft,
  ColumnRight,
  Deleted,
  TaskList,
} from '../../styles';

const loremIpsum = require('lorem-ipsum');

const mapStateToProps = state => ({
  tasks: state.tasks,
});

class App extends Component {
  render() {
    return (
      <AppWrapper>

        <ColumnLeft>
          <Block>{loremIpsum({ count: 5 })}</Block>
          <Block>{loremIpsum({ count: 10 })}</Block>
        </ColumnLeft>

        <ColumnCenter>
          <InputBox/>
          <TaskList>
            {this.props.tasks
              .filter(task => !task.isDeleted)
              .map(task => (
                  <Task key={task.id}
                        id={task.id}
                        content={task.content}
                        completed={task.completed}
                  />
                ),
              )}
          </TaskList>
          <Deleted>
            {this.props.tasks
              .filter(task => task.isDeleted)
              .map(task => (
                  <Task key={task.id}
                        id={task.id}
                        content={task.content}
                        completed={task.completed}
                  />
                ),
              )}
          </Deleted>
        </ColumnCenter>

        <ColumnRight>
          <TaskDetails/>
        </ColumnRight>

      </AppWrapper>
    );
  }
}

export default connect(mapStateToProps, null)(App);
