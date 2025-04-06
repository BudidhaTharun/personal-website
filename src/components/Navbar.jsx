import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home, GraduationCap, Code, Briefcase, Mail, FileText, Menu, X
} from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Portfolio
          </Link>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`flex items-center space-x-1 ${isActive('/')}`}>
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/education" className={`flex items-center space-x-1 ${isActive('/education')}`}>
              <GraduationCap size={18} />
              <span>Education</span>
            </Link>
            <Link to="/skills" className={`flex items-center space-x-1 ${isActive('/skills')}`}>
              <Code size={18} />
              <span>Skills</span>
            </Link>
            <Link to="/projects" className={`flex items-center space-x-1 ${isActive('/projects')}`}>
              <Briefcase size={18} />
              <span>Projects</span>
            </Link>
            <Link to="/contact" className={`flex items-center space-x-1 ${isActive('/contact')}`}>
              <Mail size={18} />
              <span>Contact</span>
            </Link>
            <Link to="/resume" className={`flex items-center space-x-1 ${isActive('/resume')}`}>
              <FileText size={18} />
              <span>Resume</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-4 px-2 pb-4">
            <Link to="/" onClick={toggleMenu} className={`block ${isActive('/')}`}>
              <div className="flex items-center space-x-2">
                <Home size={18} />
                <span>Home</span>
              </div>
            </Link>
            <Link to="/education" onClick={toggleMenu} className={`block ${isActive('/education')}`}>
              <div className="flex items-center space-x-2">
                <GraduationCap size={18} />
                <span>Education</span>
              </div>
            </Link>
            <Link to="/skills" onClick={toggleMenu} className={`block ${isActive('/skills')}`}>
              <div className="flex items-center space-x-2">
                <Code size={18} />
                <span>Skills</span>
              </div>
            </Link>
            <Link to="/projects" onClick={toggleMenu} className={`block ${isActive('/projects')}`}>
              <div className="flex items-center space-x-2">
                <Briefcase size={18} />
                <span>Projects</span>
              </div>
            </Link>
            <Link to="/contact" onClick={toggleMenu} className={`block ${isActive('/contact')}`}>
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <span>Contact</span>
              </div>
            </Link>
            <Link to="/resume" onClick={toggleMenu} className={`block ${isActive('/resume')}`}>
              <div className="flex items-center space-x-2">
                <FileText size={18} />
                <span>Resume</span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
