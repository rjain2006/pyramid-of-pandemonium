import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-200 p-4 shadow-lg flex justify-between items-center">
      <h1 className="text-2xl font-bold">Pyramid of Pandemonium</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-green-700">Home</Link>
        <Link to="/select-algorithm" className="hover:text-green-700">Algorithms</Link>
        <Link to="/dashboard" className="hover:text-green-700">Dashboard</Link>
        <Link to="/quiz" className="hover:text-green-700">Quiz</Link>
      </nav>
    </header>
  );
};

export default Header
