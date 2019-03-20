import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteTask, toggleDone, setSelected } from '../actions/todo';

class Task extends Component {
  render() {
    return (
      <Wrapper
        id={this.props.id} className={this.props.currentlySelected.includes(this.props.id) ? 'selected' : null}

        onClick={(e) => {
          if (e.ctrlKey) {
            this.props.setSelected(this.props.id, "Ctrl");
          }
          else if (e.shiftKey) {
            this.props.setSelected(this.props.id, "Shift");
          }
          else this.props.setSelected(this.props.id, null)
        }
        }>

        <input type='checkbox' checked={this.props.completed}
               onChange={() => this.props.toggleDone(this.props.id)}/>

        {this.props.content}

        <span className='delete_button'
              onClick={(e) => {
                e.stopPropagation(); // prevent task selection on deletion
                this.props.deleteTask(this.props.id)
                this.props.setSelected(this.props.id, "Delete");
              }} role='img' aria-label='Delete task'>❌</span>
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
  setSelected: (id, modifier) => dispatch(setSelected(id, modifier)),
});

const mapStateToProps = state => ({
  currentlySelected: state.currentlySelected,
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
