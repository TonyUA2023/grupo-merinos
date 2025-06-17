import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Building2, 
  ArrowRight,
  Filter,
  Search,
  Mountain,
  Droplets,
  Route,
  Trees,
  Ruler,
  Construction
} from 'lucide-react';
import SubPageHero from '../components/SubPageHero';

interface ProjectsPageProps {
  currentLanguage: { code: string };
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ currentLanguage }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projectsData = {
    es: {
      hero: {
        subtitle: "Nuestros Proyectos",
        title: "OBRAS",
        titleHighlight: "EJECUTADAS",
        description: "Más de 150 proyectos completados con éxito en todo el Perú, demostrando nuestra experiencia y compromiso con la excelencia.",
        breadcrumbs: [{ name: 'Proyectos', path: '/projects' }]
      },
      categories: [
        { id: 'all', name: 'Todos', icon: Filter },
        { id: 'vial', name: 'Obras Viales', icon: Route },
        { id: 'saneamiento', name: 'Saneamiento', icon: Droplets },
        { id: 'topografia', name: 'Topografía', icon: Ruler },
        { id: 'movimiento', name: 'Movimiento de Tierras', icon: Mountain },
        { id: 'obras', name: 'Obras de Arte', icon: Construction }
      ],
      projects: [
        {
          id: 'irsa-centro-puente',
          category: 'topografia',
          title: 'Concesión del Tramo II IRSA Centro Puente Ricardo Palma - La Oroya',
          client: 'DEVIANDES',
          location: 'Huancayo DV. Cerro de Pasco',
          year: '2016',
          duration: '2016',
          services: ['Servicios topográficos'],
          description: 'Servicios topográficos especializados para el proyecto de concesión vial IRSA Centro.',
          image: '/images/projects/irsa-centro.jpg',
          featured: true
        },
        {
          id: 'carretera-chupuro',
          category: 'topografia',
          title: 'Mejoramiento de la Carretera Chupuro - Vista Alegre',
          client: 'EXTRACO',
          location: 'Chicche - Chongos Alto - Huasicancha - Huancayo',
          year: '2017',
          duration: '2017',
          services: ['Estudio topográfico del proyecto'],
          description: 'Estudio topográfico completo para el mejoramiento de la carretera Chupuro - Vista Alegre.',
          image: '/images/projects/carretera-chupuro.jpg'
        },
        {
          id: 'alcantarillas-tmc',
          category: 'obras',
          title: 'Alcantarillas TMC, MCA, Muros de Contención y Pontones',
          client: 'EXTRACO',
          location: 'Vista Alegre - Chicche - Chongos Alto - Huasicancha - Huancayo',
          year: '2017-2018',
          duration: '2017-2018',
          services: ['Ejecución de obras de arte'],
          description: 'Ejecución de obras de arte como alcantarillas TMC, MCA, muros de contención y pontones en el proyecto de mejoramiento vial.',
          image: '/images/projects/alcantarillas.jpg',
          featured: true
        },
        {
          id: 'movimiento-tierras-olmos',
          category: 'movimiento',
          title: 'Instalación de Servicios de Vialidad Urbana e Instalación de Agua Potable y Alcantarillado',
          client: 'CONSORCIO NUEVO OLMOS',
          location: 'Ciudad de Olmos',
          year: '2018-2019',
          duration: '2018-2019',
          services: ['Movimiento de tierras', 'Tuberías de agua y desagüe', 'Pozas sedimentadoras'],
          description: 'Ejecución de movimiento de tierras para tuberías de agua y desagüe, pozas sedimentadoras en el proyecto de instalación de servicios.',
          image: '/images/projects/olmos.jpg',
          featured: true
        },
        {
          id: 'rehabilitacion-carretera',
          category: 'topografia',
          title: 'Rehabilitación de la Carretera Puerto Bermudez - San Alejandro Puerto Sungaro',
          client: 'CONSORCIO JOESA-SAN MARTIN',
          location: 'Puerto Sungaro',
          year: '2017',
          duration: '2017',
          services: ['Topografía y geodesia'],
          description: 'Servicio de topografía y geodesia en el proyecto de rehabilitación de la carretera Puerto Bermudez - San Alejandro.',
          image: '/images/projects/rehabilitacion-carretera.jpg'
        },
        {
          id: 'mejoramiento-vial-prado',
          category: 'vial',
          title: 'Mejoramiento y Conservación Vial por Niveles de Servicio del Corredor Vial',
          client: 'CONSORCIO VIAL COMAS',
          location: 'Buenos Aires - Pto. Prado - Mazarobeni - Camajeni - Poyeni - Tramos I,II,III',
          year: '2020-2021',
          duration: '2020-2021',
          services: ['Topografía y geodesia', 'Mejoramiento vial'],
          description: 'Servicio de topografía y geodesia en el proyecto de mejoramiento y conservación vial por niveles de servicio.',
          image: '/projects/mejoramiento-vial-prado/1.JPG'
        },
        {
          id: 'mejoramiento-huanuco',
          category: 'vial',
          title: 'Mejoramiento y Conservación Vial por Niveles de Servicio - Vial Huanuco',
          client: 'CHINA RAILWAY 20 BUREAU GROUP CORPORATION',
          location: 'La Union - Huallanca',
          year: '2021',
          duration: '2021',
          services: ['Topografía y geodesia'],
          description: 'Servicio de topografía y geodesia en el proyecto de mejoramiento y conservación vial por niveles de servicio.',
          image: '/projects/mejoramiento-vial-prado/3.JPG'
        },
        {
          id: 'ampliacion-agua',
          category: 'topografia',
          title: 'Ampliación y Mejoramiento del Servicio de Agua Potable y Alcantarillado',
          client: 'EMAPA HUANCAVELICA',
          location: 'Sectores Señor de los Milagros, Niño Lachocc y Pedregales - Barrio de Yananaco, Huancavelica',
          year: '2021',
          duration: '2021',
          services: ['Consultoría', 'Topografía y geodesia'],
          description: 'Servicio de consultoría, topografía y geodesia en el proyecto de ampliación y mejoramiento del servicio de agua potable.',
          image: '/images/projects/agua-huancavelica.jpg'
        },
        {
          id: 'desbroce-limpieza',
          category: 'movimiento',
          title: 'Servicio de Desbroce y Limpieza en el Proyecto',
          client: 'CONSORCIO VIAL COMAS',
          location: 'Corredor Vial PE-3S - Buenos Aires - Pto. Prado - Mazobeni - Camajeni - Poyeni Tramo III',
          year: '2021',
          duration: '2021',
          services: ['Desbroce', 'Limpieza'],
          description: 'Mejoramiento y conservación vial por niveles de servicio del corredor vial, servicio de desbroce y limpieza.',
          image: '/images/projects/desbroce.jpg',
          featured: true
        },
        {
          id: 'carretera-viscachani',
          category: 'topografia',
          title: 'Mejoramiento de la Carretera Viscachani, Callalli, Caylloma - Arequipa',
          client: 'CHINA RAILWAY N10 ENGINEERING GROUP',
          location: 'Arequipa',
          year: '2021',
          duration: '2021',
          services: ['Ingeniería', 'Topografía', 'Geodesia'],
          description: 'Servicio de ingeniería, topografía y geodesia en el proyecto de mejoramiento de la carretera Viscachani.',
          image: '/images/projects/viscachani.jpg'
        }
      ]
    },
    en: {
      hero: {
        subtitle: "Our Projects",
        title: "COMPLETED",
        titleHighlight: "WORKS",
        description: "More than 150 projects successfully completed throughout Peru, demonstrating our experience and commitment to excellence.",
        breadcrumbs: [{ name: 'Projects', path: '/projects' }]
      },
      categories: [
        { id: 'all', name: 'All', icon: Filter },
        { id: 'vial', name: 'Road Works', icon: Route },
        { id: 'saneamiento', name: 'Sanitation', icon: Droplets },
        { id: 'topografia', name: 'Surveying', icon: Ruler },
        { id: 'movimiento', name: 'Earthworks', icon: Mountain },
        { id: 'obras', name: 'Art Works', icon: Construction }
      ],
      projects: [
        {
          id: 'irsa-centro-puente',
          category: 'topografia',
          title: 'IRSA Center Section II Concession Ricardo Palma Bridge - La Oroya',
          client: 'DEVIANDES',
          location: 'Huancayo DV. Cerro de Pasco',
          year: '2016',
          duration: '2016',
          services: ['Topographic services'],
          description: 'Specialized topographic services for the IRSA Centro road concession project.',
          image: '/images/projects/irsa-centro.jpg',
          featured: true
        },
        {
          id: 'carretera-chupuro',
          category: 'topografia',
          title: 'Chupuro - Vista Alegre Road Improvement',
          client: 'EXTRACO',
          location: 'Chicche - Chongos Alto - Huasicancha - Huancayo',
          year: '2017',
          duration: '2017',
          services: ['Topographic study'],
          description: 'Complete topographic study for the Chupuro - Vista Alegre road improvement.',
          image: '/images/projects/carretera-chupuro.jpg'
        },
        {
          id: 'alcantarillas-tmc',
          category: 'obras',
          title: 'TMC Culverts, MCA, Retaining Walls and Bridges',
          client: 'EXTRACO',
          location: 'Vista Alegre - Chicche - Chongos Alto - Huasicancha - Huancayo',
          year: '2017-2018',
          duration: '2017-2018',
          services: ['Art works execution'],
          description: 'Execution of art works such as TMC culverts, MCA, retaining walls and bridges in the road improvement project.',
          image: '/images/projects/alcantarillas.jpg',
          featured: true
        },
        {
          id: 'movimiento-tierras-olmos',
          category: 'movimiento',
          title: 'Urban Road Services and Water & Sewage Installation',
          client: 'CONSORCIO NUEVO OLMOS',
          location: 'Olmos City',
          year: '2018-2019',
          duration: '2018-2019',
          services: ['Earthworks', 'Water and sewage pipes', 'Sedimentation ponds'],
          description: 'Earthworks execution for water and sewage pipes, sedimentation ponds in the services installation project.',
          image: '/images/projects/olmos.jpg',
          featured: true
        },
        {
          id: 'rehabilitacion-carretera',
          category: 'topografia',
          title: 'Puerto Bermudez - San Alejandro Puerto Sungaro Road Rehabilitation',
          client: 'CONSORCIO JOESA-SAN MARTIN',
          location: 'Puerto Sungaro',
          year: '2017',
          duration: '2017',
          services: ['Topography and geodesy'],
          description: 'Topography and geodesy service in the Puerto Bermudez - San Alejandro road rehabilitation project.',
          image: '/images/projects/rehabilitacion-carretera.jpg'
        },
        {
          id: 'mejoramiento-vial-prado',
          category: 'vial',
          title: 'Road Improvement and Conservation by Service Levels',
          client: 'CONSORCIO VIAL COMAS',
          location: 'Buenos Aires - Pto. Prado - Mazarobeni - Camajeni - Poyeni - Sections I,II,III',
          year: '2020-2021',
          duration: '2020-2021',
          services: ['Topography and geodesy', 'Road improvement'],
          description: 'Topography and geodesy service in the road improvement and conservation project by service levels.',
          image: '/projects/mejoramiento-vial-prado'
        },
        {
          id: 'mejoramiento-huanuco',
          category: 'vial',
          title: 'Road Improvement and Conservation by Service Levels - Huanuco Road',
          client: 'CHINA RAILWAY 20 BUREAU GROUP CORPORATION',
          location: 'La Union - Huallanca',
          year: '2021',
          duration: '2021',
          services: ['Topography and geodesy'],
          description: 'Topography and geodesy service in the road improvement and conservation project by service levels.',
          image: '/images/projects/huanuco-vial.jpg'
        },
        {
          id: 'ampliacion-agua',
          category: 'saneamiento',
          title: 'Water and Sewage Service Expansion and Improvement',
          client: 'EMAPA HUANCAVELICA',
          location: 'Señor de los Milagros, Niño Lachocc and Pedregales Sectors - Yananaco Neighborhood, Huancavelica',
          year: '2021',
          duration: '2021',
          services: ['Consulting', 'Topography and geodesy'],
          description: 'Consulting, topography and geodesy service in the water service expansion and improvement project.',
          image: '/images/projects/agua-huancavelica.jpg'
        },
        {
          id: 'desbroce-limpieza',
          category: 'movimiento',
          title: 'Clearing and Cleaning Service in the Project',
          client: 'CONSORCIO VIAL COMAS',
          location: 'PE-3S Road Corridor - Buenos Aires - Pto. Prado - Mazobeni - Camajeni - Poyeni Section III',
          year: '2021',
          duration: '2021',
          services: ['Clearing', 'Cleaning'],
          description: 'Road improvement and conservation by service levels, clearing and cleaning service.',
          image: '/images/projects/desbroce.jpg',
          featured: true
        },
        {
          id: 'carretera-viscachani',
          category: 'topografia',
          title: 'Viscachani, Callalli, Caylloma Road Improvement - Arequipa',
          client: 'CHINA RAILWAY N10 ENGINEERING GROUP',
          location: 'Arequipa',
          year: '2021',
          duration: '2021',
          services: ['Engineering', 'Topography', 'Geodesy'],
          description: 'Engineering, topography and geodesy service in the Viscachani road improvement project.',
          image: '/images/projects/viscachani.jpg'
        }
      ]
    }
  };

  const content = projectsData[currentLanguage.code as keyof typeof projectsData] || projectsData.es;

  // Filter projects based on category and search term
  const filteredProjects = content.projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SubPageHero
        currentLanguage={currentLanguage}
        title={content.hero.title}
        titleHighlight={content.hero.titleHighlight}
        subtitle={content.hero.subtitle}
        description={content.hero.description}
        backgroundImage="/projects/hero.jpg"
        breadcrumbs={content.hero.breadcrumbs}
        icon={<Construction className="w-8 h-8 text-white" />}
        gradient="blue"
      />

      {/* Filters Section */}
      <section className="py-8 md:py-12 bg-gray-50 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {content.categories.map((category) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    {selectedCategory === category.id && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-1 bg-white/20 text-xs px-2 py-0.5 rounded-full"
                      >
                        {filteredProjects.length}
                      </motion.span>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Search Bar */}
            <motion.div 
              className="relative w-full lg:w-80"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={currentLanguage.code === 'es' ? 'Buscar proyectos...' : 'Search projects...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
              />
              {searchTerm && (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </motion.button>
              )}
            </motion.div>
          </div>

          {/* Results count */}
          <motion.div 
            className="text-center mt-4 text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {currentLanguage.code === 'es' 
              ? `Mostrando ${filteredProjects.length} proyectos` 
              : `Showing ${filteredProjects.length} projects`}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchTerm}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  custom={index}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="group cursor-pointer"
                >
                  <motion.div 
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
                    whileHover={{ y: -10 }}
                    animate={hoveredProject === project.id ? floatingAnimation : {}}
                  >
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: hoveredProject === project.id ? 1.1 : 1
                        }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Featured Badge */}
                      {project.featured && (
                        <motion.div
                          initial={{ x: -100 }}
                          animate={{ x: 0 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                          className="absolute top-4 left-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                        >
                          {currentLanguage.code === 'es' ? 'Destacado' : 'Featured'}
                        </motion.div>
                      )}

                      {/* Year Badge */}
                      <motion.div 
                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800 shadow-lg"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      >
                        {project.year}
                      </motion.div>

                      {/* Quick View Icon */}
                      <motion.div
                        className="absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-lg"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ 
                          scale: hoveredProject === project.id ? 1 : 0,
                          rotate: hoveredProject === project.id ? 0 : -180
                        }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                      >
                        <ArrowRight className="w-6 h-6 text-primary-600" />
                      </motion.div>

                      {/* Category label */}
                      <div className="absolute bottom-4 left-4">
                        <motion.span 
                          className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          {content.categories.find(cat => cat.id === project.category)?.name}
                        </motion.span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 flex-1 flex flex-col">
                      <motion.h3 
                        className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {project.title}
                      </motion.h3>

                      <p className="text-gray-600 mb-4 line-clamp-2 flex-1">
                        {project.description}
                      </p>

                      {/* Project Details */}
                      <div className="space-y-2 mb-4">
                        <motion.div 
                          className="flex items-center gap-2 text-sm text-gray-500"
                          whileInView={{ x: [20, 0], opacity: [0, 1] }}
                          transition={{ delay: 0.1 }}
                        >
                          <Building2 className="w-4 h-4 text-primary-500" />
                          <span className="font-medium">{project.client}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-2 text-sm text-gray-500"
                          whileInView={{ x: [20, 0], opacity: [0, 1] }}
                          transition={{ delay: 0.2 }}
                        >
                          <MapPin className="w-4 h-4 text-primary-500" />
                          <span className="line-clamp-1">{project.location}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-2 text-sm text-gray-500"
                          whileInView={{ x: [20, 0], opacity: [0, 1] }}
                          transition={{ delay: 0.3 }}
                        >
                          <Calendar className="w-4 h-4 text-primary-500" />
                          <span>{project.duration}</span>
                        </motion.div>
                      </div>

                      {/* Services Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.services.slice(0, 3).map((service, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 + idx * 0.1, type: "spring", stiffness: 200 }}
                            whileHover={{ scale: 1.1 }}
                            className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full"
                          >
                            {service}
                          </motion.span>
                        ))}
                        {project.services.length > 3 && (
                          <motion.span 
                            className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full"
                            whileHover={{ scale: 1.1 }}
                          >
                            +{project.services.length - 3}
                          </motion.span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No results message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <motion.div 
                className="text-gray-400 mb-4"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Search className="w-16 h-16 mx-auto" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                {currentLanguage.code === 'es' 
                  ? 'No se encontraron proyectos' 
                  : 'No projects found'}
              </h3>
              <p className="text-gray-500">
                {currentLanguage.code === 'es' 
                  ? 'Intenta cambiar los filtros o el término de búsqueda' 
                  : 'Try changing the filters or search term'}
              </p>
              <motion.button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
              >
                {currentLanguage.code === 'es' ? 'Limpiar filtros' : 'Clear filters'}
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary-600 to-secondary-600 relative overflow-hidden">
        {/* Animated pattern background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)`,
          }}
          animate={{
            x: [0, 70],
            y: [0, 70],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center"
          >
            {[
              { number: "150+", label: currentLanguage.code === 'es' ? "Proyectos Completados" : "Completed Projects" },
              { number: "25+", label: currentLanguage.code === 'es' ? "Años de Experiencia" : "Years of Experience" },
              { number: "12", label: currentLanguage.code === 'es' ? "Departamentos" : "Departments" },
              { number: "100%", label: currentLanguage.code === 'es' ? "Satisfacción" : "Satisfaction" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    delay: idx * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: idx * 0.5
                  }}
                >
                  {stat.number}
                </motion.div>
                <motion.div 
                  className="text-white/80"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentLanguage.code === 'es' 
                ? '¿Tienes un proyecto en mente?' 
                : 'Have a project in mind?'}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {currentLanguage.code === 'es' 
                ? 'Contáctanos y hagamos realidad tu proyecto con la calidad y experiencia que nos caracteriza.'
                : 'Contact us and let\'s make your project a reality with the quality and experience that characterizes us.'}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
            >
              {currentLanguage.code === 'es' ? 'Contáctanos' : 'Contact Us'}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;