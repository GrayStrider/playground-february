import { CHANGE_SELECTED } from '../constants/ActionTypes';

const currentlySelected = (state = [], action) => {
  switch (action.type) {
    case CHANGE_SELECTED: {
      return [action.payload]
    }
    default:
      return state;
  }
};

export default currentlySelected;

