// Tipos para la aplicación de GRUPO MERINOS

export interface NavItem {
  name: string;
  href: string;
  nameEn: string;
  path: string;
}

export interface Language {
  code: 'es' | 'en';
  name: string;
  flag: string;
}

export interface Service {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  image: string;
  features: string[];
  featuresEn: string[];
}

export interface Project {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  category: string;
  categoryEn: string;
  image: string;
  images: string[];
  location: string;
  year: number;
  area: string;
  client: string;
  duration: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  positionEn: string;
  image: string;
  linkedin?: string;
  email?: string;
}

export interface Milestone {
  year: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
}

export interface CompanyValues {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
}

export interface SustainabilityAction {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  image: string;
  impact: string;
  impactEn: string;
}

export interface CompanyStats {
  projectsCompleted: number;
  yearsExperience: number;
  happyClients: number;
  teamMembers: number;
}

export interface ContactInfo {
  address: string;
  addressEn: string;
  phone: string;
  email: string;
  website: string;
  socialMedia: {
    facebook?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
  };
}

export interface LoadingProps {
  isVisible: boolean;
  onComplete: () => void;
}

export interface AnimationProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}