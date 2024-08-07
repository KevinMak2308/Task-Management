import React from 'react';
import '../index.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/tasks">Tasks</a></li>
      </ul>
    </div>
  );
};

export default NavBar;
