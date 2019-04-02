import syncActions from '../actions/syncActions';

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case syncActions.FETCH_SUCCESS:
      return action.payload;

    case syncActions.REQUEST_FAIL:
      return action.payload;
    default:
      return state;
  }
};

export default usersReducer;
