import React from 'react';
import image from "../image.png";
import {Chart as ChartJs,defaults} from 'chart.js/auto';
import {Doughnut,Bar,Line} from 'react-chartjs-2';
import {Link, useLocation}  from "react-router-dom"
import { 
  ClipboardIcon,
  InformationCircleIcon, 
  CalendarIcon, 
  StarIcon,
  ClockIcon,
  UserIcon,
  PlusIcon
} from '@heroicons/react/24/outline';

function Sidebar({ tasks, darkMode }) {
  const todayTasks = tasks.filter(task => !task.completed).length;//pending mei bacha hua ha
  const done=tasks.filter(task => task.completed).length;
  const location=useLocation();

  return (
    <div className={`w-64 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r flex flex-col h-full`}>
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-8 flex-col gap-2">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img 
              src={image}
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>Hey, ABCD</p>
          </div>
        </div>

        <nav className="space-y-2">
          <Link to="/allTask" className={`flex items-center space-x-3 p-2 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} 
           ${location.pathname==='/allTask'?"bg-blue-500 text-white":" text-gray-700"}
          rounded`}>
            <ClipboardIcon className="h-5 w-5" />
            <span>All Tasks</span>
          </Link>
          <Link to="/" className={`flex items-center space-x-3 p-2 ${darkMode ? ' text-gray-300' : 'hover:bg-gray-100 text-gray-700'}
          ${location.pathname==='/'?"bg-blue-500 text-white":" text-gray-700"} rounded`}>
            <CalendarIcon className="h-5 w-5" />
            <span>Today</span>
          </Link>
          <Link to="/important" className={`flex items-center space-x-3 p-2 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}
           ${location.pathname==='/important'?"bg-blue-500 text-white":" text-gray-700"} rounded`}>
            <StarIcon className="h-5 w-5" />
            <span>Important</span>
          </Link>
          <a href="#" className={`flex items-center space-x-3 p-2 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} rounded`}>
            <ClockIcon className="h-5 w-5" />
            <span>Planned</span>
          </a>
          <a href="#" className={`flex items-center space-x-3 p-2 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} rounded`}>
            <UserIcon className="h-5 w-5" />
            <span>Assigned to me</span>
          </a>
        </nav>

        <button className={`mt-4 w-full ${
          darkMode 
            ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
            : 'border-gray-200 text-gray-700 hover:bg-gray-50'
        } border-2 p-2 rounded flex items-center justify-center space-x-2`}>
          <PlusIcon className="h-5 w-5" />
          <span>Add list</span>
        </button>

        <div className="mt-8">
          <div className={`flex  items-center justify-between text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            
           <div className='flex  gap-28'>
           <span className=' font-semi-bold text-base'>Today Tasks</span>
            <InformationCircleIcon class="h-6 w-6 text-gray-500" />
            </div>
           
           
          </div>
          <span className="text-2xl font-bold">{todayTasks}</span>
          <div className={`mt-2 ${darkMode ? 'bg-gray-700' : 'bg-white'}  ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
            
            <Doughnut
              data={{
                labels:["PENDING","DONE"], //X axis
                datasets:[{
                  label:"",
                  data:[todayTasks,done],//y axis
                  backgroundColor:[
                    "#00FF00",
                    "#006400",
                    
                  ] ,
                  
                }]
                            }}
                            
                            options={{
                              plugins: {
                                
                                 legend:{
                                  display: true,
                                  position:"bottom",
                                  labels:{
                                    usePointStyle:true,
                                    pointStyle:"circle",
                                    padding:25,
                                  },
                                 }
                                
                              }
                            }}
                            
                            />

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;