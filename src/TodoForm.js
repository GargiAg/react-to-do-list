// TodoForm.js
import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim() !== '') {
      addTask(taskInput);
      setTaskInput('');
      setError('');
    } else {
      setError('Task cannot be empty!');
    }
  };

  return (
    <form className="todoform" role="form" aria-label="Todo Form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a new task..."
        required
      />
      <button type="submit">Add Task</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default TodoForm;
