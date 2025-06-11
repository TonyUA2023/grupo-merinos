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
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900"
        >
          {/* Efectos de fondo animados */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Círculos animados de fondo */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-primary-500 bg-opacity-10 rounded-full"
                style={{
                  width: `${(i + 1) * 100}px`,
                  height: `${(i + 1) * 100}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, 50, -50, 0],
                  y: [0, -50, 50, 0],
                  scale: [1, 1.2, 0.8, 1],
                  opacity: [0.3, 0.6, 0.3, 0.3],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Contenido principal */}
          <div className="relative z-10 text-center">
            {/* Logo animado */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="mb-8"
            >
              <div className="relative">
                {/* Logo principal */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full flex items-center justify-center"
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
                  >
                    <span className="text-2xl font-bold text-primary-600">GM</span>
                  </motion.div>
                </motion.div>

                {/* Anillos orbitales */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 w-32 h-32 border-2 border-primary-400 border-opacity-30 rounded-full -top-4 -left-4"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 w-40 h-40 border border-accent-400 border-opacity-20 rounded-full -top-8 -left-8"
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
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                GRUPO MERINOS
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-lg text-primary-200"
              >
                Construyendo el futuro del Perú
              </motion.p>
            </motion.div>

            {/* Barra de progreso */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="w-64 mx-auto"
            >
              <div className="mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"
                  style={{ 
                    background: `linear-gradient(90deg, #f97316 ${progress}%, rgba(249, 115, 22, 0.2) ${progress}%)` 
                  }}
                />
              </div>
              <motion.p
                key={Math.floor(progress)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-primary-300"
              >
                Cargando... {Math.floor(progress)}%
              </motion.p>
            </motion.div>

            {/* Puntos de carga animados */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex justify-center space-x-2 mt-8"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-primary-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Efecto de partículas */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, -100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeOut',
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;