import { all } from 'redux-saga/effects';
import todoSagas from './sync';

export default function* root() {
  yield all([
    ...todoSagas,
  ]);
}
