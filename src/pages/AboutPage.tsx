import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Building, 
  Target,
  Calendar, 
  Eye, 
  Heart, 
  Shield, 
  CheckCircle,
  Building2,
  Lightbulb,
  Globe,
  Leaf,
  ArrowRight,
  Download,
  FileText,
  Star,
  Sparkles
} from 'lucide-react';
import SubPageHero from '../components/SubPageHero';
import { useState } from 'react';

interface AboutPageProps {
  currentLanguage: { code: string };
}

const AboutPage: React.FC<AboutPageProps> = ({ currentLanguage }) => {
  const [activeTab, setActiveTab] = useState('mission');
  
  const aboutContent = {
    es: {
      hero: {
        subtitle: "Nuestra Historia",
        title: "CONSTRUYENDO",
        titleHighlight: "CONFIANZA",
        description: "Más de 25 años de experiencia construyendo infraestructura de calidad que transforma comunidades y conecta el futuro del Perú.",
        breadcrumbs: [{ name: 'Nosotros', path: '/about' }]
      },
      history: {
        title: "Nuestra Historia",
        subtitle: "Más de 25 años construyendo el futuro del Perú",
        description: "Desde 1998, Grupo Merino Ingenieros SAC ha sido pionero en soluciones integrales de ingeniería y construcción, transformando el paisaje peruano con proyectos de infraestructura de clase mundial.",
        milestones: [
          "Fundación de la empresa con enfoque en servicios de topografía",
          "Expansión hacia obras civiles y movimiento de tierras",
          "Implementación de tecnología avanzada en geodesia",
          "Establecimiento de políticas de responsabilidad social",
          "Crecimiento sostenible y reconocimiento nacional"
        ]
      },
      timeline: {
        title: "Línea del Tiempo",
        subtitle: "Un legado de excelencia e innovación",
        events: [
          {
            year: "1998",
            title: "Fundación",
            description: "Inicio de operaciones con servicios especializados en topografía e ingeniería",
            icon: "foundation"
          },
          {
            year: "2005",
            title: "Expansión",
            description: "Diversificación hacia obras de arte, drenaje y movimiento de tierras",
            icon: "expansion"
          },
          {
            year: "2015",
            title: "Innovación",
            description: "Implementación de políticas de responsabilidad social y ambiental",
            icon: "innovation"
          },
          {
            year: "2020",
            title: "Modernización",
            description: "Adopción de tecnologías avanzadas y procesos digitales",
            icon: "technology"
          },
          {
            year: "2025",
            title: "Liderazgo",
            description: "Consolidación como empresa líder en ingeniería y construcción",
            icon: "leadership"
          }
        ]
      },
      purpose: {
        title: "Propósito, Misión, Visión y Valores",
        purpose: {
          title: "Nuestro Propósito",
          text: "Trabajamos por un mejor Perú, construyendo infraestructura que conecta comunidades y transforma vidas."
        },
        mission: {
          title: "Misión",
          text: "Brindar servicios de ingeniería, construcción, mantenimiento y concesiones, contribuyendo con el éxito de nuestros clientes y el desarrollo del país."
        },
        vision: {
          title: "Visión",
          text: "Ser una empresa líder en el mercado nacional con proyección internacional en servicios de ingeniería, construcción, mantenimiento y concesiones."
        },
        values: [
          {
            icon: "team",
            title: "Trabajo en Equipo",
            description: "Fortalecer la integración de nuestros colaboradores para alcanzar objetivos institucionales e individuales."
          },
          {
            icon: "innovation",
            title: "Excelencia e Innovación",
            description: "La búsqueda de la perfección en todas las acciones de la empresa nos hace ser continúamente innovadores."
          },
          {
            icon: "responsibility",
            title: "Responsabilidad Social",
            description: "Somos una empresa que está continuamente con nuestra persona y nuestro entorno, cuidando nuestro medio ambiente."
          },
          {
            icon: "delivery",
            title: "Entrega de Resultado",
            description: "Personal altamente capacitado, su auto superación y competencia personal."
          },
          {
            icon: "trust",
            title: "Rentabilidad y Confianza",
            description: "El desarrollo de nuestra actividad está orientado a alcanzar una rentabilidad y confianza absoluta de nuestro cliente."
          }
        ]
      },
      policies: {
        title: "Políticas Corporativas",
        subtitle: "Compromiso con la excelencia y la responsabilidad",
        items: [
          {
            title: "Política Integrada",
            description: "Política de seguridad, ambiental, salud ocupacional, calidad y responsabilidad social",
            icon: "shield",
            points: [
              "Reglamento interno de la empresa",
              "Reglamento de seguridad y salud en el trabajo",
              "Política integrada de calidad, seguridad y medio ambiente"
            ]
          },
          {
            title: "Política de Seguridad",
            description: "La seguridad es nuestro principal valor, cuidamos nuestra vida, salud y bienestar",
            icon: "safety",
            points: [
              "Política de Cero Alcohol y Drogas",
              "Política de suspensión de tareas",
              "Código en prevención de riesgos laborales"
            ]
          },
          {
            title: "Código de Ética",
            description: "Guías de comportamiento para todos los miembros de la organización",
            icon: "ethics",
            points: [
              "Fomentar responsabilidad social e innovación",
              "Mantener relaciones de equidad y transparencia",
              "Prohibir cualquier incentivo inapropiado"
            ]
          }
        ]
      },
      publications: {
        title: "Nuestras Publicaciones",
        subtitle: "Compartiendo conocimiento y experiencia",
        items: [
          {
            title: "Brochure Corporativo 2025",
            description: "Servicios de Ingeniería, Construcción, Mantenimiento y Supervisión",
            type: "PDF",
            size: "2.5 MB",
            pages: "6 páginas",
            date: "2025"
          },
          {
            title: "Manual de Políticas",
            description: "Política integrada de calidad, seguridad y responsabilidad social",
            type: "PDF",
            size: "1.8 MB",
            pages: "24 páginas",
            date: "2024"
          },
          {
            title: "Código de Ética",
            description: "Guías de comportamiento y conducta empresarial",
            type: "PDF",
            size: "850 KB",
            pages: "12 páginas",
            date: "2024"
          }
        ]
      },
      certifications: {
        title: "Nuestras Certificaciones",
        subtitle: "Reconocimientos que avalan nuestra calidad",
        items: [
          {
            name: "ISO 9001:2015",
            description: "Sistema de Gestión de Calidad",
            year: "2023",
            status: "Vigente",
            color: "blue"
          },
          {
            name: "ISO 14001:2015",
            description: "Sistema de Gestión Ambiental",
            year: "2023",
            status: "Vigente",
            color: "green"
          },
          {
            name: "ISO 45001:2018",
            description: "Sistema de Gestión de Seguridad y Salud",
            year: "2023",
            status: "Vigente",
            color: "orange"
          },
          {
            name: "OHSAS 18001",
            description: "Seguridad y Salud Ocupacional",
            year: "2022",
            status: "Vigente",
            color: "purple"
          }
        ]
      }
    },
    en: {
      hero: {
        subtitle: "Our Story",
        title: "BUILDING",
        titleHighlight: "TRUST",
        description: "Over 25 years of experience building quality infrastructure that transforms communities and connects Peru's future.",
        breadcrumbs: [{ name: 'About', path: '/about' }]
      }
      // English translations would go here...
    }
  };

  const content = aboutContent[currentLanguage.code as keyof typeof aboutContent] || aboutContent.es;

  // Animaciones más elegantes
  const elegantFadeUp = {
    initial: { opacity: 0, y: 80, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1], // Easing elegante
        type: "spring",
        damping: 25,
        stiffness: 100
      }
    }
  };

  const staggerContainer = {
    animate: { 
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1
      } 
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const IconComponent = ({ iconName, className = "w-6 h-6" }) => {
    const icons = {
      foundation: Building2,
      expansion: ArrowRight,
      innovation: Lightbulb,
      technology: Globe,
      leadership: Award,
      team: Users,
      responsibility: Leaf,
      delivery: Target,
      trust: Shield,
      shield: Shield,
      safety: CheckCircle,
      ethics: Heart
    };
    const Icon = icons[iconName] || Building2;
    return <Icon className={className} />;
  };

  // Divisor elegante entre secciones
  const SectionDivider = ({ variant = 'default' }) => (
    <div className="relative py-20">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="relative">
            {/* Línea principal */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            
            {/* Elemento central */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {variant === 'sparkle' ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200"
                >
                  <Sparkles className="w-6 h-6 text-[#00A8E0]" />
                </motion.div>
              ) : (
                <div className="w-3 h-3 bg-gradient-to-r from-[#00A8E0] to-[#00A651] rounded-full shadow-lg"></div>
              )}
            </div>
            
            {/* Ondas decorativas */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-24 h-24 border border-gray-200 rounded-full animate-pulse opacity-30"></div>
              <div className="absolute inset-0 w-32 h-32 border border-gray-100 rounded-full animate-pulse opacity-20 -m-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section - Tu componente original */}
      <SubPageHero
        currentLanguage={currentLanguage}
        title={content.hero.title}
        titleHighlight={content.hero.titleHighlight}
        subtitle={content.hero.subtitle}
        description={content.hero.description}
        backgroundImage="/1.jpg"
        breadcrumbs={content.hero.breadcrumbs}
        icon={<Users className="w-8 h-8 text-white" />}
        gradient="blue"
      />

      {/* Tu sección original de Misión */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        {/* Patrón de fondo sutil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #00A8E0 1px, transparent 0)`,
            backgroundSize: '30px 30px md:40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#00A8E0] to-[#00A651] rounded-xl md:rounded-2xl mb-6 md:mb-8 shadow-2xl"
            >
              <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </motion.div>

            <motion.h2 
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 md:mb-8 leading-tight px-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {currentLanguage.code === 'es' ? 'Nuestra Misión' : 'Our Mission'}
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#00A8E0] to-[#00A651] mx-auto mb-8 md:mb-10 rounded-full"
            ></motion.div>

            <motion.p
              className="text-lg md:text-2xl lg:text-3xl text-gray-600 leading-relaxed font-light px-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              {currentLanguage.code === 'es' 
                ? 'Somos una empresa comprometida con la excelencia en ingeniería y construcción, trabajando por un Perú más conectado y próspero.'
                : 'We are a company committed to excellence in engineering and construction, working for a more connected and prosperous Peru.'
              }
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Divisor elegante */}
      <SectionDivider />

      {/* Tu sección original de Valores mejorada */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-[#00A8E0]/5 rounded-full -translate-x-24 md:-translate-x-36 -translate-y-24 md:-translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#00A651]/5 rounded-full translate-x-32 md:translate-x-48 translate-y-32 md:translate-y-48"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto"
          >
            <motion.div
              variants={elegantFadeUp}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
              }}
              className="group text-center p-6 md:p-10 bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500"
            >
              <motion.div
                className="relative mb-4 md:mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#00A8E0] to-blue-500 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Award className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <motion.div
                  className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-[#00A8E0]/20 to-blue-500/20 rounded-xl md:rounded-2xl -z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 group-hover:text-[#00A8E0] transition-colors">
                {currentLanguage.code === 'es' ? 'Excelencia' : 'Excellence'}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {currentLanguage.code === 'es' 
                  ? 'Comprometidos con la más alta calidad en cada proyecto.'
                  : 'Committed to the highest quality in every project.'
                }
              </p>
            </motion.div>

            <motion.div
              variants={elegantFadeUp}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
              }}
              className="group text-center p-6 md:p-10 bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500"
            >
              <motion.div
                className="relative mb-4 md:mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#00A651] to-green-500 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Building className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <motion.div
                  className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-[#00A651]/20 to-green-500/20 rounded-xl md:rounded-2xl -z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 group-hover:text-[#00A651] transition-colors">
                {currentLanguage.code === 'es' ? 'Innovación' : 'Innovation'}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {currentLanguage.code === 'es' 
                  ? 'Utilizamos las últimas tecnologías en construcción.'
                  : 'We use the latest technologies in construction.'
                }
              </p>
            </motion.div>

            <motion.div
              variants={elegantFadeUp}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
              }}
              className="group text-center p-6 md:p-10 bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 md:col-span-1 col-span-full max-w-sm mx-auto md:max-w-none"
            >
              <motion.div
                className="relative mb-4 md:mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#00B9CE] to-cyan-500 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <motion.div
                  className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-[#00B9CE]/20 to-cyan-500/20 rounded-xl md:rounded-2xl -z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 group-hover:text-[#00B9CE] transition-colors">
                {currentLanguage.code === 'es' ? 'Compromiso' : 'Commitment'}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {currentLanguage.code === 'es' 
                  ? 'Dedicados al desarrollo sostenible del país.'
                  : 'Dedicated to the sustainable development of the country.'
                }
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Divisor con sparkle */}
      <SectionDivider variant="sparkle" />

      {/* NUEVAS SECCIONES CORPORATIVAS MEJORADAS */}

      {/* Nuestra Historia */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        {/* Elementos decorativos flotantes */}
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          className="absolute top-10 md:top-20 left-5 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-[#00A8E0]/10 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-16 h-16 md:w-32 md:h-32 bg-[#00A651]/10 rounded-full blur-xl"
          style={{ animationDelay: '3s' }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={elegantFadeUp} className="text-center mb-12 md:mb-20">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
                className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-[#00A8E0] to-[#00A651] rounded-2xl md:rounded-full mb-6 md:mb-8 shadow-2xl"
              >
                <Calendar className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight px-2">
                {content.history.title}
              </h2>
              <p className="text-lg md:text-2xl text-[#00A8E0] font-medium mb-6 md:mb-8 px-4">
                {content.history.subtitle}
              </p>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="w-24 md:w-40 h-1 md:h-1.5 bg-gradient-to-r from-[#00A8E0] via-[#00B9CE] to-[#00A651] mx-auto mb-8 md:mb-10 rounded-full"
              ></motion.div>

              <p className="text-base md:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed px-4">
                {content.history.description}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <motion.div variants={elegantFadeUp} className="space-y-6 md:space-y-8 order-2 lg:order-1">
                {content.history.milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.2,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 md:space-x-6 group cursor-pointer"
                  >
                    <motion.div 
                      className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#00A8E0] to-[#00A651] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-white font-bold text-sm md:text-lg">{index + 1}</span>
                    </motion.div>
                    <div className="flex-1 bg-white/70 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md group-hover:shadow-xl transition-all duration-300">
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">{milestone}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={elegantFadeUp} className="relative order-1 lg:order-2">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, type: "spring" }}
                  className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-12 relative z-10 backdrop-blur-sm border border-white/50"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(0, 168, 224, 0.4)",
                          "0 0 0 15px rgba(0, 168, 224, 0)",
                          "0 0 0 15px rgba(0, 168, 224, 0)",
                          "0 0 0 0 rgba(0, 168, 224, 0.4)",
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r from-[#00A8E0] to-[#00A651] rounded-2xl md:rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-2xl"
                    >
                      <span className="text-white font-bold text-2xl md:text-4xl">25+</span>
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Años de Experiencia</h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      Construyendo infraestructura de calidad que transforma el Perú
                    </p>
                  </div>
                </motion.div>

                {/* Elementos decorativos flotantes */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 md:-top-6 -right-4 md:-right-6 w-20 h-20 md:w-28 md:h-28 bg-[#00A651]/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 w-16 h-16 md:w-20 md:h-20 bg-[#00A8E0]/20 rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divisor elegante */}
      <SectionDivider />

      {/* Línea del Tiempo mejorada */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        {/* Patrón de fondo geométrico */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(30deg, #00A8E0 12%, transparent 12.5%, transparent 87%, #00A8E0 87.5%, #00A8E0), 
                             linear-gradient(150deg, #00A8E0 12%, transparent 12.5%, transparent 87%, #00A8E0 87.5%, #00A8E0)`,
            backgroundSize: '15px 26px md:20px 35px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={elegantFadeUp} className="text-center mb-12 md:mb-20">
              <motion.div
                initial={{ scale: 0, y: -50 }}
                whileInView={{ scale: 1, y: 0 }}
                transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-[#00A651] to-[#00B9CE] rounded-2xl md:rounded-full mb-6 md:mb-8 shadow-2xl"
              >
                <Star className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 md:mb-6 px-2">
                {content.timeline.title}
              </h2>
              <p className="text-lg md:text-2xl text-[#00A651] font-medium px-4">
                {content.timeline.subtitle}
              </p>
            </motion.div>

            <div className="relative">
              {/* Línea central mejorada - responsive */}
              <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 md:w-1 h-full bg-gradient-to-b from-[#00A8E0] via-[#00B9CE] to-[#00A651] rounded-full shadow-lg"></div>

              {content.timeline.events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.3,
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className={`flex items-center mb-12 md:mb-16 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Mobile: Content always on right, Desktop: Alternating */}
                  <motion.div 
                    className={`flex-1 md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right pl-16 md:pl-0' : 'md:pl-12 pl-16 md:pl-12'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                      <motion.span 
                        className="text-2xl md:text-4xl font-bold text-[#00A8E0] block mb-2 md:mb-3"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.3 + 0.5, type: "spring" }}
                      >
                        {event.year}
                      </motion.span>
                      <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">{event.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">{event.description}</p>
                    </div>
                  </motion.div>

                  {/* Mobile: Icon on left, Desktop: Center */}
                  <motion.div 
                    className={`absolute left-0 md:relative md:left-auto z-10 ${
                      index % 2 === 0 ? 'md:order-none' : 'md:order-first'
                    }`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: index * 0.3 + 0.2,
                      duration: 0.8,
                      type: "spring"
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-[#00A8E0] to-[#00A651] rounded-xl md:rounded-full flex items-center justify-center shadow-xl">
                      <IconComponent iconName={event.icon} className="w-6 h-6 md:w-10 md:h-10 text-white" />
                    </div>
                    
                    {/* Anillo pulsante */}
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 0, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                      className="absolute inset-0 w-12 h-12 md:w-20 md:h-20 border-2 border-[#00A8E0] rounded-xl md:rounded-full"
                    />
                  </motion.div>

                  {/* Desktop spacing */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divisor elegante */}
      <SectionDivider />

      {/* Nuestro Equipo Directivo mejorado - RESPONSIVE */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 50, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-20 left-20 w-40 h-40 bg-[#00A8E0]/5 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 60, repeat: Infinity, ease: "linear" },
              scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-20 right-20 w-60 h-60 bg-[#00A651]/5 rounded-full"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={elegantFadeUp} className="text-center mb-20">
              <motion.div
                initial={{ scale: 0, rotateY: -180 }}
                whileInView={{ scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, type: "spring" }}
                className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-[#00A8E0] to-[#00A651] rounded-full mb-8 shadow-2xl"
              >
                <Users className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6">
                {currentLanguage.code === 'es' ? 'Nuestro Equipo Directivo' : 'Our Management Team'}
              </h2>
              <p className="text-2xl text-[#00A651] font-medium mb-8">
                {currentLanguage.code === 'es' 
                  ? 'Liderazgo con experiencia y visión de futuro'
                  : 'Leadership with experience and future vision'
                }
              </p>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="w-40 h-1.5 bg-gradient-to-r from-[#00A8E0] via-[#00B9CE] to-[#00A651] mx-auto rounded-full"
              ></motion.div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
              {/* Williams Merino */}
              <motion.div
                variants={elegantFadeUp}
                whileHover={{ 
                  y: -20, 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                }}
                className="group bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 border border-white/50"
              >
                <div className="relative overflow-hidden">
                  <motion.div 
                    className="h-72 bg-gradient-to-br from-[#00A8E0] to-[#00A651] flex items-center justify-center relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Patrón de fondo */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '30px 30px'
                      }}></div>
                    </div>

                    <motion.div 
                      className="w-36 h-36 bg-white rounded-full flex items-center justify-center shadow-2xl relative z-10"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                    >
                      <span className="text-5xl font-bold bg-gradient-to-r from-[#00A8E0] to-[#00A651] bg-clip-text text-transparent">
                        WM
                      </span>
                    </motion.div>

                    {/* Icono flotante */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-6 right-6"
                    >
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Users className="w-7 h-7 text-white" />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
                
                <div className="p-8">
                  <motion.h3 
                    className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#00A8E0] transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Williams Merino
                  </motion.h3>
                  <p className="text-[#00A8E0] font-semibold mb-4 text-lg">
                    {currentLanguage.code === 'es' ? 'Gerente' : 'Manager'}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {currentLanguage.code === 'es' 
                      ? 'Más de 25 años de experiencia liderando proyectos de ingeniería y construcción. Visionario comprometido con la excelencia y el desarrollo sostenible del Perú.'
                      : 'Over 25 years of experience leading engineering and construction projects. Visionary committed to excellence and sustainable development in Peru.'
                    }
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <motion.div 
                      className="flex items-center text-gray-600"
                      whileHover={{ x: 5 }}
                    >
                      <Building2 className="w-5 h-5 mr-3 text-[#00A651]" />
                      <span className="text-sm">
                        {currentLanguage.code === 'es' ? 'Ingeniero Civil' : 'Civil Engineer'}
                      </span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-gray-600"
                      whileHover={{ x: 5 }}
                    >
                      <Award className="w-5 h-5 mr-3 text-[#00A651]" />
                      <span className="text-sm">
                        {currentLanguage.code === 'es' ? 'Fundador' : 'Founder'}
                      </span>
                    </motion.div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-medium">
                        {currentLanguage.code === 'es' ? 'Contacto:' : 'Contact:'}
                      </span>
                      <motion.span 
                        className="text-sm text-[#00A8E0] font-semibold"
                        whileHover={{ scale: 1.1 }}
                      >
                        962959719
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Cesar Merino */}
              <motion.div
                variants={elegantFadeUp}
                whileHover={{ 
                  y: -15, 
                  scale: 1.03,
                  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                }}
                className="group bg-white/80 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 border border-white/50"
              >
                <div className="relative overflow-hidden">
                  <motion.div 
                    className="h-48 md:h-72 bg-gradient-to-br from-[#00A651] to-[#00B9CE] flex items-center justify-center relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '20px 20px md:30px 30px'
                      }}></div>
                    </div>

                    <motion.div 
                      className="w-24 h-24 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center shadow-2xl relative z-10"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                    >
                      <span className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#00A651] to-[#00B9CE] bg-clip-text text-transparent">
                        CM
                      </span>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      className="absolute top-4 md:top-6 right-4 md:right-6"
                    >
                      <div className="w-10 h-10 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Target className="w-5 h-5 md:w-7 md:h-7 text-white" />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
                
                <div className="p-6 md:p-8">
                  <motion.h3 
                    className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3 group-hover:text-[#00A651] transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Cesar Merino
                  </motion.h3>
                  <p className="text-[#00A651] font-semibold mb-3 md:mb-4 text-base md:text-lg">
                    {currentLanguage.code === 'es' ? 'Gerente' : 'Manager'}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                    {currentLanguage.code === 'es' 
                      ? 'Especialista en gestión de proyectos de infraestructura, supervisión técnica y control de calidad. Experto en optimización de procesos constructivos.'
                      : 'Specialist in infrastructure project management, technical supervision and quality control. Expert in construction process optimization.'
                    }
                  </p>
                  
                  <div className="space-y-2 md:space-y-3">
                    <motion.div 
                      className="flex items-center text-gray-600"
                      whileHover={{ x: 5 }}
                    >
                      <Shield className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-[#00A651]" />
                      <span className="text-xs md:text-sm">
                        {currentLanguage.code === 'es' ? 'Gestión de Proyectos' : 'Project Management'}
                      </span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-gray-600"
                      whileHover={{ x: 5 }}
                    >
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-[#00A651]" />
                      <span className="text-xs md:text-sm">
                        {currentLanguage.code === 'es' ? 'Control de Calidad' : 'Quality Control'}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Victor Merino */}
              <motion.div
                variants={elegantFadeUp}
                whileHover={{ 
                  y: -15, 
                  scale: 1.03,
                  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                }}
                className="group bg-white/80 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 border border-white/50 md:col-span-1 col-span-full max-w-sm mx-auto md:max-w-none"
              >
                <div className="relative overflow-hidden">
                  <motion.div 
                    className="h-48 md:h-72 bg-gradient-to-br from-[#00B9CE] to-[#00A8E0] flex items-center justify-center relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '20px 20px md:30px 30px'
                      }}></div>
                    </div>

                    <motion.div 
                      className="w-24 h-24 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center shadow-2xl relative z-10"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                    >
                      <span className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#00B9CE] to-[#00A8E0] bg-clip-text text-transparent">
                        VM
                      </span>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                      className="absolute top-4 md:top-6 right-4 md:right-6"
                    >
                      <div className="w-10 h-10 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Lightbulb className="w-5 h-5 md:w-7 md:h-7 text-white" />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
                
                <div className="p-6 md:p-8">
                  <motion.h3 
                    className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3 group-hover:text-[#00B9CE] transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Victor Merino
                  </motion.h3>
                  <p className="text-[#00B9CE] font-semibold mb-3 md:mb-4 text-base md:text-lg">
                    {currentLanguage.code === 'es' ? 'Gerente' : 'Manager'}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                    {currentLanguage.code === 'es' 
                      ? 'Líder en implementación de tecnologías avanzadas en topografía, geodesia y diseño. Especialista en innovación de procesos técnicos y metodologías.'
                      : 'Leader in implementation of advanced technologies in surveying, geodesy and design. Specialist in technical process innovation and methodologies.'
                    }
                  </p>
                  
                  <div className="space-y-2 md:space-y-3">
                    <motion.div 
                      className="flex items-center text-gray-600"
                      whileHover={{ x: 5 }}
                    >
                      <Globe className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-[#00A651]" />
                      <span className="text-xs md:text-sm">
                        {currentLanguage.code === 'es' ? 'Topografía y Geodesia' : 'Surveying & Geodesy'}
                      </span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-gray-600"
                      whileHover={{ x: 5 }}
                    >
                      <Lightbulb className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-[#00A651]" />
                      <span className="text-xs md:text-sm">
                        {currentLanguage.code === 'es' ? 'Innovación Técnica' : 'Technical Innovation'}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mensaje inspiracional del equipo mejorado */}
            <motion.div
              variants={elegantFadeUp}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, type: "spring" }}
                className="bg-white/80 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-16 relative overflow-hidden border border-white/50"
              >
                {/* Gradiente superior */}
                <div className="absolute top-0 left-0 w-full h-2 md:h-3 bg-gradient-to-r from-[#00A8E0] via-[#00B9CE] to-[#00A651]"></div>
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                    className="flex justify-center mb-6 md:mb-8"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#00A8E0] to-[#00A651] rounded-2xl md:rounded-full flex items-center justify-center shadow-2xl">
                      <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight px-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    {currentLanguage.code === 'es' 
                      ? '"Juntos construimos el futuro del Perú"'
                      : '"Together we build Peru\'s future"'
                    }
                  </motion.h3>
                  
                  <motion.p
                    className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    {currentLanguage.code === 'es' 
                      ? 'Nuestro equipo directivo combina décadas de experiencia con una visión innovadora, trabajando cada día para entregar proyectos de infraestructura que transforman comunidades y conectan el país.'
                      : 'Our management team combines decades of experience with an innovative vision, working every day to deliver infrastructure projects that transform communities and connect the country.'
                    }
                  </motion.p>
                </div>

                {/* Elementos decorativos flotantes mejorados */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute -top-4 md:-top-6 -right-4 md:-right-6 w-20 h-20 md:w-32 md:h-32 bg-[#00A8E0]/10 rounded-full"
                />
                <motion.div
                  animate={{ 
                    rotate: -360,
                    scale: [1, 1.3, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                    scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 w-24 h-24 md:w-40 md:h-40 bg-[#00A651]/10 rounded-full"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Continúa con el resto de secciones mejoradas... */}
      
      {/* Divisor elegante */}
      <SectionDivider />

      {/* Propósito, Misión, Visión y Valores Detallados - MEJORADO */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-indigo-50/30 via-white to-purple-50/20 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 40, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-5 md:top-10 right-5 md:right-10 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-[#00A8E0]/5 to-[#00A651]/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              rotate: { duration: 50, repeat: Infinity, ease: "linear" },
              scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-5 md:bottom-10 left-5 md:left-10 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-200/10 to-blue-200/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={elegantFadeUp} className="text-center mb-12 md:mb-20">
              <motion.div
                initial={{ scale: 0, rotateY: -180 }}
                whileInView={{ scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, type: "spring" }}
                className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl md:rounded-full mb-6 md:mb-8 shadow-2xl"
              >
                <Eye className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 md:mb-6 px-2">
                {content.purpose.title}
              </h2>
            </motion.div>

            {/* Navegación de pestañas mejorada */}
            <motion.div 
              variants={elegantFadeUp}
              className="flex justify-center mb-10 md:mb-16 px-4"
            >
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-2 md:p-3 shadow-2xl border border-white/50 w-full max-w-2xl">
                <div className="grid grid-cols-2 md:flex md:space-x-2 gap-2 md:gap-0">
                  {['mission', 'vision', 'purpose', 'values'].map((tab) => (
                    <motion.button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${
                        activeTab === tab
                          ? 'bg-gradient-to-r from-[#00A8E0] to-[#00A651] text-white shadow-lg'
                          : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                      }`}
                    >
                      {tab === 'mission' && 'Misión'}
                      {tab === 'vision' && 'Visión'}
                      {tab === 'purpose' && 'Propósito'}
                      {tab === 'values' && 'Valores'}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contenido de pestañas mejorado */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {activeTab === 'purpose' && (
                <div className="text-center max-w-5xl mx-auto">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="bg-white/80 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-16 border border-white/50 relative overflow-hidden"
                  >
                    {/* Patrón de fondo */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 20px 20px, #00A8E0 1px, transparent 0)`,
                        backgroundSize: '30px 30px md:40px 40px'
                      }}></div>
                    </div>

                    <motion.div
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(0, 168, 224, 0.4)",
                          "0 0 0 20px rgba(0, 168, 224, 0)",
                          "0 0 0 20px rgba(0, 168, 224, 0)",
                          "0 0 0 0 rgba(0, 168, 224, 0.4)",
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-[#00A8E0] to-[#00A651] rounded-2xl md:rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-2xl relative z-10"
                    >
                      <Target className="w-10 h-10 md:w-12 md:h-12 text-white" />
                    </motion.div>

                    <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 md:mb-8 px-2">
                      {content.purpose.purpose.title}
                    </h3>
                    <p className="text-lg md:text-2xl text-gray-600 leading-relaxed px-4">
                      {content.purpose.purpose.text}
                    </p>
                  </motion.div>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="text-center max-w-5xl mx-auto">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="bg-white/80 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-16 border border-white/50"
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-[#00A651] to-green-500 rounded-2xl md:rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-2xl"
                    >
                      <Building2 className="w-10 h-10 md:w-12 md:h-12 text-white" />
                    </motion.div>

                    <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 md:mb-8 px-2">
                      {content.purpose.mission.title}
                    </h3>
                    <p className="text-lg md:text-2xl text-gray-600 leading-relaxed px-4">
                      {content.purpose.mission.text}
                    </p>
                  </motion.div>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="text-center max-w-5xl mx-auto">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="bg-white/80 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-16 border border-white/50"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-[#00B9CE] to-cyan-500 rounded-2xl md:rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-2xl"
                    >
                      <Eye className="w-10 h-10 md:w-12 md:h-12 text-white" />
                    </motion.div>

                    <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 md:mb-8 px-2">
                      {content.purpose.vision.title}
                    </h3>
                    <p className="text-lg md:text-2xl text-gray-600 leading-relaxed px-4">
                      {content.purpose.vision.text}
                    </p>
                  </motion.div>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                  {content.purpose.values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        delay: index * 0.15,
                        duration: 0.8,
                        type: "spring"
                      }}
                      whileHover={{ 
                        y: -10, 
                        scale: 1.02,
                        transition: { duration: 0.4 }
                      }}
                      className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 text-center hover:shadow-2xl transition-all duration-500 border border-white/50"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.8 }}
                        className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#00A8E0] to-[#00A651] rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:shadow-xl"
                      >
                        <IconComponent iconName={value.icon} className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </motion.div>
                      
                      <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 group-hover:text-[#00A8E0] transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {value.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Divisor elegante */}
      <SectionDivider variant="sparkle" />

      {/* Políticas Corporativas - MEJORADO */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-emerald-50/30 via-white to-teal-50/20 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 md:top-20 left-10 md:left-20 w-48 h-48 md:w-64 md:h-64 border border-[#00A651]/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-56 h-56 md:w-80 md:h-80 border border-[#00A8E0]/10 rounded-full"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={elegantFadeUp} className="text-center mb-12 md:mb-20">
              <motion.div
                initial={{ scale: 0, rotateY: 180 }}
                whileInView={{ scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, type: "spring" }}
                className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl md:rounded-full mb-6 md:mb-8 shadow-2xl"
              >
                <Shield className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 md:mb-6 px-2">
                {content.policies.title}
              </h2>
              <p className="text-lg md:text-2xl text-[#00A8E0] font-medium px-4">
                {content.policies.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
              {content.policies.items.map((policy, index) => (
                <motion.div
                  key={index}
                  variants={elegantFadeUp}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.03,
                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                  }}
                  className="group bg-white/80 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50 hover:shadow-3xl transition-all duration-700 relative overflow-hidden"
                >
                  {/* Gradiente superior */}
                  <div className="absolute top-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-[#00A8E0] to-[#00A651]"></div>

                  <div className="text-center mb-6 md:mb-8">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 1 }}
                      className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#00A8E0] to-[#00A651] rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:shadow-xl relative z-10"
                    >
                      <IconComponent iconName={policy.icon} className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </motion.div>

                    {/* Anillo pulsante */}
                    <motion.div
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.6, 0, 0.6]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                      className="absolute top-6 md:top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 border-2 border-[#00A8E0] rounded-xl md:rounded-2xl"
                    />

                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 group-hover:text-[#00A8E0] transition-colors">
                      {policy.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{policy.description}</p>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    {policy.points.map((point, pointIndex) => (
                      <motion.div
                        key={pointIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: pointIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-start space-x-3 md:space-x-4 group/item"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-[#00A651] to-green-500 rounded-full flex items-center justify-center mt-0.5"
                        >
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                        </motion.div>
                        <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-800 transition-colors text-sm md:text-base">
                          {point}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divisor elegante */}
      <SectionDivider />

      {/* Nuestras Publicaciones - MEJORADO */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 45, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-10 right-10 w-48 h-48 bg-blue-200/10 rounded-full blur-2xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={elegantFadeUp} className="text-center mb-20">
              <motion.div
                initial={{ scale: 0, rotateX: -90 }}
                whileInView={{ scale: 1, rotateX: 0 }}
                transition={{ duration: 1.2, type: "spring" }}
                className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-8 shadow-2xl"
              >
                <FileText className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6">
                {content.publications.title}
              </h2>
              <p className="text-2xl text-[#00A651] font-medium">
                {content.publications.subtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
              {content.publications.items.map((publication, index) => (
                <motion.div
                  key={index}
                  variants={elegantFadeUp}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.03,
                    transition: { duration: 0.4 }
                  }}
                  className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-white/50"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.8 }}
                        className="w-16 h-16 bg-gradient-to-r from-[#00A8E0] to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
                      >
                        <FileText className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="bg-gradient-to-r from-[#00A651] to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md"
                      >
                        {publication.type}
                      </motion.span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#00A8E0] transition-colors">
                      {publication.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{publication.description}</p>

                    <div className="flex justify-between text-sm text-gray-500 mb-8 bg-gray-50 rounded-lg p-3">
                      <span className="font-medium">{publication.size}</span>
                      <span className="font-medium">{publication.pages}</span>
                      <span className="font-medium">{publication.date}</span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-[#00A8E0] to-[#00A651] text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-3 group/btn"
                    >
                      <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Download className="w-5 h-5" />
                      </motion.div>
                      <span>Descargar</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divisor elegante */}
      <SectionDivider variant="sparkle" />

      {/* Nuestras Certificaciones - MEJORADO */}
      <section className="relative py-24 bg-gradient-to-br from-amber-50/30 via-white to-orange-50/20 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 50, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-20 left-20 w-72 h-72 bg-amber-200/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={elegantFadeUp} className="text-center mb-20">
              <motion.div
                initial={{ scale: 0, rotateZ: -180 }}
                whileInView={{ scale: 1, rotateZ: 0 }}
                transition={{ duration: 1.2, type: "spring" }}
                className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mb-8 shadow-2xl"
              >
                <Award className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6">
                {content.certifications.title}
              </h2>
              <p className="text-2xl text-[#00A8E0] font-medium">
                {content.certifications.subtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.certifications.items.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={elegantFadeUp}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -10,
                    rotateY: 5,
                    transition: { duration: 0.4 }
                  }}
                  className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center border border-white/50 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                >
                  {/* Elemento decorativo superior */}
                  <div className={`absolute top-0 left-0 w-full h-2 ${
                    cert.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                    cert.color === 'green' ? 'bg-gradient-to-r from-green-400 to-green-600' :
                    cert.color === 'orange' ? 'bg-gradient-to-r from-orange-400 to-orange-600' :
                    'bg-gradient-to-r from-purple-400 to-purple-600'
                  }`}></div>

                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 1 }}
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg ${
                      cert.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                      cert.color === 'green' ? 'bg-gradient-to-r from-green-400 to-green-600' :
                      cert.color === 'orange' ? 'bg-gradient-to-r from-orange-400 to-orange-600' :
                      'bg-gradient-to-r from-purple-400 to-purple-600'
                    }`}
                  >
                    <Award className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{cert.description}</p>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 font-medium">{cert.year}</span>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        cert.status === 'Vigente' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {cert.status}
                    </motion.span>
                  </div>

                  {/* Efecto de brillo en hover */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
};

export default AboutPage;