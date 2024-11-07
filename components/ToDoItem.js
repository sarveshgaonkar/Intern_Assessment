import React, { useState } from 'react';

const ToDoItem = ({ task, toggleComplete, deleteTask, editTask, toggleEdit }) => {
  const [newText, setNewText] = useState(task.text);

  const handleSaveEdit = () => {
    if (newText.trim()) {
      editTask(task.id, newText);
    }
  };

  return (
    <li className="flex items-center justify-between p-4 border-b hover:bg-blue-50 cursor-pointer">
      <div className="flex items-center">
        {/* Circle Checkbox */}
        <div
          onClick={() => toggleComplete(task.id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 ${
            task.completed ? 'bg-green-500 border-green-500' : 'border-gray-400'
          }`}
        >
          {task.completed && (
            <span className="text-white text-lg">&#10003;</span> // Checkmark
          )}
        </div>

        {/* Task Text */}
        {task.editing ? (
          <div className="flex items-center">
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="p-2 border border-gray-300 rounded-l-md mr-2"
            />
            <button
              onClick={handleSaveEdit}
              className="bg-green-500 text-white p-2 rounded-r-md hover:bg-green-600"
            >
              Save
            </button>
          </div>
        ) : (
          <span
            className={`text-lg ${
              task.completed ? 'line-through text-gray-500' : ''
            } transition-colors duration-200 hover:text-lightblue`}
          >
            {task.text}
          </span>
        )}
      </div>

      <div className="flex space-x-4">
        {/* Edit Button */}
        {!task.editing && (
          <button
            className="text-yellow-500 hover:text-yellow-700"
            onClick={() => toggleEdit(task.id)}
          >
            Edit
          </button>
        )}

        {/* Delete Button */}
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
