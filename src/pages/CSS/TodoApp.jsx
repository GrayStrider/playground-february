import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const tasks = {
  1: {
    id: 1,
    content: 'Get milk',
    description: 'Get milk from grocery shop',
    completed: true,
    priority: 3,
  },
  2: {
    id: 2,
    content: 'Get soy beans',
    description: 'soy beans',
    completed: false,
    priority: 2,
  },
};



class Task extends Component {
  render() {
    return (
      <li key = {this.props.key}>
        <span>{this.props.id}: {<input type='checkbox' checked={this.props.completed} />} {this.props.content}</span>
      </li>
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <ul>
        {Object.keys(tasks).map(
          (id) => (
            <Task key={id}
                  content={tasks[id].content}
                  id = {tasks[id].id}
                  completed = {tasks[id].completed}
            />
          ))}
      </ul>
    )
  }
}

const Footer = () => {
  return (
    <Link to={'/home'}>Home</Link>
  );
};

const Wrapper = styled.div`
  background-color: antiquewhite;
  margin: 0 auto;
  max-width: 600px;

`;

class TodoAppWrapper extends Component {
  render() {
    return (
      <Wrapper>
        <TodoList/>
        <Footer/>
      </Wrapper>

    );
  }
}

export default TodoAppWrapper;
