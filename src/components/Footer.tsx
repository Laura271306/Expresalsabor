import React from 'react';
import CtaButton from './CtaButton';

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Gradient CTA Bar */}
      <div className="bg-gradient-to-r from-cta-orange via-yellow-600 to-mint-sage py-12 text-white text-center">
        <div className="container max-w-4xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-1">
            AirFryer Perfecta – Kit Maestro de Recetas
          </h3>
          <p className="text-lg mb-2">(Edición Premium)</p>
          <p className="text-5xl font-extrabold mb-4">
            US$ 5,50
          </p>
          <p className="text-sm mb-6">acceso inmediato</p>
          
          <CtaButton className="bg-white text-cta-orange hover:bg-gray-100 shadow-none">
            Sí, quiero cocinar mejor hoy
          </CtaButton>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-deep-olive py-4 text-center text-sm text-white">
        <p>© 2024 AirFryer Perfecta. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;