// /frontend/src/components/ProductivityTracker.jsx
import React, { useState } from 'react';

const ProductivityTracker = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    const dueDate = prompt('Enter task due date (YYYY-MM-DD HH:mm):');
    if (newTask && dueDate) {
      setTasks([...tasks, { text: newTask, dueDate: new Date(dueDate) }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Productivity Tracker</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.text} by {task.dueDate.toLocaleString()}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductivityTracker;
