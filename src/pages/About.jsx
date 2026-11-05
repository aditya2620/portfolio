import React, { useState } from "react";
import "./About.css";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Layout, Server, Database, Wrench, Sparkles } from "lucide-react";

const skills = [
  // Languages
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript (ES6+)", category: "Languages" },
  { name: "Core Java", category: "Languages" },
  
  // Frontend
  { name: "React.js", category: "Frontend" },
  { name: "HTML5 & CSS3", category: "Frontend" },
  { name: "Responsive Design", category: "Frontend" },
  { name: "Component-Based Design", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "REST APIs Integration", category: "Backend" },

  // Databases
  { name: "SQL Server (SSMS)", category: "Databases" },
  { name: "Oracle SQL", category: "Databases" },

  // Tools & Clouds
  { name: "Git & GitHub", category: "Tools" },
  { name: "Antigravity IDE", category: "Tools" },
  { name: "Cursor IDE", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "GCP (Google Cloud)", category: "Tools" },
  { name: "AWS (Amazon Web Services)", category: "Tools" }
];

const getCategoryIcon = (category) => {
  switch (category) {
    case "Languages":
      return <Code2 size={18} />;
    case "Frontend":
      return <Layout size={18} />;
    case "Backend":
      return <Server size={18} />;
    case "Databases":
      return <Database size={18} />;
    case "Tools":
      return <Wrench size={18} />;
    default:
      return <Sparkles size={18} />;
  }
};

const timeline = [
  {
    year: "Sept 2024 - Present",
    title: "Associate Software Engineer",
    company: "Instinct Innovations (Mumbai, India)",
    description: "Developing frontend features for TinyCommand.com, a no-code workflow automation platform using React.js and TypeScript. Worked on migrating an existing Pharmacy Management System using Cursor and Antigravity IDEs to SQL Server, optimizing SQL Server queries, and identifying 1000+ testing issues."
  },
  {
    year: "June 2023 - July 2023",
    title: "Web Development Intern",
    company: "Oasis Infobyte (Remote)",
    description: "Developed several client-side applications including a Calculator, Tribute Page, and a To-do List app using HTML, CSS, and JS. Solidified skills in responsive designs and direct DOM manipulations."
  },
  {
    year: "May 2023 - June 2023",
    title: "Web Development Intern",
    company: "Sync Interns (Remote)",
    description: "Built landing pages and user-friendly music application mockups, focusing on device responsiveness and intuitive visual layouts."
  },
  {
    year: "2020 - 2024",
    title: "Bachelor of Computer Engineering",
    company: "A. C. Patil College of Engineering (7.60 CGPA)",
    description: "Covered foundational software architectures, databases, object-oriented concepts, and web technology principles."
  }
];

const leadership = [
  {
    role: "Placement Coordinator",
    org: "Training and Placement Cell, A. C. Patil College",
    date: "June 2023 - May 2024",
    desc: "Coordinated campus recruitment drives, training sessions, and placement activities. Assisted students with interview preparation, resume reviews, and direct employer relations."
  },
  {
    role: "Event Head",
    org: "Vectors - Technical Fest, A. C. Patil College",
    date: "March 2023",
    desc: "Organized and managed a multi-round coding competition. Handled scheduling, logistics, participant coordination, and event execution."
  }
];

export const About = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "Languages", "Frontend", "Backend", "Databases", "Tools"];

  const filteredSkills = activeFilter === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <motion.section 
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-header">
        <h2>About Me</h2>
        <p>
          I am Aditya Basanti, an Associate Software Engineer with nearly 2 years of experience building modern web experiences with React, TypeScript, and SQL databases.
        </p>
      </div>

      <div className="about-content">
        {/* Skills Section */}
        <div className="about-skills">
          <h3 className="section-title">Skills</h3>
          
          <div className="skills-filter">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div className="skills-grid" layout>
            <AnimatePresence mode="popLayout">
              {filteredSkills.map(skill => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <div className="skill-icon-box">
                    {getCategoryIcon(skill.category)}
                  </div>
                  <div className="skill-details">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-category-tag">{skill.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="about-experience">
          <h3 className="section-title">Education & Career</h3>
          
          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div 
                key={index} 
                className="timeline-item"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <span className="timeline-year">{item.year}</span>
                  <h4 className="timeline-title">{item.title}</h4>
                  <div className="timeline-company">{item.company}</div>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div className="about-leadership">
          <h3 className="section-title">Leadership & Activities</h3>
          <div className="leadership-grid">
            {leadership.map((lead, index) => (
              <motion.div
                key={index}
                className="leadership-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <h4 className="leadership-role">{lead.role}</h4>
                <div className="leadership-org">{lead.org}</div>
                <div className="leadership-date">{lead.date}</div>
                <p className="leadership-desc">{lead.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
