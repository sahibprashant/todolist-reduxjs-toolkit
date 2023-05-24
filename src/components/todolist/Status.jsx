import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllTodos } from './todoSlice';

const Status = () => {
  const todos = useSelector(getAllTodos);
  const [finished, setFinished] = useState(0);

  useEffect(() => {
    let num = todos.reduce((acc, curr) => acc + (curr.isDone ? 1 : 0), 0);
    setFinished(num);
  }, [state]);

  return (
    <div className="statusContainer">
      <span>Total Tasks: {state.length}</span>
      <span>Completed: {finished}</span>
    </div>
  );
};

export default Status;
