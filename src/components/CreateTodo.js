import React, { useState, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import add from '../assets/add.svg';
import notify from '../notify';

import TodoContext from '../context/todos/TodoContext';

const CreateTodo = () => {
  const todoContext = useContext(TodoContext);
  const task_to_edit = todoContext.taskToEdit;

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (task_to_edit) {
      if (task_to_edit.id) {
        setTitle(task_to_edit.title);
        setDate(task_to_edit.date);
      }
    }
    // setTitle()
  }, [task_to_edit]);

  const handleTitle = e => {
    setTitle(e.target.value);
  };
  const handleDate = e => {
    setDate(e.target.value);
  };

  const createTodo = e => {
    e.preventDefault();
    todoContext.createTask({ id: uuidv4(), title, date, completed: false });
    notify('success', 'Task Added');
    setTitle('');
    setDate('');
  };

  return (
    <React.Fragment>
      <h3>Create ToDO</h3>
      <Form onSubmit={createTodo}>
        <FormGroup>
          <Label for='title'>Title</Label>
          <Input
            type='title'
            name='title'
            placeholder='Title'
            autoComplete='off'
            required
            minLength='5'
            value={title}
            onChange={handleTitle}
          />
        </FormGroup>
        <FormGroup>
          <Label for='date'>Date</Label>
          <Input
            type='date'
            name='date'
            required
            value={date}
            onChange={handleDate}
          />
        </FormGroup>
        <button type='submit' className='btn-submit float-right'>
          <img className='add' src={add} alt='' />
          ADD
        </button>
        <br />
      </Form>
    </React.Fragment>
  );
};

export default CreateTodo;
