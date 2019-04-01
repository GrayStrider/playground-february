import React, { Component } from 'react';
import { connect } from 'react-redux';
import todoActions from '../actions/appActions';
import { InputBoxWrapper } from '../styles';

const mapDispatchToProps = dispatch => ({
  addTodo: (content) => dispatch(todoActions.addTodo(content)),
});

class InputBox extends Component {

  render() {
    let input;

    function handleSubmit(e) {
      e.preventDefault();
      if (!input.value.trim()) {
        input.value = '';
        return;
      }
      this.props.addTodo(input.value);
      input.value = '';
    }

    return (
      <InputBoxWrapper as='form' autoComplete="off" onSubmit={handleSubmit}>
        <input type='text' placeholder='Add new task here' ref={node => {input = node}}/>
        <input type='submit' value='Add'/>
      </InputBoxWrapper>
    );
  }
}



export default connect(null, mapDispatchToProps)(InputBox);
