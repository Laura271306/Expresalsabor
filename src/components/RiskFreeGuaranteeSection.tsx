import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ShieldCheck } from 'lucide-react';

const RiskFreeGuaranteeSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light-gray">
      <div className="p-8 md:p-16 border-4 border-brand-primary rounded-2xl text-center max-w-3xl mx-auto bg-white shadow-2xl shadow-brand-primary/20">
        
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-brand-primary text-white shadow-lg">
            <ShieldCheck className="w-10 h-10" />
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight">
          <span className="text-brand-primary">Garantía:</span> Pruébalo 7 días sin riesgo.
        </h3>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
          Si no te ahorra tiempo o no mejoras la textura,
        </p>
        
        <p className="text-2xl md:text-3xl font-extrabold text-brand-secondary bg-brand-success-bg inline-block px-4 py-2 rounded-lg">
          te devolvemos el 100% del dinero.
        </p>
        
        <p className="text-lg text-gray-500 mt-4">
          Sin preguntas.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default RiskFreeGuaranteeSection;