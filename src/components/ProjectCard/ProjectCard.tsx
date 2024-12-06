import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.scss';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
  return (
    <motion.div 
      className="project-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="project-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="project-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project →
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;