import {ADD_TODO, TOGGLEDONE } from '../../../constants/ActionTypes';

export function toggleDone(id) {
  return {
    type: TOGGLEDONE,
    id
  };
}

export function addTodo(payload) {
  return {
    type: ADD_TODO,
    payload
  }
}

