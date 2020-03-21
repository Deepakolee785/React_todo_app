import React, { useState, useEffect, useContext } from 'react';
import Todo from './Todo';

import TodoContext from '../context/todos/TodoContext';

export const Todos = () => {
  const [tasks, setTasks] = useState([]);
  const todoContext = useContext(TodoContext);

  useEffect(() => {
    setTasks(todoContext.tasks);
  }, [todoContext]);

  if (tasks.length === 0) {
    return (
      <h4 className='text-danger text-center pt-5'>No Tasks Available!!</h4>
    );
  }

  return (
    <React.Fragment>
      <div style={{ display: 'flex', margin: '2rem 0 0 0' }}>
        <h3>Tasks</h3>
      </div>
      {tasks.map((task, index) => (
        <Todo
          arr_index={index}
          key={task.id}
          task_id={task.id}
          title={task.title}
          date={task.date}
          isCompleted={task.completed}
        />
      ))}
    </React.Fragment>
  );
};
