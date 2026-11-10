import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, User, Mail } from "lucide-react";
import Profile from "../assets/Capture.png";

export const Home = () => {
  return (
    <section className="home-container">
      <div className="home-left">
        <motion.div 
          className="profile-frame"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <img src={Profile} alt="Aditya Basanti" className="profile-picture" width="400" height="400" loading="eager" />
        </motion.div>
      </div>
      <div className="home-right">
        <div className="home-content">
          <motion.div 
            className="status-pill"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="status-indicator"></span>
            <span>Available for frontend & engineering roles</span>
          </motion.div>

          <motion.h1 
            className="home-heading"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Aditya Basanti
            <span className="home-role">Associate Software Engineer</span>
          </motion.h1>

          <motion.p 
            className="home-description"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Building high-performance web applications, workflow automation interfaces, and robust component systems with React.js, TypeScript, and modern frontend tools.
          </motion.p>
        </div>

        {/* Structured Call to Action Hierarchy */}
        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/Project" className="btn btn-primary">
            <span>Explore Projects</span>
            <ArrowRight size={16} />
          </Link>
          <Link to="/About" className="btn btn-secondary">
            <User size={16} />
            <span>About Me</span>
          </Link>
          <Link to="/Contact" className="btn btn-ghost">
            <Mail size={16} />
            <span>Contact</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
