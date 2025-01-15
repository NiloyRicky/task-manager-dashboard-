import React, { createContext, useContext, useEffect, useState } from "react";


// Create context
const create = createContext();

function Context({ children }) {
    


  return (
    <create.Provider
      value={{tasks, setTasks,showSidebar, 
        setShowSidebar,toggleTask,toggleImportant,addTask,toggleDarkMode
        
      }}
    >
      {children}
    </create.Provider>
  );
}

export const useGlobal = () => useContext(create);
export default Context;