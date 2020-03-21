import React, { useContext } from 'react';
import complete from '../assets/check.svg';
import edit from '../assets/edit.svg';
import del from '../assets/bin.svg';
import notify from '../notify';
import TodoContext from '../context/todos/TodoContext';

const Todo = ({ arr_index, task_id, title, date, isCompleted }) => {
  // context
  const todoContext = useContext(TodoContext);

  // task completed
  const handleComplete = index => {
    todoContext.taskCompleted(index);
    notify('success', 'Task Completed');
  };

  // task deleted
  const handleDelete = index => {
    todoContext.taskDeleted(index);
    notify('error', 'Deleted Successfully');
  };

  // edit task
  const handleEdit = (index) => {
    todoContext.editTask(index);
  };

  return (
    <React.Fragment>
      <div className={`todo ${isCompleted ? 'strike' : ''}`}>
        <h5>{title}</h5>
        <p className='ml-5'>{date}</p>
        <div className='ml-auto'>
          {!isCompleted && (
            <span>
              <img
                className='completed'
                src={complete}
                alt='completed'
                onClick={index => handleComplete(arr_index)}
              />
              <img
                className='edit'
                src={edit}
                alt='edit'
                onClick={index => handleEdit(arr_index)}
              />
            </span>
          )}

          <img
            className='delete'
            src={del}
            alt='delete'
            onClick={index => handleDelete(arr_index)}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Todo;
