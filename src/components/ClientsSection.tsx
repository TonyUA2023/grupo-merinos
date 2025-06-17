// src/components/ClientsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { Language } from '../types';

interface Client {
  name: string;
  logo: string;
  alt: string;
}

const clients: Client[] = [
  { name: 'Anglo American', logo: '/logos/anglo-american.png', alt: 'Anglo American' },
  { name: 'Antamina',       logo: '/logos/antamina.png',        alt: 'Antamina' },
  { name: 'Southern Copper',logo: '/logos/southern-copper.png', alt: 'Southern Copper' },
  { name: 'Pan American',   logo: '/logos/pan-american.png',    alt: 'Pan American Silver' },
  { name: 'Cerro Verde',    logo: '/logos/cerro-verde.png',     alt: 'Cerro Verde' },
  { name: 'Las Bambas',     logo: '/logos/las-bambas.png',      alt: 'Las Bambas' },
  { name: 'Fluor',          logo: '/logos/fluor.png',           alt: 'Fluor' },
  { name: 'Bechtel',        logo: '/logos/bechtel.png',         alt: 'Bechtel' },
  { name: 'Duke Energy',    logo: '/logos/duke-energy.png',     alt: 'Duke Energy' },
  { name: 'Engie',          logo: '/logos/engie.png',           alt: 'Engie' },
  { name: 'Cemento Andino', logo: '/logos/cemento-andino.png',  alt: 'Cemento Andino' },
  { name: 'Pluspetrol',     logo: '/logos/pluspetrol.png',      alt: 'Pluspetrol' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 12 }
  }
};

interface ClientsSectionProps {
  currentLanguage: Language;
}

const ClientsSection: React.FC<ClientsSectionProps> = ({ currentLanguage }) => (
  <section className="section-padding bg-[#CFECF6] overflow-hidden" id="clients">
    <div className="container-custom mx-auto">
      {/* Título */}
      <motion.h2
        className="flex items-center justify-center text-3xl md:text-4xl font-display font-bold text-[#009CD1] mb-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <ChevronRight className="w-6 h-6 text-[#32A836] mr-3" />
        {currentLanguage.code === 'es'
          ? 'Nuestros principales clientes'
          : 'Our Key Clients'}
      </motion.h2>

      {/* Grid de logos */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {clients.map((c, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.1, 
              boxShadow: '0 10px 20px rgba(0,0,0,0.15)' 
            }}
            className="flex items-center justify-center p-6 bg-white/20 backdrop-blur-lg rounded-2xl transition-shadow"
          >
            <img
              src={c.logo}
              alt={c.alt}
              className="max-h-16 sm:max-h-20 md:max-h-24 object-contain filter grayscale hover:filter-none transition-filter duration-500"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ClientsSection;