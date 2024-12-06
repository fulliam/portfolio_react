import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './HomeGrid.scss';

const HomeGrid: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Financial Solutions',
      description: 'Tactical financial solutions for global needs',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
      isLarge: true
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Modern shopping experience',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2000'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Personal portfolio with animations',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000'
    }
  ];

  return (
    <div className="home-grid">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className={`grid-item ${project.isLarge ? 'grid-item--large' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: project.id * 0.1 }}
        >
          <img src={project.image} alt={project.title} />
          <div className="grid-item__content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ExternalLink size={20} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HomeGrid;