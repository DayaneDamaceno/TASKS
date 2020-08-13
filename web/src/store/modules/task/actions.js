export function markDoneRequest(id) {
  return {
    type: '@task/MARK_DONE_REQUEST',
    id,
  };
}

export function markDoneSuccess(myTask) {
  return {
    type: '@task/MARK_DONE_SUCCESS',
    myTask,
  };
}
