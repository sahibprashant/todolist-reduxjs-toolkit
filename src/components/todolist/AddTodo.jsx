import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleAddTodo() {
    dispatch(addTodo(input));
    setInput('');
  }

  return (
    <>
      <form
        className="addTodoForm"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTodo();
        }}
      >
        <input
          className="todoInput"
          type="input"
          placeholder="Enter task here"
          name="todoText"
          value={input}
          onChange={handleInput}
          required
        />
        <input
          className="addBtn"
          type="submit"
          name="addTodoButton"
          value={'Add Todo'}
        />
      </form>
    </>
  );
};

export default AddTodo;
