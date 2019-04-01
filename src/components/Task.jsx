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

class Task extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(e) {
    if (e.ctrlKey) {
      this.props.setSelected(this.props.id, 'Ctrl');
    } else if (e.shiftKey) {
      this.props.setSelected(this.props.id, 'Shift');
    } else this.props.setSelected(this.props.id, null);
  }

  handleDelete(e) {
    e.stopPropagation();
    this.props.deleteTask(this.props.id);
    this.props.setSelected(this.props.id, 'Delete'); // TODO trigger only if selected
  }

  render() {
    let isSelected = this.props.currentlySelected.includes(this.props.id);

    return (
      <TaskWrapper
        id={this.props.id}
        className={isSelected ? 'selected' : null}
        onClick={this.handleClick}>

        <input type='checkbox'
               checked={this.props.completed}
               onClick={(event) => {
                 event.stopPropagation();
                 this.props.toggleDone(this.props.id);
               }}/>

        {this.props.content}

        <span className='delete_button'
              onClick={this.handleDelete}
              role='img'
              aria-label='Delete task'>❌</span>
      </TaskWrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
