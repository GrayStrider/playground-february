import { combineReducers } from 'redux';
import {connectRouter} from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import tasks from './reducers/tasks';
import currentlySelected from './reducers/currentlySelected';

export default (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  tasks: tasks,
  currentlySelected: currentlySelected
})
