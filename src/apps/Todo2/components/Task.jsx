import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggleDone } from '../actions/actions_todo';

class Task extends Component {
  render() {
    return (
      <Wrapper id={this.props.id}>
        <input type='checkbox'
                checked={this.props.completed}
                onChange={() => this.props.toggleDone(this.props.id)}
        />
        {this.props.content}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  border-bottom: 1px solid #989898;
  &:hover {
    border-bottom: none;
    cursor: pointer;
  }
`;

// const mapStateToProps = state => ({
//   // count: state.count,
// });

const mapDispatchToProps = dispatch => ({
  toggleDone: (id) => dispatch(toggleDone(id)),
});

export default connect(null, mapDispatchToProps)(Task);
