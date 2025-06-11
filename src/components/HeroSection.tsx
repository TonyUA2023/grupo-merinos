import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Play, Award, Users, Building, Clock } from 'lucide-react';
import { useParallax, useMousePosition } from '../hooks/useScrollAnimation';
import type { Language } from '../types';
import { companyStats } from '../data/companyData';

interface HeroSectionProps {
  currentLanguage: Language;
}

const HeroSection: React.FC<HeroSectionProps> = ({ currentLanguage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  const mousePosition = useMousePosition();
  
  const heroImages = [
    '/images/hero/construction-1.jpg',
    '/images/hero/construction-2.jpg',
    '/images/hero/construction-3.jpg'
  ];

  const heroContent = {
    es: {
      title: "Construyendo el",
      highlight: "Futuro del Perú",
      subtitle: "Más de 25 años de experiencia en ingeniería y construcción de clase mundial",
      cta1: "Nuestros Proyectos",
      cta2: "Ver Video",
      stats: [
        { icon: Building, value: companyStats.projectsCompleted, label: "Proyectos Completados" },
        { icon: Clock, value: companyStats.yearsExperience, label: "Años de Experiencia" },
        { icon: Users, value: companyStats.happyClients, label: "Clientes Satisfechos" },
        { icon: Award, value: companyStats.teamMembers, label: "Profesionales" }
      ]
    },
    en: {
      title: "Building Peru's",
      highlight: "Future",
      subtitle: "Over 25 years of experience in world-class engineering and construction",
      cta1: "Our Projects",
      cta2: "Watch Video",
      stats: [
        { icon: Building, value: companyStats.projectsCompleted, label: "Completed Projects" },
        { icon: Clock, value: companyStats.yearsExperience, label: "Years of Experience" },
        { icon: Users, value: companyStats.happyClients, label: "Happy Clients" },
        { icon: Award, value: companyStats.teamMembers, label: "Professionals" }
      ]
    }
  };

  const content = heroContent[currentLanguage.code];

  // Efectos de paralaje
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, 200]);

  // Cambio automático de slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Efecto de mouse parallax
  const mouseXOffset = (mousePosition.x - window.innerWidth / 2) * 0.01;
  const mouseYOffset = (mousePosition.y - window.innerHeight / 2) * 0.01;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${image})`,
              y: backgroundY
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1
            }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        ))}
        
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/80 via-secondary-800/60 to-primary-900/80" />
        
        {/* Overlay con patrón */}
        <div className="absolute inset-0 bg-black/20" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(249, 115, 22, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      {/* Elementos decorativos animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Círculos flotantes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-xl"
            style={{
              width: `${(i + 1) * 60}px`,
              height: `${(i + 1) * 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              x: mouseXOffset * (i + 1),
              y: mouseYOffset * (i + 1)
            }}
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -30, 30, 0],
              scale: [1, 1.1, 0.9, 1],
              opacity: [0.3, 0.6, 0.3, 0.3]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}

        {/* Líneas geométricas */}
        <svg className="absolute inset-0 w-full h-full">
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="rgba(249, 115, 22, 0.1)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0], 
                opacity: [0, 0.5, 0] 
              }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          ))}
        </svg>

        {/* Partículas flotantes */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 6,
              delay: Math.random() * 4,
              repeat: Infinity,
              ease: 'easeOut'
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <motion.div 
        className="relative z-10 text-center text-white px-4"
        style={{ y: textY }}
      >
        <div className="container-custom">
          {/* Badge de empresa */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="w-6 h-6 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full flex items-center justify-center"
            >
              <span className="text-xs font-bold text-white">GM</span>
            </motion.div>
            <span className="text-sm font-medium">
              {currentLanguage.code === 'es' ? 'Líderes en Construcción' : 'Construction Leaders'}
            </span>
          </motion.div>

          {/* Título principal */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
              <span className="block">{content.title}</span>
              <motion.span 
                className="block bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent"
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: '100% 50%' }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              >
                {content.highlight}
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {content.subtitle}
          </motion.p>

          {/* Botones de acción */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 20px 40px rgba(249, 115, 22, 0.4)' 
              }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center space-x-2 min-w-[200px] justify-center"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>{content.cta1}</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="w-5 h-5 transform rotate-[-90deg]" />
              </motion.div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center space-x-3 min-w-[200px] justify-center hover:bg-white/20"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center"
              >
                <Play className="w-4 h-4 ml-1" />
              </motion.div>
              <span>{content.cta2}</span>
            </motion.button>
          </motion.div>

          {/* Estadísticas */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {content.stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect p-6 rounded-xl text-center group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 2 + index * 0.2 }}
                    className="text-2xl md:text-3xl font-bold text-primary-300 mb-2"
                  >
                    {stat.value}+
                  </motion.div>
                  <div className="text-sm text-primary-100 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm opacity-80">
            {currentLanguage.code === 'es' ? 'Desliza para explorar' : 'Scroll to explore'}
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-primary-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Indicadores de slide */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        {heroImages.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-primary-500' : 'bg-white/30'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Barra de progreso de scroll */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 z-50"
        style={{
          width: useTransform(scrollY, [0, 500], ['0%', '100%'])
        }}
      />
    </section>
  );
};

export default HeroSection;