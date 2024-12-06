import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Laptop } from 'lucide-react';
import './Header.scss';

const Header: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/tools', label: 'Tools' },
    { path: '/projects', label: 'Projects' },
    { path: '/blogs', label: 'Blogs' }
  ];

  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="header__logo">
          <Laptop size={24} />
          <span>Portfolio</span>
        </Link>

        <nav className="header__nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`header__nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <motion.span
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.span>
              {location.pathname === item.path && (
                <motion.div
                  className="header__nav-indicator"
                  layoutId="nav-indicator"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;