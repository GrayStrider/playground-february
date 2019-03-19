import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import DefaultWrapper from './DefaultWrapper';

class TaskDetails extends Component {
  render() {

    return (
      <Wrapper>
        {
          !this.props.currentlySelected.length // is empty
            ? null
            : this.props.currentlySelected.length === 1 // only one task selected
              ? this.props.tasks.find((task) => task.id === this.props.currentlySelected[0]).content // display task with id
              : this.props.currentlySelected.length + ' tasks selected.' // if multiple selected
        }
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
