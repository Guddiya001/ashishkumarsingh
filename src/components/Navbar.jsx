import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav>
      <div className="logo">
        <h1>ASHISH SINGH</h1>
        Senior Software Engineer | GenAI & Frontend Specialist
      </div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/case-studies">Case Studies</Link></li>
      </ul>
      <button onClick={toggleTheme} className="theme-toggle">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
