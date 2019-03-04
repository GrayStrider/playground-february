import { INCREMENT, DECREMENT, SETCOUNTER } from '../constants/ActionTypes';

export const increment = () => ({
  type: INCREMENT,
})

export const decrement = () => ({
  type: DECREMENT,
})

export function setCounter(value) {
  return {
    type: SETCOUNTER,
    value // it will add key `value` with argument value.
  };
}
