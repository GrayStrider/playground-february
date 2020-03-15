
const todoActions = {
  TOGGLEDONE: 'TOGGLEDONE',
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  SET_SELECTED: 'SET_SELECTED',
  FETCH_DATA: 'FETCH_DATA',
  FETCH_USERS: 'FETCH_USERS',

  toggleDone: id => ({
    type: todoActions.TOGGLEDONE,
    id,
  }),

  addTodo: payload => ({
    type: todoActions.ADD_TODO,
    payload,
  }),

  deleteTask: payload => ({
    type: todoActions.DELETE_TODO,
    payload,
  }),

  setSelected: (payload, modifier) => ({
    type: todoActions.SET_SELECTED,
    payload,
    modifier,
  }),

  fetchTodos: () => ({
    type: todoActions.FETCH_DATA
  }),

}

export default todoActions;
