import React, { useState } from "react";
import "./Project.css";
import { Search, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "TinyCommand.com",
    description:
      "A no-code workflow automation platform. Contributed to the development of frontend features, built reusable React components, integrated REST APIs, and worked under Agile sprint planning methodologies.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    languages: ["React.js", "TypeScript", "REST APIs", "Agile"],
    category: "React",
    link: "https://TinyCommand.com",
  },
  {
    name: "Pharmacy Management System",
    description:
      "Migrated an existing Pharmacy Management System to SQL Server for improved application performance utilizing Cursor and Antigravity IDEs. Developed modules and optimized database queries.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
    languages: ["React.js", "Node.js", "SQL Server", "Cursor IDE", "Antigravity IDE"],
    category: "JavaScript",
    link: null,
  },
  {
    name: "Quiz App",
    description:
      "A comprehensive quiz web application with a focus on user authentication, real-time quiz functionality, and detailed result tracking. The application is built from scratch without using external APIs, with all quiz questions created manually",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=600&auto=format&fit=crop",
    languages: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    link: "https://quizz-go.netlify.app/",
  },
  {
    name: "E-commerce Platform",
    description:
      "A fully functional e-commerce website with key features such as user authentication, item management, and seamless data integration using APIs. The project demonstrates strong front-end development skills with a focus on responsive design and user experience",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d296e?q=80&w=600&auto=format&fit=crop",
    languages: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    link: "https://aditya2620.github.io/E-commerce-website/",
  },
  {
    name: "Portfolio Website",
    description:
      "A personal developer portfolio website designed with responsive structures, smooth Framer Motion animations, glassmorphism UI accents, and floating interactive tech background overlays.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
    languages: ["React.js", "Vite", "Framer Motion", "CSS3"],
    category: "React",
    link: "https://aditya2620.github.io/portfolio/",
  },
  {
    name: "Web Internship Projects",
    description: "Built responsive landing pages, interactive calculators, tribute showcases, and custom music player structures using vanilla HTML, CSS, and JavaScript during remote internships.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop",
    languages: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    category: "JavaScript",
    link: "https://github.com/aditya2620/Sync-interns_Tasks",
  },
];

export const Project = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "JavaScript", "React"];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.languages.some(lang => lang.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesFilter = activeFilter === "All" || project.category === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <motion.section 
      className="projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>A selection of projects that showcase my frontend skills, engineering principles, and interactive design values.</p>
      </div>

      <div className="projects-controls">
        <div className="search-bar">
          <span className="search-icon">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search projects or technologies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="projects-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div className="project-grid" layout>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              className="project-card"
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6 }}
            >
              <div className="project-img-container">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                  width="380"
                  height="200"
                  loading="lazy"
                />
              </div>
              <div className="project-body">
                <h3>{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.languages.map((lang) => (
                    <span key={lang} className="project-tag">
                      {lang}
                    </span>
                  ))}
                </div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    <span>Live Project</span>
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <button
                    className="project-link-btn disabled"
                    disabled
                  >
                    <span>Private Project</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div 
          className="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ textAlign: "center", padding: "3rem", color: "var(--text-muted)" }}
        >
          <p>No projects match your search criteria.</p>
        </motion.div>
      )}
    </motion.section>
  );
};
