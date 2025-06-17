import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Building2, 
  Users, 
  Award,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  Download,
  Share2,
  CheckCircle
} from 'lucide-react';

interface ProjectDetailPageProps {
  currentLanguage: { code: string };
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ currentLanguage }) => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Base de datos completa de proyectos de Merino Ingenieros SAC
  // Los IDs deben coincidir exactamente con los del ProjectsPage.tsx
  const projectsDatabase = {
    'irsa-centro-puente': {
      es: {
        title: 'Concesión del Tramo II IRSA Centro Puente Ricardo Palma',
        subtitle: 'Proyecto de infraestructura vial estratégica',
        client: 'DEVIANDES',
        location: 'La Oroya - Huancayo, Cerro de Pasco',
        year: '2016',
        duration: '12 meses',
        category: 'Topografía y Geodesia',
        description: `Este proyecto representa uno de los trabajos más importantes de levantamiento topográfico 
        realizados por Merino Ingenieros SAC. La concesión del Tramo II IRSA Centro requirió servicios 
        especializados de topografía para garantizar la precisión en el desarrollo de la infraestructura vial.`,
        scope: [
          'Levantamiento topográfico de alta precisión',
          'Georreferenciación de puntos de control',
          'Establecimiento de redes geodésicas',
          'Procesamiento de datos y generación de planos',
          'Control de calidad y verificación de mediciones'
        ],
        achievements: [
          'Precisión milimétrica en todos los levantamientos',
          'Entrega adelantada del proyecto',
          'Cero incidentes de seguridad',
          'Satisfacción total del cliente'
        ],
        technologies: [
          'Estación Total de última generación',
          'GPS diferencial de alta precisión',
          'Software especializado CAD',
          'Drones para fotogrametría'
        ],
        images: [
          {
            url: '/images/projects/irsa-centro/1.jpg',
            caption: 'Vista panorámica del área de trabajo'
          },
          {
            url: '/images/projects/irsa-centro/2.jpg',
            caption: 'Equipo topográfico en acción'
          },
          {
            url: '/images/projects/irsa-centro/3.jpg',
            caption: 'Establecimiento de puntos de control'
          },
          {
            url: '/images/projects/irsa-centro/4.jpg',
            caption: 'Procesamiento de datos en campo'
          }
        ],
        testimonial: {
          text: "El trabajo de Merino Ingenieros superó nuestras expectativas. Su profesionalismo y precisión fueron fundamentales para el éxito del proyecto.",
          author: "Ing. Carlos Mendoza",
          position: "Director de Proyecto - DEVIANDES"
        }
      },
      en: {
        title: 'IRSA Center Section II Concession - Ricardo Palma Bridge',
        subtitle: 'Strategic road infrastructure project',
        client: 'DEVIANDES',
        location: 'La Oroya - Huancayo, Cerro de Pasco',
        year: '2016',
        duration: '12 months',
        category: 'Surveying and Geodesy',
        description: `This project represents one of the most important topographic survey works 
        carried out by Merino Ingenieros SAC. The IRSA Center Section II concession required 
        specialized surveying services to ensure precision in road infrastructure development.`,
        scope: [
          'High-precision topographic survey',
          'Control point georeferencing',
          'Geodetic network establishment',
          'Data processing and plan generation',
          'Quality control and measurement verification'
        ],
        achievements: [
          'Millimeter precision in all surveys',
          'Early project delivery',
          'Zero safety incidents',
          'Total client satisfaction'
        ],
        technologies: [
          'Latest generation Total Station',
          'High-precision differential GPS',
          'Specialized CAD software',
          'Photogrammetry drones'
        ],
        images: [
          {
            url: '/images/projects/irsa-centro/1.jpg',
            caption: 'Panoramic view of the work area'
          },
          {
            url: '/images/projects/irsa-centro/2.jpg',
            caption: 'Survey team in action'
          },
          {
            url: '/images/projects/irsa-centro/3.jpg',
            caption: 'Control point establishment'
          },
          {
            url: '/images/projects/irsa-centro/4.jpg',
            caption: 'Field data processing'
          }
        ],
        testimonial: {
          text: "Merino Ingenieros' work exceeded our expectations. Their professionalism and precision were fundamental to the project's success.",
          author: "Eng. Carlos Mendoza",
          position: "Project Director - DEVIANDES"
        }
      }
    },
    'carretera-chupuro': {
      es: {
        title: 'Mejoramiento de la Carretera Chupuro - Vista Alegre - Chicoche - Chongos Alto - Huasicancha - Huancayo',
        subtitle: 'Estudio topográfico integral para mejoramiento vial',
        client: 'EXTRACO',
        location: 'Chupuro - Vista Alegre - Chicoche - Chongos Alto - Huasicancha - Huancayo',
        year: '2017',
        duration: '8 meses',
        category: 'Topografía y Geodesia',
        description: `Proyecto de estudio topográfico del mejoramiento de la carretera que conecta importantes 
        localidades de la región central del Perú. Este proyecto requirió un análisis detallado del terreno 
        para optimizar el diseño de la nueva infraestructura vial.`,
        scope: [
          'Estudio topográfico detallado del corredor vial',
          'Levantamiento de perfil longitudinal y transversales',
          'Georreferenciación de toda la vía',
          'Análisis de pendientes y curvas existentes',
          'Modelado digital del terreno'
        ],
        achievements: [
          'Mapeo completo de 120 km de carretera',
          'Identificación de zonas críticas para mejoramiento',
          'Reducción del 15% en costos de construcción',
          'Optimización del trazado vial'
        ],
        technologies: [
          'Estaciones totales robotizadas',
          'GPS RTK de precisión centimétrica',
          'Software de modelado 3D',
          'Drones para levantamiento aerofotogramétrico'
        ],
        images: [
          {
            url: '/images/projects/carretera-chupuro/1.jpg',
            caption: 'Inicio del levantamiento topográfico'
          },
          {
            url: '/images/projects/carretera-chupuro/2.jpg',
            caption: 'Equipo trabajando en zona montañosa'
          },
          {
            url: '/images/projects/carretera-chupuro/3.jpg',
            caption: 'Medición de perfil transversal'
          },
          {
            url: '/images/projects/carretera-chupuro/4.jpg',
            caption: 'Procesamiento de datos en oficina móvil'
          }
        ],
        testimonial: {
          text: "La precisión y eficiencia del equipo de Merino Ingenieros fue clave para cumplir con los plazos establecidos del proyecto.",
          author: "Ing. María Rodríguez",
          position: "Jefe de Proyecto - EXTRACO"
        }
      },
      en: {
        title: 'Road Improvement Chupuro - Vista Alegre - Chicoche - Chongos Alto - Huasicancha - Huancayo',
        subtitle: 'Comprehensive topographic study for road improvement',
        client: 'EXTRACO',
        location: 'Chupuro - Vista Alegre - Chicoche - Chongos Alto - Huasicancha - Huancayo',
        year: '2017',
        duration: '8 months',
        category: 'Surveying and Geodesy',
        description: `Topographic study project for road improvement connecting important localities 
        in Peru's central region. This project required detailed terrain analysis to optimize 
        the design of new road infrastructure.`,
        scope: [
          'Detailed topographic study of road corridor',
          'Longitudinal and cross-section profile survey',
          'Complete road georeferencing',
          'Analysis of existing slopes and curves',
          'Digital terrain modeling'
        ],
        achievements: [
          'Complete mapping of 120 km of road',
          'Identification of critical improvement zones',
          '15% reduction in construction costs',
          'Road layout optimization'
        ],
        technologies: [
          'Robotic total stations',
          'Centimeter-precision RTK GPS',
          '3D modeling software',
          'Drones for aerial photogrammetry'
        ],
        images: [
          {
            url: '/images/projects/carretera-chupuro/1.jpg',
            caption: 'Start of topographic survey'
          },
          {
            url: '/images/projects/carretera-chupuro/2.jpg',
            caption: 'Team working in mountainous area'
          },
          {
            url: '/images/projects/carretera-chupuro/3.jpg',
            caption: 'Cross-section profile measurement'
          },
          {
            url: '/images/projects/carretera-chupuro/4.jpg',
            caption: 'Data processing in mobile office'
          }
        ],
        testimonial: {
          text: "The precision and efficiency of Merino Ingenieros team was key to meeting the project's established deadlines.",
          author: "Eng. María Rodríguez",
          position: "Project Manager - EXTRACO"
        }
      }
    },
    'alcantarillas-tmc': {
      es: {
        title: 'Alcantarillas (TMC, MCA), Muros de Contención y Pontones',
        subtitle: 'Obras de arte especializadas en infraestructura vial',
        client: 'EXTRACO',
        location: 'Carretera Chupuro - Vista Alegre - Chicoche - Chongos Alto - Huasicancha - Huancayo',
        year: '2017-2018',
        duration: '14 meses',
        category: 'Construcción y Obras de Arte',
        description: `Ejecución especializada de obras de arte complementarias para el mejoramiento 
        de la carretera, incluyendo alcantarillas de tubería metálica corrugada (TMC), alcantarillas 
        de marco de concreto armado (MCA), muros de contención y pontones estratégicos.`,
        scope: [
          'Construcción de 45 alcantarillas TMC',
          'Ejecución de 28 alcantarillas MCA',
          'Construcción de 12 muros de contención',
          'Instalación de 8 pontones vehiculares',
          'Control de calidad y supervisión técnica'
        ],
        achievements: [
          'Cero accidentes durante la construcción',
          'Cumplimiento del 100% de especificaciones técnicas',
          'Entrega anticipada en 2 semanas',
          'Certificación de calidad ISO 9001'
        ],
        technologies: [
          'Maquinaria pesada especializada',
          'Concreto de alta resistencia',
          'Sistemas de encofrado modulares',
          'Control topográfico continuo'
        ],
        images: [
          {
            url: '/images/projects/obras-arte/1.jpg',
            caption: 'Construcción de alcantarilla TMC'
          },
          {
            url: '/images/projects/obras-arte/2.jpg',
            caption: 'Instalación de muro de contención'
          },
          {
            url: '/images/projects/obras-arte/3.jpg',
            caption: 'Obra terminada - pontón vehicular'
          },
          {
            url: '/images/projects/obras-arte/4.jpg',
            caption: 'Control de calidad en alcantarilla MCA'
          }
        ],
        testimonial: {
          text: "La calidad constructiva y el cumplimiento de plazos de Merino Ingenieros superó nuestras expectativas más altas.",
          author: "Ing. Roberto Silva",
          position: "Supervisor de Obras - EXTRACO"
        }
      },
      en: {
        title: 'Culverts (TMC, MCA), Retaining Walls and Bridges',
        subtitle: 'Specialized art works in road infrastructure',
        client: 'EXTRACO',
        location: 'Chupuro - Vista Alegre - Chicoche - Chongos Alto - Huasicancha - Huancayo Road',
        year: '2017-2018',
        duration: '14 months',
        category: 'Construction and Art Works',
        description: `Specialized execution of complementary art works for road improvement, 
        including corrugated metal pipe culverts (TMC), reinforced concrete frame culverts (MCA), 
        retaining walls and strategic bridges.`,
        scope: [
          'Construction of 45 TMC culverts',
          'Execution of 28 MCA culverts',
          'Construction of 12 retaining walls',
          'Installation of 8 vehicular bridges',
          'Quality control and technical supervision'
        ],
        achievements: [
          'Zero accidents during construction',
          '100% compliance with technical specifications',
          'Early delivery by 2 weeks',
          'ISO 9001 quality certification'
        ],
        technologies: [
          'Specialized heavy machinery',
          'High-strength concrete',
          'Modular formwork systems',
          'Continuous topographic control'
        ],
        images: [
          {
            url: '/images/projects/obras-arte/1.jpg',
            caption: 'TMC culvert construction'
          },
          {
            url: '/images/projects/obras-arte/2.jpg',
            caption: 'Retaining wall installation'
          },
          {
            url: '/images/projects/obras-arte/3.jpg',
            caption: 'Finished work - vehicular bridge'
          },
          {
            url: '/images/projects/obras-arte/4.jpg',
            caption: 'Quality control on MCA culvert'
          }
        ],
        testimonial: {
          text: "The construction quality and deadline compliance of Merino Ingenieros exceeded our highest expectations.",
          author: "Eng. Roberto Silva",
          position: "Works Supervisor - EXTRACO"
        }
      }
    },
    'rehabilitacion-carretera': {
      es: {
        title: 'Rehabilitación de la Carretera Puerto Bermúdez - San Alejandro Puerto Sungaro',
        subtitle: 'Servicios de topografía y geodesia para rehabilitación vial',
        client: 'CONSORCIO JOESA-SAN MARTIN',
        location: 'Puerto Bermúdez - San Alejandro Puerto Sungaro',
        year: '2017',
        duration: '10 meses',
        category: 'Topografía y Geodesia',
        description: `Servicios especializados de topografía y geodesia para la rehabilitación 
        de la importante carretera que conecta Puerto Bermúdez con San Alejandro Puerto Sungaro, 
        una vía estratégica para el desarrollo de la región amazónica.`,
        scope: [
          'Levantamiento topográfico de la vía existente',
          'Replanteo de la nueva geometría vial',
          'Control geodésico de la construcción',
          'Supervisión topográfica de obras',
          'Elaboración de planos as-built'
        ],
        achievements: [
          'Rehabilitación exitosa de 85 km de carretera',
          'Mejora significativa en transitabilidad',
          'Reducción del tiempo de viaje en 40%',
          'Cumplimiento estricto de especificaciones'
        ],
        technologies: [
          'GPS diferencial L1/L2',
          'Estaciones totales de precisión',
          'Niveles digitales automáticos',
          'Software de diseño vial especializado'
        ],
        images: [
          {
            url: '/images/projects/puerto-bermudez/1.jpg',
            caption: 'Levantamiento en zona selvática'
          },
          {
            url: '/images/projects/puerto-bermudez/2.jpg',
            caption: 'Replanteo de nueva geometría'
          },
          {
            url: '/images/projects/puerto-bermudez/3.jpg',
            caption: 'Control topográfico durante construcción'
          },
          {
            url: '/images/projects/puerto-bermudez/4.jpg',
            caption: 'Carretera rehabilitada'
          }
        ],
        testimonial: {
          text: "Merino Ingenieros demostró gran capacidad técnica y adaptación a las condiciones desafiantes de la selva peruana.",
          author: "Ing. Luis Paredes",
          position: "Coordinador Técnico - CONSORCIO JOESA-SAN MARTIN"
        }
      },
      en: {
        title: 'Road Rehabilitation Puerto Bermúdez - San Alejandro Puerto Sungaro',
        subtitle: 'Surveying and geodesy services for road rehabilitation',
        client: 'CONSORCIO JOESA-SAN MARTIN',
        location: 'Puerto Bermúdez - San Alejandro Puerto Sungaro',
        year: '2017',
        duration: '10 months',
        category: 'Surveying and Geodesy',
        description: `Specialized surveying and geodesy services for the rehabilitation 
        of the important road connecting Puerto Bermúdez with San Alejandro Puerto Sungaro, 
        a strategic route for Amazon region development.`,
        scope: [
          'Topographic survey of existing road',
          'Layout of new road geometry',
          'Geodetic control of construction',
          'Topographic supervision of works',
          'As-built drawings preparation'
        ],
        achievements: [
          'Successful rehabilitation of 85 km of road',
          'Significant improvement in trafficability',
          '40% reduction in travel time',
          'Strict compliance with specifications'
        ],
        technologies: [
          'L1/L2 differential GPS',
          'Precision total stations',
          'Automatic digital levels',
          'Specialized road design software'
        ],
        images: [
          {
            url: '/images/projects/puerto-bermudez/1.jpg',
            caption: 'Survey in jungle area'
          },
          {
            url: '/images/projects/puerto-bermudez/2.jpg',
            caption: 'New geometry layout'
          },
          {
            url: '/images/projects/puerto-bermudez/3.jpg',
            caption: 'Topographic control during construction'
          },
          {
            url: '/images/projects/puerto-bermudez/4.jpg',
            caption: 'Rehabilitated road'
          }
        ],
        testimonial: {
          text: "Merino Ingenieros demonstrated great technical capacity and adaptation to the challenging conditions of the Peruvian jungle.",
          author: "Eng. Luis Paredes",
          position: "Technical Coordinator - CONSORCIO JOESA-SAN MARTIN"
        }
      }
    },
    'movimiento-tierras-olmos': {
      es: {
        title: 'Instalación de Servicios de Vialidad Urbana e Instalación de Servicios de Agua Potable y Alcantarillado - Ciudad de Olmos',
        subtitle: 'Movimiento de tierras para infraestructura urbana integral',
        client: 'CONSORCIO NUEVO OLMOS',
        location: 'Ciudad de Olmos',
        year: '2018-2019',
        duration: '16 meses',
        category: 'Movimiento de Tierras',
        description: `Proyecto integral de movimiento de tierras para la instalación de servicios 
        de vialidad urbana y sistemas de agua potable y alcantarillado en la ciudad de Olmos, 
        incluyendo excavaciones para tuberías y construcción de pozas sedimentadoras.`,
        scope: [
          'Excavación de zanjas para tuberías de agua potable',
          'Excavación de zanjas para redes de alcantarillado',
          'Construcción de pozas sedimentadoras',
          'Movimiento de tierras para vialidad urbana',
          'Compactación y nivelación de superficies'
        ],
        achievements: [
          'Movimiento de 45,000 m³ de material',
          'Instalación de 12 km de tuberías',
          'Construcción de 8 pozas sedimentadoras',
          'Mejora del 100% en servicios básicos'
        ],
        technologies: [
          'Excavadoras de alta precisión',
          'Compactadoras vibratorias',
          'Equipos de nivelación láser',
          'Sistemas de bombeo especializado'
        ],
        images: [
          {
            url: '/images/projects/olmos/1.jpg',
            caption: 'Excavación para tuberías de agua'
          },
          {
            url: '/images/projects/olmos/2.jpg',
            caption: 'Construcción de poza sedimentadora'
          },
          {
            url: '/images/projects/olmos/3.jpg',
            caption: 'Instalación de sistema de alcantarillado'
          },
          {
            url: '/images/projects/olmos/4.jpg',
            caption: 'Vialidad urbana terminada'
          }
        ],
        testimonial: {
          text: "El compromiso de Merino Ingenieros con la calidad y los plazos fue fundamental para el éxito de este proyecto urbano.",
          author: "Ing. Ana García",
          position: "Directora de Proyecto - CONSORCIO NUEVO OLMOS"
        }
      },
      en: {
        title: 'Installation of Urban Road Services and Water Supply and Sewerage Services - Olmos City',
        subtitle: 'Earthworks for comprehensive urban infrastructure',
        client: 'CONSORCIO NUEVO OLMOS',
        location: 'Olmos City',
        year: '2018-2019',
        duration: '16 months',
        category: 'Earthworks',
        description: `Comprehensive earthworks project for the installation of urban road services 
        and water supply and sewerage systems in Olmos city, including excavations for pipelines 
        and construction of sedimentation ponds.`,
        scope: [
          'Trench excavation for water supply pipes',
          'Trench excavation for sewerage networks',
          'Construction of sedimentation ponds',
          'Earthworks for urban roads',
          'Surface compaction and leveling'
        ],
        achievements: [
          'Movement of 45,000 m³ of material',
          'Installation of 12 km of pipelines',
          'Construction of 8 sedimentation ponds',
          '100% improvement in basic services'
        ],
        technologies: [
          'High-precision excavators',
          'Vibratory compactors',
          'Laser leveling equipment',
          'Specialized pumping systems'
        ],
        images: [
          {
            url: '/images/projects/olmos/1.jpg',
            caption: 'Excavation for water pipes'
          },
          {
            url: '/images/projects/olmos/2.jpg',
            caption: 'Sedimentation pond construction'
          },
          {
            url: '/images/projects/olmos/3.jpg',
            caption: 'Sewerage system installation'
          },
          {
            url: '/images/projects/olmos/4.jpg',
            caption: 'Completed urban roads'
          }
        ],
        testimonial: {
          text: "Merino Ingenieros' commitment to quality and deadlines was fundamental to the success of this urban project.",
          author: "Eng. Ana García",
          position: "Project Director - CONSORCIO NUEVO OLMOS"
        }
      }
    },
    'mejoramiento-vial-prado': {
      es: {
        title: 'Mejoramiento y Conservación Vial por Niveles de Servicio del Corredor Vial Comas - Satipo - Atalaya - Buenos Aires - Poyeni',
        subtitle: 'Proyecto integral de mejoramiento vial multi-tramo',
        client: 'CONSORCIO VIAL COMAS',
        location: 'EMP. PE-3S (Concepción) - Comas - EMP. PE-5S (Satipo) / EMP. PE-5S (Pto. Ocopa) - Atalaya / EMP. PE-5S (Dv. Bajo Kimiri) - Buenos Aires - Pto. Prado - Mazarobeni - Camajeni - Poyeni',
        year: '2020-2021',
        duration: '18 meses',
        category: 'Topografía y Conservación Vial',
        description: `Proyecto de gran envergadura para el mejoramiento y conservación vial por niveles 
        de servicio de uno de los corredores viales más importantes de la región central del Perú, 
        abarcando múltiples tramos estratégicos.`,
        scope: [
          'Servicios topográficos especializados en los 3 tramos',
          'Levantamiento geodésico de referencia',
          'Control topográfico durante la ejecución',
          'Supervisión de niveles de servicio',
          'Elaboración de documentación técnica'
        ],
        achievements: [
          'Mejoramiento de 180 km de corredor vial',
          'Reducción del 50% en tiempo de viaje',
          'Incremento significativo en seguridad vial',
          'Certificación de calidad en todos los tramos'
        ],
        technologies: [
          'Sistemas GPS RTK de red',
          'Estaciones totales robotizadas',
          'Drones para inspección vial',
          'Software de gestión de carreteras'
        ],
        images: [
          {
            url: '/projects/mejoramiento-vial-prado/1.JPG',
            caption: 'Levantamiento topográfico en Tramo I'
          },
          {
            url: '/projects/mejoramiento-vial-prado/3.JPG',
            caption: 'Control geodésico en zona de selva'
          },
          {
            url: '/projects/mejoramiento-vial-prado/3.JPG',
            caption: 'Supervisión de obras en Tramo II'
          },
          {
            url: '/projects/mejoramiento-vial-prado/3.JPG',
            caption: 'Corredor vial mejorado'
          }
        ],
        testimonial: {
          text: "La experiencia y capacidad técnica de Merino Ingenieros fue clave para el éxito de este complejo proyecto multi-tramo.",
          author: "Ing. Pedro Ramírez",
          position: "Gerente de Proyecto - CONSORCIO VIAL COMAS"
        }
      },
      en: {
        title: 'Road Improvement and Conservation by Service Levels of Comas - Satipo - Atalaya - Buenos Aires - Poyeni Road Corridor',
        subtitle: 'Comprehensive multi-section road improvement project',
        client: 'CONSORCIO VIAL COMAS',
        location: 'EMP. PE-3S (Concepción) - Comas - EMP. PE-5S (Satipo) / EMP. PE-5S (Pto. Ocopa) - Atalaya / EMP. PE-5S (Dv. Bajo Kimiri) - Buenos Aires - Pto. Prado - Mazarobeni - Camajeni - Poyeni',
        year: '2020-2021',
        duration: '18 months',
        category: 'Surveying and Road Conservation',
        description: `Large-scale project for road improvement and conservation by service levels 
        of one of the most important road corridors in Peru's central region, covering multiple 
        strategic sections.`,
        scope: [
          'Specialized topographic services in all 3 sections',
          'Reference geodetic survey',
          'Topographic control during execution',
          'Service level supervision',
          'Technical documentation preparation'
        ],
        achievements: [
          'Improvement of 180 km road corridor',
          '50% reduction in travel time',
          'Significant increase in road safety',
          'Quality certification in all sections'
        ],
        technologies: [
          'Network RTK GPS systems',
          'Robotic total stations',
          'Drones for road inspection',
          'Road management software'
        ],
        images: [
          {
            url: '/images/projects/corredor-comas/1.jpg',
            caption: 'Topographic survey in Section I'
          },
          {
            url: '/images/projects/corredor-comas/2.jpg',
            caption: 'Geodetic control in jungle area'
          },
          {
            url: '/images/projects/corredor-comas/3.jpg',
            caption: 'Works supervision in Section II'
          },
          {
            url: '/images/projects/corredor-comas/4.jpg',
            caption: 'Improved road corridor'
          }
        ],
        testimonial: {
          text: "Merino Ingenieros' experience and technical capacity was key to the success of this complex multi-section project.",
          author: "Eng. Pedro Ramírez",
          position: "Project Manager - CONSORCIO VIAL COMAS"
        }
      }
    },
    'mejoramiento-huanuco': {
      es: {
        title: 'Mejoramiento y Conservación Vial por Niveles de Servicio y Operación del Corredor Vial Huánuco - La Unión - Huallanca',
        subtitle: 'Servicios de ingeniería, topografía y geodesia',
        client: 'CHINA RAILWAY 20 BUREAU GROUP CORPORATION',
        location: 'Huánuco - La Unión - Huallanca',
        year: '2021',
        duration: '12 meses',
        category: 'Topografía y Geodesia',
        description: `Servicios especializados de ingeniería, topografía y geodesia para el proyecto 
        de mejoramiento y conservación vial del corredor Huánuco - La Unión - Huallanca, trabajando 
        con China Railway 20 Bureau Group Corporation en este importante proyecto de infraestructura.`,
        scope: [
          'Levantamiento topográfico del corredor completo',
          'Servicios geodésicos de precisión',
          'Control topográfico de obras',
          'Supervisión técnica especializada',
          'Elaboración de planos de construcción'
        ],
        achievements: [
          'Mejoramiento de 95 km de corredor vial',
          'Establecimiento de red geodésica de referencia',
          'Integración exitosa con equipo internacional',
          'Cumplimiento de estándares internacionales'
        ],
        technologies: [
          'Equipos topográficos de última generación',
          'Sistemas GNSS multi-constelación',
          'Software de diseño vial avanzado',
          'Tecnología de escaneo láser 3D'
        ],
        images: [
          {
            url: '/images/projects/huanuco-union/1.jpg',
            caption: 'Equipo internacional en campo'
          },
          {
            url: '/images/projects/huanuco-union/2.jpg',
            caption: 'Levantamiento en zona montañosa'
          },
          {
            url: '/images/projects/huanuco-union/3.jpg',
            caption: 'Control geodésico de precisión'
          },
          {
            url: '/images/projects/huanuco-union/4.jpg',
            caption: 'Vista del corredor mejorado'
          }
        ],
        testimonial: {
          text: "La colaboración con Merino Ingenieros fue excepcional. Su conocimiento local y expertise técnico fueron invaluables.",
          author: "Eng. Wang Chen",
          position: "Project Manager - CHINA RAILWAY 20 BUREAU GROUP"
        }
      },
      en: {
        title: 'Road Improvement and Conservation by Service Levels and Operation of Huánuco - La Unión - Huallanca Road Corridor',
        subtitle: 'Engineering, surveying and geodesy services',
        client: 'CHINA RAILWAY 20 BUREAU GROUP CORPORATION',
        location: 'Huánuco - La Unión - Huallanca',
        year: '2021',
        duration: '12 months',
        category: 'Surveying and Geodesy',
        description: `Specialized engineering, surveying and geodesy services for the road improvement 
        and conservation project of Huánuco - La Unión - Huallanca corridor, working with China Railway 
        20 Bureau Group Corporation on this important infrastructure project.`,
        scope: [
          'Complete corridor topographic survey',
          'Precision geodetic services',
          'Topographic control of works',
          'Specialized technical supervision',
          'Construction drawings preparation'
        ],
        achievements: [
          'Improvement of 95 km road corridor',
          'Reference geodetic network establishment',
          'Successful integration with international team',
          'Compliance with international standards'
        ],
        technologies: [
          'Latest generation topographic equipment',
          'Multi-constellation GNSS systems',
          'Advanced road design software',
          '3D laser scanning technology'
        ],
        images: [
          {
            url: '/images/projects/huanuco-union/1.jpg',
            caption: 'International team in the field'
          },
          {
            url: '/images/projects/huanuco-union/2.jpg',
            caption: 'Survey in mountainous area'
          },
          {
            url: '/images/projects/huanuco-union/3.jpg',
            caption: 'Precision geodetic control'
          },
          {
            url: '/images/projects/huanuco-union/4.jpg',
            caption: 'View of improved corridor'
          }
        ],
        testimonial: {
          text: "Collaboration with Merino Ingenieros was exceptional. Their local knowledge and technical expertise were invaluable.",
          author: "Eng. Wang Chen",
          position: "Project Manager - CHINA RAILWAY 20 BUREAU GROUP"
        }
      }
    },
    'ampliacion-agua': {
      es: {
        title: 'Ampliación y Mejoramiento del Servicio de Agua Potable y Alcantarillado de los Sectores Señor de los Milagros, Niño Lachocc y Los Pedregales del Barrio de Yananaco',
        subtitle: 'Proyecto de saneamiento urbano integral',
        client: 'EMAPA HUANCAVELICA',
        location: 'Distrito de Huancavelica, Huancavelica',
        year: '2021',
        duration: '10 meses',
        category: 'Ingeniería Sanitaria',
        description: `Proyecto de ampliación y mejoramiento de servicios de agua potable y alcantarillado 
        para los sectores Señor de los Milagros, Niño Lachocc y Los Pedregales del barrio de Yananaco 
        en el distrito de Huancavelica, beneficiando a miles de familias.`,
        scope: [
          'Ampliación de redes de agua potable',
          'Mejoramiento de sistema de alcantarillado',
          'Instalación de conexiones domiciliarias',
          'Construcción de cámaras de inspección',
          'Pruebas hidráulicas y puesta en servicio'
        ],
        achievements: [
          'Beneficio directo a 2,500 familias',
          'Instalación de 8 km de tuberías nuevas',
          'Mejora del 80% en calidad de servicio',
          'Reducción de enfermedades hídricas'
        ],
        technologies: [
          'Tuberías de PVC de alta presión',
          'Sistemas de bombeo eficientes',
          'Válvulas de control automático',
          'Medidores digitales de caudal'
        ],
        images: [
          {
            url: '/images/projects/huancavelica/1.jpg',
            caption: 'Instalación de tuberías de agua potable'
          },
          {
            url: '/images/projects/huancavelica/2.jpg',
            caption: 'Construcción de cámara de inspección'
          },
          {
            url: '/images/projects/huancavelica/3.jpg',
            caption: 'Conexiones domiciliarias'
          },
          {
            url: '/images/projects/huancavelica/4.jpg',
            caption: 'Sistema de alcantarillado terminado'
          }
        ],
        testimonial: {
          text: "Merino Ingenieros demostró gran sensibilidad social y técnica en este proyecto que cambió la vida de muchas familias.",
          author: "Ing. Carmen Flores",
          position: "Gerente General - EMAPA HUANCAVELICA"
        }
      },
      en: {
        title: 'Expansion and Improvement of Water Supply and Sewerage Service for Señor de los Milagros, Niño Lachocc and Los Pedregales Sectors of Yananaco Neighborhood',
        subtitle: 'Comprehensive urban sanitation project',
        client: 'EMAPA HUANCAVELICA',
        location: 'Huancavelica District, Huancavelica',
        year: '2021',
        duration: '10 months',
        category: 'Sanitary Engineering',
        description: `Expansion and improvement project for water supply and sewerage services 
        for Señor de los Milagros, Niño Lachocc and Los Pedregales sectors of Yananaco neighborhood 
        in Huancavelica district, benefiting thousands of families.`,
        scope: [
          'Water supply network expansion',
          'Sewerage system improvement',
          'Household connection installation',
          'Inspection chamber construction',
          'Hydraulic testing and commissioning'
        ],
        achievements: [
          'Direct benefit to 2,500 families',
          'Installation of 8 km of new pipelines',
          '80% improvement in service quality',
          'Reduction of waterborne diseases'
        ],
        technologies: [
          'High-pressure PVC pipes',
          'Efficient pumping systems',
          'Automatic control valves',
          'Digital flow meters'
        ],
        images: [
          {
            url: '/images/projects/huancavelica/1.jpg',
            caption: 'Water supply pipe installation'
          },
          {
            url: '/images/projects/huancavelica/2.jpg',
            caption: 'Inspection chamber construction'
          },
          {
            url: '/images/projects/huancavelica/3.jpg',
            caption: 'Household connections'
          },
          {
            url: '/images/projects/huancavelica/4.jpg',
            caption: 'Completed sewerage system'
          }
        ],
        testimonial: {
          text: "Merino Ingenieros demonstrated great social and technical sensitivity in this project that changed the lives of many families.",
          author: "Eng. Carmen Flores",
          position: "General Manager - EMAPA HUANCAVELICA"
        }
      }
    },
    'carretera-viscachani': {
      es: {
        title: 'Mejoramiento de la Carretera Viscachani, Cayllalli, Caylloma - Arequipa',
        subtitle: 'Servicios de ingeniería, topografía y geodesia en zona alto-andina',
        client: 'CHINA RAILWAY N10 ENGINEERING GROUP',
        location: 'Viscachani, Cayllalli, Caylloma - Arequipa',
        year: '2021',
        duration: '14 meses',
        category: 'Topografía y Geodesia',
        description: `Servicios especializados de ingeniería, topografía y geodesia para el mejoramiento 
        de la carretera en la zona alto-andina de Arequipa, trabajando en condiciones climáticas 
        extremas y altitudes superiores a los 4,000 metros sobre el nivel del mar.`,
        scope: [
          'Levantamiento topográfico en zona alto-andina',
          'Servicios geodésicos de alta precisión',
          'Control topográfico en condiciones extremas',
          'Supervisión técnica especializada',
          'Adaptación a condiciones climáticas adversas'
        ],
        achievements: [
          'Operación exitosa a más de 4,000 msnm',
          'Mejoramiento de 65 km de carretera',
          'Adaptación a condiciones extremas',
          'Cumplimiento de cronograma a pesar del clima'
        ],
        technologies: [
          'Equipos topográficos resistentes al frío',
          'GPS con corrección atmosférica',
          'Software de compensación altimétrica',
          'Sistemas de calefacción para equipos'
        ],
        images: [
          {
            url: '/images/projects/viscachani/1.jpg',
            caption: 'Trabajo en condiciones de altura extrema'
          },
          {
            url: '/images/projects/viscachani/2.jpg',
            caption: 'Equipo adaptado al clima andino'
          },
          {
            url: '/images/projects/viscachani/3.jpg',
            caption: 'Levantamiento en paisaje nevado'
          },
          {
            url: '/images/projects/viscachani/4.jpg',
            caption: 'Carretera mejorada en zona alto-andina'
          }
        ],
        testimonial: {
          text: "La capacidad de adaptación y experiencia en zonas alto-andinas de Merino Ingenieros fue fundamental para este proyecto.",
          author: "Eng. Li Wei",
          position: "Project Director - CHINA RAILWAY N10 ENGINEERING GROUP"
        }
      },
      en: {
        title: 'Road Improvement Viscachani, Cayllalli, Caylloma - Arequipa',
        subtitle: 'Engineering, surveying and geodesy services in high-Andean zone',
        client: 'CHINA RAILWAY N10 ENGINEERING GROUP',
        location: 'Viscachani, Cayllalli, Caylloma - Arequipa',
        year: '2021',
        duration: '14 months',
        category: 'Surveying and Geodesy',
        description: `Specialized engineering, surveying and geodesy services for road improvement 
        in the high-Andean zone of Arequipa, working in extreme weather conditions and altitudes 
        above 4,000 meters above sea level.`,
        scope: [
          'Topographic survey in high-Andean zone',
          'High-precision geodetic services',
          'Topographic control in extreme conditions',
          'Specialized technical supervision',
          'Adaptation to adverse weather conditions'
        ],
        achievements: [
          'Successful operation above 4,000 masl',
          'Improvement of 65 km of road',
          'Adaptation to extreme conditions',
          'Schedule compliance despite weather'
        ],
        technologies: [
          'Cold-resistant topographic equipment',
          'GPS with atmospheric correction',
          'Altimetric compensation software',
          'Equipment heating systems'
        ],
        images: [
          {
            url: '/images/projects/viscachani/1.jpg',
            caption: 'Work in extreme altitude conditions'
          },
          {
            url: '/images/projects/viscachani/2.jpg',
            caption: 'Equipment adapted to Andean climate'
          },
          {
            url: '/images/projects/viscachani/3.jpg',
            caption: 'Survey in snowy landscape'
          },
          {
            url: '/images/projects/viscachani/4.jpg',
            caption: 'Improved road in high-Andean zone'
          }
        ],
        testimonial: {
          text: "Merino Ingenieros' adaptation capacity and experience in high-Andean zones was fundamental for this project.",
          author: "Eng. Li Wei",
          position: "Project Director - CHINA RAILWAY N10 ENGINEERING GROUP"
        }
      }
    },
    'desbroce-limpieza': {
      es: {
        title: 'Servicio de Desbroce y Limpieza en el Proyecto: Mejoramiento y Conservación Vial por Niveles de Servicio del Corredor Vial Comas - Satipo - Poyeni Tramo III',
        subtitle: 'Servicios especializados de desbroce y limpieza vial',
        client: 'CONSORCIO VIAL COMAS',
        location: 'EMP. PE-3S (Concepción) - Comas - EMP PE-5S(Satipo)/EMP.PE-5S (Pto Ocopa) - Atalaya/EMP PE-5S(Dv.Bajo Kimiri) - Buenos Aires - Pto Prado - Mazobeni - Camajeni - Poyeni Tramo III',
        year: '2021',
        duration: '8 meses',
        category: 'Desbroce y Limpieza',
        description: `Servicios especializados de desbroce y limpieza para el Tramo III del importante 
        corredor vial, incluyendo la remoción de vegetación, limpieza de cunetas, y preparación 
        del terreno para las obras de mejoramiento vial.`,
        scope: [
          'Desbroce de vegetación en 60 km de vía',
          'Limpieza de cunetas y drenajes',
          'Remoción de obstáculos naturales',
          'Preparación de terreno para obras',
          'Manejo ambiental durante desbroce'
        ],
        achievements: [
          'Desbroce exitoso de 60 km de corredor',
          'Cero impacto ambiental negativo',
          'Cumplimiento de normativas ambientales',
          'Preparación óptima para obras posteriores'
        ],
        technologies: [
          'Motosierra profesionales',
          'Desbrozadoras mecánicas',
          'Equipos de limpieza especializada',
          'Maquinaria de bajo impacto ambiental'
        ],
        images: [
          {
            url: '/images/projects/desbroce-comas/1.jpg',
            caption: 'Equipo de desbroce en acción'
          },
          {
            url: '/images/projects/desbroce-comas/2.jpg',
            caption: 'Limpieza de cunetas'
          },
          {
            url: '/images/projects/desbroce-comas/3.jpg',
            caption: 'Preparación del terreno'
          },
          {
            url: '/images/projects/desbroce-comas/4.jpg',
            caption: 'Corredor limpio y preparado'
          }
        ],
        testimonial: {
          text: "El manejo ambiental responsable y la eficiencia de Merino Ingenieros en el desbroce fue ejemplar.",
          author: "Ing. Ricardo Torres",
          position: "Supervisor Ambiental - CONSORCIO VIAL COMAS"
        }
      },
      en: {
        title: 'Clearing and Cleaning Service in Project: Road Improvement and Conservation by Service Levels of Comas - Satipo - Poyeni Road Corridor Section III',
        subtitle: 'Specialized road clearing and cleaning services',
        client: 'CONSORCIO VIAL COMAS',
        location: 'EMP. PE-3S (Concepción) - Comas - EMP PE-5S(Satipo)/EMP.PE-5S (Pto Ocopa) - Atalaya/EMP PE-5S(Dv.Bajo Kimiri) - Buenos Aires - Pto Prado - Mazobeni - Camajeni - Poyeni Section III',
        year: '2021',
        duration: '8 months',
        category: 'Clearing and Cleaning',
        description: `Specialized clearing and cleaning services for Section III of the important 
        road corridor, including vegetation removal, ditch cleaning, and terrain preparation 
        for road improvement works.`,
        scope: [
          'Vegetation clearing on 60 km of road',
          'Ditch and drainage cleaning',
          'Natural obstacle removal',
          'Terrain preparation for works',
          'Environmental management during clearing'
        ],
        achievements: [
          'Successful clearing of 60 km corridor',
          'Zero negative environmental impact',
          'Compliance with environmental regulations',
          'Optimal preparation for subsequent works'
        ],
        technologies: [
          'Professional chainsaws',
          'Mechanical brush cutters',
          'Specialized cleaning equipment',
          'Low environmental impact machinery'
        ],
        images: [
          {
            url: '/images/projects/desbroce-comas/1.jpg',
            caption: 'Clearing team in action'
          },
          {
            url: '/images/projects/desbroce-comas/2.jpg',
            caption: 'Ditch cleaning'
          },
          {
            url: '/images/projects/desbroce-comas/3.jpg',
            caption: 'Terrain preparation'
          },
          {
            url: '/images/projects/desbroce-comas/4.jpg',
            caption: 'Clean and prepared corridor'
          }
        ],
        testimonial: {
          text: "Merino Ingenieros' responsible environmental management and efficiency in clearing was exemplary.",
          author: "Eng. Ricardo Torres",
          position: "Environmental Supervisor - CONSORCIO VIAL COMAS"
        }
      }
    }
  };

  const project = projectsDatabase[projectId as keyof typeof projectsDatabase];
  const content = project?.[currentLanguage.code as 'es' | 'en'] || project?.es;

  // Get all project keys for navigation
  const allProjectKeys = Object.keys(projectsDatabase);
  const currentIndex = allProjectKeys.findIndex(key => key === projectId);
  const previousProject = currentIndex > 0 ? allProjectKeys[currentIndex - 1] : allProjectKeys[allProjectKeys.length - 1];
  const nextProject = currentIndex < allProjectKeys.length - 1 ? allProjectKeys[currentIndex + 1] : allProjectKeys[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {currentLanguage.code === 'es' ? 'Proyecto no encontrado' : 'Project not found'}
          </h2>
          <button
            onClick={() => navigate('/projects')}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            {currentLanguage.code === 'es' ? 'Volver a proyectos' : 'Back to projects'}
          </button>
        </div>
      </div>
    );
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={content.images[0].url}
            alt={content.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </motion.div>

        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate('/projects')}
              className="flex items-center gap-2 text-white mb-6 hover:text-primary-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>{currentLanguage.code === 'es' ? 'Volver a proyectos' : 'Back to projects'}</span>
            </motion.button>

            <motion.div {...fadeInUp}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {content.title}
              </h1>
              <p className="text-xl text-white/80 mb-6">{content.subtitle}</p>
              
              <div className="flex flex-wrap gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  <span>{content.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{content.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{content.year}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div {...fadeInUp}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {currentLanguage.code === 'es' ? 'Descripción del Proyecto' : 'Project Description'}
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {content.description}
                </p>
              </motion.div>

              {/* Scope */}
              <motion.div {...fadeInUp}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {currentLanguage.code === 'es' ? 'Alcance del Trabajo' : 'Scope of Work'}
                </h3>
                <div className="space-y-3">
                  {content.scope.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div {...fadeInUp}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {currentLanguage.code === 'es' ? 'Tecnologías Utilizadas' : 'Technologies Used'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.technologies.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-100 px-6 py-4 rounded-xl text-gray-700 font-medium"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {currentLanguage.code === 'es' ? 'Información del Proyecto' : 'Project Information'}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      {currentLanguage.code === 'es' ? 'Cliente' : 'Client'}
                    </p>
                    <p className="font-semibold text-gray-900">{content.client}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      {currentLanguage.code === 'es' ? 'Duración' : 'Duration'}
                    </p>
                    <p className="font-semibold text-gray-900">{content.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      {currentLanguage.code === 'es' ? 'Categoría' : 'Category'}
                    </p>
                    <p className="font-semibold text-gray-900">{content.category}</p>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    {currentLanguage.code === 'es' ? 'Descargar Ficha' : 'Download Brief'}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white text-primary-600 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 border-2 border-primary-600"
                  >
                    <Share2 className="w-5 h-5" />
                    {currentLanguage.code === 'es' ? 'Compartir' : 'Share'}
                  </motion.button>
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary-600" />
                  {currentLanguage.code === 'es' ? 'Logros' : 'Achievements'}
                </h3>
                <div className="space-y-3">
                  {content.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {currentLanguage.code === 'es' ? 'Galería del Proyecto' : 'Project Gallery'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.images.map((image, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    setSelectedImageIndex(idx);
                    setIsGalleryOpen(true);
                  }}
                  className="relative cursor-pointer group overflow-hidden rounded-xl shadow-lg"
                >
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm">{image.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      {content.testimonial && (
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <Users className="w-16 h-16 mx-auto mb-6 opacity-50" />
              <blockquote className="text-2xl md:text-3xl font-light italic mb-6">
                "{content.testimonial.text}"
              </blockquote>
              <div>
                <p className="font-semibold text-lg">{content.testimonial.author}</p>
                <p className="text-white/80">{content.testimonial.position}</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Navigation to other projects */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.button
              whileHover={{ x: -10 }}
              onClick={() => navigate(`/projects/${previousProject}`)}
              className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>{currentLanguage.code === 'es' ? 'Proyecto Anterior' : 'Previous Project'}</span>
            </motion.button>
            
            <button
              onClick={() => navigate('/projects')}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              {currentLanguage.code === 'es' ? 'Todos los Proyectos' : 'All Projects'}
            </button>

            <motion.button
              whileHover={{ x: 10 }}
              onClick={() => navigate(`/projects/${nextProject}`)}
              className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <span>{currentLanguage.code === 'es' ? 'Siguiente Proyecto' : 'Next Project'}</span>
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Lightbox Gallery */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsGalleryOpen(false)}
          >
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((prev) => 
                  prev === 0 ? content.images.length - 1 : prev - 1
                );
              }}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="max-w-5xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={content.images[selectedImageIndex].url}
                alt={content.images[selectedImageIndex].caption}
                className="w-full h-full object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4">
                {content.images[selectedImageIndex].caption}
              </p>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((prev) => 
                  prev === content.images.length - 1 ? 0 : prev + 1
                );
              }}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {content.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === selectedImageIndex ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetailPage;