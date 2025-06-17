import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';

interface SubPageHeroProps {
  currentLanguage?: { code: string };
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  breadcrumbs?: Array<{ name: string; path: string }>;
  icon?: React.ReactNode;
  gradient?: 'blue' | 'green' | 'mixed';
}

const SubPageHero: React.FC<SubPageHeroProps> = ({
  currentLanguage = { code: 'es' },
  title,
  titleHighlight,
  subtitle,
  description,
  backgroundImage = '/1.jpg',
  breadcrumbs = [],
  icon,
  gradient = 'mixed'
}) => {
  const { scrollY } = useScroll();
  
  // Efectos de paralaje más dramáticos
  const imageScale = useTransform(scrollY, [0, 600], [1, 1.2]);
  const contentY = useTransform(scrollY, [0, 600], [0, -100]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.6, 0.9]);

  // Configuración de gradientes
  const gradientConfig = {
    blue: 'from-[#00A8E0]/20 to-[#0066CC]/20',
    green: 'from-[#00A651]/20 to-[#006633]/20',
    mixed: 'from-[#00A8E0]/15 via-transparent to-[#00A651]/15'
  };

  // Configuración de alturas - PANTALLA COMPLETA
  const heightConfig = 'h-screen min-h-[100vh]';

  const commonTexts = {
    es: {
      home: 'Inicio'
    },
    en: {
      home: 'Home'
    }
  };

  const texts = commonTexts[currentLanguage.code as keyof typeof commonTexts] || commonTexts.es;

  return (
    <section className={`relative ${heightConfig} w-full overflow-hidden`}>
      {/* Imagen de Fondo con animación de entrada dramática */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ scale: imageScale }}
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            filter: 'brightness(0.6) contrast(1.1)',
          }}
          initial={{ filter: 'brightness(0.3) contrast(1.1) blur(4px)' }}
          animate={{ filter: 'brightness(0.6) contrast(1.1) blur(0px)' }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
      </motion.div>

      {/* Overlay dinámico */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" 
        style={{ opacity: overlayOpacity }}
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
      />
      
      {/* Overlay lateral con gradiente corporativo animado */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-r ${gradientConfig[gradient]}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 0.5 }}
      />

      {/* Partículas flotantes animadas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 50,
              opacity: 0 
            }}
            animate={{ 
              y: -50, 
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Patrón de líneas topográficas animado */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 3, delay: 1 }}
      >
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="none">
          <defs>
            <pattern id="subpage-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#subpage-grid)" />
        </svg>
      </motion.div>

      {/* Contenido Principal - Centrado verticalmente */}
      <motion.div 
        className="relative z-10 h-full flex items-center justify-center"
        style={{ y: contentY }}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
          
            {/* Breadcrumbs - Animación de entrada */}
            {breadcrumbs.length > 0 && (
              <motion.nav
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mb-8"
              >
                <div className="flex items-center justify-center space-x-2 text-white/80 text-sm">
                  <Home className="w-4 h-4" />
                  <span>{texts.home}</span>
                  {breadcrumbs.map((crumb, index) => (
                    <React.Fragment key={index}>
                      <ChevronRight className="w-4 h-4" />
                      <span 
                        className={`${
                          index === breadcrumbs.length - 1 
                            ? 'text-white font-medium' 
                            : 'hover:text-white cursor-pointer'
                        }`}
                      >
                        {crumb.name}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </motion.nav>
            )}

            {/* Logo y marca corporativa - Animación espectacular */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1, type: "spring", stiffness: 100 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center space-x-4">
                <motion.div 
                  className="w-16 h-16 bg-white/15 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 shadow-2xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon || (
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#00A8E0] to-[#00A651] bg-clip-text text-transparent">
                      GM
                    </span>
                  )}
                </motion.div>
                <div className="text-white">
                  <motion.div 
                    className="text-sm font-light tracking-[0.3em] opacity-90"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 0.9, x: 0 }}
                    transition={{ duration: 1, delay: 1.3 }}
                  >
                    GRUPO MERINO INGENIEROS SAC
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Subtítulo con animación typewriter */}
            {subtitle && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="mb-6"
              >
                <motion.span 
                  className="text-lg md:text-xl font-light tracking-[0.3em] text-[#00A8E0] uppercase"
                  initial={{ letterSpacing: "0.1em" }}
                  animate={{ letterSpacing: "0.3em" }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                >
                  {subtitle}
                </motion.span>
              </motion.div>
            )}

            {/* Título principal - Animación dramática */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-white leading-tight max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1.5, 
                delay: 1.6,
                type: "spring",
                stiffness: 50,
                damping: 15
              }}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.8 }}
              >
                {title}
              </motion.span>
              
              {titleHighlight && (
                <motion.span 
                  className="block bg-gradient-to-r from-[#00A8E0] via-[#00B9CE] to-[#00A651] bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 2 }}
                >
                  {titleHighlight}
                </motion.span>
              )}
            </motion.h1>

            {/* Descripción con efecto de aparición suave */}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 2.2 }}
                className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed mb-10"
              >
                {description}
              </motion.p>
            )}

            {/* Líneas decorativas simétricas */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 2.4 }}
              className="flex items-center justify-center space-x-4 mb-8"
            >
              <div className="h-0.5 w-24 bg-gradient-to-r from-transparent to-[#00A8E0]" />
              <motion.div 
                className="w-3 h-3 bg-gradient-to-r from-[#00A8E0] to-[#00A651] rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <div className="h-0.5 w-24 bg-gradient-to-l from-transparent to-[#00A651]" />
            </motion.div>
        </div>
      </motion.div>

      {/* Elemento decorativo inferior con onda */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.5 }}
      />
      
      {/* Patrón geométrico animado en esquinas */}
      <motion.div 
        className="absolute top-0 right-0 w-80 h-80 opacity-10"
        initial={{ rotate: -180, scale: 0, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 0.1 }}
        transition={{ duration: 2, delay: 2 }}
      >
        <svg viewBox="0 0 256 256" className="w-full h-full">
          <defs>
            <linearGradient id="corner-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00A8E0" />
              <stop offset="100%" stopColor="#00A651" />
            </linearGradient>
          </defs>
          <polygon 
            points="0,0 256,0 256,256" 
            fill="url(#corner-gradient)" 
            opacity="0.3"
          />
          <motion.circle 
            cx="200" cy="56" r="20" fill="white" opacity="0.1"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.circle 
            cx="160" cy="96" r="15" fill="white" opacity="0.15"
            animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
          <motion.circle 
            cx="220" cy="120" r="10" fill="white" opacity="0.1"
            animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          />
        </svg>
      </motion.div>

      {/* Indicador de scroll animado */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center cursor-pointer hover:border-white/60 transition-colors"
        >
          <motion.div
            animate={{ y: [3, 8, 3], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SubPageHero;