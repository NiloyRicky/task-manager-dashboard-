import React, { useState, useEffect } from 'react';
import { MagnifyingGlassIcon, Squares2X2Icon, MoonIcon, SunIcon, Bars3Icon } from '@heroicons/react/24/outline';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import logo from './logo.png';
import AllTask from './components/AllTask'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Important from './components/Important';
function App() {
  // Load tasks from localStorage on initial load
  
    
  
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  

  const [tasks, setTasks] = useState(() => {
    // Retrieve tasks from local storage or use default tasks
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, text: 'Buy groceries', completed: false, important: false },
      { id: 2, text: 'Finish project report', completed: false, important: true },
      { id: 3, text: 'Call the bank', completed: false, important: false },
    { id: 4, text: 'Schedule dentist appointment', completed: false, important: false },
    { id: 5, text: 'Plan weekend trip', completed: false, important: false },
    { id: 6, text: 'Read a book', completed: true, important: false },
    { id: 7, text: 'Clean the house', completed: true, important: false },
    ];
  });
  const [showSidebar, setShowSidebar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    
    localStorage.setItem('tasks',JSON.stringify(tasks));

  }, [tasks]);

  const toggleTask = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleImportant = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      important: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }
  
  if (!isAuthenticated) {
    return <Login />;
  }
  return (
    <Router>
      <div className={`flex h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
        {/* Sidebar with transition */}
        <div
          className={`fixed inset-y-0 left-0 transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-30 md:relative md:translate-x-0`}
        >
          <Sidebar tasks={tasks} darkMode={darkMode} />
        </div>

        {/* Overlay for mobile */}
        {showSidebar && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={() => setShowSidebar(false)}
          ></div>
        )}

        <div className="flex-1 flex flex-col">
          <header
            className={`${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            } p-4 flex justify-between items-center border-b transition-colors duration-200`}
          >
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                className={`${
                  darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
              <div className="text-green-600 font-semibold ">
                <img src={logo} />
              </div>
              <span className="text-green-600 font-bold text-2xl font-sans doit ">DoIt</span>
            </div>
            <div className="flex items-center space-x-4">
              <MagnifyingGlassIcon className={`h-6 w-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <Squares2X2Icon className={`h-6 w-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'} transition-colors duration-200`}
              >
                {darkMode ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </header>
          <Routes>
            <Route
              path="/"
              element={
                <TaskList
                  tasks={tasks}
                  onToggleTask={toggleTask}
                  onToggleImportant={toggleImportant}
                  onAddTask={addTask}
                  darkMode={darkMode}
                />
              }
            />
            <Route
              path="/allTask"
              element={
                <AllTask
                  tasks={tasks}
                  onToggleTask={toggleTask}
                  onToggleImportant={toggleImportant}
                  onDeleteTask={deleteTask}
                  darkMode={darkMode}
                />
              }
            />

<Route
              path="/important"
              element={
                <Important
                  tasks={tasks}
                  onToggleTask={toggleTask}
                  onToggleImportant={toggleImportant}
                  onDeleteTask={deleteTask}
                  darkMode={darkMode}
                />
              }
            />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;