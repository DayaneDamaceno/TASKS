import { all } from 'redux-saga/effects';

import task from './task/sagas';

export default function* rootSaga() {
  return yield all([task]);
}
