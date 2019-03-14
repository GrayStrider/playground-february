import React, { Component } from 'react';
import styled from 'styled-components';
import DefaultWrapper from './DefaultWrapper';
import theme from '../themes/default';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions_todo';
const spacing = theme.spacing;

class InputBox extends Component {
  constructor(props){
    super(props)
    this.addTodo = this.props.addTodo.bind(this);
  }


  handleSubmit = (event) => {
    event.preventDefault();
    addTodo(document.getElementById('todo_input'));
  }

  render() {
    return (
      <Wrapper as='form' onSubmit={(event) => this.handleSubmit(event)}>
          <input id='todo_input' type='text' placeholder='Add new task here'/>
          <input type='submit' value='Add'/>
      </Wrapper>
    );
  }
}


const Wrapper = styled(DefaultWrapper)`

  * {
     height: 30px;
  }

  & input[type='text'] {
    border: solid thin #d1d1d1;
    padding: ${spacing};
    box-shadow: 3px 3px 30px #e2e2e2;
    flex: auto;
  }
  
  & input[type='submit'] {
    margin-left: ${spacing};
  }
`;

// const mapStateToProps = state => ({
//   // count: state.count,
// });

const mapDispatchToProps = dispatch => ({
  addTodo: (content) => dispatch(addTodo(content)),
});

export default connect(null, mapDispatchToProps)(InputBox);
