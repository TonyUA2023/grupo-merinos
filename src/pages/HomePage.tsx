import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import type { Language } from '../types';
import ProjectsCarouselSection from '../components/ProjectsCarouselSection';
import ClientsSection from '../components/ClientsSection';

interface HomePageProps {
  currentLanguage: Language;
}

const HomePage: React.FC<HomePageProps> = ({ currentLanguage }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection currentLanguage={currentLanguage} />
      
      {/* Sección de estadísticas de la empresa */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        {/* Elementos decorativos animados */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent-200 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            {/* Título principal */}
            <motion.div 
              className="text-center mb-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl lg:text-4xl font-display font-bold text-secondary-900 "
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {currentLanguage.code === 'es' 
                  ? 'Construimos oportunidades para todos de manera sostenible.' 
                  : 'We build opportunities for everyone in a sustainable way.'
                }
              </motion.h2>
              <motion.h3 
                variants={itemVariants}
                className="text-2xl lg:text-3xl font-bold text-secondary-800 mb-20"
                style={{ y: y1, opacity }}
              >
                {currentLanguage.code === 'es'
                  ? 'Somos un grupo empresarial peruano con más de 67 años de experiencia y de alcance regional.'
                  : 'We are a Peruvian business group with more than 67 years of experience and regional reach.'
                }
              </motion.h3>
              <motion.p 
                variants={itemVariants}
                className="text-lg text-secondary-600 max-w-4xl mx-auto"
                whileInView={{ 
                  opacity: [0, 1],
                  y: [30, 0]
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {currentLanguage.code === 'es'
                  ? 'Nos especializamos en servicios diversificados e integrados de ingeniería y construcción, servicios mineros y concesiones de infraestructura. Contamos con experiencia en Perú, Chile y Colombia.'
                  : 'We specialize in diversified and integrated engineering and construction services, mining services and infrastructure concessions. We have experience in Peru, Chile and Colombia.'
                }
              </motion.p>
            </motion.div>

            {/* Grid de estadísticas */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Ventas anuales */}
              <motion.div
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: [0, 1, -1, 0],
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <motion.div 
                  className="text-center"
                  animate={floatingAnimation}
                >
                  <motion.div 
                    className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    S/727MM
                  </motion.div>
                  <motion.div 
                    className="text-sm lg:text-base text-secondary-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {currentLanguage.code === 'es' ? 'En ventas anuales' : 'Annual sales'}
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Clientes sector privado */}
              <motion.div
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -1, 1, 0],
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <motion.div 
                  className="text-center"
                  animate={floatingAnimation}
                >
                  <motion.div 
                    className="text-3xl lg:text-4xl font-bold text-accent-600 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.2 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ rotateY: 180 }}
                  >
                    90%
                  </motion.div>
                  <motion.div 
                    className="text-sm lg:text-base text-secondary-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {currentLanguage.code === 'es' ? 'clientes del sector privado' : 'private sector clients'}
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Contratos ejecutados */}
              <motion.div
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, 1, -1, 0],
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <motion.div 
                  className="text-center"
                  animate={floatingAnimation}
                >
                  <motion.div 
                    className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.3 
                    }}
                    viewport={{ once: true }}
                  >
                    12
                  </motion.div>
                  <motion.div 
                    className="text-sm lg:text-base text-secondary-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {currentLanguage.code === 'es' ? 'Contratos ejecutados al 2022' : 'Contracts executed by 2022'}
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Trabajadores */}
              <motion.div
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -1, 1, 0],
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <motion.div 
                  className="text-center"
                  animate={floatingAnimation}
                >
                  <motion.div 
                    className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.4 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: [1, 1.2, 1],
                      transition: { duration: 0.5 }
                    }}
                  >
                    +1,900
                  </motion.div>
                  <motion.div 
                    className="text-sm lg:text-base text-secondary-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {currentLanguage.code === 'es' ? 'trabajadores' : 'workers'}
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Índice de frecuencia */}
              <motion.div
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, 1, -1, 0],
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <motion.div 
                  className="text-center"
                  animate={floatingAnimation}
                >
                  <motion.div 
                    className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.5 
                    }}
                    viewport={{ once: true }}
                  >
                    0.22
                  </motion.div>
                  <motion.div 
                    className="text-sm lg:text-base text-secondary-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    {currentLanguage.code === 'es' ? 'Índice de frecuencia (OSHA)' : 'Frequency index (OSHA)'}
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Casos atendidos */}
              <motion.div
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -1, 1, 0],
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <motion.div 
                  className="text-center"
                  animate={floatingAnimation}
                >
                  <motion.div 
                    className="text-3xl lg:text-4xl font-bold text-accent-600 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.6 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ rotateY: 180 }}
                  >
                    100%
                  </motion.div>
                  <motion.div 
                    className="text-sm lg:text-base text-secondary-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {currentLanguage.code === 'es' ? 'casos atendidos en la línea ética' : 'cases handled in ethics line'}
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Horas trabajadas */}
              <motion.div
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, 1, -1, 0],
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <motion.div 
                  className="text-center"
                  animate={floatingAnimation}
                >
                  <motion.div 
                    className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.7 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: [1, 1.2, 1],
                      transition: { duration: 0.5 }
                    }}
                  >
                    +14MM
                  </motion.div>
                  <motion.div 
                    className="text-sm lg:text-base text-secondary-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    {currentLanguage.code === 'es' ? 'Horas trabajadas' : 'Hours worked'}
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Directores independientes */}
              <motion.div
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -1, 1, 0],
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <motion.div 
                  className="text-center"
                  animate={floatingAnimation}
                >
                  <motion.div 
                    className="text-3xl lg:text-4xl font-bold text-accent-600 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.8 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ rotateY: 180 }}
                  >
                    100%
                  </motion.div>
                  <motion.div 
                    className="text-sm lg:text-base text-secondary-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    viewport={{ once: true }}
                  >
                    {currentLanguage.code === 'es' ? 'directores independientes' : 'independent directors'}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ProjectsCarouselSection currentLanguage={currentLanguage} />
      
      {/* Sección de resumen de servicios */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Partículas flotantes animadas */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                delay: 0.1 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              {currentLanguage.code === 'es' 
                ? 'Nuestros Servicios Principales' 
                : 'Our Main Services'
              }
            </motion.h2>
            <motion.p 
              className="text-xl text-secondary-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {currentLanguage.code === 'es'
                ? 'Ofrecemos soluciones integrales en construcción e ingeniería con más de 25 años de experiencia en el mercado peruano.'
                : 'We offer comprehensive solutions in construction and engineering with over 25 years of experience in the Peruvian market.'
              }
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 50
              }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div 
                className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  rotate: [0, 1, -1, 0],
                }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-secondary-900 mb-4"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {currentLanguage.code === 'es' 
                    ? 'Ingeniería y Construcción' 
                    : 'Engineering & Construction'
                  }
                </motion.h3>
                <motion.p 
                  className="text-secondary-700 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {currentLanguage.code === 'es'
                    ? 'Desarrollamos proyectos integrales desde la planificación hasta la entrega final, utilizando tecnología BIM y los más altos estándares de calidad.'
                    : 'We develop comprehensive projects from planning to final delivery, using BIM technology and the highest quality standards.'
                  }
                </motion.p>
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    x: 10,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300 flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {currentLanguage.code === 'es' ? 'Ver más' : 'Learn more'}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-accent-50 to-primary-50 p-8 rounded-2xl"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  rotate: [0, -1, 1, 0],
                }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-secondary-900 mb-4"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {currentLanguage.code === 'es' 
                    ? 'Ingeniería y Topografía' 
                    : 'Engineering & Topography'
                  }
                </motion.h3>
                <motion.p 
                  className="text-secondary-700 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {currentLanguage.code === 'es'
                    ? 'Servicios especializados en levantamientos topográficos, estudios geotécnicos y diseño estructural con tecnología GPS y drones.'
                    : 'Specialized services in topographic surveys, geotechnical studies and structural design with GPS and drone technology.'
                  }
                </motion.p>
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    x: 10,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="text-accent-600 font-semibold hover:text-accent-700 transition-colors duration-300 flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  {currentLanguage.code === 'es' ? 'Ver más' : 'Learn more'}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 50
              }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div 
                className="bg-gradient-to-br from-secondary-100 to-primary-100 rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Círculos decorativos animados */}
                <motion.div
                  className="absolute top-10 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-10 right-10 w-32 h-32 bg-accent-200 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="text-center relative z-10">
                  <motion.div 
                    className="w-24 h-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                    }}
                    transition={{ 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                  >
                    <motion.span 
                      className="text-3xl font-bold text-white"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      GM
                    </motion.span>
                  </motion.div>
                  <motion.h4 
                    className="text-xl font-bold text-secondary-900 mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {currentLanguage.code === 'es' 
                      ? 'Calidad Garantizada' 
                      : 'Guaranteed Quality'
                    }
                  </motion.h4>
                  <motion.p 
                    className="text-secondary-600"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    {currentLanguage.code === 'es'
                      ? 'Certificación ISO 9001 y más de 150 proyectos exitosos'
                      : 'ISO 9001 certification and over 150 successful projects'
                    }
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de principales actividades */}
      <section className="section-padding bg-gradient-to-r from-primary-900 to-secondary-900 relative overflow-hidden">
        {/* Patrón de fondo animado */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)`,
          }}
          animate={{
            x: [0, 70],
            y: [0, 70],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="container-custom relative z-10">
          <motion.h2
            className="text-4xl lg:text-5xl font-display font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
          >
            {currentLanguage.code === 'es' 
              ? 'Nuestras principales actividades' 
              : 'Our main activities'
            }
          </motion.h2>

          {/* Grid de actividades */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Minería */}
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white text-center cursor-pointer group"
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-4"
                whileHover={{ 
                  rotate: [0, 10, -10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M20,8H17V4H3V13.2C2.38,13.07 1.88,12.68 1.55,12.16C1.18,11.57 1.26,10.81 1.77,10.3L1.06,9.59C0.31,10.34 0.15,11.49 0.69,12.4C1.09,13.09 1.78,13.55 2.54,13.66V20H17V16H20L22,14L20,8M4,5H16V14V19H4V5M17,9H19.5L20.85,13.65L19.5,15H17V9M6,7V12H14V7H6M7,8H13V11H7V8Z"/>
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">
                {currentLanguage.code === 'es' ? 'Minería' : 'Mining'}
              </h3>
              <motion.div
                className="h-1 bg-primary-400 rounded-full mt-4 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </motion.div>

            {/* Energía */}
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white text-center cursor-pointer group"
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-4"
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M14.5,2.05C16.18,2.4 17.64,3.35 18.64,4.64L17.58,5.7C16.9,4.85 15.92,4.3 14.84,4.11C14.41,4.3 14.05,4.65 13.88,5.08L16.05,7.25C16.25,7.21 16.44,7.18 16.64,7.18C17.78,7.18 18.73,7.97 18.96,9.04C19.95,9.58 20.66,10.5 20.9,11.58C21.43,11.95 21.84,12.5 22.03,13.13C22.64,13.5 23.05,14.16 23.05,14.91A2.05,2.05 0 0,1 21,16.96H16.64L15.38,20.93C15.07,21.91 14.11,22.54 13.13,22.4L5.73,21.34C4.68,21.18 3.92,20.2 4.06,19.15L5,11.93L11.26,5.67C11.76,3.72 12.97,2.33 14.5,2.05M17.74,6.6L10.64,13.7C10.53,13.82 10.41,13.91 10.27,14L6.83,14.43L5.97,20.5L13,21.5L14.37,17.14C14.4,17.04 14.44,16.95 14.5,16.86C14.57,16.77 14.65,16.69 14.75,16.63H18.68C19.07,16.33 19.34,15.89 19.42,15.39C19.35,15.19 19.23,15 19.07,14.86C18.75,14.57 18.68,14.09 18.91,13.72C19.03,13.5 19.22,13.35 19.44,13.26V13.12C19.44,12.81 19.26,12.53 19,12.38C18.64,12.17 18.47,11.73 18.62,11.33C18.7,11.09 18.87,10.9 19.09,10.79C19.04,10.5 18.84,10.27 18.58,10.14C18.22,10 18,9.62 18.09,9.25C18.14,9.05 18.27,8.87 18.45,8.76L18.45,8.74C18.41,8.5 18.23,8.26 18,8.16C17.78,8.06 17.53,8 17.28,8.05L15.36,6.12C15.9,5.72 16.72,5.82 17.15,6.31C17.34,6.53 17.58,6.68 17.85,6.75L17.74,6.6M11.26,8.76L10.07,9.95C9.68,10.34 9.56,10.92 9.74,11.43L8.19,13C7.63,13.2 7.3,13.82 7.5,14.39C7.63,14.78 8,15.05 8.41,15.06L7.59,15.14L8.09,11.26L11.26,8.76Z"/>
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">
                {currentLanguage.code === 'es' ? 'Energía' : 'Energy'}
              </h3>
              <motion.div
                className="h-1 bg-accent-400 rounded-full mt-4 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </motion.div>

            {/* Gas y petróleo */}
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white text-center cursor-pointer group"
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-4"
                whileHover={{ 
                  rotate: [0, 10, -10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M22,12.5C22,12.5 24,14.67 24,16A2,2 0 0,1 22,18A2,2 0 0,1 20,16C20,14.67 22,12.5 22,12.5M2.28,14L5.57,8.32C5.96,7.58 6.41,6.85 7.03,6.28L10.32,3L10.68,3.35L9.03,5H11.32L11.68,5.35L10.03,7H12.32L12.68,7.35L10.03,10H12.32L14.32,8H14.68L15.03,8.35L12.39,11C11.82,11.57 11.09,12 10.3,12.35L4.62,14H17C17,16.21 15.21,18 13,18H7A2,2 0 0,1 5,16A2,2 0 0,1 3,14H2.28M7,16A1,1 0 0,0 8,15A1,1 0 0,0 7,14A1,1 0 0,0 6,15A1,1 0 0,0 7,16Z"/>
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">
                {currentLanguage.code === 'es' ? 'Gas y petróleo' : 'Gas & Oil'}
              </h3>
              <motion.div
                className="h-1 bg-primary-400 rounded-full mt-4 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              />
            </motion.div>

            {/* Industria */}
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white text-center cursor-pointer group"
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-4"
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M19,15H21V17H19M19,19H21V21H19M3,13H5V15H3M3,17H5V19H3M3,21H5V23H3M13,5.5V13H11V7L7.5,10.5L6.08,9.08L12,3.16L17.92,9.08L16.5,10.5L13,7V5.5M11,15V23H9V15H11M15,15H17V17H15M15,19H17V21H15M7,15H9V17H7M7,19H9V21H7V19Z"/>
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">
                {currentLanguage.code === 'es' ? 'Industria' : 'Industry'}
              </h3>
              <motion.div
                className="h-1 bg-accent-400 rounded-full mt-4 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.div>

            {/* Infraestructura */}
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white text-center cursor-pointer group"
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-4"
                whileHover={{ 
                  rotate: [0, 10, -10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M17,9H7V7H17M17,13H7V11H17M14,2V4H12V2H8V4H6V2H5A1,1 0 0,0 4,3V5H20V3A1,1 0 0,0 19,2M19,19A1,1 0 0,1 18,20H6A1,1 0 0,1 5,19V6H19M17,17H7V15H17V17Z"/>
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">
                {currentLanguage.code === 'es' ? 'Infraestructura' : 'Infrastructure'}
              </h3>
              <motion.div
                className="h-1 bg-primary-400 rounded-full mt-4 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              />
            </motion.div>

            {/* Edificaciones */}
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white text-center cursor-pointer group"
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-4"
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z"/>
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">
                {currentLanguage.code === 'es' ? 'Edificaciones' : 'Buildings'}
              </h3>
              <motion.div
                className="h-1 bg-accent-400 rounded-full mt-4 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ClientsSection currentLanguage={currentLanguage} />

      {/* Call to action */}
      <section className="section-padding bg-gradient-to-r from-secondary-900 to-primary-900 relative overflow-hidden">
        {/* Ondas animadas de fondo */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q 25 25, 50 50 T 100 50 L 100 100 L 0 100 Z' fill='white'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 100px',
          }}
          animate={{
            x: [0, 200],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 50
            }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-display font-bold text-white mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              {currentLanguage.code === 'es' 
                ? '¿Listo para tu próximo proyecto?' 
                : 'Ready for your next project?'
              }
            </motion.h2>
            <motion.p 
              className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {currentLanguage.code === 'es'
                ? 'Contáctanos hoy mismo y descubre cómo podemos hacer realidad tu visión con la más alta calidad y compromiso.'
                : 'Contact us today and discover how we can make your vision a reality with the highest quality and commitment.'
              }
            </motion.p>
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 20px 40px rgba(249, 115, 22, 0.4)',
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 relative overflow-hidden group"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                delay: 0.4,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              viewport={{ once: true }}
            >
              {/* Efecto de brillo al hover */}
              <motion.span
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">
                {currentLanguage.code === 'es' ? 'Contactar Ahora' : 'Contact Now'}
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;