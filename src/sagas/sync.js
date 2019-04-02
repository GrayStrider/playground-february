import { put, call, takeLatest, fork } from 'redux-saga/effects';
import syncActions from '../actions/syncActions';
import appActions from '../actions/appActions';
import API from '../containers/App/api';

function* fetchUsers() {
  try {
    yield put({ type: syncActions.REQUEST_START });
    const users = yield call(API.fetchUsers);
    yield put({
      type: syncActions.FETCH_SUCCESS,
      payload: { users: users } });
  } catch (err) {
    yield put({ type: syncActions.REQUEST_FAIL, payload: { error: err } });
  }
}

function* watchFetchUsers() {
  yield takeLatest(appActions.FETCH_USERS, fetchUsers);
}

const todoSagas = [
  fork(watchFetchUsers)
]

export default todoSagas;
