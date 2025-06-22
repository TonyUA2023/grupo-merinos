import React from 'react';
import { motion } from 'framer-motion';
import type { Language } from '../types';

interface EthicsPageProps {
  currentLanguage: Language;
}

const EthicsPage: React.FC<EthicsPageProps> = ({ currentLanguage }) => {
 const ethicsContent = {
    es: {
      title: 'Ética y Cumplimiento',
      description: 'En JJC estamos comprometidos con la ética y la transparencia, elementos claves de nuestro modelo de gestión.',
      titlehero: 'CONSTRUYENDO CONFIANZA',
    },
    en: {
      title: 'Ethics and Compliance',
      description: 'At JJC, we are committed to ethics and transparency, key elements of our management model.',
      titlehero: 'BUILDING TRUST',
    },
  };

  const content = ethicsContent[currentLanguage.code] || ethicsContent['es'];

  if (!content) {
    return <div>Error: Content not found for the selected language.</div>;
 }


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Sección: Portada */}

<section className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white overflow-hidden">
  {/* Imagen de fondo animada con overlay */}
  <motion.div
    initial={{ scale: 1.1, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.5, ease: 'easeOut' }}
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/public/projects/carretera-viscachani/IMG_3009.JPG')",
    }}
  >
    <div className="absolute inset-0 bg-black/60" />
  </motion.div>

  {/* Contenido frontal */}
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.2,
        },
      },
    }}
    className="relative z-10 text-center px-6 max-w-4xl"
  >
    {/* Subtítulo */}
    <motion.h5
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="uppercase tracking-widest text-[#f5f8f8] text-sm md:text-base mb-4 font-semibold"
    >
      {currentLanguage.code === 'es' ? 'NUESTRA HISTORIA' : 'OUR HISTORY'}
    </motion.h5>

    {/* Título */}
    <motion.h1
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
    >
     
      <span className="block text-[#00B9CE]">
        {content.titlehero}
      </span>
    </motion.h1>

    {/* Descripción */}
    <motion.p
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ delay: 0.6 }}
      className="mt-6 text-lg md:text-xl font-light text-white"
    >
      {currentLanguage.code === 'es'
        ? 'Más de 25 años de experiencia construyendo infraestructura de calidad que transforma comunidades y conecta el futuro del Perú.'
        : 'Over 25 years of experience building quality infrastructure that connects communities and the future of Peru.'}
    </motion.p>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="mt-10"
    >
      <div className="w-3 h-3 bg-[#00B9CE] rounded-full mx-auto animate-bounce"></div>
    </motion.div>
  </motion.div>
</section>


{/* Sección: Gestión ética y de cumplimiento corporativo */}
<section className="w-full bg-white py-20 text-gray-800">
  <div className="container-custom px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center gap-10">
    
    {/* Imagen */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full md:w-1/2"
    >
      <img
        src="/29689e5c-4773-4e79-8373-4d72668bca56.png"
        alt="Trabajador JJC"
        className="rounded-lg shadow-lg object-cover w-full"
      />
    </motion.div>

    {/* Texto y botón */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full md:w-1/2"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-[#009e49] mb-6 leading-tight">
        {currentLanguage.code === 'es'
          ? 'Gestión ética y de cumplimiento corporativo'
          : 'Ethical and Corporate Compliance Management'}
      </h3>

      <p className="mb-4 text-justify text-gray-700">
        {currentLanguage.code === 'es'
          ? 'En JJC estamos totalmente comprometidos con la ética y la transparencia, elementos claves de nuestro modelo de gestión y que responden a la actual confianza depositada en nosotros por todos nuestros stakeholders.'
          : 'At JJC, we are fully committed to ethics and transparency—key elements of our management model that reflect the trust placed in us by all our stakeholders.'}
      </p>

      <p className="mb-6 text-justify text-gray-700">
        {currentLanguage.code === 'es'
          ? 'Por ello, hoy les invitamos a revisar nuestro Código de Ética en el cual están establecidos los lineamientos que, en concordancia con los valores de ética y transparencia, y las buenas prácticas corporativas, guían la conducta y la forma en la que en JJC tomamos decisiones, buscando generar un impacto positivo tanto en nuestra organización como en la sociedad en general.'
          : 'We invite you to review our Code of Ethics, which outlines the guidelines aligned with our values of ethics and transparency and best corporate practices. These guide our conduct and decision-making, seeking to create a positive impact in our organization and society.'}
      </p>

      <a
        href="/codigo-etica"
        className="inline-block px-6 py-3 bg-[#009e49] text-white hover:bg-[#007a3a] font-semibold rounded-full shadow-md transition-all duration-300"
      >
        {currentLanguage.code === 'es' ? 'Ver Código de Ética' : 'View Code of Ethics'}
      </a>
    </motion.div>
  </div>
</section>

<div className="w-full h-10 bg-white"></div>



{/* Sección: Sistema de Ética y Cumplimiento */}
<section className="w-full bg-gradient-to-r from-[#00A651] to-[#4b93bd] py-20 text-white">
  <div className="container-custom px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center gap-12">
    
    {/* Texto */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full md:w-1/2 text-white"
    >
      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        <span className="text-[#00B9CE] mr-2">&gt;</span>
        {currentLanguage.code === 'es'
          ? 'Sistema de Ética y Cumplimiento'
          : 'Ethics and Compliance System'}
      </h3>

      <p className="mb-4 text-lg leading-relaxed text-justify">
        {currentLanguage.code === 'es'
          ? 'Nuestro Sistema de Ética y Cumplimiento (Corporate Compliance) cuenta con lineamientos y procedimientos específicos que sirven de guía y control para un correcto comportamiento y/o una adecuada toma de decisiones frente a los riesgos de incumplimiento que, por la naturaleza de nuestras actividades, podrían presentarse.'
          : 'Our Ethics and Compliance System (Corporate Compliance) includes specific guidelines and procedures that serve as guidance and control for appropriate behavior and decision-making in response to compliance risks that may arise due to the nature of our activities.'}
      </p>

      <p className="text-lg leading-relaxed text-justify">
        {currentLanguage.code === 'es'
          ? 'Estos lineamientos y directrices son de aplicación general para todos los colaboradores de JJC (incluso para terceros que realicen actividades a nombre de esta) y su cumplimiento es responsabilidad individual de todos quienes formamos parte de la compañía.'
          : 'These guidelines and directives apply to all JJC employees (including third parties acting on its behalf), and compliance is the individual responsibility of everyone who is part of the company.'}
      </p>
    </motion.div>

    {/* Imagen */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full md:w-1/2"
    >
      <img
        src="/bf8da4da-72cd-4cd1-b00c-3eb9dce5d047.png"
        alt={currentLanguage.code === 'es'
          ? "Sistema de Ética y Cumplimiento"
          : "Ethics and Compliance System"}
        className="w-full rounded-xl shadow-xl"
      />
    </motion.div>
  </div>

  {/* Pie de nota legal */}
  <div className="text-sm text-white text-center mt-10 px-6">
    {currentLanguage.code === 'es'
      ? '*Componente requerido por la Ley N° 30424 y el D.L N° 1352'
      : '*Component required by Law No. 30424 and Legislative Decree No. 1352'}
  </div>
</section>

<div className="w-full h-10 bg-white"></div>

{/* Sección: Nuestra Línea Ética */}
<section className="w-full bg-gradient-to-r from-white via-[#f4f9f6] to-white py-20 text-[#1a1a1a]">
  <div className="container-custom px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center gap-12 backdrop-blur-md">
    
    {/* Texto */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full md:w-1/2"
    >
      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#009e49]">
        <span className="text-[#00B9CE] mr-2">&gt;</span>
        {currentLanguage.code === 'es' ? 'Nuestra Línea Ética' : 'Our Ethics Line'}
      </h3>

      <p className="mb-4 text-justify text-gray-700">
        {currentLanguage.code === 'es'
          ? 'Nuestra Línea Ética “Valores en Acción” es operada por una empresa consultora reconocida local e internacionalmente, donde clientes, colaboradores, proveedores, subcontratistas y/o, en general, cualquier persona interesada, pueden reportar conductas no éticas de la compañía, sus colaboradores, proveedores y/o socios de negocio.'
          : 'Our Ethics Line "Valores en Acción" is operated by a consulting firm recognized locally and internationally, where clients, employees, suppliers, subcontractors, and in general, any interested party can report unethical behavior by the company, its employees, suppliers, or business partners.'}
      </p>

      <p className="mb-6 text-justify text-gray-700">
        {currentLanguage.code === 'es'
          ? 'Es un sistema confidencial, anónimo e independiente constituido por cinco canales que sirven para comunicar cualquier incumplimiento a nuestro Código de Ética y/o cualquier falta o sospecha de conductas no éticas en nuestra organización.'
          : 'It is a confidential, anonymous, and independent system consisting of five channels that allow reporting any violation of our Code of Ethics and/or any unethical conduct or suspicion within our organization.'}
      </p>

      <a
        href="/linea-etica"
        className="inline-block px-6 py-3 bg-[#009e49] text-white font-semibold rounded-full shadow-md hover:bg-[#007a3a] transition-all duration-300"
      >
        {currentLanguage.code === 'es' ? 'Línea Ética' : 'Ethics Line'}
      </a>
    </motion.div>

    {/* Imagen */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full md:w-1/2"
    >
      <img
        src="/09819322-1e43-4907-9ba5-881cb66f4874.png"
        alt={currentLanguage.code === 'es' ? "Línea Ética" : "Ethics Line"}
        className="rounded-lg shadow-xl w-full object-cover"
      />
    </motion.div>
  </div>
</section>


{/* Sección: Planteamiento de Inquietudes y Opiniones */}
<section className="w-full bg-gradient-to-tr from-[#E1F5F2] via-[#C0F0E3] to-[#00B9CE] py-16 text-[#022c22]">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="container-custom px-6 md:px-16 lg:px-24 text-center"
  >
    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#009e49]">
      <span className="text-[#00B9CE] mr-2">&gt;</span>
      {currentLanguage.code === 'es'
        ? 'Planteamiento de Inquietudes y Opiniones'
        : 'Raising Concerns and Opinions'}
    </h3>

    <p className="text-lg leading-relaxed max-w-4xl mx-auto text-[#022c22]">
      {currentLanguage.code === 'es' ? (
        <>
          Si tienes alguna inquietud y/o opinión con respecto al Sistema de Ética y Cumplimiento (SEC),
          contacta a nuestro Gerente de Cumplimiento Corporativo o escríbenos a
          <br />
          <a href="mailto:prevencioncorporativa@jjc.com.pe" className="underline font-medium text-[#007a3a] hover:text-[#005f2f] transition">
            prevencioncorporativa@jjc.com.pe
          </a>{" "}
          /{" "}
          <a href="mailto:oficialdecumplimiento@jjc.com.pe" className="underline font-medium text-[#007a3a] hover:text-[#005f2f] transition">
            oficialdecumplimiento@jjc.com.pe
          </a>
        </>
      ) : (
        <>
          If you have any concerns and/or opinions regarding the Ethics and Compliance System (SEC),
          please contact our Corporate Compliance Manager or write to us at
          <br />
          <a href="mailto:prevencioncorporativa@jjc.com.pe" className="underline font-medium text-[#007a3a] hover:text-[#005f2f] transition">
            prevencioncorporativa@jjc.com.pe
          </a>{" "}
          /{" "}
          <a href="mailto:oficialdecumplimiento@jjc.com.pe" className="underline font-medium text-[#007a3a] hover:text-[#005f2f] transition">
            oficialdecumplimiento@jjc.com.pe
          </a>
        </>
      )}
    </p>
  </motion.div>
</section>

{/* Sección: Políticas y Certificaciones */}
<section className="w-full bg-[#eaf3fd] py-20">
  <div className="container-custom px-6 md:px-16 lg:px-24">

    {/* Título principal */}
    <h3 className="text-3xl md:text-4xl font-bold text-[#022c22] mb-12">
      <span className="text-[#009e49] mr-2">&gt;</span>
      {currentLanguage.code === 'es'
        ? 'Nuestras Políticas Corporativas'
        : 'Our Corporate Policies'}
    </h3>

    {/* Tarjetas de políticas */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {/* Tarjeta 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-md">
        <img src="/b8b014a6-a73b-44f9-92b5-ab0cd6886c83.png" alt="Código de ética" className="w-12 h-12 mb-4" />
        <h4 className="text-xl font-bold mb-2 text-[#022c22]">
          {currentLanguage.code === 'es' ? 'Código de ética' : 'Code of Ethics'}
        </h4>
        <p className="text-[#444] mb-6">
          {currentLanguage.code === 'es'
            ? 'Cumplimos las normas que guían nuestra conducta y la forma en la que tomamos decisiones.'
            : 'We comply with the standards that guide our conduct and the way we make decisions.'}
        </p>
        <a
          href="/docs/codigo-de-etica.pdf"
          download
          className="inline-block px-6 py-3 bg-gradient-to-r from-[#00B9CE] to-[#009e49] hover:from-[#009e49] hover:to-[#00B9CE] text-white rounded-full font-semibold transition-all"
        >
          {currentLanguage.code === 'es' ? 'Descargar' : 'Download'}
        </a>
      </div>

      {/* Tarjeta 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-md">
        <img src="/aeb3b856-d1ba-4860-82ba-2eb43b7f26c6.png" alt="Libre competencia" className="w-12 h-12 mb-4" />
        <h4 className="text-xl font-bold mb-2 text-[#022c22]">
          {currentLanguage.code === 'es' ? 'Libre competencia' : 'Fair Competition'}
        </h4>
        <p className="text-[#444] mb-6">
          {currentLanguage.code === 'es'
            ? 'JJC compite activa y honestamente en los mercados sobre principios éticos y en cumplimiento de la normativa aplicable y mejores prácticas internacionales.'
            : 'JJC competes actively and honestly in markets based on ethical principles and in compliance with applicable regulations and best international practices.'}
        </p>
        <a
          href="/docs/libre-competencia.pdf"
          download
          className="inline-block px-6 py-3 bg-gradient-to-r from-[#00B9CE] to-[#009e49] hover:from-[#009e49] hover:to-[#00B9CE] text-white rounded-full font-semibold transition-all"
        >
          {currentLanguage.code === 'es' ? 'Descargar' : 'Download'}
        </a>
      </div>

      {/* Tarjeta 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-md">
        <img src="/9fa1eb53-ca9b-4bba-b390-6059d923cc22.png" alt="Prevención de delitos" className="w-12 h-12 mb-4" />
        <h4 className="text-xl font-bold mb-2 text-[#022c22]">
          {currentLanguage.code === 'es' ? 'Política de Prevención de Delitos' : 'Crime Prevention Policy'}
        </h4>
        <p className="text-[#444] mb-6">
          {currentLanguage.code === 'es'
            ? 'Promovemos la integridad y prevenimos actos relacionados con corrupción, lavado de activos o el financiamiento del terrorismo.'
            : 'We promote integrity and prevent acts related to corruption, money laundering, or terrorism financing.'}
        </p>
        <a
          href="/docs/prevencion-delitos.pdf"
          download
          className="inline-block px-6 py-3 bg-gradient-to-r from-[#00B9CE] to-[#009e49] hover:from-[#009e49] hover:to-[#00B9CE] text-white rounded-full font-semibold transition-all"
        >
          {currentLanguage.code === 'es' ? 'Descargar' : 'Download'}
        </a>
      </div>

      {/* Tarjeta 4 */}
      <div className="bg-white p-8 rounded-2xl shadow-md">
        <img src="/b8b014a6-a73b-44f9-92b5-ab0cd6886c83.png" alt="Política de cumplimiento" className="w-12 h-12 mb-4" />
        <h4 className="text-xl font-bold mb-2 text-[#022c22]">
          {currentLanguage.code === 'es' ? 'Política de cumplimiento' : 'Compliance Policy'}
        </h4>
        <p className="text-[#444] mb-6">
          {currentLanguage.code === 'es'
            ? 'Promovemos el cumplimiento de la legislación aplicable y las obligaciones adoptadas para mejorar nuestro sistema de ética y cumplimiento.'
            : 'We promote compliance with applicable laws and adopted obligations to enhance our ethics and compliance system.'}
        </p>
        <a
          href="/docs/politica-cumplimiento.pdf"
          download
          className="inline-block px-6 py-3 bg-gradient-to-r from-[#00B9CE] to-[#009e49] hover:from-[#009e49] hover:to-[#00B9CE] text-white rounded-full font-semibold transition-all"
        >
          {currentLanguage.code === 'es' ? 'Descargar' : 'Download'}
        </a>
      </div>
    </div>

    {/* Certificaciones */}
    <div className="text-center">
      <h3 className="text-3xl md:text-4xl font-bold text-[#022c22] mb-10">
        <span className="text-[#009e49] mr-2">&gt;</span>
        {currentLanguage.code === 'es' ? 'Certificaciones' : 'Certifications'}
      </h3>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Certificación 1 */}
        <div className="text-center">
          <img src="/cert-iso37001.png" alt="ISO 37001" className="mx-auto w-[160px] mb-4" />
          <p className="text-[#022c22] font-semibold">ISO 37001:2016</p>
          <p className="font-bold text-[#022c22]">
            {currentLanguage.code === 'es' ? 'Gestión Antisoborno' : 'Anti-Bribery Management'}
          </p>
        </div>

        {/* Certificación 2 */}
        <div className="text-center">
          <img src="/cert-iso37301.png" alt="ISO 37301" className="mx-auto w-[160px] mb-4" />
          <p className="text-[#022c22] font-semibold">ISO 37301:2021</p>
          <p className="font-bold text-[#022c22]">
            {currentLanguage.code === 'es' ? 'Gestión Compliance' : 'Compliance Management'}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


</motion.div>


  );
};

export default EthicsPage;
