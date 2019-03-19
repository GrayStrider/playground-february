import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import DefaultWrapper from './DefaultWrapper';

class TaskDetails extends Component {
  render() {
    const anySelected = this.props.currentlySelected.length !== 0;
    const details = anySelected
      ? this.props.tasks
        .filter((task) => task.id === this.props.currentlySelected[0])[0]
        .details : null;

    return (
      <Wrapper>
        {anySelected
          ? this.props.tasks
            .filter((task) => task.id === this.props.currentlySelected[0])[0]
            .content : "No task selected."
        }
        <br/>
        {anySelected
          ? details
            ? details
            : 'No details provided.'
          : null}
      </Wrapper>
    );
  }
}

const Wrapper = styled(DefaultWrapper)`
  
`;

const mapStateToProps = state => ({
  currentlySelected: state.currentlySelected,
  tasks: state.tasks,
});

export default connect(mapStateToProps, null)(TaskDetails);
