import React from 'react';
import { motion } from 'framer-motion';

interface ContactPageProps {
  currentLanguage: { code: 'es' | 'en' };
}

const ContactPage: React.FC<ContactPageProps> = ({ currentLanguage }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* === Sección de Portada === */}
      <section className="relative w-full h-[60vh] md:h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/projects/carretera-viscachani/IMG_3009.JPG')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg">
            {currentLanguage.code === 'es'
              ? 'CONTÁCTANOS EN GRUPO MERINO'
              : 'CONTACT US AT GRUPO MERINO'}
          </h1>
          <p className="text-white mt-4 text-lg md:text-xl drop-shadow-md">
            {currentLanguage.code === 'es'
              ? 'Estamos listos para ayudarte. Escríbenos o llámanos.'
              : 'We are ready to help you. Write or call us.'}
          </p>
        </motion.div>
      </section>

      {/* === Sección de Contacto === */}
      <section className="bg-[#23c6a3] text-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Formulario a la izquierda */}
          <motion.form
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white text-black rounded-lg shadow-lg p-8 space-y-6 w-full"
          >
            <h4 className="text-2xl font-bold text-[#23c6a3] mb-4">
              {currentLanguage.code === 'es' ? 'Escríbenos' : 'Write to Us'}
            </h4>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={currentLanguage.code === 'es' ? 'Nombre y Apellido' : 'Full Name'}
                className="w-full p-3 border rounded-md"
                required
              />
              <input
                type="text"
                placeholder={currentLanguage.code === 'es' ? 'Empresa (opcional)' : 'Company (optional)'}
                className="w-full p-3 border rounded-md"
              />
            </div>

            <input
              type="text"
              placeholder={currentLanguage.code === 'es' ? 'Idea del proyecto' : 'Project idea'}
              className="w-full p-3 border rounded-md"
              required
            />

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder={currentLanguage.code === 'es' ? 'Número' : 'Phone'}
                className="w-full p-3 border rounded-md"
                required
              />
              <input
                type="email"
                placeholder={currentLanguage.code === 'es' ? 'Correo Electrónico' : 'Email'}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>

            <textarea
              placeholder={currentLanguage.code === 'es' ? 'Mensaje' : 'Message'}
              className="w-full p-3 border rounded-md"
              rows={5}
              required
            />

            <button
              type="submit"
              className="bg-[#009e49] hover:bg-[#007a3a] text-white px-6 py-3 rounded-md font-semibold transition-all"
            >
              {currentLanguage.code === 'es' ? 'Enviar mensaje' : 'Send Message'}
            </button>
          </motion.form>

          {/* Información adicional a la derecha */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-4">
              {currentLanguage.code === 'es' ? '¿Por qué escribirnos?' : 'Why write to us?'}
            </h2>
            <p className="text-sm leading-relaxed">
              {currentLanguage.code === 'es'
                ? 'Nuestro equipo está listo para ayudarte a transformar tu idea en una solución real y efectiva. Ya sea que estés planificando un proyecto nuevo o necesites mantenimiento especializado, estamos aquí para apoyarte.'
                : 'Our team is ready to help you turn your idea into a real and effective solution. Whether you are planning a new project or need specialized maintenance, we are here to support you.'}
            </p>
            <ul className="list-disc pl-5 text-sm">
              <li>{currentLanguage.code === 'es' ? 'Más de 25 años de experiencia' : 'Over 25 years of experience'}</li>
              <li>{currentLanguage.code === 'es' ? 'Asesoría personalizada' : 'Personalized advice'}</li>
              <li>{currentLanguage.code === 'es' ? 'Comprometidos con la sostenibilidad' : 'Committed to sustainability'}</li>
              <li>{currentLanguage.code === 'es' ? 'Respuesta rápida y profesional' : 'Fast and professional response'}</li>
            </ul>

            {/* Espacio para componente visible o gráfico adicional */}
            <div className="w-full h-48 bg-white/20 rounded-lg flex items-center justify-center border border-white/30">
              <span className="text-white text-center">
                {currentLanguage.code === 'es'
                  ? '[Espacio para componente adicional]'
                  : '[Space for additional component]'}
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
