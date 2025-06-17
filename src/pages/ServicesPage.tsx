import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench,
  MapPin,
  Building2,
  Hammer,
  Mountain,
  Route,
  ArrowRight,
  CheckCircle,
  Eye,
  Layers,
  Compass,
  Settings,
  Truck,
  Shield,
  Users
} from 'lucide-react';
import SubPageHero from '../components/SubPageHero';

interface ServicesPageProps {
  currentLanguage: { code: string };
}

const ServicesPage: React.FC<ServicesPageProps> = ({ currentLanguage }) => {
  const [activeCategory, setActiveCategory] = useState('construction');

  const servicesContent = {
    es: {
      hero: {
        subtitle: "Nuestros Servicios",
        title: "SOLUCIONES",
        titleHighlight: "INTEGRALES",
        description: "Ofrecemos servicios completos de ingeniería, construcción, mantenimiento y supervisión con más de 25 años de experiencia.",
        breadcrumbs: [{ name: 'Servicios', path: '/services' }]
      },
      categories: {
        construction: {
          title: "Ingeniería y Construcción",
          description: "Servicios completos de construcción e infraestructura",
          icon: "building",
          services: [
            {
              name: "Movimiento de Tierras",
              description: "Excavación, relleno y nivelación de terrenos para preparación de obras civiles.",
              details: [
                "Excavación masiva y selectiva",
                "Relleno compactado",
                "Nivelación y conformación",
                "Mantenimiento vial"
              ],
              icon: "mountain",
              image: "/images/services/movimiento-tierras.jpg"
            },
            {
              name: "Obras de Arte y Drenaje",
              description: "Construcción de estructuras especiales y sistemas de drenaje.",
              details: [
                "Muros de contención (Cidopeo, Armado)",
                "Gaviones estructurales",
                "Alcantarillas tipo TMC, MCA, LINER",
                "Cunetas y sistemas de evacuación"
              ],
              icon: "layers",
              image: "/images/services/obras-drenaje.jpg"
            },
            {
              name: "Construcción de Puentes",
              description: "Diseño y construcción de puentes y estructuras viales.",
              details: [
                "Puentes vehiculares",
                "Puentes peatonales",
                "Badenes y obras de arte menor",
                "Estructuras especiales"
              ],
              icon: "route",
              image: "/images/services/construccion-puentes.jpg"
            },
            {
              name: "Obras de Saneamiento",
              description: "Sistemas de agua potable, alcantarillado y tratamiento.",
              details: [
                "Redes de agua potable",
                "Sistemas de alcantarillado",
                "Plantas de tratamiento",
                "Servicios de validación urbana"
              ],
              icon: "settings",
              image: "/images/services/obras-saneamiento.jpg"
            }
          ]
        },
        surveying: {
          title: "Ingeniería y Topografía",
          description: "Servicios especializados en topografía, geodesia y geomática",
          icon: "compass",
          services: [
            {
              name: "Topografía y Geodesia",
              description: "Levantamientos topográficos de alta precisión y georreferenciación.",
              details: [
                "Georreferenciación (Red primaria y secundaria)",
                "Poligonales de apoyo y control",
                "Red de nivelación de precisión",
                "Trazo y replanteo de obras"
              ],
              icon: "compass",
              image: "/images/services/topografia-geodesia.jpg"
            },
            {
              name: "Levantamientos Topográficos",
              description: "Cartografía digital y levantamientos especializados.",
              details: [
                "Levantamientos urbanos detallados",
                "Catastro urbano y rural",
                "Fotogrametría aérea (Drones)",
                "Batimetría de cuerpos de agua"
              ],
              icon: "map",
              image: "/images/services/levantamientos-topograficos.jpg"
            },
            {
              name: "Ingeniería Gráfica & CAD",
              description: "Diseño técnico y modelado digital especializado.",
              details: [
                "Diseño de planos técnicos",
                "Modelado 3D de proyectos",
                "Planos as-built",
                "Documentación técnica completa"
              ],
              icon: "eye",
              image: "/images/services/ingenieria-cad.jpg"
            }
          ]
        }
      },
      stats: [
        { number: "25+", label: "Años de Experiencia" },
        { number: "150+", label: "Proyectos Ejecutados" },
        { number: "50+", label: "Clientes Satisfechos" },
        { number: "100%", label: "Calidad Garantizada" }
      ]
    },
    en: {
      hero: {
        subtitle: "Our Services",
        title: "INTEGRAL",
        titleHighlight: "SOLUTIONS",
        description: "We offer complete engineering, construction, maintenance and supervision services with over 25 years of experience.",
        breadcrumbs: [{ name: 'Services', path: '/services' }]
      },
      categories: {
        construction: {
          title: "Engineering & Construction",
          description: "Comprehensive construction and infrastructure services",
          icon: "building",
          services: [
            {
              name: "Earthworks",
              description: "Excavation, filling, and leveling for civil works preparation.",
              details: [
                "Mass and selective excavation",
                "Compacted filling",
                "Leveling and shaping",
                "Road maintenance"
              ],
              icon: "mountain",
              image: "/images/services/movimiento-tierras.jpg"
            },
            {
              name: "Art Structures & Drainage",
              description: "Construction of special structures and drainage systems.",
              details: [
                "Retaining walls (Cast, Reinforced)",
                "Structural gabions",
                "TMC, MCA, LINER culverts",
                "Ditches and evacuation systems"
              ],
              icon: "layers",
              image: "/images/services/obras-drenaje.jpg"
            },
            {
              name: "Bridge Construction",
              description: "Design and construction of bridges and road structures.",
              details: [
                "Vehicular bridges",
                "Pedestrian bridges",
                "Speed bumps and minor structures",
                "Special structures"
              ],
              icon: "route",
              image: "/images/services/construccion-puentes.jpg"
            },
            {
              name: "Sanitation Works",
              description: "Potable water, sewerage, and treatment systems.",
              details: [
                "Potable water networks",
                "Sewer systems",
                "Treatment plants",
                "Urban validation services"
              ],
              icon: "settings",
              image: "/images/services/obras-saneamiento.jpg"
            }
          ]
        },
        surveying: {
          title: "Surveying & Geomatics",
          description: "Specialized services in surveying, geodesy and geomatics",
          icon: "compass",
          services: [
            {
              name: "Surveying & Geodesy",
              description: "High-precision topographic surveys and georeferencing.",
              details: [
                "Georeferencing (Primary & Secondary network)",
                "Control and support traverses",
                "Precision leveling network",
                "Layout and staking"
              ],
              icon: "compass",
              image: "/images/services/topografia-geodesia.jpg"
            },
            {
              name: "Topographic Surveys",
              description: "Digital cartography and specialized surveys.",
              details: [
                "Detailed urban surveys",
                "Urban and rural cadastre",
                "Aerial photogrammetry (Drones)",
                "Bathymetry of water bodies"
              ],
              icon: "map",
              image: "/images/services/levantamientos-topograficos.jpg"
            },
            {
              name: "Graphic Engineering & CAD",
              description: "Technical design and specialized digital modeling.",
              details: [
                "Technical plan design",
                "3D project modeling",
                "As-built drawings",
                "Complete technical documentation"
              ],
              icon: "eye",
              image: "/images/services/ingenieria-cad.jpg"
            }
          ]
        }
      },
      stats: [
        { number: "25+", label: "Years of Experience" },
        { number: "150+", label: "Projects Completed" },
        { number: "50+", label: "Satisfied Clients" },
        { number: "100%", label: "Guaranteed Quality" }
      ]
    }
  };

  const content = servicesContent[currentLanguage.code as keyof typeof servicesContent] || servicesContent.es;

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
    const icons = {
      building: Building2,
      compass: Compass,
      mountain: Mountain,
      layers: Layers,
      route: Route,
      settings: Settings,
      map: MapPin,
      eye: Eye,
      wrench: Wrench,
      hammer: Hammer,
      truck: Truck,
      shield: Shield
    };
    const Icon = icons[iconName as keyof typeof icons] || Building2;
    return <Icon className={className} />;
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
        backgroundImage="/1.jpg"
        breadcrumbs={content.hero.breadcrumbs}
        icon={<Wrench className="w-8 h-8 text-white" />}
        gradient="green"
      />

      {/* Estadísticas */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#00A8E0] to-[#00A651]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {content.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="text-center text-white"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: idx * 0.2, type: "spring", bounce: 0.4 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
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

      {/* Selector de Categorías */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              {currentLanguage.code === 'es' ? 'Nuestras Especialidades' : 'Our Specialties'}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {currentLanguage.code === 'es' 
                ? 'Ofrecemos soluciones integrales en dos grandes áreas de especialización'
                : 'We offer comprehensive solutions in two major areas of specialization'
              }
            </p>
          </motion.div>

          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-2xl p-2 inline-flex">
              {Object.entries(content.categories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center space-x-3 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeCategory === key
                      ? 'bg-gradient-to-r from-[#00A8E0] to-[#00A651] text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {getIcon(category.icon, "w-5 h-5")}
                  <span className="hidden md:inline">{category.title}</span>
                  <span className="md:hidden text-sm">
                    {key === 'construction' ? 'Construcción' : 'Topografía'}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios por Categoría */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            {/* Encabezado de categoría */}
            <div className="text-center mb-12 md:mb-16">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.4 }}
                className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-[#00A8E0] to-[#00A651] rounded-2xl mb-6 shadow-2xl"
              >
                {getIcon(
                  content.categories[activeCategory as keyof typeof content.categories].icon,
                  "w-10 h-10 md:w-12 md:h-12 text-white"
                )}
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                {content.categories[activeCategory as keyof typeof content.categories].title}
              </h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {content.categories[activeCategory as keyof typeof content.categories].description}
              </p>
            </div>

            {/* Grid de servicios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {content.categories[activeCategory as keyof typeof content.categories].services.map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                  {/* Imagen */}
                  <div className="overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Header del servicio */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.8 }}
                        className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-[#00A8E0] to-[#00A651] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
                      >
                        {getIcon(service.icon, "w-7 h-7 md:w-8 md:h-8 text-white")}
                      </motion.div>
                      
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-[#00A651] transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Lista de detalles */}
                  <div className="p-6">
                    <h5 className="font-semibold text-gray-800 mb-4 text-sm md:text-base">
                      {currentLanguage.code === 'es' ? 'Servicios incluidos:' : 'Services included:'}
                    </h5>
                    <div className="space-y-3">
                      {service.details.map((detail, di) => (
                        <motion.div
                          key={di}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: di * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-[#00A651] flex-shrink-0" />
                          <span className="text-gray-700 text-sm md:text-base">{detail}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Botón Ver Proyectos */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-6 bg-gradient-to-r from-[#00A8E0] to-[#00A651] text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                    >
                      <span>{currentLanguage.code === 'es' ? 'Ver Proyectos' : 'View Projects'}</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </motion.button>
                  </div>
                </motion.div>
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
              <Users className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {currentLanguage.code === 'es' 
                ? '¿Tienes un proyecto en mente?'
                : 'Do you have a project in mind?'
              }
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              {currentLanguage.code === 'es' 
                ? 'Nuestro equipo de expertos está listo para convertir tu visión en realidad. Contáctanos para una consulta gratuita.'
                : 'Our team of experts is ready to turn your vision into reality. Contact us for a free consultation.'
              }
            </p>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#00A8E0] font-bold py-4 px-8 md:px-12 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-3"
            >
              <span className="text-lg">
                {currentLanguage.code === 'es' ? 'Solicitar Cotización' : 'Request Quote'}
              </span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;