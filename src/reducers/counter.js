import {
  INCREMENT,
  DECREMENT, SETCOUNTER,
} from '../constants/ActionTypes';

export default (state = 0, action) => {
  const value = action.value;
  switch (action.type) {
    case INCREMENT:
      if (state === 10){
        return state
      }
      return state + 1
    case DECREMENT:
      if (state === 0){
        return state
      }
      return state - 1
    case SETCOUNTER:
      if (
        typeof value === 'number'
        && (value === Math.trunc(value))
        && value >= 0
        && value <=10) {
        return value
      }
      return state
    default:
      return state
  }
}
