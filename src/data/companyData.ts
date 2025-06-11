import type {
    Service,
    Project,
    TeamMember,
    Milestone,
    CompanyValues,
    SustainabilityAction,
    CompanyStats,
    ContactInfo,
    NavItem
} from '../types';

export const navItems: NavItem[] = [
  { name: 'Inicio', href: '#home', nameEn: 'Home', path: '/' },
  { name: 'Sobre Nosotros', href: '#about', nameEn: 'About Us', path: '/about' },
  { name: 'Proyectos', href: '#projects', nameEn: 'Projects', path: '/projects' },
  { name: 'Servicios', href: '#services', nameEn: 'Services', path: '/services' },
  { name: 'Sostenibilidad', href: '#sustainability', nameEn: 'Sustainability', path: '/sustainability' },
  { name: 'Ética y Cumplimiento', href: '#ethics', nameEn: 'Ethics & Compliance', path: '/ethics' },
];

export const services: Service[] = [
  {
    id: 'engineering-construction',
    title: 'Ingeniería y Construcción',
    titleEn: 'Engineering & Construction',
    description: 'Desarrollamos proyectos integrales de construcción con los más altos estándares de calidad, desde la planificación hasta la entrega final.',
    descriptionEn: 'We develop comprehensive construction projects with the highest quality standards, from planning to final delivery.',
    icon: 'Building',
    image: '/images/services/construction.jpg',
    features: [
      'Construcción residencial y comercial',
      'Gestión integral de proyectos',
      'Control de calidad certificado',
      'Tecnología BIM avanzada'
    ],
    featuresEn: [
      'Residential and commercial construction',
      'Comprehensive project management',
      'Certified quality control',
      'Advanced BIM technology'
    ]
  },
  {
    id: 'engineering-topography',
    title: 'Ingeniería y Topografía',
    titleEn: 'Engineering & Topography',
    description: 'Servicios especializados en topografía, estudios de suelos y diseño de ingeniería para garantizar bases sólidas en cada proyecto.',
    descriptionEn: 'Specialized services in topography, soil studies and engineering design to ensure solid foundations in every project.',
    icon: 'MapPin',
    image: '/images/services/topography.jpg',
    features: [
      'Levantamientos topográficos precisos',
      'Estudios geotécnicos',
      'Diseño estructural',
      'Tecnología GPS y drones'
    ],
    featuresEn: [
      'Precise topographic surveys',
      'Geotechnical studies',
      'Structural design',
      'GPS and drone technology'
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'torre-corporativa-lima',
    title: 'Torre Corporativa Lima',
    titleEn: 'Lima Corporate Tower',
    description: 'Moderno edificio corporativo de 25 pisos en el distrito financiero de San Isidro.',
    descriptionEn: 'Modern 25-story corporate building in the San Isidro financial district.',
    category: 'Comercial',
    categoryEn: 'Commercial',
    image: '/images/projects/torre-lima.jpg',
    images: ['/images/projects/torre-lima-1.jpg', '/images/projects/torre-lima-2.jpg'],
    location: 'San Isidro, Lima',
    year: 2023,
    area: '15,000 m²',
    client: 'Corporación Financiera SAC',
    duration: '18 meses'
  },
  {
    id: 'conjunto-residencial-arequipa',
    title: 'Conjunto Residencial Arequipa',
    titleEn: 'Arequipa Residential Complex',
    description: 'Desarrollo residencial sostenible con 120 unidades de vivienda.',
    descriptionEn: 'Sustainable residential development with 120 housing units.',
    category: 'Residencial',
    categoryEn: 'Residential',
    image: '/images/projects/residencial-arequipa.jpg',
    images: ['/images/projects/residencial-arequipa-1.jpg'],
    location: 'Arequipa, Perú',
    year: 2022,
    area: '8,500 m²',
    client: 'Inmobiliaria del Sur',
    duration: '24 meses'
  }
];

export const companyStats: CompanyStats = {
  projectsCompleted: 150,
  yearsExperience: 25,
  happyClients: 200,
  teamMembers: 85
};

export const milestones: Milestone[] = [
  {
    year: 1998,
    title: 'Fundación de GRUPO MERINOS',
    titleEn: 'GRUPO MERINOS Foundation',
    description: 'Iniciamos operaciones como una pequeña empresa constructora familiar.',
    descriptionEn: 'We started operations as a small family construction company.'
  },
  {
    year: 2005,
    title: 'Expansión Nacional',
    titleEn: 'National Expansion',
    description: 'Expandimos nuestras operaciones a nivel nacional, llegando a Arequipa y Trujillo.',
    descriptionEn: 'We expanded our operations nationally, reaching Arequipa and Trujillo.'
  },
  {
    year: 2010,
    title: 'Certificación ISO 9001',
    titleEn: 'ISO 9001 Certification',
    description: 'Obtenemos la certificación ISO 9001 en gestión de calidad.',
    descriptionEn: 'We obtained ISO 9001 certification in quality management.'
  },
  {
    year: 2015,
    title: 'Tecnología BIM',
    titleEn: 'BIM Technology',
    description: 'Implementamos tecnología BIM en todos nuestros proyectos.',
    descriptionEn: 'We implemented BIM technology in all our projects.'
  },
  {
    year: 2020,
    title: 'Sostenibilidad Ambiental',
    titleEn: 'Environmental Sustainability',
    description: 'Lanzamos nuestro programa de construcción sostenible.',
    descriptionEn: 'We launched our sustainable construction program.'
  }
];

export const companyValues: CompanyValues[] = [
  {
    title: 'Calidad',
    titleEn: 'Quality',
    description: 'Nos comprometemos con la excelencia en cada proyecto que desarrollamos.',
    descriptionEn: 'We are committed to excellence in every project we develop.',
    icon: 'Award'
  },
  {
    title: 'Seguridad',
    titleEn: 'Safety',
    description: 'La seguridad de nuestros trabajadores y clientes es nuestra prioridad.',
    descriptionEn: 'The safety of our workers and clients is our priority.',
    icon: 'Shield'
  },
  {
    title: 'Responsabilidad',
    titleEn: 'Responsibility',
    description: 'Actuamos con responsabilidad social y ambiental en todas nuestras actividades.',
    descriptionEn: 'We act with social and environmental responsibility in all our activities.',
    icon: 'Heart'
  },
  {
    title: 'Innovación',
    titleEn: 'Innovation',
    description: 'Incorporamos las últimas tecnologías y metodologías en nuestros procesos.',
    descriptionEn: 'We incorporate the latest technologies and methodologies in our processes.',
    icon: 'Lightbulb'
  }
];

export const sustainabilityActions: SustainabilityAction[] = [
  {
    id: 'green-construction',
    title: 'Construcción Verde',
    titleEn: 'Green Construction',
    description: 'Implementamos técnicas de construcción sostenible y materiales eco-amigables.',
    descriptionEn: 'We implement sustainable construction techniques and eco-friendly materials.',
    icon: 'Leaf',
    image: '/images/sustainability/green-construction.jpg',
    impact: '30% reducción en emisiones de CO2',
    impactEn: '30% reduction in CO2 emissions'
  },
  {
    id: 'water-management',
    title: 'Gestión del Agua',
    titleEn: 'Water Management',
    description: 'Sistemas de recolección y reutilización de agua en nuestros proyectos.',
    descriptionEn: 'Water collection and reuse systems in our projects.',
    icon: 'Droplets',
    image: '/images/sustainability/water-management.jpg',
    impact: '40% ahorro en consumo de agua',
    impactEn: '40% savings in water consumption'
  }
];

export const contactInfo: ContactInfo = {
  address: 'Av. El Sol 123, San Isidro, Lima, Perú',
  addressEn: '123 El Sol Avenue, San Isidro, Lima, Peru',
  phone: '+51 1 234-5678',
  email: 'info@grupomerinos.com',
  website: 'www.grupomerinos.com',
  socialMedia: {
    facebook: 'https://facebook.com/grupomerinos',
    linkedin: 'https://linkedin.com/company/grupomerinos',
    instagram: 'https://instagram.com/grupomerinos'
  }
};