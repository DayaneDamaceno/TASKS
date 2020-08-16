import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { loadTaskSuccess, markDoneSuccess } from './actions';

function* loadTasks() {
  const responseSchool = yield call(api.get, '/tasks?from=school&status=false');
  const responseJob = yield call(api.get, '/tasks?from=job&status=false');
  const responseDone = yield call(api.get, '/tasks?status=true');

  yield put(
    loadTaskSuccess(responseSchool.data, responseJob.data, responseDone.data)
  );
}

function* markDone({ id }) {
  const { data } = yield call(api.get, `/tasks/${id}`);

  const { title, description, from, tag, finalDate } = data;
  const status = true;

  const response = yield call(api.put, `/tasks/${id}`, {
    title,
    description,
    status,
    from,
    tag,
    finalDate,
  });

  yield put(markDoneSuccess(response.data));
}

export default all([
  takeLatest('@task/MARK_DONE_REQUEST', markDone),
  takeLatest('@task/LOAD_TASK_REQUEST', loadTasks),
]);
