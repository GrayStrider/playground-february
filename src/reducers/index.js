import { combineReducers } from 'redux';
import {connectRouter} from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import tasks from './tasks';

export default (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  tasks: tasks
})
