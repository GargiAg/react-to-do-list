// TodoList.js

import React, { useState, useEffect } from 'react';
import './TodoList.css'; // Import your CSS file for TodoList component
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
//   const [sortType, setSortType] = useState('default'); // 'default', 'name', 'date'

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (text.trim() !== '') {
      const newTask = { id: Date.now(), text: text, completed: false };
      setTasks([...tasks, newTask]);
    }
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleSort = (type) => {
    let sortedTasks = [...tasks];
    if (type === 'name') {
      sortedTasks.sort((a, b) => a.text.localeCompare(b.text));
    } else if (type === 'date') {
      sortedTasks.sort((a, b) => a.id - b.id); // Assuming 'id' is a timestamp
    }
    // setSortType(type);
    setTasks(sortedTasks);
  };

  // const handleFilterCompleted = () => {
  //   const filteredTasks = tasks.filter(task => !task.completed);
  //   setTasks(filteredTasks);
  // };

  const handleClearCompleted = () => {
    const remainingTasks = tasks.filter(task => !task.completed);
    setTasks(remainingTasks);
  };

  return (
    <div className="TodoList">
      <h2>My Tasks</h2>
      <div className="TodoList-controls">
        {/* <div className='first-three-buttons'> */}
        {/* <button onClick={() => handleSort('default')}>Default</button> */}
        <button onClick={() => handleSort('name')}>Sort by Name</button>
        <button onClick={() => handleSort('date')}>Sort by Time of entry</button>
        {/* </div> */}
        {/* <div className = "last-two-buttons"> */}
        {/* <button onClick={handleFilterCompleted}>Filter Completed</button> */}
        <button onClick={handleClearCompleted}>Remove Completed Tasks</button>
      {/* </div> */}
      </div>
      <TodoForm addTask={addTask} />
      <ul className="TodoList-items">
        {tasks.map(task => (
          <TodoItem
            key={task.id}
            task={task}
            removeTask={removeTask}
            toggleCompletion={toggleCompletion}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
