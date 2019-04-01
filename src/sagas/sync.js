import { put, call, takeLatest, fork } from 'redux-saga/effects';
import syncActions from '../actions/syncActions';

function* fetchTodos() {
  try {
    yield put({ type: syncActions.REQUEST_START });
    // const todos = yield call(API.fetchTodos);
    const todos = {1: 'test'}
    yield put({ type: syncActions.FETCH_TODOS_SUCCESS, payload: { todos } });
  } catch (err) {
    yield put({ type: syncActions.REQUEST_FAIL, payload: { error: err } });
  }
}

function* watchFetchTodos() {
  yield takeLatest(syncActions.FETCH_TODOS, fetchTodos);
}

const todoSagas = [
  fork(watchFetchTodos)
]

export default todoSagas;
