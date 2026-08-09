import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import coding from "../assets/coding.png";
import "./Header.css";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-logo-title">
        <motion.img 
          src={coding} 
          alt="logo" 
          className="header-logo"
          width="40"
          height="40"
          whileHover={{ rotate: 15, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <Link to="/" className="header-title" onClick={() => setIsMenuOpen(false)}>
          Aditya Basanti
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="header-nav-desktop">
        <NavLink to="/" className="header-link">
          Home
        </NavLink>
        <NavLink to="/About" className="header-link">
          About
        </NavLink>
        <NavLink to="/Project" className="header-link">
          Project
        </NavLink>
        <NavLink to="/Contact" className="header-link">
          Contact
        </NavLink>
      </nav>

      <div className="header-actions">
        <motion.button
          onClick={toggleTheme}
          className="theme-toggle"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? (
            <Sun className="theme-icon sun" size={20} />
          ) : (
            <Moon className="theme-icon moon" size={20} />
          )}
        </motion.button>

        {/* Hamburger Menu Icon (Mobile Only) */}
        <button 
          className="menu-toggle-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-nav-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="mobile-nav-links">
              <NavLink to="/" className="header-link" onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/About" className="header-link" onClick={() => setIsMenuOpen(false)}>
                About
              </NavLink>
              <NavLink to="/Project" className="header-link" onClick={() => setIsMenuOpen(false)}>
                Project
              </NavLink>
              <NavLink to="/Contact" className="header-link" onClick={() => setIsMenuOpen(false)}>
                Contact
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
