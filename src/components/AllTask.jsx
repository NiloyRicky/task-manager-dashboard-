import React from 'react';
import { StarIcon, TrashIcon } from '@heroicons/react/24/outline';

function AllTask({ tasks, onToggleTask, onToggleImportant, onDeleteTask, darkMode }) {
  return (
    <div className={`flex-1 p-6 overflow-auto ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <h1 className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-6`}>All Tasks</h1>
      <div className="space-y-4">
        {tasks.map(task => (
          <div 
            key={task.id} 
            className={`flex items-center space-x-3 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow-sm`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
              className="h-4 w-4 text-green-600"
            />
            <span className={`${task.completed ? 'line-through text-gray-500' : darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              {task.text}
            </span>
            <button 
              onClick={() => onToggleImportant(task.id)}
              className={`ml-auto ${task.important ? 'text-yellow-500' : 'text-gray-400'}`}
            >
              <StarIcon className="h-5 w-5" />
            </button>
            <button 
              onClick={() => onDeleteTask(task.id)}
              className="ml-2 text-red-500"
            >
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTask;