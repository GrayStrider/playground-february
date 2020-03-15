import { pull } from 'lodash';
import todoActions from '../actions/appActions';

const initialState = [0, 1];

const selectedReducer = (state = initialState, action) => {
  switch (action.type) {

    case todoActions.SET_SELECTED: {
      if (action.modifier === null) {
        return state.includes(action.payload)
          ? pull([...state], action.payload)
          : [action.payload]
      }

      else if (action.modifier === "Ctrl") {
        return state.includes(action.payload)
          ? pull([...state], action.payload)
          : [...state, action.payload];
      }

      else if (action.modifier === "Delete") {
        return state.includes(action.payload)
          ? pull([...state], action.payload)
          : state;
      }

      else return state // TODO Shift (after task order implementation)
    }

    default:
      return state;
  }
};

export default selectedReducer;
