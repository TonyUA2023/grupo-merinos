import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Heart, Lightbulb, Users, Target, Eye } from 'lucide-react';
import AnimationWrapper, { StaggerContainer, StaggerItem } from '../components/AnimationWrapper';
import { useCounter, useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Language } from '../types';
import { milestones, companyValues, companyStats } from '../data/companyData';

interface AboutPageProps {
  currentLanguage: Language;
}

const AboutPage: React.FC<AboutPageProps> = ({ currentLanguage }) => {
  const { ref: statsRef, inView: statsInView } = useScrollAnimation(0.3);
  
  const projectsCount = useCounter(companyStats.projectsCompleted, 2000, 0, statsInView);
  const yearsCount = useCounter(companyStats.yearsExperience, 2000, 0, statsInView);
  const clientsCount = useCounter(companyStats.happyClients, 2000, 0, statsInView);
  const teamCount = useCounter(companyStats.teamMembers, 2000, 0, statsInView);

  const content = {
    es: {
      hero: {
        title: "Nuestra Historia",
        subtitle: "Más de 25 años construyendo el futuro del Perú con excelencia, innovación y compromiso social",
        badge: "Desde 1998"
      },
      about: {
        title: "Acerca de GRUPO MERINOS",
        description: "Somos una empresa constructora peruana con más de dos décadas de experiencia en el desarrollo de proyectos de ingeniería y construcción. Nos especializamos en crear infraestructuras que transforman comunidades y contribuyen al desarrollo sostenible del país.",
        mission: {
          title: "Nuestra Misión",
          text: "Construir proyectos de infraestructura de alta calidad que superen las expectativas de nuestros clientes, contribuyendo al desarrollo sostenible del Perú y mejorando la calidad de vida de las comunidades."
        },
        vision: {
          title: "Nuestra Visión",
          text: "Ser la empresa constructora líder en Perú, reconocida por nuestra excelencia técnica, innovación tecnológica y compromiso con la sostenibilidad ambiental y social."
        }
      },
      values: {
        title: "Nuestros Valores",
        subtitle: "Los principios que guían cada uno de nuestros proyectos"
      },
      timeline: {
        title: "Nuestra Trayectoria",
        subtitle: "Un recorrido por los hitos más importantes de nuestra historia"
      },
      stats: {
        title: "Nuestro Impacto",
        subtitle: "Números que reflejan nuestro compromiso y experiencia"
      }
    },
    en: {
      hero: {
        title: "Our Story",
        subtitle: "Over 25 years building Peru's future with excellence, innovation and social commitment",
        badge: "Since 1998"
      },
      about: {
        title: "About GRUPO MERINOS",
        description: "We are a Peruvian construction company with more than two decades of experience in the development of engineering and construction projects. We specialize in creating infrastructures that transform communities and contribute to the country's sustainable development.",
        mission: {
          title: "Our Mission",
          text: "To build high-quality infrastructure projects that exceed our clients' expectations, contributing to Peru's sustainable development and improving the quality of life of communities."
        },
        vision: {
          title: "Our Vision",
          text: "To be the leading construction company in Peru, recognized for our technical excellence, technological innovation and commitment to environmental and social sustainability."
        }
      },
      values: {
        title: "Our Values",
        subtitle: "The principles that guide each of our projects"
      },
      timeline: {
        title: "Our Journey",
        subtitle: "A journey through the most important milestones in our history"
      },
      stats: {
        title: "Our Impact",
        subtitle: "Numbers that reflect our commitment and experience"
      }
    }
  };

  const currentContent = content[currentLanguage.code];

  const valueIcons = {
    'Calidad': Award,
    'Quality': Award,
    'Seguridad': Shield,
    'Safety': Shield,
    'Responsabilidad': Heart,
    'Responsibility': Heart,
    'Innovación': Lightbulb,
    'Innovation': Lightbulb
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
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-primary-500 bg-opacity-10 rounded-full"
              style={{
                width: `${(i + 1) * 80}px`,
                height: `${(i + 1) * 80}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 30, -30, 0],
                y: [0, -30, 30, 0],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container-custom text-center text-white">
          <AnimationWrapper direction="down">
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-8"
            >
              <Users className="w-5 h-5 text-primary-400" />
              <span className="text-sm font-medium">{currentContent.hero.badge}</span>
            </motion.div>
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

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimationWrapper direction="left">
              <div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-6">
                  {currentContent.about.title}
                </h2>
                <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
                  {currentContent.about.description}
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">
                        {currentContent.about.mission.title}
                      </h3>
                      <p className="text-secondary-700">
                        {currentContent.about.mission.text}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">
                        {currentContent.about.vision.title}
                      </h3>
                      <p className="text-secondary-700">
                        {currentContent.about.vision.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper direction="right">
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 h-96">
                  <div className="h-full bg-secondary-200 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">GM</span>
                      </div>
                      <p className="text-secondary-600 text-lg">
                        {currentLanguage.code === 'es' 
                          ? 'Imagen de nuestra empresa' 
                          : 'Company image placeholder'
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

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-50 to-primary-50" ref={statsRef}>
        <div className="container-custom">
          <AnimationWrapper direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-6">
                {currentContent.stats.title}
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                {currentContent.stats.subtitle}
              </p>
            </div>
          </AnimationWrapper>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerItem>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <motion.span
                    key={projectsCount}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-2xl font-bold text-white"
                  >
                    {projectsCount}
                  </motion.span>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {currentLanguage.code === 'es' ? 'Proyectos' : 'Projects'}
                </h3>
                <p className="text-secondary-600">
                  {currentLanguage.code === 'es' ? 'Completados' : 'Completed'}
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <motion.span
                    key={yearsCount}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-2xl font-bold text-white"
                  >
                    {yearsCount}
                  </motion.span>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {currentLanguage.code === 'es' ? 'Años' : 'Years'}
                </h3>
                <p className="text-secondary-600">
                  {currentLanguage.code === 'es' ? 'Experiencia' : 'Experience'}
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <motion.span
                    key={clientsCount}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-2xl font-bold text-white"
                  >
                    {clientsCount}
                  </motion.span>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {currentLanguage.code === 'es' ? 'Clientes' : 'Clients'}
                </h3>
                <p className="text-secondary-600">
                  {currentLanguage.code === 'es' ? 'Satisfechos' : 'Satisfied'}
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <motion.span
                    key={teamCount}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-2xl font-bold text-white"
                  >
                    {teamCount}
                  </motion.span>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {currentLanguage.code === 'es' ? 'Equipo' : 'Team'}
                </h3>
                <p className="text-secondary-600">
                  {currentLanguage.code === 'es' ? 'Profesionales' : 'Professionals'}
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimationWrapper direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-6">
                {currentContent.values.title}
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                {currentContent.values.subtitle}
              </p>
            </div>
          </AnimationWrapper>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const title = currentLanguage.code === 'es' ? value.title : value.titleEn;
              const description = currentLanguage.code === 'es' ? value.description : value.descriptionEn;
              const IconComponent = valueIcons[title as keyof typeof valueIcons] || Award;

              return (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="bg-gradient-to-br from-white to-primary-50 rounded-2xl p-8 text-center shadow-lg border border-primary-100 h-full"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-4">
                      {title}
                    </h3>
                    <p className="text-secondary-700 leading-relaxed">
                      {description}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gradient-to-br from-secondary-900 to-primary-900">
        <div className="container-custom">
          <AnimationWrapper direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                {currentContent.timeline.title}
              </h2>
              <p className="text-xl text-primary-200 max-w-3xl mx-auto">
                {currentContent.timeline.subtitle}
              </p>
            </div>
          </AnimationWrapper>

          <div className="relative">
            {/* Línea de tiempo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => {
                const title = currentLanguage.code === 'es' ? milestone.title : milestone.titleEn;
                const description = currentLanguage.code === 'es' ? milestone.description : milestone.descriptionEn;
                const isEven = index % 2 === 0;

                return (
                  <AnimationWrapper
                    key={index}
                    direction={isEven ? 'left' : 'right'}
                    delay={index * 0.2}
                  >
                    <div className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6"
                        >
                          <div className="text-3xl font-bold text-primary-400 mb-2">
                            {milestone.year}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">
                            {title}
                          </h3>
                          <p className="text-primary-200 leading-relaxed">
                            {description}
                          </p>
                        </motion.div>
                      </div>

                      {/* Punto central */}
                      <div className="relative z-10">
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-4 h-4 bg-white rounded-full border-4 border-primary-500 shadow-lg"
                        />
                      </div>

                      <div className="w-1/2"></div>
                    </div>
                  </AnimationWrapper>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;