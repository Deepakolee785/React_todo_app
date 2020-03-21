import { COMPLETE_TODO, DELETE_TODO, CREATE_TODO, EDIT_TODO } from '../types';

export default (state, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        tasks: [...state.tasks, action.payload]
      };
    case COMPLETE_TODO:
      const i = action.payload;
      return {
        tasks: [
          ...state.tasks.slice(0, i), // before the one we are updating
          { ...state.tasks[i], completed: true },
          ...state.tasks.slice(i + 1) //after the one we are updating
        ]
      };
    case DELETE_TODO:
      const ind = action.payload;
      return {
        tasks: [
          ...state.tasks.slice(0, ind), // before the one we are updating
          ...state.tasks.slice(ind + 1) //after the one we are updating
        ]
      };
    case EDIT_TODO:
      const inde = action.payload;
      return {
        tasks: [
          ...state.tasks.slice(0, inde), // before the one we are updating
          ...state.tasks.slice(inde + 1) //after the one we are updating
        ],
        taskToEdit: state.tasks[inde]
      };
    default:
      return state;
  }
};
