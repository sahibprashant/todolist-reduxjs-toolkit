import React from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { changeTodoStatus, removeTodo, getAllTodos } from './todoSlice';

const TaskList = () => {
  const todos = useSelector(getAllTodos);
  const dispatch = useDispatch();

  function handleCheck(value, todoItem) {
    dispatch(
      changeTodoStatus({
        id: todoItem.id,
        check: value,
      })
    );
  }

  function handleRemove(item) {
    dispatch(
      removeTodo({
        id: item.id,
      })
    );
  }

  return (
    <div className="taskList">
      {todos.map((item, index) => {
        return (
          <TodoItem
            key={index}
            data={item}
            onCheck={(value) => {
              handleCheck(value, item);
            }}
            onRemove={() => {
              handleRemove(item);
            }}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
