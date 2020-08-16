import produce from 'immer';

const INITIAL_STATE = {
  school: null,
  job: null,
  done: null,
  loading: false,
};

export default function task(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@task/LOAD_TASK_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@task/LOAD_TASK_SUCCESS': {
        draft.school = action.school;
        draft.job = action.job;
        draft.done = action.done;

        draft.loading = false;
        break;
      }
      case '@task/MARK_DONE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@task/MARK_DONE_SUCCESS': {
        const fromTask = action.task.from;
        const taskIndex = draft[fromTask].findIndex(
          (p) => p.id === action.task.id
        );
        // console.tron.log(draft[fromTask][taskIndex], action.task);
        draft[fromTask].splice(taskIndex, 1);
        draft.done.push(action.task);
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
