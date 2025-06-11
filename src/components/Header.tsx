import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone, ChevronDown } from 'lucide-react';
import { navItems } from '../data/companyData';
import type { Language } from '../types';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const languages: Language[] = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
];

const Header: React.FC<HeaderProps> = ({ currentLanguage, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollY } = useScroll();

  // Transform para efectos de paralaje en el header
  const headerY = useTransform(scrollY, [0, 200], [0, -50]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determinar si está scrolleado
      setIsScrolled(currentScrollY > 50);
      
      // Determinar dirección del scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Cerrar menús al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLanguageDropdownOpen(false);
  }, [location.pathname]);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const handleLanguageChange = (language: Language) => {
    onLanguageChange(language);
    setIsLanguageDropdownOpen(false);
  };

  // Variantes de animación para el header
  const headerVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      }
    }
  };

  // Variantes para los elementos del nav
  const navItemVariants = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      y: -2,
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <>
      <motion.header
        initial="visible"
        animate={scrollDirection === 'down' && isScrolled ? 'hidden' : 'visible'}
        variants={headerVariants}
        style={{ y: headerY }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-primary-100' 
            : 'bg-transparent'
        }`}
      >
        {/* Barra de progreso de scroll */}
        <motion.div
          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 origin-left"
          style={{
            scaleX: useTransform(scrollY, [0, 2000], [0, 1])
          }}
        />

        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              style={{ scale: logoScale }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => handleNavigation('/')}
            >
              <div className="relative">
                {/* Logo principal */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: 'linear' 
                  }}
                  className="w-12 h-12 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                >
                  <motion.span
                    animate={{ rotate: [0, -360] }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity, 
                      ease: 'linear' 
                    }}
                    className="text-white font-bold text-lg"
                  >
                    GM
                  </motion.span>
                </motion.div>

                {/* Anillo orbital */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: 'linear' 
                  }}
                  className="absolute inset-0 w-16 h-16 border-2 border-primary-300 border-opacity-40 rounded-full -top-2 -left-2"
                />
              </div>

              <div className="hidden sm:block">
                <motion.h1 
                  className={`font-display font-bold text-xl transition-colors duration-300 ${
                    isScrolled ? 'text-secondary-900' : 'text-white'
                  }`}
                  layoutId="logo-text"
                >
                  GRUPO MERINOS
                </motion.h1>
                <motion.p 
                  className={`text-sm transition-colors duration-300 ${
                    isScrolled ? 'text-secondary-600' : 'text-primary-200'
                  }`}
                  layoutId="logo-subtitle"
                >
                  {currentLanguage.code === 'es' ? 'Construyendo el futuro' : 'Building the future'}
                </motion.p>
              </div>
            </motion.div>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  variants={navItemVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => handleNavigation(item.path)}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActivePath(item.path)
                      ? isScrolled 
                        ? 'text-primary-600 bg-primary-50' 
                        : 'text-primary-300 bg-white/10'
                      : isScrolled 
                        ? 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50' 
                        : 'text-white/90 hover:text-primary-300 hover:bg-white/10'
                  }`}
                >
                  {currentLanguage.code === 'es' ? item.name : item.nameEn}
                  
                  {/* Indicador activo mejorado */}
                  {isActivePath(item.path) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary-500 rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Language Selector con Dropdown */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg border border-primary-500 font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-secondary-900 hover:bg-primary-50' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
                  <motion.div
                    animate={{ rotate: isLanguageDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                {/* Dropdown */}
                <AnimatePresence>
                  {isLanguageDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-2xl border border-primary-100 overflow-hidden z-50"
                    >
                      {languages.map((lang) => (
                        <motion.button
                          key={lang.code}
                          whileHover={{ backgroundColor: '#fff7ed' }}
                          onClick={() => handleLanguageChange(lang)}
                          className={`w-full px-4 py-3 text-left flex items-center space-x-3 transition-colors duration-200 ${
                            currentLanguage.code === lang.code 
                              ? 'bg-primary-50 text-primary-600' 
                              : 'text-secondary-700 hover:text-primary-600'
                          }`}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span className="font-medium">{lang.name}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 20px 40px rgba(249, 115, 22, 0.3)' 
                }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                onClick={() => handleNavigation('/contact')}
              >
                <Phone className="w-4 h-4" />
                <span>{currentLanguage.code === 'es' ? 'Contacto' : 'Contact'}</span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                  isScrolled ? 'text-secondary-900 hover:bg-primary-50' : 'text-white hover:bg-white/10'
                }`}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              {/* Header del menú */}
              <div className="p-6 border-b border-primary-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">GM</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary-900">GRUPO MERINOS</h3>
                      <p className="text-sm text-secondary-600">Menú de navegación</p>
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-primary-50 transition-colors duration-200"
                  >
                    <X className="w-5 h-5 text-secondary-600" />
                  </motion.button>
                </div>
              </div>

              {/* Navigation */}
              <div className="p-6">
                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.path}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavigation(item.path)}
                      className={`block w-full text-left py-4 px-4 rounded-xl font-medium transition-all duration-300 ${
                        isActivePath(item.path)
                          ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                          : 'text-secondary-700 hover:bg-primary-50 hover:text-primary-600'
                      }`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{currentLanguage.code === 'es' ? item.name : item.nameEn}</span>
                        {isActivePath(item.path) && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-white rounded-full"
                          />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </nav>

                {/* Language Selector Mobile */}
                <div className="mt-8 pt-6 border-t border-primary-100">
                  <h4 className="text-sm font-semibold text-secondary-600 mb-3">
                    {currentLanguage.code === 'es' ? 'Idioma' : 'Language'}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((lang) => (
                      <motion.button
                        key={lang.code}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleLanguageChange(lang)}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                          currentLanguage.code === lang.code
                            ? 'border-primary-500 bg-primary-50 text-primary-600'
                            : 'border-secondary-200 text-secondary-700 hover:border-primary-300'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <span>{lang.flag}</span>
                          <span className="font-medium text-sm">{lang.name}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Contact Button Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleNavigation('/contact')}
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{currentLanguage.code === 'es' ? 'Contactar Ahora' : 'Contact Now'}</span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Overlay para cerrar dropdowns */}
      {isLanguageDropdownOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsLanguageDropdownOpen(false)}
        />
      )}
    </>
  );
};

export default Header;