import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteTask, toggleDone, changeSelected } from '../actions/todo';

class Task extends Component {
  render() {
    return (
      <Wrapper
        id={this.props.id} className={this.props.currentlySelected[0] === this.props.id ? 'selected' : null}
        onClick={() => this.props.changeSelected(this.props.id)}>

        <input type='checkbox'
               checked={this.props.completed}
               onChange={() => this.props.toggleDone(this.props.id)}
        />

        {this.props.content}

        <span className='delete_button'
              onClick={(e) => {
                e.stopPropagation(); // prevent task selection on deletion
                this.props.deleteTask(this.props.id)
                this.props.changeSelected(null);
              }}
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
  
  &.selected {
    background: #e5e5e5;
    font-weight: bold;
  }
`;

const mapDispatchToProps = dispatch => ({
  toggleDone: (id) => dispatch(toggleDone(id)),
  deleteTask: (id) => dispatch(deleteTask(id)),
  changeSelected: (id) => dispatch(changeSelected(id)),
});

const mapStateToProps = state => ({
  currentlySelected: state.currentlySelected,
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
