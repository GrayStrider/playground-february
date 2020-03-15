import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Description } from '../styles';


const mapStateToProps = state => ({
  currentlySelected: state.currentlySelected,
  tasks: state.tasks,
});

class TaskDetails extends Component {
  render() {
    const selected = this.props.currentlySelected
    const tasks = this.props.tasks

    return (
      <>
        <Content>
          {
            selected.length === 0 // is empty
              ? "Click a task to view details!"
              : selected.length === 1 // only one task selected
                ? tasks.find((task) => task.id === selected[0]).content // display task with id
                : selected.length + ' tasks selected.' // if multiple selected
          }
        </Content>
        <Description>
          {
            selected.length !== 1
              ? null
              : !tasks.find((task) => task.id === selected[0]).description
                ? null
                : tasks.find((task) => task.id === selected[0]).description
          }
        </Description>
      </>
    );
  }
}

export default connect(mapStateToProps, null)(TaskDetails);
