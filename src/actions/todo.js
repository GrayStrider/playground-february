import { ADD_TODO, CHANGE_SELECTED, DELETE_TODO, TOGGLEDONE } from '../constants/ActionTypes';

export function toggleDone(id) {
  return {
    type: TOGGLEDONE,
    id,
  };
}

export function addTodo(payload) {
  return {
    type: ADD_TODO,
    payload,
  };
}

export function deleteTask(payload) {
  return {
    type: DELETE_TODO,
    payload,
  };
}

export function changeSelected(payload) {
  return {
    type: CHANGE_SELECTED,
    payload,
  };
}




