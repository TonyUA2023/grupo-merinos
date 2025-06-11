import React from 'react';
import { motion } from 'framer-motion';
import { Building, MapPin, Wrench, Award, CheckCircle, ArrowRight } from 'lucide-react';
import AnimationWrapper, { StaggerContainer, StaggerItem, HoverCard } from '../components/AnimationWrapper';
import type { Language } from '../types';
import { services } from '../data/companyData';

interface ServicesPageProps {
  currentLanguage: Language;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ currentLanguage }) => {
  const content = {
    es: {
      hero: {
        title: "Nuestros Servicios",
        subtitle: "Soluciones integrales en ingeniería y construcción con tecnología de vanguardia y los más altos estándares de calidad",
        badge: "Excelencia Técnica"
      },
      sections: {
        main: {
          title: "Servicios Especializados",
          subtitle: "Ofrecemos una gama completa de servicios para satisfacer todas las necesidades de construcción e ingeniería"
        },
        process: {
          title: "Nuestro Proceso",
          subtitle: "Un enfoque metodológico que garantiza resultados excepcionales",
          steps: [
            {
              title: "Consultoría y Planificación",
              description: "Análisis detallado de requerimientos y elaboración de propuesta técnica"
            },
            {
              title: "Diseño y Desarrollo",
              description: "Creación de planos y especificaciones técnicas utilizando tecnología BIM"
            },
            {
              title: "Ejecución",
              description: "Construcción con supervisión constante y control de calidad"
            },
            {
              title: "Entrega y Seguimiento",
              description: "Entrega del proyecto y servicios de mantenimiento post-construcción"
            }
          ]
        },
        why: {
          title: "¿Por qué elegir GRUPO MERINOS?",
          reasons: [
            "Más de 25 años de experiencia",
            "Certificación ISO 9001",
            "Tecnología BIM avanzada",
            "Equipo de profesionales certificados",
            "Cumplimiento de plazos garantizado",
            "Atención personalizada 24/7"
          ]
        }
      }
    },
    en: {
      hero: {
        title: "Our Services",
        subtitle: "Comprehensive solutions in engineering and construction with cutting-edge technology and the highest quality standards",
        badge: "Technical Excellence"
      },
      sections: {
        main: {
          title: "Specialized Services",
          subtitle: "We offer a complete range of services to meet all construction and engineering needs"
        },
        process: {
          title: "Our Process",
          subtitle: "A methodological approach that guarantees exceptional results",
          steps: [
            {
              title: "Consulting and Planning",
              description: "Detailed analysis of requirements and technical proposal development"
            },
            {
              title: "Design and Development",
              description: "Creation of plans and technical specifications using BIM technology"
            },
            {
              title: "Execution",
              description: "Construction with constant supervision and quality control"
            },
            {
              title: "Delivery and Follow-up",
              description: "Project delivery and post-construction maintenance services"
            }
          ]
        },
        why: {
          title: "Why choose GRUPO MERINOS?",
          reasons: [
            "Over 25 years of experience",
            "ISO 9001 certification",
            "Advanced BIM technology",
            "Team of certified professionals",
            "Guaranteed deadline compliance",
            "24/7 personalized attention"
          ]
        }
      }
    }
  };

  const currentContent = content[currentLanguage.code];

  const serviceIcons = {
    'Ingeniería y Construcción': Building,
    'Engineering & Construction': Building,
    'Ingeniería y Topografía': MapPin,
    'Engineering & Topography': MapPin
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-secondary-900 via-primary-800 to-accent-900 overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white bg-opacity-5 rounded-full"
              style={{
                width: `${(i + 1) * 60}px`,
                height: `${(i + 1) * 60}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 40, -40, 0],
                y: [0, -40, 40, 0],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container-custom text-center text-white">
          <AnimationWrapper direction="down">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-8">
              <Wrench className="w-5 h-5 text-primary-400" />
              <span className="text-sm font-medium">{currentContent.hero.badge}</span>
            </div>
          </AnimationWrapper>

          <AnimationWrapper direction="up" delay={0.2}>
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6">
              {currentContent.hero.title}
            </h1>
          </AnimationWrapper>

          <AnimationWrapper direction="up" delay={0.4}>
            <p className="text-xl lg:text-2xl text-primary-200 max-w-4xl mx-auto leading-relaxed">
              {currentContent.hero.subtitle}
            </p>
          </AnimationWrapper>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimationWrapper direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-6">
                {currentContent.sections.main.title}
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                {currentContent.sections.main.subtitle}
              </p>
            </div>
          </AnimationWrapper>

          <StaggerContainer className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const title = currentLanguage.code === 'es' ? service.title : service.titleEn;
              const description = currentLanguage.code === 'es' ? service.description : service.descriptionEn;
              const features = currentLanguage.code === 'es' ? service.features : service.featuresEn;
              const IconComponent = serviceIcons[title as keyof typeof serviceIcons] || Building;

              return (
                <StaggerItem key={service.id}>
                  <HoverCard hoverScale={1.02} className="h-full">
                    <div className="bg-gradient-to-br from-white to-primary-50 rounded-2xl p-8 shadow-lg border border-primary-100 h-full">
                      <div className="flex items-center space-x-4 mb-6">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center"
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-secondary-900">
                          {title}
                        </h3>
                      </div>

                      <p className="text-secondary-700 mb-6 leading-relaxed">
                        {description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                            <span className="text-secondary-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>{currentLanguage.code === 'es' ? 'Solicitar Cotización' : 'Request Quote'}</span>
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </HoverCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-custom">
          <AnimationWrapper direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-6">
                {currentContent.sections.process.title}
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                {currentContent.sections.process.subtitle}
              </p>
            </div>
          </AnimationWrapper>

          <div className="relative">
            {/* Línea conectora */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transform -translate-y-1/2"></div>

            <StaggerContainer className="grid lg:grid-cols-4 gap-8">
              {currentContent.sections.process.steps.map((step, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="relative bg-white rounded-2xl p-6 shadow-lg text-center"
                  >
                    {/* Número del paso */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 relative z-10"
                    >
                      {index + 1}
                    </motion.div>

                    <h3 className="text-xl font-bold text-secondary-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-secondary-700 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimationWrapper direction="left">
              <div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-8">
                  {currentContent.sections.why.title}
                </h2>

                <div className="grid gap-4">
                  {currentContent.sections.why.reasons.map((reason, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-primary-50 transition-colors duration-300"
                    >
                      <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0" />
                      <span className="text-lg text-secondary-700 font-medium">{reason}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper direction="right">
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 h-96">
                  <div className="h-full bg-secondary-200 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <Award className="w-20 h-20 text-primary-600 mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-secondary-900 mb-2">
                        {currentLanguage.code === 'es' ? 'Certificación ISO 9001' : 'ISO 9001 Certification'}
                      </h4>
                      <p className="text-secondary-600">
                        {currentLanguage.code === 'es' 
                          ? 'Calidad garantizada en todos nuestros procesos' 
                          : 'Guaranteed quality in all our processes'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-900 to-primary-900">
        <div className="container-custom text-center">
          <AnimationWrapper direction="up">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              {currentLanguage.code === 'es' 
                ? '¿Listo para comenzar tu proyecto?' 
                : 'Ready to start your project?'
              }
            </h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              {currentLanguage.code === 'es'
                ? 'Contáctanos hoy y obtén una cotización personalizada para tu proyecto de construcción o ingeniería.'
                : 'Contact us today and get a personalized quote for your construction or engineering project.'
              }
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(249, 115, 22, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>{currentLanguage.code === 'es' ? 'Solicitar Cotización' : 'Request Quote'}</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </AnimationWrapper>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;