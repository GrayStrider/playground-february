import React from 'react';
import { DefaultWrapper } from '../../styles';
import Task from '../../components/Task';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled(DefaultWrapper)`
  display: flex;
  flex-direction: column;
  border-radius: 0;
  
  &:empty {
    display: none;
  }
`;

const mapStateToProps = state => ({
  tasks: state.tasks,
});



function TaskList(props) {
  return (
    <Wrapper>
      {props.tasks
        .filter(task => !task.isDeleted)
        .map(task => (
            <Task key={task.id}
                  id={task.id}
                  content={task.content}
                  completed={task.completed}
            />
          ),
        )}
    </Wrapper>
  )
}

export default connect(mapStateToProps, null)(TaskList);
