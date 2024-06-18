// TodoItem.js
import React from 'react';
import './TodoItem.css';

const TodoItem = ({ task, removeTask, toggleCompletion }) => {
  const handleRemove = () => {
    removeTask(task.id);
  };

  const handleToggleCompletion = () => {
    toggleCompletion(task.id);
  };

  return (
    <li className={`todoitem ${task.completed ? 'completed' : ''}`}>
      <div> 
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleCompletion}
      />
      <span>{task.text}</span>
      </div>
      <button onClick={handleRemove}>Delete</button>
    </li>
  );
};

export default TodoItem;
