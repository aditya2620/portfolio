import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Profile from "../assets/Capture.png";

export const Home = () => {
  const words = ["Associate Software Engineer", "React.js Developer", "TypeScript Developer", "Full Stack Engineer"];
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
        setSpeed(50);
      } else {
        setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
        setSpeed(100);
      }

      if (!isDeleting && currentText === currentWord) {
        // Pause at the end
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setSpeed(300);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, speed]);

  return (
    <section className="home-container">
      <div className="home-left">
        <motion.div 
          className="profile-circle"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 1.2, bounce: 0.3 }}
          whileHover={{ 
            scale: 1.03,
            boxShadow: "0px 15px 35px rgba(var(--accent-rgb), 0.3)"
          }}
        >
          <img src={Profile} alt="Profile" className="profile-picture" width="400" height="400" loading="eager" />
        </motion.div>
      </div>
      <div className="home-right">
        <div className="home-content">
          <motion.h1 
            className="home-heading"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm Aditya!
            <span className="typewriter-text">
              {currentText}
              <span className="typewriter-cursor">|</span>
            </span>
          </motion.h1>
          <motion.p 
            className="home-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Associate Software Engineer with experience developing modern, high-performance web applications using React.js, TypeScript, JavaScript, and Node.js. Specializing in component design, REST API integrations, and database operations.
          </motion.p>
        </div>
        <div className="circle-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/About" className="circle circle1">
              <span>About</span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <Link to="/Project" className="circle circle2">
              <span>Projects</span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link to="/Contact" className="circle circle3">
              <span>Contact</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
