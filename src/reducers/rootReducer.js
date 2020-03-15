import { combineReducers } from 'redux';
import {connectRouter} from 'connected-react-router';
import tasks from './todoReducer';
import selectedReducer from './selectedReducer';
import usersReducer from './usersReducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  tasks: tasks,
  currentlySelected: selectedReducer,
  users: usersReducer
})
