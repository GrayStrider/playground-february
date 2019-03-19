import { ADD_TO_SELECTED, ADD_TODO, CHANGE_SELECTED, DELETE_TODO, TOGGLEDONE } from '../constants/ActionTypes';

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

export function addToSelected(payload) {
  return {
    type: ADD_TO_SELECTED,
    payload,
  };
}





