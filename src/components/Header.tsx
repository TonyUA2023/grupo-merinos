import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Phone, ChevronDown, Mail, MapPin } from 'lucide-react';

interface NavItem {
  name: string;
  nameEn: string;
  path: string;
}

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
  onNavigate?: (path: string) => void;
  currentPath?: string;
}

const navItems: NavItem[] = [
  { name: 'Inicio', nameEn: 'Home', path: '/' },
  { name: 'Nosotros', nameEn: 'About', path: '/about' },
  { name: 'Servicios', nameEn: 'Services', path: '/services' },
  { name: 'Proyectos', nameEn: 'Projects', path: '/projects' },
  { name: 'Sostenibilidad', nameEn: 'Sustainability', path: '/sustainability' }
];

const languages: Language[] = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
];

const Header: React.FC<HeaderProps> = ({ 
  currentLanguage, 
  onLanguageChange,
  onNavigate,
  currentPath = '/'
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      // Fallback: navegación directa usando window.location
      console.log('Navegando a:', path);
      // Si usas React Router, puedes usar navigate() aquí
      // Si usas Next.js, puedes usar router.push() aquí
      // Por ahora, como fallback:
      window.location.href = path;
    }
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path: string) => currentPath === path;

  const handleLanguageChange = (language: Language) => {
    onLanguageChange(language);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <>
      {/* Top Bar - Información de contacto */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-10 opacity-100'
      }`}>
        <div className="bg-[#00A651] text-white h-full">
          <div className="container mx-auto px-4 h-full flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:066635228" className="flex items-center space-x-2 hover:text-white/80 transition-colors">
                <Phone className="w-3 h-3" />
                <span>066-635228</span>
              </a>
              <a href="mailto:wmerinosgrupo@merino.com.pe" className="hidden md:flex items-center space-x-2 hover:text-white/80 transition-colors">
                <Mail className="w-3 h-3" />
                <span>wmerinosgrupo@merino.com.pe</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3 h-3" />
              <span className="hidden sm:inline">Calle De Laureles Mz "M" Lt 5 Urb. Alto la Merced Huancayo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header Principal */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isScrolled ? 0 : 40 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'top-0 bg-white shadow-lg' 
            : 'top-0 bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => handleNavigation('/')}
            >
              {/* Logo estilo brochure */}
              <div className="relative">
                <div className="w-14 h-14 bg-[#00A651] rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xl">GM</span>
                </div>
                {/* Elemento decorativo */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#00B9CE] rounded-full opacity-60"></div>
              </div>
              
              <div>
                <h1 className="font-bold text-xl text-gray-800 leading-tight">
                  GRUPO MERINO
                </h1>
                <p className="text-xs text-[#00A651] font-medium">
                  INGENIEROS SAC
                </p>
              </div>
            </motion.div>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    console.log('Clic en:', item.path); // Debug
                    handleNavigation(item.path);
                  }}
                  className={`relative px-5 py-2.5 font-medium transition-all duration-300 ${
                    isActivePath(item.path)
                      ? 'text-[#00A651]'
                      : 'text-gray-700 hover:text-[#00A651]'
                  }`}
                >
                  {currentLanguage.code === 'es' ? item.name : item.nameEn}
                  
                  {/* Indicador activo estilo brochure mejorado */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 ${
                      isActivePath(item.path) 
                        ? 'bg-gradient-to-r from-[#00A651] via-[#00B9CE] to-[#00A651] opacity-100' 
                        : 'bg-gray-300 opacity-0 hover:opacity-30'
                    }`}
                  />
                  {isActivePath(item.path) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A651] via-[#00B9CE] to-[#00A651] shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md border border-gray-300 hover:border-[#00A651] transition-colors duration-300"
                >
                  <Globe className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">{currentLanguage.code.toUpperCase()}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                    isLanguageDropdownOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                <AnimatePresence>
                  {isLanguageDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full right-0 mt-2 w-36 bg-white rounded-md shadow-xl border border-gray-200 overflow-hidden"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang)}
                          className={`w-full px-4 py-2.5 text-left flex items-center space-x-3 transition-colors ${
                            currentLanguage.code === lang.code 
                              ? 'bg-[#00A651]/10 text-[#00A651]' 
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <span>{lang.flag}</span>
                          <span className="text-sm font-medium">{lang.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Button - Estilo brochure */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden md:flex items-center space-x-2 bg-[#00B9CE] hover:bg-[#00A651] text-white px-5 py-2.5 rounded-md font-medium transition-all duration-300 shadow-sm"
                onClick={() => handleNavigation('/contact')}
              >
                <Phone className="w-4 h-4" />
                <span>{currentLanguage.code === 'es' ? 'Contacto' : 'Contact'}</span>
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <X className="w-6 h-6 text-gray-700" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <Menu className="w-6 h-6 text-gray-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Elemento decorativo inferior - estilo brochure mejorado */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A651] via-[#00B9CE] to-[#00A651] opacity-20"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
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
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 lg:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-40 lg:hidden overflow-y-auto"
            >
              {/* Header del menú móvil */}
              <div className="bg-[#00A651] text-white p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <span className="text-[#00A651] font-bold text-lg">GM</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">GRUPO MERINO</h3>
                      <p className="text-xs text-white/80">INGENIEROS SAC</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-md hover:bg-white/20 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Navigation Mobile */}
              <div className="p-6">
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => {
                        console.log('Clic móvil en:', item.path); // Debug
                        handleNavigation(item.path);
                      }}
                      className={`block w-full text-left py-3 px-4 rounded-md font-medium transition-all ${
                        isActivePath(item.path)
                          ? 'bg-[#00A651] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {currentLanguage.code === 'es' ? item.name : item.nameEn}
                    </button>
                  ))}
                </nav>

                {/* Language Selector Mobile */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-600 mb-3">
                    {currentLanguage.code === 'es' ? 'Idioma' : 'Language'}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang)}
                        className={`p-3 rounded-md border-2 transition-all ${
                          currentLanguage.code === lang.code
                            ? 'border-[#00A651] bg-[#00A651]/10 text-[#00A651]'
                            : 'border-gray-200 text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <span>{lang.flag}</span>
                          <span className="text-sm font-medium">{lang.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Mobile */}
                <div className="mt-6">
                  <button
                    onClick={() => handleNavigation('/contact')}
                    className="w-full bg-[#00B9CE] hover:bg-[#00A651] text-white py-3 px-4 rounded-md font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{currentLanguage.code === 'es' ? 'Contáctanos' : 'Contact Us'}</span>
                  </button>
                </div>

                {/* Info de contacto móvil */}
                <div className="mt-8 space-y-3 text-sm text-gray-600">
                  <a href="tel:066635228" className="flex items-center space-x-2 hover:text-[#00A651]">
                    <Phone className="w-4 h-4" />
                    <span>066-635228</span>
                  </a>
                  <a href="mailto:wmerinosgrupo@merino.com.pe" className="flex items-center space-x-2 hover:text-[#00A651]">
                    <Mail className="w-4 h-4" />
                    <span>wmerinosgrupo@merino.com.pe</span>
                  </a>
                </div>
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

      {/* Espaciador para evitar que el header tape el contenido */}
      <div className={`${isScrolled ? 'h-20' : 'h-[120px]'} transition-all duration-300`}></div>
    </>
  );
};

export default Header;