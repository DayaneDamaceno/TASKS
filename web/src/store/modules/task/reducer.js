import produce from 'immer';

export default function task(state = [], action) {
  switch (action.type) {
    case '@task/MARK_DONE_SUCCESS':
      return produce(state, (draft) => {
        const { myTask } = action;

        draft.push(myTask);
      });
    default:
      return state;
  }
}
