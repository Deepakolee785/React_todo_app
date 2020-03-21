import React, { useReducer } from 'react';
import TodoContext from './TodoContext';
import TodoReducer from './TodoReducer';
import { COMPLETE_TODO, DELETE_TODO, CREATE_TODO, EDIT_TODO } from '../types';

const TodoState = props => {
  const initialState = {
    tasks: [],
    taskToEdit: {}
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  // create task
  const createTask = task => {
    dispatch({
      type: CREATE_TODO,
      payload: task
    });
  };
  // complete task
  const taskCompleted = index => {
    dispatch({
      type: COMPLETE_TODO,
      payload: index
    });
  };
  // delete task
  const taskDeleted = index => {
    dispatch({
      type: DELETE_TODO,
      payload: index
    });
  };
  // edit task
  const editTask = index => {
    dispatch({
      type: EDIT_TODO,
      payload: index
    });
  };
  return (
    <TodoContext.Provider
      value={{
        tasks: state.tasks,
        taskToEdit: state.taskToEdit,
        createTask,
        taskCompleted,
        taskDeleted,
        editTask
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
export default TodoState;
