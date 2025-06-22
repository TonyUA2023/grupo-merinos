import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import SustainabilityPage from './pages/SustainabilityPage';
import EthicsPage from './pages/EthicsPage';
import type { Language } from './types';
import Footer from './components/Footer';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/Contactpages';


// Componente para manejar las transiciones entre páginas
const AnimatedRoutes: React.FC<{ currentLanguage: Language }> = ({ currentLanguage }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage currentLanguage={currentLanguage} />} />
        <Route path="/about" element={<AboutPage currentLanguage={currentLanguage} />} />
        <Route path="/services" element={<ServicesPage currentLanguage={currentLanguage} />} />
        <Route path="/projects" element={<ProjectsPage currentLanguage={currentLanguage} />} />
        <Route path="/projects/:projectId" element={<ProjectDetailPage currentLanguage={currentLanguage} />} />
        <Route path="/sustainability" element={<SustainabilityPage currentLanguage={currentLanguage} />} />
        <Route path="/ethics" element={<EthicsPage currentLanguage={currentLanguage} />} />
        <Route path="/contact" element={<ContactPage currentLanguage={currentLanguage} />} />

      </Routes>
    </AnimatePresence>
  );
};

// Componente interno que tiene acceso a useLocation y useNavigate
const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState<Language>({
    code: 'es',
    name: 'Español',
    flag: '🇪🇸'
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Simular carga inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen
            isVisible={isLoading}
            onComplete={handleLoadingComplete}
          />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header
            currentLanguage={currentLanguage}
            onLanguageChange={handleLanguageChange}
            onNavigate={handleNavigate}
            currentPath={location.pathname}
          />
          
          <main>
            <AnimatedRoutes currentLanguage={currentLanguage} />
          </main>

          <Footer />
        </motion.div>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;