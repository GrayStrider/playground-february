import syncActions from '../actions/syncActions';

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case syncActions.FETCH_SUCCESS:
      return action.payload.users.data.users;
    default:
      return state;
  }
};

export default usersReducer;
