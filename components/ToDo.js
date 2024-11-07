import React, { useState, useEffect } from 'react';
import ToDoItem from './ToDoItem';

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Update localStorage whenever the tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim()) {
      const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
        editing: false,  // Flag for editing
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTask('');
    }
  };

  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  const editTask = (id, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: newText, editing: false } : task
      )
    );
  };

  const toggleEdit = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, editing: !task.editing } : task
      )
    );
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl mx-auto mt-10">
      <div className="flex items-center mb-6">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add new list item"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition-colors"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      <ul className="list-none">
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
            toggleEdit={toggleEdit}
          />
        ))}
      </ul>

      <div className="flex justify-between mt-4">
        <p className="text-sm">
         Items: <strong>{tasks.length}</strong>
        </p>
        <button
          className="text-blue-500 hover:text-blue-700"
          onClick={clearAllTasks}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default ToDo;
