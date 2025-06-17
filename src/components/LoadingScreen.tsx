import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LoadingProps } from '../types';

const LoadingScreen: React.FC<LoadingProps> = ({ isVisible, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => onComplete(), 500);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0077B6] via-[#00B4D8] to-[#52B69A]"
        >
          {/* Efectos de fondo animados - Formas geométricas */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Polígonos animados de fondo */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white bg-opacity-5"
                style={{
                  width: `${(i + 1) * 150}px`,
                  height: `${(i + 1) * 150}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  clipPath: i % 2 === 0 
                    ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' 
                    : 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                }}
                animate={{
                  x: [0, 30, -30, 0],
                  y: [0, -30, 30, 0],
                  rotate: [0, 45, -45, 0],
                  opacity: [0.1, 0.3, 0.1, 0.1],
                }}
                transition={{
                  duration: 6 + i * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Contenido principal */}
          <div className="relative z-10 text-center">
            {/* Logo animado con diseño profesional */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="mb-8"
            >
              <div className="relative">
                {/* Logo principal con gradiente corporativo */}
                <motion.div
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(0, 180, 216, 0.5)',
                      '0 0 40px rgba(82, 182, 154, 0.5)',
                      '0 0 20px rgba(0, 180, 216, 0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-28 h-28 mx-auto mb-4 bg-gradient-to-br from-[#52B69A] to-[#00B4D8] rounded-2xl flex items-center justify-center shadow-2xl"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-20 h-20 bg-white rounded-xl flex items-center justify-center"
                  >
                    <span className="text-3xl font-bold text-[#0077B6]">MI</span>
                  </motion.div>
                </motion.div>

                {/* Líneas orbitales con estilo construcción */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 w-36 h-36 border-2 border-[#00B4D8] border-opacity-30 rounded-2xl -top-4 -left-4"
                  style={{ borderStyle: 'dashed' }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 w-44 h-44 border border-[#52B69A] border-opacity-20 rounded-2xl -top-8 -left-8"
                />
              </div>
            </motion.div>

            {/* Nombre de la empresa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-wider">
                GRUPO MERINO
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#90E0EF] mb-3">
                INGENIEROS SAC
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-lg text-white font-light tracking-widest"
              >
                TRABAJAMOS POR UN MEJOR PERÚ
              </motion.p>
            </motion.div>

            {/* Barra de progreso estilizada */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="w-80 mx-auto"
            >
              <div className="mb-4 relative">
                <div className="h-2 bg-white bg-opacity-20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-gradient-to-r from-[#52B69A] via-[#00B4D8] to-[#90E0EF] rounded-full relative"
                  >
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute right-0 top-0 w-4 h-full bg-white bg-opacity-50 blur-sm"
                    />
                  </motion.div>
                </div>
              </div>
              <motion.p
                key={Math.floor(progress)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-white font-medium"
              >
                Cargando... {Math.floor(progress)}%
              </motion.p>
            </motion.div>

            {/* Iconos de construcción animados */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex justify-center space-x-6 mt-8"
            >
              {['🏗️', '⚙️', '📐'].map((icon, i) => (
                <motion.div
                  key={i}
                  className="text-2xl"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  {icon}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Efecto de líneas de construcción */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white"
                style={{
                  width: '1px',
                  height: '60px',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Efecto de puntos técnicos */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;