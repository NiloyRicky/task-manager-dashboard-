Task Manager Application

Overview

This is a feature-rich Task Manager Application built using modern web development technologies. The app provides users with the ability to manage tasks efficiently with features like marking tasks as important, filtering tasks, and a dedicated page for starred tasks. It includes a dark theme and leverages Redux for state management.


---

Tech Stack

Frontend

React.js: Component-based UI library for building dynamic interfaces.

Redux: For centralized state management.

Chart.js: For visualizing data.

Tailwind CSS: Utility-first CSS framework for styling.

React Router: For routing and navigation.




LocalStorage: For persisting data on the client side



---

Features

Core Features

Task Management:

Add, delete, update tasks.

Mark tasks as completed.

Star important tasks.


Filtering and Organization:

View all tasks or only important tasks in separate tabs.

Tasks organized with checkboxes and labels.


Chart Visualization:

Displays task completion data in an interactive chart using Chart.js.


Dark Mode:

Toggle between light and dark themes.


Persistent Storage:

Tasks are saved locally using localStorage.



Interactive Functionalities

Dynamic routing using React Router (e.g., /all-tasks, /important).

Smooth animations and interactivity.

Real-time updates of tasks in all views.



---

Getting Started

Prerequisites

Ensure you have the following installed:

Node.js (v14 or higher)

npm or yarn



---

Installation

1. Clone the repository:

git clone <repository-URL>


2. Navigate to the project directory:

cd project


3. Install dependencies:

npm install




---

Run the Application

1. Start the development server:

npm run dev


2. Open your browser and visit:

http://localhost:5173




---

Usage

Login

1. Enter any random username and password in the Login form.


2. The app will simulate login functionality using Redux to manage the user's authentication state.



Task Management

1. Navigate to the All Tasks page to view all tasks.


2. Use the Important Tab to view tasks marked as starred.


3. Add a new task using the input field and submit button.


4. Mark tasks as completed by checking the checkbox.


5. Delete tasks with the delete icon.




---

Code Structure

Folder Structure

src/
├── components/
│   ├── Sidebar.jsx
│   ├── TaskList.jsx
│   ├── AllTask.jsx
│   ├── Important.jsx
│   └── ChartView.jsx
├── store/
│   ├── slices/
│   │   └── authSlice.js
│   └── store.js
├── App.jsx
├── index.jsx
└── styles.css

Redux Store

authSlice.js: Manages authentication state (isAuthenticated, user).

store.js: Combines slices and configures the Redux store.



---

Customization

Adding New Features

Extend the tasks state in the TaskList component to include more attributes like deadlines or tags.

Add more routes for different task views or analytics.



---

Dependencies

The following libraries are used in this project:

react-redux

react-router-dom

chart.js

tailwindcss

@reduxjs/toolkit



---
