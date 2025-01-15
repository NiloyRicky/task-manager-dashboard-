import React, { useState } from 'react';
import { StarIcon, BellIcon, CalendarIcon,ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline';

function TaskList({ tasks, onToggleTask, onToggleImportant, onAddTask, darkMode }) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      onAddTask(newTask.trim());
      setNewTask('');
    }
  };

  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className={`flex-1 p-6 overflow-auto ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow-sm`}>
          <div className="flex items-center space-x-4 mb-4">
            <BellIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
            <ArrowPathRoundedSquareIcon class="h-5 w-5 text-gray-400" />
            <CalendarIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
            
          </div>
          <input
            type="text"
            placeholder="Add a Task"
            className={`w-full p-2 border-b ${
              darkMode 
                ? 'bg-gray-800 text-gray-100 border-gray-700 focus:border-green-500' 
                : 'bg-white text-gray-900 border-gray-200 focus:border-green-500'
            } focus:outline-none`}
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button type="submit" className="mt-2 px-4 py-1 bg-green-500 text-white rounded float-right hover:bg-green-600">
            ADD TASK
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {activeTasks.map(task => (
          <div 
            key={task.id} 
            className={`flex items-center space-x-3 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } p-4 rounded-lg shadow-sm`}
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
          </div>
        ))}

        {completedTasks.length > 0 && (
          <div className="mt-8">
            <h3 className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>Completed</h3>
            {completedTasks.map(task => (
              <div 
                key={task.id} 
                className={`flex items-center space-x-3 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } p-4 rounded-lg shadow-sm mb-2`}
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onToggleTask(task.id)}
                  className="h-4 w-4 text-green-600"
                />
                <span className={`line-through ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  {task.text}
                </span>
                <button 
                  onClick={() => onToggleImportant(task.id)}
                  className={`ml-auto ${task.important ? 'text-yellow-500' : 'text-gray-400'}`}
                >
                  <StarIcon className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskList;