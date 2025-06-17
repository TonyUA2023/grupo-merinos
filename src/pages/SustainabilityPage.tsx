import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Leaf,
  Shield,
  Users,
  Globe,
  Target,
  ArrowRight,
  CheckCircle,
  Award,
  Heart,
  Recycle,
  Building,
  GraduationCap,
  UserCheck,
  Download
} from 'lucide-react';
import SubPageHero from '../components/SubPageHero';

interface SustainabilityPageProps {
  currentLanguage: { code: string };
}

const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ currentLanguage }) => {
  const [activeTab, setActiveTab] = useState<'projects' | 'safety' | 'communities' | 'environment'>('projects');

  const sustainabilityContent = {
    es: {
      hero: {
        subtitle: "Sostenibilidad",
        title: "COMPROMISO",
        titleHighlight: "SOSTENIBLE",
        description:
          "Trabajamos por un futuro mejor, implementando prácticas sostenibles que beneficien a las comunidades, el medio ambiente y generen valor compartido.",
        breadcrumbs: [{ name: 'Sostenibilidad', path: '/sustainability' }]
      },
      impactStats: [
        { number: "14", label: "Años sin multas ambientales", icon: "shield" },
        { number: "3,300", label: "Colaboradores capacitados", icon: "users" },
        { number: "100%", label: "Mano de obra local no calificada", icon: "userCheck" },
        { number: "46.5K", label: "Horas de capacitación", icon: "graduation" }
      ],
      sections: {
        projects: {
          title: "Ejecutamos Proyectos Sostenibles",
          description:
            "En Merino Ingenieros trabajamos con sostenibilidad, buscando lograr impactos positivos y de valor compartido para la vida de nuestros trabajadores, la sociedad y el medio ambiente; en línea con nuestra Política de Sostenibilidad.",
          highlights: [
            "Política de Sostenibilidad implementada",
            "Criterios ASG (Ambientales, Sociales y de Gobernanza)",
            "Reporte Anual de Sostenibilidad",
            "Impacto positivo en comunidades locales"
          ],
          image: "/images/sustainability/sustainable-projects.jpg"
        },
        safety: {
          title: "Seguridad y Salud Ocupacional",
          description:
            "La seguridad es nuestro principal valor. Cuidamos nuestra vida, salud y bienestar de nuestros compañeros de trabajo, implementando las mejores prácticas de seguridad industrial.",
          highlights: [
            "Cero accidentes como meta permanente",
            "Capacitación continua en seguridad",
            "Equipos de protección de última generación",
            "Protocolos de seguridad certificados"
          ],
          stats: [
            { value: "0", label: "Accidentes fatales en 2023" },
            { value: "100%", label: "Personal capacitado en seguridad" },
            { value: "24/7", label: "Monitoreo de seguridad" }
          ],
          image: "/images/sustainability/safety-health.jpg"
        },
        communities: {
          title: "Comunidades",
          description:
            "En cada uno de nuestros proyectos, tenemos una especial preocupación por la población local. Así trabajamos de la mano de nuestro cliente para crear oportunidades de desarrollo, así como la mejora de su calidad de vida.",
          stats: [
            { value: "100%", label: "de mano de obra no calificada local" },
            { value: "8%", label: "de mano de obra calificada local" },
            { value: "20", label: "proveedores locales" },
            { value: "3,300", label: "colaboradores capacitados en gestión social" }
          ],
          description2:
            "Nuestra compañía está comprometida con la gestión social de los lugares donde actúa, pues a través de ella fortalecemos la relación con el cliente y le agregamos valor.",
          image: "/images/sustainability/communities.jpg"
        },
        environment: {
          title: "Medio Ambiente",
          description:
            "En Merino Ingenieros operamos bajo un enfoque de mejora continua cuyo objetivo es maximizar nuestra productividad y a la par mitigar nuestro impacto en el medio ambiente.",
          description2:
            "Contamos con un Sistema de Gestión Ambiental certificado por el estándar ISO 14001, con el que aseguramos controles operacionales para reducir y mitigar cualquier impacto generado sobre el ambiente y ecosistema.",
          stats: [
            { value: "+2,242", unit: "KG", label: "de papel reciclado" },
            { value: "+1,250", unit: "KG", label: "de cartón reciclado" },
            { value: "14", label: "últimos años sin multas ni sanciones medioambientales" },
            { value: "46.5", unit: "mil", label: "horas de capacitación" }
          ],
          certifications: [
            "Sistema de Gestión Ambiental ISO 14001",
            "Más de 10 años con certificación",
            "Controles operacionales implementados"
          ],
          image: "/images/sustainability/environment.jpg"
        }
      },
      sdgs: {
        title: "Objetivos de Desarrollo Sostenible",
        subtitle: "Alineados al GRI",
        description:
          "Nuestras operaciones contribuyen directamente al cumplimiento de los Objetivos de Desarrollo Sostenible de las Naciones Unidas.",
        objectives: [
          { number: 1, title: "Fin de la Pobreza", color: "#E5233E", image: "/images/sdgs/1.jpg" },
          { number: 2, title: "Hambre Cero", color: "#DDA63A", image: "/images/sdgs/2.jpg" },
          { number: 3, title: "Salud y Bienestar", color: "#4C9F38", image: "/images/sdgs/3.jpg" },
          { number: 4, title: "Educación de Calidad", color: "#C5192D", image: "/images/sdgs/4.jpg" },
          { number: 5, title: "Igualdad de Género", color: "#FF3A21", image: "/images/sdgs/5.jpg" },
          { number: 8, title: "Trabajo Decente y Crecimiento Económico", color: "#A21942", image: "/images/sdgs/8.jpg" },
          { number: 10, title: "Reducción de las Desigualdades", color: "#DD1367", image: "/images/sdgs/10.jpg" },
          { number: 11, title: "Ciudades y Comunidades Sostenibles", color: "#FD6925", image: "/images/sdgs/11.jpg" },
          { number: 12, title: "Producción y Consumo Responsables", color: "#BF8B2E", image: "/images/sdgs/12.jpg" },
          { number: 16, title: "Paz, Justicia e Instituciones Sólidas", color: "#00689D", image: "/images/sdgs/16.jpg" }
        ]
      },
      reports: {
        title: "Reportes de Sostenibilidad",
        description: "Conoce nuestro progreso y compromiso a través de nuestros reportes anuales.",
        reports: [
          { year: "2023", available: true },
          { year: "2022", available: true }
        ]
      }
    },
    en: {
      hero: {
        subtitle: "Sustainability",
        title: "SUSTAINABLE",
        titleHighlight: "COMMITMENT",
        description:
          "We work for a better future, implementing sustainable practices that benefit communities, the environment and generate shared value.",
        breadcrumbs: [{ name: 'Sustainability', path: '/sustainability' }]
      },
      impactStats: [
        { number: "14", label: "Years without environmental fines", icon: "shield" },
        { number: "3,300", label: "Trained collaborators", icon: "users" },
        { number: "100%", label: "Local unskilled workforce", icon: "userCheck" },
        { number: "46.5K", label: "Training hours", icon: "graduation" }
      ],
      sections: {
        projects: {
          title: "We Execute Sustainable Projects",
          description:
            "At Merino Ingenieros we work with sustainability, seeking to achieve positive impacts and shared value for the lives of our workers, society and the environment; in line with our Sustainability Policy.",
          highlights: [
            "Implemented Sustainability Policy",
            "ESG Criteria (Environmental, Social and Governance)",
            "Annual Sustainability Report",
            "Positive impact on local communities"
          ],
          image: "/images/sustainability/sustainable-projects.jpg"
        },
        safety: {
          title: "Occupational Health and Safety",
          description:
            "Safety is our main value. We take care of our life, health and well-being of our coworkers, implementing the best industrial safety practices.",
          highlights: [
            "Zero accidents as permanent goal",
            "Continuous safety training",
            "Latest generation protection equipment",
            "Certified safety protocols"
          ],
          stats: [
            { value: "0", label: "Fatal accidents in 2023" },
            { value: "100%", label: "Personnel trained in safety" },
            { value: "24/7", label: "Safety monitoring" }
          ],
          image: "/images/sustainability/safety-health.jpg"
        },
        communities: {
          title: "Communities",
          description:
            "In each of our projects, we have a special concern for the local population. Thus we work hand in hand with our client to create development opportunities, as well as improving their quality of life.",
          stats: [
            { value: "100%", label: "local unskilled workforce" },
            { value: "8%", label: "local skilled workforce" },
            { value: "20", label: "local suppliers" },
            { value: "3,300", label: "collaborators trained in social management" }
          ],
          description2:
            "Our company is committed to social management in the places where it operates, as through it we strengthen the relationship with the client and add value.",
          image: "/images/sustainability/communities.jpg"
        },
        environment: {
          title: "Environment",
          description:
            "At Merino Ingenieros we operate under a continuous improvement approach whose objective is to maximize our productivity and at the same time mitigate our impact on the environment.",
          description2:
            "We have an Environmental Management System certified by the ISO 14001 standard, with which we ensure operational controls to reduce and mitigate any impact generated on the environment and ecosystem.",
          stats: [
            { value: "+2,242", unit: "KG", label: "recycled paper" },
            { value: "+1,250", unit: "KG", label: "recycled cardboard" },
            { value: "14", label: "recent years without environmental fines or sanctions" },
            { value: "46.5", unit: "thousand", label: "training hours" }
          ],
          certifications: [
            "ISO 14001 Environmental Management System",
            "Over 10 years certified",
            "Operational controls implemented"
          ],
          image: "/images/sustainability/environment.jpg"
        }
      },
      sdgs: {
        title: "Sustainable Development Goals",
        subtitle: "Aligned to GRI",
        description:
          "Our operations directly contribute to achieving the United Nations Sustainable Development Goals.",
        objectives: [
          { number: 1, title: "No Poverty", color: "#E5233E", image: "/images/sdgs/1_en.jpg" },
          { number: 2, title: "Zero Hunger", color: "#DDA63A", image: "/images/sdgs/2_en.jpg" },
          { number: 3, title: "Good Health and Well-being", color: "#4C9F38", image: "/images/sdgs/3_en.jpg" },
          { number: 4, title: "Quality Education", color: "#C5192D", image: "/images/sdgs/4_en.jpg" },
          { number: 5, title: "Gender Equality", color: "#FF3A21", image: "/images/sdgs/5_en.jpg" },
          { number: 8, title: "Decent Work and Economic Growth", color: "#A21942", image: "/images/sdgs/8_en.jpg" },
          { number: 10, title: "Reduced Inequalities", color: "#DD1367", image: "/images/sdgs/10_en.jpg" },
          { number: 11, title: "Sustainable Cities and Communities", color: "#FD6925", image: "/images/sdgs/11_en.jpg" },
          { number: 12, title: "Responsible Consumption and Production", color: "#BF8B2E", image: "/images/sdgs/12_en.jpg" },
          { number: 16, title: "Peace, Justice and Strong Institutions", color: "#00689D", image: "/images/sdgs/16_en.jpg" }
        ]
      },
      reports: {
        title: "Sustainability Reports",
        description: "Learn about our progress and commitment through our annual reports.",
        reports: [
          { year: "2023", available: true },
          { year: "2022", available: true }
        ]
      }
    }
  } as const;

  const content = sustainabilityContent[currentLanguage.code as keyof typeof sustainabilityContent] || sustainabilityContent.es;

  const fadeInUp = {
    initial: { opacity: 0, y: 80, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
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

  const getIcon = (iconName: string, className: string = "w-6 h-6") => {
    const icons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
      shield: Shield,
      users: Users,
      userCheck: UserCheck,
      graduation: GraduationCap,
      leaf: Leaf,
      recycle: Recycle,
      heart: Heart,
      building: Building
    };
    const IconComponent = icons[iconName] || Shield;
    return <IconComponent className={className} />;
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <SubPageHero
        currentLanguage={currentLanguage}
        title={content.hero.title}
        titleHighlight={content.hero.titleHighlight}
        subtitle={content.hero.subtitle}
        description={content.hero.description}
        backgroundImage="Sustainability/hero.jpg"
        breadcrumbs={content.hero.breadcrumbs}
        icon={<Leaf className="w-8 h-8 text-white" />}
        gradient="green"
      />

      {/* Impact Statistics */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#00A8E0] to-[#00A651]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {content.impactStats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="text-center text-white"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: idx * 0.2,
                    type: "spring",
                    bounce: 0.4
                  }}
                  className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                >
                  {getIcon(stat.icon, "w-8 h-8 md:w-10 md:h-10 text-white")}
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: idx * 0.2 + 0.2,
                    type: "spring",
                    bounce: 0.4
                  }}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm md:text-base text-white/90 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-2xl p-2 inline-flex overflow-x-auto">
              {[
                { key: 'projects', label: currentLanguage.code === 'es' ? 'Proyectos' : 'Projects', icon: Building },
                { key: 'safety', label: currentLanguage.code === 'es' ? 'Seguridad' : 'Safety', icon: Shield },
                { key: 'communities', label: currentLanguage.code === 'es' ? 'Comunidades' : 'Communities', icon: Users },
                { key: 'environment', label: currentLanguage.code === 'es' ? 'Ambiente' : 'Environment', icon: Leaf }
              ].map((tab) => {
                const IconComp = tab.icon;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as any)}
                    className={`flex items-center space-x-2 px-4 md:px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                      activeTab === tab.key
                        ? 'bg-gradient-to-r from-[#00A8E0] to-[#00A651] text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                    <span className="text-sm md:text-base">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <AnimatePresence mode="wait">
        <motion.section
          key={activeTab}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white"
        >
          <div className="container mx-auto px-4">
            {/* Projects */}
            {activeTab === 'projects' && (
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div variants={fadeInUp}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                      {content.sections.projects.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {content.sections.projects.description}
                    </p>
                    <div className="space-y-4">
                      {content.sections.projects.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-6 h-6 text-[#00A651] flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </motion.div>
                      ))}  
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="relative">
                    <img
                      src={content.sections.projects.image}
                      alt="Proyectos Sostenibles"
                      className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                  </motion.div>
                </div>
              </div>
            )}

            {/* Safety */}
            {activeTab === 'safety' && (
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                    {content.sections.safety.title}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                    {content.sections.safety.description}
                  </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                  <motion.div variants={fadeInUp} className="relative">
                    <img
                      src={content.sections.safety.image}
                      alt="Seguridad y Salud"
                      className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <div className="space-y-4 mb-8">
                      {content.sections.safety.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <Shield className="w-6 h-6 text-[#00A651] flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </motion.div>
                      ))}  
                    </div>
                  </motion.div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {content.sections.safety.stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
                    >
                      <div className="text-4xl font-bold text-[#00A651] mb-2">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Communities */}
            {activeTab === 'communities' && (
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                    {content.sections.communities.title}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
                    {content.sections.communities.description}
                  </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                  <motion.div variants={fadeInUp}>
                    <img
                      src={content.sections.communities.image}
                      alt="Comunidades"
                      className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                    />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {content.sections.communities.description2}
                    </p>
                  </motion.div>
                </div>
                <motion.div
                  variants={staggerContainer}
                  className="bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] rounded-3xl p-8 md:p-12 text-white"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#40E0D0]">
                    {currentLanguage.code === 'es' ? 'Cifras del 2023' : '2023 Figures'}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {content.sections.communities.stats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        variants={fadeInUp}
                        className="text-center"
                      >
                        <div className="text-3xl md:text-4xl font-bold mb-2 text-[#40E0D0]">
                          {stat.value}
                        </div>
                        <div className="text-sm md:text-base text-white/90">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}

            {/* Environment */}
            {activeTab === 'environment' && (
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                    {content.sections.environment.title}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                    {content.sections.environment.description}
                  </p>
                  <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                    {content.sections.environment.description2}
                  </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                  <motion.div variants={fadeInUp}>
                    <img
                      src={content.sections.environment.image}
                      alt="Medio Ambiente"
                      className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                    />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <div className="space-y-4">
                      {content.sections.environment.certifications.map((cert, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <Award className="w-6 h-6 text-[#00A651] flex-shrink-0" />
                          <span className="text-gray-700">{cert}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  variants={staggerContainer}
                  className="bg-gradient-to-br from-gray-100 to-white rounded-3xl p-8 md:p-12"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#40E0D0]">
                    {currentLanguage.code === 'es' ? 'Cifras del 2023' : '2023 Figures'}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {content.sections.environment.stats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        variants={fadeInUp}
                        className="text-center"
                      >
                        <div className="text-2xl md:text-3xl font-bold mb-1 text-[#00A651]">
                          {stat.value}
                          {stat.unit && <span className="text-lg">{stat.unit}</span>}
                        </div>
                        <div className="text-sm md:text-base text-gray-600">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Objetivos de Desarrollo Sostenible */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-gradient-to-r from-[#00A8E0] to-[#00A651] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              {content.sdgs.subtitle}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              {content.sdgs.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              {content.sdgs.description}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto"
          >
            {content.sdgs.objectives.map((obj, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="group"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={obj.image}
                    alt={obj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
                    <div className="text-2xl md:text-3xl font-bold">{obj.number}</div>
                    <div className="text-xs md:text-sm text-center leading-tight">
                      {obj.title}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reportes de Sostenibilidad */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              {content.reports.title}
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              {content.reports.description}
            </p>
            <div className="flex justify-center gap-6">
              {content.reports.reports.map((report, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#00A8E0] to-[#00A651] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-3"
                >
                  <Download className="w-5 h-5" />
                  <span>
                    {currentLanguage.code === 'es' ? 'Descargar Reporte' : 'Download Report'} {report.year}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#00A8E0] via-[#00B9CE] to-[#00A651]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-full mb-6 md:mb-8"
            >
              <Heart className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {currentLanguage.code === 'es'
                ? 'Únete a nuestro compromiso sostenible'
                : 'Join our sustainable commitment'}
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              {currentLanguage.code === 'es'
                ? 'Trabajemos juntos para crear un futuro más sostenible y responsable para las próximas generaciones.'
                : "Let's work together to create a more sustainable and responsible future for the next generations."}
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#00A8E0] font-bold py-4 px-8 md:px-12 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-3"
            >
              <span className="text-lg">
                {currentLanguage.code === 'es' ? 'Conoce Más' : 'Learn More'}
              </span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPage;