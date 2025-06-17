// src/components/ProjectsCarouselSectionElegant.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Language } from '../types';

interface Project {
  titleEs: string;
  titleEn: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    titleEs: 'Sistema de transporte de relaves – Quellaveco',
    titleEn: 'Tailings Transport System – Quellaveco',
    image: '1.jpg',
    link: '/proyectos/quellaveco-transport'
  },
  {
    titleEs: 'Presa de relaves – Proyecto Quellaveco',
    titleEn: 'Tailings Dam – Quellaveco Project',
    image: '/images/quellaveco-dam.jpg',
    link: '/proyectos/quellaveco-dam'
  },
  {
    titleEs: 'Planta de procesamiento – Cerro Verde',
    titleEn: 'Processing Plant – Cerro Verde Project',
    image: '/images/cerro-verde-plant.jpg',
    link: '/proyectos/cerro-verde-plant'
  }
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 400 : -400, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir < 0 ? 400 : -400, opacity: 0 })
};

interface Props { currentLanguage: Language; }

const ProjectsCarouselSectionElegant: React.FC<Props> = ({ currentLanguage }) => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const paginate = (dir: number) => {
    const next = (page + dir + projects.length) % projects.length;
    setPage([next, dir]);
  };
  const project = projects[page];
  const title = currentLanguage.code === 'es' ? project.titleEs : project.titleEn;

  return (
    <section className="section-padding bg-[#CFECF6] relative overflow-hidden" id="projects">
      <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#009CD1] text-center mb-12">
        {currentLanguage.code === 'es' ? 'Nuestros Proyectos' : 'Our Projects'}
      </h2>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Flechas fuera del recuadro */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/30 hover:bg-white/50 transition"
        >
          <ChevronLeft className="w-6 h-6 text-[#009CD1]" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/30 hover:bg-white/50 transition"
        >
          <ChevronRight className="w-6 h-6 text-[#009CD1]" />
        </button>

        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 100, damping: 25 }}
            className="relative flex items-stretch h-[550px] rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Imagen de fondo */}
            <motion.img
              src={project.image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />

            {/* Overlay degradado */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#009CD1]/80 via-transparent to-transparent" />

            {/* Tarjeta de texto en vidrio esmerilado */}
            <div className="relative z-10 flex-1 flex items-center">
              <div className="backdrop-blur-lg bg-white/30 border border-white/50 rounded-2xl p-8 md:p-12 max-w-lg mx-6">
                {/* Pill legible */}
                <span className="inline-block bg-[#009CD1]/90 text-white uppercase text-sm sm:text-base font-semibold tracking-wide px-3 py-1 rounded-full">
                  {currentLanguage.code === 'es' ? 'Proyectos' : 'Projects'}
                </span>
                <h3 className="mt-4 text-3xl lg:text-4xl font-display font-bold text-white leading-tight">
                  {title}
                </h3>
                <motion.a
                  href={project.link}
                  whileHover={{ x: 4 }}
                  className="mt-6 inline-flex items-center text-white font-semibold tracking-wide hover:text-[#32A836] transition-colors"
                >
                  {currentLanguage.code === 'es' ? 'Ver más' : 'Learn more'}
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>
            </div>

            {/* Indicadores (dots) */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {projects.map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === page ? 'bg-[#009CD1] scale-110' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsCarouselSectionElegant;