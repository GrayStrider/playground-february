import React, { Component } from 'react';
import { connect } from 'react-redux';
import todoActions from '../actions/appActions';
import { TaskWrapper } from '../styles';

const mapDispatchToProps = dispatch => ({
  toggleDone: (id) => dispatch(todoActions.toggleDone(id)),
  deleteTask: (id) => dispatch(todoActions.deleteTask(id)),
  setSelected: (id, modifier) => dispatch(todoActions.setSelected(id, modifier)),
});

const mapStateToProps = state => ({
  currentlySelected: state.currentlySelected,
});

function Task(props) {

  function handleClick(e) {
    if (e.ctrlKey) {
      props.setSelected(props.id, 'Ctrl');
    } else if (e.shiftKey) {
      props.setSelected(props.id, 'Shift');
    } else props.setSelected(props.id, null);
  }

  function handleDelete(e) {
    e.stopPropagation();
    props.deleteTask(props.id);
    props.setSelected(props.id, 'Delete'); // TODO trigger only if selected
  }

  let isSelected = props.currentlySelected.includes(props.id);

  return (
    <TaskWrapper
      id={props.id}
      className={isSelected ? 'selected' : null}
      onClick={handleClick}>

      <span style={{
        display: 'flex'
      }}>
        <label>
          <input type='checkbox' className='filled-in' defaultChecked={props.completed}
                 onClick={(event) => {
                   event.stopPropagation();
                   props.toggleDone(props.id);
                 }}/>
          <span style={{
            display: 'hidden'
          }}></span>
        </label>
        <span className='black-text'>{props.content}</span>
      </span>
      {/*<span className='delete_button' onClick={handleDelete} role='img'*/}
      {/*aria-label='Delete task'>❌</span>*/}
    </TaskWrapper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
