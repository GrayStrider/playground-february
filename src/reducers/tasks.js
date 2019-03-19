import { ADD_TODO, DELETE_TODO, TOGGLEDONE } from '../constants/ActionTypes';

const boilerplate = [
  {
    id: 0,
    content: 'Buy milk',
    priority: 1,
    tags: ['home', 'groceries'],
    completed: false,
    isDeleted: false,
  },
  {
    id: 1,
    content: 'Buy cat food',
    priority: 2,
    tags: ['home', 'pets'],
    completed: false,
    isDeleted: false,
  },
  {
    id: 2,
    content: 'Launch the site',
    priority: 4,
    tags: ['business', 'WebDev'],
    completed: false,
    isDeleted: false,
  },
];

const tasks = (state = boilerplate, action) => {
  switch (action.type) {

    case TOGGLEDONE:
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed } : todo,
      );
    case ADD_TODO:
      return [...state,
        {
          id: state.length + 1,
          content: action.payload,
          completed: false,
          isDeleted: false,
        },
      ];

    case DELETE_TODO:
      return state.map(todo =>
        (todo.id === action.payload)
          ? { ...todo, isDeleted: !todo.isDeleted} : todo,
      );


    default:
      return state;


  }
};

export default tasks;
