import React from 'react';
import { motion } from 'framer-motion';
import type { Language } from '../types';

interface ProjectsPageProps {
  currentLanguage: Language;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ currentLanguage }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 min-h-screen"
    >
      <div className="container-custom py-16">
        <h1 className="text-4xl font-bold text-secondary-900 mb-8">
          {currentLanguage.code === 'es' ? 'Nuestros Proyectos' : 'Our Projects'}
        </h1>
        <p className="text-lg text-secondary-600">
          {currentLanguage.code === 'es' 
            ? 'Página de proyectos en desarrollo...' 
            : 'Projects page under development...'
          }
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;