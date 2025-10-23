import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ShieldCheck } from 'lucide-react';

const RiskFreeGuaranteeSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light-gray">
      <div className="p-12 bg-green-50 border border-green-200 rounded-xl text-center max-w-2xl mx-auto">
        <ShieldCheck className="w-12 h-12 mx-auto text-cta-green mb-6" />
        <h3 className="text-2xl font-serif font-light text-gray-900 mb-4">
          Pruébalo 7 días sin riesgo.
        </h3>
        <p className="text-lg text-gray-600">
          Si no te ahorra tiempo o no mejoras la textura, <span className="font-bold text-cta-green">te devolvemos el dinero.</span> Sin preguntas.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default RiskFreeGuaranteeSection;