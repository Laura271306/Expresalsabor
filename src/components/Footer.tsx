import React from 'react';
import CtaButton from './CtaButton';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50">
      <div className="py-12 md:py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-2">
          Expres al Sabor – Kit Maestro de Recetas
        </h3>
        <p className="text-lg mb-2 text-gray-600">(Edición Premium)</p>
        <p className="text-4xl font-light mb-6 text-brand-primary">
          US$ 5,50
        </p>
        <p className="text-gray-500 mb-8">acceso inmediato</p>
        
        <CtaButton className="text-2xl px-12 py-6 font-extrabold mb-8">
          Sí, quiero cocinar mejor hoy
        </CtaButton>
      </div>

      <div className="border-t border-gray-200 py-6 text-center">
        <p className="text-sm text-gray-500">
          © 2024 Expres al Sabor. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;