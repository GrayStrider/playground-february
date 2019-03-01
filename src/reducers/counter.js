import {
  INCREMENT,
  DECREMENT
} from '../constants/ActionTypes';

export default (state = 0, action) => {
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
    default:
      return state
  }
}
