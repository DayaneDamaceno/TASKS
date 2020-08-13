import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { markDoneSuccess } from './actions';

function* markDone({ id }) {
  const { data } = yield call(api.get, `/tasks/${id}`);

  const { title, description, from, finalDate } = data;
  const status = true;

  yield call(api.put, `/tasks/${id}`, {
    title,
    description,
    status,
    from,
    finalDate,
  });

  yield put(markDoneSuccess(data));
}

export default all([takeLatest('@task/MARK_DONE_REQUEST', markDone)]);
