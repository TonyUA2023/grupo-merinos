import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import type { Language } from '../types';

interface HomePageProps {
  currentLanguage: Language;
}

const HomePage: React.FC<HomePageProps> = ({ currentLanguage }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection currentLanguage={currentLanguage} />
      
      {/* Sección de resumen de servicios */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-6">
              {currentLanguage.code === 'es' 
                ? 'Nuestros Servicios Principales' 
                : 'Our Main Services'
              }
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {currentLanguage.code === 'es'
                ? 'Ofrecemos soluciones integrales en construcción e ingeniería con más de 25 años de experiencia en el mercado peruano.'
                : 'We offer comprehensive solutions in construction and engineering with over 25 years of experience in the Peruvian market.'
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  {currentLanguage.code === 'es' 
                    ? 'Ingeniería y Construcción' 
                    : 'Engineering & Construction'
                  }
                </h3>
                <p className="text-secondary-700 mb-6">
                  {currentLanguage.code === 'es'
                    ? 'Desarrollamos proyectos integrales desde la planificación hasta la entrega final, utilizando tecnología BIM y los más altos estándares de calidad.'
                    : 'We develop comprehensive projects from planning to final delivery, using BIM technology and the highest quality standards.'
                  }
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300"
                >
                  {currentLanguage.code === 'es' ? 'Ver más →' : 'Learn more →'}
                </motion.button>
              </div>

              <div className="bg-gradient-to-br from-accent-50 to-primary-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  {currentLanguage.code === 'es' 
                    ? 'Ingeniería y Topografía' 
                    : 'Engineering & Topography'
                  }
                </h3>
                <p className="text-secondary-700 mb-6">
                  {currentLanguage.code === 'es'
                    ? 'Servicios especializados en levantamientos topográficos, estudios geotécnicos y diseño estructural con tecnología GPS y drones.'
                    : 'Specialized services in topographic surveys, geotechnical studies and structural design with GPS and drone technology.'
                  }
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-accent-600 font-semibold hover:text-accent-700 transition-colors duration-300"
                >
                  {currentLanguage.code === 'es' ? 'Ver más →' : 'Learn more →'}
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-secondary-100 to-primary-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-white">GM</span>
                  </div>
                  <h4 className="text-xl font-bold text-secondary-900 mb-2">
                    {currentLanguage.code === 'es' 
                      ? 'Calidad Garantizada' 
                      : 'Guaranteed Quality'
                    }
                  </h4>
                  <p className="text-secondary-600">
                    {currentLanguage.code === 'es'
                      ? 'Certificación ISO 9001 y más de 150 proyectos exitosos'
                      : 'ISO 9001 certification and over 150 successful projects'
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="section-padding bg-gradient-to-r from-secondary-900 to-primary-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              {currentLanguage.code === 'es' 
                ? '¿Listo para tu próximo proyecto?' 
                : 'Ready for your next project?'
              }
            </h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              {currentLanguage.code === 'es'
                ? 'Contáctanos hoy mismo y descubre cómo podemos hacer realidad tu visión con la más alta calidad y compromiso.'
                : 'Contact us today and discover how we can make your vision a reality with the highest quality and commitment.'
              }
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(249, 115, 22, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300"
            >
              {currentLanguage.code === 'es' ? 'Contactar Ahora' : 'Contact Now'}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;