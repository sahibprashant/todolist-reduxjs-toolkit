import React from 'react';
import { CiCircleRemove } from 'react-icons/ci';

const TodoItem = ({ data, onCheck, onRemove }) => {
  return (
    <div className="todoItem">
      <div className="itemDetail">
        <input
          type="checkbox"
          name="todo-checkbox"
          checked={data.isDone}
          onChange={(e) => {
            onCheck(e.target.checked);
          }}
        />
        <label>{data.title}</label>
      </div>
      <CiCircleRemove className="removeIcon" onClick={onRemove} />
    </div>
  );
};

export default TodoItem;
