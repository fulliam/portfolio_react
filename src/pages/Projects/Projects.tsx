import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { Code, Database, Globe } from 'lucide-react';
import './Projects.scss';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Financial Solutions",
      description: "Tactical financial solutions for global needs",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
      link: "/projects/financial"
    },
    {
      title: "E-Commerce Platform",
      description: "Modern shopping experience with React and Node.js",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2000",
      link: "/projects/ecommerce"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio with modern animations",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
      link: "/projects/portfolio"
    }
  ];

  return (
    <section className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <div className="tech-stack">
          <motion.div 
            className="tech-item"
            whileHover={{ y: -5 }}
          >
            <Code size={24} />
            <span>Frontend Development</span>
          </motion.div>
          <motion.div 
            className="tech-item"
            whileHover={{ y: -5 }}
          >
            <Database size={24} />
            <span>Backend Systems</span>
          </motion.div>
          <motion.div 
            className="tech-item"
            whileHover={{ y: -5 }}
          >
            <Globe size={24} />
            <span>Web Applications</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;