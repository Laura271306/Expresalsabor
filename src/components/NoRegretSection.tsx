import React from 'react';
import SectionWrapper from './SectionWrapper';
import CtaButton from './CtaButton';
import { Shield, CheckCircle, Clock } from 'lucide-react';

const NoRegretSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Shield className="w-16 h-16 mx-auto mb-4 text-brand-primary" />
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Compra hoy y no te arrepientas
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Garantía total de satisfacción o te devolvemos tu dinero
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 bg-brand-light/30 rounded-lg">
            <CheckCircle className="w-12 h-12 mx-auto mb-3 text-brand-secondary" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Acceso Inmediato
            </h3>
            <p className="text-gray-600">
              Descarga tu kit completo en menos de 2 minutos después de la compra
            </p>
          </div>

          <div className="p-6 bg-brand-light/30 rounded-lg">
            <Clock className="w-12 h-12 mx-auto mb-3 text-brand-secondary" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              7 Días de Garantía
            </h3>
            <p className="text-gray-600">
              Si no estás satisfecho, te devolvemos el 100% de tu dinero sin preguntas
            </p>
          </div>

          <div className="p-6 bg-brand-light/30 rounded-lg">
            <Shield className="w-12 h-12 mx-auto mb-3 text-brand-secondary" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Compra Segura
            </h3>
            <p className="text-gray-600">
              Pago protegido y encriptado. Tus datos están 100% seguros
            </p>
          </div>
        </div>

        <div className="bg-red-50 border-2 border-red-700 rounded-lg p-6 mb-8">
          <p className="text-xl md:text-2xl font-bold text-red-700 mb-2">
            ⚡ Precio promocional válido solo hoy: US$ 5,50
          </p>
          <p className="text-lg text-gray-700">
            Mañana vuelve al precio normal de US$ 19,90
          </p>
        </div>

        <CtaButton>
          Garantizado: quiero mi kit ahora
        </CtaButton>
      </div>
    </SectionWrapper>
  );
};

export default NoRegretSection;
