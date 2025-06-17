import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Mountain, HardHat, Building2 } from 'lucide-react';

const HeroSection = ({ currentLanguage = { code: 'es' } }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  
  // Proyectos destacados - Actualizados según el brochure
  const featuredProjects = [
    {
      id: 1,
      image: '/1.jpg', // Imagen de CONCESIÓN DEL TRAMO II IRSA
      title: 'CONCESIÓN DEL TRAMO II IRSA CENTRO',
      location: 'CERRO DE PASCO',
      client: 'DEVIANDES'
    },
    {
      id: 2,
      image: '/1.jpg', // Imagen de alcantarillas
      title: 'ALCANTARILLAS TMC, MCA Y MUROS',
      location: 'VISTA ALEGRE - HUANCAYO',
      client: 'EXTRACO'
    },
    {
      id: 3,
      image: '/1.jpg', // Imagen de carretera
      title: 'MEJORAMIENTO CARRETERA CHUPURO',
      location: 'CHICCHE - CHONGOS ALTO',
      client: 'EXTRACO'
    },
    {
      id: 4,
      image: '/proyecto-4.jpg', // Imagen de instalación de agua
      title: 'INSTALACIÓN SERVICIOS DE AGUA',
      location: 'CIUDAD DE OLMOS',
      client: 'CONSORCIO NUEVO OLMOS'
    },
    {
      id: 5,
      image: '/proyecto-5.jpg', // Imagen de corredor vial
      title: 'MEJORAMIENTO CORREDOR VIAL',
      location: 'HUANUCO - LA UNIÓN',
      client: 'CHINA RAILWAY 20'
    }
  ];

  const heroContent = {
    es: {
      subtitle: "INGENIERÍA Y CONSTRUCCIÓN",
      title: "CONSTRUYENDO EL",
      highlight: "FUTURO DEL PERÚ",
      description: "Más de 25 años de experiencia. Trabajamos por un mejor Perú.",
      cta: "CONOCER MÁS"
    },
    en: {
      subtitle: "ENGINEERING & CONSTRUCTION",
      title: "BUILDING",
      highlight: "PERU'S FUTURE",
      description: "Over 25 years of experience. Working for a better Peru.",
      cta: "LEARN MORE"
    }
  };

  const content = heroContent[currentLanguage.code];

  // Efectos de paralaje muy sutiles
  const imageScale = useTransform(scrollY, [0, 500], [1, 1.05]);
  const contentY = useTransform(scrollY, [0, 500], [0, -50]);

  // Auto-play del carrusel - 8 segundos por imagen
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Imagen de Fondo Principal - PANTALLA COMPLETA */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{ scale: imageScale }}
        >
          {/* Imagen en alta resolución */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${featuredProjects[currentSlide].image})`,
              filter: 'brightness(0.9)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay con gradiente corporativo muy sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      
      {/* Overlay lateral con colores corporativos extremadamente sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00A8E0]/10 via-transparent to-[#00A651]/10" />

      {/* Patrón de líneas topográficas muy sutil */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Contenido Principal */}
      <motion.div 
        className="relative z-10 h-full flex mt-20 lg:mt-6"
        style={{ y: contentY }}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl">
            {/* Logo y marca */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-2xl">
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#00A8E0] to-[#00A651] bg-clip-text text-transparent">GM</span>
                </div>
                <div className="text-white">
                  <div className="text-sm font-light tracking-[0.3em] opacity-90">
                    {content.subtitle}
                  </div>
                  <div className="text-xs opacity-70">GRUPO MERINO INGENIEROS SAC</div>
                </div>
              </div>
            </motion.div>

            {/* Título principal */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-white"
            >
              <span className="block">{content.title}</span>
              <span className="block bg-gradient-to-r from-[#00A8E0] to-[#00A651] bg-clip-text text-transparent">
                {content.highlight}
              </span>
            </motion.h1>

            {/* Descripción breve */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl font-light"
            >
              {content.description}
            </motion.p>

            {/* Información del proyecto actual */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 max-w-2xl border border-white/20"
            >
              <h3 className="text-white font-semibold mb-2 text-lg">
                {featuredProjects[currentSlide].title}
              </h3>
              <div className="flex items-center text-white/80 text-sm space-x-4">
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1 text-[#00A8E0]" />
                  {featuredProjects[currentSlide].location}
                </span>
                <span className="flex items-center">
                  <Building2 className="w-4 h-4 mr-1 text-[#00A651]" />
                  {featuredProjects[currentSlide].client}
                </span>
              </div>
            </motion.div>

            {/* Botón CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <button className="bg-gradient-to-r from-[#00A8E0] to-[#00A651] text-white font-semibold py-4 px-8 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                {content.cta}
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Controles del carrusel - Minimalistas */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        
        {/* Indicadores */}
        <div className="flex space-x-2">
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-[#00A8E0] w-8 h-1'
                  : 'bg-white/40 w-1 h-1 hover:bg-white/60'
              } rounded-full`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Indicador de scroll - Muy sutil */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [2, 6, 2] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-0.5 h-2 bg-white/50 rounded-full mt-1"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;