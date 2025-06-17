import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#00A651] text-white pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo y nombre */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
              <span className="text-[#00A651] font-bold text-xl">GM</span>
            </div>
            <div>
              <h2 className="text-xl font-bold">GRUPO MERINO</h2>
              <p className="text-sm text-white/90">INGENIEROS S.A.C.</p>
            </div>
          </div>
          <p className="text-sm text-white/80">
            Soluciones integrales en ingeniería y construcción para el desarrollo sostenible.
          </p>
        </div>

        {/* Enlaces útiles */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Inicio</a></li>
            <li><a href="/about" className="hover:underline">Nosotros</a></li>
            <li><a href="/services" className="hover:underline">Servicios</a></li>
            <li><a href="/projects" className="hover:underline">Proyectos</a></li>
            <li><a href="/contact" className="hover:underline">Contacto</a></li>
          </ul>
        </div>

        {/* Información de contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
          <ul className="space-y-3 text-sm text-white/90">
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>066-635228</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>wmerinosgrupo@merino.com.pe</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>
                Calle De Laureles Mz "M" Lt 5 Urb. Alto la Merced, Huancayo
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Línea inferior y derechos */}
      <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm text-white/70">
        © {new Date().getFullYear()} GRUPO MERINO INGENIEROS S.A.C. | Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;