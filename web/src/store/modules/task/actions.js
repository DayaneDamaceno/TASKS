export function loadTaskRequest() {
  return {
    type: '@task/LOAD_TASK_REQUEST',
  };
}

export function loadTaskSuccess(school, job, done) {
  return {
    type: '@task/LOAD_TASK_SUCCESS',
    school,
    job,
    done,
  };
}

export function markDoneRequest(id) {
  return {
    type: '@task/MARK_DONE_REQUEST',
    id,
  };
}

export function markDoneSuccess(task) {
  return {
    type: '@task/MARK_DONE_SUCCESS',
    task,
  };
}
