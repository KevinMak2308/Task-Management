import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage'; 
import Task from './components/Task';
import NavBar from './components/NavBar';

// App.js er den primære compoenent der håndterer ruter og navigation
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<Task />} />
      </Routes>
    </Router>
  );
}

export default App;
