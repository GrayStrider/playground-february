import { ADD_TO_SELECTED, CHANGE_SELECTED } from '../constants/ActionTypes';
import { pull } from 'lodash';

const currentlySelected = (state = [0, 1], action) => {
  switch (action.type) {
    case CHANGE_SELECTED: {
      return state.includes(action.payload)
          ? pull([...state], action.payload)
          : [action.payload]
    }

    case ADD_TO_SELECTED: {
      return state.includes(action.payload)
        ? pull([...state], action.payload)
        : [...state, action.payload];
    }

    default:
      return state;
  }
};

export default currentlySelected;

