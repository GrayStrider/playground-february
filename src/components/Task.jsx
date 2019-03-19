import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteTask, toggleDone } from '../actions/todo';

class Task extends Component {
  render() {
    return (
      <Wrapper id={this.props.id}>
        <input type='checkbox'
               checked={this.props.completed}
               onChange={() => this.props.toggleDone(this.props.id)}
        />
        {this.props.content}
        <span className='delete_button'
              onClick={() => this.props.deleteTask(this.props.id)}
              role='img'
              aria-label='Delete task'
        >❌</span>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  transition: ease-out 0.2s;
  border-bottom: 1px solid #cdcdcd;
  
  &:hover {
    background: #f2f2f2;
    cursor: pointer;
    border-bottom: 1px solid transparent;
  }
  
  & .delete_button {
    transition: ease-out 0.2s;
    transform: scale(0.6);
    filter: contrast(0);
    float: right;
    margin-right: 0.5em;
    &:hover {
      color: red;
      transform: scale(0.7);
      filter: contrast(0.8);
    }  
  }
  
  & input[type='checkbox'] {
    cursor: pointer;
    margin-right: 0.5em;
  }
  
`;

// const mapStateToProps = state => ({
//   // count: state.count,
// });

const mapDispatchToProps = dispatch => ({
  toggleDone: (id) => dispatch(toggleDone(id)),
  deleteTask: (id) => dispatch(deleteTask(id)),
});

export default connect(null, mapDispatchToProps)(Task);
